# FORMAL REGULATORY SUBMISSION: MINISTRY OF ELECTRONICS & INFORMATION TECHNOLOGY (MeitY)
## Enforceable Upstream Model Governance and Algorithmic Due Diligence Under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules
**Addressed To:** Ministry of Electronics and Information Technology (MeitY), Government of India  
**Filing Initiative:** Consent Is Not Synthetic Research Working Group  
**Date:** November 2026  
**Subject:** Recommendations on Upstream Model Repository Intermediary Status, Synthetic Sexual Abuse, and 2-Hour Removal Compliance  

---

### 1. Executive Summary & Statutory Context

The rapid proliferation of generative artificial intelligence models capable of producing synthetic non-consensual intimate imagery (NCII) and synthetic Child Sexual Abuse Material (CSAM) poses an unprecedented threat to digital dignity, child safety, and individual privacy in India. 

Under the **Information Technology Act, 2000** (as amended) and the consolidated **Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021** (including the 2026 amendments):
- **Rule 3(1)(b)(v):** Intermediaries must not host, display, or upload content that deceives or misleads the addressee about the origin of the message or knowingly communicates misinformation or impersonation.
- **Rule 3(2)(b):** Intermediaries must, within **two hours** of receipt of a complaint, take all reasonable and practicable measures to remove or disable access to content depicting sexual acts or non-consensual intimate imagery.
- **Sections 66E, 67, and 67A of the IT Act:** Criminalize privacy violations, transmission of obscene material, and transmission of sexually explicit acts.

While downstream social media platforms (e.g., X, Instagram, WhatsApp) bear downstream removal duties, our empirical research demonstrates that **open machine learning model repositories (such as Hugging Face, GitHub, and Civitai) function as upstream intermediaries** that actively host, index, and distribute the specialized weight checkpoints and LoRA adapters utilized by commercial deepfake portals and bot services.

---

### 2. Empirical Findings from the Model Hub Audit

An empirical audit of specialized vision generation repositories reveals critical regulatory enforcement gaps:
1. **Technical Inventory Completeness:** The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour.
2. **Provenance Verification:** Additional publisher-level verification is required to establish dataset provenance and licensing.
3. **LoRA Adaptation Observation (50-Listing Snapshot):** In a separate metadata snapshot of 50 Hugging Face `text-to-image` listings matching `nsfw` (25 November 2026), 20 of 50 reviewed listings were classified as LoRA or parameter-efficient adapters, with 3 additional listings carrying ambiguous or secondary LoRA tags. This exploratory snapshot is not representative of all abusive models. Downstream actors can download lightweight adapters and run them locally or on serverless cloud GPUs, bypassing centralized platform API filters.

---

### 3. Concrete Policy & Statutory Recommendations for MeitY

We formally submit the following four regulatory recommendations for inclusion in MeitY advisory circulars and Intermediary Rule guidelines:

#### Recommendation 1: Clarify Model Repositories as Regulated Intermediaries
- Explicitly declare that open-source model repositories, code-hosting hubs, and weight distribution platforms hosting executable checkpoints and fine-tune adapters fall squarely within the definition of an **Intermediary** under Section 2(1)(w) of the IT Act.
- Upstream repositories cannot claim safe harbor protections under IT Act Section 79 (distinct from BNS Section 79 criminal provisions) if they fail to observe due diligence obligations under the IT Rules upon receiving qualifying notice or actual knowledge.

#### Recommendation 2: Mandate 24-Hour Automated Hash Deprecation for Model Repositories
- Require model hubs operating within Indian jurisdiction to integrate a shared hash registry of prohibited weight checkpoints and LoRA adapters purpose-built for non-consensual sexual depiction.
- When an Indian law enforcement agency or the National Cyber Crime Reporting Portal (`cybercrime.gov.in`) flags an abusive model repository, the hub must disable access within 24 hours and block duplicate uploads of identical weight hashes across its registry.

#### Recommendation 3: Enforce Proactive Metadata & Training Provenance Disclosures
- Intermediary model hubs must require publishers distributing vision-generation weights to submit affirmative declarations regarding training data provenance, verifying that datasets do not incorporate unconsented personal likenesses or CSAM.

#### Recommendation 4: Coordinate Emergency Takedown Protocols with National Cybercrime Portal
- Establish a direct, expedited integration between the Indian Cyber Crime Coordination Centre (I4C) and major model repositories to issue statutory removal orders under IT Rules Rule 3(1)(d) (3-hour actual-knowledge trigger) and coordinate Rule 3(2)(b) complaint workflows with repository trust and safety desks.

---

**Authorized Signatory:**  
*Consent Is Not Synthetic Research Working Group*  
Legal & Regulatory Policy Section  
Submission Docket: CIN-MEITY-2026-V4
