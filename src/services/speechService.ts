import { Language } from '../types';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private recognition: any = null;
  private isListening = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isSpeechRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }

  public isSpeechSynthesisSupported(): boolean {
    return this.synth !== null;
  }

  public startListening(
    lang: Language,
    onResult: (text: string) => void,
    onError: (err: any) => void,
    onEnd: () => void
  ) {
    if (!this.isSpeechRecognitionSupported()) {
      onError(new Error('Speech recognition is not supported in this browser.'));
      return;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;

      // Set language code
      if (lang === 'hi') {
        this.recognition.lang = 'hi-IN';
      } else if (lang === 'mr') {
        this.recognition.lang = 'mr-IN';
      } else {
        this.recognition.lang = 'en-IN';
      }

      this.recognition.onstart = () => {
        this.isListening = true;
      };

      this.recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        onResult(currentTranscript);
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        onError(event);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        onEnd();
      };

      this.recognition.start();
    } catch (e) {
      this.isListening = false;
      onError(e);
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  public speak(text: string, lang: Language, onEnd?: () => void) {
    if (!this.synth) return;

    try {
      this.synth.cancel(); // Stop any active speech
      const utterance = new SpeechSynthesisUtterance(text);
      
      let langCode = 'en-IN';
      if (lang === 'hi') langCode = 'hi-IN';
      if (lang === 'mr') langCode = 'mr-IN';
      
      utterance.lang = langCode;
      utterance.rate = 0.95; // slightly slower for better farmer clarity
      utterance.pitch = 1.0;

      // Find an appropriate voice if available
      const voices = this.synth.getVoices();
      const matchingVoice = voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = onEnd;
      }

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis error:', err);
    }
  }

  public stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const speechService = new SpeechService();
