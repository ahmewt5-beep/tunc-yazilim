"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Layers, MonitorPlay, Component, Ruler, Grid3x3 } from "lucide-react";
import { useRef } from "react";

export default function ArchitectureSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBlueprint = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="py-32 relative bg-[#000511] border-y-4 border-blue-900/50 overflow-hidden">
      {/* Dev Blueprint Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.3)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-blue-500 z-0"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-blue-500 z-0"></div>

      {/* Dev Watermark */}
      <motion.div style={{ y: yBlueprint }} className="absolute top-0 right-0 opacity-10 pointer-events-none z-0">
        <h2 className="text-[12rem] font-black tracking-tighter text-blue-500 uppercase rotate-90 origin-right">SPATIAL</h2>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#000511]/80 p-8 border border-blue-900/50 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-6 border-b border-blue-900/50 pb-4">
                <Grid3x3 className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
                  Tunç Yazılım Mimari & CAD Birimi
                </span>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-black text-white mb-6 leading-[1.1] uppercase">
                Mekanın <br /> <span className="text-blue-500">Algoritmik</span> Tasarımı.
              </h3>
              
              <p className="text-blue-100/70 text-lg mb-8 font-light leading-relaxed">
                Fiziksel alanların tasarımı ile dijital dünyanın kusursuz birleşimi. <strong className="text-white font-medium">Tunç Yazılım</strong>, akıllı bina konseptlerinden endüstriyel tesislere kadar tüm projelerinizi mimari olarak çizer (AutoCAD/Revit) ve teknolojik altyapısını (BIM/Unreal Engine) sanal ortamda simüle eder. Gerçek dünya inşa edilmeden önce dijitalde test edilir.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-950/30 border border-blue-900/50 p-4">
                  <h4 className="text-white font-bold text-xl mb-1">2mm</h4>
                  <p className="text-[10px] text-blue-300 font-bold tracking-widest uppercase">Lidar Tarama Hassasiyeti</p>
                </div>
                <div className="bg-blue-950/30 border border-blue-900/50 p-4">
                  <h4 className="text-white font-bold text-xl mb-1">LOD 500</h4>
                  <p className="text-[10px] text-blue-300 font-bold tracking-widest uppercase">BIM Detay Seviyesi</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Dijital İkiz (Digital Twin)", desc: "Üretim bantlarının ve HVAC altyapılarının sensörlerle anlık beslenen birebir dijital kopyaları.", icon: <Layers className="text-blue-400" /> },
                { title: "Teknik Pafta & CAD", desc: "Endüstriyel tesisler için yüksek hassasiyetli elektrik/mekanik projeler ve Revit entegrasyonu.", icon: <Component className="text-blue-400" /> },
                { title: "Etkileşimli 3D Görselleştirme", desc: "Unreal Engine ve WebGL tabanlı, devasa projelerin web ortamında etkileşimli sunumu.", icon: <MonitorPlay className="text-blue-400" /> }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-blue-950/20 border-l-4 border-blue-600 p-6 flex gap-6 hover:bg-blue-900/40 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#000511] border border-blue-900/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 tracking-tight uppercase">{item.title}</h4>
                    <p className="text-sm text-blue-200/70 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
