import React from 'react';
import { 
  HelpCircle, 
  Camera, 
  UserCheck, 
  RefreshCw, 
  FileText, 
  AlertCircle, 
  Lightbulb,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Language, AnalysisResult } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface UnsureResultViewProps {
  result: AnalysisResult;
  language: Language;
  onRetakePhotos: () => void;
  onOpenExpertReport: () => void;
  onAskWhy: () => void;
}

export const UnsureResultView: React.FC<UnsureResultViewProps> = ({
  result,
  language,
  onRetakePhotos,
  onOpenExpertReport,
  onAskWhy
}) => {
  const t = TRANSLATIONS[language];

  const whatNext = language === 'hi' ? result.whatToPhotographNextHi : language === 'mr' ? result.whatToPhotographNextMr : result.whatToPhotographNextEn;
  const whatCouldChange = language === 'hi' ? result.whatCouldChangeResultHi : language === 'mr' ? result.whatCouldChangeResultMr : result.whatCouldChangeResultEn;
  const simpleSummary = language === 'hi' ? result.simpleSummaryHi : language === 'mr' ? result.simpleSummaryMr : result.simpleSummaryEn;
  const unsureReason = language === 'hi' ? result.unsureReasonHi : language === 'mr' ? result.unsureReasonMr : result.unsureReasonEn;

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px', maxWidth: '860px' }}>
      
      {/* 1. Hero Unsure Card */}
      <div className="glass-panel" style={{
        padding: '36px 28px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, var(--amber-light) 0%, var(--bg-card) 100%)',
        border: '2px solid #fde68a',
        marginBottom: '28px'
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'var(--amber-warm)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px auto',
          boxShadow: '0 8px 20px rgba(217, 119, 6, 0.3)'
        }}>
          <HelpCircle size={40} />
        </div>

        <h2 style={{
          fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '10px'
        }}>
          {t.unsureHeroTitle}
        </h2>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '640px',
          margin: '0 auto 18px auto',
          lineHeight: 1.5
        }}>
          {unsureReason || t.unsureHeroSubtitle}
        </p>

        {/* Core Product Identity Callout */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--bg-card)',
          padding: '8px 18px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.88rem',
          fontWeight: 700,
          color: 'var(--amber-warm)'
        }}>
          <ShieldAlert size={18} />
          <span>Our AI prefers being transparent over giving dangerous wrong guesses.</span>
        </div>
      </div>

      {/* 2. Specific Actionable Next Step: What to Photograph Next */}
      <div className="glass-panel" style={{
        padding: '24px',
        marginBottom: '24px',
        borderLeft: '5px solid var(--blue-sky)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--blue-light)',
            color: 'var(--blue-sky)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Camera size={20} />
          </div>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
            {t.whatToPhotographNextTitle}
          </h3>
        </div>

        <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
          {whatNext}
        </p>

        <button
          onClick={onRetakePhotos}
          className="farmer-touch-target pulse-button"
          style={{
            background: 'var(--blue-sky)',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.95rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <RefreshCw size={16} />
          <span>{t.retakeThisPhoto}</span>
        </button>
      </div>

      {/* 3. Explainability: What Could Change This Result */}
      <div className="glass-panel" style={{
        padding: '24px',
        marginBottom: '32px',
        borderLeft: '5px solid var(--primary-emerald)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
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
            <Lightbulb size={20} />
          </div>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
            {t.whatCouldChangeTitle}
          </h3>
        </div>

        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {whatCouldChange}
        </p>
      </div>

      {/* 4. Action Buttons Footer */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px'
      }}>
        <button
          onClick={onOpenExpertReport}
          className="farmer-touch-target"
          style={{
            background: 'var(--primary-forest)',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.95rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <FileText size={18} />
          <span>{t.getExpertReportBtn}</span>
        </button>

        <button
          onClick={onAskWhy}
          className="farmer-touch-target"
          style={{
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
            padding: '14px 20px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.95rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <HelpCircle size={18} color="var(--primary-emerald)" />
          <span>{t.askWhyBtn}</span>
        </button>
      </div>

    </div>
  );
};
