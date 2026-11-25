# STRATEGIC TRUST & SAFETY BRIEFING: PLATFORM OPERATORS
## Upstream Model Hub Governance, Supply-Chain Hygiene, and Abuse Mitigation Protocols
**Target Platforms:** Hugging Face, GitHub, Civitai, ModelScope, RunPod, and Cloud Compute Providers  
**From:** Consent Is Not Synthetic Research Working Group  
**Date:** November 2026  
**Subject:** Technical Interventions to Curb the Distribution of Abusive Generative Image Weights  

---

### 1. Executive Summary

Model hosting repositories and serverless cloud GPU providers occupy the critical upstream tier of the generative AI supply chain. While commercial consumer platforms (e.g., social networks) struggle with downstream detection and removal, upstream model hubs provide the foundational infrastructure that enables malicious actors to fine-tune and execute unconstrained sexual exploitation pipelines.

Our preliminary 53-record technical inventory highlights governance and documentation priorities. The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour. Specifically:
- In a separate 50-listing Hugging Face `text-to-image` metadata snapshot (`nsfw`), 20 of 50 reviewed listings were classified as LoRA or parameter-efficient adapters, with 3 additional listings carrying ambiguous or secondary LoRA tags (this sample is not representative of all abusive models).
- Safety evaluation, licensing, and provenance fields showed collection gaps in the preliminary desk inventory, underscoring the need for standardized publisher disclosures.
- Permissive licenses and ambiguous terms allow commercial re-hosting without acceptable-use enforcement.

---

### 2. Upstream Architecture & Attack Vectors

Downstream weaponization follows an asymmetric path:
1. **Base Weight Ingestion:** Perpetrators take widely distributed foundation weights (SD 1.5, SDXL, Flux.1, Qwen).
2. **Unmoderated Fine-Tuning:** Perpetrators fine-tune low-rank adapters on scraped datasets of non-consenting individuals, minors, or specialized anatomical poses.
3. **Hub Distribution:** Fine-tunes are uploaded to public repositories under vague, suggestive, or bypass tags without verified publisher identity.
4. **Cloud Execution:** Commercial nudify websites and automated Telegram bot networks mount these hosted weights on serverless containerized GPU instances (e.g., RunPod, vast.ai) for pennies per thousand generations.

Centralized post-hoc watermarking (C2PA) and visual classifiers fail completely in this pipeline because local and containerized runtimes strip cryptographic headers and evade API moderation gates.

---

### 3. Immediate Actionable Obligations for Model Hubs

We recommend six enforceable technical controls for model repository trust & safety teams:

| Control Area | Action Required | Verification Mechanism |
|---|---|---|
| **Publisher Verification** | Require verified email + phone or credit card identity before permitting public repository publication of executable weights. | KYC check on uploader account. |
| **Mandatory Sensitivity Tagging** | Automatically apply `Not-For-All-Audiences` / NSFW gating upon upload by default for all unverified accounts. | Pre-indexing classifier. |
| **Proactive Text & Prompt Auditing** | Scan commit histories, README files, and training trigger words for known predatory tokens, non-consensual terms, and minor-associated keywords. | Automated upload heuristic scanner. |
| **Shared Weight Hash Blacklist** | Compute SHA-256 and perceptual safetensors tensor hashes for confirmed illicit checkpoints; block re-upload across repositories. | Cross-platform repository hash registry. |
| **Training Data Provenance Attestation** | Mandate an affirmative click-through declaration certifying that training corpuses were filtered against CSAM hash lists and scraping blocklists. | Model card audit log. |
| **Expedited Takedown Intake** | Deploy a specialized abuse reporting queue for verified child protection hotlines (IWF, NCMEC) and regulators with a 12-hour resolution SLA. | Priority API integration. |

---

**Contact for Technical Exchange:**  
Consent Is Not Synthetic Technical Working Group  
Direct Coordination: `research@consentisnot-synthetic.org` (Staging Queue)
