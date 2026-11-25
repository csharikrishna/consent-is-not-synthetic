# REPOSITORY ABUSE REPORTING FRAMEWORK & STANDARD OPERATING PROCEDURE (SOP)
## Formal Protocol for Reporting Abusive Model Weights, Fine-Tunes, and Datasets to Hub Operators
**Initiative:** Consent Is Not Synthetic  
**Standard:** Institutional Platform Escalation Protocol  
**Target Repositories:** Hugging Face, GitHub, Civitai, ModelScope, GitLab  

---

### 1. Purpose & Scope

This Standard Operating Procedure (SOP) governs how researchers, child protection advocates, school administrators, and victims submit formal abuse reports against open-weight models, fine-tune adapters, or training datasets that facilitate non-consensual sexual depiction, child sexual abuse material (CSAM), or deepfake harassment.

The framework ensures that all reporting:
1. Remains strictly compliant with child safety and anti-exploitation laws (zero transmission or mirroring of illicit content).
2. Quotes platform-specific terms of service and acceptable-use policies with precision.
3. Establishes a verifiable paper trail for statutory escalation if the host platform fails to act.

---

### 2. Multi-Platform Takedown Escalation Matrix

| Platform | Abuse Contact Email | Web Intake Mechanism | Key Terms of Service Reference |
|---|---|---|---|
| **Hugging Face** | `abuse@huggingface.co` | Flag icon on repo header &rarr; "Report repository" | Content Policy &sect; Prohibited Content (CSAM, NCII, Non-Consensual Sexual Media) |
| **GitHub** | `abuse@github.com` | "Report abuse" link in repo sidebar | Community Guidelines &sect; Harassment, Sexually Explicit Content, Exploitation |
| **Civitai** | `support@civitai.com` | Report button on model card &rarr; "Violation of Terms" | Terms of Service &sect; Real-person depiction without consent, Minor safety |
| **ModelScope** | `contact@modelscope.cn` | Model issue / report function | Service Agreement &sect; Data security and personal likeness protections |

---

### 3. Step-by-Step Reporting SOP

```
[Step 1: Identify & Verify Violation]
       │
       ▼
[Step 2: Secure Evidence Safely (No Illicit Media Saved)]
       │
       ▼
[Step 3: Draft Formal Notice Using Standard Template]
       │
       ▼
[Step 4: Transmit Notice via Email & Web Portal]
       │
       ▼
[Step 5: Log Submission & Start 48-Hour Resolution Clock]
       │
       ▼
[Step 6: Escalate to Statutory Regulators if Inactive]
```

#### Step 1: Verification of Violation
Examine the public repository card and documentation:
- Does the repository host weights explicitly fine-tuned on real named individuals without consent?
- Does the trigger word or documentation indicate child likeness or underage school themes?
- Does the uploader provide explicit bypass prompts targeting sexual manipulation?

#### Step 2: Evidence Preservation (Strict Safety Rules)
- **DO NOT:** Attempt to generate, render, or save synthetic sexual images or CSAM. Generating or storing such material is unlawful under 18 U.S.C. § 2252A and the POCSO Act.
- **DO:** Capture full-page screenshots of the repository card, README text, commit history, author username, upload timestamp, and repo URL.

#### Step 3: Formal Abuse Notice Drafting
Use the standardized multi-platform template below.

---

### 4. Standardized Violation Notice Template

```text
SUBJECT: URGENT ABUSE REPORT: Violation of Terms of Service (Non-Consensual Intimate Imagery / Child Safety)
TO: [abuse@huggingface.co / abuse@github.com / support@civitai.com]
CC: [research-record-keeping staging address if applicable]

DATE: [Insert Date, e.g., 25 November 2026]

ATTENTION: Trust & Safety / Legal Compliance Department

We are writing to report a public repository hosted on your infrastructure that violates your platform's Terms of Service, Acceptable Use Policies, and applicable statutory safety standards:

1. REPOSITORY IDENTIFIERS:
- Platform: [Hugging Face / GitHub / Civitai]
- Repository URL: [Insert exact repository URL, e.g., https://huggingface.co/username/model-name]
- Repository Name / Model Title: [Insert Model Name]
- Author / Publisher Handle: [Insert Handle]
- Specific Commit / File Target: [Insert specific model file, e.g., model.safetensors or adapter_config.json]

2. NATURE OF THE VIOLATION:
The above-referenced repository facilitates or distributes models purpose-built for:
[ ] Creation of Non-Consensual Intimate Imagery (NCII / Deepfakes) targeting unconsenting real persons.
[ ] Depiction or simulation of minors in sexually explicit contexts (Child Online Safety / CSAM violation).
[ ] Targeted harassment, unconsented biometric persona cloning, or defamatory depiction.
[ ] Failure to apply mandatory Not-For-All-Audiences / sensitive content gating upon upload.

3. SPECIFIC EVIDENCE & REPOSITORY ARTIFACTS:
- The repository documentation explicitly advertises: [Quote specific README passages or trigger words].
- The training dataset or tags indicate unconsented fine-tuning on: [Describe specific persona or anatomical focus].
- The repository card lacks required safety evaluation disclosures or acceptable-use boundaries.

4. PLATFORM TERMS VIOLATED:
This repository violates your published terms:
- [For Hugging Face]: Hugging Face Content Policy prohibiting content that depicts sexual violence, non-consensual sexual content, or child sexual abuse and exploitation.
- [For GitHub]: GitHub Community Guidelines prohibiting sexually explicit content, non-consensual sexual imagery, and harassment.
- [For Civitai]: Civitai Terms prohibiting non-consensual depiction of real living persons and any sexualization of apparent minors.

5. REQUESTED REMEDIAL ACTION:
In accordance with your legal duty of care and platform standards, we request that your team:
1. Immediately disable public access to this repository and associated model weight files.
2. Invalidate download URLs and API endpoints serving these safetensors weights.
3. Compute the cryptographic tensor hash (SHA-256) of this model checkpoint to prevent duplicate re-uploads across your network.
4. Review the publishing account for systemic violations.

Please confirm receipt of this notice and provide an incident ticket reference number within 24 hours.

SINCERELY,

[Reporter Name / Organization]
Consent Is Not Synthetic Working Group / Independent Research Record
Contact: [Email Address]
Reference: CIN-REP-REPORT-[YYYYMMDD]
```

---

### 5. Escalation Pathways for Non-Responsive Platforms

If a platform fails to acknowledge or act upon a verified violation within **48 hours**:
1. **United States:** Escalate to NCMEC CyberTipline (`report.cybertip.org`) for child-related models; file a formal complaint with the FTC under the TAKE IT DOWN Act standards.
2. **United Kingdom:** Escalate to the Internet Watch Foundation (`report.iwf.org.uk`) and file an intermediary complaint with Ofcom under the Online Safety Act priority offenses framework.
3. **India:** Submit formal complaint on the National Cyber Crime Reporting Portal (`cybercrime.gov.in` under "Report Crime Against Women/Children"); notify MeitY Grievance Appellate Committee (GAC) for Section 79 safe-harbor forfeiture.
4. **Australia:** Lodge a formal takedown notice with the Australian eSafety Commissioner (`esafety.gov.au/report`), which possesses statutory authority to issue binding civil penalty notices against overseas hosts.
