import React, { useState } from 'react';
import { 
  Sprout, 
  CloudRain, 
  Thermometer, 
  MapPin, 
  Check, 
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language, FarmerContext } from '../types';
import { CROPS_DATABASE } from '../data/crops';
import { TRANSLATIONS } from '../data/translations';

interface CropContextModalProps {
  context: FarmerContext;
  onUpdateContext: (updates: Partial<FarmerContext>) => void;
  onStartAnalysis: () => void;
  language: Language;
  onBackToPhotos: () => void;
}

export const CropContextModal: React.FC<CropContextModalProps> = ({
  context,
  onUpdateContext,
  onStartAnalysis,
  language,
  onBackToPhotos
}) => {
  const t = TRANSLATIONS[language];
  const [showCropPicker, setShowCropPicker] = useState(false);
  const [showEnvSection, setShowEnvSection] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCrop = CROPS_DATABASE.find(c => c.id === context.cropId) || CROPS_DATABASE[0];

  const filteredCrops = CROPS_DATABASE.filter(crop => {
    const q = searchQuery.toLowerCase();
    return crop.nameEn.toLowerCase().includes(q) ||
           crop.nameHi.includes(q) ||
           crop.nameMr.includes(q) ||
           crop.scientificName.toLowerCase().includes(q);
  });

  const getCropName = (crop: typeof currentCrop) => {
    if (language === 'hi') return crop.nameHi;
    if (language === 'mr') return crop.nameMr;
    return crop.nameEn;
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px', maxWidth: '840px' }}>
      
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
          {t.cropSelectTitle}
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          Just 2 quick questions to help our agricultural engine assess your plant safely.
        </p>
      </div>

      {/* 1. Crop Confirmation Card */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              fontSize: '2.5rem',
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'var(--primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--primary-sprout)'
            }}>
              {currentCrop.icon}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--primary-emerald)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {t.cropAutoDetected}
                </span>
                <Sparkles size={14} color="var(--primary-emerald)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                {getCropName(currentCrop)}
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                {currentCrop.scientificName}
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowCropPicker(!showCropPicker)}
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
            <span>{t.selectDifferentCrop}</span>
            {showCropPicker ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Expandable Crop Selector Grid */}
        {showCropPicker && (
          <div style={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <input
              type="text"
              placeholder={t.searchCropPlaceholder}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-main)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                marginBottom: '16px',
                outline: 'none'
              }}
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
              gap: '10px',
              maxHeight: '220px',
              overflowY: 'auto',
              paddingRight: '4px'
            }}>
              {filteredCrops.map(crop => {
                const isSelected = crop.id === context.cropId;
                return (
                  <button
                    key={crop.id}
                    onClick={() => {
                      onUpdateContext({ cropId: crop.id });
                      setShowCropPicker(false);
                    }}
                    style={{
                      background: isSelected ? 'var(--primary-light)' : 'var(--bg-card)',
                      border: isSelected ? '2px solid var(--primary-emerald)' : '1px solid var(--border-subtle)',
                      padding: '12px 8px',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      textAlign: 'center'
                    }}
                  >
                    <span style={{ fontSize: '1.8rem' }}>{crop.icon}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {getCropName(crop)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 2. Farmer Question 1: When First Noticed? */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
          1. {t.firstNoticedQuestion}
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '12px'
        }}>
          {[
            { id: 'today', label: t.firstNoticedToday },
            { id: 'few_days', label: t.firstNoticedFewDays },
            { id: 'week_plus', label: t.firstNoticedWeekPlus },
            { id: 'dont_know', label: t.firstNoticedDontKnow }
          ].map(opt => {
            const isSelected = context.noticedWhen === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onUpdateContext({ noticedWhen: opt.id as any })}
                className="farmer-touch-target"
                style={{
                  background: isSelected ? 'var(--primary-emerald)' : 'var(--bg-card-subtle)',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--primary-forest)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textAlign: 'center'
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Farmer Question 2: Is It Spreading? */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
          2. {t.isSpreadingQuestion}
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px'
        }}>
          {[
            { id: 'yes', label: t.spreadingYes },
            { id: 'no', label: t.spreadingNo },
            { id: 'dont_know', label: t.spreadingDontKnow }
          ].map(opt => {
            const isSelected = context.isSpreading === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onUpdateContext({ isSpreading: opt.id as any })}
                className="farmer-touch-target"
                style={{
                  background: isSelected ? 'var(--primary-emerald)' : 'var(--bg-card-subtle)',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--primary-forest)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textAlign: 'center'
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Optional Environmental Context Accordion */}
      <div className="glass-panel" style={{ padding: '20px', marginBottom: '32px' }}>
        <button
          onClick={() => setShowEnvSection(!showEnvSection)}
          style={{
            width: '100%',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'var(--text-primary)',
            fontSize: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CloudRain size={20} color="var(--blue-sky)" />
            <span>{t.environmentalDetailsOptional}</span>
          </div>
          {showEnvSection ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {showEnvSection && (
          <div style={{
            marginTop: '18px',
            paddingTop: '18px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {/* Region / State */}
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                {t.locationRegionLabel}
              </label>
              <select
                value={context.region}
                onChange={e => onUpdateContext({ region: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-main)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              >
                <option value="Maharashtra">Maharashtra (महाराष्ट्र)</option>
                <option value="Punjab">Punjab (पंजाब)</option>
                <option value="Uttar Pradesh">Uttar Pradesh (उत्तर प्रदेश)</option>
                <option value="Karnataka">Karnataka (कर्नाटक)</option>
                <option value="Madhya Pradesh">Madhya Pradesh (मध्य प्रदेश)</option>
                <option value="Gujarat">Gujarat (गुजरात)</option>
                <option value="Andhra Pradesh">Andhra Pradesh / Telangana</option>
                <option value="Other">Other Region</option>
              </select>
            </div>

            {/* Rain Toggle */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                {t.recentRainLabel}
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => onUpdateContext({ recentRain: true, weatherHumidity: 85 })}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: 'var(--radius-md)',
                    background: context.recentRain ? 'var(--blue-sky)' : 'var(--bg-main)',
                    color: context.recentRain ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  Yes (Heavy Rain / Fog)
                </button>
                <button
                  onClick={() => onUpdateContext({ recentRain: false, weatherHumidity: 50 })}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: 'var(--radius-md)',
                    background: !context.recentRain ? 'var(--primary-emerald)' : 'var(--bg-main)',
                    color: !context.recentRain ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  No (Dry Weather)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Back and Submit Actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={onBackToPhotos}
          style={{
            background: 'var(--bg-card-subtle)',
            color: 'var(--text-secondary)',
            padding: '14px 24px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
            fontSize: '1rem'
          }}
        >
          ← Back to Photos
        </button>

        <button
          onClick={onStartAnalysis}
          className="farmer-touch-target pulse-button"
          style={{
            background: 'linear-gradient(135deg, var(--primary-forest), var(--primary-emerald))',
            color: '#ffffff',
            padding: '16px 36px',
            borderRadius: 'var(--radius-full)',
            fontSize: '1.15rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 24px rgba(5, 150, 105, 0.4)'
          }}
        >
          <span>{t.analyzeCropBtn}</span>
          <ArrowRight size={20} />
        </button>
      </div>

    </div>
  );
};
