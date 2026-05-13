import { blogs } from "@/data/blogs";
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return { title: "Sayfa Bulunamadı" };
  return {
    title: `${blog.title} | Tunç Yazılım Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    notFound();
  }

  // Markdown-vari içeriği HTML'e çevirmek için basit bir parser (Sadece başlıklar için)
  const renderContent = (content: string) => {
    return content.split('\n').map((line, idx) => {
      if (line.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold text-white mt-10 mb-4 tracking-wider uppercase border-l-4 border-[#00e5ff] pl-4">{line.replace('### ', '')}</h3>;
      } else if (line.startsWith('- **') || line.startsWith('- ')) {
        return <li key={idx} className="ml-6 mb-2 text-zinc-300 font-light">{line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')}</li>;
      } else if (line.trim() === '') {
        return <br key={idx} />;
      }
      return <p key={idx} className="mb-4 text-lg text-zinc-400 font-light leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-[#020202] py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-zinc-500 hover:text-[#00e5ff] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Tüm Makaleler
        </Link>
        
        <div className="bg-black border border-zinc-800 p-8 md:p-16 relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Terminal className="w-24 h-24 text-white" />
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-12 border-b border-zinc-800 pb-8">
            <div className="px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-bold tracking-widest text-[#00e5ff] uppercase">
              T_ENGINEERING_CORE
            </div>
            <div className="px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-bold tracking-widest text-zinc-400 uppercase">
              Okuma Süresi: 8 Dk
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            {renderContent(blog.content)}
          </div>
        </div>
      </div>
    </div>
  );
}
