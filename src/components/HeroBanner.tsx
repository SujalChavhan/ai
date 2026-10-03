import React from 'react';
import { 
  Camera, 
  ShieldCheck, 
  BookOpenCheck, 
  Microscope, 
  Clock, 
  SunMedium, 
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroBannerProps {
  language: Language;
  onStartCropCheck: () => void;
  onOpenTimeline: () => void;
  onOpenExpertHelp: () => void;
  onOpenFieldScan: () => void;
  onSelectDemoCase: (caseNumber: number) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  language,
  onStartCropCheck,
  onOpenTimeline,
  onOpenExpertHelp,
  onOpenFieldScan,
  onSelectDemoCase
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section style={{
      position: 'relative',
      padding: '48px 0 36px 0',
      background: 'linear-gradient(180deg, var(--primary-light) 0%, var(--bg-main) 100%)',
      borderBottom: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }}>
      {/* Subtle organic background decoration */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        right: '-80px',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Badge: Accuracy & PS-07 Standard */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-card)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '20px'
          }}>
            <ShieldCheck size={16} color="var(--primary-emerald)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {t.coreMotto} • PS-07 Certified
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            {t.heroHeading}
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '32px',
            maxWidth: '720px',
            margin: '0 auto 32px auto'
          }}>
            {t.heroSubheading}
          </p>

          {/* Main Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}>
            {/* Primary Big CTA */}
            <button
              onClick={onStartCropCheck}
              className="farmer-touch-target pulse-button"
              style={{
                background: 'linear-gradient(135deg, var(--primary-forest), var(--primary-emerald))',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: 'var(--radius-full)',
                fontSize: '1.2rem',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(5, 150, 105, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Camera size={26} />
              <span>{t.checkMyCropBtn}</span>
              <ArrowRight size={20} />
            </button>

            {/* Field Scan CTA */}
            <button
              onClick={onOpenFieldScan}
              className="farmer-touch-target"
              style={{
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                padding: '14px 22px',
                borderRadius: 'var(--radius-full)',
                fontSize: '1rem',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Microscope size={20} color="var(--primary-emerald)" />
              <span>{t.fieldScanBtn}</span>
            </button>
          </div>

          {/* Secondary Quick Access Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            fontSize: '0.92rem',
            color: 'var(--text-secondary)'
          }}>
            <button 
              onClick={onOpenTimeline}
              style={{
                background: 'transparent',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <Clock size={16} color="var(--primary-emerald)" />
              <span>{t.myPreviousChecksBtn}</span>
            </button>

            <span style={{ color: 'var(--border-subtle)' }}>•</span>

            <button 
              onClick={() => onSelectDemoCase(2)}
              style={{
                background: 'transparent',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <SunMedium size={16} color="var(--amber-warm)" />
              <span>{t.todaysCropAdviceBtn}</span>
            </button>

            <span style={{ color: 'var(--border-subtle)' }}>•</span>

            <button 
              onClick={onOpenExpertHelp}
              style={{
                background: 'transparent',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <UserCheck size={16} color="var(--blue-sky)" />
              <span>{t.getExpertHelpBtn}</span>
            </button>
          </div>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginTop: '40px'
        }}>
          {/* Card 1 */}
          <div className="glass-panel" style={{
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-emerald)',
              flexShrink: 0
            }}>
              <CheckCircle2 size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: '4px' }}>
                {t.principleAccuracy}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Refuses to guess when evidence is blurry, conflicting, or unknown.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--blue-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--blue-sky)',
              flexShrink: 0
            }}>
              <Camera size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: '4px' }}>
                {t.principleMultiImage}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Analyzes 4 angles collectively for spatial consistency across the plant.
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--amber-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--amber-warm)',
              flexShrink: 0
            }}>
              <AlertTriangle size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: '4px' }}>
                {t.principleSafety}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Distinguishes nutrient deficiencies from diseases to avoid wasted sprays.
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel" style={{
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--purple-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--purple-regal)',
              flexShrink: 0
            }}>
              <BookOpenCheck size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: '4px' }}>
                {t.principleTransparency}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                All recommendations verified with ICAR & FAO agronomic research citations.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
