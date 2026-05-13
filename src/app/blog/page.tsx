import Link from "next/link";
import { Terminal, Code, ChevronRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Mühendislik Blogu | Tunç Yazılım",
  description: "Endüstriyel donanım, AI mimarileri ve yazılım geliştirme üzerine derin teknik makaleler.",
};

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      {/* Arka plan grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 px-4 py-2 bg-blue-900/20 border border-blue-500/30 text-blue-400 w-max mb-6">
            <Code className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Bilgi Tabanı & AR-GE Raporları</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">
            Mühendislik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#00e5ff]">Blogu</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-3xl">
            Sadece iş yapmıyor, teknolojinin uç sınırlarını test ediyoruz. Donanımdan yazılıma kadar saha tecrübelerimiz, hata ayıklama süreçlerimiz ve vizyonumuz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`} key={idx}>
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 h-full flex flex-col hover:border-[#00e5ff]/50 hover:bg-zinc-900 transition-colors group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00e5ff] opacity-0 blur-3xl group-hover:opacity-10 transition-opacity"></div>
                
                <Terminal className="w-6 h-6 text-zinc-600 group-hover:text-[#00e5ff] transition-colors mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{blog.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs font-bold tracking-widest uppercase border-t border-zinc-800 pt-4 mt-auto">
                  <span className="text-zinc-500 group-hover:text-white transition-colors">Makaleyi Oku</span>
                  <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-[#00e5ff] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
