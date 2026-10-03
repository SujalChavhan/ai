import React from 'react';
import { X, CheckCircle2, XCircle, Sun, Focus, Eye } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface GoodBadGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const GoodBadGuideModal: React.FC<GoodBadGuideModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '28px',
        position: 'relative'
      }}>
        {/* Close Button */}
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

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
            {t.guideTitle}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Taking clear multi-angle photos ensures our AI provides an accurate, safe diagnosis without guessing.
          </p>
        </div>

        {/* Two Column Comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {/* Good Examples */}
          <div style={{
            background: 'var(--primary-light)',
            border: '1px solid var(--primary-sprout)',
            borderRadius: 'var(--radius-md)',
            padding: '18px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary-forest)',
              fontWeight: 700,
              fontSize: '1.05rem',
              marginBottom: '12px'
            }}>
              <CheckCircle2 size={20} color="var(--primary-emerald)" />
              <span>{t.goodPhotoTips}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Sun size={18} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{t.tipGood1}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Focus size={18} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{t.tipGood2}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Eye size={18} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{t.tipGood3}</span>
              </div>
            </div>
          </div>

          {/* Bad Examples */}
          <div style={{
            background: 'var(--red-light)',
            border: '1px solid #fca5a5',
            borderRadius: 'var(--radius-md)',
            padding: '18px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--red-crimson)',
              fontWeight: 700,
              fontSize: '1.05rem',
              marginBottom: '12px'
            }}>
              <XCircle size={20} color="var(--red-crimson)" />
              <span>{t.badPhotoTips}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--red-crimson)', fontWeight: 'bold' }}>•</span>
                <span>{t.tipBad1}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--red-crimson)', fontWeight: 'bold' }}>•</span>
                <span>{t.tipBad2}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--red-crimson)', fontWeight: 'bold' }}>•</span>
                <span>{t.tipBad3}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--red-crimson)', fontWeight: 'bold' }}>•</span>
                <span>{t.tipBad4}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="farmer-touch-target"
          style={{
            width: '100%',
            background: 'var(--primary-emerald)',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: 'var(--radius-md)',
            fontSize: '1.05rem'
          }}
        >
          {t.gotItBtn}
        </button>
      </div>
    </div>
  );
};
