import { HackathonDemoCase } from '../types';

// Crisp, high-fidelity inline SVGs for the demo cases
export const DEMO_IMAGES = {
  healthy_tomato_plant: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23e8f5e9"/><path d="M300,380 C300,280 290,160 300,60" stroke="%232e7d32" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M300,280 Q200,240 140,260 Q180,210 295,240" fill="%2343a047"/><path d="M300,230 Q400,190 460,210 Q420,160 305,200" fill="%2343a047"/><path d="M300,160 Q210,120 160,130 Q190,90 295,130" fill="%234caf50"/><path d="M300,110 Q380,80 430,90 Q400,50 305,80" fill="%234caf50"/><circle cx="280" cy="180" r="16" fill="%23e53935"/><circle cx="340" cy="220" r="14" fill="%23e53935"/><text x="300" y="380" font-family="sans-serif" font-size="16" fill="%231b5e20" font-weight="bold" text-anchor="middle">Vibrant Lush Canopy - Healthy Foliage</text></svg>`,
  
  early_blight_leaf: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23f1f8e9"/><path d="M120,200 Q280,60 480,200 Q280,340 120,200 Z" fill="%23689f38"/><path d="M120,200 Q300,200 480,200" stroke="%2333691e" stroke-width="4"/><circle cx="320" cy="160" r="38" fill="%23fbc02d" opacity="0.8"/><circle cx="320" cy="160" r="30" fill="%235d4037"/><circle cx="320" cy="160" r="22" fill="%233e2723"/><circle cx="320" cy="160" r="14" fill="%23212121"/><circle cx="320" cy="160" r="6" fill="%23000000"/><circle cx="230" cy="240" r="28" fill="%23fbc02d" opacity="0.8"/><circle cx="230" cy="240" r="20" fill="%235d4037"/><circle cx="230" cy="240" r="12" fill="%233e2723"/><circle cx="410" cy="220" r="22" fill="%23fbc02d" opacity="0.8"/><circle cx="410" cy="220" r="14" fill="%234e342e"/><text x="300" y="380" font-family="sans-serif" font-size="16" fill="%233e2723" font-weight="bold" text-anchor="middle">Concentric Bullseye Rings & Yellow Halos</text></svg>`,
  
  blurry_leaf_image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><filter id="extreme-blur"><feGaussianBlur stdDeviation="16" /></filter></defs><rect width="600" height="400" fill="%2381c784" filter="url(%23extreme-blur)"/><circle cx="300" cy="200" r="120" fill="%23aed581" filter="url(%23extreme-blur)"/><circle cx="240" cy="180" r="60" fill="%23795548" filter="url(%23extreme-blur)"/><rect x="150" y="160" width="300" height="80" rx="12" fill="rgba(0,0,0,0.6)"/><text x="300" y="208" font-family="sans-serif" font-size="20" fill="%23ffffff" font-weight="bold" text-anchor="middle">⚠️ Severe Motion Blur / Out of Focus</text></svg>`,
  
  non_plant_cat: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23ffe0b2"/><polygon points="200,120 230,220 170,200" fill="%23ff9800"/><polygon points="400,120 370,220 430,200" fill="%23ff9800"/><circle cx="300" cy="240" r="110" fill="%23ffa726"/><circle cx="260" cy="220" r="16" fill="%232e7d32"/><circle cx="340" cy="220" r="16" fill="%232e7d32"/><polygon points="300,260 288,275 312,275" fill="%23e91e63"/><line x1="220" y1="270" x2="140" y2="260" stroke="%23ffffff" stroke-width="4"/><line x1="220" y1="280" x2="140" y2="290" stroke="%23ffffff" stroke-width="4"/><line x1="380" y1="270" x2="460" y2="260" stroke="%23ffffff" stroke-width="4"/><line x1="380" y1="280" x2="460" y2="290" stroke="%23ffffff" stroke-width="4"/><rect x="100" y="330" width="400" height="50" rx="10" fill="%23d32f2f"/><text x="300" y="362" font-family="sans-serif" font-size="18" fill="%23ffffff" font-weight="bold" text-anchor="middle">🚫 NON-PLANT DETECTED (Domestic Cat)</text></svg>`,
  
  septoria_leaf_spots: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23e8f5e9"/><path d="M120,200 Q280,60 480,200 Q280,340 120,200 Z" fill="%237cb342"/><g fill="%23e0e0e0" stroke="%23212121" stroke-width="2"><circle cx="220" cy="160" r="10"/><circle cx="280" cy="140" r="8"/><circle cx="350" cy="150" r="9"/><circle cx="240" cy="220" r="11"/><circle cx="310" cy="230" r="8"/><circle cx="390" cy="210" r="12"/><circle cx="420" cy="170" r="7"/><circle cx="180" cy="210" r="8"/></g><g fill="%23000000"><circle cx="220" cy="160" r="2"/><circle cx="240" cy="220" r="2"/><circle cx="390" cy="210" r="2"/></g><text x="300" y="380" font-family="sans-serif" font-size="16" fill="%23212121" font-weight="bold" text-anchor="middle">Tiny Circular Spots with Grey Centers (Septoria)</text></svg>`,
  
  cotton_red_deficiency: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23efebe9"/><path d="M300,80 C360,140 460,170 470,270 C440,350 360,370 300,320 C240,370 160,350 130,270 C140,170 240,140 300,80 Z" fill="%23c2185b"/><path d="M300,80 L300,340" stroke="%232e7d32" stroke-width="12" stroke-linecap="round"/><path d="M300,160 L200,220" stroke="%232e7d32" stroke-width="8" stroke-linecap="round"/><path d="M300,160 L400,220" stroke="%232e7d32" stroke-width="8" stroke-linecap="round"/><path d="M300,240 L190,300" stroke="%232e7d32" stroke-width="8" stroke-linecap="round"/><path d="M300,240 L410,300" stroke="%232e7d32" stroke-width="8" stroke-linecap="round"/><text x="300" y="380" font-family="sans-serif" font-size="16" fill="%23880e4f" font-weight="bold" text-anchor="middle">Interveinal Reddening with Dark Green Veins</text></svg>`,
  
  rare_unknown_condition: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23f5f5f5"/><path d="M150,200 Q300,80 450,200 Q300,320 150,200 Z" fill="%239e9e9e"/><path d="M220,180 Q320,120 380,220" stroke="%23616161" stroke-width="16" stroke-dasharray="8,8"/><text x="300" y="210" font-family="sans-serif" font-size="44" fill="%23ffffff" font-weight="bold" text-anchor="middle">❓</text><text x="300" y="370" font-family="sans-serif" font-size="16" fill="%23424242" font-weight="bold" text-anchor="middle">Ambiguous Atypical Pathology - Low Confidence</text></svg>`
};

export const HACKATHON_DEMO_CASES: HackathonDemoCase[] = [
  {
    id: 'demo_case_1_healthy',
    caseNumber: 1,
    titleEn: 'Case 1: Healthy Tomato Plant',
    titleHi: 'केस 1: स्वस्थ टमाटर का पौधा',
    titleMr: 'केस १: निरोगी टोमॅटोचे पीक',
    tag: 'Healthy Plant',
    tagColor: 'green',
    descriptionEn: 'Vibrant green canopy, zero pathogen lesions, balanced growth. AI confirms healthy condition and avoids recommending any chemical spray.',
    descriptionHi: 'स्वस्थ हरी पत्तियां, कोई रोग नहीं। AI बिना किसी रासायनिक दवा की सिफारिश किए स्वस्थ स्थिति की पुष्टि करता है।',
    descriptionMr: 'निरोगी हिरवीगार पाने, कोणताही रोग नाही. AI रासायनिक फवारणी टाळून निरोगी स्थिती दर्शवतो.',
    judgeNote: 'Crucial verification that the system does not hallucinate diseases or push chemical treatments on healthy crops.',
    cropId: 'tomato',
    presetImages: {
      slot1: DEMO_IMAGES.healthy_tomato_plant,
      slot2: DEMO_IMAGES.healthy_tomato_plant,
      slot3: DEMO_IMAGES.healthy_tomato_plant,
      slot4: DEMO_IMAGES.healthy_tomato_plant
    },
    simulatedContext: {
      cropId: 'tomato',
      noticedWhen: 'today',
      isSpreading: 'no',
      recentRain: false,
      region: 'Maharashtra',
      weatherTemp: 27,
      weatherHumidity: 55
    },
    expectedResult: {
      conditionNameEn: 'Healthy Tomato Crop (No Disease Detected)',
      conditionNameHi: 'स्वस्थ टमाटर फसल (कोई रोग नहीं मिला)',
      conditionNameMr: 'निरोगी टोमॅटो पीक (कोणताही रोग नाही)',
      problemType: 'healthy',
      confidence: 'high',
      isUnsure: false,
      diseaseStage: 'early'
    }
  },
  {
    id: 'demo_case_2_clear_early_blight',
    caseNumber: 2,
    titleEn: 'Case 2: Clear Tomato Early Blight',
    titleHi: 'केस 2: स्पष्ट अगेती झुलसा (Early Blight)',
    titleMr: 'केस २: स्पष्ट अगेती करपा (Early Blight)',
    tag: 'High Confidence Disease',
    tagColor: 'green',
    descriptionEn: 'Classic concentric bullseye target rings on lower leaves with yellow halos. Multi-image consistency is 100%. Structured DO NOW / AVOID advisory shown.',
    descriptionHi: 'निचले पत्तों पर छल्लेदार काले धब्बे और पीला घेरा। चारों तस्वीरें पुष्टि करती हैं। सुरक्षित सलाह उपलब्ध।',
    descriptionMr: 'खालच्या पानांवर स्पष्ट गोलाकार वलयाकार काळे डाग. चारही फोटोंची १००% सुसंगतता. सुरक्षित उपाय योजना.',
    judgeNote: 'Demonstrates end-to-end multi-image synthesis, ICAR advisory source linking, and non-toxic safe treatment protocols.',
    cropId: 'tomato',
    presetImages: {
      slot1: DEMO_IMAGES.healthy_tomato_plant,
      slot2: DEMO_IMAGES.early_blight_leaf,
      slot3: DEMO_IMAGES.early_blight_leaf,
      slot4: DEMO_IMAGES.early_blight_leaf
    },
    simulatedContext: {
      cropId: 'tomato',
      noticedWhen: 'few_days',
      isSpreading: 'yes',
      recentRain: true,
      region: 'Maharashtra',
      weatherTemp: 26,
      weatherHumidity: 82
    },
    expectedResult: {
      conditionNameEn: 'Tomato Early Blight (Alternaria solani)',
      problemType: 'fungal',
      confidence: 'high',
      isUnsure: false,
      diseaseStage: 'developing'
    }
  },
  {
    id: 'demo_case_3_poor_blurry_image',
    caseNumber: 3,
    titleEn: 'Case 3: Poor / Blurry Image (Quality Gate)',
    titleHi: 'केस 3: धुंधली तस्वीर (क्वालिटी गेट)',
    titleMr: 'केस ३: अंधुक फोटो (क्वालिटी गेट)',
    tag: 'Quality Gate Block',
    tagColor: 'amber',
    descriptionEn: 'Severe camera blur and lack of focal sharpness. Quality Gate blocks disease prediction and gives actionable retake instructions.',
    descriptionHi: 'अत्यधिक धुंधली तस्वीर। AI बीमारी का अनुमान लगाने के बजाय दोबारा साफ फोटो लेने का निर्देश देता है।',
    descriptionMr: 'अतिशय अंधुक व हललेला फोटो. AI अंदाज न लावता स्पष्ट फोटो पुन्हा काढण्याची सूचना देतो.',
    judgeNote: 'PS-07 Core Requirement: System must reject poor inputs rather than producing a low-confidence false guess.',
    cropId: 'tomato',
    presetImages: {
      slot1: DEMO_IMAGES.blurry_leaf_image,
      slot2: DEMO_IMAGES.blurry_leaf_image,
      slot3: DEMO_IMAGES.blurry_leaf_image,
      slot4: DEMO_IMAGES.blurry_leaf_image
    },
    simulatedContext: {
      cropId: 'tomato',
      noticedWhen: 'dont_know',
      isSpreading: 'dont_know',
      recentRain: false,
      region: 'Karnataka',
      weatherTemp: 28,
      weatherHumidity: 60
    },
    expectedResult: {
      isUnsure: true,
      confidence: 'unsure'
    }
  },
  {
    id: 'demo_case_4_unknown_disease',
    caseNumber: 4,
    titleEn: 'Case 4: Unknown / Atypical Condition (Unsure Engine)',
    titleHi: 'केस 4: अज्ञात/दुर्लभ रोग (Unsure Engine)',
    titleMr: 'केस ४: दुर्मीळ किंवा अनोळखी लक्षणे',
    tag: '“We Are Not Sure” Engine',
    tagColor: 'purple',
    descriptionEn: 'Atypical lesions outside verified dataset thresholds. Instead of hallucinating, AI explicitly states "WE ARE NOT SURE" and tells the farmer what to photograph next.',
    descriptionHi: 'असामान्य लक्षण जो किसी ज्ञात डेटाबेस से मेल नहीं खाते। AI तुक्का नहीं लगाता और साफ कहता है "हम निश्चित नहीं हैं"।',
    descriptionMr: 'अनोळखी लक्षणे. AI खोटा अंदाज न बांधता स्पष्ट सांगतो "आम्हाला खात्री नाही" आणि पुढील फोटो काय काढावा ते सुचवतो.',
    judgeNote: 'Directly validates our product motto: “AI that knows when it doesn’t know” and guides expert KVK escalation.',
    cropId: 'tomato',
    presetImages: {
      slot1: DEMO_IMAGES.rare_unknown_condition,
      slot2: DEMO_IMAGES.rare_unknown_condition,
      slot3: DEMO_IMAGES.rare_unknown_condition,
      slot4: DEMO_IMAGES.rare_unknown_condition
    },
    simulatedContext: {
      cropId: 'tomato',
      noticedWhen: 'week_plus',
      isSpreading: 'dont_know',
      recentRain: true,
      region: 'Punjab',
      weatherTemp: 22,
      weatherHumidity: 70
    },
    expectedResult: {
      isUnsure: true,
      confidence: 'unsure'
    }
  },
  {
    id: 'demo_case_5_non_plant',
    caseNumber: 5,
    titleEn: 'Case 5: Non-Plant Image (Cat / Car / Coffee Mug)',
    titleHi: 'केस 5: गैर-पौधा (बिल्ली/कार/कप)',
    titleMr: 'केस ५: बिगर-वनस्पती फोटो (मांजर/वस्तू)',
    tag: 'Safety Guardrail',
    tagColor: 'red',
    descriptionEn: 'User uploads a photo of a domestic animal or object. Vision pre-check intercepts immediately with polite guidance.',
    descriptionHi: 'उपयोगकर्ता ने बिल्ली या गैर-पौधे का फोटो डाला। सिस्टम तुरंत पहचान कर फसल का फोटो मांगने का निर्देश देता है।',
    descriptionMr: 'वापरकर्त्याने प्राण्याचा फोटो टाकला. सिस्टम लगेच ओळखून पिकाचा फोटो देण्याची विनंती करते.',
    judgeNote: 'Guarantees the system never attempts disease classification on non-agricultural imagery.',
    cropId: 'tomato',
    presetImages: {
      slot1: DEMO_IMAGES.non_plant_cat,
      slot2: DEMO_IMAGES.non_plant_cat,
      slot3: DEMO_IMAGES.non_plant_cat,
      slot4: DEMO_IMAGES.non_plant_cat
    },
    simulatedContext: {
      cropId: 'tomato',
      noticedWhen: 'today',
      isSpreading: 'no',
      recentRain: false,
      region: 'Maharashtra'
    },
    expectedResult: {
      isUnsure: true,
      confidence: 'unsure'
    }
  },
  {
    id: 'demo_case_6_lookalike_differential',
    caseNumber: 6,
    titleEn: 'Case 6: Lookalike Differential (Early Blight vs Septoria)',
    titleHi: 'केस 6: दो मिलती-जुलती बीमारियां',
    titleMr: 'केस ६: दोन सारखे दिसणारे रोग (Differential)',
    tag: 'Smart Follow-up Trigger',
    tagColor: 'blue',
    descriptionEn: 'Symptoms match both Early Blight and Septoria Leaf Spot. System prompts targeted follow-up question with "Why are we asking?" explainability.',
    descriptionHi: 'लक्षण अगेती झुलसा और सेप्टोरिया दोनों से मिलते हैं। AI सटीक पहचान के लिए एक छोटा सवाल पूछता है।',
    descriptionMr: 'लक्षणे अगेती करपा आणि सेप्टोरिया दोघांशी जुळतात. AI अचूकतेसाठी स्पष्टीकरणासह छोटा प्रश्न विचारतो.',
    judgeNote: 'Demonstrates conversational intelligence and differential diagnostic reasoning before locking in advice.',
    cropId: 'tomato',
    presetImages: {
      slot1: DEMO_IMAGES.healthy_tomato_plant,
      slot2: DEMO_IMAGES.septoria_leaf_spots,
      slot3: DEMO_IMAGES.early_blight_leaf,
      slot4: DEMO_IMAGES.septoria_leaf_spots
    },
    simulatedContext: {
      cropId: 'tomato',
      noticedWhen: 'few_days',
      isSpreading: 'yes',
      recentRain: true,
      region: 'Uttar Pradesh',
      weatherTemp: 25,
      weatherHumidity: 88
    },
    expectedResult: {
      conditionNameEn: 'Tomato Septoria Leaf Spot vs Early Blight',
      problemType: 'fungal',
      confidence: 'medium',
      isUnsure: false
    }
  },
  {
    id: 'demo_case_7_conflicting_angles',
    caseNumber: 7,
    titleEn: 'Case 7: Conflicting Multi-Image Evidence',
    titleHi: 'केस 7: विरोधाभासी बहु-फोटो प्रमाण',
    titleMr: 'केस ७: विसंगत बहु-फोटो पुरावे',
    tag: 'Multi-Image Logic',
    tagColor: 'amber',
    descriptionEn: 'Slot 1 & 4 show pristine green canopy while Slot 2 shows isolated mechanical tearing. AI reports "1 of 4 photos shows symptoms" and rules out field-wide systemic disease.',
    descriptionHi: 'तीन फोटो स्वस्थ हैं और एक पर हल्का दाग है। AI "1 of 4" रिपोर्ट करता है और पूरे खेत में दवा डालने से रोकता है।',
    descriptionMr: 'तीन फोटो निरोगी आहेत व एकावर छोटा डाग आहे. AI "१ पैकी ४" दाखवून संपूर्ण पिकावर औषध फवारणी टाळतो.',
    judgeNote: 'Demonstrates that the AI does not just blindly average outputs; it performs spatial coherence cross-checking.',
    cropId: 'tomato',
    presetImages: {
      slot1: DEMO_IMAGES.healthy_tomato_plant,
      slot2: DEMO_IMAGES.early_blight_leaf,
      slot3: DEMO_IMAGES.healthy_tomato_plant,
      slot4: DEMO_IMAGES.healthy_tomato_plant
    },
    simulatedContext: {
      cropId: 'tomato',
      noticedWhen: 'today',
      isSpreading: 'no',
      recentRain: false,
      region: 'Maharashtra',
      weatherTemp: 29,
      weatherHumidity: 50
    },
    expectedResult: {
      conditionNameEn: 'Isolated Foliar Lesion (Low Severity)',
      problemType: 'fungal',
      confidence: 'medium',
      isUnsure: false,
      diseaseStage: 'early'
    }
  },
  {
    id: 'demo_case_8_nutrient_deficiency',
    caseNumber: 8,
    titleEn: 'Case 8: Abiotic Stress / Nutrient Deficiency',
    titleHi: 'केस 8: पोषक तत्वों की कमी (रोग नहीं)',
    titleMr: 'केस ८: अन्नद्रव्यांची कमतरता (रोग नाही)',
    tag: 'Pesticide Misuse Prevention',
    tagColor: 'green',
    descriptionEn: 'Purplish-red leaves with dark green veins in Cotton. System identifies Magnesium & Nitrogen deficiency and warns: "DO NOT SPRAY FUNGICIDES".',
    descriptionHi: 'कपास में लाल-बैंगनी पत्तियां व हरी नसें। AI इसे मैग्नीशियम की कमी पहचानता है और फंगीसाइड छिड़कने से मना करता है।',
    descriptionMr: 'कापसावर लालसर पाने व हिरव्या शिरा. AI याला मॅग्नेशियम कमतरता (लाल्या) ओळखतो व बुरशीनाशक फवारण्यास सक्त मनाई करतो.',
    judgeNote: 'Saves farmers money and soil health by distinguishing nutritional deficiency from infectious microbial disease.',
    cropId: 'cotton',
    presetImages: {
      slot1: DEMO_IMAGES.cotton_red_deficiency,
      slot2: DEMO_IMAGES.cotton_red_deficiency,
      slot3: DEMO_IMAGES.cotton_red_deficiency,
      slot4: DEMO_IMAGES.cotton_red_deficiency
    },
    simulatedContext: {
      cropId: 'cotton',
      noticedWhen: 'week_plus',
      isSpreading: 'yes',
      recentRain: true,
      region: 'Maharashtra',
      weatherTemp: 31,
      weatherHumidity: 65
    },
    expectedResult: {
      conditionNameEn: 'Cotton Nitrogen & Magnesium Deficiency (Abiotic Stress)',
      problemType: 'nutrient_deficiency',
      confidence: 'high',
      isUnsure: false,
      diseaseStage: 'developing'
    }
  }
];
