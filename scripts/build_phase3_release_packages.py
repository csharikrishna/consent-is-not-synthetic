import os
import zipfile
import hashlib
import json

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, 'rb') as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

def create_phase3_packages():
    excludes_base = ['node_modules', '.next', '.git', '__pycache__', '.DS_Store']
    
    packages = []
    
    # 1. Release_Package_Website_Production_V4.zip (Standalone static web application web/out)
    pkg1 = 'Release_Package_Website_Production_V4.zip'
    pkg1_path = os.path.join(ROOT, pkg1)
    if os.path.exists(pkg1_path): os.remove(pkg1_path)
    print(f"Creating {pkg1}...")
    with zipfile.ZipFile(pkg1_path, 'w', zipfile.ZIP_DEFLATED) as z:
        out_dir = os.path.join(ROOT, 'web', 'out')
        for root, _, files in os.walk(out_dir):
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, out_dir)
                z.write(fp, os.path.join('public_html', rel))
    packages.append(pkg1)
    print(f"  -> {pkg1} ({os.path.getsize(pkg1_path)/(1024*1024):.2f} MB)")
    
    # 2. Release_Package_Research_Defended_V4.zip (Defended research manuscript)
    pkg2 = 'Release_Package_Research_Defended_V4.zip'
    pkg2_path = os.path.join(ROOT, pkg2)
    if os.path.exists(pkg2_path): os.remove(pkg2_path)
    print(f"Creating {pkg2}...")
    with zipfile.ZipFile(pkg2_path, 'w', zipfile.ZIP_DEFLATED) as z:
        res4_dir = os.path.join(ROOT, 'research', 'working-history', 'research_v4')
        for root, _, files in os.walk(res4_dir):
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, res4_dir)
                z.write(fp, os.path.join('latex_source', rel))
        for extra in ['V4_RESEARCH_CHANGELOG.md', 'CROSS_DOCUMENT_CONSISTENCY_REPORT.md', 'ADVERSARIAL_RESEARCH_REVIEW.md']:
            ep = os.path.join(ROOT, extra)
            if os.path.exists(ep):
                z.write(ep, extra)
        # Add PDF
        pdf_path = os.path.join(ROOT, 'web', 'public', 'downloads', 'v4-journal.pdf')
        if os.path.exists(pdf_path):
            z.write(pdf_path, 'Synthetic_Abuse_Research_V4.pdf')
    packages.append(pkg2)
    print(f"  -> {pkg2} ({os.path.getsize(pkg2_path)/(1024*1024):.2f} MB)")

    # 3. Release_Package_Audited_Evidence_Data.zip (Audited CSV/JSON datasets)
    pkg3 = 'Release_Package_Audited_Evidence_Data.zip'
    pkg3_path = os.path.join(ROOT, pkg3)
    if os.path.exists(pkg3_path): os.remove(pkg3_path)
    print(f"Creating {pkg3}...")
    with zipfile.ZipFile(pkg3_path, 'w', zipfile.ZIP_DEFLATED) as z:
        data_files = [
            'CLAIM_VERIFICATION_FINAL.csv',
            'PUBLIC_DATA_MANIFEST.json',
            'citation-audit.json',
            'citation-audit.csv',
            'research/working-history/publication_audit/model_metadata_completeness.csv',
            'web/public/downloads/incident-register.csv',
            'web/public/downloads/quantitative-evidence.csv',
            'web/public/downloads/claim-to-action.csv',
            'web/public/downloads/public-source-register.csv',
            'research/original-deliverables/Phase_1_Image_Model_Inventory.xlsx'
        ]
        for df in data_files:
            fp = os.path.join(ROOT, df)
            if os.path.exists(fp):
                z.write(fp, os.path.basename(df))
    packages.append(pkg3)
    print(f"  -> {pkg3} ({os.path.getsize(pkg3_path)/(1024*1024):.2f} MB)")

    # 4. Release_Package_Regulatory_Submissions.zip (Targeted policy briefs)
    pkg4 = 'Release_Package_Regulatory_Submissions.zip'
    pkg4_path = os.path.join(ROOT, pkg4)
    if os.path.exists(pkg4_path): os.remove(pkg4_path)
    print(f"Creating {pkg4}...")
    with zipfile.ZipFile(pkg4_path, 'w', zipfile.ZIP_DEFLATED) as z:
        reg_dir = os.path.join(ROOT, 'regulatory_submissions')
        for root, _, files in os.walk(reg_dir):
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, reg_dir)
                z.write(fp, os.path.join('regulatory_dockets', rel))
        sop = os.path.join(ROOT, 'REPOSITORY_REPORTING_FRAMEWORK.md')
        if os.path.exists(sop):
            z.write(sop, 'REPOSITORY_REPORTING_FRAMEWORK.md')
        ipb = os.path.join(ROOT, 'web', 'public', 'downloads', 'india-policy-brief.pdf')
        if os.path.exists(ipb):
            z.write(ipb, 'India_Policy_Brief_IT_Rules.pdf')
    packages.append(pkg4)
    print(f"  -> {pkg4} ({os.path.getsize(pkg4_path)/(1024*1024):.2f} MB)")

    # 5. Release_Package_Governance_and_Audits.zip (Pre-publication governance files)
    pkg5 = 'Release_Package_Governance_and_Audits.zip'
    pkg5_path = os.path.join(ROOT, pkg5)
    if os.path.exists(pkg5_path): os.remove(pkg5_path)
    print(f"Creating {pkg5}...")
    with zipfile.ZipFile(pkg5_path, 'w', zipfile.ZIP_DEFLATED) as z:
        gov_files = [
            'ADVERSARIAL_RESEARCH_REVIEW.md',
            'CROSS_DOCUMENT_CONSISTENCY_REPORT.md',
            'V4_RESEARCH_CHANGELOG.md',
            'LEGAL_REVIEW_LIMITATIONS.md',
            'SECURITY_AUDIT_FINAL.md',
            'PUBLICATION_READINESS_FINAL.md',
            'DEPLOYMENT_GUIDE.md',
            'INSTITUTIONAL_OUTREACH_PLAN.md',
            'IMPACT_MEASUREMENT_PROTOCOL.md',
            'QA_BROWSER_REPORT.md'
        ]
        for gf in gov_files:
            fp = os.path.join(ROOT, gf)
            if os.path.exists(fp):
                z.write(fp, gf)
    packages.append(pkg5)
    print(f"  -> {pkg5} ({os.path.getsize(pkg5_path)/(1024*1024):.2f} MB)")

    # 6. Release_Package_Offline_Preview.zip (Standalone air-gapped preview environment)
    pkg6 = 'Release_Package_Offline_Preview.zip'
    pkg6_path = os.path.join(ROOT, pkg6)
    if os.path.exists(pkg6_path): os.remove(pkg6_path)
    print(f"Creating {pkg6}...")
    with zipfile.ZipFile(pkg6_path, 'w', zipfile.ZIP_DEFLATED) as z:
        off_dir = os.path.join(ROOT, 'web', 'offline-preview')
        for root, _, files in os.walk(off_dir):
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, off_dir)
                z.write(fp, os.path.join('offline_preview', rel))
    packages.append(pkg6)
    print(f"  -> {pkg6} ({os.path.getsize(pkg6_path)/(1024*1024):.2f} MB)")

    # 7. Release_Package_Historical_Archives_V1_V3.zip (Historical preservation of V1, V2, and V3)
    pkg7 = 'Release_Package_Historical_Archives_V1_V3.zip'
    pkg7_path = os.path.join(ROOT, pkg7)
    if os.path.exists(pkg7_path): os.remove(pkg7_path)
    print(f"Creating {pkg7}...")
    with zipfile.ZipFile(pkg7_path, 'w', zipfile.ZIP_DEFLATED) as z:
        hist_dir = os.path.join(ROOT, 'Complete_Research_Archive_V1_V2')
        if os.path.exists(hist_dir):
            for root, _, files in os.walk(hist_dir):
                for file in files:
                    fp = os.path.join(root, file)
                    rel = os.path.relpath(fp, hist_dir)
                    z.write(fp, os.path.join('Archive_V1_V2', rel))
        v3_dir = os.path.join(ROOT, 'research', 'working-history', 'research_v3')
        if os.path.exists(v3_dir):
            for root, _, files in os.walk(v3_dir):
                for file in files:
                    fp = os.path.join(root, file)
                    rel = os.path.relpath(fp, v3_dir)
                    z.write(fp, os.path.join('Archive_V3', rel))
    packages.append(pkg7)
    print(f"  -> {pkg7} ({os.path.getsize(pkg7_path)/(1024*1024):.2f} MB)")

    # Checksums and Release Manifest
    checksum_lines = [
        "# CONSENT IS NOT SYNTHETIC - PHASE 3 FINAL RELEASE PACKAGES (SHA-256)",
        f"# Generated: 25 November 2026 | Edition: V4 Defended Release Candidate",
        ""
    ]
    manifest = {
        "release_version": "Version 4 (Institutional Defended Edition)",
        "release_date": "2026-11-25",
        "release_status": "DEFENDED_RELEASE_CANDIDATE_PENDING_OWNER_SIGN_OFF",
        "archives": []
    }

    for pkg in packages:
        pp = os.path.join(ROOT, pkg)
        if os.path.exists(pp):
            sha = sha256_file(pp)
            sz = os.path.getsize(pp)
            checksum_lines.append(f"{sha}  {pkg}")
            manifest["archives"].append({
                "package_name": pkg,
                "sha256": sha,
                "size_bytes": sz,
                "size_mb": round(sz / (1024 * 1024), 2)
            })

    with open(os.path.join(ROOT, 'CHECKSUMS_RELEASE.txt'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(checksum_lines) + '\n')

    with open(os.path.join(ROOT, 'RELEASE_MANIFEST.json'), 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)

    print("\nAll 7 Phase 3 final release archives and checksums successfully built!")

if __name__ == '__main__':
    create_phase3_packages()
