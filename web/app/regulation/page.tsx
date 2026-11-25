import {Heading,Section,Note,Source,ButtonLink} from '../../components/ui';
import {JurisdictionExplorer} from '../../components/Explorer';
import {jurisdictions} from '../../lib/content';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta('/regulation/', 'Global Regulation & Legal Matrix');

export default function RegulationPage() {
  return (
    <>
      <Heading
        eyebrow="Comparative Legal Frameworks"
        title="Global Regulation &amp; Statutory Matrix"
        description="A structured comparative review of enacted legislation, takedown deadlines, platform obligations, and regulatory gaps across 8 major jurisdictions."
      />

      <div className="wrap" style={{marginTop:'24px'}}>
        <Note>
          <strong>Legal Research Disclaimer:</strong> This regulatory comparison is informational research and has not undergone independent qualified legal review. Statutory provisions, commencement dates, and applicability thresholds are distinguished as of the 25 November 2026 research cutoff.
        </Note>
      </div>

      <Section
        title="The Shifting Regulatory Landscape"
        description="Governments worldwide are transitioning from passive intermediary safe harbors to time-bound removal duties, mandatory transparency, and developer-level accountability."
      >
        <div className="grid-3">
          <article className="panel stat">
            <h3>India Takedown Triggers (IT Rules 2021 / 2026)</h3>
            <div className="table-scroll" tabIndex={0} aria-label="India IT Rules removal triggers" style={{marginTop:'10px'}}>
              <table style={{fontSize:'0.92rem'}}>
                <tbody>
                  <tr>
                    <td><strong>Rule 3(2)(b)</strong></td>
                    <td><strong>2 hours</strong> &mdash; Reasonable &amp; practicable measures on qualifying intimate-image complaints</td>
                  </tr>
                  <tr>
                    <td><strong>Rule 3(1)(d)</strong></td>
                    <td><strong>3 hours</strong> &mdash; Removal upon qualifying court or government actual-knowledge orders</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="refs" style={{marginTop:'10px'}}><Source id={74} /></div>
          </article>

          <article className="panel stat">
            <div className="stat-number">48 hrs</div>
            <h3>US TAKE IT DOWN Act</h3>
            <p>Covered platforms must remove non-consensual depictions and known copies within 48 hours of valid notice.</p>
            <div className="refs"><Source id={40} /><Source id={72} /></div>
          </article>

          <article className="panel stat">
            <div className="stat-number">Aug 2026</div>
            <h3>EU AI Act Article 50</h3>
            <p>Mandatory transparency and machine-readable marking for synthetic content take effect across the European Union.</p>
            <div className="refs"><Source id={38} /><Source id={39} /></div>
          </article>
        </div>
      </Section>

      <Section
        title="Interactive 8-Jurisdiction Legal Explorer"
        description="Filter by operational legal status or search by country, statute, timeline, or penalty structure."
      >
        <JurisdictionExplorer jurisdictions={jurisdictions} />
      </Section>

      <Section title="Comparative Statutory Matrix">
        <div className="table-scroll" tabIndex={0} aria-label="Comparative statutory summary table">
          <table>
            <thead>
              <tr>
                <th>Jurisdiction</th>
                <th>Primary Statute</th>
                <th>Status / Effective</th>
                <th>Takedown Window</th>
                <th>Statutory Penalties</th>
                <th>Sources</th>
              </tr>
            </thead>
            <tbody>
              {jurisdictions.map((j:any) => (
                <tr key={j.id}>
                  <td><strong>{j.flag} {j.country}</strong></td>
                  <td><small>{j.statute}</small></td>
                  <td><span className="tag">{j.status}</span><br/><small>{j.effectiveDate}</small></td>
                  <td><strong>{j.timeline}</strong></td>
                  <td><small>{j.penalties}</small></td>
                  <td>
                    <div className="refs">
                      {j.sources.map((sId:number)=><Source id={sId} key={sId}/>)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Identified Cross-Border Policy Gaps">
        <div className="grid-2">
          <article className="panel">
            <h3>Decentralized &amp; Local Model Execution</h3>
            <p>
              Current regulatory frameworks focus heavily on online intermediaries and hosted web platforms. When models are downloaded as standalone safetensors weights and executed locally on consumer GPUs, platform takedown notices cannot stop offline generation.
            </p>
          </article>

          <article className="panel">
            <h3>Displacement Across Non-Compliant Jurisdictions</h3>
            <p>
              Enforcement actions in Australia, the US, and India show that commercial abuse tools rapidly mirror domains and move to offshore hosting providers that ignore civil penalty orders, highlighting the need for payment processor and domain-registrar accountability.
            </p>
          </article>
        </div>

        <div className="text-link" style={{marginTop:'24px'}}>
          <ButtonLink href="/downloads/india-policy-brief.pdf">
            Read the In-Depth India Policy Brief (PDF)
          </ButtonLink>
        </div>
      </Section>

      <Section title="Legal Advisory Disclaimer">
        <Note>
          <strong>Not Legal Advice:</strong> This comparative statutory analysis is provided solely for academic research and public-interest policy evaluation. Legal interpretations must be verified against current official statutory texts, court decisions, and competent local legal counsel.
        </Note>
      </Section>
    </>
  );
}
