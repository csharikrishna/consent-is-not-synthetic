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
    unit: 'confirmed videos',
    badge: 'Confirmed Content',
    description: 'Confirmed photorealistic criminal AI videos evaluated by IWF technical analysts.',
    years: [2023, 2024, 2025],
    values: [13, 52, 3443],
    growth: '+26,384% (2023 → 2025)',
    sources: [3, 5],
  },
  reports: {
    id: 'reports',
    label: 'Operational Hotline Incident Reports',
    unit: 'reports assessed',
    badge: 'Incident Volume',
    description: 'Hotline incident reports evaluated containing realistic AI-generated abuse material.',
    years: [2024, 2025],
    values: [193, 491],
    growth: '+154% YoY Surge',
    sources: [1],
  },
  media: {
    id: 'media',
    label: 'Total Assessed Criminal AI Media Items',
    unit: 'media files',
    badge: 'Media Scale',
    description: 'Total individual criminal synthetic media files assessed and actioned by analysts.',
    years: [2024, 2025],
    values: [2800, 8029],
    growth: '+187% YoY Growth',
    sources: [1],
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
          width="100%"
          height="auto"
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
    actor: 'Stability AI, Black Forest Labs, Runway',
    risk: 'Removal of Safety Filters',
    details: 'Foundation models requiring $5M–$50M+ compute are released as open-weights. Safety guardrails (NSFW latent clip filters) are stripped out in open-weight form.',
    vulnerability: 'Unrestricted model weights allow downstream developers to bypass platform-level prompts and inference filters completely.',
    statutoryFix: 'Mandatory pre-release red teaming, provenance watermarking (SynthID/C2PA), and Know-Your-Customer (KYC) developer registration.',
    sources: [11, 12, 13],
  },
  {
    step: '02',
    title: 'Open Model Repositories',
    actor: 'Hugging Face, Civitai, GitHub',
    risk: 'Unfiltered Weight Distribution',
    details: 'Model hubs host hundreds of unverified fine-tunes and LoRA adapters. 66% lack upload sensitivity filters, exposing unauthenticated visitors.',
    vulnerability: 'Lack of automated hash screening against known CSAM/NCII seed models; anonymous publisher uploads without identity verification.',
    statutoryFix: 'Statutory duty of care, proactive perceptual hash filtering, mandatory Not-For-All-Audiences gating, and 24h take-down protocols.',
    sources: [9, 10, 69],
  },
  {
    step: '03',
    title: 'Parameter-Efficient LoRAs',
    actor: 'Anonymous Community Fine-Tuners',
    risk: '<$20 Consumer Hardware Tuning',
    details: 'Community developers train Low-Rank Adaptation (LoRA) files (<700 MB) on scraped unconsented personal photos in under 30 minutes for pennies in cloud compute.',
    vulnerability: 'Democratizes targeted photorealistic exploitation: anyone can inject specific victim faces onto sexually explicit bodies without training a base model.',
    statutoryFix: 'Prohibition of purpose-built undressing adapters, criminalization of unauthorized likeness synthesis, and hosting distributor liability.',
    sources: [20, 34, 35],
  },
  {
    step: '04',
    title: 'Commercial Wrappers & Exploitation',
    actor: 'Telegram Bot Operators, Web Undressers, Bad Actors',
    risk: 'Real Victims & Severe Trauma',
    details: 'Operators wrap models in 1-click web interfaces, collecting $20.7M monthly visits. Fabricated nudes are weaponized for peer harassment, extortion, and humiliation.',
    vulnerability: 'Asymmetric distribution speed: synthetic nudes spread in minutes across encrypted apps, while manual takedowns take weeks or fail completely.',
    statutoryFix: 'Zero-tolerance criminalization of non-consensual deepfakes (TAKE IT DOWN Act / BNS 79), civil restitution, and emergency injunctions.',
    sources: [53, 54, 57, 66],
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
    name: 'Parameter-Efficient LoRAs',
    count: 491,
    pct: 68,
    size: '< 700 MB weights',
    color: '#9f2149',
    risk: 'Trained on individual victim likenesses in <30 mins',
  },
  {
    name: 'Full Foundation Checkpoints',
    count: 173,
    pct: 24,
    size: '3B – 12B parameters (6GB–28GB)',
    color: '#183849',
    risk: 'Unmoderated base weights distributed without safety tags',
  },
  {
    name: 'Diffusion Transformers (DiT / Hybrids)',
    count: 58,
    pct: 8,
    size: 'Modern DiT (Flux / Qwen)',
    color: '#b43a5e',
    risk: 'Photorealistic high-resolution video & localized inpainting',
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
      aria-label="Model Architecture Distribution Chart"
    >
      <div className="chart-header">
        <div>
          <span className="tag">Repository Audit / 722 Model Exploratory Discovery</span>
          <h4 style={{ margin: '8px 0 3px', fontSize: '18px', color: 'var(--ink)' }}>
            Architectural Distribution of Explicit Vision Checkpoints
          </h4>
          <p className="micro muted" style={{ margin: 0 }}>
            Analysis of model formats across Hugging Face discovery indices reveals extreme reliance on modular LoRAs.
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
    title: 'Training Dataset Provenance',
    compliantPct: 19,
    omittedPct: 81,
    status: 'Critical Provenance Blindspot',
    impact: 'Impossible to audit whether underlying training data was scrubbed of scraped non-consensual images or CSAM.',
  },
  {
    title: 'Explicit Licensing Terms',
    compliantPct: 38,
    omittedPct: 62,
    status: 'Legal & Liability Ambiguity',
    impact: 'Commercial operators exploit unstated licenses to sell wrapper subscriptions without developer accountability.',
  },
  {
    title: 'Model Card Safety Disclosures',
    compliantPct: 27,
    omittedPct: 73,
    status: 'Zero Misuse Guidelines',
    impact: 'Omits basic warnings regarding prohibited non-consensual generation or human rights boundaries.',
  },
  {
    title: 'Sensitivity Tagging at Upload',
    compliantPct: 34,
    omittedPct: 66,
    status: 'Exposed to Unauthenticated Users',
    impact: 'Two-thirds of explicit models omitted the Not-For-All-Audiences filter upon publication.',
  },
];

export function GovernanceGapsScorecard() {
  const [containerRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={containerRef}
      className={`chart-card ${isInView ? 'in-view' : ''}`}
      role="region"
      aria-label="Model Card Governance Deficiencies Scorecard"
    >
      <div className="chart-header">
        <div>
          <span className="tag">Empirical Hub Audit</span>
          <h4 style={{ margin: '8px 0 3px', fontSize: '18px', color: 'var(--ink)' }}>
            Model Card Deficiencies &amp; Provenance Failures
          </h4>
          <p className="micro muted" style={{ margin: 0 }}>
            Systemic non-compliance with AI safety standards across public community model repositories.
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
    target: 'Nudification software, unconsented face-swap bots, automated stripping apps',
    mandate: 'Strict statutory prohibition on creation, commercialization, hosting, or knowing supply. Absolute criminal liability.',
    penalties: 'Criminal prosecution, asset forfeiture, domain seizure, individual creator accountability.',
    precedent: 'US TAKE IT DOWN Act (Pending) / South Korea Emergency Revision 2024 / India BNS Section 79.',
  },
  {
    id: 2,
    level: 'TIER 2 (FOUNDATION WEIGHTS)',
    title: 'High-Risk Generative Model Developers',
    target: 'Upstream research labs releasing weights with photorealistic human depiction capability',
    mandate: 'Mandatory pre-release safety evaluation, cryptographically signed watermarks (C2PA/SynthID), and supply-chain KYC disclosures.',
    penalties: 'Civil regulatory fines for unverified release; joint liability for foreseeable downstream weaponization.',
    precedent: 'EU AI Act High-Risk Model Obligations / Australian Online Safety Act Model Directions.',
  },
  {
    id: 3,
    level: 'TIER 3 (BROAD HOSTING & DISTRIBUTION)',
    title: 'Hosting Repositories & Commercial Platforms',
    target: 'Hugging Face, Civitai, GitHub, cloud GPU hosts, and web hosters',
    mandate: 'Proactive perceptual hash filtering (PhotoDNA/PDQ), 24-hour victim take-down windows, default sensitivity tagging, and verified age gating.',
    penalties: 'Loss of safe-harbor immunity; statutory civil damages up to AUD 343,500+ / INR 25 Lakhs per failure.',
    precedent: 'eSafety Commissioner Enforcement (2024) / MeitY Intermediary Rules 3(1)(b) & 3(2)(b).',
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
        <div className="tiers-stack">
          {REGULATORY_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
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
