import csv
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CANONICAL_DIR = ROOT / "canonical_data"
CANONICAL_DIR.mkdir(exist_ok=True)
WEB_DATA_PATH = ROOT / "web" / "lib" / "data.json"
DOWNLOADS_DIR = ROOT / "web" / "public" / "downloads"

with open(WEB_DATA_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

# 1. Reconcile Sources
sources = data["sources"]
source_by_id = {s["id"]: s for s in sources}

# Update specific source details to match V4.1 baseline
if 3 in source_by_id:
    source_by_id[3]["limitations"] = (
        "Operational media assessment volumes are not unique victims or population prevalence. "
        "An earlier IWF announcement reported 3,440 videos; the detailed 2025 report states 3,443. "
        "Two annual observations (13 in 2024; 3,443 in 2025) do not establish an exponential trend."
    )
if 6 in source_by_id:
    source_by_id[6]["limitations"] = (
        "NCMEC main series reports >158,000 AI-categorized files (Jan 2023-Dec 2025). "
        "A separate US Senate Judiciary Committee publication refers to ~1.5M AI-related reports "
        "(including ~1.1M non-actionable reports from one provider); do not add totals together."
    )
if 38 in source_by_id:
    source_by_id[38]["title"] = "AI Act (Regulation (EU) 2024/1689, Art. 50) & Regulation (EU) 2026/1744"
    source_by_id[38]["date"] = "2024 / Adopted 8 July 2026, Published 24 July 2026"
    source_by_id[38]["url"] = "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng"
    source_by_id[38]["locator"] = "Regulation (EU) 2026/1744, Article 1(7), printed p. 18; AI Act Art. 50"
    source_by_id[38]["summary"] = (
        "Regulation (EU) 2026/1744 addresses specified AI systems generating or manipulating non-consensual intimate material "
        "and CSAM; relevant new AI prohibitions apply from 2 December 2026 (enacted, not yet applicable as of 25 Nov 2026 cutoff)."
    )
    source_by_id[38]["limitations"] = (
        "Does not constitute a universal ban on open-weight AI models; subject to defined conditions, safeguards, and exceptions."
    )
if 53 in source_by_id:
    source_by_id[53]["limitations"] = (
        "Population-weighted estimate across 11 countries using survey and child internet-use data; not a global victim count. "
        "Separate September 2026 research across 9 countries reported ~1.1M children (2% prevalence); do not combine or infer a declining trend."
    )
if 54 in source_by_id:
    source_by_id[54]["verified_claim"] = (
        "Estimated 20 million internet-using youth aged 12-17 across 21 countries experienced broader technology-facilitated sexual exploitation or abuse in one year."
    )
    source_by_id[54]["limitations"] = (
        "Covers broader technology-facilitated sexual exploitation or abuse (not exclusively AI-generated abuse). "
        "Reported ~4x occurrence of suicidal thoughts/behaviours and self-harm is an observational association, not AI-specific causation; "
        "withheld from public headline claims pending exact outcome-definition verification."
    )
if 65 in source_by_id:
    source_by_id[65]["limitations"] = (
        "Ten-country survey observations (2.2% victimization, 1.8% perpetration); not worldwide prevalence estimates. "
        "Exact sample size and demographic breakdown should be cited from the original ACM CHI 2024 paper."
    )
if 70 in source_by_id:
    source_by_id[70]["locator"] = "September 2026 parliamentary submission, printed p. 11; November 2026 Digital Duty of Care submission"
    source_by_id[70]["summary"] = (
        "Eight services withdrew Australian access or introduced compliance measures (previously >200,000 combined monthly Australian visits); "
        "engagement led Hugging Face to update rules concerning model misuse."
    )
    source_by_id[70]["limitations"] = (
        "Documented external regulatory developments, not achievements attributable to this initiative; "
        "service restrictions and policy changes do not establish measured reductions in victimization."
    )
if 75 in source_by_id:
    source_by_id[75]["date"] = "2025, p. 18 (printed)"
    source_by_id[75]["locator"] = "Printed page 18, heading 'Named person responsible for risk assessments'"
    source_by_id[75]["limitations"] = (
        "Concerns broader online-safety governance across 104 reviewed risk-assessment records (69/104 = 66.35%). "
        "It is not evidence that 66.35% of AI model developers lack accountability."
    )

# P2-30: Fix Source 59 & 60 sentence-period metadata
if 59 in source_by_id:
    source_by_id[59]["period"] = "Sentence imposed May 11, 2026"
if 60 in source_by_id:
    source_by_id[60]["period"] = "Sentence imposed September 8, 2026"

# P1-07 & Final Freeze: Dedicated Source 77 for UNICEF 9-country September 2026 study
s77_metadata = {
    "id": 77,
    "publisher": "UNICEF / UNICEF Innocenti",
    "title": "Through Children's Eyes: Technology-Facilitated Sexual Exploitation and Abuse",
    "date": "September 2026",
    "url": "https://www.unicef.org/belize/media/10601/file/UNICEF-Innocenti-Through-Children%27s-Eyes-report-2026.pdf",
    "summary": "Approximately 1.1 million children across nine surveyed countries (2% reported average prevalence).",
    "limitations": "Nine surveyed countries for the sexual-deepfake finding (~1.1M children, 2% prevalence). Do not combine with UNICEF-01 (11 countries, 1.2M+) or interpret the difference as a declining trend.",
    "verified": True,
    "stream": "Harm / usage / enforcement evidence",
    "technical": False,
    "status": "Primary source checked",
    "locator": "Appendix Table A08",
    "population": "Surveyed children across 9 countries",
    "period": "September 2026",
    "geo_scope": "9 countries",
    "verified_claim": "Approximately 1.1 million children across nine countries experienced sexual deepfakes (2% average prevalence)."
}
if 77 not in source_by_id:
    sources.append(s77_metadata)
    source_by_id[77] = s77_metadata
else:
    source_by_id[77].update(s77_metadata)

# Final Freeze: Source 44 Canada Protecting Victims Act 2026
if 44 in source_by_id:
    source_by_id[44].update({
        "publisher": "Parliament of Canada",
        "title": "Protecting Victims Act, 2026 (S.C. 2026, c. 19)",
        "date": "Royal Assent 18 June 2026; in force 18 July 2026",
        "url": "https://laws-lois.justice.gc.ca/eng/AnnualStatutes/2026_19/FullText.html",
        "status": "Primary source checked",
        "locator": "Section 15 (amending Criminal Code s. 162.1) & Section 205(1) (commencement on 30th day after Royal Assent: 18 July 2026)",
        "summary": "Canada's Protecting Victims Act, 2026 received Royal Assent on 18 June 2026. Section 15 amends Criminal Code section 162.1 to include qualifying realistic synthetic visual representations of identifiable persons in intimate circumstances. Under section 205(1), the provision came into force on 18 July 2026, the 30th day after Royal Assent.",
        "limitations": "Not a blanket prohibition on all AI-generated imagery; preserves statutory threshold concerning qualifying realistic synthetic representations and identifiable persons in intimate circumstances.",
        "verified_claim": "Section 15 amends Criminal Code section 162.1 to include qualifying realistic synthetic visual representations of identifiable persons in intimate circumstances (in force 18 July 2026)."
    })

# Final Freeze: Source 65 CHI 2024 sample size consistency
if 65 in source_by_id:
    source_by_id[65]["population"] = "Adult survey sample across 10 diverse countries (US, UK, India, Brazil, Japan, etc.)"
    source_by_id[65]["limitations"] = (
        "Ten-country survey observations (2.2% victimization, 1.8% perpetration); not worldwide prevalence estimates. "
        "In a ten-country survey, approximately 2.2% of respondents self-reported victimization and 1.8% self-reported perpetration involving non-consensual synthetic intimate imagery."
    )

# P1-05: Blank URLs must never be labelled verified
for s in sources:
    if not str(s.get("url", "")).strip():
        s["verified"] = False
        s["status"] = "Indexed reference · URL pending verification"

# P2-13: Preserve lower-bound > sign on M08
for m in data.get("metrics", []):
    if m.get("metric_id") == "M08":
        m["value"] = ">200,000"

# 2. Reconcile Jurisdictions
jurisdictions = [
    {
        "id": "india",
        "country": "India",
        "flag": "IN",
        "statute": "IT Act 2000, IT Rules 2021 (2026 Amendments), BNS, POCSO Act, DPDP Act",
        "status": "In force (2026 Rules amendments active)",
        "effectiveDate": "2021 / 2026 IT Rules Amendments",
        "timeline": "2 hours (Rule 3(2)(b) qualifying intimate-image complaints); 3 hours (Rule 3(1)(d) actual knowledge / court or government orders)",
        "scope": "Distinct statutory triggers under IT Rules 2021/2026 (Rule 3(2)(b) 2h reasonable/practicable measures vs Rule 3(1)(d) 3h actual knowledge), BNS, POCSO, and DPDP Act.",
        "obligations": [
            "Rule 3(2)(b): 2-hour window for reasonable and practicable measures on qualifying intimate-image complaints (not a universal deadline for all content).",
            "Rule 3(1)(d): 3-hour window upon specified actual knowledge (qualifying court order or authorized government notification).",
            "Distinguish current intermediary law from proposed upstream model-distribution regulation; not every model-hosting repository is automatically subject to every intermediary obligation."
        ],
        "penalties": "Loss of Section 79 safe harbour; BNS/POCSO criminal liability; DPDP financial penalties.",
        "sources": [64, 74],
        "gaps": "No dedicated upstream statutory pre-release safety assessment mandate for open-weight model publishers."
    },
    {
        "id": "us",
        "country": "United States",
        "flag": "US",
        "statute": "TAKE IT DOWN Act (Federal) & State NCII Statutes",
        "status": "In force",
        "effectiveDate": "Enacted 19 May 2025; Covered-platform compliance 19 May 2026",
        "timeline": "Within 48 hours of a qualifying valid request",
        "scope": "Federal covered-platform removal obligations (including known identical copies, subject to statutory requirements) enforced by the FTC, distinct from criminal provisions and state laws.",
        "obligations": [
            "Covered platforms must remove qualifying non-consensual intimate imagery and known identical copies within 48 hours of a valid request.",
            "Maintain accessible notice-and-removal processes subject to FTC enforcement.",
            "Distinct from federal criminal prohibitions and state-level civil/criminal NCII statutes."
        ],
        "penalties": "FTC enforcement actions and civil penalties for covered-platform non-compliance; separate criminal penalties under applicable federal/state statutes.",
        "sources": [40, 72],
        "gaps": "Does not directly regulate offline local execution of downloaded open-weight models."
    },
    {
        "id": "uk",
        "country": "United Kingdom",
        "flag": "UK",
        "statute": "Online Safety Act 2023 & Crime and Policing Act 2026 (ss. 99–101 in force)",
        "status": "In force (OSA active; CPA 2026 ss. 99–101 commenced 29 June 2026)",
        "effectiveDate": "OSA active; CPA 2026 ss. 99–101 in force 29 June 2026 (S.I. 2026/689)",
        "timeline": "Expeditious takedown & Ofcom statutory enforcement notices",
        "scope": "Crime and Policing Act 2026 sections 99–101 (purported intimate-image generators, taking down intimate-image content, consequential amendments) came into force on 29 June 2026 via S.I. 2026/689. Other sections vary by commencement.",
        "obligations": [
            "Platforms in scope of the Online Safety Act must assess and mitigate illegal content risks under Ofcom codes and guidance.",
            "Sections 99–101 of the Crime and Policing Act 2026 are in force as of 29 June 2026 (S.I. 2026/689)."
        ],
        "penalties": "Ofcom fines up to 10% of qualifying worldwide revenue under OSA; criminal penalties under commenced CPA 2026 ss. 99–101.",
        "sources": [41, 42, 73, 75],
        "gaps": "Other CPA 2026 provisions depend on separate commencement orders; cross-border open-weight mirror enforcement remains challenging."
    },
    {
        "id": "eu",
        "country": "European Union",
        "flag": "EU",
        "statute": "Regulation (EU) 2026/1744, AI Act (2024/1689 Art. 50) & Digital Services Act",
        "status": "Enacted (Reg. 2026/1744 prohibitions applicable 2 Dec 2026)",
        "effectiveDate": "Adopted 8 July 2026; Published 24 July 2026; Applicable 2 Dec 2026",
        "timeline": "Expeditious notice-and-action under DSA; AI prohibitions from 2 Dec 2026",
        "scope": "Regulation (EU) 2026/1744 (Art. 1(7), printed p. 18) addresses specified AI systems generating/manipulating non-consensual intimate material and CSAM. As of 25 Nov 2026 cutoff, enacted but not yet applicable. Not a universal ban on open-weight AI models.",
        "obligations": [
            "Prohibitions on specified abusive AI systems take effect 2 December 2026, subject to defined conditions, safeguards, and exceptions.",
            "AI Act Art. 50 transparency and machine-readable marking duties (applicable 2 August 2026).",
            "DSA systemic risk mitigation duties for Very Large Online Platforms."
        ],
        "penalties": "Administrative fines under AI Act / Regulation (EU) 2026/1744 and DSA enforcement frameworks.",
        "sources": [38, 39],
        "gaps": "Watermarking/provenance signals can be stripped; prohibitions are not yet applicable as of 25 Nov 2026 cutoff."
    },
    {
        "id": "australia",
        "country": "Australia",
        "flag": "AU",
        "statute": "Online Safety Act 2021, Industry Codes/Standards & eSafety Enforcement",
        "status": "Active enforcement",
        "effectiveDate": "Online Safety Act 2021 (ongoing 2025-2026 enforcement)",
        "timeline": "24 hours from formal eSafety removal notice",
        "scope": "Image-based abuse scheme covering digitally altered or synthetic intimate depictions, plus eSafety notices to platforms and model-hosting repositories.",
        "obligations": [
            "Comply with formal eSafety removal notices within 24 hours.",
            "Adhere to registered Online Safety industry codes and standards.",
            "Documented regulator outcomes: 8 services withdrew Australian access or introduced compliance measures; Hugging Face updated misuse rules following eSafety engagement."
        ],
        "penalties": "Federal Court civil penalties (e.g., AUD 343,500 civil penalty order in 2025 case); service blocking directions.",
        "sources": [43, 69, 70, 71],
        "gaps": "Service access restrictions do not establish measured population-level reductions in victimization."
    },
    {
        "id": "canada",
        "country": "Canada",
        "flag": "CA",
        "statute": "Protecting Victims Act, 2026 (Bill C-16)",
        "status": "In force (Section 15 in force 18 July 2026)",
        "effectiveDate": "Royal Assent 18 June 2026; in force 18 July 2026 (s. 205(1))",
        "timeline": "Criminal justice proceedings (s. 15 in force 18 July 2026)",
        "scope": "Canada's Protecting Victims Act, 2026 received Royal Assent on 18 June 2026. Section 15 amends Criminal Code section 162.1 to include qualifying realistic synthetic visual representations of identifiable persons in intimate circumstances. Under section 205(1), the provision came into force on 18 July 2026, the 30th day after Royal Assent. Not a blanket prohibition on all AI imagery.",
        "obligations": [
            "Criminal Code section 162.1 prohibition on non-consensual distribution of qualifying realistic synthetic intimate imagery (in force 18 July 2026 under s. 205(1)).",
            "Preserves statutory threshold requiring qualifying realistic depictions of identifiable persons in intimate circumstances."
        ],
        "penalties": "Criminal penalties under Criminal Code s. 162.1 (indictable offence up to 5 years imprisonment or summary conviction).",
        "sources": [44],
        "gaps": "Addresses criminal sanctions; does not establish standalone upstream developer release hold mandates."
    },
    {
        "id": "japan",
        "country": "Japan",
        "flag": "JP",
        "statute": "Penal Code (Defamation Art. 230, Insult Art. 231) & Provider Liability Act",
        "status": "Case-by-case statutory application",
        "effectiveDate": "Existing Penal Code & civil remedies (reaffirmed 2025)",
        "timeline": "Notice-and-takedown under Provider Liability Limitation Act",
        "scope": "Previously established findings note possible criminal defamation or insult depending on case facts, alongside civil privacy/portrait rights.",
        "obligations": [
            "Voluntary platform moderation upon valid infringement notice.",
            "Sender identification disclosure upon court order."
        ],
        "penalties": "Criminal defamation/insult penalties where statutory elements are met; civil tort liability.",
        "sources": [45],
        "gaps": "No standalone deepfake-specific statutory offence established in retained baseline."
    },
    {
        "id": "south_korea",
        "country": "South Korea",
        "flag": "KR",
        "statute": "Act on Special Cases Concerning Punishment of Sexual Crimes (Art. 14-2)",
        "status": "Active enforcement",
        "effectiveDate": "Active (Article 14-2)",
        "timeline": "Expedited KCSC access-blocking deliberation",
        "scope": "English statutory text addresses non-consensual editing or synthesis of a person's face, body, or voice into sexual depictions.",
        "obligations": [
            "Prohibits non-consensual sexual synthesis and distribution.",
            "Telecommunications operators must execute blocking/filtering orders."
        ],
        "penalties": "Statutory criminal imprisonment and fines under Art. 14-2.",
        "sources": [46],
        "gaps": "Cross-border enforcement against offshore encrypted channels remains difficult."
    }
]

# 3. Reconcile Publications
publications = [
    {
        "title": "Research Journal Manuscript · V4.1 (Defended Edition)",
        "slug": "v4-journal",
        "file": "v4-journal.pdf",
        "type": "Master Evidence & Policy Synthesis",
        "pages": "24 pages",
        "date": "25 November 2026",
        "status": "Current Working Edition (Pending External Peer Review)",
        "description": "AI-assisted structured narrative evidence review and regulatory policy synthesis, reconciled to the V4.1 canonical baseline with formal limitations and non-pooling disclaimers."
    },
    {
        "title": "Public Evidence Brief",
        "slug": "public-evidence-brief",
        "file": "public-evidence-brief.pdf",
        "type": "Briefing Document",
        "pages": "4 pages",
        "date": "25 November 2026",
        "status": "Public Brief (V4.1 Aligned)",
        "description": "Concise synthesis of verified empirical findings, survivor harms, and four core policy demands."
    },
    {
        "title": "India Policy Brief",
        "slug": "india-policy-brief",
        "file": "india-policy-brief.pdf",
        "type": "Policy Brief",
        "pages": "2 pages",
        "date": "25 November 2026",
        "status": "Informational Regulatory Analysis",
        "description": "Analysis of India's IT Act, IT Rules 2021/2026 amendments (2-hour and 3-hour distinct triggers), BNS, POCSO, and DPDP Act."
    },
    {
        "title": "Annotated Source Evidence",
        "slug": "annotated-evidence",
        "file": "annotated-evidence.pdf",
        "type": "Evidence Dossier",
        "pages": "16 pages",
        "date": "November 2026",
        "status": "Source Dossier",
        "description": "Bibliographic notes, locators, methodological limits, and citations for indexed references."
    },
    {
        "title": "Research Resource Directory",
        "slug": "resource-directory",
        "file": "resource-directory.pdf",
        "type": "Bibliography",
        "pages": "12 pages",
        "date": "November 2026",
        "status": "Bibliography Index",
        "description": "Numbered reference index with URLs and institutional source categorizations."
    },
    {
        "title": "Historical Research Review · V3",
        "slug": "v3-journal",
        "file": "v3-journal.pdf",
        "type": "Archival Draft",
        "pages": "23 pages",
        "date": "2026",
        "status": "Archived (Superseded by V4.1)",
        "description": "Superseded V3 draft preserved unchanged for transparency."
    },
    {
        "title": "Historical Research Review · V2",
        "slug": "v2-journal",
        "file": "v2-journal.pdf",
        "type": "Archival Draft",
        "pages": "18 pages",
        "date": "Mid-2026",
        "status": "Archived (Superseded by V4.1)",
        "description": "Superseded V2 draft preserved unchanged for transparency."
    },
    {
        "title": "Historical Research Review · V1",
        "slug": "v1-journal",
        "file": "v1-journal.pdf",
        "type": "Archival Draft",
        "pages": "20 pages",
        "date": "Early 2026",
        "status": "Archived (Superseded by V4.1)",
        "description": "Superseded V1 draft preserved unchanged for transparency."
    },
    {
        "title": "Prospective Research Protocol",
        "slug": "research-protocol",
        "file": "research-protocol.md",
        "type": "Methodology Protocol",
        "pages": "Markdown",
        "date": "25 November 2026",
        "status": "Protocol Specification",
        "description": "Structured narrative evidence review and regulatory policy synthesis protocol guided by PRISMA transparency principles."
    }
]

# 4. Reconcile Corrections
corrections = data["corrections"] + [
    {
        "id": "CORR-06",
        "date": "2026-11-25",
        "title": "Withdrawal of Exploratory 722-Model Query Count",
        "affected_field": "Public model hub findings, abstracts, charts, and SEO metadata",
        "previous_wording": "Referenced 722 model artifacts/listings from Hugging Face Text-to-Image search=nsfw pagination.",
        "revised_wording": "Withdrawn from all public findings, charts, abstracts, policy arguments, and SEO metadata. Retained only in this historical corrections register.",
        "reason": "The 722 figure was an exploratory search pagination count without an established row-level dataset; no replacement census is fabricated.",
        "status": "Withdrawn from Public Findings"
    },
    {
        "id": "CORR-07",
        "date": "2026-11-25",
        "title": "Reframing of 53-Record Technical Inventory Metadata Gaps",
        "affected_field": "Technical inventory interpretation (/models/, /evidence/, manuscripts)",
        "previous_wording": "Implied 0% of publishers conducted safety evaluations, 0% provided provenance, or 100% had ambiguous licenses.",
        "revised_wording": "The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour.",
        "reason": "Missing fields in a preliminary desk inventory measure collection completeness, not publisher misconduct or model unsafety.",
        "status": "Verified & Corrected"
    },
    {
        "id": "CORR-08",
        "date": "2026-11-25",
        "title": "India Helpline 1930 Scope & Regional Number Withholding",
        "affected_field": "/support/, /about/ (Hindi & Telugu blocks), /take-action/, submissions",
        "previous_wording": "Listed 1930 alongside sexual-abuse/deepfake emergency reporting and included 1091.",
        "revised_wording": "1930 is strictly designated for financial cyber-fraud reporting. Sexual abuse / NCII routing uses cybercrime.gov.in, 112 (Emergency), 1098 (Childline), and 181 (Women Helpline, subject to availability). 1091 is withheld pending applicability verification.",
        "reason": "Prevents misrouting survivors in crisis to a financial fraud hotline.",
        "status": "Verified & Corrected"
    },
    {
        "id": "CORR-09",
        "date": "2026-11-25",
        "title": "Reconciliation of Claim Verification Register (IWF, Ofcom, CHI 2024, ISD)",
        "affected_field": "CLAIM_VERIFICATION_FINAL.csv (CLM-005, CLM-006, CLM-007, CLM-009)",
        "previous_wording": "Contained mismatched descriptions (IWF 2023-2024 6521%, Ofcom 'adult content on Reddit', CHI 2024 US high school N=1421, ISD 12 platforms).",
        "revised_wording": "Corrected to canonical baseline: IWF 13 (2024) to 3,443 (2025) videos (~264.85x) & 193 to 491 reports (+154.4%); Ofcom 69/104 (66.35%) risk records lacking named responsible person; Umbach et al. CHI 2024 10-country survey (2.2% victimization, 1.8% perpetration); ISD 20.7M monthly visits across 31 selected services (May 2025).",
        "reason": "Eliminates transcription errors against primary sources.",
        "status": "Verified & Corrected"
    },
    {
        "id": "CORR-10",
        "date": "2026-11-25",
        "title": "Methodology Classification: Structured Narrative Evidence Review",
        "affected_field": "/methodology/, /research/, manuscripts, protocol",
        "previous_wording": "Referenced PRISMA 2020 systematic review compliance.",
        "revised_wording": "Classified as an AI-assisted structured narrative evidence review and regulatory policy synthesis guided by PRISMA transparency principles, not independently peer-reviewed.",
        "reason": "PRISMA 2020 systematic review requires pre-registered screening logs and dual-blind inter-rater records not present here.",
        "status": "Verified & Corrected"
    }
]

# 5. Canonical Claims Dataset (Single Source of Truth)
claims = [
    {
        "id": "UNICEF-01",
        "exact_wording": "At least 1.2 million children across 11 surveyed countries experienced sexual deepfakes in the prior year.",
        "value": "1,200,000+",
        "unit": "children (population-weighted estimate)",
        "numerator": "1200000",
        "denominator": "Population-weighted survey & child internet-use projection across 11 countries",
        "population_geography": "Internet-using children; 11 countries",
        "reporting_period": "Prior 12 months (published 4 February 2026)",
        "source_id": 53,
        "original_title": "Deepfake abuse is abuse: Disrupting Harm Phase 2 findings",
        "publisher_authors": "UNICEF, ECPAT and INTERPOL",
        "publication_date": "2026-02-04",
        "access_date": "2026-11-25",
        "official_url": "https://www.unicef.org/",
        "doi": "",
        "locator": "4 February 2026 release",
        "supporting_summary": "Population-weighted estimate using survey and child internet-use data across 11 countries.",
        "calculation_method": "Population-weighted survey projection",
        "limitations": "Not a global victim count; do not combine with UNICEF-02.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "UNICEF-02",
        "exact_wording": "Approximately 1.1 million children across nine countries experienced sexual deepfakes (2% average prevalence).",
        "value": "1,100,000",
        "unit": "children (2% average prevalence)",
        "numerator": "1100000",
        "denominator": "9 surveyed countries (2% average prevalence)",
        "population_geography": "Children across 9 countries",
        "reporting_period": "Published September 2026",
        "source_id": 77,
        "original_title": "Through Children's Eyes: Technology-Facilitated Sexual Exploitation and Abuse",
        "publisher_authors": "UNICEF / UNICEF Innocenti",
        "publication_date": "2026-09",
        "access_date": "2026-11-25",
        "official_url": "https://www.unicef.org/belize/media/10601/file/UNICEF-Innocenti-Through-Children%27s-Eyes-report-2026.pdf",
        "doi": "",
        "locator": "Appendix Table A08",
        "supporting_summary": "Approximately 1.1 million children across nine countries; 2% reported average prevalence.",
        "calculation_method": "Survey prevalence estimate",
        "limitations": "Nine surveyed countries for the sexual-deepfake finding (~1.1M children, 2% prevalence). Do not combine with UNICEF-01 (11 countries, 1.2M+) or interpret the difference as a declining trend.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "UNICEF-03",
        "exact_wording": "Approximately 20 million children aged 12-17 across 21 countries experienced broader technology-facilitated sexual exploitation or abuse in one year.",
        "value": "20,000,000",
        "unit": "children aged 12-17",
        "numerator": "20000000",
        "denominator": "21 countries",
        "population_geography": "Children aged 12-17 across 21 countries",
        "reporting_period": "One year (published 3 September 2026)",
        "source_id": 54,
        "original_title": "Through Children's Eyes: technology-facilitated sexual exploitation and abuse",
        "publisher_authors": "UNICEF Innocenti",
        "publication_date": "2026-09-03",
        "access_date": "2026-11-25",
        "official_url": "https://www.unicef.org/innocenti/",
        "doi": "",
        "locator": "3 September 2026 publication",
        "supporting_summary": "Broader technology-facilitated sexual exploitation or abuse across 21 countries.",
        "calculation_method": "Multi-country survey synthesis",
        "limitations": "Not exclusively AI-generated abuse.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "UNICEF-04",
        "exact_wording": "[WITHHELD — NON-AI-SPECIFIC CONTEXT] Observational TFSEA distress association in broader technology-facilitated sexual exploitation research (withheld from public AI-specific findings).",
        "value": "Withheld",
        "unit": "non-AI-specific contextual record",
        "numerator": "Affected cohort occurrence",
        "denominator": "Unaffected cohort occurrence",
        "population_geography": "Surveyed children in TFSEA research",
        "reporting_period": "Published 3 September 2026",
        "source_id": 54,
        "original_title": "Through Children's Eyes: technology-facilitated sexual exploitation and abuse",
        "publisher_authors": "UNICEF Innocenti",
        "publication_date": "2026-09-03",
        "access_date": "2026-11-25",
        "official_url": "https://www.unicef.org/innocenti/",
        "doi": "",
        "locator": "3 September 2026 report",
        "supporting_summary": "Observational association within broader technology-facilitated sexual exploitation research.",
        "calculation_method": "Observational cross-sectional comparison",
        "limitations": "Not AI-specific causation; exact outcome definition not recovered locally so withheld from headline public findings.",
        "verification_status": "Pending verification",
        "publication_eligible": False
    },
    {
        "id": "IWF-01",
        "exact_wording": "IWF reports containing realistic AI-generated CSAM rose from 193 in 2024 to 491 in 2025 (+154.4%).",
        "value": "491",
        "unit": "reports (vs 193 in 2024; +154.4%)",
        "numerator": "491 - 193 = 298",
        "denominator": "193",
        "population_geography": "Global hotline reports assessed in UK",
        "reporting_period": "Calendar years 2024 vs 2025",
        "source_id": 1,
        "original_title": "AI-generated CSAM trends, 2025 Annual Data & Insights Report",
        "publisher_authors": "Internet Watch Foundation (IWF)",
        "publication_date": "2026",
        "access_date": "2026-11-25",
        "official_url": "https://www.iwf.org.uk/",
        "doi": "",
        "locator": "2025 Annual Data & Insights Report",
        "supporting_summary": "Analyst-assessed hotline reports containing realistic AI-generated child sexual abuse imagery.",
        "calculation_method": "(491 - 193) / 193 * 100 = 154.4%",
        "limitations": "Reports are not unique victims; operational assessment volumes are not population prevalence; two annual observations do not establish an exponential trend.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "IWF-02",
        "exact_wording": "Assessed photorealistic AI-generated CSAM videos rose from 13 in 2024 to 3,443 in 2025 (~264.85x).",
        "value": "3,443",
        "unit": "assessed videos (vs 13 in 2024; ~264.85x)",
        "numerator": "3443",
        "denominator": "13",
        "population_geography": "Global hotline assessments",
        "reporting_period": "Calendar years 2024 vs 2025",
        "source_id": 3,
        "original_title": "AI-generated video trends, 2025 Annual Data & Insights Report",
        "publisher_authors": "Internet Watch Foundation (IWF)",
        "publication_date": "2026",
        "access_date": "2026-11-25",
        "official_url": "https://www.iwf.org.uk/",
        "doi": "",
        "locator": "2025 Annual Data & Insights Report (detailed video insights)",
        "supporting_summary": "3,443 assessed photorealistic AI-generated videos in 2025 (earlier announcement reported 3,440; detailed report 3,443 preferred).",
        "calculation_method": "3443 / 13 = 264.85x",
        "limitations": "Media files are not unique victims; two annual observations do not establish an exponential trend; do not extrapolate future volumes.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "IWF-03",
        "exact_wording": "IWF assessed 8,029 combined photorealistic AI-generated CSAM items in 2025 (4,586 still images + 3,443 videos).",
        "value": "8,029",
        "unit": "assessed media items (4,586 images + 3,443 videos)",
        "numerator": "4586 + 3443",
        "denominator": "2025 assessed AI CSAM media corpus",
        "population_geography": "Global hotline assessments",
        "reporting_period": "Calendar year 2025",
        "source_id": 2,
        "original_title": "2025 Annual Data & Insights Report",
        "publisher_authors": "Internet Watch Foundation (IWF)",
        "publication_date": "2026",
        "access_date": "2026-11-25",
        "official_url": "https://www.iwf.org.uk/",
        "doi": "",
        "locator": "2025 Annual Data & Insights Report",
        "supporting_summary": "4,586 assessed still images plus 3,443 assessed videos equals 8,029 combined items in 2025.",
        "calculation_method": "4586 + 3443 = 8029",
        "limitations": "Media files do not equal unique victims or offenders.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "NCMEC-01",
        "exact_wording": "NCMEC recorded more than 400,000 CyberTipline exploitation reports involving generative AI in 2025.",
        "value": ">400,000",
        "unit": "CyberTipline reports",
        "numerator": "400000+",
        "denominator": "2025 CyberTipline generative-AI nexus reports",
        "population_geography": "Global submissions to US NCMEC",
        "reporting_period": "Calendar year 2025",
        "source_id": 7,
        "original_title": "CyberTipline generative-AI reporting data",
        "publisher_authors": "NCMEC",
        "publication_date": "2026",
        "access_date": "2026-11-25",
        "official_url": "https://connect.ncmec.org/theissues/generative-ai",
        "doi": "",
        "locator": "NCMEC main annual reporting series",
        "supporting_summary": "Over 400,000 CyberTipline reports involving generative AI in 2025; >182,000 involved possession, generation, or attempted generation of AI-CSAM.",
        "calculation_method": "Direct count from NCMEC annual series",
        "limitations": "Separate Senate Judiciary Committee publication cites ~1.5M AI-related reports (incl. ~1.1M non-actionable from one provider); do not add totals together.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "NCMEC-02",
        "exact_wording": "NCMEC staff categorized more than 158,000 images and videos as AI-generated between January 2023 and December 2025.",
        "value": ">158,000",
        "unit": "images and videos",
        "numerator": "158000+",
        "denominator": "Staff-reviewed media items (Jan 2023-Dec 2025)",
        "population_geography": "Global submissions to US NCMEC",
        "reporting_period": "January 2023 - December 2025",
        "source_id": 6,
        "original_title": "Generative AI",
        "publisher_authors": "NCMEC",
        "publication_date": "2026",
        "access_date": "2026-11-25",
        "official_url": "https://connect.ncmec.org/theissues/generative-ai",
        "doi": "",
        "locator": "NCMEC Generative AI issue page",
        "supporting_summary": "More than 158,000 images and videos categorized as AI-generated by NCMEC staff.",
        "calculation_method": "Direct count",
        "limitations": "Media item count; not unique victims.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "ISD-01",
        "exact_wording": "31 selected abuse-enabling services received an estimated 20.7 million combined monthly website visits in May 2025.",
        "value": "20.7 million",
        "unit": "estimated monthly website visits",
        "numerator": "20700000",
        "denominator": "31 selected abuse-enabling services",
        "population_geography": "Global web traffic (31 selected sites)",
        "reporting_period": "May 2025",
        "source_id": 66,
        "original_title": "The ecosystem of nonconsensual intimate deepfake tools online",
        "publisher_authors": "Institute for Strategic Dialogue (ISD)",
        "publication_date": "2025",
        "access_date": "2026-11-25",
        "official_url": "https://www.isdglobal.org/",
        "doi": "",
        "locator": "ISD 2025 report",
        "supporting_summary": "Estimated combined monthly website visits across 31 selected abuse-enabling services.",
        "calculation_method": "Third-party web traffic estimation",
        "limitations": "Website visits do not equal unique users, offenders, victims, purchases, or generated images. Service names and links withheld.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "CHI-01",
        "exact_wording": "In a 10-country survey (CHI 2024), approximately 2.2% self-reported victimization and 1.8% self-reported perpetration of non-consensual synthetic intimate imagery.",
        "value": "2.2% / 1.8%",
        "unit": "percent (victimization / perpetration)",
        "numerator": "2.2% / 1.8%",
        "denominator": "Ten-country adult survey sample",
        "population_geography": "10 countries (CHI 2024 survey)",
        "reporting_period": "CHI 2024",
        "source_id": 65,
        "original_title": "Non-Consensual Synthetic Intimate Imagery: Prevalence, Attitudes, and Knowledge in 10 Countries",
        "publisher_authors": "Umbach, Henry, Beard and Berryessa (ACM CHI 2024)",
        "publication_date": "2024",
        "access_date": "2026-11-25",
        "official_url": "https://dl.acm.org/",
        "doi": "",
        "locator": "ACM CHI 2024 proceedings",
        "supporting_summary": "Self-reported victimization (~2.2%) and perpetration (~1.8%) across a 10-country survey.",
        "calculation_method": "Cross-national self-report survey",
        "limitations": "Survey-specific observations, not worldwide prevalence estimates.",
        "verification_status": "Secondary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "OFCOM-01",
        "exact_wording": "69 of 104 reviewed online-safety risk-assessment records (66.35%) did not identify the person responsible for the assessment.",
        "value": "66.35%",
        "unit": "percent (69 of 104 reviewed records)",
        "numerator": "69",
        "denominator": "104",
        "population_geography": "United Kingdom (104 reviewed risk-assessment records)",
        "reporting_period": "2025",
        "source_id": 75,
        "original_title": "Online Safety Risk Assessments report: Year one",
        "publisher_authors": "Ofcom",
        "publication_date": "2025",
        "access_date": "2026-11-25",
        "official_url": "https://www.ofcom.org.uk/",
        "doi": "",
        "locator": "Printed page 18, heading 'Named person responsible for risk assessments'",
        "supporting_summary": "69 of 104 reviewed risk-assessment records did not identify a named responsible person.",
        "calculation_method": "69 / 104 * 100 = 66.35%",
        "limitations": "Concerns broader online-safety governance; not evidence that 66.35% of AI model developers lack accountability.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "ESAFETY-01",
        "exact_wording": "Eight services previously receiving >200,000 combined monthly Australian visits withdrew access or introduced compliance measures; eSafety engagement led Hugging Face to update misuse rules.",
        "value": "8 services (>200,000 visits)",
        "unit": "services / monthly Australian visits",
        "numerator": "8",
        "denominator": "Targeted services",
        "population_geography": "Australia",
        "reporting_period": "September 2026 parliamentary submission",
        "source_id": 70,
        "original_title": "eSafety Submission to Joint Select Committee on Artificial Intelligence",
        "publisher_authors": "Australian eSafety Commissioner",
        "publication_date": "2026-09",
        "access_date": "2026-11-25",
        "official_url": "https://www.esafety.gov.au/sites/default/files/2026-10/eSafety-submission-Joint-Select-Committee-on-Artificial-Intelligence.pdf",
        "doi": "",
        "locator": "Printed page 11",
        "supporting_summary": "External regulatory developments documented by eSafety, including Hugging Face rule updates.",
        "calculation_method": "Direct regulatory count",
        "limitations": "External regulatory developments not attributable to this initiative; does not establish measured reductions in victimization.",
        "verification_status": "Primary evidence supported",
        "publication_eligible": True
    },
    {
        "id": "INV-53",
        "exact_wording": "The preliminary 53-record technical inventory identified gaps in the metadata collected during this investigation, including safety-evaluation, licensing and training-data provenance fields. These findings describe the completeness of the investigation's collected records. They do not establish that publishers lack such documentation or that the models exhibit unsafe behaviour.",
        "value": "53",
        "unit": "technical inventory records",
        "numerator": "53",
        "denominator": "Phase 1 preliminary technical inventory",
        "population_geography": "Public model repositories",
        "reporting_period": "October-November 2026",
        "source_id": None,
        "original_title": "Phase 1 technical inventory workbook (records M001–M053)",
        "publisher_authors": "Consent Is Not Synthetic internal investigation",
        "publication_date": "2026-11",
        "access_date": "2026-11-25",
        "official_url": "",
        "doi": "",
        "locator": "Internal investigation artefact (Phase 1 technical inventory workbook, records M001–M053)",
        "supporting_summary": "The preliminary 53-record technical inventory identified gaps in the metadata collected during this investigation, including safety-evaluation, licensing and training-data provenance fields. These findings describe the completeness of the investigation's collected records. They do not establish that publishers lack such documentation or that the models exhibit unsafe behaviour.",
        "calculation_method": "Direct workbook row count (53 records)",
        "limitations": "Internal research artefact; findings describe completeness of the investigation's collected records, not an exhaustive census or proof that publishers lack documentation.",
        "verification_status": "Internal investigation record (M001–M053)",
        "publication_eligible": True
    },
    {
        "id": "DISC-722",
        "exact_wording": "WITHDRAWN: Exploratory 722-model Hugging Face search pagination count.",
        "value": "WITHDRAWN",
        "unit": "N/A",
        "numerator": "N/A",
        "denominator": "N/A",
        "population_geography": "N/A",
        "reporting_period": "November 2026",
        "source_id": 10,
        "original_title": "Exploratory search query log",
        "publisher_authors": "Internal exploratory note",
        "publication_date": "2026-11",
        "access_date": "2026-11-25",
        "official_url": "",
        "doi": "",
        "locator": "CORR-06",
        "supporting_summary": "Withdrawn from public findings because no row-level dataset exists.",
        "calculation_method": "Withdrawn",
        "limitations": "Exploratory search count without established row-level dataset; retained only in corrections register.",
        "verification_status": "Withdrawn",
        "publication_eligible": False
    }
]

# 6. Support Resources, External Developments, Initiative Impact
support_resources = [
    {"id": "SUP-01", "name": "Indian National Cyber Crime Reporting Portal", "url": "https://cybercrime.gov.in/", "jurisdiction": "India", "category": "General cybercrime & NCII reporting"},
    {"id": "SUP-02", "name": "India Emergency Response (112)", "url": "", "jurisdiction": "India", "category": "Immediate danger and emergencies"},
    {"id": "SUP-03", "name": "India Child Helpline (1098)", "url": "", "jurisdiction": "India", "category": "Child protection"},
    {"id": "SUP-04", "name": "India Women Helpline (181, subject to availability)", "url": "", "jurisdiction": "India", "category": "Women distress support"},
    {"id": "SUP-05", "name": "India Financial Cyber Fraud Helpline (1930)", "url": "", "jurisdiction": "India", "category": "Financial cyber fraud ONLY"},
    {"id": "SUP-06", "name": "NCMEC CyberTipline", "url": "https://report.cybertip.org/", "jurisdiction": "Global / US", "category": "Child protection"},
    {"id": "SUP-07", "name": "Take It Down (NCMEC)", "url": "https://takeitdown.ncmec.org/", "jurisdiction": "Global", "category": "Intimate-image removal (under 18 when imagery created)"},
    {"id": "SUP-08", "name": "StopNCII.org", "url": "https://stopncii.org/", "jurisdiction": "Global", "category": "Intimate-image removal (eligible adults)"},
    {"id": "SUP-09", "name": "Internet Watch Foundation (IWF)", "url": "https://www.iwf.org.uk/", "jurisdiction": "Global / UK", "category": "Child protection"},
    {"id": "SUP-10", "name": "Australian eSafety Commissioner", "url": "https://www.esafety.gov.au/", "jurisdiction": "Australia", "category": "Victim reporting and removal assistance"}
]

external_developments = [
    {"id": "EXT-01", "date": "2025-05-19", "actor": "US Congress / FTC", "development": "TAKE IT DOWN Act enacted (compliance deadline 19 May 2026; 12 FTC warning letters May 2026)", "status": "Verified external enforcement"},
    {"id": "EXT-02", "date": "2026-07-08", "actor": "European Union", "development": "Regulation (EU) 2026/1744 adopted (published 24 July 2026; AI prohibitions applicable 2 Dec 2026)", "status": "Enacted, not yet applicable as of 25 Nov 2026"},
    {"id": "EXT-03", "date": "2026-09", "actor": "Australian eSafety Commissioner", "development": "8 services restricted Australian access or added compliance measures; Hugging Face updated misuse rules", "status": "Verified external regulatory outcome"},
    {"id": "EXT-04", "date": "2026-10-26", "actor": "UK Ofcom", "development": "NCII enforcement programme engaging 25 high-risk services and opening formal investigations", "status": "Verified external regulatory action"},
    {"id": "EXT-05", "date": "2026-06-18", "actor": "Parliament of Canada", "development": "Protecting Victims Act, 2026 (Bill C-16) received Royal Assent; section 15 in force 18 July 2026 amending Criminal Code s. 162.1", "status": "In force (18 July 2026 under s. 205(1))"}
]

initiative_impact = [
    {"id": "IMP-01", "target": "MeitY (India)", "deliverable": "01_MeitY_India_Submission.md", "status": "Proposed", "notes": "Drafted; not submitted pending owner sign-off."},
    {"id": "IMP-02", "target": "NCPCR (India)", "deliverable": "02_NCPCR_Child_Protection_Submission.md", "status": "Proposed", "notes": "Drafted; not submitted pending owner sign-off."},
    {"id": "IMP-03", "target": "NCW (India)", "deliverable": "03_NCW_Women_Dignity_Submission.md", "status": "Proposed", "notes": "Drafted; not submitted pending owner sign-off."},
    {"id": "IMP-04", "target": "Hugging Face Trust & Safety", "deliverable": "04_Platform_Trust_and_Safety_Brief.md", "status": "Proposed", "notes": "Drafted; not submitted pending owner sign-off."},
    {"id": "IMP-05", "target": "Child Protection NGOs", "deliverable": "05_Child_Protection_NGO_Protocol.md", "status": "Proposed", "notes": "Drafted; not submitted pending owner sign-off."}
]

# Schema & Integrity Validation
assert len({c["id"] for c in claims}) == len(claims), "Duplicate claim IDs!"
assert len({s["id"] for s in sources}) == len(sources), "Duplicate source IDs!"
for c in claims:
    if c.get("source_id") is not None:
        assert c["source_id"] in source_by_id, f"Missing source_id {c['source_id']} in {c['id']}"
    assert c["limitations"].strip(), f"Missing limitations in {c['id']}"
    if c["publication_eligible"]:
        assert c["verification_status"] in ("Primary evidence supported", "Secondary evidence supported", "Internal investigation record (M001–M053)"), f"Unsupported public claim: {c['id']}"

# Write 10 canonical JSON files
canonical_files = {
    "claims.json": claims,
    "sources.json": sources,
    "incidents.json": data["incidents"],
    "regulations.json": jurisdictions,
    "recommendations.json": data["controls"],
    "publications.json": publications,
    "corrections.json": corrections,
    "support-resources.json": support_resources,
    "external-developments.json": external_developments,
    "initiative-impact.json": initiative_impact
}
for fname, obj in canonical_files.items():
    with open(CANONICAL_DIR / fname, "w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)

# Compile unified web/lib/data.json from canonical_data
data["sources"] = sources
data["jurisdictions"] = jurisdictions
data["publications"] = publications
data["corrections"] = corrections
data["claims"] = [c for c in claims if c.get("publication_eligible")]
data["external_developments"] = external_developments
data["initiative_impact"] = initiative_impact
with open(WEB_DATA_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

# Export CLAIM_VERIFICATION_FINAL.csv
claim_fields = [
    "id", "exact_wording", "value", "unit", "numerator", "denominator",
    "population_geography", "reporting_period", "source_id", "original_title",
    "publisher_authors", "publication_date", "access_date", "official_url",
    "locator", "supporting_summary", "calculation_method", "limitations",
    "verification_status", "publication_eligible"
]
for out_csv in [
    ROOT / "CLAIM_VERIFICATION_FINAL.csv",
    DOWNLOADS_DIR / "claim-verification-final.csv",
    ROOT / "research" / "working-history" / "research_v4" / "claim-verification-final.csv"
]:
    with open(out_csv, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=claim_fields)
        w.writeheader()
        for c in claims:
            w.writerow({k: c.get(k, "") for k in claim_fields})

# Export SOURCE_VERIFICATION_FINAL.csv
src_fields = ["id", "publisher", "title", "date", "url", "stream", "status", "verified", "locator", "limitations"]
for out_src in [ROOT / "SOURCE_VERIFICATION_FINAL.csv", DOWNLOADS_DIR / "public-source-register.csv"]:
    with open(out_src, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=src_fields)
        w.writeheader()
        for s in sources:
            w.writerow({k: s.get(k, "") for k in src_fields})

print("Canonical DB reconciled, validated, and exported successfully.")
