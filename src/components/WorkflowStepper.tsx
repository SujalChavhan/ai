import React from 'react';
import { Camera, Sprout, Cpu, HeartPulse, Activity } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface WorkflowStepperProps {
  currentStep: number; // 1 to 5
  language: Language;
  onStepClick: (step: number) => void;
}

export const WorkflowStepper: React.FC<WorkflowStepperProps> = ({
  currentStep,
  language,
  onStepClick
}) => {
  const t = TRANSLATIONS[language];

  const steps = [
    { number: 1, label: t.step1Title, icon: Camera },
    { number: 2, label: t.step2Title, icon: Sprout },
    { number: 3, label: t.step3Title, icon: Cpu },
    { number: 4, label: t.step4Title, icon: HeartPulse },
    { number: 5, label: t.step5Title, icon: Activity }
  ];

  return (
    <div style={{
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '16px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflowX: 'auto',
          paddingBottom: '4px',
          gap: '8px'
        }}>
          {steps.map((s, index) => {
            const Icon = s.icon;
            const isActive = currentStep === s.number;
            const isCompleted = currentStep > s.number;

            return (
              <React.Fragment key={s.number}>
                <div 
                  onClick={() => {
                    if (isCompleted || isActive) {
                      onStepClick(s.number);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: (isCompleted || isActive) ? 'pointer' : 'default',
                    opacity: currentStep >= s.number ? 1 : 0.45,
                    flexShrink: 0
                  }}
                >
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: isActive 
                      ? 'var(--primary-emerald)' 
                      : isCompleted 
                        ? 'var(--primary-forest)' 
                        : 'var(--bg-card-subtle)',
                    color: (isActive || isCompleted) ? '#ffffff' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: `2px solid ${isActive ? 'var(--primary-leaf)' : 'transparent'}`
                  }}>
                    <Icon size={16} />
                  </div>
                  <span style={{
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary-emerald)' : 'var(--text-primary)',
                    whiteSpace: 'nowrap'
                  }}>
                    {s.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div style={{
                    flex: 1,
                    height: '2px',
                    minWidth: '20px',
                    background: currentStep > index + 1 ? 'var(--primary-emerald)' : 'var(--border-subtle)',
                    margin: '0 4px'
                  }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
