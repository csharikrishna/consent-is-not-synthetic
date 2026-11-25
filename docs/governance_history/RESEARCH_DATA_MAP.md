# RESEARCH DATA MAP
## Consent Is Not Synthetic — Single Source of Truth

**Document Version:** 1.0.0  
**Date:** 25 November 2026  
**Scope:** Data Architecture, Entity Schemas, Registers, and Cross-Collection Traceability  

---

## 1. Overview & Data Hierarchy

To eliminate hardcoded inconsistencies, all quantitative claims, incident records, bibliographic sources, jurisdiction laws, and policy recommendations are organized into structured, validated relational schemas.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          BIBLIOGRAPHIC SOURCES                         │
│                    (76 Sources, Citations [1] to [76])                 │
└───────────────────▲────────────────────────────────▲───────────────────┘
                    │                                │
                    │ sourceIds                      │ sourceIds
┌───────────────────┴──────────────┐ ┌───────────────┴───────────────────┐
│        QUANTITATIVE METRICS      │ │          POLICY CONTROLS          │
│            (14 Metrics)          │ │       (6 Controls, C01-C06)       │
└───────────────────▲──────────────┘ └───────────────────────────────────┘
                    │ contextual evidence
┌───────────────────┴──────────────┐
│        INCIDENT REGISTER         │
│           (10 Records)           │
└──────────────────────────────────┘
```

---

## 2. Core Entities & TypeScript Schemas

### A. Source Reference (`SourceReference`)
```typescript
interface SourceReference {
  id: number;                          // 1 to 76
  key?: string;                        // BibTeX identifier (e.g., 'unicef12')
  publisher: string;                   // Issuing organization or lead author
  title: string;                       // Document or publication title
  date: string;                        // Date of publication or reporting period
  url: string;                         // Canonical reference URL (empty if technical citation withheld)
  summary: string;                     // Concise paraphrased evidence summary
  limitations: string;                 // Methodological boundaries and sampling caveats
  verified: boolean;                   // true = selected claim rechecked; false = inherited / pending
  stream: 'Harm / usage / enforcement evidence' | 'Law / governance / policy' | 'Technical / model background';
  technical: boolean;                  // Flag for technical model card/code repo
}
```

### B. Quantitative Evidence Metric (`EvidenceMetric`)
```typescript
interface EvidenceMetric {
  metric_id: string;                   // M01 to M14
  measure: string;                     // Descriptive metric title
  value: string | number;              // Numeric or formatted value (e.g. 1.2M+, 2.2, 491)
  unit: string;                        // Unit of measurement ('percent', 'reports', 'visits', etc.)
  denominator: string;                 // Population base or sample scope
  period: string;                      // Observation timeframe
  reference_number: string;            // Foreign key to SourceReference.id
  status: 'reported' | 'derived';      // Primary source figure vs calculated ratio
  interpretation: string;              // Crucial contextual nuance & boundary
}
```

### C. Policy Control Claim (`PolicyControl`)
```typescript
interface PolicyControl {
  control_id: string;                  // C01 to C06
  documented_problem: string;          // Empirical failure mode observed
  source_refs: string;                 // Semicolon-delimited source IDs (e.g., "66;67;70")
  proposed_action: string;             // Actionable policy intervention
  accountable_actor: string;           // Responsible stakeholder (Developer, Platform, Regulator)
  outcome_metric: string;              // Measurable indicator of success
  denominator: string;                 // Population or sample to be measured
  status: 'Proposed' | 'Under Review'; // Current status
  caveat: string;                      // Evaluation limitation (e.g., service change != harm reduction)
}
```

### D. Incident Record (`IncidentRecord`)
```typescript
interface IncidentRecord {
  id: string;                          // I01 to I10
  date: string;                        // YYYY or YYYY-MM
  jurisdiction: string;                // Country or State (e.g., 'US / Kentucky', 'Australia')
  record_type: 'Criminal investigation' | 'Criminal sentence' | 'Criminal verdict' | 'Civil enforcement' | 'Regulatory warning' | 'Repository governance' | 'Regulatory investigation';
  description: string;                 // Named operation or matter description
  observed_outcome: string;            // Documented legal or regulatory result
  interpretation: string;              // Important distinction (e.g., 'Arrests; no conviction inference')
  primary_source: string;              // Official Department of Justice or regulator URL
  duration_withheld?: boolean;         // True if inherited duration conflicts with primary source
}
```

### E. Jurisdiction Regulatory Profile (`JurisdictionProfile`)
```typescript
interface JurisdictionProfile {
  id: string;                          // 'india', 'us', 'uk', 'eu', 'australia', 'canada', 'japan', 'south_korea'
  country: string;                     // Display name
  flagEmoji: string;                   // Country flag
  primaryStatute: string;              // Primary legal instrument
  effectiveDate: string;               // Enacted / Effective dates
  statutoryScope: string;              // What the statute specifically addresses
  removalTimeline: string;             // Legal takedown window (e.g., '2-3 hours', '48 hours')
  platformObligations: string[];       // Specific mandatory requirements
  penalties: string;                   // Statutory fines / criminal liability
  sourceIds: number[];                 // Linked bibliographic references
  policyGaps: string[];                // Unresolved enforcement or definitional gaps
}
```

---

## 3. Quantitative Evidence Register (M01 – M14)

| ID | Measure | Value | Unit | Denominator | Source | Verified Status | Context / Limitation |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **M01** | Synthetic intimate imagery victimization | 2.2 | % | >16,000 respondents | [65] | Checked | 10-country survey; not a global rate. |
| **M02** | Self-reported perpetration | 1.8 | % | >16,000 respondents | [65] | Checked | Self-reported; does not capture all perpetrators. |
| **M03** | Estimated visits to abuse sites | 20.7M | visits | 31 selected sites | [66] | Inherited | May 2025 snapshot; visits != users or victims. |
| **M04** | Commercial abuse apps examined | 29 | apps | Selected sample | [67] | Inherited | Convenience sample; not total prevalence. |
| **M05** | Fabricated nude imagery (ever) | 3 | % | 1,948 surveyed youth | [68] | Inherited | Australia youth survey; rounded self-report. |
| **M06** | Fabricated nude imagery (past year) | 1 | % | 1,948 surveyed youth | [68] | Inherited | Subset of lifetime group. |
| **M07** | Services altering access/safeguards | 8 | services | Targeted services | [70] | Inherited | Regulated services; not causal proof of harm reduction. |
| **M08** | Prior visits to 8 targeted services | >200,000 | visits/mo | 8 services | [70] | Inherited | Lower bound estimate; no post-order traffic data. |
| **M09** | Federal Court civil penalty | 343,500 | AUD | Single civil matter | [71] | Inherited | Civil penalty + costs; not victim compensation. |
| **M10** | FTC warning letters | 12 | companies | Targeted firms | [72] | Inherited | Regulatory warning; not an adjudicated violation. |
| **M11** | High-risk services engaged by Ofcom | 25 | services | High-risk category | [73] | Inherited | Regulatory engagement; remediation ongoing. |
| **M12** | Risk records lacking named owner | 69 | records | 104 reviewed records| [75] | Checked | Printed page 18 of Ofcom report; broad online safety. |
| **M13** | Records lacking owner share | 66.35 | % | 104 reviewed records| [75] | Checked | Derived: (69/104)*100. Not AI-specific. |
| **M14** | Operation Cumberland arrests | 25 | arrests | Cross-border inquiry | [76] | Inherited | Arrests during investigation; no conviction inference. |

---

## 4. Policy Claim-to-Action Controls (C01 – C06)

- **C01: Targeted Supply Prohibition:** Prohibit commercial supply and knowing distribution of tools purpose-built to facilitate non-consensual sexual media (`[66]`, `[67]`, `[70]`).
- **C02: Risk-Based Release Evaluation:** Require independent safety evaluations and proportionate release holds when substantiated critical residual risks exist (`[69]`, `[63]`).
- **C03: Accountable Officers:** Mandate named corporate accountability officers and dated corrective action logs for generative AI safety (`[75]`).
- **C04: Enforceable Removal Deadlines:** Audit compliance with statutory takedown windows across hosting platforms (`[72]`, `[74]`).
- **C05: Duplicate Prevention with Due Process:** Implement privacy-preserving hashing and duplicate suppression with robust independent appeal mechanisms (`[73]`, `[32]`).
- **C06: Confidential Survivor Safeguarding:** Establish confidential victim referral pathways, legal aid, and age-appropriate child safeguarding (`[53]`, `[58]`, `[68]`).
