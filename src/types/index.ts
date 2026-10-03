export type Language = 'en' | 'hi' | 'mr';

export type UserMode = 'farmer' | 'expert';

export type ConfidenceLevel = 'high' | 'medium' | 'unsure';

export type DiseaseStage = 'early' | 'developing' | 'advanced' | 'severe' | 'unknown';

export type ProblemType = 
  | 'fungal' 
  | 'bacterial' 
  | 'viral' 
  | 'pest' 
  | 'nutrient_deficiency' 
  | 'water_stress' 
  | 'heat_stress' 
  | 'cold_stress'
  | 'chemical_injury' 
  | 'physical_damage' 
  | 'healthy'
  | 'unknown';

export interface CropInfo {
  id: string;
  nameEn: string;
  nameHi: string;
  nameMr: string;
  scientificName: string;
  category: string;
  icon: string;
  description: string;
  commonDiseases: string[];
}

export interface PhotoSlot {
  id: number;
  labelEn: string;
  labelHi: string;
  labelMr: string;
  descEn: string;
  descHi: string;
  descMr: string;
  required: boolean;
  image: string | null;
  quality: 'good' | 'blurry' | 'dark' | 'overexposed' | 'non_plant' | 'insufficient';
  qualityReason?: string;
  featuresDetected?: string[];
}

export interface ImageQualityGateResult {
  passed: boolean;
  isPlant: boolean;
  nonPlantLabel?: string;
  issues: string[];
  guidanceEn: string;
  guidanceHi: string;
  guidanceMr: string;
  suggestedAction: 'retake' | 'proceed' | 'reject';
}

export interface AgriculturalSource {
  id: string;
  sourceName: string;
  organization: string; // e.g., 'ICAR - Indian Council of Agricultural Research', 'FAO', 'TNAU Agritech'
  url?: string;
  recommendation: string;
  publishedYear?: number;
  confidenceSupport: 'strong' | 'moderate' | 'conflicting';
}

export interface TreatmentAdvice {
  doNow: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  watchFor: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  avoid: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  prevention: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  expertEscalation: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  safetyVerified: boolean;
  safetyNote?: string;
}

export interface DifferentialHypothesis {
  conditionNameEn: string;
  conditionNameHi: string;
  conditionNameMr: string;
  probability: number; // 0-100
  whyPossibleEn: string;
  whyPossibleHi: string;
  whyPossibleMr: string;
  distinguishingFeaturesEn: string;
  distinguishingFeaturesHi: string;
  distinguishingFeaturesMr: string;
  problemType: ProblemType;
}

export interface MultiImageEvidence {
  totalImages: number;
  supportingImagesCount: number;
  conflictingImagesCount: number;
  summaryEn: string;
  summaryHi: string;
  summaryMr: string;
  perImageDetails: {
    slotId: number;
    observationEn: string;
    observationHi: string;
    observationMr: string;
    supportsMainDiagnosis: boolean;
  }[];
}

export interface ConfidenceBreakdown {
  imageQuality: 'Strong' | 'Moderate' | 'Poor';
  cropIdentification: 'Strong' | 'Needs Confirmation' | 'Uncertain';
  visualSymptomMatch: 'Strong' | 'Moderate' | 'Weak';
  sourceEvidence: 'Strong' | 'Moderate' | 'Conflicting' | 'Unavailable';
  environmentalConsistency: 'Strong' | 'Moderate' | 'Weak' | 'Contradictory';
  overallAssessment: 'Strong' | 'Moderate' | 'Unsure';
  radarScores: {
    imageQualityScore: number;
    cropIdScore: number;
    symptomMatchScore: number;
    knowledgeSupportScore: number;
    environmentalScore: number;
  };
}

export interface AnalysisResult {
  id: string;
  timestamp: string;
  crop: CropInfo;
  cropConfirmed: boolean;
  cropIdConfidence: 'clear' | 'needs_confirmation';
  
  isUnsure: boolean;
  unsureReasonEn?: string;
  unsureReasonHi?: string;
  unsureReasonMr?: string;
  
  conditionNameEn: string;
  conditionNameHi: string;
  conditionNameMr: string;
  scientificConditionName?: string;
  problemType: ProblemType;
  confidence: ConfidenceLevel;
  confidenceBreakdown: ConfidenceBreakdown;
  
  diseaseStage: DiseaseStage;
  stageExplanationEn: string;
  stageExplanationHi: string;
  stageExplanationMr: string;
  
  multiImageEvidence: MultiImageEvidence;
  
  simpleSummaryEn: string;
  simpleSummaryHi: string;
  simpleSummaryMr: string;
  
  whyReasoningEn: string[];
  whyReasoningHi: string[];
  whyReasoningMr: string[];
  
  whatCouldChangeResultEn: string;
  whatCouldChangeResultHi: string;
  whatCouldChangeResultMr: string;
  
  whatToPhotographNextEn: string;
  whatToPhotographNextHi: string;
  whatToPhotographNextMr: string;
  
  differentialCauses: DifferentialHypothesis[];
  
  aiObservationEn: string;
  agriculturalEvidenceEn: string;
  finalAssessmentEn: string;
  
  sources: AgriculturalSource[];
  hasConflictingSources: boolean;
  conflictDescriptionEn?: string;
  conflictDescriptionHi?: string;
  conflictDescriptionMr?: string;
  
  environmentalContextNoteEn: string;
  environmentalContextNoteHi: string;
  environmentalContextNoteMr: string;
  
  treatment: TreatmentAdvice;
  
  modelLimitationsNoteEn: string;
  modelLimitationsNoteHi: string;
  modelLimitationsNoteMr: string;
}

export interface FarmerContext {
  cropId: string;
  noticedWhen: 'today' | 'few_days' | 'week_plus' | 'dont_know';
  isSpreading: 'yes' | 'no' | 'dont_know';
  recentRain: boolean;
  weatherTemp?: number;
  weatherHumidity?: number;
  region: string;
  previousTreatment?: string;
}

export interface DifferentialQuestion {
  id: string;
  questionEn: string;
  questionHi: string;
  questionMr: string;
  whyAskingEn: string;
  whyAskingHi: string;
  whyAskingMr: string;
  options: {
    id: string;
    labelEn: string;
    labelHi: string;
    labelMr: string;
    favorHypothesis: string;
  }[];
}

export interface CropTimelineEntry {
  id: string;
  cropName: string;
  date: string;
  stage: string;
  status: 'improving' | 'stable' | 'worsened' | 'initial';
  notes: string;
  imageUrl: string;
  treatmentApplied?: string;
}

export interface FieldScanPlant {
  id: number;
  name: string;
  gridX: number;
  gridY: number;
  status: 'healthy' | 'suspected' | 'affected';
  symptom: string;
  image: string;
}

export interface HackathonDemoCase {
  id: string;
  caseNumber: number;
  titleEn: string;
  titleHi: string;
  titleMr: string;
  tag: string;
  tagColor: 'green' | 'amber' | 'red' | 'blue' | 'purple';
  descriptionEn: string;
  descriptionHi: string;
  descriptionMr: string;
  judgeNote: string;
  cropId: string;
  presetImages: {
    slot1: string;
    slot2: string;
    slot3: string;
    slot4: string;
  };
  simulatedContext: FarmerContext;
  expectedResult: Partial<AnalysisResult>;
}
