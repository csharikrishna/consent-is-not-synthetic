# PROJECT CONTEXT
## Consent Is Not Synthetic — Public Research & Advocacy Platform

**Document Version:** 1.0.0  
**Date:** 25 November 2026  
**Status:** Living Architectural and Research Specification  

---

## 1. Executive Summary & Mission

**Consent Is Not Synthetic** is an independent, evidence-led public-interest research and advocacy initiative addressing AI-enabled sexual exploitation, non-consensual synthetic intimate imagery (deepfake abuse), child sexual abuse material (CSAM) risks, synthetic identity harassment, and technology provider accountability.

### Core Tagline
> **"Artificial Images. Real Victims. Real Consequences."**

The initiative is built upon three successive generations of rigorous desk research, technical audits, empirical case analyses, and a comprehensive publication-readiness audit conducted on 25 November 2026. 

The primary policy proposition of the project is straightforward and defensible:
1. **Targeted Prohibition:** Prohibit the knowing development, distribution, commercialization, and promotion of tools purpose-built to facilitate child sexual abuse material or non-consensual sexual depiction.
2. **Controlled & Risk-Based Release:** Subject general-purpose foundation models and high-risk open-weight releases to demonstrated risk evaluations, independent safety assessments, and proportionate release holds where critical residual risks are established.
3. **Safe Harbor for Legitimate Research:** Preserve beneficial creative, academic, and safety-evaluation uses under consent-aware safeguards, transparent documentation, and due process.
4. **Enforceable Developer & Platform Accountability:** Establish clear duties across the technology supply chain—from foundation developers and fine-tuners to hosting repositories (e.g., Hugging Face) and distribution intermediaries.

---

## 2. Research Evolution Across Manuscript Generations

The project has evolved through three distinct research manuscript phases, culminating in a dedicated publication-readiness audit:

### Version 1: Architectural Foundations and Capabilities (Late 2025)
- **Focus:** Comprehensive cataloguing of open-source and open-weight image-generation architectures, parameter sizes, storage requirements, LoRA fine-tuning mechanisms, and early misuse patterns.
- **Key Concepts:** Latent diffusion models (LDM), SDXL, DreamBooth, LoRA adapters, inference pipelines, and potential evasion of commercial safety filters.
- **Deliverables:** Working LaTeX manuscript (20+ pages), original LaTeX packages, resource directories, and an initial 53-model metadata spreadsheet (`Phase_1_Image_Model_Inventory.xlsx`).
- **Limitations of V1:** Relied heavily on technical capability analysis rather than verified real-world harm measurements; conflated theoretical generation capability with actual prevalence.

### Version 2: Harms Taxonomy and Targeted Prohibition (Mid 2026)
- **Focus:** Systematic restructuring around victim harm, digital dignity, and regulatory analysis.
- **Key Concepts:** Separation of adult non-consensual intimate imagery (NCII) from child sexual abuse material (CSAM); formulation of the three-tier governance framework (Prohibit / Restrict / Permit); review of legal statutes across 8 jurisdictions (India, US, UK, EU, Australia, Canada, Japan, South Korea).
- **Deliverables:** Revised journal manuscript, enhanced source ledger, annotated evidence briefs, and high-resolution vector figures.
- **Limitations of V2:** Contained several inherited citations and metrics that had not been independently verified against original primary sources; retained some conflicting figures between executive summaries and detailed reports.

### Version 3: Grounded Evidence-to-Action Framework (November 2026)
- **Focus:** Complete recalibration to ensure empirical rigor, statistical integrity, and strict traceability from evidence to proposed policy controls.
- **Key Deliverables:**
  - 23-page master journal manuscript (`Synthetic_Abuse_Research_V3.pdf` / `v3-journal.pdf`).
  - 76 numbered academic and regulatory references.
  - Quantitative evidence register (`V3_Quantitative_Evidence.csv`) with 14 curated metrics.
  - Claim-to-action register (`V3_Claim_to_Action.csv`) linking 6 policy controls directly to documented harms.
  - 2-page India policy brief (`V3_India_Policy_Brief.pdf`).
  - Annotated evidence register (`V3_Annotated_Evidence.pdf`).
  - Resource directory (`V3_Resource_Directory.pdf`).

### Publication-Readiness & Citation Audit (25 November 2026)
- An exhaustive audit of the V3 manuscript and data tables:
  - Audited all 76 citations: 17 selected claims underwent primary-source rechecking; 59 claims were designated as inherited and pending independent external review.
  - Corrected statistical locators (e.g., Ofcom risk assessment locator corrected to printed page 18).
  - Identified and isolated conflicting claims (e.g., Incident I06 sentence duration discrepancy between URL and inherited text; withheld from headline figures).
  - Drafted a prospective research protocol (`Research_Protocol.md`) implementing PRISMA 2020 standards for future systematic reviews.

---

## 3. Strict Ethical Boundaries & Safeguarding Principles

Given the severe human impact of synthetic sexual exploitation, the platform adheres strictly to non-negotiable ethical constraints:

1. **Zero Abusive Media:** The platform never hosts, renders, previews, or links to explicit, exploitative, or abusive imagery of any kind.
2. **Survivor Privacy & Anonymity:** No victim identities, private names, social media handles, or identifying case facts are published unless already adjudicated in public court records without privacy orders.
3. **No Exploitation Tool Directory:** The platform does not rank or publish direct download links, bypass guides, fine-tuning scripts, or prompt recipes that facilitate the creation of non-consensual intimate imagery.
4. **No Unofficial Reporting Intake:** The platform does not collect victim incident reports, evidence uploads, or crisis disclosures. All users seeking help are immediately routed to authorized emergency services, statutory law enforcement portals (e.g., India CyberCrime, NCMEC, IWF), and verified victim-support services (StopNCII, Take It Down).
5. **Clear Independence & Epistemic Humility:** The platform explicitly identifies itself as an independent desk-research initiative, not a government body, law enforcement agency, accredited crisis hotline, or formal peer-reviewed academic journal.

---

## 4. Key Stakeholders & Target Audiences

- **Academic & AI Safety Researchers:** Seeking transparent data mappings, model metadata completeness audits, and reproducible methodologies.
- **Policymakers & Legislative Aides:** Analyzing comparative regulatory approaches (India IT Rules, US TAKE IT DOWN Act, UK Crime & Policing Act 2026, EU AI Act Art. 50, Australian eSafety Commissioner orders).
- **Child Protection & Safeguarding NGOs:** Collaborating on evidence-based prevention and demand-side intervention (UNICEF, ECPAT, Internet Watch Foundation, NCMEC).
- **Technology Platforms & Model Repositories:** Evaluating content moderation, terms of service enforcement, LoRA adapter indexing, and responsible release mechanisms (Hugging Face, Civitai, Meta, Black Forest Labs).
- **Journalists & Public Advocates:** Sourcing verified, non-sensationalized statistics and clear explanations of generative AI technology.
