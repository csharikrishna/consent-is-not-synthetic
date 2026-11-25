import csv, os, collections, zipfile, html, shutil
from xml.etree import ElementTree as E
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import simpleSplit
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
P='/mnt/data/publication_audit'; D='2026-11-25'
rows=list(csv.DictReader(open('/mnt/data/research_v3/source_ledger.csv')))
def save(name,fields,data):
 with open(P+'/'+name,'w',newline='',encoding='utf-8-sig') as f:
  w=csv.writer(f); w.writerow(fields); w.writerows(data)
# claim-level selective verification, separate from independent human review
checks={
1:('491 reports in 2025; 193 in 2024; 8,029 assessed realistic criminal AI media in 2025','https://www.iwf.org.uk/annual-data-insights-report-2025/emerging-and-persistent-harms/ai-generated-child-sexual-abuse-material/','Annual trend; operational reports not victims; other claims in inherited entry not rechecked'),
3:('3,443 videos in 2025; 13 in 2024','https://www.iwf.org.uk/annual-data-insights-report-2025/video-insights/ai-generated-videos/','Detailed video series; not count of unique children'),
5:('Current online executive summary gives 3,443 videos','https://www.iwf.org.uk/annual-data-insights-report-2025/executive-summary/','Earlier discrepancy must be dated; current summary agrees with detailed page. Other inherited totals not rechecked.'),
32:('NIST reviews provenance, watermarking, detection and preventive methods','https://doi.org/10.6028/NIST.AI.100-4','No universal accuracy or proof of prevention'),
53:('At least 1.2 million children estimated across 11 countries, prior year','https://www.unicef.org/asia-pacific/press-releases/deepfake-abuse-abuse','Footnote: population and internet-use weighting; not global count'),
54:('20 million ages 12–17 across 21 countries; approximately fourfold associations with self-harm and suicidal thoughts/behaviours','https://www.unicef.org/innocenti/reports/through-childrens-eyes','Broader technology-facilitated abuse; not AI-specific or causal. Other inherited claims not rechecked.'),
55:('397 received / 221 actioned in 2025; 420 / 268 in first half 2026','https://www.iwf.org.uk/news-media/news/hundreds-of-british-under-18s-reporting-nude-or-sexual-imagery-of-themselves-say-its-faked-or-manipulated/','Suspected manipulated imagery, including non-AI edits; unequal time windows'),
60:('15-year federal sentence for multiple offenses including cyberstalking and digital forgeries','https://www.justice.gov/usao-sdoh/pr/columbus-man-sentenced-15-years-prison-cyberstalking-exes-creating-ai-generated','Combined sentence; do not attribute all years to AI offense'),
65:('2.2% victimization; 1.8% perpetration, ten-country survey','https://arxiv.org/abs/2402.01721','Self-report, not world prevalence; DOI in V3 retained'),
66:('20.7 million estimated monthly visits across 31 sampled websites','https://www.isdglobal.org/digital-dispatch/the-ecosystem-of-nonconsensual-intimate-deepfake-tools-online/','Visits not people, images or victims; do not publish service directory'),
69:('Regulator reports downloadable-model misuse and model-host policy response','https://www.esafety.gov.au/newsroom/media-releases/esafety-action-prevents-services-nudifying-australian-school-children','Regulatory report; not attributable risk for any base model'),
70:('Eight services withdrew access or changed safeguards; prior combined traffic >200,000 monthly Australian visits','https://www.esafety.gov.au/sites/default/files/2026-11/eSafety_submission_Digital_Duty_of_Care_Bill_Senate_Committee_Inquiry.pdf','Regulator-reported response; no post-intervention victimization or traffic effect'),
71:('AUD 343,500 civil penalty plus costs','https://www.esafety.gov.au/newsroom/media-releases/court-orders-343500-penalty-for-posting-deepfakes-of-australian-women','Civil penalty not damages or victim compensation'),
72:('12 companies warned; 48-hour removal requirement for covered platforms on valid request','https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-sends-warning-letters-companies-about-compliance-take-it-down-act','Warnings are not adjudicated violations'),
74:('Rule 3(2)(b): two hours for reasonable/practicable measures; Rule 3(1)(d): three hours for specified actual knowledge','https://mib.gov.in/sites/default/files/2026-05/it-rules-2021-2.pdf','PDF pages 12 and 9 (1-based); distinct triggers, counsel review required'),
75:('69 of 104 reviewed records lacked named responsible person; 66.35% calculated','https://www.ofcom.org.uk/siteassets/resources/documents/online-safety/research-statistics-and-data/os-standards/online-safety-risk-assessments-report-year-one.pdf?v=408834','CORRECTION: printed page 18, not 17; not AI-specific, selected records not firms'),
76:('25 arrests in multinational investigation','https://www.coe.int/en/web/cybercrime/-/denmark-bosnia-and-herzegovina-and-others-operation-cumberland-on-ai-generated-child-sexual-abuse-material','Suspected offenses; arrests not convictions')}
audit=[]; screen=[]
for i,r in enumerate(rows,1):
 c=checks.get(i); audit.append([i,r['key'],r['publisher'],r['title'],r['url'],r['evidence_paraphrase'],'Selected claim rechecked' if c else 'Not rechecked in this pass',*(c if c else ('','','')),D if c else '', 'Pending external human reviewer'])
 group='Technical / model background' if i in list(range(10,21))+list(range(32,36))+list(range(47,51))+[63] else 'Law / governance / policy' if i in list(range(36,47))+[9,51,52,61,62,64,69,70,72,73,74,75] else 'Harm / usage / enforcement evidence'
 screen.append([i,r['title'],r['url'],group,'Retain as candidate' if group=='Harm / usage / enforcement evidence' else 'Retain as contextual evidence','Existing V3 bibliography; title and inherited summary only','Selected claim rechecked' if c else 'Full-text assessment pending'])
save('citation_audit.csv',['V3_ref','key','publisher','title','original_url','inherited_claim','status','verified_claim','checked_url','scope_and_corrections','check_date','independent_review'],audit)
save('screening_register.csv',['V3_ref','title','url','evidence_stream','initial_disposition','screen_basis','verification_status'],screen)
# independently identifiable public records; avoid graphic or operational information
cases=[
('I01','2025-02','Multinational','Criminal investigation','Operation Cumberland','25 arrests','Arrests; no conviction inference',checks[76][1]),
('I02','2025','Australia','Civil enforcement','Federal Court sexual deepfake case','AUD 343,500 penalty plus costs','Civil penalty; not compensation',checks[71][1]),
('I03','2026-03-09','US / Kentucky','Criminal sentence','AI-generated child abuse material','5 years imprisonment; 20 years supervised release','Case-specific sentence','https://www.justice.gov/usao-wdky/pr/bowling-green-man-sentenced-5-years-federal-prison-followed-20-years-supervised'),
('I04','2026-02-06','US','Criminal verdict','Child exploitation including AI-generated material','Convicted','Verdict; not sentence','https://www.justice.gov/opa/pr/repeat-sex-offender-convicted-child-exploitation-offenses-including-receiving-and-possessing'),
('I05','2026-09-08','US / Ohio','Criminal sentence','Cyberstalking and digital forgeries','15 years imprisonment','Combined offenses',checks[60][1]),
('I06','2026-09-16','US / Missouri','Criminal sentence','Possession of abuse material including AI-generated material','18 years imprisonment','Combined offenses','https://www.justice.gov/usao-edmo/pr/missouri-man-who-possessed-ai-generated-child-sexual-abuse-material-sentenced-14-years'),
('I07','2026-05','US','Regulatory warning','FTC removal-process compliance','12 companies warned','Not adjudication',checks[72][1]),
('I08','2025','Australia','Repository governance','Model-hosting regulatory engagement','Publisher terms updated','Policy change, not measured victim reduction',checks[69][1]),
('I09','2026-11','Australia','Regulatory response','Eight targeted services','Access withdrawal or compliance measures','May overlap I08; do not sum; no harm effect measured',checks[70][1]),
('I10','2026-10-26','UK','Regulatory investigation','Ofcom intimate-image abuse enforcement','Two investigations opened','Not findings of violation','https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/Enforcement-programme-into-measures-being-taken-by-services-to-prevent-users-from-encountering-or-sharing-non-consensual-intimate-imagery-NCII')]
save('incident_register.csv',['id','date','jurisdiction','record_type','description','observed_outcome','interpretation','primary_source'],cases)
# completeness census from existing workbook (no new repository verification)
ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with zipfile.ZipFile('/mnt/data/Phase_1_Image_Model_Inventory.xlsx') as z:
 root=E.fromstring(z.read('xl/worksheets/sheet1.xml')); cells=[]
 for row in root.findall('.//m:row',ns):
  cells.append({''.join(x for x in c.attrib['r'] if x.isalpha()):''.join(c.itertext()) for c in row.findall('m:c',ns)})
fields=cells[0]; records=cells[1:]; comp=[]
for col,title in fields.items():
 known=sum(bool(r.get(col,'').strip()) and r.get(col,'').strip().upper() not in ('UNKNOWN','UNVERIFIED','N/A','—','-') for r in records); comp.append([title,len(records),known,len(records)-known,round(100*known/len(records),1),'Existing workbook completeness only; not source validation'])
save('model_metadata_completeness.csv',['field','records','populated_nonplaceholder','blank_or_placeholder','percent','scope'],comp)
print(comp)
# clean public PDF with 4 deliberate pages
W,H=A4; navy='#12283C'; teal='#16736E'; red='#B04840'; gray='#536577'; pale='#E8F1F0'; c=canvas.Canvas(P+'/Public_Evidence_Brief.pdf',pagesize=A4)
def txt(x,y,t,size=12,color=navy,font='Helvetica',width=490,lead=None):
 c.setFont(font,size); c.setFillColor(HexColor(color)); lead=lead or size*1.35
 for line in simpleSplit(t,font,size,width): c.drawString(x,y,line); y-=lead
 return y
def head(n,k,title,sub):
 c.setFillColor(HexColor(navy)); c.rect(0,H-14,W,14,fill=1,stroke=0)
 txt(45,H-48,'CONSENT IS NOT SYNTHETIC  /  PUBLIC EVIDENCE BRIEF',9,teal,'Helvetica-Bold')
 y=txt(45,H-83,k.upper(),10,gray,'Helvetica-Bold'); y=txt(45,y-13,title,30,navy,'Helvetica-Bold',505,35); return txt(45,y-5,sub,12,gray,width=505)-20
def foot(n):
 c.setStrokeColor(HexColor('#D4DEE1')); c.line(45,48,W-45,48); txt(45,32,'Independent public-interest draft  |  25 Nov 2026  |  Not peer reviewed',8,gray); c.setFont('Helvetica-Bold',9); c.drawRightString(W-45,32,f'{n} / 4'); c.showPage()
def metric(y,num,label,qual):
 txt(45,y,num,39,teal,'Helvetica-Bold'); y=txt(45,y-30,label,15,navy,'Helvetica-Bold',505); return txt(45,y-6,qual,11,gray,width=505)-25
y=head(1,'01 / Human impact','AI-generated abuse is real abuse.','A public-interest briefing on synthetic sexual abuse and practical accountability.')
y=metric(y-8,'1.2 million+','Children estimated to have experienced sexual deepfake abuse.','UNICEF, ECPAT and INTERPOL: 11 surveyed countries, preceding year; weighted estimate, not a worldwide total. [1]')
y=metric(y,'491 reports','Realistic AI-generated child abuse imagery recorded by IWF in 2025.','193 in 2024. These are reports, not unique victims. [2]')
y=metric(y,'20.7 million','Estimated monthly visits to 31 sampled abuse-tool websites.','May 2025 traffic estimate; visits do not represent unique users, images or victims. [3]')
txt(45,y-4,'The policy objective: prevent exploitation before it happens, remove abusive material rapidly, and protect the people affected.',13,navy,'Helvetica-Bold',505); foot(1)
y=head(2,'02 / Evidence of escalation','What the numbers show','Operational reporting is rising. Different reporting measures must remain separate.')
# horizontal comparison
for label,val in [('2024',193),('2025',491)]:
 txt(45,y,label,12,navy,'Helvetica-Bold'); c.setFillColor(HexColor(teal)); c.rect(105,y-3,345*val/500,19,fill=1,stroke=0); txt(112+345*val/500,y,str(val),12,navy,'Helvetica-Bold'); y-=40
 y-=0
y=txt(45,y-8,'IWF reports containing realistic AI-generated child sexual abuse imagery. [2]',10,gray,width=505)-28
y=txt(45,y,'Reported psychological and social harm',19,navy,'Helvetica-Bold')-13
y=txt(45,y,'UNICEF estimates 20 million children ages 12–17 experienced technology-facilitated sexual abuse or exploitation across 21 countries in one year. Affected children were approximately four times as likely to report self-harm and suicidal thoughts or behaviours. [4]',13,navy,width=505)-16
y=txt(45,y,'Important: this broader evidence is not an AI-only estimate and does not establish causation. The separate 1.2 million estimate concerns sexual deepfakes specifically.',11,gray,width=505)-27
y=txt(45,y,'A rise in recorded reports can reflect changes in detection, reporting and underlying abuse. It cannot by itself establish the effect of a particular model or policy.',12,navy,width=505); foot(2)
y=head(3,'03 / Real-world response','Regulation can change behaviour','Documented actions are distinct from demonstrated reductions in victimization.')
for label,body in [('AUSTRALIA / Distribution','The regulator documented misuse of downloadable models and a model-hosting policy change after engagement. [5]'),('AUSTRALIA / Civil enforcement','A Federal Court ordered an AUD 343,500 penalty plus costs for posting sexual deepfakes. [6]'),('UNITED STATES / Takedown','The FTC issued warnings to 12 companies in May 2026. Covered platforms must remove qualifying content within 48 hours of a valid request. [7]'),('INDIA / Existing safeguards','Amended IT Rules require reasonable and practicable removal measures within two hours for specified intimate-image complaints; a separate three-hour rule applies to specified court or government triggers. [8]')]:
 y=txt(45,y,label,12,teal,'Helvetica-Bold')-5; y=txt(45,y,body,13,navy,width=505)-22
 y-=4
txt(45,y,'Evidence of enforcement is not proof of lower abuse prevalence. Track repeat exposure, access changes, displacement and victim outcomes.',11,gray,width=505); foot(3)
y=head(4,'04 / Public call to action','Protect consent. Require accountability.','Five proportionate reforms, with outcomes the public can demand.')
for k,b in [('1  Prohibit purpose-built exploitation tools','Measure availability and displacement through authorized audits.'),('2  Assess serious risks before release','Publish independent safety findings and remediation status.'),('3  Enforce rapid removal and appeals','Report valid complaints acted on within applicable deadlines.'),('4  Prevent repeated exposure','Track lawful duplicate prevention, appeals and false positives.'),('5  Support victims','Provide confidential referrals, accessible reporting and timely follow-up.')]:
 y=txt(45,y,k,13,navy,'Helvetica-Bold')-2; y=txt(45,y,b,11,gray,width=505)-12
 y-=2
y=txt(45,y-4,'SOURCE INDEX  /  CLICKABLE',10,teal,'Helvetica-Bold')-5
for idx,ref in [(1,53),(2,1),(3,66),(4,54),(5,69),(6,71),(7,72),(8,74)]:
 title=rows[ref-1]['publisher']+' — '+rows[ref-1]['title']; label=f'[{idx}] {title}'; label=label if len(label)<98 else label[:95]+'...'; txt(45,y,label,8,teal,width=505); c.linkURL(checks[ref][1],(45,y-3,W-45,y+9),relative=0); y-=13
 y-=0
foot(4); c.save()
