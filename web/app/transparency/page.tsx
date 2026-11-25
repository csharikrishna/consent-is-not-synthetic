import {Heading, Section, Note, Stat, Source, ButtonLink} from '../../components/ui';
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

const auditedClaims = [
  {
    id: 'CLM-001',
    metric: 'UNICEF Adolescent Deepfake Victimization',
    value: '1.2 million+ children affected',
    denominator: 'Population projection from 11 surveyed national cohorts (ages 12–17)',
    source: 'UNICEF Innocenti (2024) Digital Harms Survey, Section 3.2',
    status: 'Verified with Caveats',
    caveat: 'Self-reported survey projection; subject to recall bias; bounds detailed in report.'
  },
  {
    id: 'CLM-002',
    metric: 'UNICEF Gender Exposure Disparity',
    value: '41% female vs 29% male',
    denominator: 'Adolescent respondents reporting exposure to synthetic intimate imagery',
    source: 'UNICEF Innocenti (2024), Section 3.4; p. 28',
    status: 'Verified',
    caveat: 'Measures observed exposure prevalence among active online respondents.'
  },
  {
    id: 'CLM-003',
    metric: 'IWF Assessed AI CSAM Media Items (2025)',
    value: '8,029 media files',
    denominator: 'Total realistic AI-generated CSAM media objects assessed by analysts in 2025',
    source: 'Internet Watch Foundation (2025/2026 Data & Insights Report)',
    status: 'Verified',
    caveat: 'Measures verified digital media objects/URLs; does not equal unique child victims.'
  },
  {
    id: 'CLM-004',
    metric: 'IWF Operational Incident Surge',
    value: '491 reports (2025) vs 193 (2024)',
    denominator: 'Analyst-investigated incident dockets containing realistic AI CSAM',
    source: 'Internet Watch Foundation (2025/2026 Data & Insights Report)',
    status: 'Verified',
    caveat: 'Reflects hotline reporting propensity, discovered URLs, and automated scanning.'
  },
  {
    id: 'IWF-02',
    metric: 'IWF Assessed Photorealistic Videos (2024–2025)',
    value: '13 (2024) to 3,443 (2025) (~264.85x)',
    denominator: 'Assessed photorealistic AI-generated CSAM videos',
    source: 'IWF 2025 Annual Data & Insights Report (detailed video insights)',
    status: 'Primary evidence supported',
    caveat: 'Earlier announcement reported 3,440; detailed report 3,443 preferred. Two annual points do not establish an exponential trend.'
  },
  {
    id: 'ISD-01',
    metric: 'ISD Web Traffic to Selected Services',
    value: '20.7 million monthly visits',
    denominator: '31 selected abuse-enabling services (May 2025)',
    source: 'Institute for Strategic Dialogue (ISD 2025)',
    status: 'Primary evidence supported',
    caveat: 'Website visits do not equal unique users, offenders, victims, purchases, or generated images.'
  },
  {
    id: 'OFCOM-01',
    metric: 'Ofcom Risk-Assessment Governance Records',
    value: '66.35% (69 of 104 records)',
    denominator: '104 reviewed online-safety risk-assessment records',
    source: 'Ofcom Year One Report (2025), printed page 18',
    status: 'Primary evidence supported',
    caveat: 'Concerns broader online-safety governance; not evidence that 66.35% of AI model developers lack accountability.'
  },
  {
    id: 'INV-53',
    metric: 'Preliminary Technical Inventory',
    value: '53 cataloged records',
    denominator: 'Phase 1 preliminary technical inventory (M001–M053)',
    source: 'Phase_1_Image_Model_Inventory.xlsx; model_metadata_completeness.csv',
    status: 'Primary evidence supported',
    caveat: 'Contains metadata collection gaps describing investigation completeness; requires publisher-level verification.'
  }
];

const impactMilestones = [
  {
    date: 'July 2024',
    jurisdiction: 'Australia',
    body: 'Australian eSafety Commissioner',
    action: 'Intervention Against Commercial Deepfake Services',
    detail: 'Issued formal statutory notices to commercial deepfake platforms utilizing downloadable hub weights; 8 targeted services modified access or compliance measures under civil penalty threat.',
    citationId: 69
  },
  {
    date: 'August 2024',
    jurisdiction: 'South Korea',
    body: 'National Police Agency & KCSC',
    action: 'Emergency Taskforce on Telegram Deepfake Networks',
    detail: 'Launched nationwide criminal probe into synthetic sexual abuse rings operating across 200+ school networks, resulting in 500+ arrests and expedited platform blocking orders.',
    citationId: 44
  },
  {
    date: 'Late 2024',
    jurisdiction: 'Global / US',
    body: 'Hugging Face Trust & Safety',
    action: 'Model Hub Terms of Service Update',
    detail: 'Updated platform content policies to explicitly prohibit repositories, fine-tunes, or adapters purpose-built for non-consensual sexual depiction or CSAM generation.',
    citationId: 9
  },
  {
    date: 'Early 2025',
    jurisdiction: 'United Kingdom',
    body: 'Ofcom & Ministry of Justice',
    action: 'Online Safety Act Priority Offenses Enforcement',
    detail: 'Brought intimate image abuse offenses into force as statutory priority illegal content, requiring commercial hosting platforms to proactively prevent dissemination.',
    citationId: 41
  },
  {
    date: 'Mid 2026',
    jurisdiction: 'India',
    body: 'Ministry of Electronics and Information Technology (MeitY)',
    action: 'Amended Intermediary Guidelines (2-Hour Takedown Mandate)',
    detail: 'Enforced strict 2-hour takedown obligations under Rule 3(2)(b) for non-consensual intimate or morphed imagery, holding hosting intermediaries liable for non-compliance.',
    citationId: 74
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
              {auditedClaims.map((c, i) => (
                <tr key={i}>
                  <td><code>{c.id}</code></td>
                  <td><strong>{c.metric}</strong></td>
                  <td><span className="badge-neutral">{c.value}</span></td>
                  <td className="micro">{c.denominator}</td>
                  <td className="micro">
                    {c.source}
                    <div style={{marginTop:'4px',fontStyle:'italic',color:'var(--muted)'}}>
                      Note: {c.caveat}
                    </div>
                  </td>
                  <td>
                    <span className={c.status.includes('Primary') || c.status === 'Verified' ? 'badge-primary' : 'badge-neutral'}>
                      {c.status}
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

      {/* 3. IMPACT & ACCOUNTABILITY TRACKER */}
      <Section title="3. Institutional Impact &amp; Accountability Tracker" id="impact-tracker">
        <p>
          The objective of this initiative is enforceable developer accountability and statutory victim protection. This tracker logs verified regulatory, statutory, and platform policy developments:
        </p>

        <div className="control-list" style={{marginTop:'24px'}}>
          {impactMilestones.map((m, i) => (
            <article key={i} className="panel">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'8px'}}>
                <div>
                  <span className="tag">{m.jurisdiction}</span>
                  <span className="tag" style={{marginLeft:'6px'}}>{m.body}</span>
                  <h3 style={{marginTop:'8px'}}>{m.action}</h3>
                </div>
                <span className="micro muted">{m.date}</span>
              </div>
              <p style={{marginTop:'10px'}}>{m.detail}</p>
              <div style={{marginTop:'10px'}}>
                <Source id={m.citationId} />
              </div>
            </article>
          ))}
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
              <strong>Audited Citation Ledger:</strong> <code>web/public/downloads/citation-audit.json</code> &mdash; All 76 peer-reviewed and statutory references.
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
