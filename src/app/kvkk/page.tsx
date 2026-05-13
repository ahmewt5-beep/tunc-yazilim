import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "KVKK Aydınlatma Metni | Tunç Yazılım",
  description: "Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metni.",
};

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-8 h-8 text-[#00e5ff]" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">KVKK Aydınlatma Metni</h1>
        </div>
        
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed">
          <p className="text-xl text-white mb-8 border-l-2 border-[#00e5ff] pl-4">Tunç Yazılım A.Ş. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca veri sorumlusu sıfatıyla sizi aydınlatıyoruz.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">1. Veri İşleme Amacı</h3>
          <p>Müşterilerimize, iş ortaklarımıza ve Ar-Ge laboratuvarımıza giriş yapan personellere ait veriler, yalnızca "Donanım üretimi, AI modelleme, sözleşmelerin ifası ve tesis güvenliğinin sağlanması" amacıyla işlenmektedir.</p>

          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">2. Veri Güvenliği ve Saklama (On-Premise)</h3>
          <p>Toplanan tüm kişisel ve kurumsal veriler, bulut sistemler yerine doğrudan Tunç Yazılım veri merkezindeki şifreli (End-to-End Encryption) sunucularda barındırılır. Askeri standartlarda koruma sağlanır.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">3. Haklarınız</h3>
          <p>KVKK'nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, silinmesini/yok edilmesini talep etme ve işleme amacını sorma haklarınız Tunç Yazılım portalı üzerinden her an kullanılabilir.</p>
        </div>
      </div>
    </div>
  );
}
