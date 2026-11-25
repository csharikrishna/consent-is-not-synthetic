import {Heading,Section,Note,Source,ButtonLink} from '../../components/ui';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta('/model-governance/', 'Model Publisher & Repository Governance');

export default function ModelGovernancePage() {
  return (
    <>
      <Heading
        eyebrow="Platform &amp; Supply-Chain Accountability"
        title="Model Publisher &amp; Repository Governance"
        description="Establishing proportionate obligations across model developers, fine-tuners, and hosting repositories to prevent abuse while protecting legitimate research."
      />

      <Section
        title="The Generative AI Supply Chain"
        description="Intervention must target the specific tier of the technology stack where risk is introduced, rather than treating all software identically."
      >
        <div className="grid-3">
          <article className="panel">
            <span className="tag">Tier 01</span>
            <h3>Foundation Developers</h3>
            <p>
              Creators of base pretrained models (e.g., Latent Diffusion, SDXL, FLUX, Qwen). Responsibilities include dataset screening, documentation of unlearned safety concepts, and clear license restrictions.
            </p>
            <div className="refs"><Source id={11} /><Source id={12} /><Source id={13} /></div>
          </article>

          <article className="panel">
            <span className="tag">Tier 02</span>
            <h3>Fine-Tuners &amp; Adapters</h3>
            <p>
              Community actors creating LoRA adapters and fine-tunes. Lightweight adapters (150 MB–700 MB) can alter base model representations to bypass safety boundaries or specialize in uncensored depiction.
            </p>
            <div className="refs"><Source id={16} /><Source id={18} /></div>
          </article>

          <article className="panel">
            <span className="tag">Tier 03</span>
            <h3>Repositories &amp; Hubs</h3>
            <p>
              Model-sharing platforms (e.g., Hugging Face, Civitai). Critical responsibilities include enforcing terms against purpose-built abuse weights, maintaining abuse reporting intake, and cooperating with regulatory inquiries.
            </p>
            <div className="refs"><Source id={9} /><Source id={10} /><Source id={69} /></div>
          </article>
        </div>
      </Section>

      <Section
        title="Key Governance Pillars"
        description="A defensible governance framework requires verifiable transparency rather than superficial marketing claims."
      >
        <div className="grid-2">
          <article className="panel">
            <h3>1. Standardized Safety Documentation</h3>
            <p>
              Model cards must record training dataset provenance, declared parameter counts, intended use domains, known failure modes, and safety evaluations. Our preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata—requiring publisher-level verification.
            </p>
            <div className="text-link"><ButtonLink href="/methodology/" secondary>Review Completeness Audit</ButtonLink></div>
          </article>

          <article className="panel">
            <h3>2. Enforceable Acceptable-Use Licenses</h3>
            <p>
              Open licenses must incorporate enforceable downstream restrictions against non-consensual intimate depiction and child sexual exploitation (e.g., CreativeML-OpenRAIL terms). Repositories must treat license violations as platform terms violations.
            </p>
            <div className="refs"><Source id={9} /><Source id={13} /></div>
          </article>

          <article className="panel">
            <h3>3. Pre-Release Independent Risk Holds</h3>
            <p>
              When an artifact demonstrates critical, unmitigated residual risks of producing illegal material or automated sexual impersonation, developers and distributors must implement a proportionate release hold pending third-party audit.
            </p>
            <div className="refs"><Source id={63} /><Source id={69} /></div>
          </article>

          <article className="panel">
            <h3>4. Responsive Repository Moderation</h3>
            <p>
              Repositories must deploy proactive screening for known abuse tags, maintain accessible complaint mechanisms, and act swiftly upon substantiated reports. Australia&rsquo;s eSafety engagement demonstrated that host policy changes are technically and operationally feasible.
            </p>
            <div className="refs"><Source id={69} /><Source id={70} /></div>
          </article>
        </div>
      </Section>

      <Section title="Fairness &amp; Precision in Model Evaluation">
        <Note>
          <strong>Do Not Conflate Open Weights with Inherent Danger:</strong> Open-source and open-weight models drive academic security research, competitive innovation, and transparency. A model should never be declared &ldquo;criminal&rdquo; or &ldquo;dangerous&rdquo; solely because it is open-weight or community-developed. Governance must target documented harmful conduct and purpose-built exploitation tools.
        </Note>
      </Section>

      <section className="wrap section final-cta">
        <div>
          <h2>Explore Our Investigation of Model Hubs</h2>
          <p>Read our empirical audit cataloguing trending NSFW models, LoRA adapters, and content tags on Hugging Face.</p>
        </div>
        <ButtonLink href="/models/">View Hugging Face Audit</ButtonLink>
      </section>
    </>
  );
}
