import React from 'react';
import { 
  Sprout, 
  Languages, 
  Wifi, 
  Mic, 
  Sparkles, 
  Layers, 
  Sun, 
  Moon,
  Clock,
  Scan
} from 'lucide-react';
import { Language, UserMode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  userMode: UserMode;
  onToggleUserMode: () => void;
  lowBandwidth: boolean;
  onToggleLowBandwidth: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenVoiceAssistant: () => void;
  onOpenFieldScan: () => void;
  onOpenTimeline: () => void;
  onResetToHome: () => void;
  activeView: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  userMode,
  onToggleUserMode,
  lowBandwidth,
  onToggleLowBandwidth,
  theme,
  onToggleTheme,
  onOpenVoiceAssistant,
  onOpenFieldScan,
  onOpenTimeline,
  onResetToHome,
  activeView
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        {/* Logo & Brand */}
        <div 
          onClick={onResetToHome}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary-forest), var(--primary-emerald))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 10px rgba(5, 150, 105, 0.3)'
          }}>
            <Sprout size={26} strokeWidth={2.4} />
          </div>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)'
              }}>
                {t.appName}
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                background: 'var(--primary-light)',
                color: 'var(--primary-emerald)',
                padding: '2px 8px',
                borderRadius: '20px',
                border: '1px solid var(--primary-sprout)'
              }}>
                PS-07
              </span>
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontWeight: 500
            }}>
              {t.coreMotto}
            </div>
          </div>
        </div>

        {/* Action Group */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {/* Voice Assistant Button */}
          <button
            onClick={onOpenVoiceAssistant}
            className="farmer-touch-target pulse-button"
            title="Voice Assistant"
            style={{
              background: 'linear-gradient(135deg, #0284c7, #2563eb)',
              color: '#ffffff',
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem'
            }}
          >
            <Mic size={18} />
            <span>{t.voiceAssistant}</span>
          </button>

          {/* Field Scan View Navigation */}
          <button
            onClick={onOpenFieldScan}
            style={{
              background: activeView === 'field_scan' ? 'var(--primary-emerald)' : 'var(--bg-card-subtle)',
              color: activeView === 'field_scan' ? '#ffffff' : 'var(--text-secondary)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <Scan size={16} />
            <span>{t.fieldScanBtn}</span>
          </button>

          {/* Crop Timeline Memory Navigation */}
          <button
            onClick={onOpenTimeline}
            style={{
              background: activeView === 'timeline' ? 'var(--primary-emerald)' : 'var(--bg-card-subtle)',
              color: activeView === 'timeline' ? '#ffffff' : 'var(--text-secondary)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <Clock size={16} />
            <span>{t.myPreviousChecksBtn}</span>
          </button>

          {/* User Mode Toggle (Farmer vs Expert) */}
          <button
            onClick={onToggleUserMode}
            style={{
              background: userMode === 'expert' ? 'var(--purple-light)' : 'var(--primary-light)',
              color: userMode === 'expert' ? 'var(--purple-regal)' : 'var(--primary-emerald)',
              border: `1px solid ${userMode === 'expert' ? 'var(--purple-regal)' : 'var(--primary-sprout)'}`,
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem'
            }}
          >
            {userMode === 'expert' ? <Layers size={16} /> : <Sparkles size={16} />}
            <span>{userMode === 'farmer' ? t.farmerMode : t.expertMode}</span>
          </button>

          {/* Language Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-card-subtle)',
            borderRadius: 'var(--radius-full)',
            padding: '2px',
            border: '1px solid var(--border-subtle)'
          }}>
            <Languages size={15} style={{ marginLeft: '8px', color: 'var(--text-muted)' }} />
            {(['en', 'hi', 'mr'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                style={{
                  background: language === lang ? 'var(--primary-emerald)' : 'transparent',
                  color: language === lang ? '#ffffff' : 'var(--text-secondary)',
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: language === lang ? 700 : 500
                }}
              >
                {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिन्दी' : 'मराठी'}
              </button>
            ))}
          </div>

          {/* Low Bandwidth Toggle */}
          <button
            onClick={onToggleLowBandwidth}
            title="Toggle Low Bandwidth Mode"
            style={{
              background: lowBandwidth ? 'var(--amber-light)' : 'var(--bg-card-subtle)',
              color: lowBandwidth ? 'var(--amber-warm)' : 'var(--text-muted)',
              border: '1px solid var(--border-subtle)',
              padding: '8px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Wifi size={16} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            title="Toggle Theme"
            style={{
              background: 'var(--bg-card-subtle)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-subtle)',
              padding: '8px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};
