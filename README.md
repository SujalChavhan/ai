# 🌾 KisanDrishti AI (किसानदृष्टी / शेतकरी दृष्टी)
### AI-Powered Crop Health Intelligence & Safe Advisory Platform
**Built for PS-07: AI-Based Crop Disease Detection & Advisory System**

> *“AI that knows when it doesn’t know. Accuracy > Transparency > Safety > Usability > Flashy Claims.”*

---

## 🌟 Core Philosophy: "Complex AI Behind the Scenes. Simple Experience for the Farmer."

Most conventional crop disease apps follow an unsafe pattern:
`Upload single photo → Guess a disease name → Push chemical spray`

**KisanDrishti AI** fundamentally shifts the paradigm to:
`DETECT → VERIFY → EXPLAIN → ADVISE → MONITOR`

If the photograph is blurry, taken of a non-plant object, shows ambiguous symptoms, or represents an unknown condition outside certified datasets, the system will **NEVER guess**. Instead, it prominently states:
**🤔 "WE ARE NOT SURE"** and provides clear, actionable guidance on what to photograph next.

---

## 🚀 Key Feature Matrix

| Feature | Farmer Experience (Simple) | Scientific & Hackathon Expert Mode |
|---|---|---|
| **Multi-Image Intelligence** | Captures 4 guided angles (Full Plant, Leaf Close-up, Alternate Angle, Underside/Stem) with summary: *"3 of 4 photos support this result"* | Cross-validates spatial consistency, checks contradictions, and avoids single-angle bias. |
| **Image Quality Gate & Safety** | Detects motion blur, darkness, or non-plant objects (cats, cars, coffee cups) with polite retake guidance. | Pre-diagnostic IQI scoring and edge-spread function filters. |
| **Crop Identification** | Auto-identifies crop with 1-tap fallback cards (Tomato, Chilli, Potato, Wheat, Rice, Cotton, Maize, Mango, etc.). | Botanical taxonomy validation (`Solanum lycopersicum`, `Capsicum annuum`, etc.). |
| **Targeted Farmer Context** | Asks only 2 simple questions (*When noticed?* & *Is it spreading?*) + optional local weather. | Incorporates relative humidity threshold (>80% RH), temperature, and regional microclimate risk. |
| **Smart Differential Questions** | When two diseases look alike (e.g. Early Blight vs Septoria), asks a targeted visual question with *"Why are we asking?"*. | Bayesian likelihood update and pathognomonic marker discrimination. |
| **Unsure Engine** | Explicitly displays **🤔 WE ARE NOT SURE** and tells farmer *"What to photograph next"*. | PS-07 Zero-Hallucination policy enforcement when statistical confidence is below safety thresholds. |
| **Disease vs Abiotic Stress** | Prevents pesticide misuse by distinguishing Nutrient Deficiency (Nitrogen/Magnesium/Potassium) from microbial disease. | Interveinal chlorosis and green-vein skeleton tracking vs fungal necrosis. |
| **Agricultural Knowledge Retrieval** | Displays verified recommendations from ICAR, TNAU, and FAO. | Side-by-side contrast: **AI Observation vs Agricultural Research Evidence vs Final Assessment**. |
| **Safe Treatment Protocols** | 5 Tabbed Action Box: **✅ DO NOW, 👀 WATCH FOR, 🚫 AVOID, 🌱 PREVENTION, 👨🌾 GET EXPERT HELP WHEN**. | Safety verification gate prevents unsupported toxic chemical recommendations. |
| **Field Multi-Plant Scanner** | 6-point schematic field plot map showing localized hotspots vs healthy zones. | Calculates spatial clustering to advise targeted quadrant containment rather than blanket spraying. |
| **Crop Memory & Timeline** | Interactive **Before vs Now** photo comparison slider to track healing progression. | Tracks recovery timeline (Day 1 → Day 4 → Day 8) with strict no-overclaim safety wording. |
| **Multilingual Voice Assistant** | **बोलकर पूछें** with real-time speech recognition and text-to-speech in **हिन्दी, मराठी, and English**. | Integrated Web Speech API audio transcription and speech synthesis. |
| **KVK Expert Referral Slip** | 1-Click generated Krishi Vigyan Kendra (KVK) Plant Doctor referral slip with QR code and clinical notes. | Standardized case export containing patient plant ID, symptoms, multi-angle photos, and uncertainty factors. |
| **Hackathon Demo Suite** | 8 1-click test scenarios for hackathon judges to verify edge cases and non-hallucination. | Tests healthy, clear disease, blurry image, rare disease, non-plant, lookalike, conflicting angles, and nutrient stress. |

---

## 🏫 The 8 Hackathon Judge Test Cases

1. **Case 1: Healthy Tomato Plant** — Confirms vibrant health, zero lesions, and strictly avoids recommending unnecessary preventative chemicals.
2. **Case 2: Clear Disease (Early Blight)** — Classic target concentric rings with yellow halo. Multi-image consistency is 100%. Generates safe DO NOW / AVOID actions.
3. **Case 3: Poor / Blurry Image (Quality Gate)** — Severe camera blur triggers safety gate, halting disease classification and requesting steady daylight photos.
4. **Case 4: Rare / Unknown Disease (Unsure Engine)** — Symptoms outside certified databases trigger **🤔 WE ARE NOT SURE**, refusing to guess and guiding KVK expert escalation.
5. **Case 5: Non-Plant Image (Cat / Car / Object)** — Rejects non-agricultural images with polite instructions.
6. **Case 6: Lookalike Differential Case (Early Blight vs Septoria)** — Ambiguous foliar spots trigger conversational follow-up questions with *"Why are we asking?"* explainability.
7. **Case 7: Conflicting Multi-Image Evidence** — Slot 1 healthy, Slot 2 infected with early spot; reports *"1 of 4 photos shows symptoms"* and recommends spot-leaf removal rather than whole-field spray.
8. **Case 8: Abiotic Stress / Nutrient Deficiency** — Cotton purplish-red leaves identified as Magnesium & Nitrogen deficiency with explicit warning: *"DO NOT SPRAY FUNGICIDES"*.

---

## 🛠️ Technology Stack & Architecture

- **Core Framework**: React 19 + TypeScript (Strict typings)
- **Styling**: Modern CSS Design System (Custom tokens, glassmorphism, responsive mobile-first layout, dark/light themes, low-bandwidth mode)
- **Icons**: Lucide React
- **Speech Engine**: Web Speech API (`SpeechRecognition` & `SpeechSynthesisUtterance` for `en-IN`, `hi-IN`, `mr-IN`)
- **Visual Synthesis**: Multi-angle SVG pathology simulation + device camera stream integration (`navigator.mediaDevices.getUserMedia`)
- **Dev Server / Bundler**: Vite 8

---

## 💻 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:5173/
```

---

## 📄 License & Attribution
Developed for **PS-07: AI-Based Crop Disease Detection & Advisory System**.
Knowledge citations referenced from ICAR-IIHR, Indian Agricultural Research Institute (IARI), TNAU Agritech Portal, and Food and Agriculture Organization (FAO).
