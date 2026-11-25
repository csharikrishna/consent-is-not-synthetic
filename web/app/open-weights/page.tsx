import {Heading, Section, Note, Source, ButtonLink, Eyebrow} from '../../components/ui';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta(
  '/open-weights/',
  'Hugging Face & Open-Weight Accountability — Consent Is Not Synthetic',
  'Primary-target analysis of unrestricted open-weight model and LoRA distribution on public model hubs, the Australian eSafety precedent, and nine concrete repository accountability demands.'
);

const nineDemands = [
  ['01', 'Targeted Review of Verified Violations', 'Prioritize immediate review of repositories and adapters independently documented as violating platform content policies against non-consensual sexual content and CSAM.'],
  ['02', 'Removal or Restriction of Abusive Artifacts', 'Remove or restrict demonstrably abusive checkpoints and fine-tunes rather than leaving policy-violating weights publicly downloadable.'],
  ['03', 'Stronger Publisher Safety Documentation', 'Require completed, non-placeholder safety evaluations, intended-use boundaries, and risk disclosures before public indexing.'],
  ['04', 'Proportionate Pre-Release Risk Assessments', 'Evaluate high-capability photorealistic human-generation releases for foreseeable sexual-exploitation and non-consensual likeness misuse prior to open release.'],
  ['05', 'Responsible Distribution Controls', 'Replace honor-system license tags with enforceable gating, publisher verification, and staged access for high-risk photorealistic weights.'],
  ['06', 'Effective Abuse-Reporting Mechanisms', 'Provide fast-track, accessible reporting workflows for survivors, child-protection hotlines, and researchers to flag abusive repositories.'],
  ['07', 'Transparent Enforcement Reporting', 'Publish regular, auditable enforcement metrics distinguishing policy removals, account suspensions, and response times.'],
  ['08', 'Remediation & Appeal Processes', 'Maintain clear due-process remediation and appeal pathways so legitimate academic red-teaming and benign creative models are protected.'],
  ['09', 'Cooperation with Child-Protection Institutions', 'Establish formal coordination channels with authorized child-protection agencies (e.g., IWF, NCMEC, eSafety) and hash-sharing initiatives.']
] as const;

export default function OpenWeightsPage() {
  return (
    <>
      <Heading
        eyebrow="Primary Accountability Target · Model Hubs"
        title="Hugging Face &amp; Open-Weight Distribution Accountability"
        description="Why unrestricted downloadable weights and parameter-efficient LoRA adapters create an unrecoverable moderation gap—and nine enforceable governance demands for model-hosting repositories."
      />

      <Section
        title="1. Why Open-Weight Model Hubs Are Target #1"
        description="Once unmoderated weights or specialized LoRA adapters are downloaded from a public hub, downstream safety filters, C2PA signing, and usage licenses can no longer prevent offline or serverless abuse."
      >
        <div className="grid-3">
          <article className="panel stat">
            <div className="stat-number">40%</div>
            <h3>LoRA Adapters in 50-Listing Snapshot</h3>
            <p>
              20 of 50 reviewed Hugging Face <code>text-to-image</code> listings matching <code>nsfw</code> (25 Nov 2026) were lightweight LoRA adapters layered onto foundation backbones, alongside 23 full checkpoints.
            </p>
            <div className="refs"><Source id={10} /><Source id={16} /></div>
          </article>

          <article className="panel stat">
            <div className="stat-number">8</div>
            <h3>Services Restricted After eSafety Action</h3>
            <p>
              Australian eSafety documented that regulatory engagement led Hugging Face to update rules on model misuse and pushed 8 targeted services (&gt;200,000 prior monthly Australian visits) to withdraw access or add compliance measures.
            </p>
            <div className="refs"><Source id={69} /><Source id={70} /></div>
          </article>

          <article className="panel stat">
            <div className="stat-number">53</div>
            <h3>Preliminary Technical Inventory</h3>
            <p>
              The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata—requiring publisher-level verification rather than assuming safety.
            </p>
            <div className="refs"><Source id={9} /><Source id={10} /></div>
          </article>
        </div>

        <Note>
          <strong>Proportionality Principle:</strong> This initiative does <strong>not</strong> argue that every open-weight AI model is harmful or call for a blanket ban on open-source AI. Accountability targets demonstrably abusive tools, unenforced repository policies, and missing pre-release safeguards—while protecting benign research and creative expression.
        </Note>
      </Section>

      <section className="soft-section">
        <Section
          title="2. The Unrecoverable Downstream Control Gap"
          description="Hosted API platforms can update classifiers and block abusive prompts server-side. Publicly downloadable weights break that control loop."
        >
          <div className="grid-2">
            <article className="panel">
              <h3>Honor-System Licenses Fail Downstream</h3>
              <p>
                In the 50-listing Hugging Face snapshot, 12 repositories displayed CreativeML-OpenRail-M or OpenRail++ terms and 13 displayed no license or &ldquo;Unknown.&rdquo; Even when a model card carries a <em>Not-For-All-Audiences</em> tag or acceptable-use clause, local runtimes and serverless GPU containers do not enforce those terms <Source id={9} /><Source id={20} />.
              </p>
            </article>

            <article className="panel">
              <h3>Regulatory Precedent Proves Hub Action Works</h3>
              <p>
                In its September 2026 parliamentary submission (printed p. 11), the Australian eSafety Commissioner reported that regulatory engagement with model-hosting platforms directly led Hugging Face to update its rules concerning model misuse <Source id={69} /><Source id={70} />. Policy and technical controls at the repository layer are operationally feasible.
              </p>
            </article>
          </div>
        </Section>
      </section>

      <Section
        title="3. Nine Accountability Demands for Model Repositories"
        description="Concrete, proportionate governance standards derived from our technical inventory, Hugging Face Content Policy review, and regulatory precedent."
      >
        <div className="grid-3">
          {nineDemands.map(([num, title, desc]) => (
            <article key={num} className="panel">
              <span className="ref-number">{num}</span>
              <h3 style={{marginTop:'8px'}}>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="soft-section">
        <Section
          title="4. Three-Tier Open-Weight Governance Model"
          description="Separating purpose-built exploitation artifacts from dual-use photorealistic backbones and benign creative models."
        >
          <div className="grid-3">
            <article className="panel tier">
              <span>Tier 1 · Red Zone</span>
              <h3>Prohibit &amp; Remove</h3>
              <p>
                Purpose-built exploitation checkpoints, undressing pipelines, and non-consensual sexual fine-tunes. Must be prohibited under repository terms, removed promptly, and prevented from re-upload via weight-hash matching.
              </p>
            </article>

            <article className="panel tier">
              <span>Tier 2 · Amber Zone</span>
              <h3>Restrict &amp; Verify</h3>
              <p>
                High-capability photorealistic human-generation weights. Require verified publisher identity, documented safety evaluations, training-data provenance disclosures, and proportionate release holds where critical risks remain unmitigated.
              </p>
            </article>

            <article className="panel tier">
              <span>Tier 3 · Green Zone</span>
              <h3>Permit &amp; Protect</h3>
              <p>
                Stylistic, scientific, architectural, and non-biometric open-weight models, plus accredited academic red-teaming under institutional oversight and clear appeal processes.
              </p>
            </article>
          </div>

          <div style={{marginTop:'28px',display:'flex',gap:'14px',flexWrap:'wrap'}}>
            <ButtonLink href="/models/">Inspect Technical Inventory &amp; 50-Listing Snapshot</ButtonLink>
            <ButtonLink href="/downloads/platform-trust-safety-brief.md" secondary>Download Platform Trust &amp; Safety Brief (MD)</ButtonLink>
            <ButtonLink href="/model-governance/" secondary>View Supply-Chain Governance</ButtonLink>
          </div>
        </Section>
      </section>
    </>
  );
}
