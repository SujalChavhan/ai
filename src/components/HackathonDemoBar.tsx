import React from 'react';
import { Award, Sparkles, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import { Language } from '../types';
import { HACKATHON_DEMO_CASES } from '../data/demoCases';
import { TRANSLATIONS } from '../data/translations';

interface HackathonDemoBarProps {
  language: Language;
  selectedCaseId: string | null;
  onSelectCase: (caseNumber: number) => void;
}

export const HackathonDemoBar: React.FC<HackathonDemoBarProps> = ({
  language,
  selectedCaseId,
  onSelectCase
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div style={{
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-main) 100%)',
      borderTop: '2px solid var(--primary-emerald)',
      padding: '24px 0',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div className="container">
        
        {/* Title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--primary-light)',
              color: 'var(--primary-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Award size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 800 }}>
                {t.demoBarTitle}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {t.demoBarSubtitle}
              </p>
            </div>
          </div>

          <div style={{
            background: 'var(--primary-light)',
            color: 'var(--primary-forest)',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700
          }}>
            PS-07 Compliance Suite
          </div>
        </div>

        {/* 8 Preset Buttons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '10px'
        }}>
          {HACKATHON_DEMO_CASES.map((demo) => {
            const isSelected = selectedCaseId === demo.id;
            const title = language === 'hi' ? demo.titleHi : language === 'mr' ? demo.titleMr : demo.titleEn;

            return (
              <button
                key={demo.id}
                onClick={() => onSelectCase(demo.caseNumber)}
                style={{
                  background: isSelected ? 'var(--primary-forest)' : 'var(--bg-card)',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--primary-leaf)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: isSelected ? 'var(--primary-leaf)' : 'var(--primary-emerald)'
                  }}>
                    {demo.tag}
                  </span>
                  {isSelected && <Check size={14} color="#ffffff" />}
                </div>

                <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                  {title}
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  color: isSelected ? '#d1fae5' : 'var(--text-muted)',
                  lineHeight: 1.3
                }}>
                  {demo.judgeNote}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
