import {Heading, Section, Note, Stat, Source, ButtonLink} from '../../components/ui';
import {claims, external_developments, initiative_impact} from '../../lib/content';
import {pageMeta} from '../../lib/seo';
import Link from 'next/link';

export const metadata = pageMeta(
  '/transparency/',
  'Research Transparency Center: Version History, Audited Claims & Impact Tracker',
  'Public research integrity portal: cross-version changelog (V1–V4), verified claim registry with exact locators, statutory impact tracking, and cryptographic data manifests.'
);

const versionHistory = [
  {
    version: 'Version 4.1 (V4.1)',
    date: '25 November 2026 (Current)',
    title: 'Defended Edition — Canonical V4.1 Reconciliation',
    status: 'Defended Release Candidate (Pending External Review)',
    changes: [
      'Withdrew exploratory search pagination count from all public findings; retained only in Corrections log.',
      'Reframed the preliminary 53-record technical inventory strictly as investigation metadata completeness.',
      'Reconciled IWF 2024–2025 metrics (193 to 491 reports; 13 to 3,443 videos; 4,586 stills = 8,029 items), Ofcom (69/104 = 66.35% p. 18), and ISD (20.7M visits across 31 services).',
      'Corrected India helpline 1930 scope (financial cyber fraud only) and withheld 1091 pending applicability verification.',
      'Updated EU Regulation (EU) 2026/1744 (applicable 2 Dec 2026; enacted but not yet applicable at 25 Nov 2026 cutoff).',
      'Classified study design as an AI-assisted structured narrative evidence review and regulatory policy synthesis, not independently peer-reviewed.'
    ],
    file: 'v4-journal.pdf'
  },
  {
    version: 'Version 3 (V3)',
    date: 'November 2026',
    title: 'Evidence-to-Action Regulatory Architecture',
    status: 'Archived Working Draft',
    changes: [
      'Expanded evidence base to 76 primary academic, operational, and statutory citations.',
      'Incorporated full India Policy Brief, POCSO Act, and IT Rules 2026 analysis.',
      'Introduced claim-to-action policy matrix and 3-tier regulatory framework.',
      'Added 10 documented real-world incident case studies.'
    ],
    file: 'v3-journal.pdf'
  },
  {
    version: 'Version 2 (V2)',
    date: 'November 2026',
    title: 'Multi-Jurisdictional Expansion & Harms Taxonomy',
    status: 'Archived Working Draft',
    changes: [
      'Expanded to 52 citations incorporating international regulatory actions.',
      'Introduced comparative analysis of UK Online Safety Act and Australian Online Safety Act.',
      'Synthesized early 2025 IWF data on AI CSAM escalation.'
    ],
    file: 'v2-journal.pdf'
  },
  {
    version: 'Version 1 (V1)',
    date: 'November 2026',
    title: 'Initial Exploratory Technical Synthesis',
    status: 'Archived Initial Draft',
    changes: [
      'Foundational analysis of latent diffusion models and LoRA parameter adaptation.',
      'Initial cataloging of 53 model architectures in Phase 1 workbook.',
      'Initial review of 34 primary academic and technical sources.'
    ],
    file: 'v1-journal.pdf'
  }
];

export default function TransparencyPage() {
  return (
    <>
      <Heading
        eyebrow="Research Governance & Verification"
        title="Public Research Transparency Center"
        description="Complete institutional record of research version evolution, verifiable empirical claim registries, real-world regulatory impact tracking, and cryptographic data manifests."
      />

      {/* 1. RESEARCH VERSION CHANGELOG */}
      <Section title="1. Research Manuscript Version History (V1 &rarr; V4)" id="versions">
        <p className="lede">
          Scientific integrity requires full transparency regarding how findings, datasets, and policy proposals evolved across research generations. Below is the complete record of versions produced by this initiative:
        </p>

        <div className="control-list" style={{marginTop:'24px'}}>
          {versionHistory.map((v, i) => (
            <article key={i} className="panel" style={{borderLeft: i === 0 ? '4px solid var(--accent)' : '4px solid var(--line)'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'8px'}}>
                <div>
                  <span className="tag" style={{backgroundColor: i === 0 ? 'var(--accent)' : undefined, color: i === 0 ? '#fff' : undefined}}>
                    {v.status}
                  </span>
                  <h3 style={{marginTop:'6px'}}>{v.version}: {v.title}</h3>
                </div>
                <span className="micro muted">{v.date}</span>
              </div>
              <ul className="plain-list" style={{margin:'12px 0 16px'}}>
                {v.changes.map((c, j) => (
                  <li key={j} style={{marginBottom:'4px'}}>&bull; {c}</li>
                ))}
              </ul>
              <ButtonLink href={`/downloads/${v.file}`} variant={i === 0 ? 'primary' : 'secondary'}>
                Download {v.version} Manuscript PDF ↗
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>

      {/* 2. AUDITED CLAIM REGISTRY */}
      <Section title="2. Audited Headline Claim Registry" id="claims">
        <p>
          Every headline statistic presented on this platform has been evaluated against primary records, bounding parameters, and methodological caveats. Below is the audited claim ledger:
        </p>

        <div className="table-scroll" style={{marginTop:'20px'}}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Metric / Indicator</th>
                <th>Audited Value</th>
                <th>Exact Denominator &amp; Population</th>
                <th>Primary Source &amp; Locator</th>
                <th>Verification Status</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((c: any) => (
                <tr key={c.id}>
                  <td><code>{c.id}</code></td>
                  <td><strong>{c.exact_wording}</strong></td>
                  <td><span className="badge-neutral">{c.value}</span></td>
                  <td className="micro">{c.denominator} · {c.population_geography}</td>
                  <td className="micro">
                    {c.original_title} ({c.locator}) <Source id={c.source_id} />
                    <div style={{marginTop:'4px',fontStyle:'italic',color:'var(--muted)'}}>
                      Note: {c.limitations}
                    </div>
                  </td>
                  <td>
                    <span className={c.verification_status.includes('Primary') ? 'badge-primary' : 'badge-neutral'}>
                      {c.verification_status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{marginTop:'20px'}}>
          <ButtonLink href="/downloads/claim-verification-final.csv" variant="secondary">
            Download Full Claim Verification Register (CSV) ↗
          </ButtonLink>
        </div>
      </Section>

      {/* 3. EXTERNAL ECOSYSTEM DEVELOPMENTS VS. INITIATIVE OUTCOMES */}
      <Section title="3. External Ecosystem Developments (Not Attributed to This Initiative)" id="impact-tracker">
        <p>
          These are documented external legislative, regulatory, and platform-policy developments recorded in primary sources. They are <strong>not</strong> achievements attributable to this initiative.
        </p>

        <div className="control-list" style={{marginTop:'24px'}}>
          {external_developments.map((m: any) => (
            <article key={m.id} className="panel">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'8px'}}>
                <div>
                  <span className="tag">{m.id} · {m.actor}</span>
                  <span className="tag" style={{marginLeft:'6px'}}>{m.status}</span>
                  <h3 style={{marginTop:'8px'}}>{m.development}</h3>
                </div>
                <span className="micro muted">{m.date}</span>
              </div>
            </article>
          ))}
        </div>

        <h3 style={{marginTop:'32px'}}>Initiative Activity &amp; Proposed Submissions</h3>
        <p className="micro muted">
          All institutional submissions remain in <strong>Proposed</strong> status pending owner authorization; none have been externally submitted.
        </p>
        <div className="table-scroll" style={{marginTop:'12px'}}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Target Institution</th>
                <th>Deliverable</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {initiative_impact.map((item: any) => (
                <tr key={item.id}>
                  <td><code>{item.id}</code></td>
                  <td><strong>{item.target}</strong></td>
                  <td><code>{item.deliverable}</code></td>
                  <td><span className="badge-neutral">{item.status}</span></td>
                  <td className="micro">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 4. CRYPTOGRAPHIC DATA MANIFEST */}
      <Section title="4. Public Data Manifest &amp; Reproducibility Center" id="manifest">
        <p>
          In accordance with scientific open-science standards, all non-abusive datasets, citation matrices, and analytical scripts are published with verifiable cryptographic checksums:
        </p>

        <div className="panel" style={{marginTop:'20px'}}>
          <h3>Research Data Manifest (Release Edition V4)</h3>
          <p className="micro muted">
            All files are available for download and verified against SHA-256 hash digests.
          </p>

          <ul className="plain-list" style={{marginTop:'16px'}}>
            <li style={{marginBottom:'10px'}}>
              <strong>Master Manuscript V4:</strong> <code>web/public/downloads/v4-journal.pdf</code> &mdash; Complete 24-page defended research paper.
            </li>
            <li style={{marginBottom:'10px'}}>
              <strong>Technical Model Inventory:</strong> <code>research/original-deliverables/Phase_1_Image_Model_Inventory.xlsx</code> &mdash; 53 structured model records.
            </li>
            <li style={{marginBottom:'10px'}}>
              <strong>Claim Verification CSV:</strong> <code>web/public/downloads/claim-verification-final.csv</code> &mdash; 15 headline empirical claims audited with page locators.
            </li>
            <li style={{marginBottom:'10px'}}>
              <strong>Audited Citation Ledger:</strong> <code>web/public/downloads/citation-audit.json</code> &mdash; All 77 indexed peer-reviewed and statutory references (67 verified, 10 pending URL verification).
            </li>
            <li style={{marginBottom:'10px'}}>
              <strong>Incident Register:</strong> <code>web/public/downloads/incident-register.csv</code> &mdash; 10 documented legal and enforcement cases.
            </li>
          </ul>

          <div style={{marginTop:'20px',display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <ButtonLink href="/downloads/public-data-manifest.json" variant="secondary">
              Download Cryptographic Manifest (JSON) ↗
            </ButtonLink>
            <ButtonLink href="/downloads/v4-journal.pdf" variant="primary">
              Download Defended Manuscript (PDF) ↗
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
