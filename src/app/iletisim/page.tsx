"use client";
import { Mail, MapPin, Phone, LockKeyhole, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      {/* Grid Arka Plan */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 mb-6">
            <LockKeyhole className="w-4 h-4 text-[#00e5ff]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">End-to-End Encrypted Channel</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">İletişim & Destek</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Sıradan destek talepleri değil; sistem kurulumları, SMD dizgi kapasitesi ve yapay zeka entegrasyonu hakkında mühendislerimizle doğrudan iletişim kurun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* İletişim Bilgileri */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/80 border border-zinc-800 p-8 hover:border-[#00e5ff]/50 transition-colors">
              <MapPin className="w-8 h-8 text-[#00e5ff] mb-4" />
              <h3 className="text-white font-bold tracking-widest uppercase mb-2">Merkez Üssü (HQ)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">Türkiye merkezli, global ölçekli operasyon yönetim merkezi ve endüstriyel üretim bantlarımız.</p>
              <div className="text-[#00e5ff] font-mono text-xs opacity-70">LAT: 41.0082° N | LONG: 28.9784° E</div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 hover:border-[#00e5ff]/50 transition-colors">
              <Phone className="w-8 h-8 text-[#00e5ff] mb-4" />
              <h3 className="text-white font-bold tracking-widest uppercase mb-2">Kurumsal İletişim Hattı</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">7/24 Teknik destek ve kurumsal altyapı projeleriniz için acil yanıt sistemimiz.</p>
              <a href="tel:+905431274776" className="text-xl font-black text-white hover:text-[#00e5ff] transition-colors">+90 543 127 47 76</a>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 hover:border-[#00e5ff]/50 transition-colors">
              <Mail className="w-8 h-8 text-[#00e5ff] mb-4" />
              <h3 className="text-white font-bold tracking-widest uppercase mb-2">Şifreli İletişim (E-Mail)</h3>
              <a href="mailto:info@tuncyazilim.net" className="text-lg font-bold text-white hover:text-[#00e5ff] transition-colors">info@tuncyazilim.net</a>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="lg:col-span-3 bg-[#000505] border border-zinc-800 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-30"></div>
            
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-8">Yeni İletişim Protokolü Başlat</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Sistem Kimliği (Ad Soyad)</label>
                  <input required type="text" className="w-full bg-black border border-zinc-800 focus:border-[#00e5ff] text-white p-4 outline-none transition-colors font-mono text-sm" placeholder="Müh. John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">İletişim Portu (E-Posta)</label>
                  <input required type="email" className="w-full bg-black border border-zinc-800 focus:border-[#00e5ff] text-white p-4 outline-none transition-colors font-mono text-sm" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Konu / Kategori</label>
                <select className="w-full bg-black border border-zinc-800 focus:border-[#00e5ff] text-white p-4 outline-none transition-colors font-mono text-sm appearance-none">
                  <option>Endüstriyel SMD Dizgi Talebi</option>
                  <option>Yapay Zeka (AI) Modeli Geliştirme</option>
                  <option>Gömülü Sistem (IoT) Projesi</option>
                  <option>Kurumsal Web / Dijital Çözümler (Noxusweb)</option>
                  <option>Diğer (Genel İletişim)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Şifrelenecek Mesaj (Detaylar)</label>
                <textarea required rows={5} className="w-full bg-black border border-zinc-800 focus:border-[#00e5ff] text-white p-4 outline-none transition-colors font-mono text-sm resize-none" placeholder="Projenizin teknik ihtiyaçlarını buraya giriniz..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status !== "idle"}
                className={`w-full py-5 px-6 font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${status === "success" ? "bg-emerald-500 text-black" : "bg-[#00e5ff] text-black hover:bg-white"}`}
              >
                {status === "idle" && <><Send className="w-5 h-5" /> Şifrele ve Gönder</>}
                {status === "sending" && "Veri İletiliyor..."}
                {status === "success" && "Protokol Tamamlandı (Gönderildi)"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
