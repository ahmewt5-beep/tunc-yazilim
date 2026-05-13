import { ShieldAlert, Cpu, Eye } from "lucide-react";

export const metadata = {
  title: "Savaş Odası (Manifesto) | Tunç Yazılım",
  description: "Tunç Yazılım'ın kurumsal vizyonu, bağımsızlık manifestosu ve teknoloji stratejileri.",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#020202] py-24 relative overflow-hidden">
      {/* Dev Arka Plan Metni */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0 mix-blend-overlay">
        <h1 className="text-[15rem] md:text-[25rem] font-black tracking-tighter text-white uppercase leading-none">WAR ROOM</h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-20 mt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-900/20 border border-red-500/30 text-red-500 mb-8">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-black tracking-[0.3em] uppercase">Strateji Merkezi - Seviye 1 Erişim</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">
            Dijital <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900">Bağımsızlık</span><br />
            Manifestosu.
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            Biz "iş yapan" bir dijital ajans değiliz. Biz, dışa bağımlılığı parçalayan, kendi anakartını dizen, kendi yapay zekasını kendi sunucularında eğiten bir <strong className="text-white font-bold">Mühendislik Hanedanıyız.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-zinc-900/50 border-l-4 border-red-500 p-8 md:p-12 hover:bg-zinc-900 transition-colors">
            <Cpu className="w-10 h-10 text-red-500 mb-6" />
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">01. Donanım Özgürlüğü</h3>
            <p className="text-zinc-400 leading-relaxed font-light">
              Yazılım ne kadar güçlü olursa olsun, başkasının donanımında koştuğu sürece esirdir. Bu yüzden Panasonic AM100 dizgi hattımızı kurduk. Sensörlerimizden veri merkezimize kadar her bir mikronu kendimiz tasarlıyoruz.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border-l-4 border-red-500 p-8 md:p-12 hover:bg-zinc-900 transition-colors">
            <Eye className="w-10 h-10 text-red-500 mb-6" />
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">02. Yapay Zeka Mahremiyeti</h3>
            <p className="text-zinc-400 leading-relaxed font-light">
              Şirketlerin en hassas verilerini public LLM modellerine yedirmeyi reddediyoruz. Tüm zekayı yerel ağlara (on-premise) taşıdık. Bizim inşa ettiğimiz otonom sistemler sağır, dilsiz ve sadece sizin için çalışır.
            </p>
          </div>
        </div>

        <div className="border border-zinc-800 bg-black p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">"Kod Değil, Endüstri İnşa Ediyoruz."</h3>
          <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">Eyyüp Tunç / Kurucu ve CEO</p>
        </div>
      </div>
    </div>
  );
}
