"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen() {
  const [lines, setLines] = useState<string[]>([]);
  const [booted, setBooted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const logs = [
    "TUNÇ_YAZILIM_CORE_OS_v10.4.1 INIT...",
    "[ 0.000000] Kernel command line: BOOT_IMAGE=/vmlinuz-tunc-os root=UUID=x86_64 ro quiet splash",
    "[ 0.001230] x86/cpu: VMX (outside TXT) disabled by BIOS",
    "[ 0.002410] secureboot: Secure boot enabled",
    "[ 0.010410] smpboot: CPU0: Intel(R) Core(TM) i9-14900K @ 6.00GHz (family: 0x6, model: 0xb7, stepping: 0x1)",
    "[ 0.012310] tunc-sec: Hardware RNG initialized",
    "0x00000000: RAM DOĞRULAMA... [OK]",
    "[ 0.023150] pci 0000:00:02.0: vgaarb: setting as boot VGA device",
    "[ 0.045100] platform tunc_ai_module: firmware loaded successfully",
    "[ 0.049100] [sys] loading module: stm32_hal_driver.so",
    "[ 0.052000] [sys] loading module: quantum_encryption_v2.so",
    "[ 0.061000] mounting /dev/nvme0n1p2 on /data_lake [OK]",
    "0x00000001: İŞLEMCİ ÇEKİRDEKLERİ AKTİF EDİLİYOR... (128 THREADS)",
    "[ 0.078200] ACPI: Added _OSI(Module Device)",
    "[ 0.089100] ACPI: Added _OSI(Processor Device)",
    "GÜVENLİK PROTOKOLLERİ DOĞRULANIYOR... [OK]",
    "[ 0.100410] tunc-net: initializing neural network adapters...",
    "AĞLARA BAĞLANILIYOR... 14.092 NODE BULUNDU",
    "[ 0.120500] eth0: link up, 100Gbps, full-duplex, lpa 0x3800",
    "[ 0.145000] eth1: link up, 100Gbps, full-duplex, lpa 0x3800",
    "ROOT ERİŞİMİ: ONAYLANDI",
    "------------------------------------------------------------------",
    "executing: sudo systemctl start ai_engine",
    "executing: sudo systemctl start am100_sync_daemon",
    "[ 0.180200] ai_engine: loading weights (400GB) from local storage... 20%",
    "[ 0.190200] ai_engine: loading weights (400GB) from local storage... 65%",
    "[ 0.210000] ai_engine: loading weights (400GB) from local storage... 100% [OK]",
    "ENDÜSTRİYEL YAPAY ZEKA ÇEKİRDEKLERİ DEVREDE...",
    "[ 0.230100] am100_daemon: checking optical sensors... [OK]",
    "[ 0.245000] am100_daemon: aligning 0402 feeders... [OK]",
    "SMD DİZGİ HATTI SENKRONİZASYONU: TAMAMLANDI",
    "[ 0.280100] vpn_tunnel: establishing secure connection to client portals...",
    "BAĞLANTI ŞİFRELENİYOR (AES-256-GCM)... [OK]",
    "[ 0.300000] ALL SYSTEMS NOMINAL.",
    "SİSTEME GİRİŞ YAPILIYOR..."
  ];

  useEffect(() => {
    let i = 0;
    const typeLine = () => {
      if (i < logs.length) {
        // Rastgele 1 ile 3 satır arası aynı anda ekrana basarak akış (flow) hissi ver
        const chunkCount = Math.floor(Math.random() * 3) + 1;
        const newLines = logs.slice(i, i + chunkCount);
        
        setLines(prev => {
          const combined = [...prev, ...newLines];
          return combined.length > 25 ? combined.slice(combined.length - 25) : combined;
        });
        
        i += chunkCount;
        
        // Rastgele gecikme: 20ms ile 150ms arası. Bu sayede makine düşünüyormuş gibi olur.
        const delay = Math.random() * 130 + 20; 
        setTimeout(typeLine, delay);
      } else {
        setTimeout(() => {
          setBooted(true);
        }, 1200); // Tüm yazılar bitince 1.2 sn bekle ve ekranı aç
      }
    };

    // İlk başlangıç gecikmesi
    setTimeout(typeLine, 300);
  }, []);

  // Otomatik scroll down
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <AnimatePresence>
      {!booted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(30px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center font-mono pointer-events-none"
        >
          {/* Ekrana hafif bir CRT / Scanline efekti */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>
          
          <div className="w-full max-w-4xl px-6 relative z-20">
            <div className="mb-4 border-b border-zinc-800 pb-2 flex justify-between items-end">
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-widest uppercase">
                  Tunç<span className="text-[#00e5ff]">_</span>
                </h1>
                <div className="text-zinc-600 text-[10px] tracking-widest mt-1 uppercase">Terminal v10.4 // Protected By AES-256</div>
              </div>
              <div className="text-emerald-500 text-xs animate-pulse hidden md:block">SECURE_BOOT: ENABLED</div>
            </div>
            
            <div ref={scrollRef} className="h-[500px] overflow-hidden flex flex-col justify-start">
              {lines.map((line, idx) => {
                let color = "text-[#00e5ff]";
                if (line.includes("[OK]") || line.includes("NOMINAL") || line.includes("ENABLED")) color = "text-emerald-500";
                if (line.includes("loading") || line.includes("executing") || line.includes("mounting")) color = "text-yellow-500";
                if (line.startsWith("[")) color = "text-zinc-400";
                if (line.includes("ROOT") || line.includes("ŞİFRELENİYOR")) color = "text-red-500";

                return (
                  <div key={idx} className={`${color} text-[11px] md:text-sm mb-1 font-bold tracking-wider`}>
                    {line}
                  </div>
                );
              })}
              <div className="w-3 h-5 bg-[#00e5ff] animate-pulse mt-2 inline-block"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
