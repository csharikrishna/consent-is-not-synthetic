import Link from 'next/link';
import {Heading, Section, Stat, Source, Note, Chain, ButtonLink, Eyebrow} from '../../components/ui';
import {RegulatoryTiersPyramid} from '../../components/charts';
import {controls} from '../../lib/content';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta(
  '/accountability/',
  'Policy & Accountability Center — Consent Is Not Synthetic',
  'Evidence-to-action policy recommendations across 8 critical stakeholder groups: model developers, hosting repositories, platforms, cloud GPU hosts, regulators, legislators, education, and child protection.'
);

const stakeholders = [
  {
    role: 'AI Model Developers & Laboratories',
    problem: 'Foundation models released with unconstrained open weights are downstream fine-tuned using parameter-efficient adapters (LoRA) to remove safety alignment and generate photorealistic non-consensual imagery.',
    evidence: 'Preliminary 53-record technical inventory documents widespread use of parameter-efficient adapters (LoRA) across foundation backbones <Source id={11}/> <Source id={12}/> <Source id={16}/>.',
    responsible: 'Upstream AI model developers (Stability AI, Black Forest Labs, Alibaba, Runpod, etc.)',
    action: 'Implement architectural defense-in-depth: negative prompt conditioning baked into core latent spaces, immutable safety fine-tuning that resists low-rank inversion, and pre-release red-teaming on adversarial personalization.',
    implementation: 'Contractual terms in open-weight model licenses (e.g., OpenRAIL-M) with enforceable termination clauses, and publishing cryptographic model card benchmarks evaluating degradation under adversarial fine-tuning.',
    metric: 'Percentage of downstream community LoRAs capable of generating photorealistic anatomical nudity without triggering runtime latent collapse.',
    caveats: 'Open weights executed on offline consumer GPUs cannot be remotely revoked; architectural latent guards can still face adversarial distillation over time.'
  },
  {
    role: 'Model-Hosting Repositories & Hubs',
    problem: 'In the preliminary 53-record technical inventory, upload-identity verification, model-card safety evaluations, and training-dataset provenance were not established from collected desk-review fields; additional publisher-level verification is required before generalizing across repositories.',
    evidence: 'The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata, requiring publisher-level verification <Source id={9}/> <Source id={10}/>.',
    responsible: 'Hosting platforms (Hugging Face, Civitai, GitHub, ModelScope)',
    action: 'Mandate verified publisher phone/email authentication, require affirmative training dataset provenance declarations, implement automated pre-upload heuristic scanning for predatory anatomical tags, and enforce hash-based takedown registers.',
    implementation: 'Integration of automated safety linters into model pull requests; fast-track 24-hour statutory takedown portals for child protection hotlines and affected individuals.',
    metric: 'Median platform response and removal latency for verified community abuse reports; percentage of public models with validated publisher identity.',
    caveats: 'Aggressive automated scanning may flag legitimate academic red-teaming research; requires transparent, due-process appeal pathways.'
  },
  {
    role: 'Social Media & Interactive Platforms',
    problem: 'Commercial platforms act as viral distribution funnels for non-consensual synthetic media, while relying on slow, reactive victim reporting mechanisms.',
    evidence: 'Over 60% of child technology-facilitated sexual exploitation cases involve mainstream social networks <Source id={54}/>; 397 reports received by UK Childline in 2025 rose to 420 in H1 2026 alone <Source id={55}/>.',
    responsible: 'Interactive computer services & social networks (Meta, X, TikTok, YouTube, Telegram, Discord)',
    action: 'Deploy automated perceptual hash matching (integrating StopNCII and Take It Down databases), enforce strict 24-hour to 48-hour takedown windows upon receipt of verified victim notices, and terminate repeat distributor accounts.',
    implementation: 'API integration with global hashing consortiums; displaying prominent in-app reporting flows specifically tailored for synthetic sexual abuse.',
    metric: 'Proportion of reported synthetic NCII items removed within statutory time limits (48 hours US / 2h Rule 3(2)(b) or 3h Rule 3(1)(d) India / 24 hours Australia).',
    caveats: 'Content moderation at scale faces challenges with end-to-end encrypted messaging channels (e.g. Telegram); platform takedown does not remove local source files.'
  },
  {
    role: 'Cloud GPU & Infrastructure Providers',
    problem: 'Commercial undressing web applications and Telegram bot services rely on low-cost, on-demand serverless cloud GPU containers to execute inference at massive scale without owning physical servers.',
    evidence: 'ISD documented 20.7 million monthly visits across 31 sampled commercial abuse websites relying on cloud GPU hosting pipelines <Source id={20}/> <Source id={66}/>.',
    responsible: 'Cloud compute & serverless GPU providers (RunPod, Lambda Labs, AWS, Google Cloud, CoreWeave)',
    action: 'Implement Know Your Business (KYB) onboarding protocols for high-concurrency serverless inference instances, and maintain zero-tolerance terms prohibiting commercial deployment of non-consensual intimate imagery generation.',
    implementation: 'Monitoring container image hashes against known abusive undressing tool registries, and terminating serverless endpoints flagged by verified law enforcement notices.',
    metric: 'Number of commercial deepfake bot services disrupted through infrastructure-level hosting termination.',
    caveats: 'Operators may migrate between anonymous offshore cloud hosts and decentralized cryptocurrency-funded compute providers.'
  },
  {
    role: 'Government Regulators & Enforcement Agencies',
    problem: 'Regulatory enforcement is often delayed by jurisdictional fragmentation, technical opacity, and lack of dedicated specialized cyber investigative resources.',
    evidence: 'Ofcom found 66.35% (69 of 104) of reviewed online service risk assessment records lacked a designated responsible person <Source id={75}/>.',
    responsible: 'Statutory regulatory authorities (eSafety Commissioner, US FTC, UK Ofcom, MeitY, EU AI Office)',
    action: 'Issue binding cross-stack enforcement orders, conduct proactive audits of model-hosting supply chains, and levy proportionate civil monetary penalties on platforms failing due-diligence standards.',
    implementation: 'Empowering specialized investigators to issue civil penalty notices directly to offshore platforms and model hubs under cross-border regulatory treaties <Source id={43}/> <Source id={71}/>.',
    metric: 'Number of formal regulatory interventions resulting in service withdrawal, geo-blocking, or verified compliance overhauls <Source id={70}/>.',
    caveats: 'Geoblocking orders can be bypassed using virtual private networks (VPNs); requires coordinated upstream supply-chain enforcement.'
  },
  {
    role: 'Legislators & Parliaments',
    problem: 'Outdated criminal statutes historically required physical photographic capture or physical contact, creating legal loopholes for synthetic forgeries and tool distributors.',
    evidence: 'Inconsistent legal definitions across jurisdictions; victims face years of civil ambiguity before criminal courts interpret legacy privacy laws <Source id={44}/> <Source id={45}/>.',
    responsible: 'National and state legislative bodies',
    action: 'Enact standalone, technology-neutral criminal offenses penalizing the intentional creation, distribution, and commercial supply of non-consensual intimate synthetic depictions (regardless of whether distributed).',
    implementation: 'Modernizing penal codes (e.g., UK Crime & Policing Act 2026 ss. 72/99 <Source id={41}/>, Canadian Bill C-16 <Source id={44}/>, South Korean Sexual Crimes Act Art 14-2 <Source id={46}/>, US Take It Down Act <Source id={40}/>).',
    metric: 'Enactment of comprehensive statutory protections with enforceable extraterritorial reach and statutory damages provisions.',
    caveats: 'Statutory drafting must carefully define criminal intent to avoid chilling legitimate creative arts, parody, political speech, and academic safety red-teaming.'
  },
  {
    role: 'Educational Institutions & School Boards',
    problem: 'Schools face a surge in peer-to-peer synthetic harassment and sexual deepfakes targeting students and teachers, with administrators lacking clear legal protocols.',
    evidence: '3% of Australian children report having had fabricated nudes made of them <Source id={68}/>; IWF and Childline report hundreds of British youth seeking removal assistance <Source id={55}/>.',
    responsible: 'Primary and secondary education boards, school administrators, and campus safety counselors',
    action: 'Establish mandatory digital consent and AI literacy curricula, implement clear zero-tolerance institutional policies classifying synthetic sexual generation as sexual harassment, and provide immediate confidential referral pathways.',
    implementation: 'Staff training on trauma-informed student intake, safe evidence preservation without circulating CSAM, and partnership with Take It Down and national hotlines.',
    metric: 'School adoption rates of formal synthetic abuse response protocols and student awareness of anonymous hashing tools.',
    caveats: 'Overly punitive zero-tolerance policies can discourage early disclosure; restorative and educational frameworks must accompany disciplinary measures.'
  },
  {
    role: 'Child Protection & Safeguarding NGOs',
    problem: 'Non-governmental victim support organizations are overwhelmed by the volume of synthetic media reports and lack resources to process complex AI cases.',
    evidence: 'Over 1.2 million internet-using youth estimated affected across 11 surveyed nations <Source id={53}/>; NCMEC handling >400k generative AI reports <Source id={7}/>.',
    responsible: 'Civil society organizations, victim advocacy groups, and international safety consortiums (UNICEF, ECPAT, IWF, CCRI)',
    action: 'Expand international funding for on-device hashing technologies, deliver community-level awareness campaigns dispelling the myth of &ldquo;victimless&rdquo; AI generation, and provide legal aid to survivors.',
    implementation: 'Deploying multilingual public awareness resources and establishing direct coordination hotlines with local police cyber cells.',
    metric: 'Average survivor intake wait times and verified takedown success rates across participating platforms.',
    caveats: 'NGOs rely on donor and public funding; sustainable statutory funding models are required to match commercial generative growth.'
  }
];

export default function AccountabilityPage() {
  return (
    <>
      <Heading
        eyebrow="03 / Public Policy &amp; Technology Accountability"
        title="Safety Before Release. Accountability Across the Supply Chain."
        description="An evidence-to-action policy framework targeting documented harmful supply across 8 critical stakeholder groups, while establishing clear safe harbors for legitimate research and creative expression."
      />

      {/* STATUTORY HARMS SUMMARY */}
      <Section title="Documented Governance &amp; Regulatory Precedents">
        <div className="grid-3">
          <Stat
            value="8"
            label="High-Traffic Services Disrupted by Regulatory Action"
            note="Australian eSafety Commissioner, November 2026. Prior combined traffic exceeded 200,000 monthly visits."
            refs={[70]}
          />
          <Stat
            value="AUD 343,500"
            label="Landmark Civil Penalty for Synthetic Nude Distribution"
            note="Federal Court of Australia penalty plus costs for repeatedly posting deepfakes of Australian women."
            refs={[71]}
          />
          <Stat
            value="66.35%"
            label="Risk Assessment Records Lacking Named Officer"
            note="Ofcom audit (69 of 104 records). Printed page 18; highlights systemic platform oversight gaps."
            refs={[75]}
          />
        </div>

        <div className="callout" style={{marginTop:'24px'}}>
          <div>
            <h3>Repository Accountability is Demonstrated Precedent</h3>
            <p>
              When the Australian eSafety Commissioner presented evidence of downloaded open-weight models being weaponized against school students, Hugging Face updated its terms of service and content policies <Source id={69}/>. Proactive governance across model supply chains is technically feasible, legally sound, and practically effective.
            </p>
          </div>
          <ButtonLink href="/models/">Inspect Model Hub Research</ButtonLink>
        </div>
      </Section>

      {/* THE THREE-TIER FRAMEWORK */}
      <section className="soft-section">
        <Section
          title="The Three-Tier Supply Chain Framework"
          description="A principled public-interest model distinguishing intentional abuse from general-purpose research."
        >
          <div style={{marginBottom:'28px'}}>
            <RegulatoryTiersPyramid />
          </div>

          <div className="grid-3 tier-grid">
            <article className="panel tier">
              <span>Tier 01 / Prohibit</span>
              <h3>Purpose-Built Abuse Tools</h3>
              <p>
                Strict civil and criminal prohibitions on the commercial development, hosting, and supply of software, websites, and fine-tunes designed or adapted specifically to generate non-consensual sexual imagery or CSAM.
              </p>
            </article>

            <article className="panel tier">
              <span>Tier 02 / Restrict &amp; Screen</span>
              <h3>Unresolved Supply-Chain Risk</h3>
              <p>
                Mandate independent safety assessments, verified publisher identity, and automated pre-upload heuristic screening for high-capacity open-weight models and repository hosting hubs.
              </p>
            </article>

            <article className="panel tier">
              <span>Tier 03 / Permit &amp; Protect</span>
              <h3>Legitimate Research &amp; Creative Use</h3>
              <p>
                Establish clear legal safe harbors for academic red-teaming, computer vision benchmarking, consensual artistic expression, and legitimate safety evaluations under accredited ethical oversight.
              </p>
            </article>
          </div>
        </Section>
      </section>

      {/* 8 STAKEHOLDER RECOMMENDATIONS */}
      <Section
        title="Comprehensive Recommendations Across 8 Stakeholder Groups"
        description="Every proposed intervention identifies the documented empirical failure, the responsible actor, the specific reform required, implementation pathways, and measurable evaluation metrics."
      >
        <div style={{display:'grid', gap:'22px'}}>
          {stakeholders.map((s, idx) => (
            <article key={s.role} className="panel" style={{borderLeft:'4px solid var(--accent)'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'8px'}}>
                <span className="tag">Stakeholder Group 0{idx + 1}</span>
                <span className="micro muted">Evidence-Grounded Recommendation</span>
              </div>
              <h3 style={{fontSize:'1.3rem',marginTop:'8px',marginBottom:'12px'}}>{s.role}</h3>
              
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'16px'}}>
                <div style={{background:'#fcf5f7',padding:'14px',borderRadius:'8px'}}>
                  <strong style={{color:'var(--accent)',fontSize:'12px',textTransform:'uppercase',letterSpacing:'.06em'}}>Documented Problem &amp; Evidence</strong>
                  <p style={{fontSize:'13.5px',margin:'6px 0 0',lineHeight:1.6}}>{s.problem}</p>
                  <p className="micro muted" style={{marginTop:'8px'}}><strong>Empirical Grounding:</strong> {s.evidence}</p>
                </div>

                <div style={{background:'#f6f9f7',padding:'14px',borderRadius:'8px'}}>
                  <strong style={{color:'#156933',fontSize:'12px',textTransform:'uppercase',letterSpacing:'.06em'}}>Proposed Specific Action &amp; Implementation</strong>
                  <p style={{fontSize:'13.5px',margin:'6px 0 0',lineHeight:1.6}}>{s.action}</p>
                  <p className="micro muted" style={{marginTop:'8px'}}><strong>Implementation Mechanism:</strong> {s.implementation}</p>
                </div>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginTop:'14px',paddingTop:'12px',borderTop:'1px solid var(--line)',fontSize:'13px'}}>
                <div>
                  <strong>Expected Outcome Metric:</strong>
                  <span className="muted" style={{display:'block',marginTop:'3px'}}>{s.metric}</span>
                </div>
                <div>
                  <strong>Limitations &amp; Boundary Caveats:</strong>
                  <span className="muted" style={{display:'block',marginTop:'3px'}}>{s.caveats}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* DEDICATED INDIA POLICY ANALYSIS */}
      <section className="soft-section">
        <Section
          title="Dedicated Policy Focus: Republic of India"
          description="Analysis of India's statutory framework under the Information Technology Act, 2000 and the consolidated IT (Intermediary Guidelines) Amendment Rules, 2026."
        >
          <div className="grid-2">
            <article className="panel">
              <span className="tag">Enacted Statutory Framework</span>
              <h3 style={{marginTop:'8px'}}>IT Rules 2026: Expedited Response Deadlines</h3>
              <p>
                India has established some of the world&rsquo;s most stringent takedown deadlines for synthetic intimate abuse:
              </p>
              <ul className="plain-list" style={{margin:'10px 0'}}>
                <li><strong>Rule 3(2)(b) — 2-Hour Window:</strong> Intermediaries must take all reasonable and practicable measures to disable access within two hours of receiving a complaint from an individual or authorized person regarding non-consensual sexually explicit content <Source id={74}/>.</li>
                <li><strong>Rule 3(1)(d) — 3-Hour Window:</strong> Intermediaries must remove unlawful content within three hours of receiving formal actual knowledge via court order or authorized government notification <Source id={74}/>.</li>
                <li><strong>Rule 3(3) — Synthetic Due Diligence:</strong> Mandates clear provenance notices and technical watermarking for synthetic information generated or hosted on intermediary systems <Source id={37}/>.</li>
              </ul>
            </article>

            <article className="panel">
              <span className="tag">Implementation Challenges</span>
              <h3 style={{marginTop:'8px'}}>Operational Gaps &amp; Proposed Reforms</h3>
              <p>
                While statutory timelines are aggressive, significant enforcement hurdles persist in practice:
              </p>
              <ul className="plain-list" style={{margin:'10px 0'}}>
                <li><strong>Offshore Supply-Chain Evasion:</strong> Foreign model hubs, decentralized torrent trackers, and anonymous Telegram bots frequently lack resident Grievance Officers in India, complicating direct rule enforcement.</li>
                <li><strong>Technical Verification Capacity:</strong> State-level cyber cells require standardized tooling to authenticate digital evidence without requiring survivors to circulate original explicit files.</li>
                <li><strong>Statutory Damages:</strong> Civil remedies under Section 43A of the IT Act should be strengthened to provide statutory minimum compensation for survivors of synthetic dignitary violations.</li>
              </ul>
            </article>
          </div>

          <div style={{marginTop:'24px',display:'flex',gap:'14px',flexWrap:'wrap',alignItems:'center'}}>
            <ButtonLink href="/downloads/india-policy-brief.pdf">
              Download India Policy Brief (PDF) ↓
            </ButtonLink>
            <ButtonLink href="/regulation/" secondary>
              Compare All 8 Global Jurisdictions
            </ButtonLink>
          </div>
        </Section>
      </section>

      {/* CLAIM TO ACTION REGISTER */}
      <Section
        title="Claim-to-Action Evidence Register (Controls C01–C06)"
        description="Direct mapping from documented empirical failure modes to specific policy interventions, responsible stakeholders, and outcome metrics."
      >
        <div className="control-list">
          {controls.map((c) => (
            <article key={c.control_id} className="panel control">
              <div>
                <span className="tag">{c.control_id} · {c.status}</span>
                <h3 style={{marginTop:'8px'}}>{c.proposed_action}</h3>
                <p className="micro muted" style={{marginTop:'6px'}}><strong>Documented Problem:</strong> {c.documented_problem}</p>
                <div className="refs" style={{marginTop:'12px'}}>
                  {c.source_refs.split(';').map((n) => (
                    <Source key={n} id={Number(n)} />
                  ))}
                </div>
              </div>
              <dl>
                <dt>Responsible Actor</dt>
                <dd>{c.accountable_actor}</dd>
                <dt>Outcome Metric</dt>
                <dd>{c.outcome_metric}</dd>
                <dt>Denominator</dt>
                <dd>{c.denominator}</dd>
                <dt>Evaluation Caveat</dt>
                <dd>{c.caveat}</dd>
              </dl>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
