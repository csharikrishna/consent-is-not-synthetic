import hashlib
import json
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "web"
OUT = WEB / "out"
AUDIT_DIR = ROOT / "audit-results"
AUDIT_DIR.mkdir(exist_ok=True)
(AUDIT_DIR / "screenshots").mkdir(exist_ok=True)

def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()

# 1. Repository Inventory
app_files = sorted(str(p.relative_to(ROOT)).replace("\\", "/") for p in (WEB / "app").rglob("*") if p.is_file())
comp_files = sorted(str(p.relative_to(ROOT)).replace("\\", "/") for p in (WEB / "components").rglob("*") if p.is_file())
lib_files = sorted(str(p.relative_to(ROOT)).replace("\\", "/") for p in (WEB / "lib").rglob("*") if p.is_file())
pub_files = sorted(str(p.relative_to(ROOT)).replace("\\", "/") for p in (WEB / "public").rglob("*") if p.is_file())
canon_files = sorted(str(p.relative_to(ROOT)).replace("\\", "/") for p in (ROOT / "canonical_data").rglob("*") if p.is_file())
routes = sorted(
    "/" if p.parent == (WEB / "app") else "/" + str(p.parent.relative_to(WEB / "app")).replace("\\", "/") + "/"
    for p in (WEB / "app").rglob("page.tsx")
)

repo_inv = {
    "routes": routes,
    "route_count": len(routes),
    "app_files": app_files,
    "component_files": comp_files,
    "lib_files": lib_files,
    "public_files": pub_files,
    "canonical_data_files": canon_files,
    "out_html_count": len(list(OUT.rglob("*.html"))) if OUT.exists() else 0,
    "out_js_count": len(list(OUT.rglob("*.js"))) if OUT.exists() else 0,
}
(AUDIT_DIR / "repository-inventory.json").write_text(json.dumps(repo_inv, indent=2), encoding="utf-8")

# 2. Component & interactions.js Audit
exports = {}
for p in (WEB / "components").rglob("*.tsx"):
    txt = p.read_text(encoding="utf-8")
    names = re.findall(r"export\s+(?:default\s+)?function\s+([A-Za-z0-9_]+)", txt)
    for n in names:
        exports[n] = {"file": str(p.relative_to(ROOT)).replace("\\", "/"), "consumers": []}

for p in list((WEB / "app").rglob("*.tsx")) + list((WEB / "components").rglob("*.tsx")):
    txt = p.read_text(encoding="utf-8")
    rel = str(p.relative_to(ROOT)).replace("\\", "/")
    for n in exports:
        if exports[n]["file"] == rel:
            continue
        if re.search(rf"\b{re.escape(n)}\b", txt):
            exports[n]["consumers"].append(rel)

interactions_txt = (WEB / "public" / "interactions.js").read_text(encoding="utf-8")
data_attrs = ["data-dropdown", "data-menu", "data-filter-root", "data-search", "data-select", "data-chart-group", "data-citation", "data-copy"]
attr_usage = {}
all_tsx = "\n".join(p.read_text(encoding="utf-8") for p in list((WEB / "app").rglob("*.tsx")) + list((WEB / "components").rglob("*.tsx")))
for attr in data_attrs:
    attr_usage[attr] = {
        "in_jsx_count": len(re.findall(re.escape(attr), all_tsx)),
        "in_interactions_js": attr in interactions_txt,
    }

comp_audit = {"exported_components": exports, "orphan_components": [k for k, v in exports.items() if not v["consumers"]], "data_attributes": attr_usage}
(AUDIT_DIR / "component-audit.json").write_text(json.dumps(comp_audit, indent=2), encoding="utf-8")

# 3. Citation Integrity Audit
data_json = json.loads((WEB / "lib" / "data.json").read_text(encoding="utf-8"))
sources = data_json["sources"]
source_ids = {s["id"] for s in sources}
referenced_ids = {}
for p in list((WEB / "app").rglob("*.tsx")) + list((WEB / "components").rglob("*.tsx")):
    txt = p.read_text(encoding="utf-8")
    rel = str(p.relative_to(ROOT)).replace("\\", "/")
    for m in re.findall(r"<Source\s+id=\{(\d+)\}", txt):
        sid = int(m)
        referenced_ids.setdefault(sid, []).append(rel)

missing_sources = [sid for sid in referenced_ids if sid not in source_ids]
incomplete_sources = [s["id"] for s in sources if not all(str(s.get(k, "")).strip() for k in ("publisher", "title", "locator", "limitations"))]
orphan_sources = sorted(sid for sid in source_ids if sid not in referenced_ids)
source_classification = {
    "cited_in_text": sorted(sid for sid in source_ids if sid in referenced_ids),
    "supplementary_verified": sorted(s["id"] for s in sources if s["id"] not in referenced_ids and s.get("verified")),
    "pending_url_verification": sorted(s["id"] for s in sources if not s.get("verified")),
}

# Check interactions.js source count vs data.json source count
js_source_ids = set(int(x) for x in re.findall(r'"id"\s*:\s*(\d+)', interactions_txt))
citation_audit = {
    "total_sources": len(sources),
    "referenced_count": len(referenced_ids),
    "missing_sources": missing_sources,
    "incomplete_sources": incomplete_sources,
    "orphan_source_ids": orphan_sources,
    "source_classification": source_classification,
    "interactions_js_source_count": len(js_source_ids),
    "sources_missing_from_interactions_js": sorted(source_ids - js_source_ids),
}
(AUDIT_DIR / "citation-audit.json").write_text(json.dumps(citation_audit, indent=2), encoding="utf-8")

# 4. Download & Asset Audit
downloads_dir = WEB / "public" / "downloads"
assets_dir = WEB / "public" / "assets"

all_code_txt = all_tsx + "\n" + (WEB / "lib" / "content.ts").read_text(encoding="utf-8") + "\n" + (WEB / "lib" / "seo.ts").read_text(encoding="utf-8")
download_refs = set(re.findall(r'/downloads/([A-Za-z0-9_.-]+\.[A-Za-z0-9]{2,5})', all_code_txt))
asset_refs = set(re.findall(r'/assets/([A-Za-z0-9_.-]+\.[A-Za-z0-9]{2,5})', all_code_txt))

downloads_inv = []
for p in sorted(downloads_dir.iterdir()):
    if p.is_file():
        downloads_inv.append({
            "filename": p.name,
            "size_bytes": p.stat().st_size,
            "sha256": sha256_file(p),
            "referenced_in_app": p.name in download_refs,
            "in_out": (OUT / "downloads" / p.name).exists(),
        })

assets_inv = []
for p in sorted(assets_dir.iterdir()):
    if p.is_file():
        assets_inv.append({
            "filename": p.name,
            "size_bytes": p.stat().st_size,
            "sha256": sha256_file(p),
            "referenced_in_app": p.name in asset_refs,
            "in_out": (OUT / "assets" / p.name).exists(),
        })

missing_download_targets = sorted(r for r in download_refs if not (downloads_dir / r).exists())
missing_asset_targets = sorted(r for r in asset_refs if not (assets_dir / r).exists())

(AUDIT_DIR / "download-audit.json").write_text(json.dumps({"files": downloads_inv, "missing_targets": missing_download_targets}, indent=2), encoding="utf-8")
(AUDIT_DIR / "asset-audit.json").write_text(json.dumps({"files": assets_inv, "missing_targets": missing_asset_targets}, indent=2), encoding="utf-8")

# 5. Security & Exposure Audit
env_files = [str(p.relative_to(ROOT)) for p in list((WEB / "public").rglob(".env*")) + list(OUT.rglob(".env*"))]
xlsx_files = [str(p.relative_to(ROOT)) for p in list((WEB / "public").rglob("*.xlsx")) + list(OUT.rglob("*.xlsx"))]
map_files = [str(p.relative_to(ROOT)) for p in OUT.rglob("*.map")]
leak_722 = []
for p in OUT.rglob("*"):
    if p.is_file() and p.suffix in (".html", ".js", ".json", ".txt"):
        rel = str(p.relative_to(ROOT)).replace("\\", "/")
        if any(tok in rel for tok in ("corrections", "top50-hf-metadata-snapshot", "public-data-manifest")):
            continue
        cleaned = p.read_text(encoding="utf-8", errors="ignore").replace("1,722", "")
        if re.search(r"\b722\b", cleaned):
            leak_722.append(rel)

sec_audit = {
    "env_files_exposed": env_files,
    "xlsx_files_exposed": xlsx_files,
    "source_maps_in_out": map_files,
    "722_leaks_outside_corrections": leak_722,
}
(AUDIT_DIR / "security-audit.json").write_text(json.dumps(sec_audit, indent=2), encoding="utf-8")

print("Orphan components:", comp_audit["orphan_components"])
print("Missing sources:", missing_sources)
print("Sources missing from interactions.js:", len(citation_audit["sources_missing_from_interactions_js"]))
print("Missing download targets:", missing_download_targets)
print("Unreferenced downloads:", [d["filename"] for d in downloads_inv if not d["referenced_in_app"]])
print("Missing asset targets:", missing_asset_targets)
print("722 leaks outside corrections:", leak_722)
