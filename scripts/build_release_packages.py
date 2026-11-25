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

def zip_directory(zip_filename, source_dir, exclude_patterns=None, arcname_prefix=''):
    if exclude_patterns is None:
        exclude_patterns = []
    
    zip_path = os.path.join(ROOT, zip_filename)
    if os.path.exists(zip_path):
        os.remove(zip_path)
        
    print(f"Creating archive: {zip_filename}...")
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            # Prune excluded directories
            dirs[:] = [d for d in dirs if not any(p in os.path.join(root, d) for p in exclude_patterns)]
            
            for file in files:
                file_path = os.path.join(root, file)
                if any(p in file_path for p in exclude_patterns):
                    continue
                rel_path = os.path.relpath(file_path, source_dir)
                arc_name = os.path.join(arcname_prefix, rel_path) if arcname_prefix else rel_path
                zipf.write(file_path, arc_name)
                
    size_mb = os.path.getsize(zip_path) / (1024 * 1024)
    print(f"  -> {zip_filename} ({size_mb:.2f} MB)")
    return zip_path

def create_packages():
    excludes_base = [
        'node_modules',
        '.next',
        '.git',
        'build_cache',
        '.turbo',
        '__pycache__',
        '.DS_Store'
    ]
    
    # 1. Consent_Is_Not_Synthetic_Website_V3.zip (Clean website source)
    web_dir = os.path.join(ROOT, 'web')
    zip_directory('Consent_Is_Not_Synthetic_Website_V3.zip', web_dir, excludes_base + ['out', 'offline-preview'], 'web')
    
    # 2. Consent_Is_Not_Synthetic_Public_Release.zip (Static build + docs + public datasets)
    public_release_zip = os.path.join(ROOT, 'Consent_Is_Not_Synthetic_Public_Release.zip')
    if os.path.exists(public_release_zip):
        os.remove(public_release_zip)
    with zipfile.ZipFile(public_release_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Add out/
        out_dir = os.path.join(web_dir, 'out')
        for root, _, files in os.walk(out_dir):
            for f in files:
                fp = os.path.join(root, f)
                zipf.write(fp, os.path.join('public_html', os.path.relpath(fp, out_dir)))
        # Add documentation and audits
        for doc in ['CLAIM_VERIFICATION_REPORT.md', 'citation-audit.csv', 'citation-audit.json', 'PHASE_2_BASELINE.md', 'PROJECT_CONTEXT.md', 'RESEARCH_DATA_MAP.md']:
            doc_path = os.path.join(ROOT, doc)
            if os.path.exists(doc_path):
                zipf.write(doc_path, os.path.join('evidence_dossier', doc))
    print(f"  -> Consent_Is_Not_Synthetic_Public_Release.zip ({os.path.getsize(public_release_zip)/(1024*1024):.2f} MB)")

    # 3. Consent_Is_Not_Synthetic_Press_Kit.zip (Fact sheets, policy briefs, datasets, media assets)
    press_kit_zip = os.path.join(ROOT, 'Consent_Is_Not_Synthetic_Press_Kit.zip')
    if os.path.exists(press_kit_zip):
        os.remove(press_kit_zip)
    with zipfile.ZipFile(press_kit_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        downloads_dir = os.path.join(web_dir, 'public', 'downloads')
        for root, _, files in os.walk(downloads_dir):
            for f in files:
                fp = os.path.join(root, f)
                zipf.write(fp, os.path.join('briefs_and_datasets', f))
        assets_dir = os.path.join(web_dir, 'public', 'assets')
        for root, _, files in os.walk(assets_dir):
            for f in files:
                fp = os.path.join(root, f)
                zipf.write(fp, os.path.join('branding_and_graphics', f))
        for doc in ['CLAIM_VERIFICATION_REPORT.md', 'citation-audit.csv']:
            dp = os.path.join(ROOT, doc)
            if os.path.exists(dp):
                zipf.write(dp, doc)
    print(f"  -> Consent_Is_Not_Synthetic_Press_Kit.zip ({os.path.getsize(press_kit_zip)/(1024*1024):.2f} MB)")

    # 4. Consent_Is_Not_Synthetic_MASTER_V2.zip (Full workspace clean master)
    zip_directory('Consent_Is_Not_Synthetic_MASTER_V2.zip', ROOT, excludes_base + [
        'Consent_Is_Not_Synthetic_All_Research.zip',
        'Consent_Is_Not_Synthetic_Website.zip',
        'Consent_Is_Not_Synthetic_Website_V2.zip',
        'Consent_Is_Not_Synthetic_Website_V3.zip',
        'Consent_Is_Not_Synthetic_Public_Release.zip',
        'Consent_Is_Not_Synthetic_Press_Kit.zip',
        'Consent_Is_Not_Synthetic_MASTER_V2.zip',
        'out',
        'offline-preview'
    ], 'Consent_Is_Not_Synthetic_MASTER_V2')

    # Generate Checksums and Manifest
    archives = [
        'Consent_Is_Not_Synthetic_Website_V3.zip',
        'Consent_Is_Not_Synthetic_Public_Release.zip',
        'Consent_Is_Not_Synthetic_Press_Kit.zip',
        'Consent_Is_Not_Synthetic_MASTER_V2.zip'
    ]
    
    checksum_lines = []
    manifest = []
    
    for arch in archives:
        ap = os.path.join(ROOT, arch)
        if os.path.exists(ap):
            sha = sha256_file(ap)
            size = os.path.getsize(ap)
            checksum_lines.append(f"{sha}  {arch}")
            manifest.append({
                "archive": arch,
                "sha256": sha,
                "size_bytes": size,
                "size_mb": round(size / (1024 * 1024), 2)
            })
            
    with open(os.path.join(ROOT, 'CHECKSUMS_RELEASE.txt'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(checksum_lines) + '\n')
        
    with open(os.path.join(ROOT, 'RELEASE_MANIFEST.json'), 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
        
    print("\nRelease archives and checksums successfully generated!")

if __name__ == '__main__':
    create_packages()
