import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Volume2, 
  Clock, 
  BookmarkCheck, 
  FileText, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Ban,
  Eye,
  Activity,
  ArrowRight,
  Info
} from 'lucide-react';
import { Language, AnalysisResult, FarmerContext, DiseaseStage } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { speechService } from '../services/speechService';
import confetti from 'canvas-confetti';

interface FarmerResultViewProps {
  result: AnalysisResult;
  context: FarmerContext;
  language: Language;
  onSaveToMemory: () => void;
  onSetReminder: () => void;
  onOpenExpertReport: () => void;
  onOpenAskWhy: () => void;
  onSwitchToExpertMode: () => void;
  onCheckAnotherCrop: () => void;
}

export const FarmerResultView: React.FC<FarmerResultViewProps> = ({
  result,
  context,
  language,
  onSaveToMemory,
  onSetReminder,
  onOpenExpertReport,
  onOpenAskWhy,
  onSwitchToExpertMode,
  onCheckAnotherCrop
}) => {
  const t = TRANSLATIONS[language];
  const [activeTreatmentTab, setActiveTreatmentTab] = useState<'doNow' | 'watchFor' | 'avoid' | 'prevention' | 'expertEscalation'>('doNow');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [reminderSet, setReminderSet] = useState(false);

  const conditionName = language === 'hi' ? result.conditionNameHi : language === 'mr' ? result.conditionNameMr : result.conditionNameEn;
  const whyList = language === 'hi' ? result.whyReasoningHi : language === 'mr' ? result.whyReasoningMr : result.whyReasoningEn;
  const stageExplanation = language === 'hi' ? result.stageExplanationHi : language === 'mr' ? result.stageExplanationMr : result.stageExplanationEn;
  const whatCouldChange = language === 'hi' ? result.whatCouldChangeResultHi : language === 'mr' ? result.whatCouldChangeResultMr : result.whatCouldChangeResultEn;

  // Speak result text
  const handleSpeakResult = () => {
    if (isSpeaking) {
      speechService.stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = `${conditionName}. ${result.simpleSummaryEn}. ${result.treatment.doNow.en.slice(0, 2).join('. ')}`;
    setIsSpeaking(true);
    speechService.speak(textToSpeak, language, () => setIsSpeaking(false));
  };

  const handleSave = () => {
    onSaveToMemory();
    setSavedSuccess(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.85 } });
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleReminder = () => {
    onSetReminder();
    setReminderSet(true);
    setTimeout(() => setReminderSet(false), 3000);
  };

  // Stage stages map
  const stages: DiseaseStage[] = ['early', 'developing', 'advanced', 'severe'];
  const stageLabels = {
    early: 'Early (शुरुआती)',
    developing: 'Developing (मध्यम)',
    advanced: 'Advanced (गंभीर)',
    severe: 'Severe (अति गंभीर)',
    unknown: 'Unknown'
  };

  const currentStageIndex = stages.indexOf(result.diseaseStage);

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px', maxWidth: '880px' }}>
      
      {/* 1. Header Card: WHAT IS HAPPENING? */}
      <div className="glass-panel" style={{
        padding: '28px',
        marginBottom: '24px',
        background: result.problemType === 'healthy' 
          ? 'linear-gradient(135deg, #ecfdf5 0%, var(--bg-card) 100%)' 
          : 'linear-gradient(135deg, #fffbeb 0%, var(--bg-card) 100%)',
        border: `2px solid ${result.problemType === 'healthy' ? 'var(--primary-sprout)' : '#fde68a'}`
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--primary-emerald)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={16} />
            {t.whatIsHappeningTitle}
          </span>

          {/* Voice button */}
          <button
            onClick={handleSpeakResult}
            style={{
              background: isSpeaking ? 'var(--red-crimson)' : 'var(--blue-light)',
              color: isSpeaking ? '#ffffff' : 'var(--blue-sky)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Volume2 size={16} />
            <span>{isSpeaking ? 'Stop Voice' : t.speakResultBtn}</span>
          </button>
        </div>

        <h1 style={{
          fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '6px'
        }}>
          {conditionName}
        </h1>

        {result.scientificConditionName && (
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '14px' }}>
            Pathogen / Cause: {result.scientificConditionName}
          </div>
        )}

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {language === 'hi' ? result.simpleSummaryHi : language === 'mr' ? result.simpleSummaryMr : result.simpleSummaryEn}
        </p>
      </div>

      {/* 2. HOW SURE ARE WE & Multi-Image Consistency */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        {/* Confidence Badge */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
            {t.howSureTitle}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.1rem',
            fontWeight: 800,
            color: result.confidence === 'high' ? 'var(--primary-forest)' : 'var(--amber-warm)'
          }}>
            {result.confidence === 'high' ? <CheckCircle2 size={24} color="var(--primary-emerald)" /> : <AlertTriangle size={24} color="var(--amber-warm)" />}
            <span>{result.confidence === 'high' ? t.confidenceHigh : t.confidenceMedium}</span>
          </div>
        </div>

        {/* Multi-Image Evidence Counter */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
            {t.multiImageSummary}
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            {language === 'hi' ? result.multiImageEvidence.summaryHi : language === 'mr' ? result.multiImageEvidence.summaryMr : result.multiImageEvidence.summaryEn}
          </div>
        </div>
      </div>

      {/* 3. Disease Stage Progression Indicator */}
      {result.problemType !== 'healthy' && result.diseaseStage !== 'unknown' && (
        <div className="glass-panel" style={{ padding: '22px', marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              Estimated Disease Stage (अंदाजे अवस्था):
            </span>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              color: 'var(--primary-emerald)',
              background: 'var(--primary-light)',
              padding: '2px 10px',
              borderRadius: 'var(--radius-full)'
            }}>
              {stageLabels[result.diseaseStage]}
            </span>
          </div>

          {/* Visual Step Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '6px',
            marginBottom: '10px'
          }}>
            {stages.map((stg, idx) => {
              const isPastOrCurrent = currentStageIndex >= idx;
              return (
                <div
                  key={stg}
                  style={{
                    height: '8px',
                    borderRadius: '4px',
                    background: isPastOrCurrent
                      ? idx === 0 ? 'var(--primary-sprout)' : idx === 1 ? 'var(--amber-warm)' : idx === 2 ? '#ea580c' : 'var(--red-crimson)'
                      : 'var(--border-subtle)'
                  }}
                />
              );
            })}
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {stageExplanation}
          </div>
        </div>
      )}

      {/* 4. WHY DO WE THINK THIS? */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{t.whyThinkThisTitle}</span>
          </h3>

          <button
            onClick={onOpenAskWhy}
            style={{
              background: 'var(--bg-card-subtle)',
              color: 'var(--primary-emerald)',
              border: '1px solid var(--primary-sprout)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <HelpCircle size={14} />
            <span>{t.askWhyBtn}</span>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {whyList.map((reason, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
              <CheckCircle2 size={18} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}>{reason}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Safe Treatment & Care (Tabbed) */}
      <div className="glass-panel" style={{ padding: '26px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <ShieldCheck size={24} color="var(--primary-emerald)" />
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
            {t.whatShouldIDoTitle}
          </h3>
        </div>

        {/* Tab Headers */}
        <div style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '20px',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {[
            { id: 'doNow', label: t.tabDoNow, icon: CheckCircle2, color: 'var(--primary-emerald)' },
            { id: 'watchFor', label: t.tabWatchFor, icon: Eye, color: 'var(--blue-sky)' },
            { id: 'avoid', label: t.tabAvoid, icon: Ban, color: 'var(--red-crimson)' },
            { id: 'prevention', label: t.tabPrevention, icon: Sparkles, color: 'var(--primary-forest)' },
            { id: 'expertEscalation', label: t.tabExpertEscalate, icon: HelpCircle, color: 'var(--amber-warm)' }
          ].map(tab => {
            const isTabActive = activeTreatmentTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTreatmentTab(tab.id as any)}
                style={{
                  background: isTabActive ? 'var(--primary-forest)' : 'var(--bg-card-subtle)',
                  color: isTabActive ? '#ffffff' : 'var(--text-secondary)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  fontWeight: isTabActive ? 700 : 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div style={{ minHeight: '140px' }}>
          {(() => {
            const list = language === 'hi' 
              ? result.treatment[activeTreatmentTab].hi 
              : language === 'mr' 
                ? result.treatment[activeTreatmentTab].mr 
                : result.treatment[activeTreatmentTab].en;

            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {list.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    background: 'var(--bg-main)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.92rem',
                    lineHeight: 1.45
                  }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--primary-light)',
                      color: 'var(--primary-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Treatment Safety Verification Notice */}
        <div style={{
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <ShieldCheck size={16} color="var(--primary-emerald)" />
          <span>
            <strong>Safety Verified:</strong> No unsupported toxic chemicals are recommended without field confirmation.
          </span>
        </div>
      </div>

      {/* 6. What Could Change This Result? (Explainability) */}
      <div className="glass-panel" style={{
        padding: '20px',
        marginBottom: '28px',
        background: 'var(--primary-light)',
        border: '1px solid var(--primary-sprout)'
      }}>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-forest)', marginBottom: '6px' }}>
          💡 {t.whatCouldChangeTitle}
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          {whatCouldChange}
        </p>
      </div>

      {/* 7. Action Buttons Footer */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '12px',
        marginBottom: '32px'
      }}>
        {/* Save to Memory */}
        <button
          onClick={handleSave}
          className="farmer-touch-target"
          style={{
            background: savedSuccess ? 'var(--primary-emerald)' : 'var(--bg-card)',
            color: savedSuccess ? '#ffffff' : 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
            padding: '12px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <BookmarkCheck size={18} color={savedSuccess ? '#ffffff' : 'var(--primary-emerald)'} />
          <span>{savedSuccess ? 'Saved in Memory!' : t.saveToMemoryBtn}</span>
        </button>

        {/* Set Reminder */}
        <button
          onClick={handleReminder}
          className="farmer-touch-target"
          style={{
            background: reminderSet ? 'var(--amber-warm)' : 'var(--bg-card)',
            color: reminderSet ? '#ffffff' : 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
            padding: '12px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Clock size={18} color={reminderSet ? '#ffffff' : 'var(--amber-warm)'} />
          <span>{reminderSet ? 'Reminder Scheduled!' : t.remindMeBtn}</span>
        </button>

        {/* Generate KVK Slip */}
        <button
          onClick={onOpenExpertReport}
          className="farmer-touch-target"
          style={{
            background: 'var(--primary-forest)',
            color: '#ffffff',
            padding: '12px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <FileText size={18} />
          <span>{t.getExpertReportBtn}</span>
        </button>
      </div>

      {/* Switch to Expert Mode & Check Another Crop */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '20px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <button
          onClick={onSwitchToExpertMode}
          style={{
            background: 'var(--purple-light)',
            color: 'var(--purple-regal)',
            border: '1px solid var(--purple-regal)',
            padding: '10px 18px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Layers size={16} />
          <span>{t.detailedAnalysisTitle} →</span>
        </button>

        <button
          onClick={onCheckAnotherCrop}
          style={{
            background: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            textDecoration: 'underline'
          }}
        >
          Check Another Crop Plant
        </button>
      </div>

    </div>
  );
};
