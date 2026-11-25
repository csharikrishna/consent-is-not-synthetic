import {Heading,Section,Note,ButtonLink} from '../../components/ui';
import {pageMeta} from '../../lib/seo';

export const metadata = pageMeta('/about/', 'About the Initiative & Mission');

export default function AboutPage() {
  return (
    <>
      <Heading
        eyebrow="Mission &amp; Transparency"
        title="About Consent Is Not Synthetic"
        description="An independent public-interest research and advocacy initiative dedicated to documenting synthetic sexual abuse, protecting children, and demanding accountable technology."
      />

      <Section
        title="Our Foundational Premise"
        description="Artificial images. Real victims. Real consequences."
      >
        <div className="grid-2">
          <article className="panel">
            <h3>Consent Cannot Be Fabricated</h3>
            <p>
              The core rights violation in synthetic intimate imagery is the non-consensual weaponization of human likeness. A digital image does not need to record a physical event to inflict real psychological distress, reputational coercion, social isolation, and financial extortion.
            </p>
            <p>
              When a person&rsquo;s face or body is digitally manipulated into sexual content without their permission, the act itself is an assault on digital dignity and bodily autonomy.
            </p>
          </article>

          <article className="panel">
            <h3>Evidence-Led Policy, Not Hysteria</h3>
            <p>
              Our goal is not to eliminate open-source software, suppress legitimate artistic expression, or dismantle AI research. Rather, we advocate for targeted, evidence-based legal and technical boundaries:
            </p>
            <ul className="plain-list">
              <li>Targeted prohibition of knowingly supplied exploitation tools.</li>
              <li>Pre-release risk evaluations and release holds for substantiated critical dangers.</li>
              <li>Enforceable platform removal procedures and victim safeguarding.</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        title="Organizational Status &amp; Disclosures"
        description="We believe in complete transparency regarding our identity, capabilities, and boundaries."
      >
        <div className="grid-3">
          <article className="panel">
            <span className="tag">Independent Initiative</span>
            <h3 style={{marginTop:'8px'}}>Non-Governmental</h3>
            <p>
              This is an independent public-interest research and policy desk review. We are not a government ministry, law enforcement agency, or accredited crisis service.
            </p>
          </article>

          <article className="panel">
            <span className="tag">Research Transparency</span>
            <h3 style={{marginTop:'8px'}}>AI Assistance Disclosure</h3>
            <p>
              This project utilized advanced AI assistance for literature indexing, metadata structuring, and code synthesis, subjected to human editorial direction and citation verification.
            </p>
          </article>

          <article className="panel">
            <span className="tag">Academic Review</span>
            <h3 style={{marginTop:'8px'}}>External Review Pending</h3>
            <p>
              Our manuscripts reflect rigorous working reviews and public briefs. Formal independent peer review and legal counsel review remain ongoing.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Strict Ethical Safeguards">
        <div className="panel">
          <h3>Our Code of Ethical Conduct</h3>
          <ul className="plain-list">
            <li><strong>Zero Abusive Imagery:</strong> We never host, generate, store, or redistribute explicit or illegal media.</li>
            <li><strong>No Model Directories:</strong> We do not publish rankings, direct download links, or bypass guides for exploitation tools.</li>
            <li><strong>Survivor Dignity:</strong> No victim names or identifying personal records are published.</li>
            <li><strong>Privacy First:</strong> We do not operate tracking cookies, advertising analytics, or user surveillance.</li>
          </ul>
        </div>
      </Section>

      {/* MULTILINGUAL REACH & EDUCATIONAL OVERVIEW */}
      <section className="soft-section">
        <Section
          title="Multilingual Reach &amp; Educational Resources"
          description="Ensuring core public awareness and safe reporting pathways are accessible across diverse linguistic communities, with priority focus on India."
          id="multilingual"
        >
          <div className="grid-2">
            <article className="panel">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span className="tag">Hindi · हिन्दी</span>
                <span className="micro muted">सार्वजनिक सूचना</span>
              </div>
              <h3 style={{marginTop:'10px',fontSize:'1.15rem'}}>सहमति कृत्रिम नहीं हो सकती (Consent Is Not Synthetic)</h3>
              <p style={{fontSize:'13.5px',lineHeight:1.6}}>
                जेनरेटिव एआई का उपयोग करके किसी भी व्यक्ति की सहमति के बिना उनकी आपत्तिजनक या यौन तस्वीरें और डीपफेक बनाना कानूनन अपराध है। यदि आप या आपका कोई परिचित इसका शिकार हुआ है, तो तुरंत भारत सरकार के राष्ट्रीय साइबर अपराध पोर्टल (<strong>cybercrime.gov.in</strong>) पर शिकायत दर्ज करें, या आपात स्थिति में <strong>112</strong>, चाइल्ड हेल्पलाइन <strong>1098</strong>, अथवा महिला हेल्पलाइन <strong>181</strong> पर कॉल करें (वित्तीय साइबर धोखाधड़ी के लिए 1930 का उपयोग करें)। आईटी नियम 2026 के तहत पात्र शिकायतों पर त्वरित कार्रवाई के प्रावधान हैं।
              </p>
            </article>

            <article className="panel">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span className="tag">Telugu · తెలుగు</span>
                <span className="micro muted">ప్రజా సమాచారం</span>
              </div>
              <h3 style={{marginTop:'10px',fontSize:'1.15rem'}}>సమ్మతి కృత్రిమమైనది కాదు (Consent Is Not Synthetic)</h3>
              <p style={{fontSize:'13.5px',lineHeight:1.6}}>
                ఎవరి అనుమతి లేకుండా వారి ముఖం లేదా శరీరాన్ని అసభ్యకరమైన రీతిలో మార్చడం (డీప్‌ఫేక్) చట్టవిరుద్ధం మరియు శిక్షార్హమైన నేరం. మీరు లేదా మీకు తెలిసిన వారు దీనికి గురైతే, వెంటనే భారత ప్రభుత్వ నేషనల్ సైబర్ క్రైమ్ పోర్టల్ (<strong>cybercrime.gov.in</strong>) లో ఫిర్యాదు చేయండి, లేదా అత్యవసర పరిస్థితుల్లో <strong>112</strong>, చైల్డ్‌లైన్ <strong>1098</strong>, లేదా మహిళా హెల్ప్‌లైన్ <strong>181</strong> కు కాల్ చేయండి (ఆర్థిక సైబర్ మోసాలకు మాత్రమే 1930 ఉపయోగించండి).
              </p>
            </article>
          </div>
        </Section>
      </section>

      <Section title="Public Institutional Action">
        <Note>
          <strong>Join the Research Network:</strong> We actively invite researchers, legal scholars, child protection specialists, and technologists to review our data, propose corrections, and collaborate on evidence-based AI safety standards.
        </Note>
        <div className="text-link" style={{marginTop:'20px'}}>
          <ButtonLink href="/take-action/">Explore Ways to Take Action</ButtonLink>
        </div>
      </Section>
    </>
  );
}
