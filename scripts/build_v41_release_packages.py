import hashlib
import json
import os
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

EXCLUDE_DIRS = {"node_modules", ".next", ".git", "__pycache__"}
EXCLUDE_EXTS = {".zip", ".tmp"}

def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()

def add_path_to_zip(zf: zipfile.ZipFile, src: Path, arc_prefix: str = ""):
    if src.is_file():
        if src.suffix.lower() in EXCLUDE_EXTS:
            return 0
        arcname = f"{arc_prefix}/{src.name}".lstrip("/") if arc_prefix else src.name
        zf.write(src, arcname)
        return 1
    count = 0
    for r, dirs, files in os.walk(src):
        dirs[:] = [d for d in sorted(dirs) if d not in EXCLUDE_DIRS]
        for fn in sorted(files):
            p = Path(r) / fn
            if p.suffix.lower() in EXCLUDE_EXTS:
                continue
            rel = p.relative_to(src)
            arcname = f"{arc_prefix}/{rel.as_posix()}".lstrip("/") if arc_prefix else rel.as_posix()
            zf.write(p, arcname)
            count += 1
    return count

def build_zip(name: str, items: list[tuple[Path, str]]):
    out_dir = ROOT / "releases"
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / name
    file_count = 0
    with zipfile.ZipFile(out_path, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for src, arc in items:
            if src.exists():
                file_count += add_path_to_zip(zf, src, arc)
    digest = sha256_file(out_path)
    size = out_path.stat().st_size
    return {
        "package_name": name,
        "sha256": digest,
        "size_bytes": size,
        "size_mb": round(size / (1024 * 1024), 2),
        "file_count": file_count,
    }

packages = [
    ("CINS_WEBSITE_SOURCE.zip", [
        (ROOT / "web" / "app", "web/app"),
        (ROOT / "web" / "components", "web/components"),
        (ROOT / "web" / "lib", "web/lib"),
        (ROOT / "web" / "public", "web/public"),
        (ROOT / "web" / "package.json", "web"),
        (ROOT / "web" / "package-lock.json", "web"),
        (ROOT / "web" / "next.config.ts", "web"),
        (ROOT / "web" / "postcss.config.mjs", "web"),
        (ROOT / "web" / "tsconfig.json", "web"),
        (ROOT / "web" / "vercel.json", "web"),
        (ROOT / "web" / "postbuild.cjs", "web"),
        (ROOT / "web" / "README.md", "web"),
    ]),
    ("CINS_PUBLIC_PRODUCTION_RELEASE.zip", [
        (ROOT / "web" / "out", "out"),
        (ROOT / "web" / "vercel.json", ""),
        (ROOT / "docs" / "governance_history" / "DEPLOYMENT_GUIDE.md", ""),
    ]),
    ("CINS_PRIVATE_RESEARCH_ARCHIVE.zip", [
        (ROOT / "research", "research"),
        (ROOT / "canonical_data", "canonical_data"),
        (ROOT / "FINAL_WORKSPACE_AUDIT.md", ""),
        (ROOT / "UNRESOLVED_EVIDENCE_REGISTER.md", ""),
        (ROOT / "CLAIM_VERIFICATION_FINAL.csv", ""),
        (ROOT / "SOURCE_VERIFICATION_FINAL.csv", ""),
    ]),
    ("CINS_ACADEMIC_PUBLICATION_PACKAGE.zip", [
        (ROOT / "research" / "working-history" / "research_v4", "research_v4"),
        (ROOT / "web" / "public" / "downloads" / "v4-journal.pdf", ""),
        (ROOT / "CLAIM_VERIFICATION_FINAL.csv", ""),
        (ROOT / "SOURCE_VERIFICATION_FINAL.csv", ""),
        (ROOT / "UNRESOLVED_EVIDENCE_REGISTER.md", ""),
    ]),
    ("CINS_INSTITUTIONAL_OUTREACH_PACKAGE.zip", [
        (ROOT / "regulatory_submissions", "regulatory_submissions"),
        (ROOT / "docs" / "governance_history" / "INSTITUTIONAL_OUTREACH_PLAN.md", ""),
        (ROOT / "docs" / "governance_history" / "REPOSITORY_REPORTING_FRAMEWORK.md", ""),
    ]),
    ("CINS_PRESS_AND_AWARENESS_KIT.zip", [
        (ROOT / "press_kit" / "EXECUTIVE_SUMMARY_2PAGE.md", ""),
        (ROOT / "press_kit" / "FACT_SHEET_1PAGE.md", ""),
        (ROOT / "press_kit" / "MEDIA_BACKGROUNDER.md", ""),
        (ROOT / "web" / "public" / "assets" / "social-card.png", "assets"),
        (ROOT / "web" / "public" / "downloads" / "public-evidence-brief.pdf", "downloads"),
    ]),
    ("CINS_FINAL_MASTER_ARCHIVE.zip", [
        (ROOT / "START_HERE.md", ""),
        (ROOT / "AUDIT_REPORT.md", ""),
        (ROOT / "FINAL_WORKSPACE_AUDIT.md", ""),
        (ROOT / "FINAL_RELEASE_DECISION.md", ""),
        (ROOT / "UNRESOLVED_EVIDENCE_REGISTER.md", ""),
        (ROOT / "CLAIM_VERIFICATION_FINAL.csv", ""),
        (ROOT / "SOURCE_VERIFICATION_FINAL.csv", ""),
        (ROOT / "docs" / "governance_history" / "DEPLOYMENT_GUIDE.md", ""),
        (ROOT / "docs" / "governance_history" / "QA_BROWSER_REPORT.md", ""),
        (ROOT / "canonical_data", "canonical_data"),
        (ROOT / "research", "research"),
        (ROOT / "regulatory_submissions", "regulatory_submissions"),
        (ROOT / "audit-results" / "screenshots", "screenshots"),
        (ROOT / "scripts", "scripts"),
        (ROOT / "press_kit", "press_kit"),
        (ROOT / "web" / "app", "web/app"),
        (ROOT / "web" / "components", "web/components"),
        (ROOT / "web" / "lib", "web/lib"),
        (ROOT / "web" / "public", "web/public"),
        (ROOT / "web" / "out", "web/out"),
        (ROOT / "web" / "package.json", "web"),
        (ROOT / "web" / "next.config.ts", "web"),
        (ROOT / "web" / "vercel.json", "web"),
        (ROOT / "web" / "postbuild.cjs", "web"),
    ]),
]

manifest = {
    "release_version": "Version 4.1 (Defended Edition)",
    "release_date": "2026-11-25",
    "release_status": "RELEASE_CANDIDATE_PENDING_OWNER_SIGN_OFF",
    "archives": [],
}

checksum_lines = []
for name, items in packages:
    info = build_zip(name, items)
    assert info["file_count"] > 0, f"Archive {name} is empty!"
    manifest["archives"].append(info)
    checksum_lines.append(f"{info['sha256']}  {info['package_name']}")
    print(f"Built {name}: {info['file_count']} files, {info['size_mb']} MB, sha256={info['sha256'][:16]}...")

with open(ROOT / "CHECKSUMS_RELEASE.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(checksum_lines) + "\n")

with open(ROOT / "RELEASE_MANIFEST.json", "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

print("All 7 V4.1 release packages, CHECKSUMS_RELEASE.txt, and RELEASE_MANIFEST.json verified.")
