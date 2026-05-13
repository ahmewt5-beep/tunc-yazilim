"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, HeartPulse, Building2, ChevronDown, ChevronUp, Radar, Database, BrainCircuit, LayoutTemplate } from "lucide-react";
import { useState } from "react";

export default function InformationHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sectors = [
    { title: "Savunma Sanayii & Havacılık", desc: "Yüksek şifrelemeli haberleşme sistemleri, radar arayüzleri ve dışa kapalı drone uçuş kontrol anakartları (Flight Controllers).", icon: <ShieldAlert className="text-red-500" /> },
    { title: "Biyomedikal & Sağlık Teknolojileri", desc: "Sıfır gecikmeli yaşamsal veri sensörleri, medikal görüntüleme cihazları için yapay zeka destekli analiz donanımları.", icon: <HeartPulse className="text-emerald-500" /> },
    { title: "Ağır Sanayi & Endüstri 4.0", desc: "Fabrikalar için SCADA entegrasyonu, konveyör bantları için otonom hata tespit sistemleri (Computer Vision).", icon: <Building2 className="text-[#00e5ff]" /> },
    { title: "Akıllı Şehirler & IoT", desc: "Enerji şebekesi optimizasyonu sağlayan uç cihazlar (Edge Devices) ve geniş alan ağ sensörleri (LoRaWAN).", icon: <Radar className="text-purple-500" /> }
  ];

  const techMatrix = [
    { category: "Gömülü Sistemler (Donanım)", icon: <Cpu className="w-5 h-5 text-[#00e5ff]" />, stack: ["C/C++", "Rust", "FreeRTOS", "STM32", "ESP-IDF", "Altium", "KiCad"] },
    { category: "Veri Merkezi & Backend", icon: <Database className="w-5 h-5 text-[#00e5ff]" />, stack: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"] },
    { category: "Yapay Zeka & Derin Öğrenme", icon: <BrainCircuit className="w-5 h-5 text-[#00e5ff]" />, stack: ["TensorFlow", "PyTorch", "CUDA", "LLaMA (On-Premise)", "OpenCV", "YOLO"] },
    { category: "Arayüz & Kullanıcı Deneyimi", icon: <LayoutTemplate className="w-5 h-5 text-[#00e5ff]" />, stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js", "WebGL"] }
  ];

  const faqs = [
    { q: "Üretim bandınızda (AM100) en küçük hangi kılıfı dizebiliyorsunuz?", a: "Tesisimiz, mikro-elektronikte endüstri standardı olan 0402 ve hatta daha hassas 01005 (inç) boyutundaki bileşenleri milimetrik hassasiyetle dizebilme kapasitesine sahiptir." },
    { q: "Yapay Zeka sistemleriniz şirket dışına veri sızdırıyor mu?", a: "Hayır. Tunç Yazılım olarak 'On-Premise' (Yerinde) kurulum felsefesini benimsiyoruz. Geliştirdiğimiz LLM ve RAG sistemleri kapalı ağınızdaki donanımlarda çalışır, verileriniz hiçbir public API'ye gönderilmez." },
    { q: "Sıfırdan bir donanım projesi ne kadar sürede prototipleniyor?", a: "Kendi bünyemizdeki dizgi ve test hatlarımız sayesinde dışa bağımlılığımız yoktur. Tasarım onayından sonra, ilk fiziksel PCB prototipinin elinize geçmesi karmaşıklığa bağlı olarak 3 ila 14 iş günü sürer." },
    { q: "Mevcut fabrikama SCADA ve IoT entegrasyonu yapabilir misiniz?", a: "Evet. Eski nesil endüstriyel makinelerinize kendi ürettiğimiz PLC aracı kartlarını entegre ederek onları dijital ikizlere dönüştürüyor ve tek merkezden izlenebilir hale getiriyoruz." }
  ];

  const roadmap = [
    { date: "Q3 2026", title: "Kuantum Güvenlikli Ağ Testleri", desc: "Savunma projeleri için kırılması imkansız yeni nesil şifreleme algoritmalarının test ortamına alınması." },
    { date: "Q4 2026", title: "Tam Otonom PCB Dizgi Yapay Zekası", desc: "AM100 hattındaki hata oranını sıfıra indirmek için optik kontrolü (AOI) insan gözünden tamamen çıkaran kendi AI modelimiz." },
    { date: "Q1 2027", title: "Tunç Özel İşlemci Mimarisi (RISC-V)", desc: "Şirket içi operasyonlarda kullanılmak üzere dışa bağımlı olmayan, kendi mikrodenetleyici çekirdeklerimizin (ASIC/FPGA) tasarımı." }
  ];

  return (
    <section className="py-32 relative bg-[#020202] border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Bölüm 1: Sektörler */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 border-l-4 border-[#00e5ff] pl-4">Hizmet Verilen Sektörler</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">Yalnızca yazılım üretmiyoruz. Hayati önem taşıyan ağır sanayi ve teknoloji alanlarında kusursuz işleyen donanım/yazılım ekosistemleri kuruyoruz.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec, idx) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} key={idx} className="bg-zinc-900/50 border border-zinc-800 p-6 hover:border-zinc-500 transition-colors">
                <div className="mb-4 bg-black w-12 h-12 flex items-center justify-center border border-zinc-800">{sec.icon}</div>
                <h3 className="text-white font-bold mb-2">{sec.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{sec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bölüm 2: Derin Teknik Matris */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 border-l-4 border-blue-600 pl-4">Derin Teknik Matris</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">Tunç Yazılım'ın mühendislik altyapısını oluşturan ana teknoloji yığını. Sadece trendleri değil, ağır sanayi standartlarını kullanırız.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {techMatrix.map((matrix, idx) => (
              <div key={idx} className="flex bg-black border border-zinc-800 p-6">
                <div className="mr-6 mt-1">{matrix.icon}</div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-4">{matrix.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {matrix.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Bölüm 3: S.S.S (Operasyonel Parametreler) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-emerald-500 pl-4">Operasyonel Parametreler</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-zinc-900/30 border border-zinc-800 overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                    className="w-full text-left p-4 flex justify-between items-center hover:bg-zinc-900 transition-colors"
                  >
                    <span className="text-white font-bold pr-4">{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#00e5ff]" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 mt-2 bg-black/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bölüm 4: Ar-Ge Roadmap */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-red-500 pl-4">Vizyon & Ar-Ge Yol Haritası</h2>
            <div className="relative border-l border-zinc-800 ml-4 space-y-8 pb-4">
              {roadmap.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[1.5px] top-1.5 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <div className="text-red-500 font-bold text-xs tracking-widest mb-1">{item.date}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
              <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[1.5px] bottom-0"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
