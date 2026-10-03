import { DifferentialHypothesis, ProblemType, TreatmentAdvice, AgriculturalSource } from '../types';
import { AGRICULTURAL_SOURCES } from './advisorySources';

export interface DiseaseKnowledgeItem {
  id: string;
  cropId: string;
  nameEn: string;
  nameHi: string;
  nameMr: string;
  scientificConditionName: string;
  problemType: ProblemType;
  symptomsEn: string[];
  symptomsHi: string[];
  symptomsMr: string[];
  visualMarkersEn: string[];
  stageCharacteristics: {
    early: string;
    developing: string;
    advanced: string;
    severe: string;
  };
  differentialCauses: DifferentialHypothesis[];
  sources: AgriculturalSource[];
  treatment: TreatmentAdvice;
  whatCouldChangeResultEn: string;
  whatCouldChangeResultHi: string;
  whatCouldChangeResultMr: string;
  whatToPhotographNextEn: string;
  whatToPhotographNextHi: string;
  whatToPhotographNextMr: string;
  whyReasoningEn: string[];
  whyReasoningHi: string[];
  whyReasoningMr: string[];
  environmentalRiskEn: string;
  environmentalRiskHi: string;
  environmentalRiskMr: string;
}

export const DISEASES_DATABASE: Record<string, DiseaseKnowledgeItem> = {
  'tomato_early_blight': {
    id: 'tomato_early_blight',
    cropId: 'tomato',
    nameEn: 'Tomato Early Blight',
    nameHi: 'टमाटर का अगेती झुलसा (Early Blight)',
    nameMr: 'टोमॅटोचा करपा / अगेती करपा',
    scientificConditionName: 'Alternaria solani',
    problemType: 'fungal',
    symptomsEn: [
      'Brown or black concentric target-ring spots on older leaves',
      'Yellow chlorotic halos surrounding lesions',
      'Lower foliage showing premature withering',
      'Dark sunken stem cankers near soil level'
    ],
    symptomsHi: [
      'निचले पुराने पत्तों पर भूरे या काले गोल छल्लेदार (Target-board) धब्बे',
      'धब्बों के चारों ओर हल्का पीला घेरा',
      'निचले पत्तों का सूखकर झड़ना',
      'तने पर जमीन के पास काले धब्बे'
    ],
    symptomsMr: [
      'खालच्या जुन्या पानांवर गोलाकार काळे किंवा तपकिरी गोल वलयाकार डाग',
      'डागांच्या भोवती पिवळसर कड (Yellow Halo)',
      'खालची पाने पिवळी पडून गळणे',
      'खोडावर काळपट चट्टे'
    ],
    visualMarkersEn: ['Concentric bullseye rings', 'Lower canopy chlorosis', 'Distinct lesion margins'],
    stageCharacteristics: {
      early: 'Small (1-2mm) brown spots on oldest bottom leaves only.',
      developing: 'Spots enlarge to 5-10mm with visible concentric target rings and yellow halos.',
      advanced: 'Lesions coalesce causing large leaf sections to turn brown, dry out, and drop.',
      severe: 'Extensive canopy defoliation, stem lesions, and fruit rot near stem calyx.'
    },
    differentialCauses: [
      {
        conditionNameEn: 'Early Blight (Alternaria solani)',
        conditionNameHi: 'अगेती झुलसा (Early Blight)',
        conditionNameMr: 'अगेती करपा (Early Blight)',
        probability: 78,
        whyPossibleEn: 'Concentric ring pattern and yellow halo on mature foliage are primary markers.',
        whyPossibleHi: 'पुराने पत्तों पर छल्लेदार धब्बे और पीला घेरा मुख्य लक्षण हैं।',
        whyPossibleMr: 'जुन्या पानांवर गोलाकार कड्यांचे डाग आणि पिवळी कड हे मुख्य लक्षण आहे.',
        distinguishingFeaturesEn: 'Distinct concentric rings like a target board; starts on oldest leaves first.',
        distinguishingFeaturesHi: 'निशाने जैसा गोल चक्र (Target board); सबसे पहले पुराने निचले पत्तों से शुरू होता है।',
        distinguishingFeaturesMr: 'निशाण्यासारखे गोल वलय; सर्वात आधी झाडाच्या खालच्या जुन्या पानांवर दिसते.',
        problemType: 'fungal'
      },
      {
        conditionNameEn: 'Septoria Leaf Spot (Septoria lycopersici)',
        conditionNameHi: 'सेप्टोरिया लीफ स्पॉट',
        conditionNameMr: 'सेप्टोरिया पानावरील ठिपके',
        probability: 15,
        whyPossibleEn: 'Numerous small circular leaf spots with dark borders can appear similar in early stages.',
        whyPossibleHi: 'शुरुआत में काले किनारे वाले छोटे-छोटे गोल धब्बे सेप्टोरिया जैसे लग सकते हैं।',
        whyPossibleMr: 'सुरुवातीला काळ्या कडा असलेले लहान गोल ठिपके सेप्टोरियासारखे दिसू शकतात.',
        distinguishingFeaturesEn: 'Septoria spots are smaller (1-3mm) with light grey or white centers and tiny black specks (pycnidia).',
        distinguishingFeaturesHi: 'सेप्टोरिया के धब्बे छोटे होते हैं और उनका बीच का हिस्सा सफेद/धूसर होता है।',
        distinguishingFeaturesMr: 'सेप्टोरियाचे डाग आकाराने लहान असतात व डागाचा मध्यभाग पांढरा/राखाडी असतो.',
        problemType: 'fungal'
      },
      {
        conditionNameEn: 'Nitrogen & Potassium Deficiency',
        conditionNameHi: 'नाइट्रोजन व पोटाश की कमी',
        conditionNameMr: 'नायट्रोजन व पोटॅश अन्नद्रव्यांची कमतरता',
        probability: 7,
        whyPossibleEn: 'Older bottom leaves turning yellow can mimic early blight chlorosis.',
        whyPossibleHi: 'निचले पत्तों का पीला होना पोषक तत्वों की कमी से भी हो सकता है।',
        whyPossibleMr: 'खालची पाने पिवळी पडणे हे अन्नद्रव्यांच्या कमतरतेमुळेही होऊ शकते.',
        distinguishingFeaturesEn: 'Deficiency causes uniform yellowing without distinct concentric dark fungal lesions.',
        distinguishingFeaturesHi: 'पोषक तत्व की कमी में पूरा पत्ता एक समान पीला होता है, काले गोल धब्बे नहीं होते।',
        distinguishingFeaturesMr: 'कमतरतेमध्ये संपूर्ण पान पिवळे पडते, त्यावर बुरशीचे काळे गोलाकार डाग नसतात.',
        problemType: 'nutrient_deficiency'
      }
    ],
    sources: [
      AGRICULTURAL_SOURCES.icar_tomato_bulletin,
      AGRICULTURAL_SOURCES.fao_pest_management,
      AGRICULTURAL_SOURCES.tnau_agritech
    ],
    treatment: {
      safetyVerified: true,
      doNow: {
        en: [
          'Sanitize and gently prune severely spotted bottom leaves; place them in a bag and discard away from the field.',
          'Adjust irrigation to ground-level drip or furrow; completely avoid splashing water on foliage.',
          'Stake or tie plants upright to keep leaves from touching moist soil.'
        ],
        hi: [
          'अधिक प्रभावित निचले पत्तों को काटकर पॉलीथीन बैग में भरकर खेत से दूर नष्ट करें।',
          'पानी सीधे जड़ों में दें; पत्तों पर पानी छिड़कने या फव्वारे से बचें।',
          'पौधों को डंडियों से सहारा दें ताकि पत्ते गीली मिट्टी को न छुएं।'
        ],
        mr: [
          'जास्त डाग पडलेली खालची पाने काळजीपूर्वक तोडून पिशवीत भरा व शेताबाहेर नष्ट करा.',
          'झाडांना ठिबक किंवा खोडाजवळ पाणी द्या; पानांवर पाणी उडणार नाही याची काळजी घ्या.',
          'झाडांना काठीचा आधार देऊन बांधा, जेणेकरून पाने जमिनीतील ओल्या मातीला टेकणार नाहीत.'
        ]
      },
      watchFor: {
        en: [
          'Watch if concentric spots begin appearing on upper younger leaves over the next 3–4 days.',
          'Inspect stems near leaf joints for dark elongated lesions.'
        ],
        hi: [
          'अगले 3-4 दिनों में देखें कि क्या नए ऊपरी पत्तों पर भी गोल धब्बे आ रहे हैं।',
          'तने और शाखाओं के जोड़ों पर काले धब्बों की निगरानी करें।'
        ],
        mr: [
          'पुढील ३-४ दिवसांत वरच्या नवीन पानांवरही डाग पसरत आहेत का ते तपासा.',
          'खोडावर आणि फांद्यांच्या बेचक्यात काळे चट्टे येत आहेत का यावर लक्ष ठेवा.'
        ]
      },
      avoid: {
        en: [
          'DO NOT spray unverified chemical fungicides without local agronomist confirmation.',
          'DO NOT irrigate during late evening when leaves remain wet overnight.',
          'DO NOT handle or prune wet plants to avoid spreading fungal spores.'
        ],
        hi: [
          'बिना कृषि वैज्ञानिक की सलाह के तुरंत तेज रसायनों का छिड़काव न करें।',
          'शाम या रात के समय सिंचाई न करें जिससे पत्ते रातभर गीले रहें।',
          'गीले पौधों पर काम या छंटाई न करें क्योंकि इससे फंगस तेजी से फैलता है।'
        ],
        mr: [
          'कृषी तज्ज्ञांच्या सल्ल्याशिवाय थेट तीव्र रासायनिक बुरशीनाशके फवारू नका.',
          'संध्याकाळी उशिरा पाणी देऊ नका ज्यामुळे पाने रात्रभर ओली राहतील.',
          'झाडे ओली असताना छाटणी किंवा काम करू नका, यामुळे बुरशी शेतात वेगाने पसरते.'
        ]
      },
      prevention: {
        en: [
          'Maintain adequate plant spacing (60 x 45 cm) for proper air circulation.',
          'Apply organic neem cake or bio-fungicide (Trichoderma viride) to root zone.',
          'Practice 2-year crop rotation avoiding tomato, potato, and brinjal in the same bed.'
        ],
        hi: [
          'पौधों के बीच उचित दूरी (60 x 45 सेमी) रखें ताकि हवा का संचार अच्छा रहे।',
          'जड़ों में नीम की खली या ट्राइकोडर्मा (Trichoderma) का उपयोग करें।',
          'फसल चक्र अपनाएं; उसी खेत में लगातार आलू-टमाटर-बैंगन न लगाएं।'
        ],
        mr: [
          'रोपांमध्ये योग्य अंतर (६० x ४५ सेमी) ठेवा जेणेकरून हवा खेळती राहील.',
          'मुळांशी निंबोळी पेंड किंवा ट्रायकोडर्मा (Trichoderma) जैविक बुरशीनाशक वापरा.',
          'पिकांची फेरपालट करा; एकाच वाफ्यात सलग टोमॅटो, बटाटा किंवा वांगी लावू नका.'
        ]
      },
      expertEscalation: {
        en: [
          'If more than 35% of total plant canopy is covered in brown lesions within 48 hours.',
          'If stems develop dark girdling lesions causing whole branches to collapse.',
          'Before applying Schedule chemical fungicides (e.g., Mancozeb / Azoxystrobin) to ensure proper dosage & pre-harvest intervals.'
        ],
        hi: [
          'यदि 48 घंटों में 35% से अधिक पत्तों पर काले धब्बे फैल जाएं।',
          'यदि तने पर काले गहरे घाव बनने लगें और टहनियां सूखने लगें।',
          'रासायनिक दवाइयों का सही माप व सुरक्षित उपयोग जानने के लिए नजदीकी KVK या कृषि अधिकारी से संपर्क करें।'
        ],
        mr: [
          'जर ४८ तासांत झाडाच्या ३५% पेक्षा जास्त भागावर काळे डाग पसरले.',
          'जर खोडावर काळे चट्टे येऊन फांद्या वाळू लागल्या.',
          'रासायनिक बुरशीनाशकांची योग्य मात्रा आणि सुरक्षितता जाणून घेण्यासाठी स्थानिक कृषी विज्ञान केंद्र (KVK) शी संपर्क साधा.'
        ]
      }
    },
    whatCouldChangeResultEn: 'If small white fungal mould appears on the leaf underside, or if lesions lack concentric rings, Downy Mildew or Septoria Leaf Spot becomes more probable.',
    whatCouldChangeResultHi: 'यदि पत्ती के नीचे सफेद फफूंद दिखे या धब्बों में छल्ले न हों, तो यह डाउनी मिल्ड्यू या सेप्टोरिया रोग हो सकता है।',
    whatCouldChangeResultMr: 'जर पाण्याच्या पाठीमागे पांढरी बुरशी दिसली किंवा डागांवर गोलाकार वलय नसतील, तर हा केवडा (Downy Mildew) किंवा सेप्टोरिया असू शकतो.',
    whatToPhotographNextEn: 'Take a clear close-up of the leaf underside and a wide photo of the main stem base.',
    whatToPhotographNextHi: 'पत्ती के नीचे का नजदीकी फोटो और तने के निचले हिस्से का फोटो लें।',
    whatToPhotographNextMr: 'पानाच्या मागच्या बाजूचा स्पष्ट फोटो आणि झाडाच्या खोडाचा फोटो घ्या.',
    whyReasoningEn: [
      'Visual presence of concentric circular rings (Alternaria target pattern) on bottom leaves.',
      'Symptom progression starting from older foliage progressing upwards.',
      'Characteristic chlorotic yellow halo encircling primary necrotic zones.'
    ],
    whyReasoningHi: [
      'निचले पत्तों पर गोल छल्लेदार काले धब्बे दिखाई दे रहे हैं।',
      'बीमारी नीचे के पुराने पत्तों से शुरू होकर ऊपर बढ़ रही है।',
      'धब्बों के चारों तरफ पीला घेरा स्पष्ट नजर आ रहा है।'
    ],
    whyReasoningMr: [
      'खालच्या पानांवर स्पष्ट गोलाकार वलयाकार काळे डाग दिसत आहेत.',
      'रोगाची सुरुवात खालच्या जुन्या पानांपासून वरच्या बाजूने होत आहे.',
      'काळ्या डागांच्या कडेने पिवळसर कड दिसत आहे.'
    ],
    environmentalRiskEn: 'High humidity (>75%) coupled with temperatures between 24°C-30°C and recent morning dew creates ideal conditions for Alternaria spore proliferation.',
    environmentalRiskHi: 'हवा में अधिक नमी (75% से ज्यादा) और 24°C-30°C तापमान में यह फंगस तेजी से बढ़ता है।',
    environmentalRiskMr: 'हवेतील जास्त आर्द्रता (७५% पेक्षा जास्त) आणि २४°C-३०°C तापमान या बुरशीच्या वाढीसाठी अनुकूल ठरते.'
  },

  'chilli_leaf_curl': {
    id: 'chilli_leaf_curl',
    cropId: 'chilli',
    nameEn: 'Chilli Leaf Curl Virus',
    nameHi: 'मिर्च का पर्ण कुंचन रोग (Leaf Curl Virus / मरोड़िया)',
    nameMr: 'मिरचीवरील चुरडा-मुरडा / बोकड्या रोग',
    scientificConditionName: 'Begomovirus / Thrips & Whitefly vector',
    problemType: 'viral',
    symptomsEn: [
      'Upward and downward curling and puckering of leaves',
      'Thickened, leathery leaf texture and reduced leaf size',
      'Shortened internodes resulting in stunted bushy appearance',
      'Flower drop and poor fruit setting'
    ],
    symptomsHi: [
      'पत्तियों का ऊपर या नीचे की ओर मुड़ना (नाव जैसी आकृति)',
      'पत्तियों का छोटा, मोटा और खुरदरा होना',
      'पौधे की बढ़त रुकना और झाड़ीनुमा दिखना',
      'फूलों का गिरना और मिर्च न लगना'
    ],
    symptomsMr: [
      'पाने वरच्या किंवा खालच्या बाजूला बोकडणे / वाटीसारखी होणे',
      'पाने लहान, जाड आणि खरखरीत होणे',
      'झाडाची वाढ खुंटणे व झाड झुडूपासारखे दिसणे',
      'फुलगळ होणे आणि फळे न धरणे'
    ],
    visualMarkersEn: ['Cupped foliage', 'Stunted internodes', 'Vein thickening'],
    stageCharacteristics: {
      early: 'Top young leaves show slight upward curling and pale green vein clearing.',
      developing: 'Significant leaf cupping, curling, and puckered surface on all top flushes.',
      advanced: 'Whole plant stunted with bushy growth, extreme leaf size reduction.',
      severe: 'Complete vegetative arrest, deformed tiny curled leaves, zero flowering.'
    },
    differentialCauses: [
      {
        conditionNameEn: 'Chilli Leaf Curl Virus (Begomovirus)',
        conditionNameHi: 'मिर्च लीफ कर्ल वायरस (मरोड़िया)',
        conditionNameMr: 'मिरचीवरील विषाणूजन्य चुरडा-मुरडा',
        probability: 72,
        whyPossibleEn: 'Puckered leaves, upward cupping, and stunted top growth are classic symptoms.',
        whyPossibleHi: 'पत्तियों का मुड़ना और पौधे का छोटा रह जाना इसके लक्षण हैं।',
        whyPossibleMr: 'पाने वाटीसारखी बोकडणे आणि झाडाची वाढ खुंटणे हे या रोगाचे लक्षण आहे.',
        distinguishingFeaturesEn: 'Vector-borne viral disease; upward curling typically indicates whiteflies/virus, downward curling mites.',
        distinguishingFeaturesHi: 'ऊपर की ओर मुड़ना सफेद मक्खी/वायरस से, नीचे की ओर मुड़ना माइट्स (मकड़ी) से होता है।',
        distinguishingFeaturesMr: 'पाने वरच्या बाजूला वळणे हे पांढरी माशी/व्हायरसमुळे व खाली वळणे हे कोळी (Mites) मुळे होते.',
        problemType: 'viral'
      },
      {
        conditionNameEn: 'Mite / Thrips Pest Damage',
        conditionNameHi: 'माइट्स (मकड़ी) या थ्रिप्स का प्रकोप',
        conditionNameMr: 'थ्रिप्स किंवा पिवळा कोळी प्रादुर्भाव',
        probability: 22,
        whyPossibleEn: 'Sucking pests inject toxins while feeding causing inverted boat-shaped leaf curl.',
        whyPossibleHi: 'रस चूसने वाले कीटों के कारण भी पत्तियां मुड़ जाती हैं।',
        whyPossibleMr: 'रसशोषक किडी पानांतील रस शोषल्यामुळे पाने उलटी मुरडतात.',
        distinguishingFeaturesEn: 'Mite feeding curls leaves downwards with bronzing/glossy sheen on the underside.',
        distinguishingFeaturesHi: 'माइट्स में पत्तियां नीचे की ओर मुड़ती हैं और पत्ती के नीचे कांस्य जैसी चमक दिखती है।',
        distinguishingFeaturesMr: 'कोळीमुळे पाने खालच्या बाजूने वाकतात व पानाच्या मागे तांबूस चकाकी दिसते.',
        problemType: 'pest'
      },
      {
        conditionNameEn: 'Herbicide / Chemical Drift Injury',
        conditionNameHi: 'खरपतवार नाशक दवा का दुष्प्रभाव',
        conditionNameMr: 'तणनाशकाचा दुष्परिणाम',
        probability: 6,
        whyPossibleEn: 'Nearby weedicide sprays can cause hormone-like curling in young leaves.',
        whyPossibleHi: 'आसपास खरपतवार नाशक दवा के छिड़काव से भी पत्तियां ऐंठ सकती हैं।',
        whyPossibleMr: 'शेजारील तणनाशक फवारणीच्या वाऱ्यामुळेही कोवळी पाने मुरडू शकतात.',
        distinguishingFeaturesEn: 'Appears suddenly across the entire bed simultaneously without viral vector pests.',
        distinguishingFeaturesHi: 'यह अचानक पूरे खेत में एक साथ बिना किसी कीड़े के दिखता है।',
        distinguishingFeaturesMr: 'हे संपूर्ण शेतात एकाच वेळी अचानक दिसते, यावर किडी आढळत नाहीत.',
        problemType: 'chemical_injury'
      }
    ],
    sources: [AGRICULTURAL_SOURCES.icar_tomato_bulletin, AGRICULTURAL_SOURCES.tnau_agritech],
    treatment: {
      safetyVerified: true,
      doNow: {
        en: [
          'Uproot and bury severely infected stunted plants to stop virus transmission to healthy plants.',
          'Install yellow and blue sticky traps (15-20 per acre) to monitor and trap whiteflies & thrips.',
          'Inspect leaf undersides with a magnifying lens for tiny whiteflies or mites.'
        ],
        hi: [
          'अधिक खराब हो चुके पौधों को तुरंत उखाड़कर जमीन में दबा दें ताकि वायरस न फैले।',
          'खेत में पीले और नीले चिपचिपे ट्रैप (15-20 प्रति एकड़) लगाएं।',
          'पत्तियों के नीचे ध्यान से देखें कि क्या सफेद मक्खी या बारीक कीड़े मौजूद हैं।'
        ],
        mr: [
          'जास्त बाधित झालेली खुरटलेली झाडे त्वरित उपटून जमिनीत पुरा, जेणेकरून विषाणू इतर निरोगी झाडांवर पसरणार नाही.',
          'शेतात एकरी १५-२० पिवळे व निळे चिकट सापळे (Sticky Traps) लावा.',
          'पानांच्या मागे बारकाईने पांढरी माशी किंवा बारीक कोळी आहेत का ते तपासा.'
        ]
      },
      watchFor: {
        en: [
          'Look for flying white insects when shaking the canopy gently in early morning.',
          'Check if newly emerging leaves show smooth flat growth after pest intervention.'
        ],
        hi: [
          'सुबह के समय पौधे को धीरे से हिलाकर देखें कि क्या सफेद मक्खी उड़ती दिखाई देती है।',
          'देखें कि क्या नई पत्तियां सीधी और स्वस्थ निकल रही हैं।'
        ],
        mr: [
          'सकाळी झाड हळूच हलवून पांढऱ्या माश्या उडताना दिसतात का ते तपासा.',
          'उपाययोजनांनंतर येणारी नवीन पालवी सरळ आणि निरोगी येत आहे का यावर लक्ष ठेवा.'
        ]
      },
      avoid: {
        en: [
          'DO NOT spray fungicides for viral diseases; fungicides do not cure viral infections.',
          'DO NOT apply excessive nitrogen fertilizers which promote soft succulent growth attractive to sucking pests.',
          'DO NOT leave uprooted infected plants lying on bunds or field borders.'
        ],
        hi: [
          'वायरल बीमारी के लिए फंगीसाइड (बुरशीनाशक) न छिड़कें; यह असर नहीं करेगा।',
          'अधिक यूरिया (नाइट्रोजन) न डालें, इससे कीड़े अधिक आकर्षित होते हैं।',
          'उखाड़े गए संक्रमित पौधों को मेड़ों पर खुला न छोड़ें।'
        ],
        mr: [
          'विषाणूजन्य रोगावर बुरशीनाशके फवारू नका; बुरशीनाशकांचा यावर काहीही उपयोग होत नाही.',
          'जास्त युरिया (नायट्रोजन) खत देऊ नका, यामुळे कोवळी पालवी वाढून किडींचा प्रादुर्भाव वाढतो.',
          'उपटलेली रोगट झाडे बांधावर किंवा उघड्यावर टाकू नका.'
        ]
      },
      prevention: {
        en: [
          'Spray neem oil (5ml per liter) early in the season as a natural repellent.',
          'Grow 2-3 border rows of maize or sorghum as a living barrier against insect vectors.',
          'Use virus-tolerant hybrid varieties in next planting cycle.'
        ],
        hi: [
          'सुरुआत में नीम का तेल (5 मिली प्रति लीटर) का छिड़काव करें।',
          'खेत के चारों ओर मक्का या ज्वार की 2-3 कतारें सुरक्षा दीवार के रूप में लगाएं।',
          'अगली बार रोग-प्रतिरोधी किस्मों के बीज का ही चयन करें।'
        ],
        mr: [
          'सुरुवातीच्या काळात निंबोळी अर्क (५ मिली प्रति लिटर) चा प्रतिबंधात्मक फवारा घ्या.',
          'शेताच्या चारही बाजूंनी मका किंवा ज्वारीच्या २-३ ओळींचे सजीव कुंपण लावा.',
          'पुढील हंगामात रोगप्रतिकारक वाणांचीच निवड करा.'
        ]
      },
      expertEscalation: {
        en: [
          'If more than 20% of your plot shows sudden widespread leaf curling.',
          'Consult local KVK or Agriculture Extension Officer for approved vector-specific bio-control protocols.'
        ],
        hi: [
          'यदि 20% से अधिक फसल में अचानक पत्तियां मुड़ने लगें।',
          'सही कीटनाशक की पहचान और सही मात्रा के लिए तुरंत स्थानीय कृषि विज्ञान केंद्र से सलाह लें।'
        ],
        mr: [
          'जर शेतातील २०% पेक्षा जास्त पिकावर चुरडा-मुरडा पसरला असेल.',
          'योग्य उपाययोजनांसाठी त्वरित जवळच्या कृषी विज्ञान केंद्रातील (KVK) शास्त्रज्ञांचा सल्ला घ्या.'
        ]
      }
    },
    whatCouldChangeResultEn: 'If curling is exclusively downward accompanied by webbing and bronzing underneath, Yellow Mites is the primary cause rather than viral Begomovirus.',
    whatCouldChangeResultHi: 'यदि पत्तियां केवल नीचे की ओर मुड़ रही हैं और नीचे जाला या लाल रंग है, तो यह वायरस नहीं बल्कि माइट्स (मकड़ी) का हमला है।',
    whatCouldChangeResultMr: 'जर पाने फक्त खालच्या दिशेने वळत असतील आणि खाली जाळे किंवा तांबूस थर असेल, तर हा व्हायरस नसून कोळीचा प्रादुर्भाव आहे.',
    whatToPhotographNextEn: 'Take an ultra-close photo of the leaf underside under direct sunlight and a photo of the very top shoot.',
    whatToPhotographNextHi: 'पत्ती के नीचे का बहुत साफ फोटो धूप में लें और ऊपरी नई कोपल का फोटो लें।',
    whatToPhotographNextMr: 'पानाच्या मागच्या बाजूचा सूर्यप्रकाशात अतिशय स्पष्ट फोटो आणि झाडाच्या शेंड्याचा फोटो घ्या.',
    whyReasoningEn: [
      'Pronounced upward leaf cupping and puckered lamina texture.',
      'Stunting of top shoot growth and reduced leaf surface area.',
      'Absence of fungal necrotic spots or fungal sporulation.'
    ],
    whyReasoningHi: [
      'पत्तियों का ऊपर की ओर मुड़ना और खुरदरा होना।',
      'ऊपरी नई शाखाओं की बढ़त रुक जाना।',
      'पत्तों पर फफूंद के कोई काले धब्बे न होना।'
    ],
    whyReasoningMr: [
      'पाने वरच्या बाजूला वाटीसारखी वळलेली आणि सुरकुतलेली असणे.',
      'झाडाच्या शेंड्याची वाढ खुंटणे आणि पानांचा आकार लहान होणे.',
      'पानांवर बुरशीचे कोणतेही काळे डाग नसणे.'
    ],
    environmentalRiskEn: 'Dry, warm weather (28°C-35°C) with low relative humidity accelerates Whitefly and Thrips insect multiplication.',
    environmentalRiskHi: 'सूखा और गर्म मौसम (28°C-35°C) सफेद मक्खी और कीड़ों के फैलने के लिए अनुकूल होता है।',
    environmentalRiskMr: 'कोरडे आणि उष्ण हवामान (२८°C-३५°C) पांढरी माशी व किडींच्या वेगाने वाढीस मदत करते.'
  },

  'potato_late_blight': {
    id: 'potato_late_blight',
    cropId: 'potato',
    nameEn: 'Potato Late Blight',
    nameHi: 'आलू का पछेती झुलसा (Late Blight)',
    nameMr: 'बटाट्यावरील लेट ब्लाईट / पछेती करपा',
    scientificConditionName: 'Phytophthora infestans',
    problemType: 'fungal',
    symptomsEn: [
      'Water-soaked pale green or dark brown rapidly expanding lesions',
      'White cottony mould on leaf underside during humid conditions',
      'Foul smell and rapid blighting of entire foliage',
      'Purplish-brown dry rot on tubers'
    ],
    symptomsHi: [
      'पत्तों पर पानी जैसे भीगे हुए तेजी से फैलने वाले भूरे-काले धब्बे',
      'नमी वाले मौसम में पत्ती के नीचे सफेद रुई जैसी फफूंद',
      'पौधों का तेजी से गलना और सड़ने जैसी गंध आना',
      'आलू के कंदों पर बैंगनी-भूरे रंग का सड़न'
    ],
    symptomsMr: [
      'पानांवर ओलसर, काळपट तपकिरी वेगाने पसरणारे डाग',
      'दमट हवेत पानाच्या मागच्या बाजूला पांढरी कापसासारखी बुरशी',
      'झाडे झपाट्याने जळाल्यासारखी होऊन कुजका वास येणे',
      'बटाट्याच्या कंदांवर तांबूस-तपकिरी डाग पडून सडणे'
    ],
    visualMarkersEn: ['Water-soaked edges', 'Underside white sporulation', 'Rapid canopy collapse'],
    stageCharacteristics: {
      early: 'Small water-soaked green-grey lesions at leaf tips and margins.',
      developing: 'Lesions expand rapidly turning purplish-black with white mildew fringe underneath.',
      advanced: 'Large patches of canopy turn black and collapse within 48-72 hours.',
      severe: 'Entire crop field completely scorched with rotten odor; tuber rot initiated.'
    },
    differentialCauses: [
      {
        conditionNameEn: 'Late Blight (Phytophthora infestans)',
        conditionNameHi: 'पछेती झुलसा (Late Blight)',
        conditionNameMr: 'पछेती करपा (Late Blight)',
        probability: 82,
        whyPossibleEn: 'Water-soaked irregular margins and white mould fringe underneath are distinctive.',
        whyPossibleHi: 'पानी जैसे भीगे किनारे और पत्ती के नीचे सफेद फफूंद इसके प्रमुख लक्षण हैं।',
        whyPossibleMr: 'पानाच्या कडा ओलसर काळपट असणे व मागे पांढरी बुरशी असणे हे याचे मुख्य लक्षण आहे.',
        distinguishingFeaturesEn: 'Spreads rapidly in cool wet conditions (15-20°C); water-soaked borders without concentric rings.',
        distinguishingFeaturesHi: 'ठंडे और नम मौसम में तेजी से फैलता है; इसमें छल्लेदार चक्र नहीं होते।',
        distinguishingFeaturesMr: 'थंड आणि दमट हवामानात वेगाने पसरतो; डागांवर गोलाकार वलये नसतात.',
        problemType: 'fungal'
      },
      {
        conditionNameEn: 'Early Blight (Alternaria solani)',
        conditionNameHi: 'अगेती झुलसा (Early Blight)',
        conditionNameMr: 'अगेती करपा (Early Blight)',
        probability: 12,
        whyPossibleEn: 'Both cause dark lesions on potato foliage.',
        whyPossibleHi: 'दोनों में ही आलू के पत्तों पर काले-भूरे धब्बे बनते हैं।',
        whyPossibleMr: 'दोन्ही रोगांमध्ये बटाट्याच्या पानांवर काळे-तपकिरी डाग पडतात.',
        distinguishingFeaturesEn: 'Early blight has concentric rings and develops much more slowly in warmer weather.',
        distinguishingFeaturesHi: 'अगेती झुलसा में गोल छल्ले होते हैं और यह गर्म मौसम में धीरे-धीरे फैलता है।',
        distinguishingFeaturesMr: 'अगेती करप्यात गोलाकार वलये असतात व तो उष्ण हवामानात हळू पसरतो.',
        problemType: 'fungal'
      },
      {
        conditionNameEn: 'Frost Injury / Cold Shock',
        conditionNameHi: 'पाले या अत्यधिक ठंड की मार',
        conditionNameMr: 'धुके किंवा कडाक्याच्या थंडीचा फटका',
        probability: 6,
        whyPossibleEn: 'Severe frost causes blackened foliage across leaf edges.',
        whyPossibleHi: 'ज्यादा ठंड या पाले से भी पत्तियां काली पड़कर जल जाती हैं।',
        whyPossibleMr: 'अति थंडीमुळे पानांच्या कडा काळ्या पडून करपल्यासारख्या होतात.',
        distinguishingFeaturesEn: 'Frost damage affects entire field overnight without fungal sporulation on leaf underside.',
        distinguishingFeaturesHi: 'पाले की मार एक ही रात में पूरे खेत में दिखती है, पत्ती के नीचे फफूंद नहीं होती।',
        distinguishingFeaturesMr: 'थंडीचा फटका एका रात्रीत संपूर्ण शेतात दिसतो, पानाच्या मागे बुरशी नसते.',
        problemType: 'cold_stress'
      }
    ],
    sources: [AGRICULTURAL_SOURCES.icar_tomato_bulletin, AGRICULTURAL_SOURCES.fao_pest_management],
    treatment: {
      safetyVerified: true,
      doNow: {
        en: [
          'Cease all overhead irrigation immediately to reduce leaf wetness hours.',
          'Destroy and bury blighted vines before digging tubers.',
          'Inspect surrounding potato and tomato plots within 500m radius.'
        ],
        hi: [
          'ऊपर से फव्वारे से पानी देना तुरंत बंद करें ताकि पत्ते सूखे रहें।',
          'रोगग्रस्त पौधों को तुरंत खेत से निकालकर जमीन में गहरा दबाएं।',
          'आसपास के अन्य आलू या टमाटर के खेतों की भी तुरंत जांच करें।'
        ],
        mr: [
          'पानांवर पाणी उडवणे किंवा तुषार सिंचन त्वरित थांबवा.',
          'रोगट झाडे शेताबाहेर काढून जमिनीत खोल पुरा.',
          'परिसरातील इतर बटाटा व टोमॅटो पिकांची तातडीने पाहणी करा.'
        ]
      },
      watchFor: {
        en: [
          'Check leaf undersides in the early morning for fresh white fungal downy growth.',
          'Inspect tubers at harvest for brown sunken skin discolouration.'
        ],
        hi: [
          'सुबह-सुबह पत्ती के नीचे ताजी सफेद फफूंद की जांच करें।',
          'खोदाई के समय आलू के कंदों पर भूरे धब्बों की जांच करें।'
        ],
        mr: [
          'सकाळी लवकर पानाच्या मागच्या बाजूला ताजी पांढरी बुरशी आली आहे का ते तपासा.',
          'काढणीच्या वेळी बटाट्यांवर तपकिरी डाग पडले आहेत का ते तपासा.'
        ]
      },
      avoid: {
        en: [
          'DO NOT irrigate in cloudy or foggy weather.',
          'DO NOT harvest tubers in wet soil conditions to prevent inoculating tubers with sporangia.',
          'DO NOT leave infected culled tubers in heaps on field borders.'
        ],
        hi: [
          'बादल छाए रहने या कोहरे वाले मौसम में सिंचाई न करें।',
          'गीली मिट्टी में आलू की खोदाई न करें, इससे कंदों में बीमारी फैलती है।',
          'खराब आलू के ढेरों को खेत के किनारे खुला न छोड़ें।'
        ],
        mr: [
          'ढगाळ किंवा धुक्याच्या हवामानात पिकाला पाणी देऊ नका.',
          'माती ओली असताना बटाट्याची काढणी करू नका, यामुळे कंदांना संसर्ग होतो.',
          'खराब झालेले बटाटे शेताच्या बांधावर उघड्यावर टाकू नका.'
        ]
      },
      prevention: {
        en: [
          'Plant certified disease-free seed tubers from trusted government nurseries.',
          'Ensure high earthing-up (ridge hilling) to shield developing tubers from wash-down spores.',
          'Adopt preventative spray schedules prior to cool misty weather windows.'
        ],
        hi: [
          'केवल प्रमाणित और स्वस्थ रोगमुक्त बीजों का ही उपयोग करें।',
          'पौधों पर मिट्टी अच्छी तरह चढ़ाएं ताकि आलू के कंद ढके रहें।',
          'कोहरा और ठंड शुरू होने से पहले ही कृषि विशेषज्ञ की सलाह से सुरक्षात्मक उपाय करें।'
        ],
        mr: [
          'फक्त प्रमाणित आणि रोगमुक्त बियाण्यांचाच वापर करा.',
          'झाडांच्या बुंध्याशी मातीची चांगली भर (Earthing up) लावा जेणेकरून बटाटे उघडे पडणार नाहीत.',
          'थंडी आणि धुके सुरू होण्यापूर्वीच कृषी तज्ज्ञांच्या सल्ल्याने प्रतिबंधात्मक काळजी घ्या.'
        ]
      },
      expertEscalation: {
        en: [
          'Late blight is a high-priority community epidemic risk. Inform local KVK extension officers immediately if blighting exceeds 5% of your field area.'
        ],
        hi: [
          'पछेती झुलसा बहुत तेजी से पूरे इलाके में फैलता है। यदि 5% से अधिक फसल में दिखे, तो तुरंत कृषि विभाग या KVK को सूचित करें।'
        ],
        mr: [
          'हा करपा अतिशय वेगाने संपूर्ण परिसरात पसरतो. जर शेतातील ५% पेक्षा जास्त पिकावर लक्षणे दिसली, तर तातडीने कृषी विज्ञान केंद्राशी संपर्क साधा.'
        ]
      }
    },
    whatCouldChangeResultEn: 'If dark spots have yellow concentric rings without water-soaked margins, Early Blight is more likely than Late Blight.',
    whatCouldChangeResultHi: 'यदि धब्बों में पानी का गीलापन न होकर सूखे छल्लेदार घेरे हों, तो यह पछेती नहीं बल्कि अगेती झुलसा हो सकता है।',
    whatCouldChangeResultMr: 'जर डाग ओलसर नसून त्यावर कोरडी गोलाकार वलये असतील, तर हा लेट ब्लाईट नसून अगेती करपा असू शकतो.',
    whatToPhotographNextEn: 'Photograph the underside of an actively expanding leaf lesion and a close-up of the stem.',
    whatToPhotographNextHi: 'पत्ती के नीचे का भाग जहां सफेद फफूंद दिख रही हो और तने का नजदीकी फोटो लें।',
    whatToPhotographNextMr: 'पानाच्या मागच्या बाजूचा जिथे पांढरी बुरशी दिसते तो भाग आणि खोडाचा स्पष्ट फोटो घ्या.',
    whyReasoningEn: [
      'Rapidly spreading water-soaked necrotic lesions at leaf edges.',
      'Presence of translucent greasy borders on expanding lesions.',
      'High correlation with cool foggy atmospheric conditions.'
    ],
    whyReasoningHi: [
      'पत्तियों के किनारों पर पानी जैसे भीगे और तेजी से फैलते काले धब्बे।',
      'धब्बों के किनारों पर गीलापन दिखाई देना।',
      'ठंडे और कोहरे वाले मौसम से मेल खाना।'
    ],
    whyReasoningMr: [
      'पानांच्या कडांवर वेगाने पसरणारे ओलसर काळपट डाग.',
      'डागांच्या कडेला काळपट ओलसर थर दिसणे.',
      'थंड आणि धुक्याच्या हवामानाशी जुळणारे लक्षण.'
    ],
    environmentalRiskEn: 'High humidity (>90%) with cool temperatures (12°C-18°C) and cloudy days creates peak epidemic risk for Phytophthora infestans.',
    environmentalRiskHi: 'हवा में 90% से ज्यादा नमी, 12°C-18°C ठंडा तापमान और बादल छाए रहना इस फंगस के लिए सबसे खतरनाक है।',
    environmentalRiskMr: 'हवेतील ९०% पेक्षा जास्त आर्द्रता, १२°C-१८°C थंड तापमान आणि ढगाळ हवामान यामुळे हा बुरशीजन्य रोग प्रचंड वेगाने वाढतो.'
  },

  'wheat_yellow_rust': {
    id: 'wheat_yellow_rust',
    cropId: 'wheat',
    nameEn: 'Wheat Stripe / Yellow Rust',
    nameHi: 'गेहूं का पीला रतुआ (Yellow Rust / पीला गेरुआ)',
    nameMr: 'गव्हावरील पिवळा तांबेरा (Yellow Rust)',
    scientificConditionName: 'Puccinia striiformis f. sp. tritici',
    problemType: 'fungal',
    symptomsEn: [
      'Bright yellow to orange powdery pustules arranged in linear stripes along leaf veins',
      'Yellow powder easily rubbing off onto fingers',
      'Premature leaf chlorosis and drying',
      'Shrivelled grain development in affected tillers'
    ],
    symptomsHi: [
      'पत्तियों की नसों के समानांतर पीली-नारंगी पाउडर जैसी सीधी धारियां/पट्टियां',
      'उंगलियों से छूने पर पीला पाउडर हाथ पर लगना (हल्दी जैसा)',
      'पत्तियों का पीला पड़कर सूखना',
      'दाने पतले और कमजोर बनना'
    ],
    symptomsMr: [
      'पानांच्या शिरांच्या दिशेने हळदीसारख्या पिवळ्या-नारंगी रंगाच्या सरळ पट्ट्या / ठिपके',
      'पानावर बोट फिरवल्यास बोटाला पिवळी पावडर (हळदीसारखी) लागणे',
      'पाने पिवळी पडून वाळणे',
      'दाणे बारीक व पोचट भरणे'
    ],
    visualMarkersEn: ['Linear stripe pustules', 'Yellow powdery spores on touch', 'Parallel vein alignment'],
    stageCharacteristics: {
      early: 'Small scattered bright yellow pustules appearing on 1-2 lower/middle leaves.',
      developing: 'Pustules coalesce into distinct linear parallel yellow stripes across leaf blades.',
      advanced: 'Entire upper canopy turns yellow with abundant powdery spores covering flag leaves.',
      severe: 'Flag leaves dry up completely; severe grain shrivelling and yield loss.'
    },
    differentialCauses: [
      {
        conditionNameEn: 'Stripe / Yellow Rust (Puccinia striiformis)',
        conditionNameHi: 'पीला रतुआ (Yellow Rust)',
        conditionNameMr: 'पिवळा तांबेरा (Yellow Rust)',
        probability: 88,
        whyPossibleEn: 'Linear parallel stripes of powdery yellow pustules along leaf veins are pathognomonic.',
        whyPossibleHi: 'पत्तियों पर समानांतर पीली धारियां और छूने पर पीला पाउडर लगना इसका पक्का प्रमाण है।',
        whyPossibleMr: 'पानांवर शिरांच्या बाजूने सरळ पिवळ्या पट्ट्या आणि बोटाला पावडर लागणे हे याचे मुख्य लक्षण आहे.',
        distinguishingFeaturesEn: 'Pustules in linear rows/stripes; rubs off as yellow powder on fingers.',
        distinguishingFeaturesHi: 'धारियों में पीला पाउडर होता है जो हाथ लगाने पर उंगलियों में लग जाता है।',
        distinguishingFeaturesMr: 'सरळ ओळीत पिवळा भुकटीसारखा थर असतो जो बोटाला सहज चिकटतो.',
        problemType: 'fungal'
      },
      {
        conditionNameEn: 'Brown / Leaf Rust (Puccinia triticina)',
        conditionNameHi: 'भूरा रतुआ (Brown Rust)',
        conditionNameMr: 'तपकिरी तांबेरा (Brown Rust)',
        probability: 8,
        whyPossibleEn: 'Both are rust fungi producing powdery urediniospores.',
        whyPossibleHi: 'दोनों रतुआ रोग हैं जिनमें पाउडर जैसे धब्बे बनते हैं।',
        whyPossibleMr: 'दोन्ही तांबेरा रोग असून पानांवर पावडरसारखे ठिपके तयार होतात.',
        distinguishingFeaturesEn: 'Brown rust pustules are round or oval and scattered randomly, not in linear stripes.',
        distinguishingFeaturesHi: 'भूरा रतुआ के धब्बे बिखरे हुए गोल या अंडाकार होते हैं, सीधी धारियों में नहीं।',
        distinguishingFeaturesMr: 'तपकिरी तांबेऱ्याचे ठिपके विखुरलेले असतात, सरळ पट्ट्यांमध्ये नसतात.',
        problemType: 'fungal'
      },
      {
        conditionNameEn: 'Nitrogen Deficiency Chlorosis',
        conditionNameHi: 'नाइट्रोजन की कमी से पीलापन',
        conditionNameMr: 'नायट्रोजन अन्नद्रव्याची कमतरता',
        probability: 4,
        whyPossibleEn: 'General yellowing of wheat foliage can look yellowish from a distance.',
        whyPossibleHi: 'दूर से देखने पर नाइट्रोजन की कमी से भी गेहूं पीला दिखता है।',
        whyPossibleMr: 'लांबून पाहिल्यावर खताच्या कमतरतेमुळेही गहू पिवळसर दिसतो.',
        distinguishingFeaturesEn: 'Deficiency yellowing does NOT produce powdery pustules that rub off on fingers.',
        distinguishingFeaturesHi: 'पोषक तत्व की कमी में हाथ पर कोई पीला पाउडर नहीं लगता।',
        distinguishingFeaturesMr: 'अन्नद्रव्यांच्या कमतरतेत बोटाला कोणतीही पिवळी पावडर लागत नाही.',
        problemType: 'nutrient_deficiency'
      }
    ],
    sources: [AGRICULTURAL_SOURCES.iari_cereal_handbook, AGRICULTURAL_SOURCES.kvk_extension_bulletin],
    treatment: {
      safetyVerified: true,
      doNow: {
        en: [
          'Perform the "Finger Rub Test": Rub suspected leaf gently with clean white paper or fingers to confirm yellow spore transfer.',
          'Scout the field in zig-zag pattern to locate early localized yellow rust foci (hotspots).',
          'Immediately consult KVK agricultural advisory for approved localized spray guidelines.'
        ],
        hi: [
          'उंगली टेस्ट करें: पत्ते को सफेद कागज या उंगली से रगड़ें; यदि पीला रंग लगे तो रतुआ पक्का है।',
          'खेत में घूमकर देखें कि किस हिस्से में पीलापन ज्यादा है (शुरुआती केंद्र पहचानें)।',
          'स्थानीय कृषि विज्ञान केंद्र (KVK) से तुरंत संपर्क करें।'
        ],
        mr: [
          'बोट टेस्ट करा: पानावर पांढरा कागद किंवा बोट फिरवा; बोटाला हळदीसारखा पिवळा रंग लागल्यास तांबेरा निश्चित समजा.',
          'शेतात फेरफटका मारून कोणत्या भागात पिवळेपणा जास्त आहे ते तपासा.',
          'योग्य मार्गदर्शनासाठी त्वरित नजीकच्या कृषी विज्ञान केंद्राशी (KVK) संपर्क साधा.'
        ]
      },
      watchFor: {
        en: [
          'Monitor the flag leaf (topmost leaf) carefully; keeping the flag leaf healthy is critical for grain filling.',
          'Check if yellow stripes are spreading downwind across adjacent wheat fields.'
        ],
        hi: [
          'शीर्ष पत्ती (Flag leaf) पर विशेष ध्यान दें, क्योंकि दाना भरने के लिए इसका स्वस्थ रहना बहुत जरूरी है।',
          'देखें कि क्या हवा की दिशा में पीलापन दूसरे खेतों की ओर फैल रहा है।'
        ],
        mr: [
          'गव्हाच्या सर्वात वरच्या पानावर (Flag leaf) विशेष लक्ष ठेवा, दाणे भरण्यासाठी हे पान निरोगी राहणे अत्यंत गरजेचे आहे.',
          'वाऱ्याच्या दिशेने हा रोग शेजारील शेतात पसरत आहे का ते तपासा.'
        ]
      },
      avoid: {
        en: [
          'DO NOT delay action once yellow rust foci are spotted; spores can travel kilometers by wind within days.',
          'DO NOT walk across infected fields into healthy fields without washing boots/clothes.'
        ],
        hi: [
          'पीला रतुआ दिखने पर देर न करें; हवा से इसके बीजाणु बहुत दूर तक फैलते हैं।',
          'रोगग्रस्त खेत में घूमने के बाद बिना कपड़े/जूते साफ किए स्वस्थ खेत में न जाएं।'
        ],
        mr: [
          'पिवळा तांबेरा दिसल्यास वेळ वाया घालवू नका; वाऱ्यामुळे याचे बीजाणू किलोमीटरपर्यंत पसरतात.',
          'रोगट शेतात फिरल्यानंतर हात-पाय स्वच्छ न धुता निरोगी शेतात जाऊ नका.'
        ]
      },
      prevention: {
        en: [
          'Sow rust-resistant recommended wheat varieties suited to your agro-climatic zone.',
          'Avoid very late sowing which pushes the crop into high-risk rust weather windows.',
          'Maintain balanced NPK fertilization avoiding excessive early nitrogen.'
        ],
        hi: [
          'अपने क्षेत्र के लिए अनुशंसित रोग-प्रतिरोधी किस्मों की ही बुवाई करें।',
          'देर से बुवाई न करें, सही समय पर बुवाई करने से रोग का खतरा कम होता है।',
          'संतुलित खाद का उपयोग करें, अधिक यूरिया डालने से बचें।'
        ],
        mr: [
          'आपल्या भागासाठी शिफारस केलेल्या तांबेरा-प्रतिकारक वाणांचीच पेरणी करा.',
          'पेरणीस जास्त उशीर करू नका, वेळेवर पेरणी केल्यास रोगाचा धोका टळतो.',
          'संतुलित खतांचा वापर करा, नत्राचा (युरिया) अतिवापर टाळा.'
        ]
      },
      expertEscalation: {
        en: [
          'Yellow rust is a major food security alert pathogen. If stripe pustules appear on flag leaves, contact your District Agriculture Officer or ICAR-IIWBR helpline immediately.'
        ],
        hi: [
          'पीला रतुआ अत्यंत तेजी से फैलने वाला रोग है। शीर्ष पत्ते पर धब्बे दिखते ही तुरंत जिला कृषि अधिकारी या कृषि हेल्पलाइन पर संपर्क करें।'
        ],
        mr: [
          'हा एक अत्यंत वेगाने पसरणारा रोग आहे. वरच्या पानांवर पिवळ्या पट्ट्या दिसताच तातडीने कृषी विभागाशी संपर्क साधा.'
        ]
      }
    },
    whatCouldChangeResultEn: 'If pustules are dark brown and scattered as round spots rather than yellow linear stripes, Brown Leaf Rust is present.',
    whatCouldChangeResultHi: 'यदि धब्बे गहरे भूरे और गोल बिखरे हुए हों (सीधी धारियों में नहीं), तो यह भूरा रतुआ है।',
    whatCouldChangeResultMr: 'जर ठिपके गडद तपकिरी आणि विखुरलेले गोल असतील (सरळ पट्ट्यांत नाहीत), तर हा तपकिरी तांबेरा आहे.',
    whatToPhotographNextEn: 'Take a macro close-up of a single leaf stripe showing individual pustules and a photo of your finger after rubbing the leaf.',
    whatToPhotographNextHi: 'पत्ती की धारी का बहुत नजदीकी फोटो लें और पत्ती रगड़ने के बाद अपनी उंगली का फोटो लें।',
    whatToPhotographNextMr: 'पानावरील पिवळ्या पट्ट्यांचा अगदी जवळून फोटो आणि पानावर बोट फिरवल्यानंतर बोटाचा फोटो घ्या.',
    whyReasoningEn: [
      'Diagnostic linear pustule arrangement aligned with parallel leaf veins.',
      'Bright yellow to orange chromacity characteristic of Puccinia striiformis urediniospores.',
      'Seasonal correlation with cool sub-tropical Rabi wheat conditions.'
    ],
    whyReasoningHi: [
      'पत्तियों की नसों के साथ-साथ पीली धारियों में पाउडर का होना।',
      'पीला-नारंगी रंग जो पीले रतुआ की पहचान है।',
      'सर्दियों के मौसम में गेहूं के अनुकूल तापमान में दिखना।'
    ],
    whyReasoningMr: [
      'पानांच्या शिरांना समांतर सरळ पिवळ्या पट्ट्या असणे.',
      'हळदीसारखा पिवळा-नारंगी रंग जो पिवळ्या तांबेऱ्याची मुख्य ओळख आहे.',
      'रब्बी हंगामातील थंड हवामानाशी तंतोतंत जुळणारे लक्षण.'
    ],
    environmentalRiskEn: 'Cool temperatures (10°C-18°C) accompanied by heavy morning dew or intermittent drizzle trigger rapid yellow rust spore germination.',
    environmentalRiskHi: 'ठंडा तापमान (10°C-18°C) और सुबह की ओस या हल्की फुहारें इस फंगस को बहुत तेजी से बढ़ाती हैं।',
    environmentalRiskMr: '१०°C-१८°C थंड तापमान आणि सकाळचे धुके किंवा दव यामुळे या रोगाचे बीजाणू वेगाने वाढतात.'
  },

  'cotton_nutrient_deficiency': {
    id: 'cotton_nutrient_deficiency',
    cropId: 'cotton',
    nameEn: 'Cotton Nitrogen & Magnesium Deficiency (Abiotic Stress)',
    nameHi: 'कपास में नाइट्रोजन व मैग्नीशियम की कमी (पोषक तत्वों की कमी)',
    nameMr: 'कापसावरील अन्नद्रव्यांची कमतरता (नायट्रोजन / मॅग्नेशियम कमतरता - लाल्या रोग सदृश)',
    scientificConditionName: 'Abiotic Physiological Nutrient Deficiency',
    problemType: 'nutrient_deficiency',
    symptomsEn: [
      'Interveinal chlorosis or reddening (purplish-red discoloration) of older lower leaves',
      'Leaf veins remaining green while leaf blade turns yellow/red',
      'No fungal spores, spots, or bacterial exudate on leaves',
      'Premature leaf shedding and reduced square/boll formation'
    ],
    symptomsHi: [
      'निचली पुरानी पत्तियों की नसों के बीच का हिस्सा लाल या पीला होना (लाल्या रोग जैसा)',
      'पत्तियों की मुख्य नसें हरी रहना और बाकी पत्ता लाल-बैंगनी होना',
      'पत्तों पर कोई फफूंद, काले धब्बे या कीड़े न होना',
      'पत्तियों का समय से पहले गिरना और गूलर का कम बनना'
    ],
    symptomsMr: [
      'खालच्या जुन्या पानांच्या शिरांमधील भाग लालसर किंवा पिवळा पडणे (लाल्या सदृश लक्षण)',
      'पानाच्या मुख्य शिरा हिरव्या राहून पात्याचा भाग तांबूस-लाल होणे',
      'पानांवर कोणतीही बुरशी, काळे डाग किंवा कीड नसणे',
      'पाने अकाली गळणे आणि बोंडांची संख्या कमी होणे'
    ],
    visualMarkersEn: ['Interveinal reddening', 'Green vein skeleton', 'Absence of fungal lesions'],
    stageCharacteristics: {
      early: 'Bottom leaves show slight pale yellowing between main veins.',
      developing: 'Interveinal area turns distinct purplish-red while main veins remain dark green.',
      advanced: 'Leaves turn completely red-bronze, curl downwards slightly, and become brittle.',
      severe: 'Widespread lower leaf drop and boll shedding without fungal pathogen infection.'
    },
    differentialCauses: [
      {
        conditionNameEn: 'Magnesium / Nitrogen Deficiency (Physiological Reddening)',
        conditionNameHi: 'मैग्नीशियम / नाइट्रोजन की कमी (लाल्या)',
        conditionNameMr: 'मॅग्नेशियम / नत्र कमतरता (लाल्या विकार)',
        probability: 75,
        whyPossibleEn: 'Classic interveinal purplish-red pigment development with green veins on older leaves.',
        whyPossibleHi: 'पुरानी पत्तियों की नसों के बीच लाल-बैंगनी रंग आना और नसें हरी रहना मुख्य लक्षण है।',
        whyPossibleMr: 'जुन्या पानांच्या शिरांमधील भाग लाल-जांभळा होणे आणि शिरा हिरव्या राहणे हे याचे लक्षण आहे.',
        distinguishingFeaturesEn: 'Veins stay green; discoloration is uniform across leaf blade without necrotic spots.',
        distinguishingFeaturesHi: 'नसें हरी रहती हैं; पत्ते पर कोई सड़ांध या काले गोल धब्बे नहीं होते।',
        distinguishingFeaturesMr: 'शिरा हिरव्या राहतात; पानांवर बुरशीचे काळे डाग किंवा सड नसते.',
        problemType: 'nutrient_deficiency'
      },
      {
        conditionNameEn: 'Bacterial Blight / Angular Leaf Spot (Xanthomonas citri pv. malvacearum)',
        conditionNameHi: 'जीवाणु अंगमारी / कोणीय पत्ती धब्बा (Angular Leaf Spot)',
        conditionNameMr: 'जिवाणूजन्य करपा / काळा कोपरा रोग (Angular Leaf Spot)',
        probability: 18,
        whyPossibleEn: 'Bacterial blight also causes discolouration and leaf drop in cotton.',
        whyPossibleHi: 'बैक्टीरियल बीमारी से भी कपास की पत्तियां गिरती हैं।',
        whyPossibleMr: 'जिवाणूजन्य रोगामुळेही कापसाची पाने गळतात.',
        distinguishingFeaturesEn: 'Bacterial blight creates water-soaked angular dark brown lesions restricted by veinlets.',
        distinguishingFeaturesHi: 'बैक्टीरियल बीमारी में कोणीय (Angular) काले-भूरे धब्बे बनते हैं, जो नसों से बंधे होते हैं।',
        distinguishingFeaturesMr: 'जिवाणूजन्य करप्यात शिरांनी मर्यादित केलेले काळे-तपकिरी चौकोनी डाग पडतात.',
        problemType: 'bacterial'
      },
      {
        conditionNameEn: 'Jassid / Leafhopper Sucking Damage',
        conditionNameHi: 'माहो / हरा तेला (Jassid) कीट का नुकसान',
        conditionNameMr: 'तुडतुडे (Jassids) किडीचा प्रादुर्भाव',
        probability: 7,
        whyPossibleEn: 'Jassids injecting toxins cause "hopper burn" turning leaf margins yellowish-red.',
        whyPossibleHi: 'कीटों के रस चूसने से पत्ती के किनारे लाल-पीले होकर मुड़ जाते हैं।',
        whyPossibleMr: 'तुडतुड्यांनी रस शोषल्यामुळे पानांच्या कडा पिवळ्या-तांबड्या पडून करपतात.',
        distinguishingFeaturesEn: 'Hopper burn starts from outer edges curling down; live triangular green jassids visible on leaf underside.',
        distinguishingFeaturesHi: 'कीट का नुकसान पत्ती के किनारे से शुरू होता है और नीचे हरे फुदके दिखाई देते हैं।',
        distinguishingFeaturesMr: 'किडीमुळे पानाच्या कडा खालच्या बाजूने वाकतात व पानाच्या मागे तिरपे चालणारे हिरवे तुडतुडे दिसतात.',
        problemType: 'pest'
      }
    ],
    sources: [AGRICULTURAL_SOURCES.icar_tomato_bulletin, AGRICULTURAL_SOURCES.tnau_agritech],
    treatment: {
      safetyVerified: true,
      doNow: {
        en: [
          'IMPORTANT: Do NOT spray chemical fungicides; this is a nutritional imbalance, not a fungal infection.',
          'Apply foliar spray of 1% Magnesium Sulphate (MgSO4) + 1% Urea or 19:19:19 water-soluble fertilizer in early morning.',
          'Check soil moisture; prolonged waterlogging restricts root uptake of nutrients.'
        ],
        hi: [
          'महत्वपूर्ण: इस पर फंगीसाइड (कीटनाशक) का छिड़काव न करें; यह बीमारी नहीं बल्कि पोषक तत्वों की कमी है।',
          'मैग्नीशियम सल्फेट (1%) + 1% यूरिया या 19:19:19 घुलनशील खाद का सुबह के समय पत्तियों पर छिड़काव करें।',
          'खेत में पानी का भराव न होने दें; जलभराव से जड़ें भोजन नहीं ले पातीं।'
        ],
        mr: [
          'महत्त्वाचे: यावर कोणतेही बुरशीनाशक फवारू नका; हा रोग नसून अन्नद्रव्यांची कमतरता आहे.',
          'सकाळच्या वेळी १% मॅग्नेशियम सल्फेट + १% युरिया किंवा १९:१९:१९ विद्राव्य खताची फवारणी करा.',
          'शेतात पाणी साचणार नाही याची काळजी घ्या; जास्त ओलाव्यामुळे मुळे अन्नद्रव्ये शोषू शकत नाहीत.'
        ]
      },
      watchFor: {
        en: [
          'Observe new top leaves over the next 5–7 days for healthy green expansion.',
          'Inspect leaf undersides to ensure green leafhoppers are not co-occurring.'
        ],
        hi: [
          'अगले 5-7 दिनों में देखें कि क्या नए पत्ते हरे और स्वस्थ आ रहे हैं।',
          'पत्ती के नीचे देखें कि कहीं हरा फुदका (तेल्हा) तो नहीं बैठा है।'
        ],
        mr: [
          'पुढील ५-७ दिवसांत नवीन येणारी वरची पाने हिरवीगार येत आहेत का ते तपासा.',
          'पानांच्या मागे हिरवे तुडतुडे नाहीत ना याची खात्री करा.'
        ]
      },
      avoid: {
        en: [
          'DO NOT apply heavy nitrogen in dry soil conditions without moisture.',
          'DO NOT mistake nutritional reddening for viral infection.'
        ],
        hi: [
          'सूखी मिट्टी में बिना सिंचाई के यूरिया न डालें।',
          'पोषक तत्व की कमी को कोई संक्रामक बीमारी समझकर गलत दवाइयां न डालें।'
        ],
        mr: [
          'कोरड्या जमिनीत पाणी दिल्याशिवाय थेट युरिया खत टाकू नका.',
          'अन्नद्रव्यांच्या कमतरतेला रोग समजून चुकीची रासायनिक औषधे फवारू नका.'
        ]
      },
      prevention: {
        en: [
          'Conduct routine soil health tests before sowing to assess soil magnesium and zinc availability.',
          'Incorporate well-decomposed FYM (Farmyard Manure) or compost at 5 tonnes per acre during land preparation.',
          'Maintain balanced basal fertilizer application based on soil test recommendations.'
        ],
        hi: [
          'बुवाई से पहले मिट्टी की जांच जरूर करवाएं ताकि पोषक तत्वों का पता चले।',
          'खेत की तैयारी के समय 5 टन प्रति एकड़ सड़ी हुई गोबर की खाद (FYM) डालें।',
          'मिट्टी परीक्षण के अनुसार ही संतुलित खादों का प्रयोग करें।'
        ],
        mr: [
          'पेरणीपूर्वी माती परीक्षण (Soil Test) नक्की करा जेणेकरून जमिनीतील कमतरता समजेल.',
          'रानबांधणीच्या वेळी एकरी ५ टन चांगले कुजलेले शेणखत किंवा कंपोस्ट खत मिसळा.',
          'माती परीक्षणानुसारच संतुलित खतांचा वापर करा.'
        ]
      },
      expertEscalation: {
        en: [
          'If foliar fertilizer application shows no response after 8 days, or if angular water-soaked lesions appear on stems.'
        ],
        hi: [
          'यदि खाद के छिड़काव के 8 दिन बाद भी सुधार न दिखे या तनों पर काले धब्बे दिखें, तो कृषि विशेषज्ञ से संपर्क करें।'
        ],
        mr: [
          'जर विद्राव्य खताच्या फवारणीनंतर ८ दिवसांत सुधारणा दिसली नाही, तर स्थानिक कृषी सहाय्यकांचा सल्ला घ्या.'
        ]
      }
    },
    whatCouldChangeResultEn: 'If distinct angular water-soaked brown spots appear bounded by leaf veinlets, Bacterial Blight is active.',
    whatCouldChangeResultHi: 'यदि पत्तियों पर नसों से घिरे काले-भूरे चौकोर धब्बे दिखें, तो यह जीवाणु अंगमारी (Bacterial Blight) है।',
    whatCouldChangeResultMr: 'जर पानांवर शिरांनी मर्यादित केलेले काळे-तपकिरी चौकोनी डाग दिसले, तर हा जिवाणूजन्य करपा आहे.',
    whatToPhotographNextEn: 'Take a photo showing both upper green leaves and lower reddened leaves together for comparison.',
    whatToPhotographNextHi: 'पौधे का ऐसा फोटो लें जिसमें ऊपर के हरे पत्ते और नीचे के लाल पत्ते दोनों साफ दिखें।',
    whatToPhotographNextMr: 'झाडाचा असा फोटो घ्या ज्यात वरची हिरवी पाने आणि खालची लाल पाने दोन्ही एकत्र दिसतील.',
    whyReasoningEn: [
      'Characteristic interveinal anthocyanin purplish-red discoloration on mature foliage.',
      'Primary leaf veins remain dark green creating distinct skeleton pattern.',
      'Absence of fungal sporulation, necrotic fungal spots, or bacterial oozing.'
    ],
    whyReasoningHi: [
      'पुराने पत्तों की नसों के बीच का हिस्सा लाल-बैंगनी होना।',
      'मुख्य नसें हरी रहना और कोई फफूंद के धब्बे न होना।',
      'यह किसी कीड़े या बुरशी का नहीं, बल्कि भोजन (पोषक तत्वों) की कमी का लक्षण है।'
    ],
    whyReasoningMr: [
      'जुन्या पानांच्या शिरांमधील भाग लाल-जांभळा होणे.',
      'मुख्य शिरा हिरव्या राहणे आणि पानांवर कोणतेही बुरशीचे डाग नसणे.',
      'हे बुरशीचे नसून झाडाला आवश्यक अन्नद्रव्यांची कमतरता असल्याचे स्पष्ट लक्षण आहे.'
    ],
    environmentalRiskEn: 'Sandy or light soils with excessive rain leaching, followed by high boll-load stage, triggers rapid magnesium depletion.',
    environmentalRiskHi: 'हल्की रेतीली मिट्टी और अधिक बारिश के बाद बोंड बनते समय यह कमी अधिक दिखाई देती है।',
    environmentalRiskMr: 'हलकी वालुकामय जमीन आणि जास्त पावसानंतर बोंडे धरण्याच्या अवस्थेत ही कमतरता जास्त प्रमाणात दिसून येते.'
  }
};
