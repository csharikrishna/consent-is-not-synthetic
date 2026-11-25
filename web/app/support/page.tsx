import Link from 'next/link';
import {Heading, Section, Note, Source, ButtonLink, Eyebrow} from '../../components/ui';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta(
  '/support/',
  'Survivor Support & Official Reporting Hub — Consent Is Not Synthetic',
  'Verified, confidential official reporting portals, cryptographic takedown tools, evidence preservation guidance, and crisis support for victims of synthetic intimate abuse.'
);

export default function SupportPage() {
  return (
    <>
      <Heading
        eyebrow="Safeguarding &amp; Survivor Assistance"
        title="Survivor Support &amp; Official Reporting"
        description="Confidential official reporting pathways, free cryptographic image-hashing tools, evidence preservation guidelines, and crisis resources for victims and families."
      />

      {/* CRITICAL SAFEKEEPING DISCLAIMER */}
      <Section title="Emergency &amp; Institutional Disclosures">
        <div className="panel" style={{background:'#fff9fb',borderLeft:'4px solid var(--accent)'}}>
          <h3 style={{color:'var(--accent)'}}>Important Safety &amp; Non-Emergency Notice</h3>
          <p>
            <strong>This website is an independent research platform, NOT an emergency crisis service, medical provider, or law enforcement agency.</strong>
          </p>
          <ul className="plain-list" style={{marginTop:'10px'}}>
            <li><strong>DO NOT upload intimate imagery, identity cards, or private evidence to this website.</strong> We do not store, intake, or inspect victim media.</li>
            <li>If you or someone you know is in immediate physical danger or experiencing severe crisis, please call your local emergency services (e.g., <strong>911</strong> in the US/Canada, <strong>999</strong> in the UK, <strong>112</strong> in the EU/India, or <strong>000</strong> in Australia) or contact a certified crisis helpline immediately.</li>
          </ul>
        </div>
      </Section>

      {/* 1. CONFIDENTIAL REMOVAL & HASHING SERVICES */}
      <Section title="1. Free, Confidential Image Takedown Services" id="takedown">
        <p className="lede">
          These verified, free public-interest technologies create a unique cryptographic &ldquo;digital fingerprint&rdquo; (hash) directly on your device. The original image never leaves your computer or phone, preventing anyone from viewing or stealing it while stopping its distribution on participating major platforms.
        </p>

        <div className="grid-2" style={{marginTop:'24px'}}>
          <article className="panel">
            <span className="tag">For Minors (Under 18) Worldwide</span>
            <h3 style={{marginTop:'10px'}}>Take It Down (by NCMEC)</h3>
            <p>
              Operated by the National Center for Missing &amp; Exploited Children (NCMEC). Allows youth under 18 (or parents/guardians) to create anonymous cryptographic hashes of intimate photos or videos to prevent them from being posted or remove them from major online platforms.
            </p>
            <div style={{marginTop:'18px'}}>
              <a
                href="https://takeitdown.ncmec.org"
                target="_blank"
                rel="noopener noreferrer"
                className="button primary"
              >
                Access Take It Down ↗
              </a>
            </div>
            <p className="micro muted" style={{marginTop:'10px'}}>
              <strong>Coverage:</strong> Global · Meta (Facebook/Instagram), TikTok, OnlyFans, Pornhub, Yubo, etc.
            </p>
          </article>

          <article className="panel">
            <span className="tag">For Adults (18+) Worldwide</span>
            <h3 style={{marginTop:'10px'}}>StopNCII.org (by SWGfL)</h3>
            <p>
              Operated by the South West Grid for Learning (SWGfL). A globally recognized platform helping adult victims of non-consensual intimate imagery (NCII) stop the spread of intimate photos. Employs on-device SHA-256 hash generation with zero image transmission.
            </p>
            <div style={{marginTop:'18px'}}>
              <a
                href="https://stopncii.org"
                target="_blank"
                rel="noopener noreferrer"
                className="button primary"
              >
                Access StopNCII.org ↗
              </a>
            </div>
            <p className="micro muted" style={{marginTop:'10px'}}>
              <strong>Coverage:</strong> Global adult population · Enforced across participating social networks.
            </p>
          </article>
        </div>
      </Section>

      {/* 2. STATUTORY LAW ENFORCEMENT & REPORTING HOTLINES */}
      <section className="soft-section">
        <Section title="2. Official Statutory Hotlines &amp; Law Enforcement" id="authorities">
          <p>
            If you wish to initiate formal criminal proceedings, report ongoing extortion, or report material involving children, contact your jurisdiction&rsquo;s dedicated cybercrime authority:
          </p>

          <div className="grid-2" style={{marginTop:'24px'}}>
            <article className="panel">
              <span className="tag">Republic of India</span>
              <h3 style={{marginTop:'10px'}}>National Cyber Crime Reporting &amp; Crisis Helplines</h3>
              <p className="micro">
                Statutory reporting portals and crisis intervention services operating under the Ministry of Home Affairs, Ministry of Women and Child Development, and Information Technology Rules <Source id={64}/> <Source id={74}/>.
              </p>
              <ul className="plain-list" style={{marginTop:'10px'}}>
                <li>
                  <strong>Specialized Digital Evidence Portal:</strong>{' '}
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>
                    cybercrime.gov.in ↗
                  </a>{' '}
                  &mdash; Select <em>&ldquo;Report Crime Against Women/Children&rdquo;</em> to report non-consensual intimate imagery, deepfake extortion, or CSAM. Supports anonymous complaints and provides formal acknowledgment numbers for statutory Section 79 takedown notices.
                </li>
                <li>
                  <strong>All-India Emergency Response:</strong> Dial <strong>112</strong> (National ERSS &mdash; 24/7 police intervention for immediate extortion threats, stalking, or physical danger).
                </li>
                <li>
                  <strong>Women Helpline:</strong> Dial <strong>181</strong> (Women in Distress &mdash; subject to applicable service availability).
                </li>
                <li>
                  <strong>Child Protection Hotline (Minors):</strong> Dial <strong>1098</strong> (Childline / Mission Vatsalya &mdash; 24/7 nationwide protection under the POCSO Act).
                </li>
                <li>
                  <strong>NCW 24/7 Cyber Cell:</strong> Contact <strong>+91-7827170170</strong> (National Commission for Women dedicated cyber grievance cell).
                </li>
                <li style={{backgroundColor:'rgba(0,0,0,0.03)',padding:'6px 8px',borderRadius:'4px',marginTop:'4px'}}>
                  <strong>Financial Fraud Scope Notice:</strong> Dial <strong>1930</strong> specifically for the <em>Citizen Financial Cyber Fraud Reporting System</em> (designated for freezing stolen funds in online banking fraud; for sexual abuse or deepfakes, use 112 or cybercrime.gov.in above).
                </li>
                <li>
                  <strong>Statutory Removal Mandate:</strong> IT Rules 2026 mandate 2-hour takedown triggers upon formal complaint <Source id={74}/>.
                </li>
              </ul>
            </article>

            <article className="panel">
              <span className="tag">United States</span>
              <h3 style={{marginTop:'10px'}}>NCMEC &amp; FBI Internet Crime Complaint Center</h3>
              <p className="micro">
                Federal reporting systems for online exploitation, sextortion, and child safety violations <Source id={7}/> <Source id={21}/>.
              </p>
              <ul className="plain-list" style={{marginTop:'10px'}}>
                <li><strong>Child Exploitation (Minors):</strong> <a href="https://report.cybertip.org" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>report.cybertip.org ↗</a> (1-800-843-5678)</li>
                <li><strong>Adult Sextortion &amp; Cyber Harassment:</strong> <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>ic3.gov ↗</a> (FBI IC3 Portal)</li>
                <li><strong>Cyber Civil Rights Initiative (CCRI):</strong> Helpline 1-844-878-CCRI (2274)</li>
              </ul>
            </article>

            <article className="panel">
              <span className="tag">United Kingdom</span>
              <h3 style={{marginTop:'10px'}}>Internet Watch Foundation &amp; Revenge Porn Helpline</h3>
              <p className="micro">
                Statutory and dedicated reporting services operating under UK Online Safety Act standards <Source id={1}/> <Source id={41}/>.
              </p>
              <ul className="plain-list" style={{marginTop:'10px'}}>
                <li><strong>Anonymous CSAM Reporting:</strong> <a href="https://report.iwf.org.uk" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>report.iwf.org.uk ↗</a></li>
                <li><strong>Adult Image Abuse Helpline:</strong> <a href="https://revengepornhelpline.org.uk" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>revengepornhelpline.org.uk ↗</a> (0345 6000 459)</li>
                <li><strong>Childline Report Remove:</strong> Confidential support for UK youth <Source id={55}/>.</li>
              </ul>
            </article>

            <article className="panel">
              <span className="tag">Commonwealth of Australia</span>
              <h3 style={{marginTop:'10px'}}>Office of the eSafety Commissioner</h3>
              <p className="micro">
                Australia&rsquo;s independent national online safety regulator, empowered to issue legally binding 24-hour removal notices to platforms worldwide <Source id={43}/> <Source id={71}/>.
              </p>
              <ul className="plain-list" style={{marginTop:'10px'}}>
                <li><strong>Report Image-Based Abuse:</strong> <a href="https://www.esafety.gov.au/report" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>esafety.gov.au/report ↗</a></li>
                <li><strong>Civil Penalty Powers:</strong> Non-compliant platforms face civil penalties up to AUD 782,500 <Source id={43}/>.</li>
              </ul>
            </article>
          </div>
        </Section>
      </section>

      {/* 3. SAFE EVIDENCE PRESERVATION GUIDELINES */}
      <Section title="3. How to Safely Preserve Evidence" id="preservation">
        <p>
          If you intend to file a police report or civil claim, preserving documentation without violating possession laws is critical:
        </p>

        <div className="grid-3" style={{marginTop:'22px'}}>
          <div className="panel">
            <h3>DO Document Context</h3>
            <p className="micro">
              Capture full-screen screenshots of text messages, chat threads, sender usernames, phone numbers, email headers, profile URLs, and payment demands. Ensure date and time stamps are clearly visible.
            </p>
          </div>

          <div className="panel">
            <h3>DO Record Web Identifiers</h3>
            <p className="micro">
              Copy the exact web URLs, domain names, forum links, or Telegram channel handles where the content is hosted. If possible, archive web pages using neutral archive services (e.g., archive.today).
            </p>
          </div>

          <div className="panel" style={{borderLeft:'3px solid #9b193e'}}>
            <h3 style={{color:'#9b193e'}}>DO NOT Re-distribute</h3>
            <p className="micro">
              <strong>Never download, forward, or email explicit synthetic images of minors</strong> to friends or advocates, as possessing or transmitting CSAM can trigger criminal liability even if done for evidence gathering. Law enforcement will collect hashes directly.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. MENTAL HEALTH & TRAUMA SUPPORT */}
      <Section title="4. Mental Health &amp; Crisis Support Resources">
        <p>
          Experiencing synthetic intimate violation can cause intense psychological distress. Professional, non-judgmental support is available 24/7:
        </p>

        <div className="grid-3" style={{marginTop:'20px'}}>
          <div className="panel">
            <h3>International Crisis Support</h3>
            <p className="micro">
              <strong>Befrienders Worldwide:</strong> Confidential emotional support in over 30 countries.<br/>
              <a href="https://www.befrienders.org" target="_blank" rel="noopener noreferrer" className="inline-link">befrienders.org ↗</a>
            </p>
          </div>

          <div className="panel">
            <h3>Crisis Text Line</h3>
            <p className="micro">
              Free, 24/7 crisis support via SMS in the US, UK, and Canada.<br/>
              Text <strong>HOME</strong> to <strong>741741</strong> (US/Canada) or <strong>85258</strong> (UK).
            </p>
          </div>

          <div className="panel">
            <h3>Cyber Civil Rights Initiative</h3>
            <p className="micro">
              Dedicated legal resources, victim guides, and emotional coping strategies specifically for non-consensual intimate imagery victims.<br/>
              <a href="https://cybercivilrights.org" target="_blank" rel="noopener noreferrer" className="inline-link">cybercivilrights.org ↗</a>
            </p>
          </div>
        </div>

        <div style={{marginTop:'34px',display:'flex',gap:'14px',flexWrap:'wrap'}}>
          <ButtonLink href="/take-action/" variant="primary">
            Explore Policy Recommendations ↗
          </ButtonLink>
          <ButtonLink href="/evidence/" variant="secondary">
            Inspect Evidence Dashboard
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
