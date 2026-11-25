# MEDIA BACKGROUNDER & PRESS GUIDANCE
## Reporting on Synthetic Sexual Abuse, Generative AI Supply Chains, and Victim Rights
**Document:** Press Briefing & Media Reference Guide  
**Initiative:** Consent Is Not Synthetic  
**Date:** November 2026  
**Audience:** Investigative Journalists, Technology Editors, Broadcast Reporters & Newsrooms  

---

### 1. Essential Terminology & Technical Definitions

To ensure accurate, responsible reporting, journalists should understand the technological mechanisms underlying synthetic sexual abuse:

- **Non-Consensual Intimate Imagery (NCII):** Any intimate, nude, or sexually explicit photograph or video shared or created without the explicit consent of the depicted person. When generated via AI, this is commonly referred to as synthetic NCII or "sexual deepfakes."
- **Latent Diffusion Models (LDMs):** Machine learning models (e.g., Stable Diffusion, Flux.1) that generate images by iteratively removing noise from compressed mathematical representations (latents) conditioned on text prompts.
- **Low-Rank Adaptation (LoRA):** A parameter-efficient fine-tuning technique that injects small mathematical matrices into foundation backbones. A LoRA requires only 150 MB to 700 MB of storage, costs pennies to train on consumer GPUs, and allows perpetrators to specialize foundation models on unconsented photos of specific individuals.
- **Open Weights vs. Hosted Services:** "Open weights" refers to machine learning models where the trained numerical parameters are publicly downloadable, allowing offline execution without cloud moderation. "Hosted services" are web portals or messaging bots (e.g., Telegram bots) that offer generation through web interfaces.
- **C2PA / Content Credentials:** Cryptographic provenance metadata standard designed to verify media origin. C2PA fails as a standalone defense against open weights because local runtimes do not sign metadata, and screenshots or re-compression permanently strip signatures.

---

### 2. Key Story Angles & Verified Evidence

Newsrooms covering generative AI should focus on the structural supply chain rather than viewing incidents as isolated schoolyard pranks:

#### Story Angle A: The Upstream Repository Supply Chain
- **The Core Issue:** Social media platforms and victims bear the burden of downstream cleanup, while upstream model hubs (Hugging Face, Civitai, GitHub) host and distribute specialized fine-tune adapters with zero publisher identity verification and zero safety disclosures.
- **The Evidence:** The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour.

#### Story Angle B: The Gendered Scale of Victimization
- **The Core Issue:** Synthetic sexual abuse is not a gender-neutral phenomenon; it is an acute, systemic form of gender-based violence targeting women, girls, female journalists, and public figures.
- **The Evidence:** UNICEF Innocenti projects **1.2 million+ adolescents affected** across 11 surveyed nations (41% girls vs. 29% boys). IWF assessed **8,029 realistic criminal media files** in 2025, with 99% female subjects and 54% aged 11–13.

#### Story Angle C: The Regulatory Leverage Point
- **The Core Issue:** Self-regulation by model distributors does not work until statutory regulators intervene with binding penalties.
- **The Evidence:** In July 2024, the Australian eSafety Commissioner initiated regulatory engagement with Hugging Face, forcing terms of service amendments and disrupting 8 commercial deepfake services operating within Australian jurisdiction.

---

### 3. Ethical & Trauma-Informed Reporting Guidelines

Media coverage directly influences survivor recovery, peer stigma, and perpetrator behavior. We urge newsrooms to adopt these four ethical standards:

1. **Never Publish or Describe Search Prompts:** Do not publish specific generation prompts, repository handles, or bypass jailbreak keywords that enable readers to replicate the abuse.
2. **Focus on Perpetrator Responsibility:** Frame incidents as deliberate, intentional acts of sexual harassment and privacy violations. Avoid language suggesting that the technology is an uncontrollable autonomous agent.
3. **Do Not Trivialize with "Fake" or "Prank":** Avoid dismissing incidents as "harmless high school pranks" or "virtual games." Frame the trauma as real psychological, social, and economic violence.
4. **Always Append Crisis Helplines:** Every published article or broadcast segment must include verified reporting portals and support numbers.

---

### 4. Verified Helplines to Append to News Articles

#### India
- **National Cyber Crime Reporting Portal:** [cybercrime.gov.in](https://cybercrime.gov.in) (Select *Report Crime Against Women/Children*)
- **All-India Emergency Police Assistance:** Dial **112** (24/7 National ERSS)
- **Women Helpline:** Dial **181** (Women in Distress, subject to applicable service availability)
- **Childline / POCSO Support:** Dial **1098** (24/7 Childline / Mission Vatsalya)
- **NCW 24/7 Cyber Cell:** +91-7827170170
- *(Note on 1930: Dial 1930 specifically for financial cyber fraud/banking loss)*

#### United States
- **NCMEC CyberTipline (Minors):** [report.cybertip.org](https://report.cybertip.org) | 1-800-843-5678
- **Cyber Civil Rights Initiative (CCRI Adult Helpline):** 1-844-878-CCRI (2274) | [cybercivilrights.org](https://www.cybercivilrights.org)
- **Take It Down (Automated Minor Takedown):** [takeitdown.ncmec.org](https://takeitdown.ncmec.org)

#### United Kingdom
- **Internet Watch Foundation (Anonymous CSAM):** [report.iwf.org.uk](https://report.iwf.org.uk)
- **Revenge Porn Helpline (Adults):** [revengepornhelpline.org.uk](https://revengepornhelpline.org.uk) | 0345 6000 459
- **Childline Report & Remove (Minors):** [childline.org.uk/remove](https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/remove-an-image/)

---

**Press Inquiries & Interview Requests:**  
Media Desk: `press@consentisnot-synthetic.org` (Monitored Staging Queue)  
Response SLA: 4–8 hours for newsroom deadlines
