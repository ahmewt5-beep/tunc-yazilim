"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCanvas from "./canvas/HeroCanvas";
import { ChevronDown, Cpu, Network, DatabaseZap, Crosshair } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [dataStream, setDataStream] = useState("00:00:00:00");
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataStream(
        `${Math.floor(Math.random() * 99)}:${Math.floor(Math.random() * 99)}:${Math.floor(Math.random() * 9999)}`
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020202]">
      {/* 3D Canvas - Alt Katman */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* HUD ve Grid - Teknik Arayüz Katmanı */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Tarama Çizgisi (Scanning Line) */}
      <motion.div
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1 bg-[#00e5ff] opacity-30 shadow-[0_0_30px_#00e5ff] z-10 pointer-events-none"
      ></motion.div>

      {/* Dev Arka Plan Metni (Watermark) */}
      <motion.div
        style={{ y: yText }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0 mix-blend-overlay"
      >
        <h1 className="text-[12rem] md:text-[25rem] font-black tracking-tighter whitespace-nowrap text-white">TUNÇ</h1>
      </motion.div>

      {/* Canlı Veri Akışı (Sol Üst Köşe) */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none hidden md:block">
        <div className="text-[#00e5ff] font-mono text-xs tracking-widest flex items-center gap-2">
          <DatabaseZap className="w-4 h-4 animate-pulse" />
          SYS_LOG: <span className="text-white">{dataStream}</span>
        </div>
        <div className="text-zinc-600 font-mono text-[10px] mt-1">MAIN_CORE_ONLINE // 99.998%</div>
      </div>

      {/* Merkez İçerik */}
      <motion.div
        style={{ opacity: opacityText }}
        className="z-10 container mx-auto px-6 lg:px-12 pointer-events-none mt-20 md:mt-0 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700">
              <div className="w-1.5 h-1.5 bg-[#00e5ff] animate-pulse"></div>
              <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">Sistem Aktif</span>
            </div>
            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
              // Tunç Yazılım Üretim Üssü
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-6 leading-[0.9] uppercase">
            TUNÇ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-600 border-b-8 border-[#00e5ff]">Yazılım_</span>
          </h2>

          <p className="text-lg md:text-3xl text-zinc-300 mb-12 max-w-4xl font-light leading-relaxed border-l-4 border-[#00e5ff] pl-6 bg-gradient-to-r from-zinc-900/80 to-transparent py-4 backdrop-blur-sm">
            <strong className="font-bold text-white">Tunç Yazılım</strong>; ağır sanayi donanım dizgisi (SMD), kurumsal yapay zeka ve C++/Rust tabanlı mimariler ile şirketinizin teknolojik altyapısını donanımdan buluta kadar sıfırdan inşa eder.
          </p>

          <div className="flex flex-wrap gap-6 pointer-events-auto">
            <Link href="/departmanlar/donanim" className="relative px-10 py-5 bg-[#00e5ff] text-black font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Crosshair className="w-4 h-4" /> Sistemlere Gir
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
            </Link>
            <Link href="/ar-ge" className="flex items-center justify-center px-10 py-5 bg-transparent text-white font-bold text-sm tracking-[0.2em] uppercase border border-zinc-700 hover:border-[#00e5ff] hover:bg-[#00e5ff]/5 transition-colors duration-300">
              Terminal (Portal)
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none hidden md:flex">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-bold">Kaydırarak İncele</span>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-[#00e5ff]" />
        </motion.div>
      </div>
    </section>
  );
}
