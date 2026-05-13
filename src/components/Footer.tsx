"use client";
import { Cpu, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-[#00e5ff]" />
              <span className="text-2xl font-bold tracking-tight text-white">Tunç Yazılım.</span>
            </div>
            <p className="text-zinc-400 font-light max-w-sm mb-6">
              Endüstrinin yazılım ve donanım üssü. Yüksek mühendislik, otonom iş sistemleri ve dijital ikiz teknolojileri merkezi.
            </p>
            <div className="flex gap-4">
              <span className="text-xs font-bold tracking-widest text-[#00e5ff] uppercase">ISO 27001</span>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">TIER III INFRA</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">DEPARTMANLAR</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li className="hover:text-[#00e5ff] cursor-pointer transition-colors">Donanım & IoT</li>
              <li className="hover:text-[#00e5ff] cursor-pointer transition-colors">Yazılım & Yapay Zeka</li>
              <li className="hover:text-[#00e5ff] cursor-pointer transition-colors">Mimari & Dijital İkiz</li>
              <li className="hover:text-[#00e5ff] cursor-pointer transition-colors">Ar-Ge Laboratuvarı</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">İLETİŞİM AĞI</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#00e5ff]" /> Global Merkez Üssü</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#00e5ff]" /> sysadmin@tuncyazilim.com</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#00e5ff]" /> +90 (850) XXX XX XX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 tracking-wide">
            &copy; {new Date().getFullYear()} TUNÇ YAZILIM A.Ş. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600 tracking-wide">
            <span className="hover:text-zinc-300 cursor-pointer">Gizlilik Politikası</span>
            <span className="hover:text-zinc-300 cursor-pointer">KVKK</span>
            <span className="hover:text-zinc-300 cursor-pointer">Sistem Durumu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
