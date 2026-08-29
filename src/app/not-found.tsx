import Link from "next/link";
import { Terminal, AlertTriangle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#020202] px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="relative z-10 max-w-xl w-full border border-zinc-800 bg-zinc-950/80 p-8 md:p-12 text-center backdrop-blur-md">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-none bg-red-500/10 border border-red-500/30 text-red-400">
          <AlertTriangle className="w-8 h-8 text-[#00e5ff]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[10px] font-mono font-bold tracking-widest text-[#00e5ff] uppercase mb-4">
          <Terminal className="w-3.5 h-3.5" /> ERR_404 // SAYFA BULUNAMADI
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">
          Hedef Sinyal Kaybı
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
          Ulaşmaya çalıştığınız dizin veya kaynak mevcut değil ya da sunucu mimarimiz üzerinde yeniden yapılandırılmış olabilir.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00e5ff] text-black text-xs font-bold tracking-widest uppercase hover:bg-cyan-300 transition-colors"
          >
            <Home className="w-4 h-4" /> Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-bold tracking-widest uppercase hover:text-white hover:border-zinc-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Makaleleri İncele
          </Link>
        </div>
      </div>
    </div>
  );
}
