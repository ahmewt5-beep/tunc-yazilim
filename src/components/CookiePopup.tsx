"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Check } from "lucide-react";
import Link from "next/link";

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Local storage kontrolü
    const consent = localStorage.getItem("tunc_cookie_consent");
    if (!consent) {
      // Biraz bekleyip göster
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("tunc_cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[450px] bg-[#020202] border border-zinc-800 p-6 z-[100] shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#00e5ff]/10 border border-[#00e5ff]/30 shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#00e5ff]" />
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-2 text-sm">Veri İzi & Çerez Protokolü</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Endüstriyel standartlarımız gereği, sistem performansını ölçmek ve güvenliğinizi sağlamak amacıyla çerez (cookie) kullanmaktayız. Pazarlama odaklı veri hırsızlığına karşı katı bir tutum sergiliyoruz. Detaylar için <Link href="/gizlilik-politikasi" className="text-[#00e5ff] hover:underline">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-[#00e5ff] text-black font-bold text-xs tracking-widest uppercase py-3 px-4 hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" /> Protokolü Onayla
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-4 py-3 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
