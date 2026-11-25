import {Heading,Section,Note,ButtonLink} from '../../components/ui';
import {CorrectionExplorer} from '../../components/Explorer';
import {corrections} from '../../lib/content';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta('/corrections/', 'Public Corrections & Integrity Register');

export default function CorrectionsPage() {
  return (
    <>
      <Heading
        eyebrow="Scientific Integrity &amp; Transparency"
        title="Public Corrections &amp; Revisions Register"
        description="A permanent, dated record of factual corrections, citation reconciliations, and methodological boundary qualifications across our published research."
      />

      <Section
        title="Our Correction Policy"
        description="Scientific credibility means acknowledging when evidence is corrected, qualified, or reconciled. We never silently alter claims."
      >
        <div className="grid-2">
          <article className="panel">
            <h3>Permanent Public Log</h3>
            <p>
              Whenever an empirical figure, citation locator, or statutory claim is corrected or clarified, it is entered into this public register with its date of revision, previous wording, revised wording, and methodological rationale.
            </p>
          </article>

          <article className="panel">
            <h3>Evidence Rule on Conflicting Data</h3>
            <p>
              When inherited records conflict with primary sources (such as case duration discrepancies), our protocol mandates that the conflicting claim be withheld from headline public figures until independently resolved via formal public records.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="Recorded Corrections &amp; Discrepancy Log"
        description="Search through all registered corrections, citation updates, and scope qualifications."
      >
        <CorrectionExplorer corrections={corrections} />
      </Section>

      <Section title="Correction Intake Status">
        <Note>
          <strong>Public Scrutiny &amp; Intake Notice:</strong> Public correction-submission intake is currently closed on this static release pending owner-authorized operational inbox deployment. All documented revisions, withdrawn claims, and source reconciliations remain permanently logged above.
        </Note>
      </Section>
    </>
  );
}
