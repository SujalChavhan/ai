import React from 'react';
import { HelpCircle, Check, ArrowRight, Lightbulb } from 'lucide-react';
import { Language, DifferentialQuestion } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface DifferentialQuestionsModalProps {
  isOpen: boolean;
  questions: DifferentialQuestion[];
  answers: Record<string, string>;
  onSelectAnswer: (questionId: string, optionId: string) => void;
  onSubmit: () => void;
  language: Language;
}

export const DifferentialQuestionsModal: React.FC<DifferentialQuestionsModalProps> = ({
  isOpen,
  questions,
  answers,
  onSelectAnswer,
  onSubmit,
  language
}) => {
  if (!isOpen || questions.length === 0) return null;
  const t = TRANSLATIONS[language];

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
        maxWidth: '640px',
        width: '100%',
        padding: '30px',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'var(--amber-light)',
            color: 'var(--amber-warm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <HelpCircle size={28} />
          </div>
          <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
            {t.smartFollowupTitle}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {t.smartFollowupSubtitle}
          </p>
        </div>

        {/* Questions Loop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '28px' }}>
          {questions.map((q) => {
            const questionText = language === 'hi' ? q.questionHi : language === 'mr' ? q.questionMr : q.questionEn;
            const whyText = language === 'hi' ? q.whyAskingHi : language === 'mr' ? q.whyAskingMr : q.whyAskingEn;
            const selectedOptionId = answers[q.id];

            return (
              <div key={q.id} style={{
                background: 'var(--bg-main)',
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '14px', lineHeight: 1.4 }}>
                  {questionText}
                </h3>

                {/* Options Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  {q.options.map((opt) => {
                    const optLabel = language === 'hi' ? opt.labelHi : language === 'mr' ? opt.labelMr : opt.labelEn;
                    const isChosen = selectedOptionId === opt.id;

                    return (
                      <button
                        key={opt.id}
                        onClick={() => onSelectAnswer(q.id, opt.id)}
                        className="farmer-touch-target"
                        style={{
                          background: isChosen ? 'var(--primary-emerald)' : 'var(--bg-card)',
                          color: isChosen ? '#ffffff' : 'var(--text-primary)',
                          border: isChosen ? '1px solid var(--primary-forest)' : '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          fontSize: '0.92rem',
                          fontWeight: isChosen ? 700 : 500
                        }}
                      >
                        <span>{optLabel}</span>
                        {isChosen && <Check size={18} />}
                      </button>
                    );
                  })}
                </div>

                {/* "Why are we asking?" Explainability Card */}
                <div style={{
                  background: 'var(--blue-light)',
                  border: '1px solid #bae6fd',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '0.82rem',
                  color: '#0369a1'
                }}>
                  <Lightbulb size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 700 }}>{t.whyAskingLabel} </span>
                    <span>{whyText}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit Action */}
        <button
          onClick={onSubmit}
          className="farmer-touch-target pulse-button"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, var(--primary-forest), var(--primary-emerald))',
            color: '#ffffff',
            padding: '14px 24px',
            borderRadius: 'var(--radius-full)',
            fontSize: '1.05rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <span>{t.submitAnswersBtn}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
