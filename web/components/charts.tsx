'use client';

import React, { useState, useEffect, useRef, useId } from 'react';
import Link from 'next/link';

// --- UTILITY HOOK: INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
function useInView(options = { threshold: 0.15 }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView] as const;
}

// =========================================================================
// 1. IWF SURGE TREND CHART (Animated Multi-Year Operational Bar & Trend Chart)
// =========================================================================
interface IwfMetricSeries {
  id: string;
  label: string;
  unit: string;
  badge: string;
  description: string;
  years: number[];
  values: number[];
  growth: string;
  sources: number[];
}

const IWF_SERIES: Record<string, IwfMetricSeries> = {
  videos: {
    id: 'videos',
    label: 'Photorealistic Criminal AI Videos',
    unit: 'assessed videos',
    badge: 'Detailed 2025 Report',
    description: 'Assessed photorealistic criminal AI-generated videos evaluated by IWF analysts (not unique victims).',
    years: [2024, 2025],
    values: [13, 3443],
    growth: '~264.85x (13 in 2024 to 3,443 in 2025; earlier announcement reported 3,440)',
    sources: [3, 5],
  },
  reports: {
    id: 'reports',
    label: 'Operational Hotline Incident Reports',
    unit: 'reports assessed',
    badge: 'Incident Volume',
    description: 'Hotline incident reports evaluated containing realistic AI-generated CSAM (reports are not unique victims).',
    years: [2024, 2025],
    values: [193, 491],
    growth: '+154.4% (193 in 2024 to 491 in 2025)',
    sources: [1],
  },
  media: {
    id: 'media',
    label: '2025 Assessed AI CSAM Media Breakdown',
    unit: 'assessed items (2025)',
    badge: 'Media Scale',
    description: '2025 combined assessed items: 4,586 still images + 3,443 videos = 8,029 (+14% on prior year comparable total).',
    years: [2025],
    values: [8029],
    growth: '8,029 combined items in 2025 (+14% on previous year)',
    sources: [1, 2],
  },
};

export function IwfSurgeTrendChart() {
  const [activeKey, setActiveKey] = useState<string>('videos');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [containerRef, isInView] = useInView({ threshold: 0.2 });

  const series = IWF_SERIES[activeKey];
  const maxVal = Math.max(...series.values);
  const chartHeight = 220;
  const chartWidth = 560;
  const barWidth = 68;

  return (
    <div
      ref={containerRef}
      className={`chart-card ${isInView ? 'in-view' : ''}`}
      role="region"
      aria-label={`Interactive Chart: ${series.label}`}
    >
      <div className="chart-header">
        <div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="tag">Empirical Trend</span>
            <span className="tag" style={{ background: '#f5dbe3', color: 'var(--accent)' }}>{series.badge}</span>
          </div>
          <h4 style={{ margin: '8px 0 3px', fontSize: '18px', color: 'var(--ink)' }}>{series.label}</h4>
          <p className="micro muted" style={{ margin: 0, maxWidth: '440px' }}>{series.description}</p>
        </div>

        <div className="chart-tabs" role="tablist" aria-label="Metric views">
          {Object.keys(IWF_SERIES).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              className={`chart-tab-btn ${activeKey === k ? 'active' : ''}`}
              onClick={() => { setActiveKey(k); setHoverIndex(null); }}
              aria-selected={activeKey === k}
            >
              {k === 'videos' ? 'Videos' : k === 'reports' ? 'Reports' : 'Media Files'}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-canvas-wrap" style={{ marginTop: '22px', position: 'relative' }}>
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight + 48}`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          role="img"
          aria-label={`${series.label} bar graph`}
          className="chart-svg"
        >
          {/* Subtle grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
            const y = chartHeight - pct * (chartHeight - 34);
            return (
              <g key={i}>
                <line x1="48" y1={y} x2={chartWidth - 16} y2={y} stroke="#f0e2e7" strokeDasharray="3 3" />
                <text x="40" y={y + 4} fill="#8e8088" fontSize="10.5" textAnchor="end" fontFamily="monospace">
                  {Math.round(pct * maxVal).toLocaleString()}
                </text>
              </g>
            );
          })}

          {/* SVG Bars with CSS height transition */}
          {series.years.map((year, idx) => {
            const val = series.values[idx];
            const targetBarH = (val / maxVal) * (chartHeight - 44);
            const currentBarH = isInView ? targetBarH : 0;
            const x = 110 + idx * (series.years.length === 2 ? 200 : 150);
            const y = chartHeight - currentBarH;
            const isHovered = hoverIndex === idx;

            return (
              <g
                key={year}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{ cursor: 'pointer' }}
                tabIndex={0}
                onFocus={() => setHoverIndex(idx)}
                onBlur={() => setHoverIndex(null)}
                aria-label={`${year}: ${val.toLocaleString()} ${series.unit}`}
              >
                {/* Background column highlight on hover */}
                {isHovered && (
                  <rect
                    x={x - 14}
                    y={10}
                    width={barWidth + 28}
                    height={chartHeight + 25}
                    rx="6"
                    fill="rgba(159, 33, 73, 0.04)"
                  />
                )}

                {/* Main animated bar */}
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={currentBarH}
                  rx="6"
                  fill={isHovered ? 'var(--ink)' : 'url(#barGradient)'}
                  style={{
                    transition: `height 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.14}s, y 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.14}s, fill 0.2s ease`,
                  }}
                />

                {/* Animated value text on top */}
                {isInView && (
                  <text
                    x={x + barWidth / 2}
                    y={y - 8}
                    textAnchor="middle"
                    fill={isHovered ? 'var(--ink)' : 'var(--accent)'}
                    fontWeight="800"
                    fontSize="13.5"
                    fontFamily="var(--serif)"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transition: `opacity 0.5s ease ${0.4 + idx * 0.15}s`,
                    }}
                  >
                    {val.toLocaleString()}
                  </text>
                )}

                {/* X Axis year badge */}
                <text
                  x={x + barWidth / 2}
                  y={chartHeight + 24}
                  textAnchor="middle"
                  fill="#4e3f49"
                  fontWeight="700"
                  fontSize="12.5"
                >
                  {year}
                </text>
              </g>
            );
          })}

          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b43a5e" />
              <stop offset="100%" stopColor="#9f2149" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic floating tooltip */}
        {hoverIndex !== null && (
          <div className="chart-tooltip-floating" style={{ left: `${25 + hoverIndex * 33}%` }}>
            <div className="tooltip-title">{series.years[hoverIndex]} Assessment</div>
            <div className="tooltip-val">{series.values[hoverIndex].toLocaleString()} {series.unit}</div>
            {hoverIndex > 0 && (
              <div className="tooltip-sub">
                +{Math.round(((series.values[hoverIndex] - series.values[hoverIndex - 1]) / series.values[hoverIndex - 1]) * 100)}% increase over previous reporting period
              </div>
            )}
          </div>
        )}
      </div>

      <div className="chart-footer">
        <div className="micro muted">
          <strong>Key Finding:</strong> {series.growth}. Primary source: Internet Watch Foundation Annual Data &amp; Insights Reports.
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {series.sources.map((s) => (
            <span key={s} className="tag" style={{ margin: 0 }}>Source [{s}]</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 2. SUPPLY-CHAIN PIPELINE INFOGRAPHIC (Interactive 4-Stage Flowchart)
// =========================================================================
interface PipelineStage {
  step: string;
  title: string;
  actor: string;
  risk: string;
  details: string;
  vulnerability: string;
  statutoryFix: string;
  sources: number[];
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    step: '01',
    title: 'Upstream Foundation Labs',
    actor: 'Foundation model developers & labs',
    risk: 'Downstream Weight Permanence',
    details: 'Documented fact: high-capacity base architectures (e.g., SDXL, FLUX, Qwen-Image) are released as downloadable weights. Policy hypothesis: once weights are distributed publicly, upstream providers cannot remotely enforce runtime prompt filters.',
    vulnerability: 'Downstream users can run or modify open weights offline without server-side API moderation.',
    statutoryFix: 'Proportionate pre-release safety evaluations, documented provenance disclosures, and release holds where critical unmitigated risks exist.',
    sources: [11, 12, 13],
  },
  {
    step: '02',
    title: 'Open Model Repositories',
    actor: 'Model-hosting platforms & hubs',
    risk: 'Metadata & Moderation Gaps',
    details: 'Documented fact: in a 50-listing Hugging Face snapshot (25 Nov 2026), 13/50 listings displayed no license or Unknown, and 12/50 displayed OpenRail terms. Australian eSafety engagement led Hugging Face to update its misuse rules.',
    vulnerability: 'Honor-system license tags do not prevent downstream misuse; preliminary 53-record inventory showed collection gaps in safety and provenance fields.',
    statutoryFix: 'Enforceable repository terms, publisher verification, abuse-reporting intake, and cooperation with child-protection institutions.',
    sources: [9, 10, 69, 70],
  },
  {
    step: '03',
    title: 'Parameter-Efficient Adapters',
    actor: 'Third-party adapter publishers',
    risk: 'Lowered Fine-Tuning Barriers',
    details: 'Documented fact: Low-Rank Adaptation (LoRA) and DreamBooth enable subject-specific adaptation with significantly fewer trainable parameters than base pretraining. 20 of 50 listings in the HF snapshot were LoRA adapters.',
    vulnerability: 'Compact adapters can be layered onto general-purpose backbones to specialize outputs without retraining a base model.',
    statutoryFix: 'Targeted prohibition of purpose-built exploitation adapters and enforceable hosting-hub removal duties.',
    sources: [16, 17, 18],
  },
  {
    step: '04',
    title: 'Commercial Wrappers & Distribution',
    actor: 'Commercial undressing sites & bot operators',
    risk: 'Real Victims & Severe Harm',
    details: 'Documented fact: ISD estimated 20.7 million monthly website visits across 31 selected abuse-enabling services in May 2025 (visits are not unique users, victims, or revenue).',
    vulnerability: 'Hosted wrappers and messaging bots scale access to non-technical users faster than manual takedowns.',
    statutoryFix: 'Platform 24–48h takedown obligations (TAKE IT DOWN Act / eSafety / IT Rules), criminal prosecution of creators, and survivor support.',
    sources: [53, 57, 66],
  },
];

export function SupplyChainPipelineDiagram() {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const [containerRef, isInView] = useInView({ threshold: 0.15 });

  const active = PIPELINE_STAGES[selectedStage];

  return (
    <div
      ref={containerRef}
      className={`pipeline-card ${isInView ? 'in-view' : ''}`}
      role="region"
      aria-label="Interactive Supply-Chain Pipeline Infographic"
    >
      <div className="pipeline-header">
        <div>
          <span className="tag">Interactive Technical Pipeline</span>
          <h3 style={{ margin: '8px 0 4px', fontSize: '20px' }}>
            The 4-Stage Weaponization Architecture
          </h3>
          <p className="micro muted" style={{ margin: 0 }}>
            Click any stage in the flow to inspect where safety fails and where regulatory oversight must intervene.
          </p>
        </div>
      </div>

      {/* STAGE SELECTOR TABS / NODES */}
      <div className="pipeline-grid" role="tablist">
        {PIPELINE_STAGES.map((s, idx) => {
          const isSelected = selectedStage === idx;
          return (
            <button
              key={s.step}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`pipeline-node ${isSelected ? 'active' : ''}`}
              onClick={() => setSelectedStage(idx)}
              style={{
                animationDelay: `${idx * 0.12}s`,
              }}
            >
              <div className="node-top">
                <span className="node-step">{s.step}</span>
                <span className="node-indicator" />
              </div>
              <h5 className="node-title">{s.title}</h5>
              <p className="node-risk">{s.risk}</p>
            </button>
          );
        })}
      </div>

      {/* ACTIVE STAGE DEEP-DIVE INSPECTION DRAWER */}
      <div className="pipeline-drawer">
        <div className="drawer-header">
          <div>
            <span className="tag" style={{ background: '#fcebf0', color: 'var(--accent)' }}>
              STAGE {active.step} INSPECTION
            </span>
            <h4 style={{ margin: '8px 0 2px', fontSize: '18px' }}>{active.title}</h4>
            <p className="micro muted" style={{ margin: 0 }}>Key Actors: {active.actor}</p>
          </div>
          <div className="drawer-sources">
            {active.sources.map((src) => (
              <span key={src} className="tag" style={{ margin: 0 }}>Source [{src}]</span>
            ))}
          </div>
        </div>

        <p style={{ marginTop: '14px', fontSize: '14.5px', lineHeight: 1.65, color: '#332930' }}>
          {active.details}
        </p>

        <div className="drawer-columns">
          <div className="drawer-col danger-col">
            <div className="col-label">
              <span className="danger-icon">⚠</span> Structural Safety Failure
            </div>
            <p className="micro" style={{ margin: '6px 0 0', lineHeight: 1.6, color: '#682d3e' }}>
              {active.vulnerability}
            </p>
          </div>

          <div className="drawer-col fix-col">
            <div className="col-label">
              <span className="fix-icon">✓</span> Required Regulatory Intervention
            </div>
            <p className="micro" style={{ margin: '6px 0 0', lineHeight: 1.6, color: '#2b5042' }}>
              {active.statutoryFix}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 3. DEMOGRAPHIC PREVALENCE & DISPARITY CHART (Interactive Multi-Study dot/bar)
// =========================================================================
interface DemographicStudy {
  id: string;
  name: string;
  sample: string;
  cohort: string;
  rate: number;
  femaleRate?: number;
  maleRate?: number;
  sourceId: number;
  note: string;
}

const DEMOGRAPHIC_STUDIES: DemographicStudy[] = [
  {
    id: 'unicef',
    name: 'UNICEF 11-Country Youth Survey',
    sample: '11 Countries (Weighted Sample)',
    cohort: 'Ages 12–17 (~1.2 Million Children)',
    rate: 12.0,
    femaleRate: 41.0,
    maleRate: 29.0,
    sourceId: 53,
    note: 'Estimated youth experiencing sexual deepfake abuse in a single year across surveyed countries.',
  },
  {
    id: 'thorn',
    name: 'Thorn US National Teen Study',
    sample: 'United States (Nationwide Survey)',
    cohort: 'Young People Ages 13–20',
    rate: 6.0,
    femaleRate: 78.0,
    maleRate: 22.0,
    sourceId: 56,
    note: 'Self-reporting being direct target of non-consensual deepfake nude creation.',
  },
  {
    id: 'esafety',
    name: 'Australian eSafety Commissioner Survey',
    sample: 'Australia (Nationally Representative)',
    cohort: 'Children Ages 10–17',
    rate: 3.0,
    femaleRate: 65.0,
    maleRate: 35.0,
    sourceId: 68,
    note: 'Lifetime prevalence having fabricated nude images created without permission; 1.0% in past year.',
  },
  {
    id: 'umbach',
    name: 'Umbach et al. Cross-National Adult Study',
    sample: '10 Countries (N=16,145 Adults)',
    cohort: 'Adult Population Ages 18+',
    rate: 2.2,
    femaleRate: 72.0,
    maleRate: 28.0,
    sourceId: 65,
    note: 'Peer-reviewed academic study (CHI 2024); 2.2% personal victimization, 1.8% self-reported perpetration.',
  },
];

export function DemographicPrevalenceChart() {
  const [viewGenderSplit, setViewGenderSplit] = useState(false);
  const [containerRef, isInView] = useInView({ threshold: 0.15 });

  const maxVal = 14.0;

  return (
    <div
      ref={containerRef}
      className={`chart-card ${isInView ? 'in-view' : ''}`}
      role="region"
      aria-label="Cross-Study Demographic Victimization Chart"
    >
      <div className="chart-header">
        <div>
          <span className="tag">Population Data / Cross-Study Synthesis</span>
          <h4 style={{ margin: '8px 0 3px', fontSize: '18px', color: 'var(--ink)' }}>
            Reported Synthetic Abuse Victimization Rates
          </h4>
          <p className="micro muted" style={{ margin: 0 }}>
            Comparison of peer-reviewed and statutory surveys documenting prevalence across independent populations.
          </p>
        </div>

        <button
          type="button"
          className={`chart-tab-btn ${viewGenderSplit ? 'active' : ''}`}
          onClick={() => setViewGenderSplit(!viewGenderSplit)}
          aria-pressed={viewGenderSplit}
        >
          {viewGenderSplit ? 'Show Overall Rate' : 'Show Gender Disparity'}
        </button>
      </div>

      <div className="demographics-list" style={{ marginTop: '22px' }}>
        {DEMOGRAPHIC_STUDIES.map((study, idx) => {
          const widthPct = isInView ? (study.rate / maxVal) * 100 : 0;

          return (
            <div key={study.id} className="demo-item">
              <div className="demo-meta">
                <div>
                  <strong>{study.name}</strong>
                  <span className="micro muted" style={{ display: 'block' }}>{study.cohort} · {study.sample}</span>
                </div>
                <div className="demo-val">
                  <span className="val-num">{study.rate}%</span>
                  <span className="tag" style={{ marginLeft: '6px' }}>Source [{study.sourceId}]</span>
                </div>
              </div>

              {!viewGenderSplit ? (
                /* Overall Prevalence Bar */
                <div className="demo-bar-track">
                  <div
                    className="demo-bar-fill"
                    style={{
                      width: `${widthPct}%`,
                      transition: `width 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12}s`,
                    }}
                  />
                </div>
              ) : (
                /* Gender Disparity Breakdown */
                <div style={{ marginTop: '8px' }}>
                  <div className="gender-bar-split">
                    <div
                      className="gender-female-fill"
                      style={{
                        width: `${study.femaleRate}%`,
                        transition: `width 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
                      }}
                    >
                      Female: {study.femaleRate}%
                    </div>
                    <div
                      className="gender-male-fill"
                      style={{
                        width: `${study.maleRate}%`,
                        transition: `width 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
                      }}
                    >
                      Male: {study.maleRate}%
                    </div>
                  </div>
                </div>
              )}

              <p className="micro muted" style={{ margin: '6px 0 0' }}>{study.note}</p>
            </div>
          );
        })}
      </div>

      <div className="chart-footer">
        <span className="micro muted">
          Methodological Note: These surveys reflect different sampling methodologies and age brackets; rates must not be pooled into a single additive aggregate.
        </span>
      </div>
    </div>
  );
}

// =========================================================================
// 4. MODEL REPOSITORY ARCHITECTURE CHART (Interactive Donut & Distribution)
// =========================================================================
interface ArchFormat {
  name: string;
  count: number;
  pct: number;
  size: string;
  color: string;
  risk: string;
}

const ARCH_FORMATS: ArchFormat[] = [
  {
    name: 'Checkpoints / Full Models',
    count: 23,
    pct: 46,
    size: '23 of 50 reviewed listings',
    color: '#183849',
    risk: 'Standalone or merged checkpoints distributed with varying license and documentation completeness',
  },
  {
    name: 'Parameter-Efficient LoRAs',
    count: 20,
    pct: 40,
    size: '20 of 50 reviewed listings',
    color: '#9D2048',
    risk: 'Modular adapters layered onto foundation backbones (e.g., SDXL, FLUX, Qwen-Image)',
  },
  {
    name: 'GGUF / Quantized, Detection & Other',
    count: 7,
    pct: 14,
    size: '2 GGUF + 2 Detection + 3 Unclear',
    color: '#C45C7A',
    risk: 'Includes quantized adapters, task-tagging noise (detection classifiers), and unclear formats',
  },
];

export function ModelArchitectureChart() {
  const [activeFormat, setActiveFormat] = useState<number>(0);
  const [containerRef, isInView] = useInView({ threshold: 0.15 });

  const active = ARCH_FORMATS[activeFormat];

  return (
    <div
      ref={containerRef}
      className={`chart-card ${isInView ? 'in-view' : ''}`}
      role="region"
      aria-label="50-Listing Snapshot Composition Chart"
    >
      <div className="chart-header">
        <div>
          <span className="tag">50-Listing Metadata Snapshot (25 Nov 2026)</span>
          <h4 style={{ margin: '8px 0 3px', fontSize: '18px', color: 'var(--ink)' }}>
            Artifact Composition Across 50 Reviewed Search Listings
          </h4>
          <p className="micro muted" style={{ margin: 0 }}>
            Breakdown of <code>pipeline_tag=text-to-image</code>, <code>search=nsfw</code> listings (not a census of all models).
          </p>
        </div>
      </div>

      {/* COMPOSITE MULTI-SEGMENT PROGRESS BAR */}
      <div style={{ marginTop: '20px' }}>
        <div className="segmented-bar-track">
          {ARCH_FORMATS.map((f, i) => {
            const width = isInView ? `${f.pct}%` : '0%';
            return (
              <div
                key={f.name}
                className="segmented-bar-segment"
                style={{
                  width,
                  backgroundColor: f.color,
                  transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`,
                }}
                onClick={() => setActiveFormat(i)}
                title={`${f.name}: ${f.pct}% (${f.count} models)`}
              />
            );
          })}
        </div>

        {/* INTERACTIVE LEGEND BUTTONS */}
        <div className="arch-legend" style={{ marginTop: '16px' }}>
          {ARCH_FORMATS.map((f, i) => (
            <button
              key={f.name}
              type="button"
              className={`arch-btn ${activeFormat === i ? 'active' : ''}`}
              onClick={() => setActiveFormat(i)}
            >
              <span className="arch-dot" style={{ backgroundColor: f.color }} />
              <span className="arch-name">{f.name}</span>
              <strong className="arch-pct">{f.pct}%</strong>
            </button>
          ))}
        </div>
      </div>

      {/* SELECTED FORMAT DETAILS CARD */}
      <div className="arch-detail-card" style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h5 style={{ margin: 0, fontSize: '15.5px', color: 'var(--ink)' }}>{active.name}</h5>
            <span className="micro muted">{active.size} · {active.count} cataloged models</span>
          </div>
          <span className="stat-number" style={{ fontSize: '26px', color: active.color }}>
            {active.pct}%
          </span>
        </div>
        <p className="micro" style={{ margin: '8px 0 0', color: '#56424b', lineHeight: 1.55 }}>
          <strong>Supply-Chain Implication:</strong> {active.risk}. Downstream perpetrators do not need multi-million dollar supercomputers; they exploit lightweight adapters layered on top of open lab weights.
        </p>
      </div>
    </div>
  );
}

// =========================================================================
// 5. GOVERNANCE GAPS SCORECARD (Interactive Compliance Deficiencies)
// =========================================================================
interface GovernanceMetric {
  title: string;
  compliantPct: number;
  omittedPct: number;
  status: string;
  impact: string;
}

const GOVERNANCE_METRICS: GovernanceMetric[] = [
  {
    title: 'Core Identity & Repository URLs (53 / 53)',
    compliantPct: 100,
    omittedPct: 0,
    status: 'Captured in Desk Workbook',
    impact: 'ID, family, repository name, publisher, artifact type, and access dates were recorded for all 53 entries.',
  },
  {
    title: 'Reported Parameter Count (31 / 53)',
    compliantPct: 58.5,
    omittedPct: 41.5,
    status: 'Partially Collected',
    impact: '31 of 53 records included reported parameter counts; 22 were blank or placeholder in the initial workbook.',
  },
  {
    title: 'Notes Field (7 / 53)',
    compliantPct: 13.2,
    omittedPct: 86.8,
    status: 'Partially Collected',
    impact: '7 of 53 records contained researcher notes in the initial desk inventory.',
  },
  {
    title: 'Safety Eval, Exact License & Weight Size (0 / 53 collected)',
    compliantPct: 0,
    omittedPct: 100,
    status: 'Investigation Collection Gap',
    impact: 'Describes the completeness of this preliminary investigation; requires publisher-level verification and does not establish absence of documentation or unsafe behaviour.',
  },
];

export function GovernanceGapsScorecard() {
  const [containerRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={containerRef}
      className={`chart-card ${isInView ? 'in-view' : ''}`}
      role="region"
      aria-label="Preliminary 53-Record Inventory Completeness Scorecard"
    >
      <div className="chart-header">
        <div>
          <span className="tag">Preliminary 53-Record Desk Inventory</span>
          <h4 style={{ margin: '8px 0 3px', fontSize: '18px', color: 'var(--ink)' }}>
            Investigation Metadata Completeness (N=53)
          </h4>
          <p className="micro muted" style={{ margin: 0 }}>
            Measures field coverage in the preliminary desk workbook (<code>model-metadata-completeness.csv</code>), not publisher misconduct.
          </p>
        </div>
      </div>

      <div className="gaps-list" style={{ marginTop: '20px' }}>
        {GOVERNANCE_METRICS.map((m, idx) => {
          const fillWidth = isInView ? m.omittedPct : 0;
          return (
            <div key={m.title} className="gap-item">
              <div className="gap-meta">
                <div>
                  <strong>{m.title}</strong>
                  <span className="tag" style={{ marginLeft: '8px', background: '#fcebf0', color: 'var(--accent)' }}>
                    {m.status}
                  </span>
                </div>
                <div className="gap-pct">
                  <span className="danger-num">{m.omittedPct}% Omitted</span>{' '}
                  <span className="micro muted">({m.compliantPct}% Compliant)</span>
                </div>
              </div>

              {/* Progress bar showing omission rate in red */}
              <div className="gap-bar-track">
                <div
                  className="gap-bar-fill"
                  style={{
                    width: `${fillWidth}%`,
                    transition: `width 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12}s`,
                  }}
                />
              </div>

              <p className="micro muted" style={{ margin: '6px 0 0' }}>{m.impact}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// =========================================================================
// 6. THREE-TIER REGULATORY PYRAMID (Interactive Accountability Infographic)
// =========================================================================
interface RegulatoryTier {
  id: number;
  level: string;
  title: string;
  target: string;
  mandate: string;
  penalties: string;
  precedent: string;
}

const REGULATORY_TIERS: RegulatoryTier[] = [
  {
    id: 1,
    level: 'TIER 1 (NARROW / ZERO-TOLERANCE)',
    title: 'Purpose-Built Abuse Generators',
    target: 'Tools and fine-tunes knowingly supplied or marketed for non-consensual sexual depiction or CSAM',
    mandate: 'Targeted statutory prohibition on creation, commercialization, or knowing supply—without banning general-purpose open-source AI.',
    penalties: 'Criminal liability under applicable statutes (e.g., UK Crime and Policing Act 2026 ss. 99–101 in force 29 June 2026; South Korea Art. 14-2).',
    precedent: 'UK Crime & Policing Act 2026 (ss. 99–101) / South Korea Sexual Crimes Act Art. 14-2 / EU Reg. 2026/1744 (applicable 2 Dec 2026).',
  },
  {
    id: 2,
    level: 'TIER 2 (FOUNDATION WEIGHTS)',
    title: 'High-Risk Generative Model Developers',
    target: 'Upstream developers releasing high-capability photorealistic human-generation weights',
    mandate: 'Proportionate pre-release safety evaluations, provenance documentation, and release holds where critical unmitigated risks remain.',
    penalties: 'Administrative regulatory enforcement where statutory obligations apply (e.g., EU AI Act / Reg. 2026/1744; subject to statutory scope).',
    precedent: 'EU AI Act Art. 50 & Reg. (EU) 2026/1744 / Australian Online Safety Act regulatory notices.',
  },
  {
    id: 3,
    level: 'TIER 3 (BROAD HOSTING & DISTRIBUTION)',
    title: 'Hosting Repositories & Covered Platforms',
    target: 'Model repositories, interactive computer services, and social media platforms',
    mandate: 'Time-bound victim removal duties, hash-matching for known copies (StopNCII / Take It Down), and accessible abuse reporting.',
    penalties: 'FTC civil penalties up to $53,088 per violation (US TAKE IT DOWN Act, enforced 19 May 2026); Federal Court civil penalty (AUD 343,500 in 2025 AU case); India IT Rules safe-harbor loss.',
    precedent: 'US TAKE IT DOWN Act (48h covered-platform removal) / Australia eSafety / India IT Rules 2021 & 2026 amendments.',
  },
];

export function RegulatoryTiersPyramid() {
  const [selectedTier, setSelectedTier] = useState<number>(1);
  const active = REGULATORY_TIERS.find((t) => t.id === selectedTier) || REGULATORY_TIERS[0];

  return (
    <div className="pyramid-card" role="region" aria-label="Three-Tier Regulatory Framework Infographic">
      <div className="pyramid-header">
        <span className="tag">Policy Architecture</span>
        <h3 style={{ margin: '8px 0 4px', fontSize: '20px' }}>
          The Three-Tier Enforceable Regulatory Framework
        </h3>
        <p className="micro muted" style={{ margin: 0 }}>
          Proportionate statutory intervention across the full generative AI supply chain. Click each tier to inspect mandatory duties.
        </p>
      </div>

      <div className="pyramid-interactive-wrap" style={{ marginTop: '22px' }}>
        {/* Tier Blocks (Stack from Tier 1 at top to Tier 3 at bottom) */}
        <div className="tiers-stack" role="tablist" aria-label="Regulatory tiers">
          {REGULATORY_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                role="tab"
                className={`tier-block tier-${tier.id} ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedTier(tier.id)}
                aria-selected={isSelected}
              >
                <div className="tier-badge">{tier.level}</div>
                <div className="tier-title">{tier.title}</div>
                <div className="tier-target">{tier.target}</div>
              </button>
            );
          })}
        </div>

        {/* Active Tier Drawer */}
        <div className="tier-drawer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="tag" style={{ background: '#fcebf0', color: 'var(--accent)' }}>
              TIER {active.id} STATUTORY REQUIREMENTS
            </span>
            <span className="micro muted">Precedent: {active.precedent}</span>
          </div>

          <h4 style={{ margin: '10px 0 4px', fontSize: '18px' }}>{active.title}</h4>
          <p className="micro muted" style={{ margin: '0 0 14px' }}>Target Scope: {active.target}</p>

          <div className="tier-details-grid">
            <div className="tier-detail-box">
              <strong style={{ color: 'var(--accent)', fontSize: '12.5px', textTransform: 'uppercase' }}>
                Core Statutory Mandate
              </strong>
              <p style={{ margin: '6px 0 0', fontSize: '13.5px', lineHeight: 1.6, color: '#332930' }}>
                {active.mandate}
              </p>
            </div>

            <div className="tier-detail-box">
              <strong style={{ color: 'var(--ink)', fontSize: '12.5px', textTransform: 'uppercase' }}>
                Enforceable Penalties &amp; Remedies
              </strong>
              <p style={{ margin: '6px 0 0', fontSize: '13.5px', lineHeight: 1.6, color: '#332930' }}>
                {active.penalties}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
