"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, Wifi, Factory, Orbit } from "lucide-react";

const features = [
  { 
    title: "Endüstriyel SMD Dizgi Hattı", 
    desc: "Tunç Yazılım bünyesindeki Panasonic AM 100 tam otomatik hat ile milimetrik hassasiyette, yüksek hızlı PCB prototipleme ve seri donanım üretimi.", 
    icon: <Factory className="w-6 h-6 text-[#00e5ff]" /> 
  },
  { 
    title: "Gömülü Sistem Mühendisliği", 
    desc: "C/C++ ve Rust tabanlı, STM32, ESP32 ve ARM Cortex mimarilerinde sıfırdan devre tasarımı, firmware kodlama ve donanım entegrasyonu.", 
    icon: <Cpu className="w-6 h-6 text-[#00e5ff]" /> 
  },
  { 
    title: "IIoT & Fabrika Otomasyonu", 
    desc: "Üretim bantlarının, sensör ağlarının ve fiziksel makinelerin Tunç Yazılım merkezi sunucularıyla SCADA üzerinden kusursuz haberleşmesi.", 
    icon: <Wifi className="w-6 h-6 text-[#00e5ff]" /> 
  },
  { 
    title: "HPC Donanım Optimizasyonu", 
    desc: "Ağır yük gerektiren AI modelleri (LLM/Stable Diffusion) ve render işlemleri için sıvı soğutmalı GPU kümeleri (Cluster) kurulumu.", 
    icon: <Zap className="w-6 h-6 text-[#00e5ff]" /> 
  },
];

export default function HardwareSection() {
  return (
    <section className="py-32 relative bg-surface border-y border-border overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00e5ff]/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Dev Watermark */}
      <div className="absolute top-10 -left-40 opacity-5 pointer-events-none transform -rotate-90 origin-left">
        <h2 className="text-[10rem] font-black tracking-tighter text-white">HARDWARE</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-[#00e5ff] uppercase mb-4 flex items-center">
                <Orbit className="w-4 h-4 mr-2" /> TUNÇ YAZILIM DONANIM ÜSSÜ
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                Fiziksel Gücün <br /> Dijital Kontrolü.
              </h3>
              <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
                Yazılımın fiziksel dünyayla buluştuğu nokta. <strong className="text-white font-medium">Tunç Yazılım Donanım Departmanı</strong>, dışa bağımlılığı tamamen ortadan kaldırarak şirketiniz için kendi elektronik kartlarını, IoT sensörlerini ve sunucu altyapılarını kendi bünyesinde tasarlar, üretir ve programlar.
              </p>
              
              <div className="bg-background/80 border border-border p-6 rounded-sm backdrop-blur-sm shadow-[0_0_20px_rgba(0,229,255,0.05)]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <h4 className="text-white font-bold tracking-wide uppercase text-sm">Product Foundry (Üretim Bandı) Aktif</h4>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">Kuluçka ve Üretim Merkezi: Yenilikçi mobil cihaz donanımları, akıllı kartlar ve özel robotik bileşenler şu an Tunç Yazılım laboratuvarlarında küresel pazar için üretiliyor.</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Altium Designer', 'KiCad', 'STM32', 'ARM Cortex', 'C/C++', 'Rust'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300 rounded-sm border border-zinc-700">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background p-8 border border-border hover:border-[#00e5ff]/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-6 p-4 bg-surface inline-block rounded-md border border-border group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
