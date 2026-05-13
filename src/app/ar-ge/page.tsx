import { Fingerprint, Beaker, ShieldAlert, Binary } from "lucide-react";

export const metadata = {
  title: "Ar-Ge Laboratuvarı | Tunç Yazılım",
  description: "Tunç Yazılım yüksek güvenlikli Ar-Ge merkezi ve geleceğin teknolojileri kuluçka üssü.",
};

export default function RAndDPage() {
  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      {/* Matrix Tarzı Arkapan */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-500 w-max mb-6">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Yetkisiz Giriş Yasaktır</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
            Ar-Ge <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#00e5ff]">Laboratuvarı</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            Gizlilik anlaşmaları (NDA) ile korunan, endüstriyel casusluğa karşı izole edilmiş kapalı devre test merkezimiz. Burada sadece yazılım kodlamıyoruz; yeni nesil materyalleri (grafen tabanlı iletkenler) ve savunma sanayi düzeyinde şifreleme algoritmalarını test ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Kuantum Algoritma Testleri", 
              desc: "Geleneksel şifreleme yöntemlerinin kuantum bilgisayarlar karşısındaki zafiyetlerini simüle eden test ortamı.",
              icon: <Binary className="text-[#00e5ff]" />
            },
            { 
              title: "Materyal Bilimi & SMD", 
              desc: "0402 boyutundan çok daha küçük nano-bileşenlerin PCB üzerine entegrasyonu için mikroskobik robotik kol kalibrasyonları.",
              icon: <Beaker className="text-[#00e5ff]" />
            },
            { 
              title: "Biyometrik Veri Güvenliği", 
              desc: "Yüz tanıma ve parmak izi analiz sistemlerinde halüsinasyonları ve sahte maske girişlerini engelleyen yapay zeka eğitimleri.",
              icon: <Fingerprint className="text-[#00e5ff]" />
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-[#00e5ff]/50 transition-colors group">
              <div className="mb-6 w-12 h-12 bg-black border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}

          <div className="bg-red-500/5 border border-red-500/20 p-8 flex flex-col justify-center items-center text-center">
            <ShieldAlert className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Portal Erişimi Sınırlı</h3>
            <p className="text-zinc-400 text-sm mb-6">Laboratuvarın canlı kamera ve telemetri verilerine sadece yetkili Tunç Yazılım mühendisleri VPN üzerinden erişebilir.</p>
            <button className="px-6 py-3 bg-red-500/20 text-red-500 font-bold text-xs uppercase tracking-widest border border-red-500/50 hover:bg-red-500 hover:text-white transition-colors cursor-not-allowed">
              Erişim Reddedildi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
