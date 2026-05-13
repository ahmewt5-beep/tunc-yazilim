import { Scale } from "lucide-react";

export const metadata = {
  title: "Kullanım Koşulları | Tunç Yazılım",
  description: "Tunç Yazılım dijital servisleri ve donanım hizmetleri kullanım koşulları.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-8 h-8 text-[#00e5ff]" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Kullanım Koşulları</h1>
        </div>
        
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed">
          <p className="text-xl text-white mb-8 border-l-2 border-[#00e5ff] pl-4">Tunç Yazılım A.Ş. bünyesinde barındırılan tüm dijital varlıklara ve fiziksel/donanımsal üretim hatlarına erişim sağlarken bu koşulları kabul etmiş sayılırsınız.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">1. Servis Erişimi ve Tersine Mühendislik Yasağı</h3>
          <p>Tunç Yazılım tarafından geliştirilen kapalı kaynak (proprietary) yazılımların, AI modellerinin ve teslim edilen donanım ürünlerinin (PCB, mikrodenetleyici sistemleri) üzerinde tersine mühendislik (reverse engineering) uygulanması kati suretle yasaktır. Tespit edildiği an yasal süreç başlatılacak ve donanımın çalışması uzaktan kilitlenecektir.</p>

          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">2. Endüstriyel Donanım Garantisi</h3>
          <p>Panasonic AM100 dizgi hattımızdan çıkan ürünler endüstriyel kalite testlerinden geçerek teslim edilir. Ancak, cihazlar müşterinin altyapısında yetkisiz şekilde modifiye edildiğinde veya voltaj spesifikasyonlarının dışında çalıştırıldığında kurumsal garanti kapsamından anında çıkar.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">3. Fikri Mülkiyet (IP)</h3>
          <p>Müşteri Portalımızda yer alan tüm kod parçacıkları, Ar-Ge projeleri, API referansları ve 3D tasarım dosyaları doğrudan Tunç Yazılım'ın tescilli fikri mülkiyetidir. İzinsiz kopyalanamaz, 3. parti ajans veya rakiplere devredilemez.</p>
        </div>
      </div>
    </div>
  );
}
