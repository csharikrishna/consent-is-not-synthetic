import {Heading,Section,Note,Source,ButtonLink} from '../../components/ui';
import {IncidentExplorer} from '../../components/Explorer';
import {incidents} from '../../lib/content';
import {pageMeta, assetPath} from '../../lib/seo';

export const metadata = pageMeta('/incidents/', 'Documented Incidents & Legal Case Register');

export default function IncidentsPage() {
  return (
    <>
      <Heading
        eyebrow="Legal &amp; Regulatory Register"
        title="Documented Legal, Regulatory &amp; Governance Records"
        description="A curated register of 10 legal, regulatory, and platform-governance records (comprising criminal sentences, a verdict, an investigation, civil enforcement, regulatory warnings, and policy changes)."
      />

      <Section
        title="Distinguishing Legal Categories"
        description="Legal and regulatory actions have distinct evidential standards and consequences. They should not be conflated into a generic metric of guilt."
      >
        <div className="grid-3">
          <article className="panel">
            <span className="tag">Criminal Proceedings</span>
            <h3 style={{marginTop:'8px'}}>Sentences &amp; Verdicts</h3>
            <p>
              Criminal sentences establish specific statutory violations under judicial due process. They reflect proven conduct in individual cases, not the inherent illegality of underlying dual-use technologies.
            </p>
          </article>
          <article className="panel">
            <span className="tag">Civil Enforcement</span>
            <h3 style={{marginTop:'8px'}}>Statutory Fines &amp; Injunctions</h3>
            <p>
              Civil penalties (such as Australia&rsquo;s AUD 343,500 judgment) penalize failure to comply with statutory takedown notices or regulatory orders. They are penalties paid to the state, not victim compensation.
            </p>
          </article>
          <article className="panel">
            <span className="tag">Repository Governance</span>
            <h3 style={{marginTop:'8px'}}>Terms of Service &amp; Access</h3>
            <p>
              Model hub policy shifts (e.g., terms prohibiting nudification LoRAs) represent intermediate platform interventions. They demonstrate supply-side feasibility but do not prove causal harm reduction without longitudinal victim tracking.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="Searchable Incident &amp; Enforcement Register"
        description="Filter records by jurisdiction, record type, or search by case name and outcome. Data reflects verified public court and regulatory dockets."
      >
        <IncidentExplorer />
        <div className="text-link" style={{marginTop:'24px'}}>
          <a href={assetPath('/downloads/incident-register.csv')} download className="inline-link">
            Download Incident Register CSV ↓
          </a>
        </div>
      </Section>

      <Section title="Methodological Safeguards &amp; Privacy Disclosures">
        <Note>
          <strong>Victim Safeguarding &amp; Ethical Reporting:</strong> No private survivor names, contact information, social media links, or images are hosted or disclosed in this register. Case descriptions summarize public court filings and regulatory agency announcements only.
        </Note>
        <div className="panel" style={{marginTop:'20px'}}>
          <h3>Case Duration Reconciliation Note</h3>
          <p>
            In record <code>I06</code> (Eastern District of Missouri criminal proceeding), the inherited draft register recorded an 18-year term of imprisonment, whereas the primary Department of Justice press release URL indicates 14 years. In accordance with this project&rsquo;s evidence standards, the specific duration remains withheld from headline statistics pending independent court docket verification.
          </p>
        </div>
      </Section>

      <section className="wrap section final-cta">
        <div>
          <h2>Report Suspicious or Exploitative Tool Distribution</h2>
          <p>If you encounter public repositories hosting model weights purpose-built for non-consensual sexual depiction, follow responsible reporting procedures.</p>
        </div>
        <ButtonLink href="/take-action/">View Reporting Pathways</ButtonLink>
      </section>
    </>
  );
}
