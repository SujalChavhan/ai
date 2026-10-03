import React, { useState } from 'react';
import { 
  Scan, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Plus, 
  ArrowLeft,
  Sparkles,
  Info
} from 'lucide-react';
import { Language, FieldScanPlant } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DEMO_IMAGES } from '../data/demoCases';

interface FieldScanViewProps {
  language: Language;
  onBackToHome: () => void;
  onStartSingleCropCheck: () => void;
}

export const FieldScanView: React.FC<FieldScanViewProps> = ({
  language,
  onBackToHome,
  onStartSingleCropCheck
}) => {
  const t = TRANSLATIONS[language];

  const [fieldPlants, setFieldPlants] = useState<FieldScanPlant[]>([
    { id: 1, name: 'Sample A1 (North-West)', gridX: 1, gridY: 1, status: 'healthy', symptom: 'Lush green foliage, zero spots', image: DEMO_IMAGES.healthy_tomato_plant },
    { id: 2, name: 'Sample A2 (North-East)', gridX: 2, gridY: 1, status: 'suspected', symptom: 'Single lower leaf concentric spot', image: DEMO_IMAGES.early_blight_leaf },
    { id: 3, name: 'Sample B1 (Center-West)', gridX: 1, gridY: 2, status: 'affected', symptom: 'Multiple early blight target lesions', image: DEMO_IMAGES.early_blight_leaf },
    { id: 4, name: 'Sample B2 (Center-East)', gridX: 2, gridY: 2, status: 'healthy', symptom: 'Clean foliage, good vigor', image: DEMO_IMAGES.healthy_tomato_plant },
    { id: 5, name: 'Sample C1 (South-West)', gridX: 1, gridY: 3, status: 'healthy', symptom: 'No visible pathogen symptoms', image: DEMO_IMAGES.healthy_tomato_plant },
    { id: 6, name: 'Sample C2 (South-East)', gridX: 2, gridY: 3, status: 'suspected', symptom: 'Mild chlorosis on bottom leaf', image: DEMO_IMAGES.early_blight_leaf }
  ]);

  const [selectedPlant, setSelectedPlant] = useState<FieldScanPlant | null>(fieldPlants[2]);

  const healthyCount = fieldPlants.filter(p => p.status === 'healthy').length;
  const suspectedCount = fieldPlants.filter(p => p.status === 'suspected').length;
  const affectedCount = fieldPlants.filter(p => p.status === 'affected').length;

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px', maxWidth: '980px' }}>
      
      {/* Header */}
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
            background: 'var(--primary-light)',
            color: 'var(--primary-emerald)',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '6px'
          }}>
            <Scan size={14} />
            <span>FIELD MULTI-PLANT SURVEY (PS-07 ADVANCED)</span>
          </div>
          <h2 style={{ fontSize: '1.7rem', color: 'var(--text-primary)' }}>
            {t.fieldScanTitle}
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            {t.fieldScanSubtitle}
          </p>
        </div>

        <button
          onClick={onBackToHome}
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
          <span>Back to Home</span>
        </button>
      </div>

      {/* Field Health Statistics Summary */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '14px',
        marginBottom: '24px'
      }}>
        <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
            Total Samples
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {fieldPlants.length} Plants
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px', textAlign: 'center', borderBottom: '3px solid var(--primary-emerald)' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--primary-emerald)', fontWeight: 700, textTransform: 'uppercase' }}>
            {t.sampleHealthy}
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-emerald)' }}>
            {healthyCount} ({Math.round((healthyCount / fieldPlants.length) * 100)}%)
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px', textAlign: 'center', borderBottom: '3px solid var(--amber-warm)' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--amber-warm)', fontWeight: 700, textTransform: 'uppercase' }}>
            {t.sampleSuspected}
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--amber-warm)' }}>
            {suspectedCount}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px', textAlign: 'center', borderBottom: '3px solid var(--red-crimson)' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--red-crimson)', fontWeight: 700, textTransform: 'uppercase' }}>
            {t.sampleAffected}
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--red-crimson)' }}>
            {affectedCount}
          </div>
        </div>
      </div>

      {/* Main Grid & Inspector Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '28px'
      }}>
        
        {/* Interactive Schematic Field Plot Map */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} color="var(--primary-emerald)" />
            <span>Schematic Plot Map (Click any plant sample)</span>
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
            background: 'var(--bg-main)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            {fieldPlants.map(plant => {
              const isSelected = selectedPlant?.id === plant.id;
              const statusColor = plant.status === 'healthy' ? 'var(--primary-emerald)' : plant.status === 'suspected' ? 'var(--amber-warm)' : 'var(--red-crimson)';
              const statusBg = plant.status === 'healthy' ? 'var(--primary-light)' : plant.status === 'suspected' ? 'var(--amber-light)' : 'var(--red-light)';

              return (
                <div
                  key={plant.id}
                  onClick={() => setSelectedPlant(plant)}
                  style={{
                    background: isSelected ? '#ffffff' : statusBg,
                    border: `2px solid ${isSelected ? 'var(--text-primary)' : statusColor}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{plant.name}</span>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: statusColor
                    }} />
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {plant.symptom}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Sample Detail Inspector */}
        {selectedPlant && (
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px' }}>
              🔬 Sample Inspection: {selectedPlant.name}
            </h3>

            <div style={{ height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '14px', border: '1px solid var(--border-subtle)' }}>
              <img
                src={selectedPlant.image}
                alt={selectedPlant.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{
              background: 'var(--bg-main)',
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '16px',
              fontSize: '0.88rem'
            }}>
              <div><strong>Status: </strong>
                <span style={{
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: selectedPlant.status === 'healthy' ? 'var(--primary-emerald)' : selectedPlant.status === 'suspected' ? 'var(--amber-warm)' : 'var(--red-crimson)'
                }}>
                  {selectedPlant.status}
                </span>
              </div>
              <div style={{ marginTop: '6px', color: 'var(--text-secondary)' }}>
                <strong>Clinical Notes:</strong> {selectedPlant.symptom}
              </div>
            </div>

            <button
              onClick={onStartSingleCropCheck}
              className="farmer-touch-target"
              style={{
                width: '100%',
                background: 'var(--primary-emerald)',
                color: '#ffffff',
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem'
              }}
            >
              Run Full 4-Angle Check on This Plant
            </button>
          </div>
        )}

      </div>

      {/* Localized Containment Strategy Recommendation */}
      <div className="glass-panel" style={{
        padding: '24px',
        background: 'var(--primary-light)',
        border: '1px solid var(--primary-sprout)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-forest)', marginBottom: '8px' }}>
          <ShieldCheck size={22} color="var(--primary-emerald)" />
          <span>{t.containmentStrategy}</span>
        </div>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          Outbreak is currently <strong>localized to the Center-West & North-East quadrants (33% of field)</strong>. 
          Do NOT blanket-spray the entire field. Practice spot-sanitation by removing infected lower leaves on Sample B1 and A2, adjust drip lines, and monitor Samples A1 & B2 in 4 days.
        </p>
      </div>

    </div>
  );
};
