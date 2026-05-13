import Link from "next/link";
import { Terminal, Database, Activity, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-zinc-800 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Terminal className="w-6 h-6 text-[#00e5ff]" />
              <span className="text-2xl font-black tracking-widest text-white uppercase">Tunç<span className="text-[#00e5ff]">_</span></span>
            </Link>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 max-w-sm">
              Sıradan dijital ajansları unutun. Biz, yüksek mühendislik ve ağır sanayi çözümleri ile şirketinizin teknolojik altyapısını donanımdan buluta uçtan uca inşa ediyoruz.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 inline-flex">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-widest text-white uppercase">Sistem Durumu: Çevrimiçi</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Operasyon</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00e5ff] shrink-0" />
                <span className="text-zinc-400 text-sm">Tunç Yazılım A.Ş.<br/>Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00e5ff]" />
                <a href="tel:+905431274776" className="text-zinc-400 hover:text-white transition-colors text-sm font-mono">+90 543 127 47 76</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00e5ff]" />
                <a href="mailto:info@tuncyazilim.net" className="text-zinc-400 hover:text-white transition-colors text-sm font-mono">info@tuncyazilim.net</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Departmanlar</h4>
            <ul className="space-y-4">
              <li><Link href="/departmanlar/donanim" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Donanım & IoT (SMD)</Link></li>
              <li><Link href="/departmanlar/yazilim" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Yazılım & Yapay Zeka</Link></li>
              <li><Link href="/departmanlar/mimari" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Mimari & Dijital İkiz</Link></li>
              <li><Link href="/ar-ge" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Ar-Ge Laboratuvarı</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Kurumsal</h4>
            <ul className="space-y-4">
              <li><Link href="/hakkimizda" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Şirket Profili</Link></li>
              <li><Link href="/sistem-durumu" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Sistem Durumu</Link></li>
              <li><Link href="/blog" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Mühendislik Blogu</Link></li>
              <li><Link href="/kariyer" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Kariyer / İK</Link></li>
              <li><Link href="/iletisim" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">İletişim & Destek</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Yasal</h4>
            <ul className="space-y-4">
              <li><Link href="/kvkk" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">KVKK</Link></li>
              <li><Link href="/gizlilik-politikasi" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-kosullari" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Kullanım Koşulları</Link></li>
              <li><Link href="/cerez-politikasi" className="text-zinc-400 hover:text-[#00e5ff] text-sm transition-colors">Çerez Politikası</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Tunç Yazılım A.Ş. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <Database className="w-4 h-4 text-zinc-600" />
            <Activity className="w-4 h-4 text-zinc-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}
