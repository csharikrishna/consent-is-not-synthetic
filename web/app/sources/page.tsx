import {Heading,Section,Note,Stat,ButtonLink} from '../../components/ui';
import {SourceExplorer} from '../../components/Explorer';
import {sources, checked} from '../../lib/content';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta('/sources/', 'Source Register & Annotated Bibliography');

export default function SourcesPage() {
  return (
    <>
      <Heading
        eyebrow="Bibliographic Provenance"
        title="Source Register &amp; Annotated Bibliography"
        description="A complete index of all 76 academic studies, official child-safety reports, statutes, and model documentation underpinning this research initiative."
      />

      <Section
        title="Audit Verification Breakdown"
        description="We practice radical research transparency: distinguishing verified primary-source rechecks from inherited review citations."
      >
        <div className="grid-3" style={{marginBottom:'24px'}}>
          <Stat
            value="76"
            label="Total Bibliographic Entries"
            note="Indexed across harm studies, regulatory statutes, and technical specifications."
            refs={[]}
          />
          <Stat
            value={String(checked)}
            label="Selected Claims Rechecked"
            note="Independently verified against live publisher sources on 25 November 2026."
            refs={[]}
          />
          <Stat
            value={String(sources.length - checked)}
            label="Inherited · Pending Review"
            note="Retained from earlier manuscript drafts; awaiting independent external audit."
            refs={[]}
          />
        </div>

        <Note>
          <strong>Meaning of Verification Status:</strong> An entry marked <em>Selected claim rechecked</em> indicates that the specific statistic or claim cited in our primary evidence tables was verified against the primary document URL. It does not mean every claim throughout that publication has been audited. All remaining entries are explicitly marked as inherited pending external peer review.
        </Note>
      </Section>

      <Section
        title="Searchable Bibliography Index"
        description="Search by author, publisher, keyword, or filter by audit verification status and evidence stream."
      >
        <SourceExplorer />
        <div className="text-link" style={{marginTop:'24px'}}>
          <a href="/downloads/public-source-register.csv" download className="inline-link">
            Download Public Source Register CSV ↓
          </a>
        </div>
      </Section>

      <Section title="Citation &amp; Integrity Policy">
        <div className="panel">
          <h3>Integrity Standards</h3>
          <p>
            This bibliography never invents DOIs, publication years, author identities, or academic citations. Technical model cards and code repository citations retain metadata for bibliographic completeness, while direct execution links for unmoderated tools are omitted from the public index to prevent misuse.
          </p>
        </div>
      </Section>
    </>
  );
}
