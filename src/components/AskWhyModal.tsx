import React from 'react';
import { X, HelpCircle, CheckCircle2, AlertTriangle, ShieldCheck, Microscope } from 'lucide-react';
import { Language, AnalysisResult } from '../types';

interface AskWhyModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: AnalysisResult;
  language: Language;
}

export const AskWhyModal: React.FC<AskWhyModalProps> = ({
  isOpen,
  onClose,
  result,
  language
}) => {
  if (!isOpen) return null;

  const whyList = language === 'hi' ? result.whyReasoningHi : language === 'mr' ? result.whyReasoningMr : result.whyReasoningEn;
  const whatCouldChange = language === 'hi' ? result.whatCouldChangeResultHi : language === 'mr' ? result.whatCouldChangeResultMr : result.whatCouldChangeResultEn;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        maxWidth: '680px',
        width: '100%',
        padding: '30px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative'
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-card-subtle)',
            color: 'var(--text-secondary)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--primary-light)',
            color: 'var(--primary-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <HelpCircle size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
              Why Did the AI Reach This Conclusion?
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Step-by-step diagnostic reasoning and clinical justification.
            </p>
          </div>
        </div>

        {/* Step 1: Visual Symptoms Observed */}
        <div style={{
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          padding: '18px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px' }}>
            <Microscope size={18} color="var(--primary-emerald)" />
            <span>1. What the Multi-Angle Images Showed:</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            {whyList.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Spatial Multi-Image Cross Validation */}
        <div style={{
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          padding: '18px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px' }}>
            <ShieldCheck size={18} color="var(--blue-sky)" />
            <span>2. Cross-Angle Validation:</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {language === 'hi' ? result.multiImageEvidence.summaryHi : language === 'mr' ? result.multiImageEvidence.summaryMr : result.multiImageEvidence.summaryEn}
          </p>
        </div>

        {/* Step 3: What could change this result? */}
        <div style={{
          background: 'var(--amber-light)',
          borderRadius: 'var(--radius-md)',
          padding: '18px',
          border: '1px solid #fde68a',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: 'var(--amber-warm)', marginBottom: '8px' }}>
            <AlertTriangle size={18} />
            <span>3. What Could Change This Assessment?</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#78350f', lineHeight: 1.5 }}>
            {whatCouldChange}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="farmer-touch-target"
          style={{
            width: '100%',
            background: 'var(--primary-emerald)',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: 'var(--radius-md)',
            fontSize: '1rem'
          }}
        >
          Close Explanation
        </button>
      </div>
    </div>
  );
};
