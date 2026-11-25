import {Heading, Section, Note, Source, Bars, ButtonLink} from '../../components/ui';
import {Completeness} from '../../components/Explorer';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta(
  '/methodology/',
  'Research Methodology: Structured Narrative Evidence Review & Audit Standards',
  'Methodological protocol: Structured Narrative Evidence Review guided by PRISMA transparency standards, four operational evidence streams, audited citations, and empirical model inventory.'
);

export default function Methodology() {
  return (
    <>
      <Heading
        eyebrow="Research Protocol & Scientific Governance"
        title="Research Methodology & Verification Standards"
        description="Our research operates as a Structured Narrative Evidence Review and Regulatory Policy Synthesis, adhering to PRISMA-informed transparency guidelines. Credibility demands showing exact boundaries, counting units, and empirical limitations."
      />

      {/* 1. METHODOLOGICAL DESIGN & PRISMA STANDARDS */}
      <Section title="1. Study Design & PRISMA Transparency Framework" id="design">
        <p className="lede">
          In response to the rapid proliferation of synthetic image generation systems, this initiative synthesizes technical documentation, victimological surveys, operational child-protection hotline data, and multi-jurisdictional statutory responses.
        </p>

        <div className="grid-2" style={{marginTop:'24px'}}>
          <article className="panel">
            <h3>Methodological Classification</h3>
            <p>
              This work is formally classified as a <strong>Structured Narrative Evidence Review &amp; Regulatory Policy Synthesis</strong>. While prospective systematic protocols (such as double-blind multi-reviewer screening) were formulated during scoping, our finalized publication corpus synthesizes an authoritative seed set of 76 peer-reviewed, statutory, and institutional records evaluated across four distinct evidence streams.
            </p>
          </article>

          <article className="panel">
            <h3>PRISMA Transparency Principles Applied</h3>
            <ul className="plain-list" style={{margin:'4px 0'}}>
              <li style={{marginBottom:'6px'}}>&bull; <strong>Explicit Eligibility Criteria:</strong> Pre-defined inclusion/exclusion standards across legal, technical, and operational dimensions.</li>
              <li style={{marginBottom:'6px'}}>&bull; <strong>Audited Data Extraction:</strong> Standardized extraction of exact page locators, sample sizes, and demographic populations.</li>
              <li style={{marginBottom:'6px'}}>&bull; <strong>Critical Risk of Bias Assessment:</strong> Identification of recall biases in surveys and discovery biases in hotline logs.</li>
              <li>&bull; <strong>Non-Pooling Discipline:</strong> Strict prohibition against mathematically pooling disparate counting units.</li>
            </ul>
          </article>
        </div>
      </Section>

      {/* 2. THE FOUR OPERATIONAL EVIDENCE STREAMS */}
      <Section title="2. The Four Operational Evidence Streams" id="streams">
        <p>
          Evidence is systematically categorized across four operational streams to prevent cross-domain contamination and maintain clear analytical boundaries:
        </p>

        <div className="grid-2" style={{marginTop:'20px'}}>
          <div className="panel">
            <span className="tag">Stream 1</span>
            <h3 style={{marginTop:'8px'}}>Adolescent &amp; Adult Victimological Surveys</h3>
            <p className="micro">
              Captures self-reported prevalence, psychological distress, social isolation, and harassment experienced by victims of deepfakes and non-consensual intimate imagery (e.g., UNICEF 11-country adolescent study; Umbach et al. CHI 2024 10-country adult survey of 16,145 respondents; CCRI studies).
            </p>
            <p className="micro muted" style={{marginTop:'8px'}}>
              <strong>Key Limitation:</strong> Subject to self-reporting biases and social stigma; reflects active online respondents rather than universal administrative censuses.
            </p>
          </div>

          <div className="panel">
            <span className="tag">Stream 2</span>
            <h3 style={{marginTop:'8px'}}>Operational Child Protection Hotline Records</h3>
            <p className="micro">
              Empirical data from accredited operational clearinghouses (Internet Watch Foundation, NCMEC CyberTipline, UK Report &amp; Remove) assessing realistic AI-generated CSAM and youth-initiated takedown requests.
            </p>
            <p className="micro muted" style={{marginTop:'8px'}}>
              <strong>Key Limitation:</strong> Hotline reports measure verified media files and reporting propensity, not unique child victims or individual perpetrator counts.
            </p>
          </div>

          <div className="panel" style={{marginTop:'16px'}}>
            <span className="tag">Stream 3</span>
            <h3 style={{marginTop:'8px'}}>Technical Architecture &amp; Model Hub Audits</h3>
            <p className="micro">
              Direct empirical evaluation of foundation model backbones, distilled weights, MMDiT architectures, and LoRA adapters across open model hubs. Analyzes parameter counts, safetensors weights, and licensing disclosures.
            </p>
            <p className="micro muted" style={{marginTop:'8px'}}>
              <strong>Key Limitation:</strong> The preliminary 53-record technical inventory describes investigation metadata completeness and requires additional publisher-level verification; it does not establish the absence of documentation or unsafe model behaviour.
            </p>
          </div>

          <div className="panel" style={{marginTop:'16px'}}>
            <span className="tag">Stream 4</span>
            <h3 style={{marginTop:'8px'}}>Statutory Matrices &amp; Regulatory Precedents</h3>
            <p className="micro">
              Comparative statutory analysis of intermediary liability, criminal penal codes, and child protection acts across 8 jurisdictions (India IT Rules &amp; POCSO; US DEFIANCE Act; UK Online Safety Act; EU AI Act; Australian Online Safety Act).
            </p>
            <p className="micro muted" style={{marginTop:'8px'}}>
              <strong>Key Limitation:</strong> Statutes evolve rapidly; ongoing legislative debates require periodic statutory re-benchmarking.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. AUDIT STATUS & SOURCE RECHECK COVERAGE */}
      <Section title="3. Publication Readiness &amp; Source Verification" id="audit">
        <div className="grid-2">
          <Bars
            title="Source Recheck Coverage (Audited Edition)"
            description="All 76 primary citations systematically audited with exact locators, populations, and caveats in citation-audit.json."
            items={[
              {label: 'Primary Sources Audited & Verified', value: 76},
              {label: 'Sources Pending Audit', value: 0}
            ]}
            max={76}
            source={[]}
          />

          <article className="panel">
            <h3>Evidence Verification Hierarchy</h3>
            <ol className="plain-list" style={{margin:'8px 0'}}>
              <li style={{marginBottom:'8px'}}>
                <strong>Tier 1 (Statutory &amp; Official):</strong> Primary legislative statutes, court judgments, and official reports from statutory regulators (MeitY, eSafety, Ofcom, FTC).
              </li>
              <li style={{marginBottom:'8px'}}>
                <strong>Tier 2 (Operational &amp; Peer-Reviewed):</strong> Hotline operational dockets (IWF, NCMEC) and peer-reviewed computer vision/HCI literature (ACM, IEEE, Nature, NeurIPS).
              </li>
              <li>
                <strong>Tier 3 (Investigative &amp; Civil Society):</strong> Multi-stakeholder investigations (ISD, Stanford Internet Observatory) subject to secondary technical verification.
              </li>
            </ol>
          </article>
        </div>
      </Section>

      {/* 4. METHODOLOGICAL CORRECTIONS & UNIT BOUNDING */}
      <Section title="4. Methodological Corrections &amp; Unit Bounding Rules" id="corrections">
        <div className="grid-2">
          <article className="panel">
            <h3>Ofcom Page Locator Correction</h3>
            <p className="micro">
              Corrected the risk assessment table locator to printed page 18 (&ldquo;Named person responsible for risk assessments&rdquo;). 69 of 104 reviewed online-safety risk-assessment records (66.35%) did not identify a responsible person; this concerns broader online-safety governance, not AI model developers specifically. <Source id={75}/>
            </p>
          </article>

          <article className="panel">
            <h3>IWF Metric Disambiguation</h3>
            <p className="micro">
              Disambiguated IWF 2025 Annual Data &amp; Insights Report figures: 193 reports (2024) to 491 reports (2025, +154.4%); 13 videos (2024) to 3,443 videos (2025, ~264.85&times;; earlier announcement 3,440); plus 4,586 still images totaling 8,029 assessed items in 2025. <Source id={1}/>
            </p>
          </article>

          <article className="panel">
            <h3>Preliminary 53-Record Technical Inventory</h3>
            <p className="micro">
              The preliminary 53-record technical inventory (M001–M053) contains gaps in collected safety-evaluation, licensing, and provenance metadata. These gaps describe investigation completeness and require publisher-level verification. An earlier exploratory search pagination count has been withdrawn from public findings. <Source id={10}/>
            </p>
          </article>

          <article className="panel">
            <h3>Prohibition of Statistical Pooling</h3>
            <p className="micro">
              Survey respondents (UNICEF 1.2M), operational media files (IWF 8,029), and takedown tickets (Report &amp; Remove 268) utilize fundamentally different sampling mechanisms and counting units. No aggregate sum is mathematically valid.
            </p>
          </article>
        </div>
      </Section>

      {/* 5. REMAINING RESEARCH & TRANSPARENCY LINKS */}
      <Section title="5. Research Protocols &amp; Transparency Resources">
        <div style={{display:'flex',gap:'14px',flexWrap:'wrap'}}>
          <ButtonLink href="/transparency/" variant="primary">
            Explore Research Transparency Center &rarr;
          </ButtonLink>
          <ButtonLink href="/sources/" variant="secondary">
            Inspect All 76 Verified Citations &rarr;
          </ButtonLink>
          <ButtonLink href="/downloads/research-protocol.md" variant="secondary">
            Download Research Protocol (MD) &rarr;
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
