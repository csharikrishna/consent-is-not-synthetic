const fs = require('fs');
const path = require('path');
const playwright = require(path.resolve(__dirname, '../web/node_modules/playwright'));

(async () => {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Synthetic Sexual Abuse in the Age of Generative AI (V4.1 Defended Edition)</title>
<style>
  @page {
    size: A4;
    margin: 22mm 18mm 22mm 18mm;
  }
  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    font-size: 10pt;
    line-height: 1.55;
    color: #242128;
    background: #fff;
    margin: 0;
    padding: 0;
  }
  .header-tag {
    font-size: 8.5pt;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9D2048;
    margin-bottom: 8px;
    font-weight: bold;
  }
  h1 {
    font-size: 22pt;
    line-height: 1.2;
    color: #741936;
    margin: 0 0 10px 0;
    font-weight: bold;
  }
  .subtitle {
    font-size: 12.5pt;
    line-height: 1.35;
    color: #615B63;
    margin-bottom: 14px;
    font-weight: normal;
  }
  .divider {
    border-top: 1.5pt solid #741936;
    margin: 12px 0;
  }
  .sub-divider {
    border-top: 0.5pt solid #E8DFE3;
    margin: 12px 0;
  }
  .meta-line {
    font-size: 8.5pt;
    color: #615B63;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 6px;
  }
  .stat-grid {
    display: flex;
    justify-content: space-between;
    background: #FFFDFC;
    border: 1pt solid #E8DFE3;
    border-radius: 4px;
    padding: 10px 14px;
    margin: 14px 0;
  }
  .stat-col {
    flex: 1;
    text-align: center;
    border-right: 0.5pt solid #E8DFE3;
    padding: 0 8px;
  }
  .stat-col:last-child { border-right: none; }
  .stat-num {
    font-size: 16pt;
    font-weight: bold;
    color: #9D2048;
    display: block;
    line-height: 1.1;
  }
  .stat-desc {
    font-size: 7.5pt;
    color: #615B63;
    line-height: 1.3;
    margin-top: 4px;
  }
  .abstract-box {
    background: #F8EAF0;
    border-left: 3pt solid #9D2048;
    padding: 12px 14px;
    font-size: 9pt;
    margin: 14px 0;
  }
  .abstract-title {
    font-weight: bold;
    color: #741936;
    text-transform: uppercase;
    font-size: 8.5pt;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }
  .columns {
    column-count: 2;
    column-gap: 18px;
    text-align: justify;
    margin-top: 14px;
  }
  h2 {
    font-size: 11pt;
    color: #741936;
    margin: 16px 0 6px 0;
    border-bottom: 0.5pt solid #E8DFE3;
    padding-bottom: 3px;
    break-after: avoid;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  h3 {
    font-size: 10pt;
    color: #9D2048;
    margin: 10px 0 4px 0;
    break-after: avoid;
  }
  p { margin: 0 0 9px 0; }
  .table-box {
    width: 100%;
    margin: 12px 0;
    border-collapse: collapse;
    font-size: 7.8pt;
    break-inside: avoid;
  }
  .table-box th, .table-box td {
    border: 0.5pt solid #E8DFE3;
    padding: 5px 6px;
    text-align: left;
  }
  .table-box th {
    background: #F8EAF0;
    color: #741936;
    font-weight: bold;
  }
  .callout-box {
    background: #FFFDFC;
    border: 0.5pt solid #E8DFE3;
    border-left: 2.5pt solid #9D2048;
    padding: 9px 11px;
    margin: 10px 0;
    font-size: 8.2pt;
    break-inside: avoid;
  }
  .ref-item {
    font-size: 7.8pt;
    line-height: 1.38;
    margin-bottom: 5px;
    break-inside: avoid;
    padding-left: 18px;
    text-indent: -18px;
  }
</style>
</head>
<body>

<div class="header-tag">Version 4.1 &bull; Defended Edition &bull; Research Cutoff: 25 November 2026</div>
<h1>Synthetic Sexual Abuse in the Age of Generative AI</h1>
<div class="subtitle">Evidence of harm, technology supply chains, and the case for enforceable developer accountability and targeted release controls</div>

<div class="divider"></div>
<div class="meta-line">
  <span><strong>Author / Affiliation:</strong> [To be supplied by project owner] &bull; Consent Is Not Synthetic Working Group</span>
  <span><strong>Classification:</strong> AI-assisted structured narrative evidence review and regulatory policy synthesis, not independently peer-reviewed</span>
</div>

<div class="stat-grid">
  <div class="stat-col">
    <span class="stat-num">1.2M+</span>
    <span class="stat-desc">Estimated children affected across 11 countries (UNICEF/ECPAT/INTERPOL, Feb 2026)</span>
  </div>
  <div class="stat-col">
    <span class="stat-num">8,029</span>
    <span class="stat-desc">Realistic AI CSAM items assessed in 2025 (4,586 stills + 3,443 videos; IWF)</span>
  </div>
  <div class="stat-col">
    <span class="stat-num">&gt;400,000</span>
    <span class="stat-desc">2025 CyberTipline reports involving generative AI (NCMEC main series)</span>
  </div>
  <div class="stat-col">
    <span class="stat-num">20.7M</span>
    <span class="stat-desc">Monthly visits to 31 selected abuse-enabling services (ISD, May 2025)</span>
  </div>
</div>
<div style="font-size: 7.5pt; color: #615B63; text-align: center; margin-top: -8px; margin-bottom: 10px;">
  <em>Non-pooling notice: Distinct counting units, sampling methods, and populations; figures must not be mathematically combined.</em>
</div>

<div class="abstract-box">
  <div class="abstract-title">Abstract &bull; Structured Narrative Evidence Review &amp; Regulatory Policy Synthesis</div>
  <p><strong>Background:</strong> Generative AI systems can transform ordinary photographs into non-consensual sexual depictions without the depicted person's participation. Downloadable open-weight models create distinct downstream moderation challenges alongside hosted commercial services.</p>
  <p><strong>Methods:</strong> An AI-assisted structured narrative evidence review and regulatory policy synthesis guided by PRISMA transparency principles integrates a preliminary 53-record technical inventory, cross-national surveys, child-protection hotline reports, enforcement dockets, and comparative statutory materials across eight jurisdictions.</p>
  <p><strong>Results:</strong> UNICEF/ECPAT/INTERPOL (4 Feb 2026) estimated at least 1.2 million children affected across 11 countries; separate September 2026 research across nine countries estimated approximately 1.1 million children (2% average prevalence; do not combine). IWF reports containing realistic AI-generated CSAM rose from 193 in 2024 to 491 in 2025 (+154.4%), while assessed photorealistic videos rose from 13 to 3,443 (~264.85x; total 8,029 assessed items including 4,586 still images). NCMEC recorded &gt;400,000 generative-AI CyberTipline reports in 2025. The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata; these gaps describe investigation completeness and require publisher-level verification rather than establishing absence of documentation or unsafe behaviour.</p>
  <p><strong>Policy Conclusion:</strong> Prohibit purpose-built exploitation tools and their knowing supply; require proportionate pre-release safety assessment and remediation; enforce responsible model distribution and repository policies; and provide rapid, victim-centered remedies. A universal ban on general-purpose open-weight models is not established by the present evidence.</p>
  <p style="margin-bottom:0;"><strong>Keywords:</strong> latent diffusion; open weights; non-consensual intimate imagery; CSAM; child safeguarding; platform governance; C2PA; regulatory policy.</p>
</div>

<div class="sub-divider"></div>

<div class="columns">
  <h2>1. Human Consequences &amp; Child Safeguarding</h2>
  <p>The descriptor "synthetic" does not reduce the real-world harm inflicted upon victims. Qualitative and clinical research documents severe psychological distress, hypervigilance, social withdrawal, extortion, and reputational injury. UNICEF Innocenti (3 September 2026) documented approximately 20 million children aged 12–17 across 21 countries affected by broader technology-facilitated sexual exploitation or abuse over one year; an observed ~4x association with suicidal thoughts/behaviours and self-harm in broader TFSEA research is noted as an observational association rather than AI-specific causation and requires exact outcome definition verification.</p>

  <h2>2. Empirical Scale &amp; Operational Evidence</h2>
  <p>Operational reporting from the Internet Watch Foundation (IWF) 2025 Annual Data &amp; Insights Report records 491 reports containing realistic AI-generated CSAM in 2025 (up from 193 in 2024, +154.4%), 3,443 assessed photorealistic AI-generated videos (up from 13 in 2024, ~264.85x; an earlier announcement reported 3,440), and 4,586 assessed still images, totaling 8,029 combined assessed items. In October 2026, IWF warned that more photorealistic AI-generated CSAM images were identified in the first half of 2026 than throughout 2025. Reports and media files do not equal unique victims, and two annual observations do not establish an exponential trend.</p>
  <p>NCMEC recorded over 400,000 CyberTipline reports involving generative AI in 2025 (&gt;182,000 involving possession, generation, or attempted generation of AI-CSAM) and categorized over 158,000 AI-generated images and videos (Jan 2023–Dec 2025). A separate US Senate Judiciary Committee publication cites approximately 1.5 million AI-related reports (including ~1.1 million non-actionable reports from one provider); these series must not be summed. Cross-nationally, Umbach et al. (CHI 2024) found ~2.2% self-reported victimization and ~1.8% perpetration in a ten-country survey, while ISD documented 20.7 million estimated monthly visits across 31 selected abuse-enabling services in May 2025.</p>

  <div class="callout-box">
    <strong>Methodological Discipline: Non-Pooling Notice</strong><br/>
    Hotline reports, media file assessments, web traffic estimates, and household surveys measure distinct phenomena and populations; they must not be pooled or extrapolated into global prevalence forecasts.
  </div>

  <h2>3. Technical Ecosystem &amp; Inventory Completeness</h2>
  <p>Generative image pipelines span foundation backbones (e.g., SDXL, Flux.1, Qwen-Image), parameter-efficient LoRA adapters, and both local and hosted GPU execution environments. The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour. An earlier exploratory 722-model search pagination count has been withdrawn from public findings because no row-level dataset exists.</p>

  <h2>4. Detection &amp; Provenance Limitations</h2>
  <p>Post-hoc classifiers and provenance standards face structural constraints. C2PA Content Credentials establish signed provenance and integrity metadata when applied at creation, not necessarily factual truth, and metadata can be stripped during redistribution or screen capture. Universal detection failure is not claimed, but reliance on post-hoc detection alone cannot substitute for upstream governance.</p>

  <h2>5. Regulatory Interventions &amp; Comparison</h2>
  <p><em>Disclaimer: This regulatory comparison is informational research and has not undergone independent qualified legal review.</em></p>
  <table class="table-box">
    <thead>
      <tr>
        <th>Jurisdiction</th>
        <th>Key Instrument &amp; Cutoff Status (25 Nov 2026)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>European Union</strong></td>
        <td>Regulation (EU) 2026/1744 (adopted 8 Jul 2026, pub. 24 Jul 2026; Art. 1(7), p. 18): prohibitions on specified abusive AI systems apply from 2 Dec 2026 (enacted, not yet applicable at cutoff; not a universal open-weight ban). Plus AI Act Art. 50 &amp; DSA.</td>
      </tr>
      <tr>
        <td><strong>India</strong></td>
        <td>IT Act 2000, IT Rules 2021/2026 amendments (2-hour trigger for qualifying intimate-image complaints; 3-hour trigger for qualifying court/govt orders), BNS, POCSO Act, DPDP Act.</td>
      </tr>
      <tr>
        <td><strong>United States</strong></td>
        <td>TAKE IT DOWN Act (enacted 19 May 2025; covered-platform compliance 19 May 2026; 48h removal of qualifying requests &amp; known identical copies; FTC enforcement), distinct from criminal/state laws.</td>
      </tr>
      <tr>
        <td><strong>United Kingdom</strong></td>
        <td>Online Safety Act 2023 (Ofcom NCII enforcement; 69/104 = 66.35% risk-assessment records lacked named owner, p. 18) &amp; Crime and Policing Act 2026 (uncommenced provisions not yet enforceable).</td>
      </tr>
      <tr>
        <td><strong>Australia</strong></td>
        <td>Online Safety Act &amp; eSafety enforcement: 8 services withdrew AU access or added compliance (&gt;200k prior monthly AU visits); Hugging Face updated misuse rules (Sept 2026 submission, p. 11).</td>
      </tr>
      <tr>
        <td><strong>Canada / JP / KR</strong></td>
        <td>Canada Protecting Victims Act, 2026 (Royal Assent 18 Jun 2026; s. 15 in force 18 Jul 2026 under s. 205(1), amending Criminal Code s. 162.1). Japan Penal Code Art. 230/231; South Korea Sexual Crimes Act Art. 14-2.</td>
      </tr>
    </tbody>
  </table>

  <h2>6. India Survivor Routing &amp; Life-Safety Scope</h2>
  <p>Official Indian reporting routes through the National Cyber Crime Reporting Portal (<code>cybercrime.gov.in</code>), emergency response (<strong>112</strong>), Childline (<strong>1098</strong>), and Women Helpline (<strong>181</strong>, subject to availability). Helpline <strong>1930</strong> is strictly for financial cyber-fraud reporting and must not be presented as a sexual-abuse emergency helpline. Global tools include NCMEC CyberTipline, Take It Down (under 18 when imagery created), StopNCII.org (eligible adults), IWF, and eSafety.</p>

  <h2>7. Accountability Framework &amp; Limitations</h2>
  <p>The four core policy demands are: (1) prohibit purpose-built exploitation tools; (2) require proportionate safety assessment and remediation; (3) enforce responsible model distribution and repository policies; and (4) provide rapid, effective, victim-centered remedies. Repository governance focuses on targeted review of verified policy violations, safety documentation, abuse reporting, transparent enforcement, and cooperation with child-protection institutions—without publishing directories or links to harmful models.</p>
  <p><strong>AI Disclosure &amp; Ethics:</strong> AI assistance supported literature indexing, schema reconciliation, and document drafting under human editorial oversight. No abusive media was collected or generated. Funding, authorship, and conflict-of-interest declarations remain subject to owner confirmation.</p>

  <h2>Selected Primary References</h2>
  <div class="ref-item">[1] Internet Watch Foundation (IWF). 2025 Annual Data &amp; Insights Report (AI-generated images &amp; videos). https://www.iwf.org.uk/</div>
  <div class="ref-item">[2] UNICEF, ECPAT &amp; INTERPOL. Disrupting Harm Phase 2 (4 Feb 2026) &amp; UNICEF Innocenti (3 Sept 2026). https://www.unicef.org/innocenti/</div>
  <div class="ref-item">[3] NCMEC. Generative AI &amp; CyberTipline 2025 Data. https://connect.ncmec.org/theissues/generative-ai</div>
  <div class="ref-item">[4] Institute for Strategic Dialogue (ISD). Ecosystem of Nonconsensual Intimate Deepfake Tools Online (2025). https://www.isdglobal.org/</div>
  <div class="ref-item">[5] Umbach, Henry, Beard &amp; Berryessa. Non-Consensual Synthetic Intimate Imagery in 10 Countries. ACM CHI 2024. https://dl.acm.org/</div>
  <div class="ref-item">[6] Ofcom. Online Safety Risk Assessments Report: Year One (2025, p. 18). https://www.ofcom.org.uk/</div>
  <div class="ref-item">[7] Australian eSafety Commissioner. Submission to Joint Select Committee on AI (Sept 2026, p. 11). https://www.esafety.gov.au/</div>
  <div class="ref-item">[8] European Union. Regulation (EU) 2026/1744 (Art. 1(7), p. 18). https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng</div>
  <div class="ref-item">[9] Hugging Face. Content Policy. https://huggingface.co/content-policy</div>
  <div class="ref-item">[10] C2PA. Content Credentials Technical Specification. https://spec.c2pa.org/</div>
</div>

</body>
</html>`;

  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, {waitUntil: 'networkidle'});

  const targetDir = path.resolve(__dirname, '../web/public/downloads');
  const pdfPath = path.join(targetDir, 'v4-journal.pdf');
  const altPdfPath = path.join(targetDir, 'Synthetic_Abuse_Research_V4.pdf');
  const v4DirPdf = path.resolve(__dirname, '../research/working-history/research_v4/v4-journal.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 7.5pt; color: #615B63; width: 100%; text-align: right; padding-right: 18mm; font-family: serif;">Consent Is Not Synthetic &bull; Version 4.1 Defended Edition (Cutoff: 25 Nov 2026)</div>',
    footerTemplate: '<div style="font-size: 7.5pt; color: #615B63; width: 100%; display: flex; justify-content: space-between; padding: 0 18mm; font-family: serif;"><span>AI-assisted structured narrative evidence review (not peer-reviewed)</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
    margin: { top: '20mm', bottom: '20mm', left: '16mm', right: '16mm' }
  });

  await browser.close();

  fs.copyFileSync(pdfPath, altPdfPath);
  fs.copyFileSync(pdfPath, v4DirPdf);
  console.log('V4.1 PDF rendered successfully at: ' + pdfPath + ' (' + fs.statSync(pdfPath).size + ' bytes)');
})();
