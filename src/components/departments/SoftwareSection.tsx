"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Bot, Video, Terminal } from "lucide-react";

export default function SoftwareSection() {
  const capabilities = [
    {
      title: "Kurumsal AI & Prompt Mimarlığı",
      desc: "Tunç Yazılım'ın 'Nano Banana Pro' metodolojisi ile halüsinasyonu sıfıra indiren, veri güvenliği sağlayan on-premise LLM entegrasyonları.",
      icon: <BrainCircuit className="w-6 h-6 text-[#008b9e]" />
    },
    {
      title: "Otonom İş Sistemleri (RPA)",
      desc: "Şirketlerin finansal döküm, veri senkronizasyonu gibi operasyonlarını sıfır insan hatasıyla yöneten Python/Node.js tabanlı bot ağları.",
      icon: <Bot className="w-6 h-6 text-[#008b9e]" />
    },
    {
      title: "Kurumsal Ekosistem (ERP/CRM)",
      desc: "Lojistik ve perakende devleri için Tunç Yazılım mühendisleri tarafından sıfırdan kodlanan yüksek trafikli, yapay zeka destekli yönetim mimarileri.",
      icon: <Database className="w-6 h-6 text-[#008b9e]" />
    },
    {
      title: "Medya ve Render Otomasyonları",
      desc: "Çok kanallı yayıncılar için sunucu tarafında FFMPEG tabanlı video işleme, render alma ve yayınlama süreçlerini otomatize eden kapalı devre sistemler.",
      icon: <Video className="w-6 h-6 text-[#008b9e]" />
    }
  ];

  return (
    <section className="py-32 relative bg-background overflow-hidden">
      {/* Dev Watermark */}
      <div className="absolute top-1/2 right-0 opacity-5 pointer-events-none transform translate-y-1/2 translate-x-1/4">
        <h2 className="text-[15rem] font-black tracking-tighter text-white">SOFTWARE</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#008b9e] uppercase mb-4 flex items-center justify-center">
              <Terminal className="w-4 h-4 mr-2" /> TUNÇ YAZILIM YAZILIM ÜSSÜ
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] uppercase">
              Sıfır Hata.<br /> Maksimum Performans.
            </h3>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              Yüksek performanslı kod mimarilerinin uygulandığı yazılım üssümüz. <strong className="text-white font-medium">Tunç Yazılım</strong>, standart paket programlar kurmak yerine, kurumunuza özel algoritmalar yazar ve otonom iş sistemleriyle sizi geleceğe taşır.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Next.js / React', 'Node.js / Express', 'Python / TensorFlow', 'PostgreSQL / Redis', 'Docker / Kubernetes', 'Go / Rust'].map(tech => (
                <span key={tech} className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-surface text-zinc-300 rounded-sm border border-border">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6 p-10 bg-surface border border-border hover:border-[#008b9e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,139,158,0.1)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#008b9e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex-shrink-0 w-16 h-16 bg-background flex items-center justify-center rounded-sm border border-border group-hover:border-[#008b9e]/50 transition-colors relative z-10">
                {cap.icon}
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{cap.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
