import data from './data.json';

export const {
  sources,
  incidents,
  controls,
  metrics,
  completeness,
  jurisdictions,
  corrections,
  publications,
  claims,
  external_developments,
  initiative_impact
} = data;

export const checked = sources.filter((s: { verified: boolean }) => s.verified).length;

export const nav = [
  ['/', 'Overview'],
  ['/impact/', 'Human impact'],
  ['/evidence/', 'Evidence'],
  ['/incidents/', 'Incidents'],
  ['/technology/', 'Technology'],
  ['/model-governance/', 'Model governance'],
  ['/regulation/', 'Global regulation'],
  ['/accountability/', 'Accountability'],
  ['/research/', 'Research library'],
  ['/sources/', 'Source register'],
  ['/transparency/', 'Transparency'],
  ['/methodology/', 'Methodology'],
  ['/about/', 'About'],
  ['/corrections/', 'Corrections'],
  ['/take-action/', 'Take action']
] as const;

export const siteName = 'Consent Is Not Synthetic';

export const descriptions: Record<string, string> = {
  '/': 'Independent public-interest research and evidence-led advocacy initiative on AI-enabled sexual exploitation, child safety, and technology accountability.',
  '/impact/': 'Documented human impact of synthetic intimate imagery abuse: psychological consequences, harassment, repeated victimization, and child safeguarding.',
  '/evidence/': 'Interactive research evidence dashboard: 14 quantitative metrics, verification statuses, operational trends, and survey findings.',
  '/incidents/': 'Searchable register of 10 real-world legal and regulatory enforcement cases involving AI-generated abuse and model distribution.',
  '/technology/': 'Educational analysis of generative AI architectures, latent diffusion, LoRA adapters, synthetic identity abuse, and digital forensics limitations.',
  '/model-governance/': 'Publisher responsibilities, model card disclosures, acceptable-use terms, repository enforcement, and release hold mechanisms.',
  '/open-weights/': 'Primary-target analysis of Hugging Face and open-weight model distribution accountability, eSafety precedent, and nine repository governance demands.',
  '/regulation/': 'Comparative legal and regulatory analysis across 8 jurisdictions: India, US, UK, EU, Australia, Canada, Japan, and South Korea.',
  '/accountability/': 'Three-tier policy framework: targeted prohibition of abuse tools, risk-based release holds, and claim-to-action accountability controls.',
  '/research/': 'Complete research archive: manuscripts (V1, V2, V3, V4), public evidence briefs, India policy analysis, and downloadable research datasets.',
  '/library/': 'Research repository and public downloads catalog: research drafts, data tables, and methodological protocols.',
  '/sources/': 'Searchable bibliography of all 76 referenced studies, regulatory reports, statutes, and model cards with audit verification status.',
  '/transparency/': 'Research version changelog (V1 to V4), verified claim registry, interactive impact & accountability tracker, and public data manifest.',
  '/methodology/': 'Structured Narrative Evidence Review methodology, evidence hierarchy, PRISMA transparency principles, and audit findings.',
  '/about/': 'Mission, ethical boundaries, independence disclosure, authorship accountability, and institutional non-affiliation.',
  '/corrections/': 'Public, transparent correction history recording dated revisions, affected citations, and methodological reconciliations.',
  '/take-action/': 'Constructive advocacy pathways, official safe reporting portals, customizable public-interest letter, and research updates network.',
  '/action/': 'Safe reporting routes for intimate image abuse, advocacy tools, and policy engagement options.',
  '/models/': 'Preliminary 53-record technical inventory metadata completeness and repository governance analysis.',
  '/press/': 'Verified journalistic resources, embargoed fact sheets, executive summaries, approved scientific charts, and responsible reporting guidelines.',
  '/support/': 'Verified, confidential official reporting portals, cryptographic takedown tools, evidence preservation guidance, and crisis support for victims.'
};

export const downloads = [
  { title: 'Research Journal Manuscript · V4.1 (Defended Edition)', file: 'v4-journal.pdf', tag: 'Master Defense V4.1', desc: 'Pre-publication defended research edition with reconciled datasets, formal limitations, and statutory analysis.' },
  { title: 'Public Evidence Brief', file: 'public-evidence-brief.pdf', tag: 'Public Briefing', desc: 'A concise, 4-page overview of key findings, harms, and policy priorities.' },
  { title: 'Research Journal Manuscript · V3', file: 'v3-journal.pdf', tag: 'Archive V3', desc: '23 pages; evidence-to-action review citing 76 academic and statutory sources.' },
  { title: 'India Policy Brief', file: 'india-policy-brief.pdf', tag: 'Policy Analysis', desc: '2 pages; proposed regulatory response under amended IT Rules 2026.' },
  { title: 'Final Claim Verification Register', file: 'claim-verification-final.csv', tag: 'Audited Dataset', desc: 'Verifiable audit of 15 headline empirical claims with exact locators and denominators.' },
  { title: 'Public Data Manifest', file: 'public-data-manifest.json', tag: 'Metadata Manifest', desc: 'Cryptographic SHA-256 manifest of all public datasets and research archives.' },
  { title: 'Annotated Source Evidence', file: 'annotated-evidence.pdf', tag: 'Evidence Dossier', desc: '16 pages; source citations, summaries, excerpts, and methodological limitations.' },
  { title: 'Research Resource Directory', file: 'resource-directory.pdf', tag: 'Bibliography Index', desc: '12 pages; complete numbered reference catalog with URLs and identifiers.' },
  { title: 'Historical Research Review · V2', file: 'v2-journal.pdf', tag: 'Archive V2', desc: 'Prior draft analyzing harms taxonomy and targeted prohibition proposals.' },
  { title: 'Historical Research Review · V1', file: 'v1-journal.pdf', tag: 'Archive V1', desc: 'Original technical architecture and open-weight model capability review.' },
  { title: 'Quantitative Evidence Register', file: 'quantitative-evidence.csv', tag: 'Dataset', desc: '14 empirical metrics with denominators, periods, and audit statuses.' },
  { title: 'Claim-to-Action Register', file: 'claim-to-action.csv', tag: 'Dataset', desc: 'Six proposed policy controls linked to empirical failure modes.' },
  { title: 'Public Source Register', file: 'public-source-register.csv', tag: 'Dataset', desc: '76 bibliographic records with primary-source recheck audit status.' },
  { title: 'Incident Register', file: 'incident-register.csv', tag: 'Dataset', desc: 'Ten case and regulatory enforcement records; one conflicting duration withheld.' },
  { title: 'Model Metadata Completeness', file: 'model-metadata-completeness.csv', tag: 'Dataset', desc: 'Aggregate completeness audit across 53 general-purpose model records.' },
  { title: 'Prospective Research Protocol', file: 'research-protocol.md', tag: 'Protocol', desc: 'Structured narrative evidence review protocol and external peer-review criteria.' }
];
