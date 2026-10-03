import React, { useState, useEffect } from 'react';
import { 
  Language, 
  UserMode, 
  PhotoSlot, 
  FarmerContext, 
  AnalysisResult, 
  DifferentialQuestion 
} from './types';
import { CROPS_DATABASE } from './data/crops';
import { HACKATHON_DEMO_CASES } from './data/demoCases';
import { AiEngine } from './services/aiEngine';

// Components
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { WorkflowStepper } from './components/WorkflowStepper';
import { CameraCapture } from './components/CameraCapture';
import { GoodBadGuideModal } from './components/GoodBadGuideModal';
import { CropContextModal } from './components/CropContextModal';
import { DifferentialQuestionsModal } from './components/DifferentialQuestionsModal';
import { AnalysisLoading } from './components/AnalysisLoading';
import { FarmerResultView } from './components/FarmerResultView';
import { UnsureResultView } from './components/UnsureResultView';
import { ExpertResultView } from './components/ExpertResultView';
import { AskWhyModal } from './components/AskWhyModal';
import { ExpertReportModal } from './components/ExpertReportModal';
import { FieldScanView } from './components/FieldScanView';
import { CropTimelineView } from './components/CropTimelineView';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { HackathonDemoBar } from './components/HackathonDemoBar';
import { Footer } from './components/Footer';

export default function AppWrapper() {
  return <App />;
}

export const App: React.FC = () => {
  // App-level state
  const [language, setLanguage] = useState<Language>('en');
  const [userMode, setUserMode] = useState<UserMode>('farmer');
  const [lowBandwidth, setLowBandwidth] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  // Navigation
  const [activeView, setActiveView] = useState<'home' | 'capture' | 'context' | 'loading' | 'result' | 'field_scan' | 'timeline'>('home');
  const [currentStep, setCurrentStep] = useState(1);

  // 4 Guided Photo Slots
  const [slots, setSlots] = useState<PhotoSlot[]>([
    {
      id: 1,
      labelEn: 'Photo 1: Full Plant View',
      labelHi: 'फोटो 1: पूरे पौधे का दृश्य',
      labelMr: 'फोटो १: संपूर्ण झाडाचे दृश्य',
      descEn: 'Show the entire plant structure and soil base.',
      descHi: 'पूरा पौधा और आसपास की मिट्टी दिखाएं।',
      descMr: 'संपूर्ण झाड आणि बुंध्याकडील माती दाखवा.',
      required: true,
      image: null,
      quality: 'good'
    },
    {
      id: 2,
      labelEn: 'Photo 2: Close-up of Affected Leaf',
      labelHi: 'फोटो 2: खराब पत्ते का नजदीकी फोटो',
      labelMr: 'फोटो २: बाधित पानाचा जवळून फोटो',
      descEn: 'Get close to the leaf showing spots or discoloration.',
      descHi: 'दाग या धब्बे वाले पत्ते के पास से फोटो लें।',
      descMr: 'डाग किंवा चट्टे असलेल्या पानाजवळ कॅमेरा न्या.',
      required: true,
      image: null,
      quality: 'good'
    },
    {
      id: 3,
      labelEn: 'Photo 3: Another Angle / Branch',
      labelHi: 'फोटो 3: दूसरे कोण से / पास का पत्ता',
      labelMr: 'फोटो ३: दुसऱ्या कोनातून / शेजारचे पान',
      descEn: 'Show another infected branch or transition zone.',
      descHi: 'रोग का फैलाव दिखाने के लिए दूसरा कोण लें।',
      descMr: 'रोगाचा फैलाव समजण्यासाठी बाजूचा फोटो घ्या.',
      required: false,
      image: null,
      quality: 'good'
    },
    {
      id: 4,
      labelEn: 'Photo 4: Leaf Underside / Stem',
      labelHi: 'फोटो 4: पत्ते के नीचे का हिस्सा / तना',
      labelMr: 'फोटो ४: पानाच्या मागची बाजू / खोड',
      descEn: 'Flip the leaf to check for mould, veins, or stem spots.',
      descHi: 'पत्ते को पलटकर फफूंद या तने के दाग दिखाएं।',
      descMr: 'पान उलटून पांढरी बुरशी किंवा खोडावरील डाग दाखवा.',
      required: false,
      image: null,
      quality: 'good'
    }
  ]);

  // Farmer Context & Question responses
  const [farmerContext, setFarmerContext] = useState<FarmerContext>({
    cropId: 'tomato',
    noticedWhen: 'few_days',
    isSpreading: 'yes',
    recentRain: true,
    region: 'Maharashtra',
    weatherTemp: 26,
    weatherHumidity: 78
  });

  // Diagnosis State
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [differentialQuestions, setDifferentialQuestions] = useState<DifferentialQuestion[]>([]);
  const [differentialAnswers, setDifferentialAnswers] = useState<Record<string, string>>({});
  const [selectedDemoCaseId, setSelectedDemoCaseId] = useState<string | null>(null);

  // Modals
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isDiffModalOpen, setIsDiffModalOpen] = useState(false);
  const [isAskWhyModalOpen, setIsAskWhyModalOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isExpertReportModalOpen, setIsExpertReportModalOpen] = useState(false);

  // Effect for Theme & Low Bandwidth
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (lowBandwidth) {
      document.body.classList.add('low-bandwidth-active');
    } else {
      document.body.classList.remove('low-bandwidth-active');
    }
  }, [lowBandwidth]);

  // Update Slot image
  const handleUpdateSlot = (slotId: number, image: string | null, quality: any = 'good') => {
    setSlots(prev => prev.map(s => s.id === slotId ? { ...s, image, quality } : s));
  };

  // Update Farmer Context
  const handleUpdateContext = (updates: Partial<FarmerContext>) => {
    setFarmerContext(prev => ({ ...prev, ...updates }));
  };

  // Start Crop Check from Hero
  const handleStartCropCheck = () => {
    setActiveView('capture');
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Proceed to Step 2 (Crop & Context)
  const handleProceedToContext = () => {
    setActiveView('context');
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Trigger Crop Analysis
  const handleStartAnalysis = async () => {
    // Check if differential questions are needed for this crop
    const diffQs = AiEngine.getDifferentialQuestions(farmerContext.cropId, farmerContext);
    
    // If it's lookalike case 6 or tomato with potential ambiguity, trigger question modal if not answered
    if (diffQs.length > 0 && selectedDemoCaseId === 'demo_case_6_lookalike_differential' && Object.keys(differentialAnswers).length === 0) {
      setDifferentialQuestions(diffQs);
      setIsDiffModalOpen(true);
      return;
    }

    setActiveView('loading');
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const result = await AiEngine.analyzeCrop(
      slots,
      farmerContext,
      differentialAnswers,
      selectedDemoCaseId || undefined
    );

    setAnalysisResult(result);
    setActiveView('result');
    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Differential Answers submission
  const handleDifferentialSubmit = () => {
    setIsDiffModalOpen(false);
    handleStartAnalysis();
  };

  // Hackathon Preset Case Selector
  const handleSelectDemoCase = (caseNumber: number) => {
    const demo = HACKATHON_DEMO_CASES.find(d => d.caseNumber === caseNumber);
    if (!demo) return;

    setSelectedDemoCaseId(demo.id);
    setFarmerContext(demo.simulatedContext);

    // Fill slots with demo images
    setSlots([
      { ...slots[0], image: demo.presetImages.slot1, quality: demo.id === 'demo_case_3_poor_blurry_image' ? 'blurry' : demo.id === 'demo_case_5_non_plant' ? 'non_plant' : 'good' },
      { ...slots[1], image: demo.presetImages.slot2, quality: demo.id === 'demo_case_3_poor_blurry_image' ? 'blurry' : demo.id === 'demo_case_5_non_plant' ? 'non_plant' : 'good' },
      { ...slots[2], image: demo.presetImages.slot3, quality: demo.id === 'demo_case_3_poor_blurry_image' ? 'blurry' : demo.id === 'demo_case_5_non_plant' ? 'non_plant' : 'good' },
      { ...slots[3], image: demo.presetImages.slot4, quality: demo.id === 'demo_case_3_poor_blurry_image' ? 'blurry' : demo.id === 'demo_case_5_non_plant' ? 'non_plant' : 'good' }
    ]);

    // If Case 6, open differential question or go to capture
    if (demo.id === 'demo_case_6_lookalike_differential') {
      setActiveView('capture');
      setCurrentStep(1);
    } else {
      setActiveView('capture');
      setCurrentStep(1);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Voice Assistant diagnosis trigger
  const handleVoiceDiagnosis = (cropId: string, casePresetNumber: number) => {
    handleSelectDemoCase(casePresetNumber);
    setFarmerContext(prev => ({ ...prev, cropId }));
    setTimeout(() => {
      handleStartAnalysis();
    }, 400);
  };

  // Reset to Home
  const handleResetToHome = () => {
    setActiveView('home');
    setCurrentStep(1);
    setSelectedDemoCaseId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        userMode={userMode}
        onToggleUserMode={() => setUserMode(prev => prev === 'farmer' ? 'expert' : 'farmer')}
        lowBandwidth={lowBandwidth}
        onToggleLowBandwidth={() => setLowBandwidth(prev => !prev)}
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        onOpenVoiceAssistant={() => setIsVoiceModalOpen(true)}
        onOpenFieldScan={() => { setActiveView('field_scan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onOpenTimeline={() => { setActiveView('timeline'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onResetToHome={handleResetToHome}
        activeView={activeView}
      />

      {/* 2. Workflow Stepper (Shown during active crop check flow) */}
      {['capture', 'context', 'loading', 'result'].includes(activeView) && (
        <WorkflowStepper
          currentStep={currentStep}
          language={language}
          onStepClick={(step) => {
            if (step === 1) setActiveView('capture');
            if (step === 2) setActiveView('context');
            if (step === 4 && analysisResult) setActiveView('result');
            setCurrentStep(step);
          }}
        />
      )}

      {/* 3. Main Views */}
      <main style={{ flex: 1 }}>
        {activeView === 'home' && (
          <>
            <HeroBanner
              language={language}
              onStartCropCheck={handleStartCropCheck}
              onOpenTimeline={() => { setActiveView('timeline'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onOpenExpertHelp={() => {
                // Initialize default result if none exists to view KVK referral slip
                if (!analysisResult) {
                  AiEngine.analyzeCrop(slots, farmerContext).then(res => {
                    setAnalysisResult(res);
                    setIsExpertReportModalOpen(true);
                  });
                } else {
                  setIsExpertReportModalOpen(true);
                }
              }}
              onOpenFieldScan={() => { setActiveView('field_scan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onSelectDemoCase={handleSelectDemoCase}
            />
          </>
        )}

        {activeView === 'capture' && (
          <CameraCapture
            slots={slots}
            onUpdateSlot={handleUpdateSlot}
            onProceedToContext={handleProceedToContext}
            language={language}
            onOpenGuide={() => setIsGuideModalOpen(true)}
          />
        )}

        {activeView === 'context' && (
          <CropContextModal
            context={farmerContext}
            onUpdateContext={handleUpdateContext}
            onStartAnalysis={handleStartAnalysis}
            language={language}
            onBackToPhotos={() => { setActiveView('capture'); setCurrentStep(1); }}
          />
        )}

        {activeView === 'loading' && (
          <AnalysisLoading language={language} />
        )}

        {activeView === 'result' && analysisResult && (
          <>
            {userMode === 'expert' ? (
              <ExpertResultView
                result={analysisResult}
                language={language}
                onBackToFarmerView={() => setUserMode('farmer')}
              />
            ) : analysisResult.isUnsure ? (
              <UnsureResultView
                result={analysisResult}
                language={language}
                onRetakePhotos={() => { setActiveView('capture'); setCurrentStep(1); }}
                onOpenExpertReport={() => setIsExpertReportModalOpen(true)}
                onAskWhy={() => setIsAskWhyModalOpen(true)}
              />
            ) : (
              <FarmerResultView
                result={analysisResult}
                context={farmerContext}
                language={language}
                onSaveToMemory={() => { /* saved */ }}
                onSetReminder={() => { /* reminded */ }}
                onOpenExpertReport={() => setIsExpertReportModalOpen(true)}
                onOpenAskWhy={() => setIsAskWhyModalOpen(true)}
                onSwitchToExpertMode={() => setUserMode('expert')}
                onCheckAnotherCrop={() => {
                  setSlots(slots.map(s => ({ ...s, image: null })));
                  setSelectedDemoCaseId(null);
                  setActiveView('capture');
                  setCurrentStep(1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
          </>
        )}

        {activeView === 'field_scan' && (
          <FieldScanView
            language={language}
            onBackToHome={handleResetToHome}
            onStartSingleCropCheck={handleStartCropCheck}
          />
        )}

        {activeView === 'timeline' && (
          <CropTimelineView
            language={language}
            onBackToHome={handleResetToHome}
            onCheckNewCrop={handleStartCropCheck}
          />
        )}
      </main>

      {/* 4. Hackathon Demo Bar (Always accessible at bottom for Judges) */}
      <HackathonDemoBar
        language={language}
        selectedCaseId={selectedDemoCaseId}
        onSelectCase={handleSelectDemoCase}
      />

      {/* 5. Modals */}
      <GoodBadGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        language={language}
      />

      <DifferentialQuestionsModal
        isOpen={isDiffModalOpen}
        questions={differentialQuestions}
        answers={differentialAnswers}
        onSelectAnswer={(qid, optId) => setDifferentialAnswers(prev => ({ ...prev, [qid]: optId }))}
        onSubmit={handleDifferentialSubmit}
        language={language}
      />

      {analysisResult && (
        <>
          <AskWhyModal
            isOpen={isAskWhyModalOpen}
            onClose={() => setIsAskWhyModalOpen(false)}
            result={analysisResult}
            language={language}
          />

          <ExpertReportModal
            isOpen={isExpertReportModalOpen}
            onClose={() => setIsExpertReportModalOpen(false)}
            result={analysisResult}
            context={farmerContext}
            language={language}
          />
        </>
      )}

      <VoiceAssistantModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        language={language}
        onSelectVoiceDiagnosis={handleVoiceDiagnosis}
      />

      {/* 6. Footer */}
      <Footer language={language} />

    </div>
  );
};
