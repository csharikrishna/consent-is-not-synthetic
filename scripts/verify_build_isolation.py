import re
import sys
from pathlib import Path

out_dir = Path("web/out")
html_files = list(out_dir.rglob("*.html"))
js_files = list(out_dir.rglob("*.js"))
maps = list(out_dir.rglob("*.map"))
xlsx = list(out_dir.rglob("*.xlsx"))
envs = list(out_dir.rglob(".env*"))

print(f"Built HTML files: {len(html_files)}, JS files: {len(js_files)}")
print(f"Source maps in out/: {len(maps)}, Excel: {len(xlsx)}, Env: {len(envs)}")

missing_assets = []
for p in html_files:
    txt = p.read_text(encoding="utf-8", errors="ignore")
    for m in re.findall(r'href="(/(?:downloads|assets)/[^"?#]+)"', txt):
        target = out_dir / m.lstrip("/")
        if not target.exists():
            missing_assets.append((str(p), m))
print("Missing download/asset links:", missing_assets)

leak_722 = []
leak_unicef04 = []
for p in out_dir.rglob("*"):
    if not p.is_file() or p.suffix not in (".html", ".js", ".json", ".txt", ".xml"):
        continue
    txt = p.read_text(encoding="utf-8", errors="ignore")
    if "corrections" not in str(p) and "top50-hf-metadata-snapshot" not in str(p):
        # Ignore 1,722 axis tick
        cleaned = txt.replace("1,722", "")
        if re.search(r"\b722\b", cleaned):
            leak_722.append(str(p))
    if re.search(r"(?:UNICEF-04|~4x Higher Odds|fourfold higher odds)", txt, re.IGNORECASE):
        leak_unicef04.append(str(p))

print("722 leaks outside corrections:", leak_722)
print("Withheld UNICEF-04 leaks:", leak_unicef04)

if maps or xlsx or envs or missing_assets or leak_722 or leak_unicef04:
    sys.exit(1)
