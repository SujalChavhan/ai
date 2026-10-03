import { AgriculturalSource } from '../types';

export const AGRICULTURAL_SOURCES: Record<string, AgriculturalSource> = {
  icar_tomato_bulletin: {
    id: 'icar_tomato_bulletin',
    sourceName: 'ICAR-IIHR Tomato Disease Management Advisory',
    organization: 'Indian Institute of Horticultural Research (ICAR-IIHR), Bengaluru',
    recommendation: 'Recommend immediate sanitation of lower affected leaves, avoiding overhead irrigation, and field scouting before chemical deployment.',
    publishedYear: 2024,
    confidenceSupport: 'strong',
    url: 'https://iihr.icar.gov.in'
  },
  fao_pest_management: {
    id: 'fao_pest_management',
    sourceName: 'FAO Integrated Pest & Disease Management Guide',
    organization: 'Food and Agriculture Organization of the United Nations (FAO)',
    recommendation: 'Prioritize cultural and biological controls; verify environmental humidity threshold (>80% RH) before systemic fungicide application.',
    publishedYear: 2023,
    confidenceSupport: 'strong',
    url: 'https://www.fao.org/plant-health'
  },
  tnau_agritech: {
    id: 'tnau_agritech',
    sourceName: 'TNAU Agritech Portal - Crop Protection Repository',
    organization: 'Tamil Nadu Agricultural University (TNAU)',
    recommendation: 'Remove and destroy fallen infected foliage; maintain 60cm row spacing for aeration to lower spore germination.',
    publishedYear: 2024,
    confidenceSupport: 'strong',
    url: 'https://agritech.tnau.ac.in'
  },
  iari_cereal_handbook: {
    id: 'iari_cereal_handbook',
    sourceName: 'IARI Cereal Pathology & Stress Manual',
    organization: 'ICAR - Indian Agricultural Research Institute (Pusa), New Delhi',
    recommendation: 'Differentiate physiological nitrogen starvation from fungal spots via midrib chlorosis tracking.',
    publishedYear: 2023,
    confidenceSupport: 'strong',
    url: 'https://www.iari.res.in'
  },
  kvk_extension_bulletin: {
    id: 'kvk_extension_bulletin',
    sourceName: 'KVK District Agro-Advisory Bulletin',
    organization: 'Krishi Vigyan Kendra Agricultural Extension Network',
    recommendation: 'Farmer should consult local KVK agronomist if chlorosis exceeds 30% of canopy foliage.',
    publishedYear: 2024,
    confidenceSupport: 'moderate',
    url: 'https://kvk.icar.gov.in'
  }
};
