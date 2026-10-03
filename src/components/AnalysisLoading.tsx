import React, { useState, useEffect } from 'react';
import { Microscope, ShieldCheck, BookOpen, CheckCircle2, Cpu } from 'lucide-react';
import { Language } from '../types';

interface AnalysisLoadingProps {
  language: Language;
}

export const AnalysisLoading: React.FC<AnalysisLoadingProps> = ({ language }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { labelEn: '1. Quality Gating & Non-Plant Guardrail Check...', labelHi: '1. फोटो गुणवत्ता एवं गैर-पौधा सुरक्षा जांच...', labelMr: '१. फोटो दर्जा व सुरक्षा पडताळणी...' },
    { labelEn: '2. Multi-Angle Spatial Vision Synthesis...', labelHi: '2. 4 कोणों से लक्षणों का आपसी मिलान...', labelMr: '२. ४ कोनांतून लक्षणांचा ताळमेळ...' },
    { labelEn: '3. Querying ICAR & Agricultural Databases...', labelHi: '3. ICAR कृषि अनुसंधान डेटाबेस से सत्यापन...', labelMr: '३. ICAR कृषी विद्यापीठांच्या नोंदी तपासत आहोत...' },
    { labelEn: '4. Applying Safe Non-Toxic Advisory Rules...', labelHi: '4. सुरक्षित एवं सटीक सलाह तैयार की जा रही है...', labelMr: '४. सुरक्षित व अचूक सल्ला तयार करत आहोत...' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 200);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="container animate-fade-in" style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '540px',
        width: '100%',
        padding: '36px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, var(--primary-light) 0%, var(--bg-card) 100%)',
        border: '1px solid var(--primary-sprout)'
      }}>
        {/* Animated Radar Pulse Circle */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'var(--primary-emerald)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          boxShadow: '0 0 0 12px rgba(16, 185, 129, 0.25)',
          animation: 'spinSlow 6s linear infinite'
        }}>
          <Cpu size={36} />
        </div>

        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
          {language === 'hi' ? 'फसल का विश्लेषण जारी है...' : language === 'mr' ? 'पिकाचे सखोल विश्लेषण सुरू आहे...' : 'Analyzing Crop Multi-Angle Evidence...'}
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
          {language === 'hi' ? 'हम सिर्फ एक फोटो पर नहीं, बल्कि सभी कोणों के प्रमाण पर काम करते हैं।' : language === 'mr' ? 'आम्ही केवळ एका फोटोवर अवलंबून न राहता सर्व पुरावे तपासतो.' : 'Cross-checking lesion patterns, weather context, and verified ICAR agricultural sources.'}
        </p>

        {/* 4 Pipeline Stages Progression */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
          {steps.map((step, idx) => {
            const isFinished = currentStep > idx;
            const isCurrent = currentStep === idx;
            const label = language === 'hi' ? step.labelHi : language === 'mr' ? step.labelMr : step.labelEn;

            return (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                background: isCurrent ? 'var(--primary-light)' : 'var(--bg-main)',
                border: isCurrent ? '1px solid var(--primary-sprout)' : '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                fontWeight: isCurrent ? 700 : 500,
                color: isFinished ? 'var(--primary-emerald)' : isCurrent ? 'var(--primary-forest)' : 'var(--text-muted)'
              }}>
                <CheckCircle2 size={16} color={isFinished ? 'var(--primary-emerald)' : isCurrent ? 'var(--primary-sprout)' : 'var(--border-subtle)'} />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
