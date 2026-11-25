'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';

interface ModelAccessGateProps {
  children: React.ReactNode;
}

export default function ModelAccessGate({children}: ModelAccessGateProps) {
  const [acknowledged, setAcknowledged] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = sessionStorage.getItem('cin_model_hub_acknowledged');
      if (stored === 'true') {
        setAcknowledged(true);
      }
    } catch {
      // Fallback if sessionStorage is blocked
    }
  }, []);

  const handleAcknowledge = () => {
    try {
      sessionStorage.setItem('cin_model_hub_acknowledged', 'true');
    } catch {
      // Fallback
    }
    setAcknowledged(true);
  };

  const handleReset = () => {
    try {
      sessionStorage.removeItem('cin_model_hub_acknowledged');
    } catch {
      // Fallback
    }
    setAcknowledged(false);
  };

  // Prevent flash of content during server rendering or before acknowledgment
  if (!mounted || !acknowledged) {
    return (
      <div className="section" style={{minHeight:'70vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 16px'}}>
        <div className="panel" style={{
          maxWidth:'760px',
          width:'100%',
          backgroundColor:'var(--bg)',
          border:'2px solid var(--accent)',
          borderRadius:'12px',
          boxShadow:'0 20px 40px rgba(0,0,0,0.12)',
          padding:'36px 32px'
        }}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}>
            <span style={{
              display:'inline-flex',
              alignItems:'center',
              justifyContent:'center',
              width:'40px',
              height:'40px',
              borderRadius:'50%',
              backgroundColor:'rgba(155, 34, 56, 0.12)',
              color:'var(--accent)',
              fontWeight:700,
              fontSize:'20px'
            }}>
              ⚠️
            </span>
            <div>
              <span className="tag" style={{backgroundColor:'var(--accent)',color:'#fff'}}>Content Advisory Notice</span>
              <h1 style={{margin:'4px 0 0',fontSize:'1.4rem',color:'var(--ink)',fontFamily:'var(--serif)'}}>
                Research Content Notice &amp; Safeguarding Acknowledgement
              </h1>
            </div>
          </div>

          <div style={{fontSize:'0.96rem',lineHeight:1.65,color:'var(--ink)'}}>
            <p>
              You are viewing the <strong>Model Hub Governance &amp; Repository Supply Chains</strong> technical dossier, which examines architectural distributions, parameter adaptations, and metadata completeness across public machine learning repositories.
            </p>

            <div style={{
              margin:'20px 0',
              padding:'18px 20px',
              backgroundColor:'rgba(155, 34, 56, 0.05)',
              borderLeft:'4px solid var(--accent)',
              borderRadius:'4px'
            }}>
              <h4 style={{margin:'0 0 8px',color:'var(--accent)',fontSize:'0.95rem',textTransform:'uppercase',letterSpacing:'0.05em'}}>
                Zero Exploitation &amp; Anti-Harm Protocols
              </h4>
              <ul style={{margin:0,paddingLeft:'18px',fontSize:'0.9rem',color:'var(--ink)'}}>
                <li style={{marginBottom:'6px'}}>
                  <strong>No Model Weights or Mirrors Hosted:</strong> In compliance with child sexual abuse prevention statutes (18 U.S.C. § 2252A; POCSO Act 2012) and human dignity safeguards, this platform <em>never hosts, stores, or mirrors</em> weight binaries or model checkpoints.
                </li>
                <li style={{marginBottom:'6px'}}>
                  <strong>No Operational Prompts:</strong> No generation prompts, fine-tuning scripts, or evasion workflows capable of weaponizing synthetic likenesses are disclosed.
                </li>
                <li>
                  <strong>Governance &amp; Audit Scope:</strong> Public repository metadata is documented strictly to inform regulatory oversight, licensing clarity, and platform trust &amp; safety policies.
                </li>
              </ul>
            </div>

            <p style={{fontSize:'0.9rem',color:'var(--muted)'}}>
              Note: This banner is a client-side reading acknowledgement (using browser <code>sessionStorage</code>), not server-side authentication or access control.
            </p>
          </div>

          <div style={{marginTop:'28px',display:'flex',gap:'14px',flexWrap:'wrap',alignItems:'center'}}>
            <button
              onClick={handleAcknowledge}
              className="btn btn-primary"
              style={{
                cursor:'pointer',
                padding:'12px 24px',
                fontSize:'0.98rem',
                fontWeight:600,
                backgroundColor:'var(--accent)',
                color:'#fff',
                border:'none',
                borderRadius:'6px',
                boxShadow:'0 4px 12px rgba(155, 34, 56, 0.25)'
              }}
            >
              I Acknowledge &amp; Agree &mdash; View Empirical Findings &rarr;
            </button>
            <Link
              href="/"
              className="btn btn-secondary"
              style={{
                textDecoration:'none',
                padding:'12px 20px',
                fontSize:'0.95rem',
                color:'var(--ink)',
                border:'1px solid var(--line)',
                borderRadius:'6px',
                backgroundColor:'transparent'
              }}
            >
              Decline &amp; Return to Overview
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{
        backgroundColor:'rgba(155, 34, 56, 0.08)',
        borderBottom:'1px solid rgba(155, 34, 56, 0.2)',
        padding:'8px 16px',
        fontSize:'0.82rem',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        gap:'8px'
      }}>
        <span style={{color:'var(--accent)',fontWeight:600}}>
          🛡️ Safeguarded Institutional Research View Active &mdash; Aggregate Empirical Data Only
        </span>
        <button
          onClick={handleReset}
          style={{
            background:'none',
            border:'none',
            color:'var(--muted)',
            textDecoration:'underline',
            cursor:'pointer',
            fontSize:'0.8rem',
            padding:0
          }}
        >
          Re-lock Access Gate
        </button>
      </div>
      {children}
    </>
  );
}
