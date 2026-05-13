"use client";
import { motion } from "framer-motion";
import LiveMetrics from "./LiveMetrics";
import { Lock, Beaker, FileText, CodeXml, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PrestigeHub() {
  const modules = [
    {
      title: "Güvenli Müşteri Portalı",
      desc: "Canlı roadmap, sunucu donanım tüketimleri ve şeffaf işlemler.",
      icon: <Lock className="w-6 h-6 text-white" />,
      action: "GİRİŞ YAP",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      href: "/ar-ge"
    },
    {
      title: "İnovasyon & Ar-Ge Lab",
      desc: "Deneysel PCB prototipleri ve yeni nesil AI mimarileri.",
      icon: <Beaker className="w-6 h-6 text-white" />,
      action: "KEŞFET",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      href: "/ar-ge"
    },
    {
      title: "Mühendislik Vaka Analizleri",
      desc: "Projelerin teknik şemalar ve performans metrikleriyle derinlemesine analizi.",
      icon: <FileText className="w-6 h-6 text-white" />,
      action: "İNCELE",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      href: "/departmanlar/yazilim"
    },
    {
      title: "Geliştirici Dokümantasyonu",
      desc: "Donanım-yazılım haberleşme protokolleri ve API referansları.",
      icon: <CodeXml className="w-6 h-6 text-white" />,
      action: "DOCS",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      href: "/departmanlar/donanim"
    }
  ];

  return (
    <section className="py-32 relative bg-surface border-y border-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-[#00e5ff] uppercase mb-4">Sistem Ağı & Modüller</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Merkezi Kontrol Paneli</h3>
          
          <div className="mt-8">
            <LiveMetrics />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {modules.map((mod, idx) => (
            <Link href={mod.href} key={idx} className={mod.colSpan}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background border border-border p-8 flex flex-col justify-between hover:border-[#00e5ff] transition-colors group cursor-pointer h-full"
              >
                <div>
                  <div className="mb-6 p-4 bg-surface inline-block border border-border rounded-sm group-hover:bg-[#00e5ff]/10 transition-colors">
                    {mod.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{mod.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8">{mod.desc}</p>
                </div>
                
                <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                  <span className="text-xs font-bold tracking-widest text-zinc-300 group-hover:text-[#00e5ff] transition-colors">{mod.action}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00e5ff] transition-colors" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
