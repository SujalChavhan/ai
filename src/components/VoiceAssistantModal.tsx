import React, { useState, useEffect } from 'react';
import { X, Mic, MicOff, Volume2, Sparkles, Send, Check } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { speechService } from '../services/speechService';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectVoiceDiagnosis: (cropId: string, casePresetNumber: number) => void;
}

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectVoiceDiagnosis
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiVoiceResponse, setAiVoiceResponse] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      speechService.stopListening();
      speechService.stopSpeaking();
    };
  }, []);

  const handleToggleListening = () => {
    if (isListening) {
      speechService.stopListening();
      setIsListening(false);
    } else {
      setTranscript('');
      setAiVoiceResponse('');
      setIsListening(true);
      speechService.startListening(
        language,
        (text) => {
          setTranscript(text);
        },
        (err) => {
          console.warn('Speech error:', err);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );
    }
  };

  const processSpokenQuery = (queryText: string) => {
    const q = queryText.toLowerCase();
    let responseText = '';
    let targetCase = 2; // default early blight

    if (q.includes('टमाटर') || q.includes('tomato') || q.includes('टोमॅटो')) {
      if (q.includes('पीले') || q.includes('डाग') || q.includes('spots') || q.includes('काळे')) {
        responseText = language === 'hi'
          ? 'आपके टमाटर के निचले पत्तों पर अगेती झुलसा (Early Blight) का खतरा हो सकता है। हमने इसकी पूरी जांच रिपोर्ट तैयार की है।'
          : language === 'mr'
            ? 'आपल्या टोमॅटोच्या पानांवर अगेती करपा (Early Blight) रोगाची शक्यता आहे. आम्ही याची संपूर्ण तपासणी तयार केली आहे.'
            : 'Your tomato symptoms match Early Blight. We have prepared the complete safe diagnostic advisory.';
        targetCase = 2;
      }
    } else if (q.includes('मिर्च') || q.includes('chilli') || q.includes('मिरची') || q.includes('मरोड़िया') || q.includes('चुरडा')) {
      responseText = language === 'hi'
        ? 'मिर्च की पत्तियों का मुड़ना चुरडा-मुरडा (Leaf Curl Virus या माइट्स) का संकेत है।'
        : language === 'mr'
          ? 'मिरचीची पाने वाकडी होणे हा बोकड्या किंवा चुरडा-मुरडा रोगाचा प्रादुर्भाव दर्शवतो.'
          : 'Chilli leaf curling indicates viral leaf curl or mite damage.';
      targetCase = 2;
    } else if (q.includes('कपास') || q.includes('cotton') || q.includes('कापूस') || q.includes('लाल')) {
      responseText = language === 'hi'
        ? 'कपास में पत्तियों का लाल होना पोषक तत्वों (मैग्नीशियम व नाइट्रोजन) की कमी है, कोई रोग नहीं।'
        : language === 'mr'
          ? 'कापसावर पाने लाल पडणे हे अन्नद्रव्यांची (मॅग्नेशियम) कमतरता आहे, रोग नाही.'
          : 'Cotton reddening is a physiological nutrient deficiency, not an infectious disease.';
      targetCase = 8;
    } else {
      responseText = language === 'hi'
        ? 'हमने आपकी समस्या समझ ली है। कृपया सटीक जांच के लिए 4 कोणों से फोटो लें।'
        : language === 'mr'
          ? 'आम्ही आपली समस्या नोंदवून घेतली आहे. अचूक निदानासाठी कृपया ४ कोनांतून फोटो घ्या.'
          : 'Query received. Let\'s proceed with 4-angle photo analysis.';
      targetCase = 2;
    }

    setAiVoiceResponse(responseText);
    setIsSpeaking(true);
    speechService.speak(responseText, language, () => setIsSpeaking(false));

    setTimeout(() => {
      onSelectVoiceDiagnosis('tomato', targetCase);
      onClose();
    }, 4000);
  };

  const handleQuickQuestion = (sampleQuery: string) => {
    setTranscript(sampleQuery);
    processSpokenQuery(sampleQuery);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1100,
      padding: '16px'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        maxWidth: '620px',
        width: '100%',
        padding: '32px',
        position: 'relative',
        textAlign: 'center'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-card-subtle)',
            color: 'var(--text-secondary)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--blue-light)',
          color: 'var(--blue-sky)',
          padding: '4px 14px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '12px'
        }}>
          <Sparkles size={16} />
          <span>FARMER MULTILINGUAL VOICE ASSISTANT</span>
        </div>

        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
          {t.voiceTitle}
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
          {isListening ? t.voiceListening : t.voiceClickToSpeak}
        </p>

        {/* Big Microphone Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <button
            onClick={handleToggleListening}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: isListening ? 'var(--red-crimson)' : 'linear-gradient(135deg, #0284c7, #2563eb)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isListening 
                ? '0 0 0 12px rgba(220, 38, 38, 0.25)' 
                : '0 8px 24px rgba(37, 99, 235, 0.35)',
              transition: 'all 0.3s ease'
            }}
          >
            {isListening ? <MicOff size={40} /> : <Mic size={40} />}
          </button>
        </div>

        {/* Real-time Transcription Display */}
        {transcript && (
          <div style={{
            background: 'var(--bg-main)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
              Your Voice Input:
            </div>
            <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              "{transcript}"
            </div>
            
            {!isListening && (
              <button
                onClick={() => processSpokenQuery(transcript)}
                style={{
                  marginTop: '10px',
                  background: 'var(--primary-emerald)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Analyze this query</span>
                <Send size={14} />
              </button>
            )}
          </div>
        )}

        {/* AI Voice Answer Display */}
        {aiVoiceResponse && (
          <div style={{
            background: 'var(--primary-light)',
            border: '1px solid var(--primary-sprout)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--primary-forest)', fontWeight: 700, marginBottom: '6px' }}>
              <Volume2 size={16} />
              <span>AI Voice Response:</span>
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
              {aiVoiceResponse}
            </div>
          </div>
        )}

        {/* Sample Voice Queries Chips */}
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '8px' }}>
            {t.voiceSampleQuestions}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              t.voiceSample1,
              t.voiceSample2,
              t.voiceSample3
            ].map((sample, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(sample.replace(/"/g, ''))}
                style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
