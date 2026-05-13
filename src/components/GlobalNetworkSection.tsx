"use client";
import { Canvas } from "@react-three/fiber";
import Globe from "./canvas/Globe";
import { motion } from "framer-motion";
import { Globe2, Activity, ServerCrash } from "lucide-react";

export default function GlobalNetworkSection() {
  return (
    <section className="py-32 relative bg-[#000000] border-y border-zinc-900 overflow-hidden min-h-[800px] flex items-center">
      {/* 3D Canvas Arkaplan */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <Globe />
        </Canvas>
      </div>
      
      {/* Sol-Sağ Lineer Karartma */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pointer-events-none">
        <div className="flex flex-col lg:flex-row items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 border border-zinc-800 p-8 md:p-12 backdrop-blur-md max-w-xl pointer-events-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe2 className="w-6 h-6 text-[#00e5ff]" />
                <span className="text-xs font-bold tracking-[0.3em] text-[#00e5ff] uppercase">Global Network Protocol</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                Küresel Veri <br /> Hakimiyeti.
              </h2>
              
              <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
                Tunç Yazılım'ın altyapı sistemleri sadece yerel cihazlarla sınırlı değildir. Dünya etrafında konumlandırılmış sunucu düğümleri (nodes) üzerinden, endüstriyel makine verileriniz ve AI iş yükleriniz milisaniyeler içinde küresel ağda şifrelenerek işlenir.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-sm text-zinc-300 font-semibold tracking-wider">Aktif Kıtalararası Node</span>
                  <span className="text-[#00e5ff] font-mono font-bold">14.092</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-sm text-zinc-300 font-semibold tracking-wider">Ağ Gecikmesi (Global Avg)</span>
                  <span className="text-emerald-500 font-mono font-bold flex items-center gap-2"><Activity className="w-3 h-3" /> 24ms</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-sm text-zinc-300 font-semibold tracking-wider">Veri Kaybı / Paket Düşmesi</span>
                  <span className="text-white font-mono font-bold">0.00%</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
