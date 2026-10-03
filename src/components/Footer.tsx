import React from 'react';
import { Sprout, ShieldCheck, Heart, Award, Wifi, Lock } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '40px 0 28px 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        
        {/* Main Footer Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Col 1: Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--primary-forest)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sprout size={20} />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                {t.appName}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
              {t.appSubtitle}. Built strictly for PS-07 AI-Based Crop Disease Detection & Advisory System with zero-hallucination guardrails.
            </p>
          </div>

          {/* Col 2: Core Philosophy */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
              Product Safety Protocol
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--primary-emerald)" />
                <span>Accuracy & Transparency over Guesswork</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={16} color="var(--blue-sky)" />
                <span>Privacy-First: Zero Mandatory Account Login</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Wifi size={16} color="var(--amber-warm)" />
                <span>Offline & Low-Bandwidth Rural Mode</span>
              </div>
            </div>
          </div>

          {/* Col 3: Research Citations */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
              Verified Knowledge Repositories
            </h4>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>
              Agronomic guidelines and safe management thresholds are cross-referenced with Indian Council of Agricultural Research (ICAR), TNAU Agritech Portal, and FAO Plant Health Standards.
            </p>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 KisanDrishti AI • PS-07 Hackathon Solution. All Rights Reserved.
          </div>
          <div>
            Designed with compassion for our farmers 🌾
          </div>
        </div>

      </div>
    </footer>
  );
};
