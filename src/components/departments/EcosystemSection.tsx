"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EcosystemSection() {
  const entities = [
    {
      name: "Noxusweb",
      role: "Web Sistemleri ve Dijital Çözüm Ajansımız",
      desc: "Müşteri kazanmaya ve dönüşüm yaratmaya odaklı, enerjik ve dinamik dijital vitrinimiz. Kreatif web projelerinin kalbi.",
      color: "from-blue-600 to-indigo-600",
      textColor: "text-blue-400",
      href: "https://noxusweb.com"
    },
    {
      name: "OptimaPCB",
      role: "Endüstriyel Elektronik Üretim Hattımız",
      desc: "Donanım mühendisliğinin fiziksel gerçeğe dönüştüğü dev üretim bandı. Yüksek kaliteli SMD dizgi ve prototipleme üssü.",
      color: "from-[#00e5ff] to-emerald-500",
      textColor: "text-[#00e5ff]",
      href: "/departmanlar/donanim"
    }
  ];

  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Şirketlerimiz & Ekosistemimiz</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block text-right"
          >
            <p className="text-zinc-500 text-sm max-w-xs">Merkez üssü Tunç Yazılım olan, global arenada hizmet veren iştiraklerimiz.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entities.map((entity, idx) => (
            <Link href={entity.href} key={idx} target={entity.href.startsWith("http") ? "_blank" : undefined}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative overflow-hidden bg-surface border border-border p-10 hover:border-zinc-700 transition-all cursor-pointer h-full"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${entity.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <h4 className={`text-sm font-bold tracking-widest uppercase mb-2 ${entity.textColor}`}>
                  {entity.role}
                </h4>
                <h3 className="text-4xl font-black text-white mb-6">{entity.name}</h3>
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                  {entity.desc}
                </p>
                
                <div className="inline-flex items-center text-sm font-semibold text-white tracking-wider uppercase group-hover:gap-4 transition-all gap-2 mt-auto">
                  Projeleri İncele <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
