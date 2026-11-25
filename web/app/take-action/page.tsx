import {Heading,Section,Note,Source,SignupCard,ButtonLink} from '../../components/ui';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta('/take-action/', 'Take Action: Protect Dignity & Demand Accountability');

const letter = `Subject: Request for stronger safeguards against AI-enabled sexual abuse

I am writing to request a review of the safeguards governing the development and distribution of image-generation systems. Published child-protection and regulatory research documents serious harm and instances of downloadable-model misuse.

Please prioritize:
1. Precise statutory prohibitions on knowingly supplied exploitation tools and fine-tunes designed for non-consensual sexual depiction.
2. Independent safety evaluations and proportionate release holds when substantiated critical residual risks exist.
3. Enforceable, victim-centred removal procedures with strict compliance audits.
4. Transparent outcome reporting distinguishing platform takedowns from measurable harm reduction.

Legitimate research and creative uses should be protected through proportionate safeguards and due process.

I am sharing evidence summaries and official references, not abusive media or victim identities.

Thank you.`;

export default function TakeActionPage() {
  return (
    <>
      <Heading
        eyebrow="Evidence to Action"
        title="Protect People. Demand Responsible Technology."
        description="Report suspected abuse through official statutory channels. Advocate for enforceable safeguards without sharing harmful imagery, naming survivors, or targeting individuals."
      />

      <Section
        title="Immediate Reporting Pathways for Affected Individuals"
        description="If you or someone you know has been targeted by synthetic intimate imagery, use these authorized reporting channels."
      >
        <div className="grid-2">
          <article className="panel">
            <span className="tag">India · Statutory Portal</span>
            <h3 style={{marginTop:'8px'}}>National Cyber Crime Reporting Portal</h3>
            <p>
              Official Government of India portal for reporting cybercrime, identity theft, and non-consensual intimate depictions. If immediate danger exists, contact emergency services (<strong>112</strong>), Childline (<strong>1098</strong>), or Women Helpline (<strong>181</strong>, subject to availability). Note: 1930 is strictly for financial cyber fraud.
            </p>
            <a className="inline-link" href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">
              Report via cybercrime.gov.in ↗
            </a>
          </article>

          <article className="panel">
            <span className="tag">International · Child Safety</span>
            <h3 style={{marginTop:'8px'}}>NCMEC &amp; Internet Watch Foundation</h3>
            <p>
              Authorized reporting channels for suspected child sexual abuse material or child exploitation imagery. Never download, screenshot, or redistribute suspected illegal images.
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap', marginTop:'12px'}}>
              <a className="inline-link" href="https://www.missingkids.org/gethelpnow/cybertipline" target="_blank" rel="noopener noreferrer">
                NCMEC CyberTipline ↗
              </a>
              <a className="inline-link" href="https://www.iwf.org.uk/" target="_blank" rel="noopener noreferrer">
                IWF Reporting ↗
              </a>
            </div>
          </article>

          <article className="panel">
            <span className="tag">Adults · Non-Consensual Imagery</span>
            <h3 style={{marginTop:'8px'}}>StopNCII.org</h3>
            <p>
              Free victim-centred platform utilizing cryptographic hashes to stop the spread of non-consensual intimate imagery across participating tech platforms without uploading the raw image.
            </p>
            <a className="inline-link" href="https://stopncii.org/" target="_blank" rel="noopener noreferrer">
              Access StopNCII.org ↗
            </a>
          </article>

          <article className="panel">
            <span className="tag">Minors · Preemptive Removal</span>
            <h3 style={{marginTop:'8px'}}>Take It Down</h3>
            <p>
              Service provided by NCMEC designed to help youth under 18 remove explicit images or videos taken of them from the public internet.
            </p>
            <a className="inline-link" href="https://takeitdown.ncmec.org/" target="_blank" rel="noopener noreferrer">
              Access Take It Down ↗
            </a>
          </article>
        </div>

        <Note>
          <strong>Safeguarding Boundary:</strong> This research initiative is not an emergency hotline, crisis center, or legal representative. Do not send intimate images, personal names, or sensitive criminal allegations to this website.
        </Note>
      </Section>

      <Section
        title="Policy Engagement &amp; Platform Accountability"
        description="Constructive avenues for engaging model publishers, hosting hubs, and policymakers."
      >
        <div className="grid-3">
          <article className="panel">
            <h3>Model-Hosting Repositories</h3>
            <p>
              Use official terms of service reporting mechanisms to flag specific model weights purpose-built for non-consensual intimate imagery.
            </p>
            <a href="https://huggingface.co/content-policy" className="inline-link" target="_blank" rel="noopener noreferrer">
              Hugging Face Content Policy ↗
            </a>
          </article>

          <article className="panel">
            <h3>Ministry Consultations (India)</h3>
            <p>
              Participate in public consultations regarding the amended IT Rules 2026 and advocate for rigorous compliance auditing.
            </p>
            <a href="https://www.meity.gov.in/" className="inline-link" target="_blank" rel="noopener noreferrer">
              Ministry of Electronics &amp; IT (MeitY) ↗
            </a>
          </article>

          <article className="panel">
            <h3>Child Protection Organizations</h3>
            <p>
              Collaborate with international child protection NGOs on evidence-based prevention and demand-side research.
            </p>
            <div style={{display:'flex', gap:'12px', flexWrap:'wrap', marginTop:'10px'}}>
              <a href="https://www.unicef.org/india/" className="inline-link" target="_blank" rel="noopener noreferrer">UNICEF India ↗</a>
              <a href="https://ecpat.org/" className="inline-link" target="_blank" rel="noopener noreferrer">ECPAT ↗</a>
            </div>
          </article>
        </div>
      </Section>

      <Section
        title="Public-Interest Advocacy Letter"
        description="A respectful, evidence-based letter template you can adapt and submit to legislators, platforms, or research institutions."
      >
        <div className="panel letter">
          <textarea
            id="advocacy-letter"
            aria-label="Editable advocacy letter"
            rows={14}
            defaultValue={letter}
          />
          <div style={{display:'flex', alignItems:'center', gap:'14px', flexWrap:'wrap'}}>
            <button className="button primary" data-copy="advocacy-letter" type="button">
              Copy Letter to Clipboard
            </button>
            <span aria-live="polite" data-copy-status className="micro"></span>
          </div>
        </div>
      </Section>

      <Section
        title="Share Peer-Reviewed Policy Briefs"
        description="Download concise briefing documents to share with colleagues, journalists, and community leaders."
      >
        <div className="grid-2">
          <article className="panel">
            <h3>Public Evidence Brief</h3>
            <p>Four-page accessible summary for community leaders, journalists, and educators.</p>
            <a className="inline-link" href="/downloads/public-evidence-brief.pdf">Download PDF ↗</a>
          </article>

          <article className="panel">
            <h3>Regulatory Policy Brief</h3>
            <p>Two-page focused legal analysis on intermediary obligations under IT Rules 2026.</p>
            <a className="inline-link" href="/downloads/india-policy-brief.pdf">Download PDF ↗</a>
          </article>
        </div>
      </Section>

      <Section
        title="Join the Research &amp; Updates Pool"
        description="Receive peer notifications when new empirical audits, statutory reviews, and research datasets are released."
      >
        <SignupCard
          title="Stay Informed on AI Safety &amp; Dignity Research"
          subtitle="Privacy-first research distribution. Unbundled consent, no tracking cookies, unsubscribe anytime."
        />
      </Section>
    </>
  );
}
