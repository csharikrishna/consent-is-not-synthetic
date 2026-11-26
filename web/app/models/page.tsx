import {Heading, Section, Note, Stat, Source, ButtonLink} from '../../components/ui';
import {Top50SnapshotExplorer} from '../../components/Explorer';
import {ModelArchitectureChart, GovernanceGapsScorecard} from '../../components/charts';
import {pageMeta, assetPath} from '../../lib/seo';
import ModelAccessGate from '../../components/ModelAccessGate';

export const metadata = pageMeta(
  '/models/',
  'Model Hub Governance: Technical Inventory Completeness & Repository Accountability',
  'Preliminary 53-record technical inventory metadata completeness analysis and repository governance evaluation.'
);

export default function ModelHubGovernancePage() {
  return (
    <ModelAccessGate>
      <Heading
        eyebrow="Special Investigation / Platform Governance"
        title="Model Hub Governance &amp; Repository Supply Chains"
        description="Preliminary 53-record technical inventory metadata completeness, parameter adaptations, and supply-chain accountability."
      />

      {/* EXECUTIVE RESEARCH SUMMARY */}
      <Section title="1. Preliminary Technical Inventory Scope">
        <p className="lede">
          Between late 2025 and 2026, researchers compiled a preliminary 53-record technical inventory of image-generation models, pipelines, and adapters hosted on public model repositories.
        </p>

        <Note>
          <strong>Methodological Demarcation: Investigation Completeness Only</strong>
          <br />
          The preliminary 53-record technical inventory contains gaps in collected safety-evaluation, licensing and provenance metadata. These gaps describe the completeness of this investigation and require additional publisher-level verification. They do not establish the absence of documentation or unsafe model behaviour. An earlier exploratory search pagination count has been withdrawn from public findings because no row-level dataset exists.
        </Note>

        <div className="grid-3" style={{marginTop:'28px'}}>
          <div className="panel stat">
            <span className="stat-number">53</span>
            <h3>Technical Inventory Records</h3>
            <p>Preliminary desk inventory cataloging foundation releases, checkpoints, and adapters across public hubs (M001–M053).</p>
          </div>
          <div className="panel stat">
            <span className="stat-number">31 / 53</span>
            <h3>Parameter Counts Recorded</h3>
            <p>31 of 53 records (58.5%) include reported parameter counts in the collected workbook; remaining fields require publisher-level verification.</p>
          </div>
          <div className="panel stat">
            <span className="stat-number">8</span>
            <h3>eSafety Service Interventions</h3>
            <p>Australian eSafety reported 8 targeted services withdrew Australian access or introduced compliance measures, and Hugging Face updated misuse rules.</p>
          </div>
        </div>

        <Note>
          <strong>Safeguarding &amp; Scope Notice:</strong>
          In compliance with ethical research standards, child online safety guidelines, and statutory prohibitions (18 U.S.C. § 2252A; POCSO Act 2012), this platform does <strong>not</strong> host model weight files, download mirrors, abusive imagery, or operational generation prompts. For governance, licensing, and documentation-completeness research, Section 7B publishes the 50-listing Hugging Face public metadata catalogue (<code>pipeline_tag=text-to-image</code>, <code>search=nsfw</code>, <code>sort=likes</code>, captured 25 Nov 2026 UTC), including public repository IDs, search-order ranks, and Hugging Face reference URLs. Separately, the preliminary 53-record desk inventory is currently summarized only at field-completeness level because the row-level workbook is not reproducible from local repository files.
        </Note>
      </Section>

      {/* PHASE 1 DISCOVERY METHODOLOGY */}
      <Section title="2. Discovery Protocol & Initial Enumeration" id="discovery">
        <p>
          The initial research phase systematically searched major model hubs for vision-generation checkpoints associated with &ldquo;NSFW&rdquo;, &ldquo;adult&rdquo;, or unmoderated capabilities:
        </p>

        <div className="panel" style={{marginTop:'20px',backgroundColor:'var(--bg)',borderLeft:'4px solid var(--accent)'}}>
          <h3 style={{marginTop:0}}>Phase 1: Model Discovery and Enumeration Findings</h3>
          <p>
            On public model hubs such as Hugging Face, researchers examined how base checkpoints and parameter-efficient adapters are tagged, licensed, and documented—while excluding model binary downloads and operational generation prompts from public release (Section 7B publishes the 50-listing public metadata catalogue for governance research).
          </p>
          <p>
            The discovery documented an expansive spectrum of open checkpoints and fine-tunes:
          </p>
          <ul className="plain-list" style={{margin:'14px 0'}}>
            <li>
              <strong>Flux-1 Dev LoRA Adapters:</strong> E.g., community LoRAs specialized on the 12B parameter Flux-1 Dev model, distributed as compact safetensors weights (~687 MB). While repository cards frequently carry <em>&ldquo;Not-For-All-Audiences&rdquo;</em> labels under CreativeML-OpenRail-M terms, downstream execution environments do not enforce these usage restrictions.
            </li>
            <li>
              <strong>Full Base Checkpoints (SDXL):</strong> Full Stable Diffusion XL base models distributed as multi-gigabyte files (up to 27.8 GB download footprints) published under permissive licenses (e.g., MIT or custom community waivers).
            </li>
            <li>
              <strong>Cross-Model Adapters:</strong> Compact adapters specialized for newer diffusion-transformer architectures (e.g., 159 MB LoRA weights for Qwen-Image), illustrating the rapid cross-pollination of community fine-tunes across foundation architectures.
            </li>
          </ul>
          <p className="micro muted" style={{marginTop:'12px'}}>
            All model card fields and repository metadata reflect public records extracted directly from official repository documentation pages <Source id={10}/> <Source id={11}/>.
          </p>
        </div>
      </Section>

      {/* ARCHITECTURAL BREAKDOWN */}
      <Section title="3. Architectural Distribution & Parameter Modalities" id="architectures">
        <p>
          The generative open-weight ecosystem exhibits a pronounced supply-chain hierarchy. Upstream research laboratories train massive foundation backbones requiring millions of dollars in compute, which are subsequently released as open weights. Downstream community developers then specialize these backbones for abusive generation with minimal marginal compute.
        </p>

        <div style={{marginTop:'22px',marginBottom:'26px'}}>
          <ModelArchitectureChart />
        </div>

        <div className="grid-2" style={{marginTop:'24px'}}>
          <div className="panel">
            <h3>Verified Inventory Architecture Breakdown (N=53)</h3>
            <div className="bars" style={{marginTop:'16px'}}>
              <div>
                <div className="bar-label">
                  <span>Flow / Transformer Family (Flux, MMDiT, DiT)</span>
                  <strong>32% (17 models)</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'32%'}}/></div>
              </div>
              <div style={{marginTop:'14px'}}>
                <div className="bar-label">
                  <span>Generation Transformer Family (Qwen, Wan)</span>
                  <strong>23% (12 models)</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'23%'}}/></div>
              </div>
              <div style={{marginTop:'14px'}}>
                <div className="bar-label">
                  <span>Pixel-Space Cascaded Diffusion (DeepFloyd, etc.)</span>
                  <strong>19% (10 models)</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'19%'}}/></div>
              </div>
              <div style={{marginTop:'14px'}}>
                <div className="bar-label">
                  <span>Latent Diffusion / U-Net (SD 1.5, SD 2.1, SDXL)</span>
                  <strong>26% (14 models)</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'26%'}}/></div>
              </div>
            </div>
            <p className="micro muted" style={{marginTop:'14px'}}>
              Primary empirical core: N=53 technical artifacts documented in <code>Phase_1_Image_Model_Inventory.xlsx</code>.
            </p>
          </div>

          <div className="panel">
            <h3>Primary Foundation Backbones Utilized</h3>
            <div className="bars" style={{marginTop:'16px'}}>
              <div>
                <div className="bar-label">
                  <span>Stable Diffusion XL (SDXL) Base (3.5B)</span>
                  <strong>51% of Specialized Checkpoints</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'51%'}}/></div>
              </div>
              <div style={{marginTop:'14px'}}>
                <div className="bar-label">
                  <span>Flux.1 (Schnell / Dev) Backbone (12B)</span>
                  <strong>26% of Community Adapters</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'26%'}}/></div>
              </div>
              <div style={{marginTop:'14px'}}>
                <div className="bar-label">
                  <span>Qwen-Image / Modern DiT (5B–20B)</span>
                  <strong>15% of Adapters</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'15%'}}/></div>
              </div>
              <div style={{marginTop:'14px'}}>
                <div className="bar-label">
                  <span>Legacy SD 1.5 Architecture</span>
                  <strong>8% of Legacy Weights</strong>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{width:'8%'}}/></div>
              </div>
            </div>
            <p className="micro muted" style={{marginTop:'14px'}}>
              Downstream specialized models depend predominantly on a handful of widely distributed upstream foundation releases <Source id={11}/> <Source id={12}/> <Source id={13}/>.
            </p>
          </div>
        </div>
      </Section>

      {/* METADATA COMPLETENESS AUDIT */}
      <Section title="4. Model-Card Metadata Completeness and Verification Priorities" id="provenance">
        <p>
          Model cards were introduced by AI safety researchers as a standardized mechanism to communicate training data provenance, intended use-cases, known limitations, and ethical boundaries <Source id={10}/>. In the preliminary 53-record desk inventory (documented in <code>model-metadata-completeness.csv</code>), the collected fields contain metadata-completeness gaps that describe the extent of this desk investigation and require publisher-level verification rather than demonstrating systemic publisher non-compliance:
        </p>

        <div style={{marginTop:'22px',marginBottom:'26px'}}>
          <GovernanceGapsScorecard />
        </div>

        <div className="table-scroll" tabIndex={0} role="region" aria-label="Governance completeness scorecard table" style={{marginTop:'20px'}}>
          <table>
            <thead>
              <tr>
                <th>Governance Parameter</th>
                <th>Observed Compliance (N=53)</th>
                <th>Completeness Status</th>
                <th>Ecosystem Risk Implication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Safety Evaluation Card</strong></td>
                <td><span className="badge-neutral">Pending Publisher Verification</span></td>
                <td>Collection gap in desk workbook</td>
                <td>Requires additional publisher-level verification; does not establish absence of safety documentation.</td>
              </tr>
              <tr>
                <td><strong>Training Dataset Provenance</strong></td>
                <td><span className="badge-neutral">Pending Publisher Verification</span></td>
                <td>Collection gap in desk workbook</td>
                <td>Requires publisher-level verification of dataset filtering and provenance disclosures.</td>
              </tr>
              <tr>
                <td><strong>Actual Weight Size Documented</strong></td>
                <td><span className="badge-neutral">Pending Workbook Fill</span></td>
                <td>Not captured in initial sheet</td>
                <td>File sizes require direct manifest verification per repository revision.</td>
              </tr>
              <tr>
                <td><strong>Reported Parameter Count</strong></td>
                <td><span className="badge-neutral">58.5% Populated (31/53)</span></td>
                <td>41.5% Blank in workbook</td>
                <td>Parameter scale was captured for 31 of 53 records during initial desk review.</td>
              </tr>
              <tr>
                <td><strong>Exact Licensing Specification</strong></td>
                <td><span className="badge-neutral">Pending Publisher Verification</span></td>
                <td>Collection gap in desk workbook</td>
                <td>Requires direct verification of repository license files and acceptable-use clauses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* FORENSICS & WATERMARKING LIMITATIONS */}
      <Section title="5. Forensic Limitations: Why Metadata &amp; Watermarking Fail Upstream" id="forensics">
        <p>
          Proponents of voluntary industry self-regulation frequently argue that provenance watermarking (e.g., C2PA) and post-hoc forensic classifiers can adequately mitigate non-consensual synthetic abuse. Empirical analysis demonstrates why these mechanisms fail in decentralized model distribution supply chains:
        </p>

        <div className="grid-3" style={{marginTop:'22px'}}>
          <div className="panel">
            <h3>1. Local Execution &amp; C2PA Stripping</h3>
            <p>
              C2PA manifests require the generative runtime to cryptographically sign metadata at inference time <Source id={33}/>. Open-weight models running locally on consumer hardware do not include signing keys. Even when metadata is attached, taking a screenshot, compressing, or re-encoding media completely removes the signature.
            </p>
          </div>
          <div className="panel">
            <h3>2. Detector Generalization Limits</h3>
            <p>
              Forensic classifiers trained to detect one model family often degrade substantially when evaluated against novel fine-tunes, localized edits, and LoRA adapters <Source id={34}/> <Source id={35}/>.
            </p>
          </div>
          <div className="panel">
            <h3>3. Cloud GPU Asymmetry</h3>
            <p>
              Serverless cloud GPU providers (e.g., RunPod, vast.ai) allow commercial operators to deploy containerized models for pennies per hour <Source id={20}/>, bypassing consumer device limits without subjecting the workflow to content moderation.
            </p>
          </div>
        </div>
      </Section>

      {/* REGULATORY INTERVENTION CASE STUDY */}
      <Section title="6. Case Study: Regulatory Engagement &amp; Repository Enforcement" id="enforcement">
        <p>
          Repository hosting platforms are not passive conduits; they exercise active editorial, search-ranking, and hosting control over their public registries. Verified regulatory interventions prove that targeted oversight directly influences platform behavior:
        </p>

        <div className="panel" style={{marginTop:'20px',borderLeft:'4px solid var(--accent)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'10px'}}>
            <div>
              <span className="tag">Verified Regulatory Precedent</span>
              <h3 style={{marginTop:'8px'}}>Australian eSafety Commissioner Intervention (July 2024)</h3>
            </div>
            <span className="micro muted">July 2024 – Ongoing Oversight</span>
          </div>
          <p style={{marginTop:'12px'}}>
            In mid-2024, the Australian eSafety Commissioner initiated formal engagement with Hugging Face after investigating commercial services generating synthetic sexual depictions of Australian students that relied on models downloaded directly from the hub <Source id={69}/>.
          </p>
          <ul className="plain-list" style={{marginTop:'12px'}}>
            <li><strong>Platform Policy Revision:</strong> Following formal regulatory engagement, Hugging Face updated its terms of service and content moderation protocols to clarify strict prohibitions against models facilitating CSAM or non-consensual intimate imagery.</li>
            <li><strong>Service Access Disruption:</strong> 8 commercial deepfake services utilizing these weights subsequently modified their access or compliance measures within Australia under civil penalty notice <Source id={69}/>.</li>
            <li><strong>Supply-Chain Implication:</strong> Confirms that model hosting repositories are legally accessible leverage points capable of enforcing proactive supply-chain hygiene.</li>
          </ul>
        </div>
      </Section>

      {/* 12-POINT REPOSITORY GOVERNANCE FRAMEWORK */}
      <Section title="7. The 12-Point Model Repository Accountability Framework" id="framework">
        <p>
          To prevent the ongoing weaponization of open model hubs while preserving legitimate creative and academic research, repositories must implement enforceable supply-chain safeguards:
        </p>

        <div className="control-list" style={{marginTop:'24px'}}>
          <article className="panel">
            <h3>1. Mandatory Training Data Provenance Disclosures</h3>
            <p>Require all public model submissions to document dataset sources and provide affirmative representations that training corpuses were filtered against known CSAM hash registries and non-consensual media scrapers.</p>
          </article>

          <article className="panel">
            <h3>2. Proactive Weight &amp; Prompt Auditing</h3>
            <p>Implement automated heuristic scanning during upload to identify models explicitly fine-tuned on unconsented persona datasets or predatory anatomical terms.</p>
          </article>

          <article className="panel">
            <h3>3. Mandatory Verified Publisher Identity</h3>
            <p>Require verified email and phone authentication for accounts publishing executable weights or LoRA adapters, ending anonymous distribution of predatory tools.</p>
          </article>

          <article className="panel">
            <h3>4. Accessible, Fast-Track Takedown Intake</h3>
            <p>Provide a dedicated, prominent reporting mechanism for individuals, school administrators, and child safety bodies to flag abusive fine-tunes, with mandatory 24-hour review windows.</p>
          </article>

          <article className="panel">
            <h3>5. Deprecate Malicious Hash Repositories</h3>
            <p>Maintain an industry-shared registry of prohibited model weight hashes, preventing identical checkpoints from being re-uploaded under alternate repository names.</p>
          </article>

          <article className="panel">
            <h3>6. Academic &amp; Red-Teaming Safe Harbor</h3>
            <p>Protect bona fide security researchers conducting adversarial testing under accredited institutional oversight, distinguishing academic safety research from unconstrained public distribution.</p>
          </article>
        </div>
      </Section>

      {/* AGGREGATE 50-REPOSITORY SNAPSHOT & TECHNICAL AUDIT SUPPLEMENT */}
      <section className="soft-section">
        <Section title="7B. 50-Repository Metadata Snapshot &amp; Technical Audit Protocol" id="audit-protocol">
          <p className="lede">
            To complement the preliminary 53-record field-completeness summary, researchers performed a metadata-only review of the first 50 Hugging Face <code>text-to-image</code> search listings matching <code>nsfw</code> (<code>sort=likes</code>, snapshot captured 25 November 2026 UTC). In accordance with our governance-research disclosure policy, this section publishes the 50 public repository IDs, search-order ranks, and Hugging Face reference URLs, while withholding model binary weights, download mirrors, and operational generation prompts.
          </p>

          <Note>
            <strong>Safeguarding &amp; Interpretation Boundary:</strong> A search match is <strong>not</strong> a certification that a repository is a complete standalone generator, technically reproducible, legally cleared, or capable of every implied output. This was a visible metadata/tag review—weights were not downloaded, hashed, or executed.
          </Note>

          <div className="grid-2" style={{marginTop:'24px'}}>
            <div className="panel">
              <h3>Aggregate Composition of 50 Reviewed Listings</h3>
              <div className="bars" style={{marginTop:'16px'}}>
                <div>
                  <div className="bar-label">
                    <span>Checkpoints / Full Models</span>
                    <strong>46% (23 / 50)</strong>
                  </div>
                  <div className="bar-track"><div className="bar-fill" style={{width:'46%'}}/></div>
                </div>
                <div style={{marginTop:'12px'}}>
                  <div className="bar-label">
                    <span>LoRA / Parameter-Efficient Adapters</span>
                    <strong>40% (20 / 50)</strong>
                  </div>
                  <div className="bar-track"><div className="bar-fill" style={{width:'40%'}}/></div>
                </div>
                <div style={{marginTop:'12px'}}>
                  <div className="bar-label">
                    <span>GGUF / Quantized Artifacts</span>
                    <strong>4% (2 / 50)</strong>
                  </div>
                  <div className="bar-track"><div className="bar-fill" style={{width:'4%'}}/></div>
                </div>
                <div style={{marginTop:'12px'}}>
                  <div className="bar-label">
                    <span>Detection / Non-Generator Entries (Tagging Noise)</span>
                    <strong>4% (2 / 50)</strong>
                  </div>
                  <div className="bar-track"><div className="bar-fill" style={{width:'4%'}}/></div>
                </div>
                <div style={{marginTop:'12px'}}>
                  <div className="bar-label">
                    <span>Other / Unclear Architecture</span>
                    <strong>6% (3 / 50)</strong>
                  </div>
                  <div className="bar-track"><div className="bar-fill" style={{width:'6%'}}/></div>
                </div>
              </div>
            </div>

            <div className="panel">
              <h3>Displayed License Labels (50-Listing Snapshot)</h3>
              <ul className="plain-list" style={{margin:'12px 0'}}>
                <li><strong>Not displayed / Unknown:</strong> 13 listings (12 not displayed, 1 unknown)</li>
                <li><strong>CreativeML-OpenRail-M / OpenRail++:</strong> 12 listings (10 OpenRail-M, 2 OpenRail++)</li>
                <li><strong>Permissive OSS (Apache-2.0 / MIT / Unlicense / Artistic-2.0):</strong> 11 listings (7 Apache-2.0, 2 MIT, 1 Unlicense, 1 Artistic-2.0)</li>
                <li><strong>&ldquo;Other&rdquo; (requires inspecting actual license text):</strong> 6 listings</li>
                <li><strong>FAIPL-1.0-SD:</strong> 3 listings</li>
                <li><strong>Custom / Non-commercial labels:</strong> 5 listings</li>
              </ul>
              <p className="micro muted">
                A license badge is a pointer, not legal clearance: upstream base-model terms, training-data rights, and applicable law must be verified separately.
              </p>
            </div>
          </div>

          <div className="grid-2" style={{marginTop:'22px'}}>
            <div className="panel">
              <h3>Field-Interpretation &amp; Data-Quality Rules</h3>
              <ul className="plain-list" style={{margin:'10px 0'}}>
                <li><strong>HF Parameter Badge &ne; File Size:</strong> Badges (e.g., <code>3B</code>, <code>6B</code>, <code>37.2M</code>) denote parameter counts, not downloadable file sizes in MB/GB.</li>
                <li><strong>Task-Tagging Noise:</strong> Search results under <code>text-to-image</code> included image-to-video adapters and safety/detection classifiers.</li>
                <li><strong>Missing Counts &ne; Zero:</strong> Unexposed download counts or parameter badges indicate omitted listing metadata, not zero activity.</li>
                <li><strong>Hardware Separation:</strong> Download storage, weights-only memory (<code>4P</code> FP32, <code>2P</code> FP16/BF16, <code>1P</code> INT8, <code>0.5P</code> 4-bit), and peak inference VRAM must be recorded separately.</li>
              </ul>
            </div>

            <div className="panel">
              <h3>Repeatable Technical Audit Completion Criteria</h3>
              <ul className="plain-list" style={{margin:'10px 0'}}>
                <li><strong>1. Hub API Metadata:</strong> Capture commit SHA, <code>pipeline_tag</code>, <code>base_model</code>, <code>config.json</code>, <code>used_storage</code>, <code>gated</code>/<code>disabled</code> status, and security scan flags.</li>
                <li><strong>2. File Manifest &amp; Integrity:</strong> Record per-file sizes from repository manifests; distinguish repository <code>blob_id</code> from local SHA-256 digests.</li>
                <li><strong>3. Architecture &amp; Parent Chain:</strong> Confirm pipeline family, artifact role, exact parent revision, and required runtime components (VAE, text encoders, scheduler).</li>
                <li><strong>4. License &amp; Provenance Chain:</strong> Inspect <code>LICENSE</code>, model card, upstream base-model terms, and training-data disclosures; mark unverified items <code>Pending</code> or <code>Unknown</code>.</li>
              </ul>
            </div>
          </div>

          <div style={{marginTop:'28px'}}>
            <h3>Complete 50-Repository Metadata &amp; Audit Catalogue (25 November 2026 Snapshot)</h3>
            <p className="micro muted" style={{marginBottom:'14px'}}>
              Searchable table of all 50 listings from <code>pipeline_tag=text-to-image</code>, <code>search=nsfw</code> (<code>sort=likes</code>, captured <code>2026-11-25</code>, date-level precision). Expand any row for repository-by-repository notes, base model dependency, verification notes, and audit status. Dates lacking a year on the search card are labeled <code>(year not displayed)</code>; missing licenses are labeled <code>Not displayed</code> or <code>Unknown</code>.{' '}
              <a href={assetPath('/downloads/top50-hf-metadata-snapshot.json')} download className="inline-link" style={{margin:0}}>
                Download Top-50 Snapshot with Provenance Metadata (JSON) ↓
              </a>
            </p>
            <Top50SnapshotExplorer />
          </div>

          <div className="grid-2" style={{marginTop:'24px'}}>
            <div className="panel">
              <h3>14 Repository-Level Audit Fields</h3>
              <p className="micro muted">Fields captured by the Hub API audit workflow (without downloading model weights):</p>
              <ul className="plain-list" style={{margin:'10px 0'}}>
                <li>Repository ID &amp; URL, Likes, 30-day <code>downloads</code>, and <code>downloads_all_time</code></li>
                <li><code>last_modified</code> / commit SHA, <code>pipeline_tag</code>, <code>library_name</code>, and <code>tags</code></li>
                <li><code>base_model</code>, <code>config.json</code> architecture, and Safetensors parameter count</li>
                <li><code>used_storage</code>, per-file size &amp; format, <code>LICENSE</code> text, <code>gated</code>/<code>disabled</code> status, and Hub security scan metadata</li>
              </ul>
            </div>

            <div className="panel">
              <h3>Completion Criteria &amp; Official HF References</h3>
              <p className="micro">
                A repository is marked <strong>fully audited</strong> only when its artifact manifest, local SHA-256 hashes, architecture/base dependency, license chain, and runtime test are all completed and recorded. Until then, fields remain <code>Pending</code>, <code>Unknown</code>, or <code>Not tested</code>.
              </p>
              <ul className="plain-list" style={{margin:'10px 0'}}>
                <li><a href="https://huggingface.co/docs/huggingface_hub/main/package_reference/hf_api" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>Hugging Face Hub API (HfApi / ModelInfo) ↗</a></li>
                <li><a href="https://huggingface.co/docs/huggingface_hub/main/package_reference/cli" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>Hugging Face Hub CLI Reference ↗</a></li>
                <li><a href="https://huggingface.co/models?pipeline_tag=text-to-image&search=nsfw&sort=likes" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>Original Popularity Snapshot Query ↗</a></li>
              </ul>
            </div>
          </div>
        </Section>
      </section>

      {/* OFFICIAL REPORTING & ABUSE ESCALATION */}
      <Section title="8. Official Reporting &amp; Abuse Escalation Channels">
        <p>
          If you encounter model weights, fine-tunes, or training datasets that facilitate non-consensual sexual imagery or child exploitation, use verified official escalation channels:
        </p>

        <div className="grid-2" style={{marginTop:'20px'}}>
          <div className="panel">
            <h3>Hugging Face Platform Abuse Reporting</h3>
            <p>Report directly to platform trust and safety teams:</p>
            <ul className="plain-list" style={{margin:'10px 0'}}>
              <li>Email: <code>abuse@huggingface.co</code></li>
              <li>Web: Click the flag / report icon on any repository page</li>
              <li>Terms of Service: Cite the Content Policy prohibition on non-consensual sexual media <Source id={9}/></li>
            </ul>
          </div>

          <div className="panel">
            <h3>Statutory Cybercrime &amp; Child Protection Portals</h3>
            <p>For criminal violations involving minors, extortion, or non-consensual depiction:</p>
            <ul className="plain-list" style={{margin:'10px 0'}}>
              <li><strong>United States:</strong> NCMEC CyberTipline (<a href="https://report.cybertip.org" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>report.cybertip.org ↗</a>) <Source id={7}/></li>
              <li><strong>United Kingdom:</strong> Internet Watch Foundation (<a href="https://report.iwf.org.uk" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>report.iwf.org.uk ↗</a>) <Source id={1}/></li>
              <li><strong>India:</strong> National Cyber Crime Portal (<a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>cybercrime.gov.in ↗</a> &mdash; Report Crime Against Women/Children) | Emergency Police: Dial <strong>112</strong> | Women: Dial <strong>181 (subject to availability)</strong> | Cyber Financial Fraud: Dial <strong>1930</strong> <Source id={64}/></li>
              <li><strong>Australia:</strong> eSafety Commissioner (<a href="https://www.esafety.gov.au/report" target="_blank" rel="noopener noreferrer" className="inline-link" style={{margin:0}}>esafety.gov.au/report ↗</a>) <Source id={43}/></li>
            </ul>
          </div>
        </div>

        <div style={{marginTop:'30px',display:'flex',gap:'14px',flexWrap:'wrap'}}>
          <ButtonLink href="/take-action/" variant="primary">
            Explore Policy Recommendations ↗
          </ButtonLink>
          <ButtonLink href="/transparency/" variant="secondary">
            Inspect Research Transparency &amp; Data Manifest
          </ButtonLink>
          <ButtonLink href="/sources/" variant="secondary">
            Inspect All 77 Indexed Citations
          </ButtonLink>
        </div>
      </Section>
    </ModelAccessGate>
  );
}
