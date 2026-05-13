"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905431274776"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90] bg-emerald-500 text-black p-4 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center group border border-emerald-400"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-[#020202] text-[10px] md:text-xs font-bold tracking-widest border border-zinc-800 text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase">
        Whatsapp Operasyon Hattı
      </span>
    </a>
  );
}
