import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  FileCode, 
  BookOpen, 
  Microscope, 
  ShieldCheck, 
  Sparkles,
  ArrowLeft,
  Info
} from 'lucide-react';
import { Language, AnalysisResult, ConfidenceBreakdown } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ExpertResultViewProps {
  result: AnalysisResult;
  language: Language;
  onBackToFarmerView: () => void;
}

export const ExpertResultView: React.FC<ExpertResultViewProps> = ({
  result,
  language,
  onBackToFarmerView
}) => {
  const t = TRANSLATIONS[language];
  const [showRawJson, setShowRawJson] = useState(false);

  const scores = result.confidenceBreakdown.radarScores;

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px', maxWidth: '980px' }}>
      
      {/* Header & Back Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '28px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--purple-light)',
            color: 'var(--purple-regal)',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '6px'
          }}>
            <Layers size={14} />
            <span>EXPERT & RESEARCH INSPECTION MODE</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
            {t.detailedAnalysisTitle}
          </h2>
        </div>

        <button
          onClick={onBackToFarmerView}
          style={{
            background: 'var(--bg-card-subtle)',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Simple Farmer View</span>
        </button>
      </div>

      {/* 1. Diagnostic Confidence Radar Scores Table */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Microscope size={20} color="var(--purple-regal)" />
          <span>{t.radarMetricsTitle}</span>
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '16px'
        }}>
          {[
            { label: t.factorImageQuality, score: scores.imageQualityScore, level: result.confidenceBreakdown.imageQuality },
            { label: t.factorCropId, score: scores.cropIdScore, level: result.confidenceBreakdown.cropIdentification },
            { label: t.factorSymptomMatch, score: scores.symptomMatchScore, level: result.confidenceBreakdown.visualSymptomMatch },
            { label: t.factorSourceEvidence, score: scores.knowledgeSupportScore, level: result.confidenceBreakdown.sourceEvidence },
            { label: t.factorEnvironmental, score: scores.environmentalScore, level: result.confidenceBreakdown.environmentalConsistency }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-main)',
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '4px' }}>
                {item.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {item.score}%
                </span>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '6px',
                  background: item.score >= 80 ? 'var(--primary-light)' : item.score >= 60 ? 'var(--amber-light)' : 'var(--red-light)',
                  color: item.score >= 80 ? 'var(--primary-emerald)' : item.score >= 60 ? 'var(--amber-warm)' : 'var(--red-crimson)'
                }}>
                  {item.level}
                </span>
              </div>
              <div style={{ height: '6px', borderRadius: '3px', background: 'var(--border-subtle)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${item.score}%`,
                  background: item.score >= 80 ? 'var(--primary-emerald)' : item.score >= 60 ? 'var(--amber-warm)' : 'var(--red-crimson)'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Image-by-Image Slot Analysis */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px' }}>
          📷 Individual Photo Evidence Matrix (4 Angles)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {result.multiImageEvidence.perImageDetails.map(detail => (
            <div key={detail.slotId} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-main)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.88rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--bg-card-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.78rem'
                }}>
                  #{detail.slotId}
                </span>
                <span style={{ color: 'var(--text-primary)' }}>
                  {language === 'hi' ? detail.observationHi : language === 'mr' ? detail.observationMr : detail.observationEn}
                </span>
              </div>

              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: detail.supportsMainDiagnosis ? 'var(--primary-emerald)' : 'var(--amber-warm)'
              }}>
                {detail.supportsMainDiagnosis ? '✓ Supports Diagnosis' : '⚠ Non-support / Clean'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Differential Diagnosis Matrix */}
      {result.differentialCauses.length > 0 && (
        <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px' }}>
            ⚖️ {t.differentialMatrixTitle}
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '10px' }}>{t.hypothesisCol}</th>
                  <th style={{ padding: '10px' }}>{t.probabilityCol}</th>
                  <th style={{ padding: '10px' }}>{t.whyPossibleCol}</th>
                  <th style={{ padding: '10px' }}>{t.distinguishingCol}</th>
                </tr>
              </thead>
              <tbody>
                {result.differentialCauses.map((hypo, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '12px 10px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {hypo.conditionNameEn}
                    </td>
                    <td style={{ padding: '12px 10px' }}>
                      <span style={{
                        background: hypo.probability >= 70 ? 'var(--primary-light)' : 'var(--bg-card-subtle)',
                        color: hypo.probability >= 70 ? 'var(--primary-emerald)' : 'var(--text-secondary)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontWeight: 700
                      }}>
                        {hypo.probability}%
                      </span>
                    </td>
                    <td style={{ padding: '12px 10px', color: 'var(--text-secondary)' }}>
                      {hypo.whyPossibleEn}
                    </td>
                    <td style={{ padding: '12px 10px', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {hypo.distinguishingFeaturesEn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. Agricultural Knowledge Retrieval & Triangulation */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={20} color="var(--blue-sky)" />
          <span>{t.agriKnowledgeTitle}</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '18px' }}>
          {/* AI Observation */}
          <div style={{
            background: 'var(--bg-main)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--purple-regal)', marginBottom: '6px' }}>
              {t.aiObservationLabel}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
              {result.aiObservationEn}
            </p>
          </div>

          {/* Agricultural Evidence */}
          <div style={{
            background: 'var(--bg-main)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--blue-sky)', marginBottom: '6px' }}>
              {t.agriEvidenceLabel}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
              {result.agriculturalEvidenceEn}
            </p>
          </div>
        </div>

        {/* Source Citations */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '14px',
          fontSize: '0.82rem'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Verified Research Sources Cited:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {result.sources.map(src => (
              <div key={src.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-emerald)' }}>
                <span>• <strong>{src.sourceName}</strong> ({src.organization}, {src.publishedYear})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Dataset Bias & Model Limitations Notice */}
      <div className="glass-panel" style={{
        padding: '20px',
        marginBottom: '28px',
        background: 'var(--bg-card-subtle)',
        border: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
          <Info size={16} color="var(--text-muted)" />
          <span>{t.modelLimitationsTitle}</span>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Clinical vision models may vary in accuracy across atypical micro-climates, soil nutrient variations, or uncommon local cultivars. 
          KisanDrishti implements hard zero-guess safety gates when lesion geometry does not exceed rigorous statistical thresholds.
        </p>
      </div>

      {/* 6. Raw JSON Diagnostic Inspector (For Judges) */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => setShowRawJson(!showRawJson)}
          style={{
            background: 'transparent',
            color: 'var(--text-muted)',
            border: '1px dashed var(--border-subtle)',
            padding: '8px 16px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.82rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <FileCode size={14} />
          <span>{t.rawJsonBtn}</span>
        </button>

        {showRawJson && (
          <pre style={{
            marginTop: '16px',
            background: '#0f172a',
            color: '#38bdf8',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            textAlign: 'left',
            maxHeight: '300px',
            overflowY: 'auto',
            fontSize: '0.78rem',
            lineHeight: 1.4
          }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>

    </div>
  );
};
