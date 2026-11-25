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

def create_canonical_packages():
    excludes_base = ['node_modules', '.next', '.git', '__pycache__', '.DS_Store', 'screenshots']
    
    # Target archives dictionary mapping canonical names to packaging logic
    archives = []
    
    # 1. Website source code
    pkg1 = 'Consent_Is_Not_Synthetic_Website_Source.zip'
    pkg1_path = os.path.join(ROOT, pkg1)
    if os.path.exists(pkg1_path): os.remove(pkg1_path)
    print(f"Creating {pkg1}...")
    with zipfile.ZipFile(pkg1_path, 'w', zipfile.ZIP_DEFLATED) as z:
        web_dir = os.path.join(ROOT, 'web')
        for root, dirs, files in os.walk(web_dir):
            dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', 'out', 'offline-preview']]
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, ROOT)
                z.write(fp, rel)
    archives.append(pkg1)
    print(f"  -> {pkg1} ({os.path.getsize(pkg1_path)/(1024*1024):.2f} MB)")
    
    # 2. Public production release
    pkg2 = 'Consent_Is_Not_Synthetic_Public_Production_Release.zip'
    pkg2_path = os.path.join(ROOT, pkg2)
    if os.path.exists(pkg2_path): os.remove(pkg2_path)
    print(f"Creating {pkg2}...")
    with zipfile.ZipFile(pkg2_path, 'w', zipfile.ZIP_DEFLATED) as z:
        out_dir = os.path.join(ROOT, 'web', 'out')
        for root, _, files in os.walk(out_dir):
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, out_dir)
                z.write(fp, os.path.join('public_html', rel))
        for extra in ['PUBLIC_DATA_MANIFEST.json', 'DEPLOYMENT_GUIDE.md', 'SECURITY_AUDIT_FINAL.md']:
            ep = os.path.join(ROOT, extra)
            if os.path.exists(ep):
                z.write(ep, extra)
    archives.append(pkg2)
    print(f"  -> {pkg2} ({os.path.getsize(pkg2_path)/(1024*1024):.2f} MB)")

    # 3. Complete private research archive
    pkg3 = 'Consent_Is_Not_Synthetic_Private_Research_Archive.zip'
    pkg3_path = os.path.join(ROOT, pkg3)
    if os.path.exists(pkg3_path): os.remove(pkg3_path)
    print(f"Creating {pkg3}...")
    with zipfile.ZipFile(pkg3_path, 'w', zipfile.ZIP_DEFLATED) as z:
        for rdir in ['Complete_Research_Archive_V1_V2', 'research']:
            full_rdir = os.path.join(ROOT, rdir)
            if os.path.exists(full_rdir):
                for root, _, files in os.walk(full_rdir):
                    for file in files:
                        fp = os.path.join(root, file)
                        rel = os.path.relpath(fp, ROOT)
                        z.write(fp, rel)
    archives.append(pkg3)
    print(f"  -> {pkg3} ({os.path.getsize(pkg3_path)/(1024*1024):.2f} MB)")

    # 4. Academic publication package
    pkg4 = 'Consent_Is_Not_Synthetic_Academic_Publication_Package.zip'
    pkg4_path = os.path.join(ROOT, pkg4)
    if os.path.exists(pkg4_path): os.remove(pkg4_path)
    print(f"Creating {pkg4}...")
    with zipfile.ZipFile(pkg4_path, 'w', zipfile.ZIP_DEFLATED) as z:
        v4_dir = os.path.join(ROOT, 'research', 'working-history', 'research_v4')
        for root, _, files in os.walk(v4_dir):
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, v4_dir)
                z.write(fp, os.path.join('latex_source', rel))
        acad_files = [
            'CLAIM_VERIFICATION_FINAL.csv',
            'ADVERSARIAL_RESEARCH_REVIEW.md',
            'CROSS_DOCUMENT_CONSISTENCY_REPORT.md',
            'V4_RESEARCH_CHANGELOG.md',
            'LEGAL_REVIEW_LIMITATIONS.md',
            'PUBLIC_DATA_MANIFEST.json',
            'citation-audit.csv',
            'citation-audit.json',
            'EXECUTIVE_SUMMARY_2PAGE.md'
        ]
        for af in acad_files:
            fp = os.path.join(ROOT, af)
            if os.path.exists(fp):
                z.write(fp, af)
        pdf = os.path.join(ROOT, 'web', 'public', 'downloads', 'v4-journal.pdf')
        if os.path.exists(pdf):
            z.write(pdf, 'Synthetic_Abuse_Research_V4.pdf')
    archives.append(pkg4)
    print(f"  -> {pkg4} ({os.path.getsize(pkg4_path)/(1024*1024):.2f} MB)")

    # 5. Government and institutional submissions
    pkg5 = 'Consent_Is_Not_Synthetic_Government_Submissions.zip'
    pkg5_path = os.path.join(ROOT, pkg5)
    if os.path.exists(pkg5_path): os.remove(pkg5_path)
    print(f"Creating {pkg5}...")
    with zipfile.ZipFile(pkg5_path, 'w', zipfile.ZIP_DEFLATED) as z:
        sub_dir = os.path.join(ROOT, 'regulatory_submissions')
        for root, _, files in os.walk(sub_dir):
            for file in files:
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, sub_dir)
                z.write(fp, os.path.join('submissions', rel))
        gov_files = [
            'REPOSITORY_REPORTING_FRAMEWORK.md',
            'INSTITUTIONAL_OUTREACH_PLAN.md',
            'IMPACT_MEASUREMENT_PROTOCOL.md',
            'CLAIM_VERIFICATION_FINAL.csv'
        ]
        for gf in gov_files:
            fp = os.path.join(ROOT, gf)
            if os.path.exists(fp):
                z.write(fp, gf)
        ipb = os.path.join(ROOT, 'web', 'public', 'downloads', 'india-policy-brief.pdf')
        if os.path.exists(ipb):
            z.write(ipb, 'India_Policy_Brief_IT_Rules.pdf')
    archives.append(pkg5)
    print(f"  -> {pkg5} ({os.path.getsize(pkg5_path)/(1024*1024):.2f} MB)")

    # 6. Press and media kit
    pkg6 = 'Consent_Is_Not_Synthetic_Press_Kit.zip'
    pkg6_path = os.path.join(ROOT, pkg6)
    if os.path.exists(pkg6_path): os.remove(pkg6_path)
    print(f"Creating {pkg6}...")
    with zipfile.ZipFile(pkg6_path, 'w', zipfile.ZIP_DEFLATED) as z:
        press_files = [
            'MEDIA_BACKGROUNDER.md',
            'FACT_SHEET_1PAGE.md',
            'EXECUTIVE_SUMMARY_2PAGE.md',
            'CLAIM_VERIFICATION_FINAL.csv',
            'PUBLIC_DATA_MANIFEST.json'
        ]
        for pf in press_files:
            fp = os.path.join(ROOT, pf)
            if os.path.exists(fp):
                z.write(fp, pf)
        assets_dir = os.path.join(ROOT, 'web', 'public', 'assets')
        if os.path.exists(assets_dir):
            for root, _, files in os.walk(assets_dir):
                for file in files:
                    fp = os.path.join(root, file)
                    rel = os.path.relpath(fp, assets_dir)
                    z.write(fp, os.path.join('branding_and_assets', rel))
        peb = os.path.join(ROOT, 'web', 'public', 'downloads', 'public-evidence-brief.pdf')
        if os.path.exists(peb):
            z.write(peb, 'Public_Evidence_Brief.pdf')
    archives.append(pkg6)
    print(f"  -> {pkg6} ({os.path.getsize(pkg6_path)/(1024*1024):.2f} MB)")

    # 7. Complete master archive containing every historical version and final deliverable
    pkg7 = 'Consent_Is_Not_Synthetic_Master_Archive.zip'
    pkg7_path = os.path.join(ROOT, pkg7)
    if os.path.exists(pkg7_path): os.remove(pkg7_path)
    print(f"Creating {pkg7}...")
    with zipfile.ZipFile(pkg7_path, 'w', zipfile.ZIP_DEFLATED) as z:
        for root, dirs, files in os.walk(ROOT):
            dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '.git', 'build_cache', 'screenshots']]
            for file in files:
                if file.endswith('.zip') or file.endswith('.tar.gz'):
                    continue
                fp = os.path.join(root, file)
                rel = os.path.relpath(fp, ROOT)
                z.write(fp, os.path.join('Consent_Is_Not_Synthetic_MASTER', rel))
    archives.append(pkg7)
    print(f"  -> {pkg7} ({os.path.getsize(pkg7_path)/(1024*1024):.2f} MB)")

    # Checksums and Release Manifest
    checksum_lines = [
        "# CONSENT IS NOT SYNTHETIC - PHASE 3 CANONICAL RELEASE ARCHIVES (SHA-256)",
        "# Generated: 25 November 2026 | Edition: V4 Defended Release Candidate",
        ""
    ]
    manifest = {
        "release_version": "Version 4 (Institutional Defended Edition)",
        "release_date": "2026-11-25",
        "release_status": "DEFENDED_RELEASE_CANDIDATE_PENDING_OWNER_SIGN_OFF",
        "archives": []
    }

    for pkg in archives:
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

    print("\nAll 7 canonical release archives and checksums successfully built!")

if __name__ == '__main__':
    create_canonical_packages()
