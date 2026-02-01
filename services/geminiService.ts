
export class GeminiService {
  constructor() { }

  async getPlantingAdvice(plantName: string): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return `Berikut adalah tips menanam untuk ${plantName}:
    
1. **Penyiraman**: Lakukan penyiraman secukupnya setiap pagi dan sore hari. Pastikan tanah tetap lembab namun tidak tergenang air untuk mencegah pembusukan akar.
2. **Sinar Matahari**: Tempatkan tanaman di lokasi yang mendapatkan sinar matahari langsung minimal 6 jam sehari. Jika tanaman terlihat layu di siang hari yang terik, berikan naungan sementara.
3. **Pemupukan**: Berikan pupuk organik cair atau kompos setiap 2 minggu sekali untuk menunjang pertumbuhan vegetatif.
4. **Perawatan**: Periksa secara rutin adanya hama seperti kutu daun. Pangkas daun yang menguning atau kering untuk menjaga kesehatan tanaman.

(Saran ini digenerate secara otomatis untuk mode offline)`;
  }
}

export const geminiService = new GeminiService();
