import os
import re
from pathlib import Path

out_dir = Path("web/out")
html_files = list(out_dir.rglob("*.html"))
js_files = list(out_dir.rglob("*.js"))
maps = list(out_dir.rglob("*.map"))
xlsx = list(out_dir.rglob("*.xlsx"))

print(f"Built HTML files: {len(html_files)}, JS files: {len(js_files)}")
print(f"Source maps in out/: {len(maps)}")
print(f"Excel files in out/: {len(xlsx)}")

missing_assets = []
for p in html_files:
    txt = p.read_text(encoding="utf-8", errors="ignore")
    for m in re.findall(r'href="(/(?:downloads|assets)/[^"?#]+)"', txt):
        target = out_dir / m.lstrip("/")
        if not target.exists():
            missing_assets.append((str(p), m))
print("Missing download/asset links:", missing_assets)

leak_722 = []
for p in html_files:
    if "corrections" in str(p):
        continue
    txt = p.read_text(encoding="utf-8", errors="ignore")
    if "722" in txt:
        leak_722.append(str(p))
print("722 occurrences outside /corrections/:", leak_722)
