import { Database } from "lucide-react";

export const metadata = {
  title: "Sistem Durumu | Tunç Yazılım",
  description: "Tunç Yazılım operasyonel sunucu ve üretim hattı durum izleme paneli.",
};

export default function SystemStatus() {
  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <Database className="w-8 h-8 text-[#00e5ff]" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Sistem Durumu</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { name: "Ana Çekirdek (Core)", status: "Aktif", uptime: "99.999%", ping: "12ms" },
            { name: "SMD Üretim Hattı (AM100)", status: "Aktif", uptime: "100%", ping: "2ms" },
            { name: "AI Laboratuvarı (On-Premise)", status: "Optimum Yük", uptime: "99.98%", ping: "5ms" },
            { name: "Müşteri Portalı", status: "Aktif", uptime: "99.99%", ping: "18ms" }
          ].map((sys, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col hover:border-[#00e5ff]/50 transition-colors">
              <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-4">
                <span className="text-white font-bold tracking-wider uppercase">{sys.name}</span>
                <span className="flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  {sys.status}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Uptime: <strong className="text-white">{sys.uptime}</strong></span>
                <span>Latency: <strong className="text-[#00e5ff]">{sys.ping}</strong></span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 mb-4">
            <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_#10b981]"></div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Tüm Sistemler Operasyonel</h3>
          <p className="text-zinc-400">Son Güncelleme: Anlık olarak yapay zeka tarafından izlenmektedir.</p>
        </div>
      </div>
    </div>
  );
}
