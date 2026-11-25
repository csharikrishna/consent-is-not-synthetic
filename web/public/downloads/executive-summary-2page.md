# EXECUTIVE RESEARCH SUMMARY (TWO-PAGE BRIEF)
## Consent Is Not Synthetic: Evidence, Technology Supply Chains & Developer Accountability
**Initiative:** Consent Is Not Synthetic Research Working Group  
**Document:** Two-Page Executive Briefing  
**Date:** November 2026 | Defended Version 4  
**Audience:** Policymakers, Technology Regulators, Child Protection Leaders & Technology Executives  

---

### PAGE 1: THE EPIDEMIC OF SYNTHETIC SEXUAL EXPLOITATION

#### 1. The Reality of the Injury
Generative artificial intelligence has democratized the ability to transform ordinary personal photographs into photorealistic sexually explicit depictions without consent. While the imagery is computationally synthesized, the resulting injury is physical, psychological, social, and economic. Victims—overwhelmingly adolescent girls and adult women—experience acute trauma indistinguishable from physical sexual assault: severe depressive episodes, clinical panic disorders, hypervigilance, and suicidal ideation. Perpetrators routinely weaponize synthetic likenesses to execute financially motivated extortion schemes or demand authentic sexual material, transforming synthetic content into real-world abuse.

#### 2. Scale & Operational Evidence
Empirical evidence from accredited child-protection hotlines and international survey datasets demonstrates that synthetic abuse is expanding exponentially across the digital ecosystem:
- **1.2 Million+ Adolescents Victimized:** UNICEF Innocenti’s 2024 digital harms study across 11 national cohorts projects that at least 1.2 million children experienced deepfake victimization in a single year, with girls facing significantly higher exposure rates (41% female vs. 29% male).
- **8,029 Criminal Media Files Assessed:** In 2025, the Internet Watch Foundation (IWF) assessed 8,029 realistic criminal AI-generated media files across 491 operational incident reports, escalating from 3,443 videos in 2024 and 52 in 2023. Over 54% of assessed media depicted children in the 11–13 age category.
- **268 Youth Takedowns in Six Months:** In the United Kingdom, Childline’s Report & Remove service actioned 268 suspected synthetic abuse reports from minors between January and June 2026, surpassing its caseload for the entire prior calendar year.
- **20.7 Million Platform Visits:** Independent threat intelligence (ISD Global) logged over 20.7 million web visits across 12 targeted commercial "nudification" websites within 12 months.

> **Methodological Bounding Note:** These datasets reflect distinct counting units (survey projections vs. hotline media files vs. youth-initiated tickets) and cannot be mathematically pooled or averaged.

#### 3. Technology Supply Chains & The Upstream Failure Point
Synthetic intimate abuse is driven by an asymmetric technology supply chain:
1. **Foundation Models:** Massive foundation backbones (e.g., Stable Diffusion XL, Flux.1, Qwen-Image) developed at multi-million dollar compute expense are released as open weights.
2. **Low-Rank Adaptation (LoRA):** Downstream community developers specialize these foundation backbones using lightweight parameter-efficient adapters (LoRA), enabling targeted customization without retraining the base model.
3. **Execution Arbitrage:** Commercial deepfake services deploy these open weights to serverless cloud GPU containers (e.g., RunPod, vast.ai) for pennies per thousand generations, evading consumer device limitations and commercial API moderation.

---

### PAGE 2: GOVERNANCE FAILURES & THE THREE-TIER ACTION FRAMEWORK

#### 4. Upstream Repository Governance Gaps
An empirical audit of 53 structured model records across open machine learning hubs confirms systemic upstream governance failures:
- **Technical Inventory Completeness:** The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour.
- **Provenance & Licensing Verification:** Publisher-level verification is required to establish dataset filtering and licensing terms across public releases.
- **Forensic Failure:** C2PA metadata watermarks are stripped during local execution, screenshotting, or social media compression. Forensic deepfake classifiers experience catastrophic accuracy collapse (>40% error rates) against novel fine-tune adapters.

#### 5. Enforceable Three-Tier Regulatory Architecture
Voluntary self-regulation has failed. We propose a structural, enforceable regulatory framework:

```
[Tier 1: PROHIBIT (Red Zone)]
Purpose-built abuse tools & nude fine-tunes
Strict liability & shared weight hash blacklists
       │
[Tier 2: RESTRICT (Amber Zone)]
High-risk photorealistic foundation models
Mandatory publisher KYC & 24-hour takedown SLAs
       │
[Tier 3: PERMIT (Green Zone)]
Abstract, scientific, and industrial architectures
Standard open-source regime with safety notices
```

1. **Tier 1 (Targeted Prohibition):** Prohibit the knowing creation, hosting, or distribution of models, adapters, or scripts purpose-built or specialized for non-consensual sexual depiction or synthetic minor exploitation. Enforce an industry-shared weight hash registry to block identical checkpoints across hubs.
2. **Tier 2 (Risk-Based Release Holds & Due Diligence):** Impose affirmative due diligence on high-risk foundation models capable of realistic human rendering: verified publisher KYC authentication, mandatory *Not-For-All-Audiences* upload gating, affirmative training provenance disclosures, and 24-hour fast-track takedown intake.
3. **Tier 3 (Permitted Innovation):** Maintain open distribution for abstract, scientific, design, and non-biometric generative tools.

#### 6. Immediate Statutory & Support Imperatives
- **Intermediary Accountability:** Clarify how model repositories (Hugging Face, GitHub, Civitai) are treated under intermediary due-diligence rules (IT Act Section 79 safe-harbour conditions, distinct from BNS Section 79 criminal provisions), including the distinct 2-hour Rule 3(2)(b) intimate-image complaint trigger and 3-hour Rule 3(1)(d) actual-knowledge trigger.
- **Accurate Victim Routing:** Emergency danger requires **112** (Police). Sexual abuse and deepfakes must route to the National Cyber Crime Portal (`cybercrime.gov.in` Women & Child module), Women’s Helplines (**181 (subject to availability)**), and Childline (**1098**). (Note: National helpline **1930** is specifically designated for financial cyber fraud).

---

**Inquiries & Full Research Archive:**  
Consent Is Not Synthetic Working Group | `research@consentisnot-synthetic.org` (Staging Inbox)  
Full Dossier & Data Manifest: `https://consentisnot-synthetic.org/transparency/`
