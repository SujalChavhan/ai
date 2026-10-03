import { CropInfo } from '../types';

export const CROPS_DATABASE: CropInfo[] = [
  {
    id: 'tomato',
    nameEn: 'Tomato',
    nameHi: 'टमाटर',
    nameMr: 'टोमॅटो',
    scientificName: 'Solanum lycopersicum',
    category: 'Vegetable',
    icon: '🍅',
    description: 'Solanaceous fruiting vegetable prone to Early Blight, Septoria leaf spot, and Tomato Yellow Leaf Curl.',
    commonDiseases: ['Early Blight', 'Late Blight', 'Septoria Leaf Spot', 'Leaf Curl Virus', 'Bacterial Spot']
  },
  {
    id: 'chilli',
    nameEn: 'Chilli / Pepper',
    nameHi: 'मिर्च',
    nameMr: 'मिरची',
    scientificName: 'Capsicum annuum',
    category: 'Spices & Vegetables',
    icon: '🌶️',
    description: 'Hot pepper plant sensitive to Anthracnose, Powdery Mildew, Leaf Curl, and Mite damage.',
    commonDiseases: ['Anthracnose (Dieback)', 'Chilli Leaf Curl Virus', 'Powdery Mildew', 'Bacterial Wilt']
  },
  {
    id: 'potato',
    nameEn: 'Potato',
    nameHi: 'आलू',
    nameMr: 'बटाटा',
    scientificName: 'Solanum tuberosum',
    category: 'Tuber',
    icon: '🥔',
    description: 'Starchy tuber crop vulnerable to Late Blight, Early Blight, and Black Scurf.',
    commonDiseases: ['Late Blight', 'Early Blight', 'Common Scab', 'Black Scurf']
  },
  {
    id: 'rice',
    nameEn: 'Rice / Paddy',
    nameHi: 'धान / चावल',
    nameMr: 'भात / तांदूळ',
    scientificName: 'Oryza sativa',
    category: 'Cereal',
    icon: '🌾',
    description: 'Primary staple cereal susceptible to Blast, Brown Spot, and Bacterial Leaf Blight.',
    commonDiseases: ['Rice Blast', 'Brown Spot', 'Bacterial Leaf Blight', 'Sheath Blight']
  },
  {
    id: 'wheat',
    nameEn: 'Wheat',
    nameHi: 'गेहूं',
    nameMr: 'गहू',
    scientificName: 'Triticum aestivum',
    category: 'Cereal',
    icon: '🌾',
    description: 'Rabi cereal prone to Rusts (Yellow/Brown), Karnal Bunt, and Powdery Mildew.',
    commonDiseases: ['Yellow Rust', 'Brown Leaf Rust', 'Powdery Mildew', 'Loose Smut']
  },
  {
    id: 'cotton',
    nameEn: 'Cotton',
    nameHi: 'कपास',
    nameMr: 'कापूस',
    scientificName: 'Gossypium hirsutum',
    category: 'Cash Crop / Fibre',
    icon: '🌿',
    description: 'Major commercial crop vulnerable to Grey Mildew, Bacterial Blight, and Pink Bollworm damage.',
    commonDiseases: ['Bacterial Blight (Angular Leaf Spot)', 'Grey Mildew (Dahiya)', 'Alternaria Leaf Spot']
  },
  {
    id: 'maize',
    nameEn: 'Maize / Corn',
    nameHi: 'मक्का',
    nameMr: 'मका',
    scientificName: 'Zea mays',
    category: 'Cereal',
    icon: '🌽',
    description: 'Coarse cereal susceptible to Turcicum Leaf Blight, Common Rust, and Fall Armyworm stress.',
    commonDiseases: ['Turcicum Leaf Blight', 'Maydis Leaf Blight', 'Common Rust', 'Downy Mildew']
  },
  {
    id: 'mango',
    nameEn: 'Mango',
    nameHi: 'आम',
    nameMr: 'आंबा',
    scientificName: 'Mangifera indica',
    category: 'Fruit',
    icon: '🥭',
    description: 'Perennial fruit tree susceptible to Anthracnose, Powdery Mildew, and Malformation.',
    commonDiseases: ['Mango Anthracnose', 'Powdery Mildew', 'Dieback', 'Bacterial Canker']
  },
  {
    id: 'soybean',
    nameEn: 'Soybean',
    nameHi: 'सोयाबीन',
    nameMr: 'सोयाबीन',
    scientificName: 'Glycine max',
    category: 'Oilseed / Legume',
    icon: '🌱',
    description: 'Major kharif oilseed crop prone to Rust, Yellow Mosaic Virus, and Pod Blight.',
    commonDiseases: ['Soybean Rust', 'Yellow Mosaic Virus', 'Charcoal Rot', 'Frog-eye Leaf Spot']
  },
  {
    id: 'onion',
    nameEn: 'Onion',
    nameHi: 'प्याज',
    nameMr: 'कांदा',
    scientificName: 'Allium cepa',
    category: 'Vegetable / Bulb',
    icon: '🧅',
    description: 'Bulb vegetable prone to Purple Blotch, Stemphylium blight, and Downy Mildew.',
    commonDiseases: ['Purple Blotch', 'Stemphylium Blight', 'Downy Mildew', 'Basal Rot']
  },
  {
    id: 'sugarcane',
    nameEn: 'Sugarcane',
    nameHi: 'गन्ना',
    nameMr: 'ऊस',
    scientificName: 'Saccharum officinarum',
    category: 'Cash Crop',
    icon: '🎋',
    description: 'Perennial cash crop vulnerable to Red Rot, Smut, and Grassy Shoot Disease.',
    commonDiseases: ['Red Rot', 'Sugarcane Smut', 'Grassy Shoot', 'Rust']
  },
  {
    id: 'brinjal',
    nameEn: 'Brinjal / Eggplant',
    nameHi: 'बैंगन',
    nameMr: 'वांगी',
    scientificName: 'Solanum melongena',
    category: 'Vegetable',
    icon: '🍆',
    description: 'Solanaceous crop susceptible to Phomopsis blight, Little Leaf, and Bacterial Wilt.',
    commonDiseases: ['Phomopsis Blight', 'Little Leaf of Brinjal', 'Bacterial Wilt', 'Damping Off']
  }
];
