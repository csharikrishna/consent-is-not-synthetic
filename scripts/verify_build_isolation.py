import csv
import json
import re
import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    fitz = None

try:
    from pypdf import PdfReader
except ImportError:
    PdfReader = None


def extract_pdf_text(path: Path) -> str:
    if fitz is not None:
        doc = fitz.open(str(path))
        text = "\n".join(page.get_text("text") for page in doc)
        doc.close()
        return text
    if PdfReader is not None:
        reader = PdfReader(str(path))
        return "\n".join((page.extract_text() or "") for page in reader.pages)
    raise RuntimeError("No PDF text extraction library (fitz or pypdf) available")


def main() -> int:
    root = Path(__file__).resolve().parent.parent
    out_dir = root / "web" / "out"
    canonical_claims_path = root / "canonical_data" / "claims.json"
    report_path = root / "audit-results" / "deliverable-scan.json"

    findings = {
        "missing_dirs": [],
        "empty_build": [],
        "read_errors": [],
        "leak_722": [],
        "leak_68_pct": [],
        "leak_unicef04_withheld": [],
        "leak_section79_notice": [],
        "leak_2_3_hrs": [],
        "leak_withheld_display_contradiction": [],
        "archived_pdf_notes": [],
    }

    # Verify required directories fail-closed
    required_dirs = [
        ("out_dir", out_dir),
        ("out_downloads", out_dir / "downloads"),
        ("regulatory_submissions", root / "regulatory_submissions"),
        ("press_kit", root / "press_kit"),
    ]
    for name, d in required_dirs:
        if not d.exists() or not d.is_dir():
            findings["missing_dirs"].append({"name": name, "path": str(d.relative_to(root)).replace("\\", "/")})

    html_files = list(out_dir.rglob("*.html")) if out_dir.exists() else []
    js_files = list(out_dir.rglob("*.js")) if out_dir.exists() else []
    maps = list(out_dir.rglob("*.map")) if out_dir.exists() else []
    xlsx = list(out_dir.rglob("*.xlsx")) if out_dir.exists() else []
    envs = list(out_dir.rglob(".env*")) if out_dir.exists() else []

    if out_dir.exists() and len(html_files) == 0:
        findings["empty_build"].append("web/out contains 0 HTML files")

    print(f"Built HTML files: {len(html_files)}, JS files: {len(js_files)}")
    print(f"Source maps in out/: {len(maps)}, Excel: {len(xlsx)}, Env: {len(envs)}")

    missing_assets = []
    for p in html_files:
        txt = p.read_text(encoding="utf-8", errors="ignore")
        for m in re.findall(r'href="(/(?:downloads|assets)/[^"?#]+)"', txt):
            target = out_dir / m.lstrip("/")
            if not target.exists():
                missing_assets.append((str(p.relative_to(root)), m))
    print("Missing download/asset links:", missing_assets)

    # Load canonical claim eligibility
    withheld_claims = []
    if canonical_claims_path.exists():
        claims = json.loads(canonical_claims_path.read_text(encoding="utf-8"))
        withheld_claims = [c for c in claims if not c.get("publication_eligible", True)]
    withheld_ids = [c["id"] for c in withheld_claims]

    # Validate web/lib/data.json does not publish ineligible claims
    web_data_path = root / "web" / "lib" / "data.json"
    ineligible_in_web_data = []
    if web_data_path.exists():
        web_data = json.loads(web_data_path.read_text(encoding="utf-8"))
        for c in web_data.get("claims", []):
            if not c.get("publication_eligible", True) or c.get("id") in withheld_ids:
                ineligible_in_web_data.append(c.get("id"))

    # Validate claim-verification-final.csv and citation-audit exports against canonical eligibility
    claim_csv_issues = []
    claim_csv_path = out_dir / "downloads" / "claim-verification-final.csv"
    if claim_csv_path.exists():
        with claim_csv_path.open("r", encoding="utf-8", newline="") as f:
            for row in csv.DictReader(f):
                rid = row.get("id", "")
                elig = str(row.get("publication_eligible", "")).lower()
                wording = row.get("exact_wording", "")
                if rid in withheld_ids and (elig == "true" or re.search(r"fourfold higher|suicidal thoughts", wording, re.I)):
                    claim_csv_issues.append(f"claim-verification-final.csv:{rid}")

    citation_csv_path = out_dir / "downloads" / "citation-audit.csv"
    if citation_csv_path.exists():
        with citation_csv_path.open("r", encoding="utf-8", newline="") as f:
            for row in csv.DictReader(f):
                elig = str(row.get("publication_eligible", "")).lower()
                vclaim = row.get("verified_claim", "")
                if elig == "false" and re.search(r"fourfold higher|suicidal thoughts", vclaim, re.I):
                    claim_csv_issues.append(f"citation-audit.csv:id={row.get('id')}")

    citation_json_path = out_dir / "downloads" / "citation-audit.json"
    if citation_json_path.exists():
        for item in json.loads(citation_json_path.read_text(encoding="utf-8")):
            if not item.get("publication_eligible", True) and re.search(r"fourfold higher|suicidal thoughts", item.get("verified_claim", ""), re.I):
                claim_csv_issues.append(f"citation-audit.json:id={item.get('id')}")

    text_exts = {".html", ".js", ".json", ".txt", ".xml", ".csv", ".md"}
    expected_scan_targets = []
    skipped_files = []

    # Collect from out_dir
    if out_dir.exists():
        for p in sorted(out_dir.rglob("*")):
            if p.is_file():
                if p.suffix.lower() in text_exts or p.suffix.lower() == ".pdf":
                    expected_scan_targets.append(p)
                else:
                    skipped_files.append({
                        "file": str(p.relative_to(root)).replace("\\", "/"),
                        "reason": f"non-text asset ({p.suffix.lower()})"
                    })

    # Collect from public doc directories
    for folder in ("regulatory_submissions", "press_kit"):
        d = root / folder
        if d.exists():
            for p in sorted(d.glob("*")):
                if p.is_file():
                    if p.suffix.lower() in text_exts or p.suffix.lower() == ".pdf":
                        expected_scan_targets.append(p)
                    else:
                        skipped_files.append({
                            "file": str(p.relative_to(root)).replace("\\", "/"),
                            "reason": f"non-text asset ({p.suffix.lower()})"
                        })

    archived_pdfs = {"v1-journal.pdf", "v2-journal.pdf", "v3-journal.pdf"}
    scanned_files = []
    successfully_checked_count = 0

    for p in expected_scan_targets:
        rel = str(p.relative_to(root)).replace("\\", "/")
        is_pdf = p.suffix.lower() == ".pdf"
        txt = ""
        try:
            if is_pdf:
                txt = extract_pdf_text(p)
                if not txt.strip():
                    raise ValueError("Extracted PDF text is empty")
            else:
                txt = p.read_text(encoding="utf-8")
        except Exception as exc:
            findings["read_errors"].append({"file": rel, "error": str(exc)})
            print(f"FAIL-CLOSED ERROR reading {rel}: {exc}")
            continue

        successfully_checked_count += 1
        scanned_files.append({
            "file": rel,
            "kind": "pdf" if is_pdf else p.suffix.lower().lstrip("."),
            "chars": len(txt)
        })

        is_archive_pdf = p.name in archived_pdfs
        is_governance_ledger = any(
            tok in rel
            for tok in (
                "corrections",
                "top50-hf-metadata-snapshot",
                "public-data-manifest",
                "claim-verification-final.csv",
                "unresolved-evidence-register.md",
                "final-release-decision.md",
            )
        )
        is_v4_withdrawal_note = p.name in ("v4-journal.pdf", "Synthetic_Abuse_Research_V4.pdf") and (
            "exploratory 722-model search" in txt.lower() and "withdrawn" in txt.lower()
        )

        # 1. Withdrawn 722 count
        if not is_governance_ledger and not is_v4_withdrawal_note:
            cleaned = txt.replace("1,722", "")
            if re.search(r"\b722\b", cleaned):
                if is_archive_pdf:
                    findings["archived_pdf_notes"].append({"file": rel, "note": "Historical archive PDF retains 722 reference"})
                else:
                    findings["leak_722"].append(rel)

        # 2. Withdrawn 68% LoRA statistic
        if re.search(r"(?:over\s+68%|68%\s+of\s+(?:discovered|specialized)\s+abusive)", txt, re.IGNORECASE):
            if is_archive_pdf:
                findings["archived_pdf_notes"].append({"file": rel, "note": "Historical archive PDF retains 68% reference"})
            else:
                findings["leak_68_pct"].append(rel)

        # 3. Withheld UNICEF-04 fourfold causal wording
        if not is_governance_ledger and re.search(r"(?:~4x Higher Odds|fourfold higher odds)", txt, re.IGNORECASE):
            findings["leak_unicef04_withheld"].append(rel)

        # 4. Conflated "Section 79 takedown notice(s)"
        if re.search(r"Section 79 takedown notice", txt, re.IGNORECASE):
            findings["leak_section79_notice"].append(rel)

        # 5. Conflated "2–3 hrs" / "2-3 hours" India stat
        if re.search(r"2[–-]3\s*(?:hrs|hours)\b", txt, re.IGNORECASE):
            findings["leak_2_3_hrs"].append(rel)

        # 6. Contradictory "withheld from public display" in model governance
        if re.search(r"withheld from public display", txt, re.IGNORECASE):
            findings["leak_withheld_display_contradiction"].append(rel)

    failed = any([
        bool(findings["missing_dirs"]),
        bool(findings["empty_build"]),
        bool(findings["read_errors"]),
        maps, xlsx, envs, missing_assets, ineligible_in_web_data, claim_csv_issues,
        findings["leak_722"], findings["leak_68_pct"], findings["leak_unicef04_withheld"],
        findings["leak_section79_notice"], findings["leak_2_3_hrs"],
        findings["leak_withheld_display_contradiction"],
    ])

    report = {
        "status": "FAIL" if failed else "PASS",
        "expected_deliverable_count": len(expected_scan_targets),
        "successfully_checked_count": successfully_checked_count,
        "skipped_file_count": len(skipped_files),
        "html_count": len(html_files),
        "js_count": len(js_files),
        "source_maps_in_out": len(maps),
        "xlsx_in_out": len(xlsx),
        "env_in_out": len(envs),
        "missing_assets": missing_assets,
        "ineligible_in_web_data": ineligible_in_web_data,
        "claim_csv_issues": claim_csv_issues,
        "findings": findings,
        "scanned_files": scanned_files,
        "skipped_files": skipped_files,
    }
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")

    print(
        f"Checked {successfully_checked_count}/{len(expected_scan_targets)} deliverables "
        f"({len(skipped_files)} skipped non-text assets). Status: {report['status']} -> {report_path.relative_to(root)}"
    )
    for k, v in findings.items():
        if k != "archived_pdf_notes" and v:
            print(f"  {k}: {v}")

    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
