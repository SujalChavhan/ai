import React, { useState, useRef } from 'react';
import { 
  Camera, 
  Upload, 
  Trash2, 
  HelpCircle, 
  Check, 
  ArrowRight,
  Video,
  Sparkles
} from 'lucide-react';
import { Language, PhotoSlot } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CameraCaptureProps {
  slots: PhotoSlot[];
  onUpdateSlot: (slotId: number, image: string | null, quality?: any) => void;
  onProceedToContext: () => void;
  language: Language;
  onOpenGuide: () => void;
}

export const CameraCapture: React.FC<CameraCaptureProps> = ({
  slots,
  onUpdateSlot,
  onProceedToContext,
  language,
  onOpenGuide
}) => {
  const t = TRANSLATIONS[language];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [activeSlotId, setActiveSlotId] = useState<number | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  // File Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || activeSlotId === null) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onUpdateSlot(activeSlotId, event.target.result as string, 'good');
        setActiveSlotId(null);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const triggerUpload = (slotId: number) => {
    setActiveSlotId(slotId);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Webcam Capture Handler
  const startLiveCamera = async (slotId: number) => {
    setActiveSlotId(slotId);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      setCameraStream(stream);
      setIsCameraActive(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (err) {
      console.warn('Camera access error, fallback to file upload:', err);
      triggerUpload(slotId);
    }
  };

  const captureCameraSnapshot = () => {
    if (!videoRef.current || activeSlotId === null) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      onUpdateSlot(activeSlotId, dataUrl, 'good');
    }
    stopLiveCamera();
  };

  const stopLiveCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setIsCameraActive(false);
    setActiveSlotId(null);
  };

  // Check if at least Slot 1 & 2 are filled
  const hasMinPhotos = slots[0].image !== null && slots[1].image !== null;

  return (
    <div className="container" style={{ padding: '36px 20px' }}>
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* Header & Guide Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '28px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
            {t.photoCaptureTitle}
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            {t.photoCaptureSubtitle}
          </p>
        </div>

        <button
          onClick={onOpenGuide}
          style={{
            background: 'var(--bg-card)',
            color: 'var(--primary-emerald)',
            border: '1px solid var(--primary-sprout)',
            padding: '10px 18px',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <HelpCircle size={18} />
          <span>{t.viewGoodBadGuide}</span>
        </button>
      </div>

      {/* 4 Photo Slots Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        marginBottom: '36px'
      }}>
        {slots.map((slot) => {
          const hasImage = slot.image !== null;
          const slotLabel = language === 'hi' ? slot.labelHi : language === 'mr' ? slot.labelMr : slot.labelEn;
          const slotDesc = language === 'hi' ? slot.descHi : language === 'mr' ? slot.descMr : slot.descEn;

          return (
            <div
              key={slot.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: hasImage ? '2px solid var(--primary-sprout)' : '1px dashed var(--border-subtle)',
                position: 'relative'
              }}
            >
              {/* Slot Header Badge */}
              <div style={{
                padding: '12px 16px',
                background: 'var(--bg-card-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>
                  {slotLabel}
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '10px',
                  background: slot.required ? 'var(--primary-light)' : 'var(--bg-main)',
                  color: slot.required ? 'var(--primary-emerald)' : 'var(--text-muted)'
                }}>
                  {slot.required ? t.requiredBadge : t.optionalBadge}
                </span>
              </div>

              {/* Slot Image / Capture Area */}
              <div style={{
                height: '200px',
                position: 'relative',
                background: 'var(--bg-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {hasImage ? (
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <img
                      src={slot.image!}
                      alt={`Crop Slot ${slot.id}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {/* Action Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      display: 'flex',
                      gap: '6px'
                    }}>
                      <button
                        onClick={() => triggerUpload(slot.id)}
                        style={{
                          background: 'rgba(0, 0, 0, 0.7)',
                          color: '#ffffff',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Upload size={14} />
                        <span>{t.retakePhoto}</span>
                      </button>
                      <button
                        onClick={() => onUpdateSlot(slot.id, null)}
                        style={{
                          background: 'var(--red-crimson)',
                          color: '#ffffff',
                          padding: '6px 8px',
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'var(--primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-emerald)'
                    }}>
                      <Camera size={26} />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => startLiveCamera(slot.id)}
                        className="farmer-touch-target"
                        style={{
                          background: 'var(--primary-emerald)',
                          color: '#ffffff',
                          padding: '8px 14px',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.82rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Video size={16} />
                        <span>{t.useCamera}</span>
                      </button>

                      <button
                        onClick={() => triggerUpload(slot.id)}
                        className="farmer-touch-target"
                        style={{
                          background: 'var(--bg-card)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                          padding: '8px 14px',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.82rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Upload size={16} />
                        <span>Upload</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Slot Description */}
              <div style={{
                padding: '12px 16px',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                flex: 1
              }}>
                {slotDesc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Camera View Overlay Modal if active */}
      {isCameraActive && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#000000',
          zIndex: 2000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              maxWidth: '90vw',
              maxHeight: '70vh',
              borderRadius: 'var(--radius-lg)',
              border: '3px solid var(--primary-leaf)'
            }}
          />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginTop: '24px'
          }}>
            <button
              onClick={captureCameraSnapshot}
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '6px solid var(--primary-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--primary-emerald)'
              }} />
            </button>

            <button
              onClick={stopLiveCamera}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.95rem'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Proceed Navigation CTA */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--bg-card)',
        padding: '20px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: hasMinPhotos ? 'var(--primary-light)' : 'var(--amber-light)',
            color: hasMinPhotos ? 'var(--primary-emerald)' : 'var(--amber-warm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {hasMinPhotos ? <Check size={18} /> : <Sparkles size={18} />}
          </div>
          <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            {hasMinPhotos 
              ? `${slots.filter(s => s.image).length} of 4 photos ready for multi-image analysis`
              : t.uploadAtLeastOne}
          </span>
        </div>

        <button
          onClick={onProceedToContext}
          disabled={!hasMinPhotos}
          className="farmer-touch-target"
          style={{
            background: hasMinPhotos 
              ? 'linear-gradient(135deg, var(--primary-forest), var(--primary-emerald))' 
              : 'var(--border-subtle)',
            color: hasMinPhotos ? '#ffffff' : 'var(--text-muted)',
            padding: '14px 28px',
            borderRadius: 'var(--radius-full)',
            fontSize: '1.05rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: hasMinPhotos ? 'pointer' : 'not-allowed'
          }}
        >
          <span>{t.continueToNext}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
