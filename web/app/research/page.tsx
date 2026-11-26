import Link from 'next/link';
import {Heading, Section, Note, ButtonLink, Eyebrow, Source} from '../../components/ui';
import {pageMeta, assetPath} from '../../lib/seo';

export const metadata = pageMeta(
  '/research/',
  'Research Library & Public Repository — Consent Is Not Synthetic',
  'Digital research repository: manuscripts V1–V3, abstracts, version histories, BibTeX/RIS citation exports, peer-review disclosures, and downloadable open research datasets.'
);

const bibtexCitation = `@article{consent_is_not_synthetic_2026,
  title={Consent Is Not Synthetic: Evidence, Technology Supply Chains, and Enforceable Accountability in Generative Sexual Exploitation},
  author={{Consent Is Not Synthetic Research Working Group}},
  journal={Independent Public-Interest Research Review},
  volume={3},
  pages={1--23},
  year={2026},
  month={November},
  note={Working research draft; AI-assisted desk research; external peer review pending. Open dataset version 2.0}
}`;

const risCitation = `TY  - RPRT
TI  - Consent Is Not Synthetic: Evidence, Technology Supply Chains, and Enforceable Accountability in Generative Sexual Exploitation
AU  - Consent Is Not Synthetic Research Working Group
PY  - 2026/11/25
M3  - Independent Public-Interest Research Review (Version 3)
SP  - 1
EP  - 23
N1  - Working research draft; AI-assisted desk research; external peer review pending.
UR  - https://consentisnot-synthetic.org/research/
ER  - `;

export default function ResearchPage() {
  return (
    <>
      <Heading
        eyebrow="Open Research Archive &amp; Repository"
        title="Research Library &amp; Public Manuscripts"
        description="Comprehensive repository of research manuscripts, document abstracts, version histories, structured datasets, and bibliographic citation exports. All materials are open access under Creative Commons CC BY 4.0."
      />

      {/* PEER REVIEW STATUS DISCLOSURE */}
      <Section title="Peer-Review Status &amp; Epistemic Transparency">
        <div className="panel" style={{borderLeft:'4px solid var(--accent)',background:'#fff9fb'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'8px'}}>
            <div>
              <span className="tag">Publication Classification</span>
              <h3 style={{marginTop:'8px'}}>AI-Assisted Desk Research · Independent Working Draft</h3>
            </div>
            <span className="badge-danger" style={{background:'#fcf0f3',color:'#9b193e',borderColor:'#f2ccd7'}}>
              Non-Peer-Reviewed Working Draft
            </span>
          </div>
          <p style={{marginTop:'12px',fontSize:'14px',lineHeight:1.65}}>
            <strong>Transparency Declaration:</strong> All manuscripts and research briefs hosted in this repository reflect rigorous, independently auditable desk research and empirical synthesis conducted by the Consent Is Not Synthetic research working group. Artificial intelligence systems were utilized to assist with literature indexing, formatting, and citation reconciliation. Unless expressly updated upon completion of formal peer evaluation, these documents must be cited as <strong>non-peer-reviewed working drafts</strong>. No formal Digital Object Identifiers (DOIs) or institutional academic journal affiliations are claimed.
          </p>
        </div>
      </Section>

      {/* MANUSCRIPT EVOLUTION & VERSION HISTORY */}
      <Section
        title="1. Research Manuscripts &amp; Version History"
        description="Our research evolved through four distinct methodological iterations, culminating in the pre-publication defended research edition."
      >
        <div className="grid-2" style={{marginBottom:'24px'}}>
          {/* VERSION 4 */}
          <article className="panel" style={{display:'flex',flexDirection:'column',border:'2px solid var(--accent)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <span className="tag" style={{background:'var(--accent)',color:'#fff',borderColor:'var(--accent)'}}>Version 4.1 (Current Defended Edition)</span>
              <span className="micro muted">PDF · Working Draft</span>
            </div>
            <h3 style={{marginTop:'10px',fontSize:'1.25rem'}}>Institutional Research Defense Edition (V4.1)</h3>
            <p className="micro muted">AI-assisted structured narrative evidence review &amp; regulatory policy synthesis (not independently peer-reviewed)</p>
            <p style={{fontSize:'13.5px',lineHeight:1.6,margin:'10px 0'}}>
              <strong>Abstract:</strong> Pre-publication defended edition incorporating V4.1 evidence corrections: reconciles UNICEF, IWF, NCMEC, ISD, Ofcom, and eSafety baselines; frames the 53-record inventory as metadata collection completeness; withdraws the exploratory search pagination count; updates EU Regulation (EU) 2026/1744 and India helpline routing.
            </p>
            <div style={{marginTop:'auto',paddingTop:'14px',display:'flex',gap:'8px',flexWrap:'wrap'}}>
              <a href={assetPath('/downloads/v4-journal.pdf')} download className="button primary" style={{fontSize:'13px',padding:'9px 16px',flex:1,justifyContent:'center'}}>
                Download V4.1 Defended PDF ↓
              </a>
              <Link href="/transparency/" className="button secondary" style={{fontSize:'13px',padding:'9px 16px'}}>
                View Changelog &rarr;
              </Link>
            </div>
          </article>

          {/* VERSION 3 */}
          <article className="panel" style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <span className="tag">Version 3 (Archival)</span>
              <span className="micro muted">502 KB · PDF</span>
            </div>
            <h3 style={{marginTop:'10px',fontSize:'1.18rem'}}>Evidence to Action</h3>
            <p className="micro muted">23 pages · 76 citations · 25 November 2026</p>
            <p style={{fontSize:'13.5px',lineHeight:1.6,margin:'10px 0'}}>
              <strong>Abstract:</strong> Recalibrates research around 14 verified empirical harm metrics, operational child protection data (IWF, NCMEC), and a three-tier supply-chain governance model linking failure modes directly to 6 actionable policy controls.
            </p>
            <div style={{marginTop:'auto',paddingTop:'14px'}}>
              <a href={assetPath('/downloads/v3-journal.pdf')} download className="button secondary" style={{fontSize:'13px',padding:'9px 16px',width:'100%',justifyContent:'center'}}>
                Download V3 Archival PDF ↓
              </a>
            </div>
          </article>
        </div>

        <div className="grid-2">
          {/* VERSION 2 */}
          <article className="panel" style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <span className="tag">Version 2 (Archival)</span>
              <span className="micro muted">441 KB · PDF</span>
            </div>
            <h3 style={{marginTop:'10px',fontSize:'1.18rem'}}>Harms &amp; Targeted Prohibition</h3>
            <p className="micro muted">18 pages · Mid-2026 · Superseded</p>
            <p style={{fontSize:'13.5px',lineHeight:1.6,margin:'10px 0'}}>
              <strong>Abstract:</strong> Restructured the project around victim impact and digital dignity. Formulated the initial three-tier governance framework (Prohibit / Restrict / Permit) and analyzed statutory frameworks across 8 jurisdictions.
            </p>
            <div style={{marginTop:'auto',paddingTop:'14px'}}>
              <a href={assetPath('/downloads/v2-journal.pdf')} download className="button secondary" style={{fontSize:'13px',padding:'9px 16px',width:'100%',justifyContent:'center'}}>
                Download V2 Archival PDF ↓
              </a>
            </div>
          </article>

          {/* VERSION 1 */}
          <article className="panel" style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <span className="tag">Version 1 (Archival)</span>
              <span className="micro muted">383 KB · PDF</span>
            </div>
            <h3 style={{marginTop:'10px',fontSize:'1.18rem'}}>Architectures &amp; Ecosystem</h3>
            <p className="micro muted">20 pages · Early 2026 · Superseded</p>
            <p style={{fontSize:'13.5px',lineHeight:1.6,margin:'10px 0'}}>
              <strong>Abstract:</strong> Initial technical survey cataloging open-weight diffusion architectures (LDM, SDXL), parameter quantization, low-rank adaptations (LoRA), and early community fine-tuning patterns.
            </p>
            <div style={{marginTop:'auto',paddingTop:'14px'}}>
              <a href={assetPath('/downloads/v1-journal.pdf')} download className="button secondary" style={{fontSize:'13px',padding:'9px 16px',width:'100%',justifyContent:'center'}}>
                Download V1 Archival PDF ↓
              </a>
            </div>
          </article>
        </div>
      </Section>

      {/* PUBLIC DELIVERABLES & DOSSIERS */}
      <section className="soft-section">
        <Section
          title="2. Public Briefings, Dossiers &amp; Policy Papers"
          description="Specialized companion deliverables prepared for policy analysts, journalists, and institutional researchers."
        >
          <div className="grid-3">
            <article className="panel resource">
              <span className="tag">Public Briefing · 35 KB</span>
              <h3 style={{marginTop:'8px'}}>Public Evidence Brief</h3>
              <p className="micro">
                A concise 4-page executive briefing summarizing verified harm statistics, model hub governance failures, and urgent statutory priorities.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href={assetPath('/downloads/public-evidence-brief.pdf')} download className="inline-link">
                  Download PDF (35 KB) ↓
                </a>
              </div>
            </article>

            <article className="panel resource">
              <span className="tag">Policy Analysis · 145 KB</span>
              <h3 style={{marginTop:'8px'}}>India Policy Brief</h3>
              <p className="micro">
                Detailed 2-page analysis of the IT (Intermediary Guidelines) Amendment Rules 2026, Rule 3(2)(b) 2-hour takedowns, and cross-border model hub liability.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href={assetPath('/downloads/india-policy-brief.pdf')} download className="inline-link">
                  Download PDF (145 KB) ↓
                </a>
              </div>
            </article>

            <article className="panel resource">
              <span className="tag">Evidence Dossier · 223 KB</span>
              <h3 style={{marginTop:'8px'}}>Annotated Source Evidence</h3>
              <p className="micro">
                16-page technical dossier with verbatim source excerpts, page locators, study populations, and methodological caveats for indexed references.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href={assetPath('/downloads/annotated-evidence.pdf')} download className="inline-link">
                  Download PDF (223 KB) ↓
                </a>
              </div>
            </article>

            <article className="panel resource">
              <span className="tag">Bibliography Index · 198 KB</span>
              <h3 style={{marginTop:'8px'}}>Research Resource Directory</h3>
              <p className="micro">
                12-page indexed catalog of all academic literature, government gazettes, court dockets, and technical model cards referenced in the research.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href={assetPath('/downloads/resource-directory.pdf')} download className="inline-link">
                  Download PDF (198 KB) ↓
                </a>
              </div>
            </article>

            <article className="panel resource">
              <span className="tag">Methodology Protocol · 9 KB</span>
              <h3 style={{marginTop:'8px'}}>Structured Narrative Review Protocol</h3>
              <p className="micro">
                Prospective review protocol guided by PRISMA transparency principles, defining eligibility criteria, non-pooling rules, and external peer-review gates.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href={assetPath('/downloads/research-protocol.md')} download className="inline-link">
                  Download Protocol (Markdown) ↓
                </a>
              </div>
            </article>
          </div>
        </Section>
      </section>

      {/* RESEARCH DATASETS */}
      <Section
        title="3. Open Machine-Readable Datasets (CSV &amp; JSON)"
        description="Structured datasets supporting the visualizations and registers across the platform. Published under Creative Commons CC BY 4.0."
      >
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Dataset Name</th>
                <th>Format</th>
                <th>Records</th>
                <th>Description</th>
                <th>Download Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Citation Audit Register</strong></td>
                <td>CSV / JSON</td>
                <td>77 Sources</td>
                <td>Complete audit records with locators, study populations, reporting periods, and caveats.</td>
                <td>
                  <a href={assetPath('/downloads/citation-audit.csv')} download className="inline-link" style={{margin:0}}>CSV (14 KB)</a> ·{' '}
                  <a href={assetPath('/downloads/citation-audit.json')} download className="inline-link" style={{margin:0}}>JSON (32 KB)</a>
                </td>
              </tr>
              <tr>
                <td><strong>Quantitative Evidence Register</strong></td>
                <td>CSV</td>
                <td>14 Measures</td>
                <td>Empirical metrics (M01–M14) with denominators, periods, and interpretation notes.</td>
                <td>
                  <a href={assetPath('/downloads/quantitative-evidence.csv')} download className="inline-link" style={{margin:0}}>CSV (2 KB)</a>
                </td>
              </tr>
              <tr>
                <td><strong>Documented Incidents Register</strong></td>
                <td>CSV</td>
                <td>10 Cases</td>
                <td>Real-world judicial sentences, civil penalties, and platform enforcement actions.</td>
                <td>
                  <a href={assetPath('/downloads/incident-register.csv')} download className="inline-link" style={{margin:0}}>CSV (3 KB)</a>
                </td>
              </tr>
              <tr>
                <td><strong>Claim-to-Action Register</strong></td>
                <td>CSV</td>
                <td>6 Controls</td>
                <td>Policy controls (C01–C06) mapped from documented harms to accountable actors.</td>
                <td>
                  <a href={assetPath('/downloads/claim-to-action.csv')} download className="inline-link" style={{margin:0}}>CSV (2 KB)</a>
                </td>
              </tr>
              <tr>
                <td><strong>Model Metadata Completeness</strong></td>
                <td>CSV</td>
                <td>53 Models</td>
                <td>Field-by-field audit of provenance, licensing, and model card completeness.</td>
                <td>
                  <a href={assetPath('/downloads/model-metadata-completeness.csv')} download className="inline-link" style={{margin:0}}>CSV (1.5 KB)</a>
                </td>
              </tr>
              <tr>
                <td><strong>Top-50 Hugging Face Snapshot</strong></td>
                <td>JSON</td>
                <td>50 Listings</td>
                <td>Metadata-only snapshot of 50 <code>text-to-image</code> listings matching <code>nsfw</code> (25 Nov 2026).</td>
                <td>
                  <a href={assetPath('/downloads/top50-hf-metadata-snapshot.json')} download className="inline-link" style={{margin:0}}>JSON (28 KB)</a>
                </td>
              </tr>
              <tr>
                <td><strong>Public Source Register</strong></td>
                <td>CSV</td>
                <td>77 Sources</td>
                <td>Complete bibliographic register with verification statuses, locators, and limitations.</td>
                <td>
                  <a href={assetPath('/downloads/public-source-register.csv')} download className="inline-link" style={{margin:0}}>CSV</a>
                </td>
              </tr>
              <tr>
                <td><strong>Headline Claim Verification Register</strong></td>
                <td>CSV</td>
                <td>15 Claims</td>
                <td>Audited empirical claims with denominators, locators, and publication eligibility.</td>
                <td>
                  <a href={assetPath('/downloads/claim-verification-final.csv')} download className="inline-link" style={{margin:0}}>CSV</a>
                </td>
              </tr>
              <tr>
                <td><strong>Unresolved Evidence &amp; Release Decision</strong></td>
                <td>Markdown</td>
                <td>2 Docs</td>
                <td>Open verification items and V4.1 release gate checklist.</td>
                <td>
                  <a href={assetPath('/downloads/unresolved-evidence-register.md')} download className="inline-link" style={{margin:0}}>Unresolved MD</a> ·{' '}
                  <a href={assetPath('/downloads/final-release-decision.md')} download className="inline-link" style={{margin:0}}>Decision MD</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* SUGGESTED CITATION & BIBTEX / RIS EXPORTS */}
      <section className="soft-section">
        <Section title="4. Suggested Citation Formats (BibTeX &amp; RIS)">
          <p>
            When citing this research initiative in academic papers, policy submissions, or investigative journalism, please use the standard format below:
          </p>

          <div className="panel" style={{marginTop:'18px'}}>
            <h3 style={{fontSize:'1.05rem'}}>APA Format</h3>
            <p className="micro" style={{fontFamily:'var(--serif)',fontSize:'14px',color:'var(--ink)',background:'#fff',padding:'12px',borderRadius:'6px',border:'1px solid var(--line)',marginTop:'8px'}}>
              Consent Is Not Synthetic Research Working Group. (2026). <em>Consent Is Not Synthetic: Evidence, Technology Supply Chains, and Enforceable Accountability in Generative Sexual Exploitation</em> (Research Review Version 4.1). Independent Public-Interest Research Platform.
            </p>
          </div>

          <div className="grid-2" style={{marginTop:'20px'}}>
            <div className="panel letter">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'8px'}}>
                <h3 style={{fontSize:'1rem'}}>BibTeX Citation</h3>
                <button type="button" className="button secondary" style={{fontSize:'11px',padding:'4px 10px',minHeight:'28px'}} data-copy="bibtex-box">
                  Copy BibTeX
                </button>
              </div>
              <textarea id="bibtex-box" aria-label="BibTeX citation text" readOnly value={bibtexCitation} style={{height:'170px',fontSize:'12px',fontFamily:'monospace'}}></textarea>
              <span data-copy-status className="micro muted" aria-live="polite"></span>
            </div>

            <div className="panel letter">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'8px'}}>
                <h3 style={{fontSize:'1rem'}}>RIS Citation (EndNote / Zotero)</h3>
                <button type="button" className="button secondary" style={{fontSize:'11px',padding:'4px 10px',minHeight:'28px'}} data-copy="ris-box">
                  Copy RIS
                </button>
              </div>
              <textarea id="ris-box" aria-label="RIS citation text" readOnly value={risCitation} style={{height:'170px',fontSize:'12px',fontFamily:'monospace'}}></textarea>
              <span data-copy-status className="micro muted" aria-live="polite"></span>
            </div>
          </div>
        </Section>
      </section>

      {/* CITATION REGISTER CTA */}
      <section className="wrap section final-cta">
        <div>
          <h2>Inspect All 77 Indexed Reference Citations</h2>
          <p>Explore our searchable bibliography containing complete bibliographic metadata, audit statuses, and primary source links.</p>
        </div>
        <ButtonLink href="/sources/">Open Source Register (77) ↗</ButtonLink>
      </section>
    </>
  );
}
