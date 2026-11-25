import {sources, metrics, incidents, completeness} from '../lib/content';
import top50Hf from '../lib/top50_hf.json';
import {Source} from './ui';
export function MetricExplorer(){return <div className="panel explorer" data-filter-root><div className="filter-row"><label className="field">Search measures<input type="search" placeholder="Try: visits, warning, survey…" data-search/></label><label className="field">Unit<select data-select="unit"><option value="">All units</option>{Array.from(new Set(metrics.map(m=>m.unit))).sort().map(u=><option key={u}>{u}</option>)}</select></label></div><p className="result-count" data-count aria-live="polite">{metrics.length} metrics</p><div className="table-scroll" tabIndex={0} aria-label="Quantitative evidence table"><table><thead><tr><th>Measure / period</th><th>Value</th><th>Denominator</th><th>Interpretation / source</th></tr></thead><tbody>{metrics.map(m=><tr key={m.metric_id} data-record data-unit={m.unit}><td><strong>{m.measure}</strong><small>{m.period} · {m.status}</small></td><td className="number-cell">{m.value}<small>{m.unit}</small></td><td>{m.denominator}</td><td>{m.interpretation}<small><Source id={Number(m.reference_number)}/></small></td></tr>)}</tbody></table></div><p data-empty hidden>No metrics match. Clear your filters.</p></div>}
export function IncidentExplorer(){return <div className="panel explorer" data-filter-root><div className="filter-row"><label className="field">Search cases<input type="search" placeholder="Search case, outcome or country" data-search/></label><label className="field">Jurisdiction<select data-select="jurisdiction"><option value="">All jurisdictions</option>{Array.from(new Set(incidents.map(i=>i.jurisdiction))).sort().map(j=><option key={j}>{j}</option>)}</select></label></div><p data-count className="result-count" aria-live="polite">{incidents.length} records</p><div className="incident-list">{incidents.map(i=><article data-record data-jurisdiction={i.jurisdiction} className="incident" key={i.id}><span className="tag">{i.record_type}</span><h3>{i.description}</h3><p className="micro">{i.date} · {i.jurisdiction} · {i.id}</p><p><strong>Observed:</strong> {i.observed_outcome}</p><p className="muted">{i.interpretation}</p><a className="inline-link" href={i.primary_source} target="_blank" rel="noopener noreferrer">Primary source ↗</a></article>)}</div><p data-empty hidden>No matching records.</p></div>}
export function SourceExplorer(){return <div className="panel explorer" data-filter-root><div className="filter-row"><label className="field">Search sources<input type="search" placeholder="Publisher, title, reference, keyword…" data-search/></label><label className="field">Audit status<select data-select="status"><option value="">All 76 sources</option><option value="checked">Selected claim rechecked</option><option value="inherited">Not rechecked</option></select></label><label className="field">Evidence stream<select data-select="stream"><option value="">All streams</option>{Array.from(new Set(sources.map(s=>s.stream))).sort().map(s=><option key={s}>{s}</option>)}</select></label></div><p data-count className="result-count" aria-live="polite">{sources.length} references</p><div className="source-list">{sources.map(s=><article id={`source-${s.id}`} data-record data-status={s.verified?'checked':'inherited'} data-stream={s.stream} className="source-item" key={s.id}><div className="source-top"><span className="ref-number">{String(s.id).padStart(2,'0')}</span><span className="tag">{s.verified?'Selected claim rechecked':'Inherited · pending recheck'}</span></div><h3>{s.title}</h3><p className="micro">{s.publisher} · {s.date}</p><details><summary>Evidence and limitations</summary><p>{s.summary}</p><p className="muted"><strong>Limitations:</strong> {s.limitations}</p></details>{s.url?<a className="inline-link" href={s.url} target="_blank" rel="noopener noreferrer">Publisher / primary source ↗</a>:<p className="micro">Technical reference retained for bibliographic completeness; direct execution link omitted from public index.</p>}</article>)}</div><p data-empty hidden>No matching sources.</p></div>}
export function Completeness(){return <div className="panel chart"><h3>Metadata field coverage</h3><p className="muted">53 historical model and component records. Coverage ≠ validation.</p><div className="bars">{completeness.map(m=><div className="bar-row" key={m.field}><div className="bar-label"><span>{m.field}</span><strong>{m.populated_nonplaceholder}/{m.records}</strong></div><div className="bar-track"><div className="bar-fill" style={{width:`${m.percent}%`}}/></div></div>)}</div></div>}

export function JurisdictionExplorer({jurisdictions}:{jurisdictions:any[]}){
  return (
    <div className="panel explorer" data-filter-root>
      <div className="filter-row">
        <label className="field">
          Search legal frameworks
          <input type="search" placeholder="Search statute, country, timeline, penalty..." data-search />
        </label>
        <label className="field">
          Status
          <select data-select="status">
            <option value="">All statuses</option>
            <option value="in_force">In force / Active</option>
            <option value="enacted">Enacted / Phased</option>
            <option value="case_by_case">Case-by-case / Voluntary</option>
          </select>
        </label>
      </div>
      <p data-count className="result-count" aria-live="polite">{jurisdictions.length} jurisdictions analyzed</p>
      <div className="grid-2">
        {jurisdictions.map((j) => (
          <article
            key={j.id}
            data-record
            data-status={j.status.toLowerCase().includes('in force') || j.status.toLowerCase().includes('active') ? 'in_force' : j.status.toLowerCase().includes('enacted') || j.status.toLowerCase().includes('phased') ? 'enacted' : 'case_by_case'}
            className="panel"
            style={{borderColor:'var(--line)', display:'flex', flexDirection:'column', gap:'12px'}}
          >
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'8px'}}>
              <h3 style={{fontSize:'1.2rem', margin:0}}>{j.flag} {j.country}</h3>
              <span className="tag">{j.status}</span>
            </div>
            <p className="micro muted" style={{margin:0}}><strong>Primary statute:</strong> {j.statute}</p>
            <div style={{display:'grid', gridTemplateColumns:'110px 1fr', gap:'6px 10px', fontSize:'13px', margin:'6px 0'}}>
              <span style={{fontWeight:700, color:'var(--accent)'}}>Effective date:</span>
              <span>{j.effectiveDate}</span>
              <span style={{fontWeight:700, color:'var(--accent)'}}>Takedown timeline:</span>
              <span><strong>{j.timeline}</strong></span>
              <span style={{fontWeight:700}}>Statutory scope:</span>
              <span className="muted">{j.scope}</span>
            </div>
            <details style={{marginTop:'auto', paddingTop:'8px'}}>
              <summary>Platform obligations &amp; penalties</summary>
              <ul className="plain-list" style={{margin:'8px 0'}}>
                {j.obligations.map((ob:string, idx:number)=><li key={idx}>{ob}</li>)}
              </ul>
              <p className="micro" style={{color:'var(--accent-dark)'}}><strong>Penalties:</strong> {j.penalties}</p>
              <p className="micro muted"><strong>Identified policy gaps:</strong> {j.gaps}</p>
            </details>
            <div className="refs" style={{marginTop:'8px'}}>
              {j.sources.map((sId:number)=><Source id={sId} key={sId}/>)}
            </div>
          </article>
        ))}
      </div>
      <p data-empty hidden>No jurisdictions match your filter. Clear search terms.</p>
    </div>
  );
}

export function CorrectionExplorer({corrections}:{corrections:any[]}){
  return (
    <div className="panel explorer" data-filter-root>
      <div className="filter-row">
        <label className="field">
          Search corrections history
          <input type="search" placeholder="Search by title, affected citation, or reason..." data-search />
        </label>
      </div>
      <p data-count className="result-count" aria-live="polite">{corrections.length} recorded corrections</p>
      <div style={{display:'grid', gap:'16px'}}>
        {corrections.map((c)=>(
          <article key={c.id} data-record className="panel" style={{borderLeft:'4px solid var(--accent)'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'8px'}}>
              <span className="tag">{c.id} · {c.date}</span>
              <span style={{color:'#156933', fontWeight:700, fontSize:'12px'}}>✓ {c.status}</span>
            </div>
            <h3 style={{marginTop:'8px', fontSize:'1.1rem'}}>{c.title}</h3>
            <p className="micro muted"><strong>Affected:</strong> {c.affected_field}</p>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'14px', margin:'12px 0'}}>
              <div style={{background:'#fcf5f7', padding:'12px', borderRadius:'6px', border:'1px solid #f0dfe4'}}>
                <span className="micro" style={{color:'#9b193e', fontWeight:700, textTransform:'uppercase'}}>Previous wording</span>
                <p style={{fontSize:'13px', margin:'4px 0 0'}}>{c.previous_wording}</p>
              </div>
              <div style={{background:'#f4f9f5', padding:'12px', borderRadius:'6px', border:'1px solid #d7ebd9'}}>
                <span className="micro" style={{color:'#156933', fontWeight:700, textTransform:'uppercase'}}>Revised wording</span>
                <p style={{fontSize:'13px', margin:'4px 0 0'}}>{c.revised_wording}</p>
              </div>
            </div>
            <p className="micro muted"><strong>Methodological rationale:</strong> {c.reason}</p>
          </article>
        ))}
      </div>
      <p data-empty hidden>No matching corrections found.</p>
    </div>
  );
}

export function Top50SnapshotExplorer(){
  const licenses = Array.from(new Set(top50Hf.map(r => r.license))).sort();
  return (
    <div className="panel explorer" data-filter-root>
      <div className="filter-row">
        <label className="field">
          Search 50 repository listings
          <input type="search" placeholder="Search repo ID, base model, architecture, license, or notes..." data-search />
        </label>
        <label className="field">
          Displayed license
          <select data-select="license">
            <option value="">All licenses</option>
            {licenses.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </label>
      </div>
      <p data-count className="result-count" aria-live="polite">{top50Hf.length} repositories</p>
      <div className="table-scroll" tabIndex={0} aria-label="Top 50 Hugging Face text-to-image search results matching nsfw">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Repository &amp; Format</th>
              <th>Likes / Downloads</th>
              <th>HF Param Badge</th>
              <th>Base Model / Dependency</th>
              <th>Displayed License &amp; Updated</th>
              <th>Audit Status</th>
            </tr>
          </thead>
          <tbody>
            {top50Hf.map(r => (
              <tr key={r.rank} data-record data-license={r.license}>
                <td className="number-cell">#{r.rank}</td>
                <td>
                  <strong>{r.title}</strong>
                  <small><code>{r.repoId}</code></small>
                  <small>{r.typeFormat}</small>
                  <details style={{marginTop:'6px', paddingTop:'6px'}}>
                    <summary>Description &amp; verification note</summary>
                    <p style={{fontSize:'12.5px', margin:'6px 0'}}>{r.description}</p>
                    <p className="micro muted"><strong>Verification note:</strong> {r.verificationNote}</p>
                    <p className="micro" style={{marginTop:'6px'}}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>
                        Repository reference ↗
                      </a>
                    </p>
                  </details>
                </td>
                <td>
                  <strong>{r.likes}</strong> likes
                  <small>{r.downloads} downloads</small>
                </td>
                <td>{r.paramBadge}</td>
                <td>{r.baseModel}</td>
                <td>
                  <strong>{r.license}</strong>
                  <small>Updated: {r.updated}</small>
                </td>
                <td>
                  <span className="badge-neutral">Page Reviewed</span>
                  <small>Files/SHA-256/Runtime: Pending / Not tested</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p data-empty hidden>No matching repository records.</p>
    </div>
  );
}
