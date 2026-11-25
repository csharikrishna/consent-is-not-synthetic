from pathlib import Path
import csv,re
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
p=Path(__file__).parent
new=[
('unicef12','UNICEF, ECPAT and INTERPOL','Deepfake abuse is abuse: Disrupting Harm Phase 2 findings','4 February 2026','https://www.unicef.org/press-releases/deepfake-abuse-is-abuse','Estimated at least 1.2 million internet-using children aged 12–17 across 11 surveyed countries experienced sexual deepfake victimization in one year; estimates weighted by population and internet use.','Modelled survey estimate, not individual reports, not global prevalence or an open-weight attribution.'),
('unicefwide','UNICEF Innocenti','Through Children’s Eyes: technology-facilitated sexual exploitation and abuse','3 September 2026','https://www.unicef.org/press-releases/1-5-children-across-21-countries-have-experienced-tech-facilitated-sexual','Estimated 20 million internet-using children aged 12–17 in 21 countries experienced technology-facilitated sexual exploitation or abuse in a year; nearly 60% of cases involved social platforms; fewer than 1% of experiences reported to authorities. The analysis reports roughly fourfold higher suicidal thoughts/behaviours and self-harm among affected children.','Broader abuse category, not AI-specific; associations do not establish causation or apply specifically to deepfake victims.'),
('reportremove','IWF and Childline','Reports from children of fake or manipulated intimate imagery','10 August 2026','https://www.iwf.org.uk/news-media/news/hundreds-of-british-under-18s-reporting-nude-or-sexual-imagery-of-themselves-say-its-faked-or-manipulated/','397 suspected-faked reports in 2025 versus 420 in the first half of 2026; actioned reports numbered 221 versus 268.','Reporter-suspected faking includes AI and other editing; actioned means imagery met legal threshold, not confirmed AI origin or distinct victims.'),
('thorn','Thorn','Deepfake Nudes and Young People','3 March 2025','https://www.thorn.org/research/library/deepfake-nudes-and-young-people/','US survey of 1,200 people aged 13–20: approximately 6% of teen respondents reported being targets of deepfake nude creation.','Self-report survey, not administrative incidence or global estimate; web summary published 2025.'),
('survivors','McGlynn et al.','The Harms of Image-Based Sexual Abuse','2020 online publication','https://doi.org/10.1177/0964663920947791','Qualitative interviews with 75 victim-survivors across the UK, Australia and New Zealand describe enduring disruption across personal and social life.','Image-based abuse broadly, not exclusively AI; qualitative findings not prevalence or causal estimates.'),
('deepfakeimpact','PubMed-indexed study','The lived experiences and impacts of sexualized deepfake abuse','2026','https://pubmed.ncbi.nlm.nih.gov/42920292/','Qualitative interviews with 25 Australian adults, including 15 victim-survivors and 10 perpetrators, report psychological, social and occupational harms, including distress, reputational and relationship damage.','Abstract-level review; small qualitative sample, not representative and not a child study.'),
('dojohio','US Department of Justice','Hilliard man sentenced for AI alteration of real minors’ images','11 May 2026','https://www.justice.gov/usao-sdoh/pr/hilliard-man-sentenced-14-years-prison-using-ai-morph-images-real-minors-child','Federal sentence of 14 years for two child pornography crimes; defendant admitted AI alteration of images of real children and distribution of abuse material.','Multiple offences; cannot isolate AI contribution to sentence; model not attributed.'),
('dojstalk','US Department of Justice','Columbus man sentenced for cyberstalking and AI-generated obscene material','8 September 2026','https://www.justice.gov/usao-sdoh/pr/columbus-man-sentenced-15-years-prison-cyberstalking-exes-creating-ai-generated','15-year federal sentence following guilty pleas for cyberstalking, obscene child sexual abuse representations and publication of digital forgeries.','Multiple offences, case-specific adjudication; not evidence of general prevalence or model family.'),
('uknotes','UK Parliament','Crime and Policing Act 2026: explanatory notes','2026','https://www.legislation.gov.uk/ukpga/2026/20/notes/division/11/index.htm','Sections 72 and 99 address child sexual abuse image-generators and purported intimate image generators; section 99 includes making, adapting and supplying, with defined defences and intermediary exemptions.','Enacted text and explanatory notes; commencement, territorial extent and exact elements require verification before legal reliance.'),
('ftcenforce','US Federal Trade Commission','FTC Begins Enforcing the TAKE IT DOWN Act','19 May 2026','https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-begins-enforcing-take-it-down-act','Section 3 enforcement began 19 May 2026; covered platforms must remove qualifying intimate depictions and known identical copies within 48 hours of a valid request.','US statutory scope only; does not prove compliance or elimination of all copies.'),
('ntia','US National Telecommunications and Information Administration','Dual-Use Foundation Models with Widely Available Model Weights','July 2024','https://www.ntia.gov/sites/default/files/publications/ntia-ai-open-model-report.pdf','Recommended monitoring rather than immediate broad weight restrictions given then-insufficient marginal-risk evidence; preserves future targeted restriction option.','Historical policy assessment, not current law; scope includes a parameter threshold that can omit image models; no claim that all releases are safe.'),
('indiareport','Government of India','National Cyber Crime Reporting Portal: FAQ','Accessed 25 November 2026','https://www.cybercrime.gov.in/webform/FAQ.aspx','Official reporting portal offers a category for crimes relating to women and children.','Reporting channel, not evidence of case outcomes or an emergency service.')]
def esc(s):
    s=s.replace('–','--').replace('’',"'").replace('“','``').replace('”',"''")
    return ''.join({'&':r'\&','%':r'\%','#':r'\#','_':r'\_','$':r'\$'}.get(c,c) for c in s)
# New figure: compare observed reports, not periods normalized or forecast.
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':10,'axes.spines.top':False,'axes.spines.right':False,'pdf.fonttype':42})
fig,ax=plt.subplots(figsize=(7.2,2.7)); x=[0,1]; w=.33
for i,(vals,label,c) in enumerate([([397,420],'All suspected-faked reports','#39566b'),([221,268],'Actioned reports','#a74940')]):
    bars=ax.bar([v+(i-.5)*w for v in x],vals,w,label=label,color=c)
    ax.bar_label(bars,padding=3,fontsize=10)
ax.set_xticks(x,['2025 (12 months)','Jan–Jun 2026 (6 months)']); ax.set_ylabel('Reports');ax.set_ylim(0,500);ax.legend(frameon=False,loc='upper left',fontsize=8);ax.grid(axis='y',alpha=.18);ax.set_axisbelow(True);fig.tight_layout();fig.savefig(p/'figures/report_remove.pdf');plt.close(fig)
# Policy diagram, original
fig,ax=plt.subplots(figsize=(7.2,3.2));ax.set_xlim(0,10);ax.set_ylim(0,5);ax.axis('off')
boxes=[(0.2,3.0,3.0,1.4,'A  Prohibit','Purpose-built abuse tools\nand knowing supply','#f5e5e1','#a74940'),(3.5,3,3,1.4,'B  Restrict release','Serious residual risk;\nindependent review','#f5eee1','#9a753c'),(6.8,3,3,1.4,'C  Permit with duties','Legitimate uses;\nrisk-proportionate controls','#e4efec','#397462'),(.2,.6,9.6,1.25,'Across all categories','Victim remedies • privacy • audit • appeal • cross-border cooperation','#e9eef1','#39566b')]
for x,y,w,h,t,b,fc,ec in boxes:
 ax.add_patch(FancyBboxPatch((x,y),w,h,boxstyle='round,pad=.05,rounding_size=.12',fc=fc,ec=ec,lw=1.2));ax.text(x+w/2,y+h-.35,t,ha='center',va='center',fontsize=11,fontweight='bold',color=ec);ax.text(x+w/2,y+.42,b,ha='center',va='center',fontsize=9,color='#172d3a')
for x in [1.7,5,8.3]:ax.annotate('',xy=(x,1.9),xytext=(x,2.95),arrowprops={'arrowstyle':'->','color':'#64748b'})
fig.tight_layout();fig.savefig(p/'figures/regulatory_tiers.pdf',bbox_inches='tight');plt.close(fig)
# revised manuscript
f=p/'journal.tex'; s=f.read_text()
s=s.replace('Research working paper','Policy and evidence review').replace('Evidence review}', 'Research article | Draft}')
s=s.replace('Open-Weight Image Generation\\\\and Synthetic Media Abuse','Synthetic Sexual Abuse in the\\\\Age of Generative AI').replace('Architecture, distribution, child safety, digital forensics\\\\and regulatory accountability','Evidence of harm, accountability gaps, and the case\\\\for targeted prohibition and release controls')
s=s.replace('Research manuscript} \\hfill','Revised policy research manuscript} \\hfill')
a=s.index('Open-weight image generation has created'); b=s.index('\n\n\n\\textbf{Keywords:',a)
s=s[:a]+r'''\textbf{Background.} Generative AI can transform an ordinary photograph into an instrument of sexual abuse without the depicted person's participation. The resulting harm is not hypothetical: survivors face loss of autonomy, repeated exposure, intimidation and social exclusion. Downloadable model weights create a distinct problem of downstream control, although abuse is also possible through hosted systems. \textbf{Methods.} A structured narrative review integrates public technical documentation, survey estimates, operational child-protection data, qualitative research, criminal cases and legal materials. \textbf{Results.} UNICEF estimates that at least 1.2 million children across 11 surveyed countries experienced sexual deepfake victimization in one year. IWF assessed 8,029 realistic criminal AI-generated media items in 2025; its reports containing such imagery increased from 193 to 491. A separate UK child-reporting service recorded more actioned reports involving suspected faked imagery in six months of 2026 than in all of 2025. These datasets measure different outcomes and cannot be pooled. \textbf{Policy implications.} Prohibit purpose-built abuse generators and their knowing supply; require independent, risk-proportionate pre-release evaluation; restrict distribution where critical risks remain unresolved; and establish enforceable victim remedies. A universal ban on general-purpose open weights is not established by the present evidence. \textbf{Conclusion.} The burden of managing foreseeable sexual exploitation should not be transferred to the people whose likenesses are abused. \cite{iwf,unicef12,reportremove,deepfakeimpact,uknotes,ntia}''' +s[b:]
s=s.replace('Contribution: a cross-layer taxonomy; a source-auditable quantitative synthesis; a bounded comparison of representative public model families; and a practical governance and forensic framework.', 'Contribution: a cross-layer technical review, a source-auditable synthesis of victim and operational evidence, and a proposed three-tier regulatory framework with evaluation and redress requirements.')
# Improve first page density
s=s.replace(r'\fig{ecosystem}{.98}',r'\fig{ecosystem}{.78}')
# Put new sections at appropriate anchors; continuous page layout, reserve first page as title/abstract.
impact=r'''
\section{The human cost: a fabricated image is not a fabricated injury}
\textbf{The central rights violation is the loss of sexual autonomy.} A synthetic depiction need not record a physical event to violate a real person's dignity, privacy or sense of safety. For an identifiable victim, the publication or threatened publication of a fabricated image can make their own likeness a source of coercion. The recipient need not believe the image is genuine for the abuse to have consequences: humiliation, harassment and reputational damage can occur precisely because the fabrication is recognized as a hostile act. This is why a definition of harm limited to the authenticity of the depicted event is inadequate.

Qualitative research on image-based sexual abuse has documented deep and persistent disruption to survivors' social and personal lives. A 2026 Australian interview study focused on sexualized deepfakes, comprising 15 victim-survivors and 10 perpetrators, reports substantial psychological, social and work-related harms. These studies support the existence and nature of the injury, not its incidence in a wider population. They do not justify predicting a particular psychological outcome for any individual. \cite{survivors,deepfakeimpact}

\begin{center}\small\begin{tabularx}{\linewidth}{@{}YYY@{}}\toprule
\textbf{Dimension} & \textbf{Foreseeable harm} & \textbf{Required response}\\\midrule
Autonomy & Sexual identity is represented without permission; threats can intensify loss of control. & Consent-centred law and prompt redress.\\
Mental wellbeing & Distress, fear, shame, isolation and uncertainty over further exposure. & Confidential, trauma-informed support.\\
School and work & Harassment, peer exclusion, damage to professional or educational participation. & Anti-retaliation rules and safeguarding.\\
Continuing exposure & Reappearance or further manipulation may prolong the injury. & Removal, lawful duplicate prevention, case follow-up.\\
Institutional burden & Victims may be forced to explain, contest and repeatedly document abuse. & One-stop complaints and minimal repetitive disclosure.\\\bottomrule\end{tabularx}\end{center}

For children the implications extend to safeguarding, learning and trust. UNICEF's September 2026 report on technology-facilitated sexual exploitation across 21 countries describes fear, isolation and heightened mental-health risks, including an approximately fourfold association with reported suicidal thoughts or behaviours and self-harm. This is evidence about the broader category of abuse, not a deepfake-specific causal effect. The ethical obligation is to prevent exploitation and offer support, not to use these outcomes as sensational rhetoric. \cite{unicefwide}

\sub{When a child is not identifiable}
Absence of an identified victim does not resolve the harm question. IWF documents the reuse of known victims' likenesses and warns of broader risks to child protection. UNICEF also identifies normalization, demand and investigative challenges as concerns. The precise causal effect of synthetic media exposure on later contact offending remains insufficiently established by this review; the case for action need not depend on claiming that every synthetic image directly causes a contact offence. \cite{iwf,unicef12}

\section{Scale: victim estimates and operational evidence}
UNICEF's February 2026 release draws on nationally representative household surveys in 11 countries, approximately 1,000 internet-using children aged 12--17 and 1,000 caregivers per country. The national estimates were weighted using UN population data and estimated internet-use rates. The resulting estimate of at least 1.2 million children affected in one year is not a count of survey respondents, a global estimate, or a count attributable to a particular model or release mode. In some study countries, the reported prevalence was one child in 25. A separate US survey by Thorn of 1,200 people aged 13--20 found approximately 6\% of teen respondents reported being targeted by deepfake nude creation. The designs differ and should not be pooled. \cite{unicef12,thorn}

\begin{center}\small\begin{tabularx}{\linewidth}{@{}>{\RaggedRight\arraybackslash}p{.25\linewidth}YY@{}}\toprule
\textbf{Measure} & \textbf{Magnitude} & \textbf{Interpretation}\\\midrule
UNICEF 11 countries & $\geq$1.2 million children; one-year estimate & Sexual deepfake victimization; modelled survey estimate [53].\\
UNICEF 21 countries & Approx. 20 million children; one-year estimate & All surveyed forms of technology-facilitated sexual abuse, not AI-specific [54].\\
Thorn US survey & Approx. 6\% of teens surveyed & Self-reported targeting; no global extrapolation [56].\\
IWF 2025 & 491 reports; 8,029 media items & Operational detection, not unique victims [1].\\
Report Remove & 221 actioned reports in 2025; 268 in H1 2026 & Suspected faked imagery; not necessarily AI [55].\\\bottomrule\end{tabularx}\end{center}

\fig{report_remove}{.88}{UK Report Remove: suspected-faked reports and actioned subset. Periods differ in duration; categories include non-AI manipulation. Source: IWF and Childline, 10 August 2026. \cite{reportremove}}

The first half of 2026 alone exceeded the previous full year for actioned reports by 47, or 21.3\%. This is a comparison of recorded totals over unequal periods, not an annualized forecast. It strengthens the case that real children are seeking assistance, while leaving open the effects of awareness, reporting access and classification changes. No aggregate of these figures is scientifically meaningful.

\sub{The unseen burden}
UNICEF's broader September 2026 survey synthesis reports that fewer than one in 100 experiences of technology-facilitated sexual exploitation were reported to authorities. It also estimates nearly 20 million affected internet-using children aged 12--17 across 21 countries. This finding cannot be used as a multiplier for AI-specific hotline counts. It does, however, highlight why police and platform records alone cannot measure the full experience of harm. \cite{unicefwide}

\section{Criminal cases: from possibility to established conduct}
The following cases establish that AI-assisted sexual abuse has already been addressed in criminal proceedings. They do not establish the risk of any named model, the prevalence of a particular technique or the effectiveness of a specific prohibition.

\begin{center}\small\begin{tabularx}{\linewidth}{@{}>{\RaggedRight\arraybackslash}p{.21\linewidth}YY@{}}\toprule
\textbf{Case and date} & \textbf{Documented outcome} & \textbf{Policy significance}\\\midrule
Ohio, 11 May 2026 & A 14-year federal sentence following guilty pleas involving child sexual abuse material, including AI alteration of images of real children. & Ordinary images can become instruments of abuse; safeguarding and reporting matter [59].\\
Ohio, 8 Sep 2026 & A 15-year federal sentence after guilty pleas involving cyberstalking, obscene representations of child sexual abuse and digital forgery publication. & Synthetic abuse can accompany coercion and harassment; image-only enforcement is inadequate [60].\\\bottomrule\end{tabularx}\end{center}

These are aggregate sentences for multiple offences, not tariffs for AI generation. The DOJ releases do not establish a particular open-weight architecture as the cause. A defensible policy must cover harmful conduct regardless of whether a tool is local, hosted, free or commercial. \cite{dojohio,dojstalk}
'''
anchor=r'\clearpage\sect{Synthetic identities and platform governance}'
s=s.replace(anchor,impact+'\n'+anchor)
policy=r'''
\section{The case for prohibition and controlled release}
\textbf{Policy proposition.} Prohibit the development for abusive purposes, knowing commercial or non-commercial supply, and promotion of tools designed to facilitate child sexual abuse imagery or non-consensual sexual impersonation, subject to precise legal definitions and authorized research exceptions. General-purpose systems should instead be governed by demonstrated risk, release mode and reasonable safeguards. This is a recommendation, not a description of universal current law.

The UK Crime and Policing Act 2026 provides a concrete supply-side precedent. Its explanatory notes identify provisions targeting child sexual abuse image-generators and tools made, adapted or supplied for creating purported intimate images. The latter include defined defences and intermediary exemptions. The exact commencement and territorial applicability must be verified before asserting a live criminal obligation. In the US, the FTC began enforcing the TAKE IT DOWN Act's platform-removal provision on 19 May 2026: qualifying content and known identical copies must be removed within 48 hours of a valid request. \cite{uknotes,ftcenforce}

\fig{regulatory_tiers}{.95}{Proposed three-tier governance framework. Normative synthesis, not a description of current law.}

\begin{center}\small\begin{tabularx}{\linewidth}{@{}>{\RaggedRight\arraybackslash}p{.19\linewidth}YY@{}}\toprule
\textbf{Tier} & \textbf{Intervention} & \textbf{Decision criteria}\\\midrule
A: Prohibit & No public development for abuse or knowing supply; remove verified listings; enforce against culpable suppliers. & Specific abusive design or documented intended use, established through lawful evidence.\\
B: Restrict & Delay unrestricted weight release; allow controlled, authorized evaluation; require remediation and reassessment. & Independently substantiated critical residual risk, weak controls, material exposure and lack of less restrictive alternatives.\\
C: Permit & Legitimate research and ordinary creation subject to proportionate safety, privacy and redress duties. & Documented legitimate uses and acceptable residual risk under published criteria.\\\bottomrule\end{tabularx}\end{center}

The proposed framework deliberately avoids using parameter count, download rank or a generic adult-content label as a proxy for criminal capability. Such shortcuts would misclassify legitimate tools, miss dangerous specialized derivatives, and weaken enforcement legitimacy. Decisions require a record of evidence, notice, an opportunity to respond where appropriate, independent review and a route to appeal.

\section{Counterarguments, feasibility and the evidence needed for a ban}
The strongest objection to a universal prohibition is that the underlying technology has substantial lawful uses and can support independent research, competition and safety evaluation. The 2024 NTIA report concluded that its then-available evidence did not justify broad restrictions on widely available dual-use model weights, while preserving the possibility of future targeted restrictions. Its analysis is not a finding that image generators are safe; its scope and evidence base differ from the later child-protection reports discussed here. \cite{ntia}

\begin{center}\small\begin{tabularx}{\linewidth}{@{}YYY@{}}\toprule
\textbf{Policy option} & \textbf{Likely value} & \textbf{Limits and trade-offs}\\\midrule
Blanket open-weight ban & Could reduce some future public releases. & Existing copies and foreign supply persist; restricts legitimate research; incremental effect unmeasured.\\
Purpose-built tool prohibition & Targets products whose purpose is abusive, including hosted systems. & Requires precise definitions, evidence and cross-border enforcement.\\
Pre-release controls & Intervenes before hard-to-recall distribution. & Independent testing capacity, uncertainty, compliance costs.\\
Downstream removal & Directly reduces exposure on cooperating platforms. & Acts after injury and cannot guarantee deletion everywhere.\\
Voluntary safeguards only & Flexible, low initial regulatory cost. & Uneven implementation and limited recourse if firms fail to act.\\\bottomrule\end{tabularx}\end{center}

\sub{A precautionary release decision}
For a prospective release, an independent authority should compare the proposed distribution with a controlled-access alternative. A restriction is justified in this framework where severe harm is credible, unrestricted release materially changes exposure or enforceability, and a narrower mitigation cannot sufficiently reduce the risk. The evaluation should consider benefits foregone, implementation cost, discrimination risks and the likelihood of displacement to other channels. It is not necessary to establish an exact global victim count before taking a proportionate preventive action. Conversely, documented harm alone does not quantify the benefit of prohibiting every general-purpose model.

Once publicly distributed, weights are difficult to recall; this is an asymmetry between release and remediation identified in the NTIA report. Therefore pre-release review matters most for future high-risk releases. Restrictions must remain reviewable, with updated evidence, time limits for interim measures and an avenue for reconsideration. \cite{ntia}

\section{An enforceable implementation framework}
The following milestones are proposed, not existing universal deadlines. They assign responsibility to the participants who can intervene rather than asking victims to police the ecosystem. National authorities should tailor them to applicable law and operational capacity.

\begin{center}\small\begin{tabularx}{\linewidth}{@{}>{\RaggedRight\arraybackslash}p{.18\linewidth}YY@{}}\toprule
\textbf{Target} & \textbf{Action and owner} & \textbf{Audit evidence}\\\midrule
0--30 days & Regulators define prohibited purposes, preserve research exceptions; hosts establish confidential escalation. & Published criteria, reporting pathways, response ownership.\\
30--90 days & Publishers document safety cases for high-risk releases; hosts investigate verified abusive listings; platforms test removal workflows. & Independent review records, remediation decisions, response-time distributions.\\
90--180 days & Regulators audit compliance; social and payment services coordinate lawful abuse escalation; victim organizations review accessibility. & Audit results, appeal outcomes, recurring exposure metrics.\\
6--12 months & Independent evaluators compare outcomes and unintended consequences; revise thresholds and statutory guidance. & Public aggregate evaluation, uncertainty analysis, corrective measures.\\\bottomrule\end{tabularx}\end{center}

\sub{Metrics that measure protection rather than publicity}
Measure median and 90th-percentile time from valid report to protective action; proportion of qualifying reports resolved within the applicable deadline; repeat exposure within a defined follow-up period; victim-reported accessibility and satisfaction; audit coverage; and successful appeals and false-positive rates. Report denominators, missing data, time periods and sampling rules. Higher reporting volume may reflect improved access rather than more abuse, so incident counts must be interpreted alongside independent victim surveys and review capacity. No reduction target should be represented as an achieved result.

\sub{India-specific policy pathway}
India can build on the IT Act, POCSO, intermediary rules and the National Cyber Crime Reporting Portal while examining gaps in liability for purpose-built abuse generators. A legislative proposal should expressly distinguish synthetic sexual exploitation from lawful artistic and medical uses, define the prohibited conduct and relevant mental element, provide confidential reporting and remedies, and preserve legitimate investigation under authorization. Integrate child-protection specialists into evaluation and provide a clear appeal route. The official portal supports a reporting category for crimes concerning women and children. \cite{itact,pocso,india,indiareport}

\sub{Victim-centred incident response}
Respond to threats and coercion through appropriate safety and law-enforcement channels; provide confidential support; do not require a victim to redistribute intimate material to demonstrate abuse. Use authorized reporting mechanisms and preserve non-content identifiers where lawful. Suspected child sexual abuse material should not be downloaded, copied or circulated by members of the public. Do not force victims to repeatedly retell traumatic events. Platform action, investigation, counselling and legal remedies should be complementary rather than sequential barriers to protection.
'''
anchor2=r'\clearpage\sect{Synthesis, limitations and conclusion}'
s=s.replace(anchor2,policy+'\n'+anchor2)
# Strong conclusion before declarations
s=s.replace(r'\sub{Declarations}',r'''\sub{Conclusion and research contribution}
The convergence of survey evidence, qualitative survivor research, operational reports and adjudicated cases supports urgent action against synthetic sexual abuse. These sources do not independently establish what fraction is attributable to open weights, but they do establish that the harm is real and that waiting for perfect attribution would leave existing victims without adequate remedies. The proposed approach is to prohibit purpose-built abuse tools, prevent uncontrolled release of independently assessed high-risk capabilities where necessary, and enforce downstream removal and support. The obligation to prove a product is acceptably safe before exposing the public to critical risks should rest with those who develop and distribute it, subject to proportionate regulation and independent scrutiny.

\sub{Declarations}''')
# Reduce whitespace between sections, keep cover first then flow, references last.
s=s.replace(r'\clearpage\sect',r'\sect')
s=s.replace(r'\sect{Introduction and research questions}',r'\clearpage\sect{Introduction and research questions}',1)
s=s.replace(r'\setlength{\parskip}{6pt plus 1pt}',r'\setlength{\parskip}{4.5pt plus 1pt}')
s=s.replace(r'\renewcommand{\arraystretch}{1.25}',r'\renewcommand{\arraystretch}{1.16}')
# avoid splitting headings, small keep control
s=s.replace(r'\usepackage{graphicx,',r'\usepackage{needspace}\usepackage{graphicx,')
s=s.replace(r'\newcommand{\sect}[2]{\section',r'\newcommand{\sect}[2]{\Needspace{6\baselineskip}\section')
s=s.replace(r'\newcommand{\fig}[3]{\begin{center}',r'\newcommand{\fig}[3]{\begin{samepage}\begin{center}').replace(r'\captionof{figure}{#3}\end{center}}',r'\captionof{figure}{#3}\end{center}\end{samepage}}')
# new refs and companion docs
bib='\n'.join('\\bibitem{%s} %s. %s. %s. \\url{%s}.'%(k,esc(org),esc(t),esc(date),url) for k,org,t,date,url,e,l in new)
s=s.replace(r'\end{thebibliography}',bib+'\n'+r'\end{thebibliography}')
f.write_text(s)
for name,annotated in [('resources',False),('source_evidence',True)]:
 f=p/(name+'.tex');s=f.read_text().replace('Open-Weight Image Generation and Synthetic Media Abuse','Synthetic Sexual Abuse in the Age of Generative AI')
 out=[]
 for n,(k,org,t,date,url,e,l) in enumerate(new,53):
  out.append(r'\noindent\begin{minipage}{\linewidth}\textbf{'+str(n)+'. '+esc(org)+' -- '+esc(t)+r'}\par{\small '+esc(date)+r'\par\url{'+url+r'}}\par')
  if annotated:out.append(r'\textbf{Evidence gathered:} '+esc(e)+r'\par\textbf{Interpretation / limitation:} '+esc(l)+r'\par')
  out.append(r'\end{minipage}\par\vspace{2mm}')
 s=s.replace(r'\end{document}','\n'+'\n'.join(out)+'\n'+r'\end{document}');f.write_text(s)
with (p/'source_ledger.csv').open('a',newline='') as f:csv.writer(f).writerows(new)
