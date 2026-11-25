import Link from 'next/link';
import {nav, sources, siteName} from '../lib/content';
import type {ReactNode} from 'react';
export function Mark(){return <svg aria-hidden="true" viewBox="0 0 40 40" className="mark"><rect width="40" height="40" rx="12" fill="#9f2149"/><path d="M20 7 31 11v8c0 7-4.4 11-11 14-6.6-3-11-7-11-14v-8Z" fill="none" stroke="white" strokeWidth="1.8"/><path d="m14 20 4 4 8-9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
export function Header(){
  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <Link href="/" className="brand select-none">
          <Mark/>
          <span>Consent Is Not<br/><strong>Synthetic.</strong></span>
        </Link>
        <button type="button" className="menu-toggle" data-menu aria-expanded="false" aria-controls="main-nav">
          Menu <span aria-hidden="true">☰</span>
        </button>
        <nav id="main-nav" aria-label="Primary navigation">
          {/* UNDERSTAND */}
          <div className="nav-item-dropdown" data-dropdown>
            <button type="button" className="nav-link-btn" aria-expanded="false" data-dropdown-btn>
              Understand <span className="nav-chevron" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown-panel">
              <Link href="/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Overview</div>
                <div className="dropdown-desc">Core research initiative &amp; findings</div>
              </Link>
              <Link href="/impact/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Human Impact</div>
                <div className="dropdown-desc">Psychological harms &amp; survivor evidence</div>
              </Link>
              <Link href="/technology/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Technology</div>
                <div className="dropdown-desc">Diffusion architectures, LoRAs &amp; C2PA limits</div>
              </Link>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="nav-item-dropdown" data-dropdown>
            <button type="button" className="nav-link-btn" aria-expanded="false" data-dropdown-btn>
              Explore <span className="nav-chevron" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown-panel">
              <Link href="/evidence/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Evidence Dashboard</div>
                <div className="dropdown-desc">Quantitative metrics &amp; trend charts</div>
              </Link>
              <Link href="/incidents/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Documented Incidents</div>
                <div className="dropdown-desc">10 legal proceedings &amp; enforcement cases</div>
              </Link>
              <Link href="/model-governance/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Model Governance</div>
                <div className="dropdown-desc">Publisher duties, licenses &amp; release holds</div>
              </Link>
              <Link href="/open-weights/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Hugging Face &amp; Open Weights</div>
                <div className="dropdown-desc">Target #1: repository accountability &amp; 9 demands</div>
              </Link>
              <Link href="/regulation/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Global Regulation</div>
                <div className="dropdown-desc">8-jurisdiction statutory matrix &amp; deadlines</div>
              </Link>
              <Link href="/models/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Technical Inventory (53)</div>
                <div className="dropdown-desc">Preliminary 53-record metadata completeness</div>
              </Link>
            </div>
          </div>

          {/* RESEARCH */}
          <div className="nav-item-dropdown" data-dropdown>
            <button type="button" className="nav-link-btn" aria-expanded="false" data-dropdown-btn>
              Research <span className="nav-chevron" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown-panel">
              <Link href="/research/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Research Library</div>
                <div className="dropdown-desc">Manuscripts (V1–V4.1) &amp; datasets</div>
              </Link>
              <Link href="/sources/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Source Register</div>
                <div className="dropdown-desc">76 bibliographic citations &amp; audit statuses</div>
              </Link>
              <Link href="/methodology/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Methodology</div>
                <div className="dropdown-desc">Narrative review protocol &amp; evidence hierarchy</div>
              </Link>
              <Link href="/transparency/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Transparency</div>
                <div className="dropdown-desc">Version changelog, claims &amp; impact tracker</div>
              </Link>
              <Link href="/corrections/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Corrections</div>
                <div className="dropdown-desc">Dated revision history &amp; reconciliations</div>
              </Link>
            </div>
          </div>

          {/* ACT */}
          <div className="nav-item-dropdown" data-dropdown>
            <button type="button" className="nav-link-btn" aria-expanded="false" data-dropdown-btn>
              Act <span className="nav-chevron" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown-panel">
              <Link href="/accountability/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Accountability</div>
                <div className="dropdown-desc">Policy framework &amp; claim-to-action controls</div>
              </Link>
              <Link href="/take-action/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Take Action</div>
                <div className="dropdown-desc">Safe reporting &amp; policy engagement</div>
              </Link>
              <Link href="/support/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Support</div>
                <div className="dropdown-desc">Official reporting portals &amp; crisis helplines</div>
              </Link>
              <Link href="/press/" className="dropdown-link" data-nav>
                <div className="dropdown-title">Press Center</div>
                <div className="dropdown-desc">Fact sheets, briefs &amp; reporting guidance</div>
              </Link>
              <Link href="/about/" className="dropdown-link" data-nav>
                <div className="dropdown-title">About</div>
                <div className="dropdown-desc">Mission, ethics &amp; AI disclosures</div>
              </Link>
            </div>
          </div>

          {/* PRIMARY CTA */}
          <Link href="/support/" className="nav-link" data-nav>
            Support
          </Link>
          <Link href="/take-action/" className="nav-action" data-nav>
            Take action <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer(){
  return (
    <footer>
      <div className="wrap footer-grid-4">
        <div>
          <Link href="/" className="brand select-none">
            <Mark/>
            <span>Consent Is Not<br/><strong>Synthetic.</strong></span>
          </Link>
          <p className="tagline">Artificial Images. Real Victims. Real Consequences.</p>
          <p className="micro muted" style={{marginTop:'10px'}}>
            An independent, public-interest research and evidence-led advocacy initiative. Not a government agency, crisis service, or peer-reviewed publication.
          </p>
        </div>
        <div>
          <h3>Evidence &amp; Harms</h3>
          <Link href="/">Overview</Link>
          <Link href="/impact/">Human impact</Link>
          <Link href="/evidence/">Evidence dashboard</Link>
          <Link href="/incidents/">Documented incidents</Link>
          <Link href="/models/">Model hub governance</Link>
          <Link href="/support/">Survivor support &amp; reporting</Link>
        </div>
        <div>
          <h3>Technology &amp; Policy</h3>
          <Link href="/technology/">Technology &amp; forensics</Link>
          <Link href="/model-governance/">Model governance</Link>
          <Link href="/open-weights/">Hugging Face &amp; open weights</Link>
          <Link href="/regulation/">Global regulation</Link>
          <Link href="/accountability/">Accountability framework</Link>
          <Link href="/take-action/">Take action</Link>
        </div>
        <div>
          <h3>Research &amp; Integrity</h3>
          <Link href="/research/">Research library</Link>
          <Link href="/transparency/">Transparency &amp; impact tracker</Link>
          <Link href="/sources/">Source register (76)</Link>
          <Link href="/methodology/">Methodology &amp; protocol</Link>
          <Link href="/press/">Press &amp; media center</Link>
          <Link href="/about/">About initiative</Link>
          <Link href="/corrections/">Public corrections log</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>Research snapshot: 25 November 2026 · Fair-Use Academic Research</span>
        <span>Zero tracking analytics · No cookies · No abusive media hosted</span>
      </div>

      {/* INTERACTIVE EVIDENCE INSPECTOR MODAL */}
      <div id="citation-inspector-modal" className="citation-modal" hidden role="dialog" aria-modal="true" aria-labelledby="citation-modal-title">
        <div className="citation-modal-backdrop" data-citation-close></div>
        <div className="citation-modal-card">
          <div className="citation-modal-header">
            <div>
              <span className="eyebrow" id="citation-modal-ref" style={{margin:'0 0 4px',fontSize:'9.5px'}}>Audited Evidence Citation</span>
              <h3 id="citation-modal-title" style={{fontSize:'1.15rem'}}>Source Title</h3>
            </div>
            <button type="button" className="citation-modal-close" data-citation-close aria-label="Close evidence inspector">✕</button>
          </div>
          <div className="citation-modal-body">
            <div className="citation-meta-grid">
              <div><strong>Publisher:</strong> <span id="citation-modal-pub"></span></div>
              <div><strong>Date / Period:</strong> <span id="citation-modal-date"></span></div>
              <div><strong>Evidence Locator:</strong> <span id="citation-modal-locator" style={{color:'var(--accent)',fontWeight:700}}></span></div>
              <div><strong>Verification Status:</strong> <span id="citation-modal-status" className="badge-danger" style={{background:'#eef7f0',color:'#156933',borderColor:'#c3e6cb'}}></span></div>
              <div><strong>Study Population:</strong> <span id="citation-modal-pop"></span></div>
              <div><strong>Geographical Scope:</strong> <span id="citation-modal-geo"></span></div>
            </div>
            <div style={{marginTop:'14px'}}>
              <strong style={{fontSize:'12.5px',textTransform:'uppercase',letterSpacing:'.06em',color:'var(--muted)'}}>Verified Claim Summary</strong>
              <p id="citation-modal-claim" style={{fontSize:'13.5px',color:'var(--ink)',marginTop:'4px',lineHeight:1.6}}></p>
            </div>
            <div style={{marginTop:'12px',background:'var(--soft)',padding:'12px 14px',borderRadius:'6px',fontSize:'12.5px'}}>
              <strong style={{color:'var(--ink)'}}>Methodology Limitations &amp; Caveats:</strong>
              <p id="citation-modal-limits" style={{color:'var(--muted)',marginTop:'4px',lineHeight:1.5}}></p>
            </div>
            <div style={{marginTop:'18px',display:'flex',gap:'10px',flexWrap:'wrap',alignItems:'center'}}>
              <a id="citation-modal-link" href="#" target="_blank" rel="noopener noreferrer" className="button primary" style={{fontSize:'12.5px',padding:'8px 14px',minHeight:'36px'}}>
                Open Official Source ↗
              </a>
              <a id="citation-modal-full" href="#" className="button secondary" style={{fontSize:'12.5px',padding:'8px 14px',minHeight:'36px'}}>
                View in Source Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow"><span aria-hidden="true"/>{children}</p>}
export function Heading({eyebrow,title,description}:{eyebrow:string;title:string;description:string}){return <section className="page-heading"><div className="wrap"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="lede">{description}</p></div></section>}
export function Section({title,description,children,id}:{title:string;description?:string;children:ReactNode;id?:string}){return <section id={id} className="section wrap"><div className="section-heading"><h2>{title}</h2>{description&&<p>{description}</p>}</div>{children}</section>}
export function Source({id}:{id:number}){const s=sources[id-1];return <a className="source-ref break-words" href={`/sources/#source-${id}`} data-citation={id} aria-label={`Reference ${id}: ${s?.publisher||''}`}>[{id}] {s?.publisher||''} ↗</a>}
export function Stat({value,label,note,refs}:{value:string;label:string;note:string;refs:number[]}){return <article className="stat panel"><div className="stat-number">{value}</div><h3>{label}</h3><p>{note}</p><div className="refs">{refs.map(id=><Source key={id} id={id}/>)}</div></article>}
export function ButtonLink({href,children,secondary=false,variant}:{href:string;children:ReactNode;secondary?:boolean;variant?:'primary'|'secondary'}){const isSec=variant==='secondary'||secondary;const cls=isSec?'button secondary':'button primary';if(href.startsWith('/downloads/')){return <a href={href} download className={cls}>{children}<span aria-hidden="true">↗</span></a>}return <Link href={href} className={cls}>{children}<span aria-hidden="true">↗</span></Link>}
export function Note({children}:{children:ReactNode}){return <aside className="note"><strong>Read the evidence carefully.</strong><div>{children}</div></aside>}
export function Bars({title,description,items,max,source}:{title:string;description:string;items:{label:string;value:number;display?:string}[];max:number;source:number[]}){return <article className="panel chart"><h3>{title}</h3><p className="muted">{description}</p><div role="img" aria-label={`${title}. ${items.map(i=>`${i.label}: ${i.display||i.value}`).join('; ')}`} className="bars">{items.map(i=><div className="bar-row" key={i.label}><div className="bar-label"><span>{i.label}</span><strong>{i.display||i.value.toLocaleString('en-US')}</strong></div><div className="bar-track"><div className="bar-fill" style={{width:`${i.value/max*100}%`}}/></div></div>)}</div><div className="refs">{source.map(id=><Source id={id} key={id}/>)}</div></article>}
export function Chain(){return <div className="chain" aria-label="Evidence to action research framework">{[['01','Document','Establish actual harm.'],['02','Attribute','Identify duties and gaps.'],['03','Intervene','Target harmful supply.'],['04','Measure','Verify real outcomes.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>}
export function RestrictionBanner({title="Research Notice & Restriction Advisory", children}:{title?:string; children?:ReactNode}){
  return <aside className="restriction-banner" role="region" aria-label="Content advisory and research restrictions">
    <h3><span aria-hidden="true">⚠️</span> {title}</h3>
    <p>This section contains academic research audit and metadata enumeration of open model repositories on public hubs (such as Hugging Face). It is published strictly for evidence-based accountability, safety evaluation, and policy analysis.</p>
    <ul>
      <li><strong>No abusive or explicit imagery</strong> is stored, rendered, or linked on this platform.</li>
      <li><strong>No generator pipelines, exploit scripts, or bypass tutorials</strong> are distributed.</li>
      <li>All findings reflect public repository metadata accessed November 2026 under research oversight.</li>
    </ul>
    {children}
  </aside>;
}
export function SignupCard({title="Research & Policy Updates Desk", subtitle="Receive research briefings, data releases, and statutory analysis. No trackers, no third-party cookies."}:{title?:string; subtitle?:string}){
  return <div className="signup-card panel">
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'8px'}}>
      <Eyebrow>Research Network</Eyebrow>
      <span className="badge-neutral" style={{fontSize:'10px',fontWeight:700}}>Intake Inactive · Local Preview</span>
    </div>
    <h3 style={{marginTop:'8px'}}>{title}</h3>
    <p className="micro">{subtitle}</p>
    
    <div className="note" style={{marginTop:'14px',marginBottom:'18px',background:'#fff9fb',borderLeftColor:'#9D2048'}}>
      <strong>Notice on Public Data Collection:</strong>
      <span style={{fontSize:'12.5px'}}>
        In strict adherence to data minimization and privacy principles, public email collection is disabled on this static research release. No personal information is captured or transmitted by this page.
      </span>
    </div>

    <form data-signup-form className="signup-form">
      <div className="signup-grid">
        <label className="field">
          Full name (optional)
          <input type="text" name="name" placeholder="Dr. Jane Doe / Alex Smith" disabled />
        </label>
        <label className="field">
          Email address
          <input type="email" name="email" placeholder="name@institution.org" disabled />
        </label>
        <label className="field">
          Sector / Primary focus
          <select name="sector" defaultValue="research" disabled>
            <option value="research">Academic &amp; Independent Research</option>
            <option value="policy">Legal &amp; Policy Analysis</option>
            <option value="safeguarding">Child Protection &amp; Safeguarding</option>
            <option value="tech">AI Safety &amp; Engineering</option>
            <option value="journalism">Journalism &amp; Media</option>
            <option value="public">General Public &amp; Advocacy</option>
          </select>
        </label>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap', marginTop:'12px'}}>
        <button type="button" className="button secondary" style={{opacity:0.7, cursor:'not-allowed'}} title="Disabled pending subscriber infrastructure deployment">
          Registration paused pending server backend
        </button>
        <span className="micro muted">Zero credentials stored or requested in client code.</span>
      </div>
    </form>
  </div>;
}
