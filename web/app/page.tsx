import Link from 'next/link';
import {Eyebrow, Stat, Section, Chain, ButtonLink, Source, Note, SignupCard} from '../components/ui';
import {IwfSurgeTrendChart, SupplyChainPipelineDiagram} from '../components/charts';
import {pageMeta, assetPath} from '../lib/seo';
import {HeroImage} from '../components/HeroImage';

export const metadata = pageMeta(
  '/',
  'Consent Is Not Synthetic — Public Research & Advocacy Platform',
  'Artificial Images. Real Victims. Real Consequences. Independent public-interest research and evidence-led advocacy on AI-enabled sexual exploitation, child safety, and supply-chain technology accountability.'
);

export default function Home() {
  return (
    <>
      {/* 1. HERO & PRIMARY NARRATIVE: WHAT IS HAPPENING? */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Eyebrow>Independent Public-Interest Research &amp; Advocacy</Eyebrow>
            <h1>Consent is<br/>not <em>synthetic.</em></h1>
            <p className="lede">
              Artificial images. Real victims. Real consequences.
            </p>
            <p className="hero-detail">
              AI-enabled sexual abuse is a human-rights and child-safety issue. We document the evidence, demand accountable technology, and advocate for proportionate restrictions on tools that facilitate exploitation.
            </p>
            <div className="actions">
              <ButtonLink href="/evidence/">Explore the evidence</ButtonLink>
              <ButtonLink href="/take-action/" secondary>Take action</ButtonLink>
            </div>
            <p className="micro">
              Independent desk research · 77 indexed references (67 verified, 10 pending URL verification) · Zero tracking cookies · Fair-use research publication
            </p>
          </div>
          <div className="hero-art">
            <HeroImage />
            <div className="art-caption">
              <span><span className="dot"/> DIGITAL DIGNITY</span>
              <span>PUBLIC INTEREST RESEARCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & RESEARCH CREDIBILITY STRIP */}
      <div className="wrap trust-strip">
        <span><strong>77</strong> Indexed References</span>
        <span><strong>14</strong> Quantitative Indicators</span>
        <span><strong>10</strong> Legal &amp; Regulatory Records</span>
        <span><strong>8</strong> Statutory Regimes Analyzed</span>
      </div>

      {/* 2. WHO IS BEING AFFECTED? */}
      <Section
        title="1. Who is being affected?"
        description="The victims of synthetic intimate abuse are not abstractions or digital pixels. They are school students, women in public and private life, and vulnerable youth targeted by automated harassment and financial extortion."
        id="who-is-affected"
      >
        <div className="grid-3">
          <Stat
            value="1.2M+"
            label="Children Affected Across 11 Surveyed Countries"
            note="Estimated internet-using youth aged 12–17 experiencing sexual deepfake abuse in a single year. Population-weighted survey estimate; not an additive global count."
            refs={[53]}
          />
          <Stat
            value="3.0%"
            label="Australian Children Reporting Fabricated Nudes"
            note="Lifetime prevalence among children aged 10–17 reporting an intimate image made of them without permission; 1.0% in the past year alone."
            refs={[68]}
          />
          <Stat
            value="2.2%"
            label="Adult Cross-National Self-Reported Victimization"
            note="In a ten-country survey (Umbach et al., CHI 2024), approximately 2.2% of respondents self-reported victimization and 1.8% self-reported perpetration."
            refs={[65]}
          />
        </div>

        <div className="panel" style={{marginTop:'22px',background:'#fffdfc'}}>
          <h3>Enduring Psychological and Dignitary Trauma</h3>
          <p>
            Academic and clinical qualitative research shows that victim-survivors of synthetic intimate abuse experience trauma comparable to physical violations, including chronic hypervigilance, social withdrawal, loss of employment, severe depression, and suicidal ideation <Source id={54}/> <Source id={57}/> <Source id={58}/>. The pervasive belief that &ldquo;it is only synthetic and causes no real harm&rdquo; is directly contradicted by survivor testimony and psychiatric evidence.
          </p>
          <div className="text-link" style={{marginTop:'14px'}}>
            <Link href="/impact/">Read the complete human impact &amp; harm taxonomy →</Link>
          </div>
        </div>
      </Section>

      {/* 3. HOW SERIOUS IS THE PROBLEM? */}
      <section className="soft-section">
        <Section
          title="2. How serious is the problem?"
          description="Operational hotline assessments and cross-national survey findings show substantial growth in photorealistic synthetic abuse material across reported intervals."
          id="severity"
        >
          <div className="grid-2">
            <div className="panel stat">
              <span className="stat-number">3,443</span>
              <h3>Photorealistic Criminal AI Videos Assessed by IWF in 2025</h3>
              <p>
                In 2024, the Internet Watch Foundation assessed just 13 photorealistic criminal AI videos. In 2025, that figure rose to 3,443—representing a greater than 260-fold increase in assessed files <Source id={3}/>. In the first half of 2026, findings exceeded the entire full-year total of 2025 <Source id={4}/>.
              </p>
              <div className="refs" style={{marginTop:'14px'}}>
                <Source id={3}/> <Source id={4}/> <Source id={5}/>
              </div>
            </div>

            <div className="panel stat">
              <span className="stat-number">400,000+</span>
              <h3>NCMEC CyberTipline Reports with a Generative AI Nexus</h3>
              <p>
                The National Center for Missing &amp; Exploited Children recorded over 400,000 reports in 2025 exhibiting a generative AI nexus, with over 182,000 involving the possession, generation, or attempted generation of AI-generated CSAM <Source id={7}/>. Staff analysts categorized over 158,000 AI abuse files (2023–2025) <Source id={6}/>. (Reports are not unique victims.)
              </p>
              <div className="refs" style={{marginTop:'14px'}}>
                <Source id={6}/> <Source id={7}/>
              </div>
            </div>
          </div>

          <div style={{marginTop:'26px'}}>
            <IwfSurgeTrendChart />
          </div>

          <div className="grid-3" style={{marginTop:'20px'}}>
            <div className="panel">
              <span className="tag">Commercial Proliferation</span>
              <h3 style={{marginTop:'10px'}}>20.7 Million Monthly Visits</h3>
              <p className="micro">
                An investigation by the Institute for Strategic Dialogue documented that just 31 sampled commercial undressing websites attracted over 20.7 million estimated visits in May 2025 <Source id={66}/>.
              </p>
            </div>
            <div className="panel">
              <span className="tag">Broader TFSEA Context</span>
              <h3 style={{marginTop:'10px'}}>~20 Million Children (21 Countries)</h3>
              <p className="micro">
                UNICEF Innocenti research (3 Sept 2026) estimated ~20 million children aged 12–17 across 21 countries experienced broader technology-facilitated sexual exploitation or abuse in one year (not exclusively AI-generated) <Source id={54}/>.
              </p>
            </div>
            <div className="panel">
              <span className="tag">Youth Vulnerability</span>
              <h3 style={{marginTop:'10px'}}>6% of US Teens Targeted</h3>
              <p className="micro">
                A national study by Thorn found that 6% of surveyed young people aged 13–20 reported being targeted by a deepfake nude creation, predominantly targeting young women <Source id={56}/>.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* 4. WHAT DOES THE EVIDENCE ESTABLISH? */}
      <Section
        title="3. What does the empirical evidence establish?"
        description="Our multi-year research audits establish four foundational facts that refute common industry defenses."
        id="evidence-consensus"
      >
        <div className="grid-2">
          <article className="panel">
            <span className="ref-number">01</span>
            <h3 style={{marginTop:'8px'}}>Harm is Predatory and Non-Accidental</h3>
            <p>
              Perpetrators do not accidentally generate non-consensual imagery. Commercial services deliberately advertise &ldquo;undressing&rdquo; features, operate gamified payment tokens, and market tools specifically to strip clothes from photos of acquaintances, classmates, and colleagues without consent <Source id={67}/>.
            </p>
          </article>

          <article className="panel">
            <span className="ref-number">02</span>
            <h3 style={{marginTop:'8px'}}>Hardware Execution Barriers Have Lowered</h3>
            <p>
              Parameter-efficient fine-tuning (LoRA) and memory-optimization techniques documented in Diffusers and academic literature reduce compute and VRAM requirements compared to training foundation models from scratch <Source id={16}/> <Source id={19}/>.
            </p>
          </article>

          <article className="panel">
            <span className="ref-number">03</span>
            <h3 style={{marginTop:'8px'}}>Preliminary Inventory Reveals Metadata Gaps</h3>
            <p>
              The preliminary 53-record technical inventory identified gaps in the metadata collected during this investigation, including safety-evaluation, licensing and training-data provenance fields. These findings describe the completeness of the investigation&apos;s collected records. They do not establish that publishers lack such documentation or that the models exhibit unsafe behaviour <Source id={9}/> <Source id={10}/>.
            </p>
          </article>

          <article className="panel">
            <span className="ref-number">04</span>
            <h3 style={{marginTop:'8px'}}>Real Courts Deliver Real Criminal Sentences</h3>
            <p>
              Courts are rejecting the argument that synthetic imagery is victimless. Federal courts in the United States have delivered substantial prison sentences for using AI to alter minors&rsquo; photographs and cyberstalking victims with synthetic imagery <Source id={59}/> <Source id={60}/>.
            </p>
          </article>
        </div>

        <div className="text-link" style={{marginTop:'22px'}}>
          <Link href="/evidence/">Open the Interactive Evidence Dashboard →</Link>
        </div>
      </Section>

      {/* 5. WHY ARE EXISTING SAFEGUARDS INSUFFICIENT? */}
      <section className="soft-section">
        <Section
          title="4. Why are voluntary safeguards insufficient?"
          description="Industry self-regulation, post-hoc forensic detectors, and voluntary metadata standards fail to prevent harm before it occurs."
          id="safeguards-failing"
        >
          <div className="grid-3">
            <div className="panel">
              <h3>Detection Classifiers Face Generalization Limits</h3>
              <p>
                Academic benchmarks show that forensic classifiers trained on one generator often degrade substantially when applied to unfamiliar models, localized face inpainting, or novel LoRA adapters <Source id={34}/> <Source id={35}/>.
              </p>
            </div>
            <div className="panel">
              <h3>C2PA Credentials Do Not Establish Truth</h3>
              <p>
                C2PA Content Credentials establish signed provenance and integrity information when applied at creation, not necessarily factual truth, and can be stripped by screenshots, format conversion, or re-encoding <Source id={32}/> <Source id={33}/>. Offline models running on private machines do not attach signatures.
              </p>
            </div>
            <div className="panel">
              <h3>Online-Safety Governance Context</h3>
              <p>
                In broader online-safety oversight, Ofcom&rsquo;s Year One report found that 66.35% (69 of 104) of reviewed risk-assessment records did not identify a named responsible person (printed p. 18) <Source id={75}/>—a general governance indicator rather than an AI-developer-specific audit.
              </p>
            </div>
          </div>

          <Note>
            <strong>The Asymmetry of Harm:</strong>
            It takes minutes to fine-tune a model and seconds to generate a non-consensual image that can circulate indefinitely across encrypted forums. Victims face a permanent, exhausting burden of filing repeated takedown requests while perpetrators face zero supply-chain friction.
          </Note>
        </Section>
      </section>

      {/* 6. WHAT SHOULD GOVERNMENTS AND TECH COMPANIES DO? */}
      <Section
        title="5. What should governments and technology companies do?"
        description="A principled public-interest framework does not criminalize general-purpose math or benign coding. It imposes clear, proportionate accountability across the entire supply chain."
        id="accountability"
      >
        <SupplyChainPipelineDiagram/>

        <div className="callout" style={{marginTop:'28px'}}>
          <div>
            <Eyebrow>The Three-Tier Supply Chain Framework</Eyebrow>
            <h2>Prevent harm before release. Enforce accountability after release.</h2>
            <p style={{marginTop:'10px'}}>
              <strong>Tier 1 (Prohibit):</strong> Enact strict civil and criminal prohibitions on commercial services and software purpose-built to facilitate non-consensual nudity or CSAM.<br/>
              <strong>Tier 2 (Govern &amp; Screen):</strong> Require open model hosting repositories to enforce mandatory publisher identity verification, training provenance disclosures, and automated pre-upload heuristic scanning.<br/>
              <strong>Tier 3 (Expedite Takedown):</strong> Mandate binding rapid-removal windows (48 hours under US law, 2 hours under India IT Rules Rule 3(2)(b) for qualifying intimate-image complaints and 3 hours under Rule 3(1)(d) for actual-knowledge orders, 24 hours in Australia) backed by enforceable civil penalties.
            </p>
          </div>
          <ButtonLink href="/accountability/">Read the Full Policy Proposals</ButtonLink>
        </div>
      </Section>

      {/* 7. HOW CAN THE VISITOR HELP? */}
      <section className="soft-section">
        <Section
          title="6. How you can help: Report, Advocate, and Support"
          description="Whether you are a victim seeking confidential removal assistance, a citizen advocating for legal reform, or a researcher evaluating model safety, concrete pathways exist."
          id="take-action"
        >
          <div className="grid-3">
            <div className="panel">
              <span className="tag">For Victims &amp; Survivors</span>
              <h3 style={{marginTop:'10px'}}>Immediate Official Help</h3>
              <p className="micro">
                Access official, confidential hashing and takedown services (StopNCII, Take It Down, Internet Watch Foundation, Cyber Civil Rights Initiative) to prevent the spread of intimate images without viewing or storing explicit files.
              </p>
              <div style={{marginTop:'16px'}}>
                <ButtonLink href="/support/">Access Survivor Support Hub ↗</ButtonLink>
              </div>
            </div>

            <div className="panel">
              <span className="tag">For Citizens &amp; Advocates</span>
              <h3 style={{marginTop:'10px'}}>Advocacy Letter Builder</h3>
              <p className="micro">
                Use our interactive advocacy builder to generate and personalize evidence-grounded communications to elected representatives, legislative committees, and technology platform leadership.
              </p>
              <div style={{marginTop:'16px'}}>
                <ButtonLink href="/take-action/">Build an Advocacy Letter ↗</ButtonLink>
              </div>
            </div>

            <div className="panel">
              <span className="tag">For Press &amp; Journalists</span>
              <h3 style={{marginTop:'10px'}}>Verified Media Center</h3>
              <p className="micro">
                Download verified fact sheets, high-resolution scientific charts, executive summaries, and research manuscripts for evidence-based reporting without sensationalism.
              </p>
              <div style={{marginTop:'16px'}}>
                <ButtonLink href="/press/">Open Press &amp; Media Center ↗</ButtonLink>
              </div>
            </div>
          </div>

          <div style={{marginTop:'34px'}}>
            <SignupCard />
          </div>
        </Section>
      </section>
    </>
  );
}
