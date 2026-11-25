import Link from 'next/link';
import {Heading, Section, Note, Source, ButtonLink, Eyebrow} from '../../components/ui';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta(
  '/press/',
  'Press & Media Center — Consent Is Not Synthetic',
  'Verified journalistic resources, embargoed fact sheets, executive summaries, approved scientific charts, and responsible reporting guidelines on AI-enabled sexual exploitation.'
);

export default function PressCenterPage() {
  return (
    <>
      <Heading
        eyebrow="Media Operations &amp; Communications"
        title="Press &amp; Media Center"
        description="Verified evidence briefs, downloadable research packages, approved scientific figures, and responsible reporting guidelines for investigative journalists, editors, and producers."
      />

      {/* INITIATIVE OVERVIEW & HEADLINE FINDINGS */}
      <Section title="1. Initiative Overview &amp; Key Findings">
        <p className="lede">
          <strong>Consent Is Not Synthetic</strong> is an independent, non-partisan public-interest research and advocacy initiative documenting AI-enabled sexual exploitation, child safety risks, and technology supply-chain accountability.
        </p>

        <div className="grid-3" style={{marginTop:'24px'}}>
          <div className="panel stat">
            <span className="stat-number">1.2M+</span>
            <h3>Surveyed Children Affected</h3>
            <p className="micro">
              UNICEF / ECPAT / INTERPOL representative household survey established that at least 1.2 million internet-using youth aged 12–17 experienced sexual deepfake victimization across 11 surveyed countries in one year <Source id={53}/>.
            </p>
          </div>
          <div className="panel stat">
            <span className="stat-number">&gt;260x</span>
            <h3>Video Growth Rate (2024–2025)</h3>
            <p className="micro">
              The Internet Watch Foundation confirmed 3,443 photorealistic criminal AI videos in 2025 compared to 13 in 2024, with first-half 2026 findings already surpassing full-year 2025 <Source id={3}/> <Source id={4}/>.
            </p>
          </div>
          <div className="panel stat">
            <span className="stat-number">20.7M</span>
            <h3>Monthly Commercial Visits</h3>
            <p className="micro">
              Investigation by the Institute for Strategic Dialogue documented 20.7 million monthly visits across 31 sampled commercial undressing websites in May 2025 <Source id={66}/>.
            </p>
          </div>
        </div>
      </Section>

      {/* DOWNLOADABLE MEDIA PACKAGES */}
      <section className="soft-section">
        <Section title="2. Downloadable Media &amp; Briefing Resources">
          <p>
            All media packages are provided under Creative Commons Attribution 4.0 International (CC BY 4.0). Journalists may freely reproduce figures and quotes with standard attribution.
          </p>

          <div className="grid-3" style={{marginTop:'24px'}}>
            <article className="panel resource">
              <span className="tag">Fact Sheet · 1 Page</span>
              <h3 style={{marginTop:'8px'}}>Executive Fact Sheet</h3>
              <p className="micro">
                One-page verified briefing summarizing the scale, technical supply chain, legal frameworks, and core policy demands.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href="/downloads/public-evidence-brief.pdf" className="inline-link" download>
                  Download Fact Sheet (PDF) ↓
                </a>
              </div>
            </article>

            <article className="panel resource">
              <span className="tag">Policy Dossier · 2 Pages</span>
              <h3 style={{marginTop:'8px'}}>India Policy Brief</h3>
              <p className="micro">
                Analysis of India&rsquo;s IT Rules 2026 amendments, Rule 3(2)(b) 2-hour takedown windows, and supply-chain liability.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href="/downloads/india-policy-brief.pdf" className="inline-link" download>
                  Download India Brief (PDF) ↓
                </a>
              </div>
            </article>

            <article className="panel resource">
              <span className="tag">Academic Review · V4.1</span>
              <h3 style={{marginTop:'8px'}}>Full Research Journal (V4.1)</h3>
              <p className="micro">
                Defended V4.1 manuscript detailing 76 indexed references, canonical empirical metrics, and the three-tier governance framework.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href="/downloads/v4-journal.pdf" className="inline-link" download>
                  Download Manuscript (PDF) ↓
                </a>
              </div>
            </article>
          </div>

          <div className="grid-2" style={{marginTop:'18px'}}>
            <article className="panel resource">
              <span className="tag">Evidence Dossier · 16 Pages</span>
              <h3 style={{marginTop:'8px'}}>Annotated Source Evidence</h3>
              <p className="micro">
                Comprehensive reference catalog with verbatim excerpts, exact page locators, study populations, and methodological caveats.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href="/downloads/annotated-evidence.pdf" className="inline-link" download>
                  Download Evidence Dossier (PDF) ↓
                </a>
              </div>
            </article>

            <article className="panel resource">
              <span className="tag">Data Tables · CSV</span>
              <h3 style={{marginTop:'8px'}}>Verified Data &amp; Citation Ledger</h3>
              <p className="micro">
                Machine-readable structured datasets including all 76 audited citations and 14 quantitative claims with denominators.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px'}}>
                <a href="/downloads/public-source-register.csv" className="inline-link" download>
                  Download Data Ledger (CSV) ↓
                </a>
              </div>
            </article>
            <article className="panel resource">
              <span className="tag">Press Briefings · Markdown</span>
              <h3 style={{marginTop:'8px'}}>Executive Summary, Fact Sheet &amp; Backgrounder</h3>
              <p className="micro">
                Coordinated V4.1 newsroom briefings: 2-page executive summary, 1-page fact sheet, and media backgrounder.
              </p>
              <div style={{marginTop:'auto',paddingTop:'12px',display:'flex',gap:'12px',flexWrap:'wrap'}}>
                <a href="/downloads/executive-summary-2page.md" className="inline-link" style={{margin:0}} download>Executive Summary ↓</a>
                <a href="/downloads/fact-sheet-1page.md" className="inline-link" style={{margin:0}} download>Fact Sheet ↓</a>
                <a href="/downloads/media-backgrounder.md" className="inline-link" style={{margin:0}} download>Backgrounder ↓</a>
              </div>
            </article>
          </div>
        </Section>
      </section>

      {/* RESPONSIBLE REPORTING GUIDELINES */}
      <Section title="3. Ethical &amp; Responsible Reporting Guidelines">
        <p>
          Media reporting on synthetic sexual abuse directly affects victim recovery, social stigma, and public understanding. We urge newsrooms to adhere to trauma-informed reporting standards:
        </p>

        <div className="grid-2" style={{marginTop:'22px'}}>
          <div className="panel" style={{borderLeft:'3px solid #156933'}}>
            <h3 style={{color:'#156933'}}>Recommended Reporting Practices</h3>
            <ul className="plain-list" style={{margin:'10px 0'}}>
              <li><strong>Focus on Perpetrator Responsibility:</strong> Frame abuse as intentional violations of consent rather than an unavoidable consequence of technology.</li>
              <li><strong>Highlight Support Avenues:</strong> Always append verified reporting and support hotlines (e.g., Take It Down, StopNCII, National Cyber Crime portals) to articles.</li>
              <li><strong>Contextualize Statistics:</strong> Specify survey boundaries (e.g., UNICEF&rsquo;s 1.2M is across 11 surveyed nations, not an additive global total).</li>
              <li><strong>Respect Survivor Autonomy:</strong> Never name non-consenting victims or disclose identifying details without explicit, uncoerced consent.</li>
            </ul>
          </div>

          <div className="panel" style={{borderLeft:'3px solid #9b193e'}}>
            <h3 style={{color:'#9b193e'}}>Harmful Practices to Avoid</h3>
            <ul className="plain-list" style={{margin:'10px 0'}}>
              <li><strong>Do NOT Publish Tool Names or URLs:</strong> Never name, link, or provide search terms for active commercial undressing websites or unmoderated LoRAs.</li>
              <li><strong>Do NOT Reproduce Blurred / Pixelated Abuse Media:</strong> Even blurred depictions amplify dignitary harm and re-traumatize victims.</li>
              <li><strong>Do NOT Frame Abuse as &lsquo;Pranks&rsquo;:</strong> Avoid trivializing terminology such as &ldquo;schoolboy pranks&rdquo; or &ldquo;mischief&rdquo;; use accurate statutory definitions.</li>
              <li><strong>Do NOT Conflate Synthetic with Harmless:</strong> Avoid portraying synthetic imagery as &ldquo;victimless&rdquo; or less harmful than physical photography.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* RESEARCH LIMITATIONS & CORRECTIONS POLICY */}
      <Section title="4. Research Limitations &amp; Corrections Policy">
        <div className="panel">
          <h3>Epistemic Transparency &amp; Editorial Standards</h3>
          <p>
            <strong>Research Methodology:</strong> This platform is an independent desk-research initiative. All materials reflect rigorous academic synthesis, statutory reviews, and secondary data analysis. The initiative is not an accredited academic peer-reviewed journal or government statistical bureau.
          </p>
          <p style={{marginTop:'12px'}}>
            <strong>Corrections Commitment:</strong> We maintain a transparent, permanent public record of all revisions, statistical recalculations, and locator updates. If you identify a factual error, misattribution, or dated figure, please consult our <Link href="/corrections/" className="inline-link" style={{margin:0}}>Public Corrections Log</Link> or submit a formal correction request.
          </p>
        </div>

        <div className="callout" style={{marginTop:'28px'}}>
          <div>
            <Eyebrow>Media &amp; Research Inquiries</Eyebrow>
            <h2>Verified Press &amp; Source Documentation</h2>
            <p style={{marginTop:'8px'}}>
              Public operational email inboxes are withheld on this static release until owner-authorized domain MX infrastructure is live. Journalists and researchers can download all verified briefs, PDFs, and CSV registers directly from this Press Center and the Research Library.
            </p>
          </div>
          <ButtonLink href="/sources/">Browse All 76 Citations</ButtonLink>
        </div>
      </Section>
    </>
  );
}
