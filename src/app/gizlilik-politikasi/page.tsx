import { Terminal } from "lucide-react";

export const metadata = {
  title: "Gizlilik Politikası | Tunç Yazılım",
  description: "Tunç Yazılım gizlilik politikası ve veri güvenliği manifestosu.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 text-[#00e5ff]" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Gizlilik Politikası</h1>
        </div>
        
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed">
          <p className="text-xl text-white mb-8 border-l-2 border-[#00e5ff] pl-4">Tunç Yazılım ("Şirket"), kurumsal endüstri standartları gereği kullanıcılarının veri güvenliğini en üst seviyede tutmayı garanti eder.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">1. Veri Toplama Katmanları</h3>
          <p>Sistemlerimiz, sadece operasyonel gereklilikler ve sistem performans ölçümleri dahilinde log kayıtları oluşturur. Terminalimize, üretim bantlarımıza (SMD) ve Ar-Ge birimlerimize entegre olan tüm sistemlerin verileri kapalı devre on-premise sunucularımızda şifrelenir.</p>

          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">2. Veri İşleme Metodolojisi</h3>
          <p>Endüstriyel AI ve RPA botlarımız, size ait herhangi bir hassas veriyi şirket dışı 3. parti (halüsinasyon riski olan public API'ler) modellerle paylaşmaz. Tüm LLM/Yapay zeka analizleri on-premise olarak kendi donanımlarımız üzerinde yapılır.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">3. Çerez ve İzleme Algoritmaları</h3>
          <p>Sistem arayüzünde kullanılan çerezler, güvenlik doğrulaması ve session stabilitesi için gereklidir. Pazarlama odaklı, kimlik tanımlayıcı agressif çerezler Tunç Yazılım altyapısında barındırılmaz.</p>
        </div>
      </div>
    </div>
  );
}
