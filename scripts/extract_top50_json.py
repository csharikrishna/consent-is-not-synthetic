import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MD_PATH = ROOT / "research" / "private-snapshots" / "huggingface_top50_nsfw_models_updated.md"
OUT_JSON = ROOT / "web" / "lib" / "top50_hf.json"

txt = MD_PATH.read_text(encoding="utf-8")

# Parse ranking table
table_part = txt.split("## 2. Repository-by-repository notes", 1)[0]
table_rows = {}
for m in re.finditer(
    r"^\|\s*(\d+)\s*\|\s*\[`([^`]+)`\]\((https://huggingface\.co/[^)]+)\)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|",
    table_part,
    re.MULTILINE,
):
    rank = int(m.group(1))
    table_rows[rank] = {
        "rank": rank,
        "repoId": m.group(2).strip(),
        "url": m.group(3).strip(),
        "likes": m.group(4).strip(),
        "downloads": m.group(5).strip(),
        "paramBadge": m.group(6).strip(),
    }

# Parse repository-by-repository notes
notes_part = txt.split("## 2. Repository-by-repository notes", 1)[1].split("## 10. Technical audit supplement", 1)[0]
chunks = re.split(r"\n### (\d+)\.\s+", "\n" + notes_part)

records = []
for i in range(1, len(chunks), 2):
    rank = int(chunks[i])
    body = chunks[i + 1]
    title = body.splitlines()[0].strip()

    def field(name: str) -> str:
        m = re.search(rf"-\s*\*\*{re.escape(name)}:\*\*\s*(.+)", body)
        return m.group(1).strip() if m else ""

    row = table_rows.get(rank, {"rank": rank, "repoId": field("Repository ID").strip("`"), "url": field("Model link"), "likes": "", "downloads": "", "paramBadge": ""})
    records.append({
        "rank": rank,
        "title": title,
        "repoId": row["repoId"],
        "url": row["url"],
        "likes": row["likes"],
        "downloads": row["downloads"],
        "paramBadge": row["paramBadge"],
        "typeFormat": field("Type / format"),
        "description": field("Description"),
        "baseModel": field("Base model / dependency"),
        "license": field("Displayed license"),
        "updated": field("Last updated (search-page display)"),
        "verificationNote": field("Verification note"),
    })

assert len(records) == 50, f"Expected 50 records, got {len(records)}"
OUT_JSON.write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Wrote {len(records)} structured records to {OUT_JSON}")
