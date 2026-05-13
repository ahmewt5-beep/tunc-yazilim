"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Donanım", path: "/departmanlar/donanim" },
    { name: "Yazılım", path: "/departmanlar/yazilim" },
    { name: "Mimari", path: "/departmanlar/mimari" },
    { name: "Ar-Ge Lab", path: "/ar-ge" },
    { name: "Sistem", path: "/sistem-durumu" },
    { name: "Blog", path: "/blog" },
    { name: "Dijital Çözümler", path: "https://noxusweb.com" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020202]/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-[#00e5ff] group-hover:animate-pulse" />
          <span className="text-xl font-black tracking-widest text-white uppercase">Tunç<span className="text-[#00e5ff]">Yazılım_</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              target={link.path.startsWith("http") ? "_blank" : "_self"}
              className={`text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase transition-colors ${pathname === link.path ? "text-[#00e5ff]" : "text-zinc-400 hover:text-white"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/ar-ge" className="px-4 py-2 bg-[#00e5ff]/10 border border-[#00e5ff]/50 text-[#00e5ff] text-xs font-bold tracking-widest uppercase hover:bg-[#00e5ff] hover:text-black transition-colors">
            Portal Girişi
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#020202] border-b border-zinc-800 px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold tracking-widest text-zinc-300 hover:text-[#00e5ff] uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
