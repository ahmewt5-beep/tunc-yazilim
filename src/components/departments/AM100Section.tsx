"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, Settings, Activity, Cpu } from "lucide-react";
import { useRef } from "react";

export default function AM100Section() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="py-32 relative bg-[#020202] border-y border-border overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#00e5ff] uppercase">Ağır Sanayi Üretim Hattı</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                Panasonic <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-600">AM 100 SMD</span><br/>
                Dizgi Hattı.
              </h2>
              
              <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
                Kusursuz seri üretim. <strong className="text-white font-medium">Tunç Yazılım</strong> laboratuvarlarında yer alan Panasonic AM 100 tam otomatik dizgi makinesi ile saniyede yüzlerce mikro bileşeni (0201 paketler dahi) sıfır hata toleransıyla PCB üzerine işliyoruz. Ar-Ge projelerimizi doğrudan fabrikasyon sürecine entegre eden devasa üretim gücümüz.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 hover:border-[#00e5ff]/50 transition-colors">
                  <Activity className="w-6 h-6 text-[#00e5ff] mb-2" />
                  <div className="text-2xl font-black text-white">35.800</div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">CPH Hız Kapasitesi</div>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 hover:border-[#00e5ff]/50 transition-colors">
                  <Settings className="w-6 h-6 text-[#00e5ff] mb-2" />
                  <div className="text-2xl font-black text-white">0402 (01005)</div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Çip Hassasiyeti</div>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 hover:border-[#00e5ff]/50 transition-colors">
                  <Cpu className="w-6 h-6 text-[#00e5ff] mb-2" />
                  <div className="text-2xl font-black text-white">14 Slot</div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Feeder Kapasitesi</div>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 hover:border-[#00e5ff]/50 transition-colors">
                  <Factory className="w-6 h-6 text-[#00e5ff] mb-2" />
                  <div className="text-2xl font-black text-white">7/24</div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Operasyon Süresi</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full h-full relative">
            {/* Fotoğraf Alanı */}
            <motion.div 
              style={{ y: yImage }}
              className="relative w-full aspect-[4/3] bg-zinc-900 border border-zinc-700 shadow-[0_0_50px_rgba(0,229,255,0.1)] group overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Gelecek olan fotoğraf burada render edilecek */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/am100.jpg" 
                  alt="Panasonic AM100 Dizgi Hattı" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e) => {
                    // Eğer fotoğraf henüz yoksa placeholder göstermeye devam etsin
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Sitenin rengiyle uyumlu Cyan Hologram Efekti */}
                <div className="absolute inset-0 bg-[#00e5ff] mix-blend-overlay opacity-40 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>

              {/* Fotoğraf yüklenene kadar veya bulunamazsa arka planda görünecek Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 flex flex-col items-center justify-center -z-10">
                <Factory className="w-16 h-16 text-zinc-700 mb-4 group-hover:text-[#00e5ff] transition-colors duration-500" />
                <span className="text-zinc-600 font-bold tracking-[0.2em]">PANASONIC AM100</span>
                <span className="text-zinc-700 text-xs mt-2">public/images/am100.jpg bekleniyor...</span>
              </div>

              {/* Holographic scanning effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00e5ff]/60 blur-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_ease-in-out_infinite] z-10"></div>
            </motion.div>

            {/* Dekoratif Çizgiler */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-2 border-r-2 border-[#00e5ff]/30"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-t-2 border-l-2 border-[#00e5ff]/30"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
