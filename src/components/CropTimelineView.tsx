import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft, 
  Sliders, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Language, CropTimelineEntry } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DEMO_IMAGES } from '../data/demoCases';

interface CropTimelineViewProps {
  language: Language;
  onBackToHome: () => void;
  onCheckNewCrop: () => void;
}

export const CropTimelineView: React.FC<CropTimelineViewProps> = ({
  language,
  onBackToHome,
  onCheckNewCrop
}) => {
  const t = TRANSLATIONS[language];
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100

  const timelineHistory: CropTimelineEntry[] = [
    {
      id: 'entry_1',
      cropName: 'Tomato (Plot #2)',
      date: '12 Sept 2026',
      stage: 'Initial Detection',
      status: 'initial',
      notes: 'Noticed concentric brown spots on bottom leaves. AI flagged Early Blight (developing stage).',
      imageUrl: DEMO_IMAGES.early_blight_leaf,
      treatmentApplied: 'Pruned bottom infected leaves, applied Trichoderma viride to root zone.'
    },
    {
      id: 'entry_2',
      cropName: 'Tomato (Plot #2)',
      date: '16 Sept 2026',
      stage: 'Day 4 Follow-up',
      status: 'stable',
      notes: 'Spots did not spread to top leaves. Irrigation switched to furrow drip.',
      imageUrl: DEMO_IMAGES.early_blight_leaf,
      treatmentApplied: 'Neem oil spray (5ml/L) preventative.'
    },
    {
      id: 'entry_3',
      cropName: 'Tomato (Plot #2)',
      date: '20 Sept 2026',
      stage: 'Day 8 Follow-up (Current)',
      status: 'improving',
      notes: 'New top foliage expanding healthy green. Lower leaf chlorosis arrested.',
      imageUrl: DEMO_IMAGES.healthy_tomato_plant,
      treatmentApplied: 'Routine monitoring scheduled.'
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px', maxWidth: '920px' }}>
      
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
            <Clock size={14} />
            <span>PERSONALIZED CROP MEMORY & MONITORING</span>
          </div>
          <h2 style={{ fontSize: '1.7rem', color: 'var(--text-primary)' }}>
            {t.cropTimelineTitle}
          </h2>
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

      {/* 1. Interactive Before vs After Comparison Slider */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sliders size={20} color="var(--primary-emerald)" />
          <span>{t.beforeAfterSliderTitle}</span>
        </h3>

        {/* Comparison Viewer Container */}
        <div style={{
          position: 'relative',
          height: '320px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          userSelect: 'none',
          marginBottom: '16px',
          border: '1px solid var(--border-subtle)'
        }}>
          {/* AFTER Image (Background) */}
          <img
            src={DEMO_IMAGES.healthy_tomato_plant}
            alt="After treatment plant"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* BEFORE Image (Clipped overlay) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${sliderPosition}%`,
            height: '100%',
            overflow: 'hidden',
            borderRight: '3px solid #ffffff'
          }}>
            <img
              src={DEMO_IMAGES.early_blight_leaf}
              alt="Before treatment plant"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                maxWidth: 'none',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Badges */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(0, 0, 0, 0.75)',
            color: '#ffffff',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.78rem',
            fontWeight: 700
          }}>
            {t.beforeLabel}
          </div>

          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'var(--primary-emerald)',
            color: '#ffffff',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.78rem',
            fontWeight: 700
          }}>
            {t.afterLabel}
          </div>
        </div>

        {/* Range Slider Control */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Before</span>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={e => setSliderPosition(Number(e.target.value))}
            style={{
              flex: 1,
              accentColor: 'var(--primary-emerald)',
              cursor: 'ew-resize'
            }}
          />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Now</span>
        </div>

        {/* Status Callout */}
        <div style={{
          background: 'var(--primary-light)',
          border: '1px solid var(--primary-sprout)',
          padding: '14px',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.92rem',
          fontWeight: 700,
          color: 'var(--primary-forest)'
        }}>
          <CheckCircle2 size={20} color="var(--primary-emerald)" />
          <span>{t.statusImproving}</span>
        </div>
      </div>

      {/* 2. Timeline Step-by-Step History */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '28px' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '20px' }}>
          📅 Plot #2 Health Log
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            left: '16px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            background: 'var(--border-subtle)'
          }} />

          {timelineHistory.map((item, idx) => (
            <div key={item.id} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: idx === 2 ? 'var(--primary-emerald)' : 'var(--bg-card)',
                color: idx === 2 ? '#ffffff' : 'var(--text-secondary)',
                border: `2px solid ${idx === 2 ? 'var(--primary-leaf)' : 'var(--border-subtle)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0,
                zIndex: 2
              }}>
                {idx + 1}
              </div>

              <div style={{
                flex: 1,
                background: 'var(--bg-main)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {item.stage}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.date}
                  </span>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {item.notes}
                </p>

                {item.treatmentApplied && (
                  <div style={{
                    fontSize: '0.82rem',
                    color: 'var(--primary-forest)',
                    background: 'var(--primary-light)',
                    padding: '6px 10px',
                    borderRadius: '6px'
                  }}>
                    <strong>Action: </strong> {item.treatmentApplied}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button to Record Follow-up */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onCheckNewCrop}
          className="farmer-touch-target pulse-button"
          style={{
            background: 'var(--primary-emerald)',
            color: '#ffffff',
            padding: '14px 28px',
            borderRadius: 'var(--radius-full)',
            fontSize: '1rem',
            fontWeight: 700
          }}
        >
          📷 Record New Check for This Crop
        </button>
      </div>

    </div>
  );
};
