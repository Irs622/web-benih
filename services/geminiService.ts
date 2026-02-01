
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getPlantingAdvice(plantName: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Berikan tips singkat dan praktis dalam bahasa Indonesia untuk menanam dan merawat ${plantName}. Fokus pada penyiraman, sinar matahari, dan pemupukan. Gunakan format poin-poin.`,
      });
      return response.text || "Maaf, asisten AI sedang sibuk. Silakan coba lagi nanti.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Gagal mendapatkan saran tanam. Periksa koneksi internet Anda.";
    }
  }
}

export const geminiService = new GeminiService();
