import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY_SYMPTOM;
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateResponse = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // okay if you're allowed

    const prompt = `You are a helpful medical assistant AI.

A patient is reporting these symptoms: ${text}

Please respond in bullet points with:
- Possible causes or conditions
- Suggested type(s) of doctor/specialist to consult
- Keep it concise (under 50 words total)
`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const summary = response.text; // ✅ FIX: access it as a property, NOT as a function

    return summary;
  } catch (err) {
    console.error("Gemini Error:", err?.message || err);
    return "Failed to fetch response from Gemini.";
  }
};
