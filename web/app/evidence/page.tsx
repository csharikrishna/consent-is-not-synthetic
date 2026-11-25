import Link from 'next/link';
import {Heading, Section, Bars, Source, Note, ButtonLink} from '../../components/ui';
import {MetricExplorer, IncidentExplorer, JurisdictionExplorer, Completeness} from '../../components/Explorer';
import {IwfSurgeTrendChart, DemographicPrevalenceChart} from '../../components/charts';
import {jurisdictions} from '../../lib/content';
import {pageMeta, assetPath} from '../../lib/seo';

export const metadata = pageMeta(
  '/evidence/',
  'Evidence Dashboard & Quantitative Data Explorer — Consent Is Not Synthetic',
  'Interactive research evidence dashboard: 14 quantitative harm metrics, historical time-series trends, survey victimization datasets, 10 adjudicated incident records, and 8-jurisdiction statutory comparisons.'
);

const trendDatasets = [
  {
    id: 'iwf-video',
    label: 'IWF Criminal AI Videos (2024–2025)',
    title: 'Photorealistic Criminal AI Videos Assessed by IWF',
    desc: 'Assessed operational video files confirmed by IWF analysts worldwide. Reflects media items, not individual victims.',
    items: [
      { label: '2024 Full Year', value: 13, display: '13 videos' },
      { label: '2025 Full Year', value: 3443, display: '3,443 videos (>260x)' }
    ],
    max: 3500,
    source: [3, 4]
  },
  {
    id: 'iwf-reports',
    label: 'IWF Reports Involving AI (2024–2025)',
    title: 'Hotline Reports Involving Realistic AI Abuse Media',
    desc: 'Public and analyst reports received by the Internet Watch Foundation.',
    items: [
      { label: '2024 Reporting Year', value: 193, display: '193 reports' },
      { label: '2025 Reporting Year', value: 491, display: '491 reports (+154%)' }
    ],
    max: 500,
    source: [1]
  },
  {
    id: 'ncmec-audit',
    label: 'NCMEC Staff Triage vs Provider Flags',
    title: 'NCMEC CyberTipline AI Abuse Triage Gap (2023–2025)',
    desc: 'Demonstrates the stark identification gap between platform self-reporting and specialized hotline analyst categorization.',
    items: [
      { label: 'Provider Self-Marked Reports', value: 11000, display: '~11,000' },
      { label: 'NCMEC Staff Categorized AI Files', value: 158000, display: '>158,000 (14x gap)' }
    ],
    max: 160000,
    source: [6]
  },
  {
    id: 'childline-reports',
    label: 'UK Youth Faked Image Reports',
    title: 'Reports from British Minors to Report Remove',
    desc: 'Under-18s reporting intimate imagery of themselves that they state has been faked or manipulated.',
    items: [
      { label: '2025 Full Year', value: 397, display: '397 received / 221 actioned' },
      { label: '2026 First 6 Months', value: 420, display: '420 received / 268 actioned' }
    ],
    max: 450,
    source: [55]
  }
];

const surveyDatasets = [
  {
    id: 'chi-survey',
    label: 'ACM CHI 10-Country Adult Survey',
    title: 'Cross-National Self-Reported Sexual Deepfake Prevalence',
    desc: 'Representative academic survey of 16,145 adults across 10 diverse countries (US, UK, India, Brazil, Japan, etc.).',
    items: [
      { label: 'Self-Reported Personal Victimization', value: 2.2, display: '2.2% of adults' },
      { label: 'Self-Reported Perpetration / Commission', value: 1.8, display: '1.8% of adults' }
    ],
    max: 3,
    source: [65]
  },
  {
    id: 'esafety-youth',
    label: 'Australian eSafety Youth Survey',
    title: 'Fabricated Intimate Imagery Among Australian Children',
    desc: 'Direct disclosure survey of 1,948 Australian children aged 10–17 administered under strict ethical safeguarding.',
    items: [
      { label: 'Lifetime Victimization', value: 3.0, display: '3.0% of children' },
      { label: 'Past 12 Months Victimization', value: 1.0, display: '1.0% of children' }
    ],
    max: 4,
    source: [68]
  },
  {
    id: 'thorn-us',
    label: 'Thorn US Teen Study',
    title: 'US Young People Targeted by Deepfake Nudes',
    desc: 'National survey of 1,200 US youth aged 13–20; highlights gendered targeting of female students.',
    items: [
      { label: 'Targeted by Deepfake Nude', value: 6.0, display: '6.0% of youth' },
      { label: 'Non-Targeted Baseline', value: 94.0, display: '94.0%' }
    ],
    max: 100,
    source: [56]
  }
];

export default function Evidence() {
  return (
    <>
      <Heading
        eyebrow="02 / Empirical Research &amp; Data"
        title="Evidence Dashboard &amp; Research Visualizations"
        description="Explore verified historical time-series trends, survey victimization datasets, real-world enforcement dockets, and comparative statutory frameworks. Every figure links directly to its audited primary source."
      />

      {/* 1. HISTORICAL TIME-SERIES TRENDS */}
      <Section title="1. Reported Operational Trends">
        <p className="lede">
          Comparative data across standardized reporting intervals demonstrates an unprecedented escalation in photorealistic synthetic abuse material following the widespread availability of open-weight diffusion backbones.
        </p>

        <div style={{marginTop:'22px',marginBottom:'28px'}}>
          <IwfSurgeTrendChart />
        </div>

        <div data-chart-group style={{marginTop:'24px'}}>
          <div className="tabs" role="group" aria-label="Select historical trend dataset">
            {trendDatasets.map((d, i) => (
              <button key={d.id} type="button" data-chart-tab={d.id} aria-pressed={i === 0}>
                {d.label}
              </button>
            ))}
          </div>

          {trendDatasets.map((d, i) => (
            <div key={d.id} data-chart-panel={d.id} hidden={i !== 0}>
              <Bars
                title={d.title}
                description={d.desc}
                items={d.items}
                max={d.max}
                source={d.source}
              />
            </div>
          ))}
        </div>

        <Note>
          <strong>Methodological Disaggregation:</strong>
          Each series reflects distinct operational triage protocols and measurement units (operational reports assessed vs raw files flagged vs individual disclosures). The bars within each tab illustrate intra-series growth over time, but are not mutually interchangeable across tabs. Click any citation tag (e.g. <Source id={3}/>) to inspect its audited locator.
        </Note>
      </Section>

      {/* 2. VICTIMIZATION EVIDENCE */}
      <section className="soft-section">
        <Section title="2. Victimization Prevalence: Cross-National Surveys">
          <p>
            Epidemiological and household survey research across independent jurisdictions confirms that non-consensual synthetic intimate imagery has transitioned from an isolated edge case to a widespread societal harm affecting millions of people.
          </p>

          <div style={{marginTop:'22px',marginBottom:'28px'}}>
            <DemographicPrevalenceChart />
          </div>

          <div data-chart-group style={{marginTop:'24px'}}>
            <div className="tabs" role="group" aria-label="Select victimization survey dataset">
              {surveyDatasets.map((d, i) => (
                <button key={d.id} type="button" data-chart-tab={d.id} aria-pressed={i === 0}>
                  {d.label}
                </button>
              ))}
            </div>

            {surveyDatasets.map((d, i) => (
              <div key={d.id} data-chart-panel={d.id} hidden={i !== 0}>
                <Bars
                  title={d.title}
                  description={d.desc}
                  items={d.items}
                  max={d.max}
                  source={d.source}
                />
              </div>
            ))}
          </div>

          <div className="grid-2" style={{marginTop:'20px'}}>
            <div className="panel">
              <span className="tag">UNICEF Disrupting Harm Survey</span>
              <h3 style={{marginTop:'8px'}}>1.2 Million+ Children Across 11 Nations</h3>
              <p className="micro">
                Household survey of internet-using youth aged 12–17 in 11 countries (South Africa, Kenya, Philippines, Colombia, etc.). Population-weighted estimate indicating at least 1.2 million victims in one year <Source id={53}/>.
              </p>
            </div>
            <div className="panel">
              <span className="tag">Severe Psychological Morbidity</span>
              <h3 style={{marginTop:'8px'}}>Fourfold Increase in Self-Harm Odds</h3>
              <p className="micro">
                UNICEF Innocenti study of 20 million youth in 21 countries established that children experiencing tech-facilitated sexual exploitation face roughly fourfold higher odds of self-harm and suicidal ideation <Source id={54}/>.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* 3. QUANTITATIVE EVIDENCE REGISTER */}
      <Section
        title="3. Quantitative Evidence Register (14 Curated Measures)"
        description="Filter and search the complete register of 14 empirical measurements from the research review. Filter by unit of measurement or search by keywords. Every statistic includes its denominator, timeframe, and interpretation caveat."
      >
        <MetricExplorer />
        <div style={{marginTop:'20px',display:'flex',gap:'12px',flexWrap:'wrap',alignItems:'center'}}>
          <a href={assetPath('/downloads/public-source-register.csv')} download className="button secondary" style={{fontSize:'13px',padding:'9px 16px',minHeight:'40px'}}>
            Download Source Register (CSV) ↓
          </a>
          <a href={assetPath('/downloads/citation-audit.csv')} download className="button secondary" style={{fontSize:'13px',padding:'9px 16px',minHeight:'40px'}}>
            Download Citation Audit Register (CSV) ↓
          </a>
          <span className="micro muted">Machine-readable data tables published under CC BY 4.0.</span>
        </div>
      </Section>

      {/* 4. REAL-WORLD INCIDENT REGISTER */}
      <section className="soft-section">
        <Section
          title="4. Real-World Incidents &amp; Judicial Enforcement Register"
          description="A chronological record of 10 verified legal proceedings, regulatory fines, and platform interventions. Distinguishes criminal indictments, adjudicated sentences, civil penalty orders, and regulatory notices."
        >
          <IncidentExplorer />
        </Section>
      </section>

      {/* 5. JURISDICTION LEGAL MATRIX */}
      <Section
        title="5. Global Regulatory Matrix: Comparative Statutory Analysis"
        description="Interactive comparison of legal frameworks across 8 major jurisdictions. Distinguishes active criminal statutes, mandatory platform takedown windows, and identified regulatory gaps."
      >
        <JurisdictionExplorer jurisdictions={jurisdictions} />
      </Section>

      {/* 6. RESEARCH COMPLETENESS AUDIT */}
      <section className="soft-section">
        <Section
          title="6. Research Transparency &amp; Metadata Completeness"
          description="Evaluation of metadata completeness across 53 cataloged foundation models, fine-tunes, and LoRA adapters. Demonstrates widespread provenance omissions in community distributions."
        >
          <Completeness />
          <Note>
            <strong>Research Completeness Notice:</strong>
            All 76 bibliographic citations on this platform are indexed with primary source locators and limitations; selected headline claims have undergone primary-source rechecking. The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour.
          </Note>
        </Section>
      </section>
    </>
  );
}
