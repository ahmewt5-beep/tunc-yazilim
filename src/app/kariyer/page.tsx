"use client";
import { Terminal, Command, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function KariyerPage() {
  const [lines, setLines] = useState<string[]>([]);
  const [showRoles, setShowRoles] = useState(false);

  const bootSequence = [
    "INIT TUNÇ_YAZILIM_CORE_OS_v10.4",
    "BAĞLANTI KURULUYOR... [OK]",
    "GÜVENLİK PROTOKOLLERİ ATLANDI... [OK]",
    "İŞE ALIM VERİTABANI YÜKLENİYOR...",
    "UYARI: SADECE YÜKSEK MÜHENDİSLİK KAPASİTESİ GEREKİR.",
    "AÇIK POZİSYONLAR LİSTELENİYOR..."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowRoles(true), 500);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const roles = [
    { title: "Gömülü Sistem Mühendisi (C/C++, Rust)", location: "Merkez Üs", req: "STM32, PCB Tasarımı" },
    { title: "Kıdemli Yapay Zeka (AI) Mimarı", location: "On-Premise", req: "PyTorch, LLM Fine-tuning" },
    { title: "Ağır Sanayi Otomasyon Uzmanı (RPA)", location: "Saha", req: "Python, PLC Sistemleri" }
  ];

  return (
    <div className="min-h-screen bg-[#020202] py-24 relative overflow-hidden flex flex-col items-center justify-center font-mono">
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-20 max-w-4xl">
        <div className="mb-8 border-b-2 border-green-900/50 pb-4 flex items-center justify-between text-green-500">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6" />
            <h1 className="text-xl md:text-3xl font-bold tracking-widest">TUNÇ YAZILIM // KARİYER AĞI</h1>
          </div>
          <Command className="w-5 h-5 animate-pulse" />
        </div>

        <div className="bg-[#000500] border border-green-900/30 p-6 md:p-10 min-h-[400px] shadow-[0_0_50px_rgba(0,255,0,0.02)]">
          {lines.map((line, idx) => (
            <div key={idx} className="text-green-500 text-sm md:text-base mb-2 font-bold tracking-wider">
              <span className="text-green-700 mr-2">{'>'}</span> {line}
            </div>
          ))}

          {showRoles && (
            <div className="mt-10 animate-fade-in">
              <h3 className="text-white text-lg border-l-4 border-green-500 pl-3 mb-6 bg-green-900/20 py-2">AKTİF GÖREVLER</h3>
              <div className="space-y-4">
                {roles.map((role, idx) => (
                  <div key={idx} className="border border-green-900/50 hover:border-green-400 p-4 transition-colors cursor-pointer group flex flex-col md:flex-row justify-between md:items-center bg-black">
                    <div>
                      <div className="text-green-400 font-bold text-lg">{role.title}</div>
                      <div className="text-green-700 text-xs mt-1 uppercase tracking-widest">Gereksinim: {role.req} | Konum: {role.location}</div>
                    </div>
                    <button className="mt-4 md:mt-0 flex items-center text-black bg-green-500 px-4 py-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      SİSTEME BAĞLAN <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-green-700 text-xs flex items-center">
                <span className="animate-pulse mr-2">_</span> BAŞVURULAR SADECE GITHUB/GITLAB PROFİLLERİYLE KABUL EDİLİR.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
