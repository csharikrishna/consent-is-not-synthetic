import json

with open('citation-audit.json', 'r', encoding='utf-8') as f:
    sources = json.load(f)

# Create a compact lookup dict
source_map = {}
for s in sources:
    source_map[s['id']] = {
        'id': s['id'],
        'title': s['title'],
        'publisher': s['publisher'],
        'date': s['date'],
        'locator': s.get('locator', ''),
        'status': s.get('status', 'Primary source checked'),
        'population': s.get('population', ''),
        'geo': s.get('geo_scope', ''),
        'claim': s.get('verified_claim', ''),
        'limits': s.get('limitations', ''),
        'url': s.get('url', '')
    }

source_map_json = json.dumps(source_map, ensure_ascii=False)

with open('web/public/interactions.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace or insert citation logic
citation_code = f"""
  const CITATION_DATA = {source_map_json};
  function openCitationModal(id) {{
    const data = CITATION_DATA[id];
    if (!data) return false;
    const modal = document.getElementById('citation-inspector-modal');
    if (!modal) return false;
    document.getElementById('citation-modal-ref').textContent = 'Audited Evidence Citation [' + data.id + ']';
    document.getElementById('citation-modal-title').textContent = data.title;
    document.getElementById('citation-modal-pub').textContent = data.publisher;
    document.getElementById('citation-modal-date').textContent = data.date;
    document.getElementById('citation-modal-locator').textContent = data.locator || 'Detailed citation in primary document';
    document.getElementById('citation-modal-status').textContent = data.status || 'Primary source checked';
    document.getElementById('citation-modal-pop').textContent = data.population || 'Documented cohort / statutory jurisdiction';
    document.getElementById('citation-modal-geo').textContent = data.geo || 'Global / Multi-jurisdiction';
    document.getElementById('citation-modal-claim').textContent = data.claim;
    document.getElementById('citation-modal-limits').textContent = data.limits || 'Refer to primary source methodology and scope.';
    const link = document.getElementById('citation-modal-link');
    if (link) {{
      link.href = data.url || '#';
      link.style.display = data.url ? 'inline-flex' : 'none';
    }}
    const full = document.getElementById('citation-modal-full');
    if (full) {{
      full.href = '/sources/#source-' + data.id;
    }}
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    return true;
  }}
  function closeCitationModal() {{
    const modal = document.getElementById('citation-inspector-modal');
    if (modal) {{
      modal.hidden = true;
      document.body.style.overflow = '';
    }}
  }}
  document.addEventListener('keydown', e => {{
    if (e.key === 'Escape') closeCitationModal();
  }});
"""

target = 'if (window.__cinsInit) return; window.__cinsInit = true;'
if target in code and 'CITATION_DATA' not in code:
    code = code.replace(target, target + citation_code)

click_target = "const copy=e.target.closest('[data-copy]');"
click_replacement = """const cite=e.target.closest('[data-citation]');
    if(cite){
      const id = cite.dataset.citation;
      if(openCitationModal(id)){ e.preventDefault(); return; }
    }
    if(e.target.closest('[data-citation-close]')){
      closeCitationModal();
      return;
    }
    const copy=e.target.closest('[data-copy]');"""

if click_target in code and 'data-citation' not in code:
    code = code.replace(click_target, click_replacement)

with open('web/public/interactions.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated web/public/interactions.js successfully with interactive citation inspector.")
