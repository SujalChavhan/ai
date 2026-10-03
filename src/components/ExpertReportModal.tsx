import React from 'react';
import { X, Printer, ShieldAlert, Award, QrCode, FileText, CheckCircle2 } from 'lucide-react';
import { Language, AnalysisResult, FarmerContext } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ExpertReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: AnalysisResult;
  context: FarmerContext;
  language: Language;
}

export const ExpertReportModal: React.FC<ExpertReportModalProps> = ({
  isOpen,
  onClose,
  result,
  context,
  language
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  const handlePrint = () => {
    window.print();
  };

  const cropName = language === 'hi' ? result.crop.nameHi : language === 'mr' ? result.crop.nameMr : result.crop.nameEn;
  const conditionName = language === 'hi' ? result.conditionNameHi : language === 'mr' ? result.conditionNameMr : result.conditionNameEn;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        maxWidth: '750px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '32px',
        position: 'relative',
        background: '#ffffff',
        color: '#0f172a'
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

        {/* Printable Referral Slip Document */}
        <div id="printable-kvk-slip" style={{ border: '2px solid #0f172a', padding: '24px', borderRadius: '8px' }}>
          
          {/* Header Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #0f172a',
            paddingBottom: '16px',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#064e3b' }}>
                <Award size={24} />
                <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
                  {t.referralSlipTitle}
                </span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>
                {t.referralSubtitle} • PS-07 AI Protocol
              </div>
            </div>

            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: '#f1f5f9',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 700
              }}>
                CASE REF: #KD-{Date.now().toString().slice(-6)}
              </div>
              <QrCode size={40} color="#0f172a" />
            </div>
          </div>

          {/* Section 1: Patient Crop & Field Metadata */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            background: '#f8fafc',
            padding: '14px',
            borderRadius: '6px',
            border: '1px solid #e2e8f0',
            marginBottom: '18px',
            fontSize: '0.85rem'
          }}>
            <div>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Target Crop: </span>
              <strong>{cropName} ({result.crop.scientificName})</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Location Region: </span>
              <strong>{context.region}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Noticed Onset: </span>
              <strong>{context.noticedWhen}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Recent Humidity: </span>
              <strong>{context.recentRain ? 'High / Rain' : 'Normal / Dry'}</strong>
            </div>
          </div>

          {/* Section 2: AI Observation & Suspected Pathology */}
          <div style={{ marginBottom: '18px' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: '#064e3b', marginBottom: '8px' }}>
              Preliminary AI Observation & Diagnostics
            </h4>
            <div style={{
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '6px',
              padding: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#064e3b' }}>
                  {conditionName}
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '12px',
                  background: result.confidence === 'high' ? '#10b981' : '#f59e0b',
                  color: '#ffffff'
                }}>
                  Confidence: {result.confidence.toUpperCase()}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#1f2937', lineHeight: 1.4 }}>
                <strong>Observed Pathology:</strong> {result.aiObservationEn}
              </p>
            </div>
          </div>

          {/* Section 3: Key Uncertainty Factors (PS-07 Compliance) */}
          <div style={{ marginBottom: '18px' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: '#92400e', marginBottom: '8px' }}>
              Key Uncertainty & Escalation Triggers
            </h4>
            <div style={{
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '6px',
              padding: '12px',
              fontSize: '0.82rem',
              color: '#78350f'
            }}>
              <div>• <strong>What Could Alter Diagnosis:</strong> {result.whatCouldChangeResultEn}</div>
              <div style={{ marginTop: '4px' }}>• <strong>Multi-Angle Evidence:</strong> {result.multiImageEvidence.summaryEn}</div>
            </div>
          </div>

          {/* Section 4: Verified ICAR Source Citation */}
          <div style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '12px',
            fontSize: '0.78rem',
            color: '#64748b',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>Verified Reference:</strong> {result.sources[0]?.sourceName || 'ICAR Agricultural Advisory'}
            </div>
            <div>
              Generated via KisanDrishti AI Extension System
            </div>
          </div>

        </div>

        {/* Modal Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
          <button
            onClick={handlePrint}
            className="farmer-touch-target pulse-button"
            style={{
              flex: 1,
              background: '#064e3b',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Printer size={18} />
            <span>{t.printSlipBtn}</span>
          </button>

          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-card-subtle)',
              color: 'var(--text-secondary)',
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.95rem'
            }}
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
