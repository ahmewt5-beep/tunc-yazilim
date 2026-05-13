import { Cookie } from "lucide-react";

export const metadata = {
  title: "Çerez Politikası | Tunç Yazılım",
  description: "Tunç Yazılım sistemlerindeki veri takibi ve çerez kullanım prensipleri.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#020202] py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Cookie className="w-8 h-8 text-[#00e5ff]" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Çerez (Cookie) Politikası</h1>
        </div>
        
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed">
          <p className="text-xl text-white mb-8 border-l-2 border-[#00e5ff] pl-4">Sistemlerimizdeki operasyonel sağlığı izlemek ve VPN/Portal yetkilendirmelerini doğrulamak için sadece zorunlu çerezler kullanılır.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">Mutlak Zorunlu Çerezler (Core Protocols)</h3>
          <p>Müşteri Portalına giriş yapıldığında oturum (session) süresini yöneten ve DDoS gibi ataklardan koruyan şifreli takip parçacıklarıdır. Bu çerezler kapatılamaz, aksi takdirde sisteme giriş reddedilir.</p>

          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">Performans ve Telemetri</h3>
          <p>Sistemlerimize hangi lokasyonlardan bağlanıldığını, ağ gecikmelerini (ping) ve server yüklerini (load balance) ölçmek için anonim telemetri verileri toplanır. Bunlar kişisel verilerinizle eşleştirilmez, sadece devasa donanım altyapımızın istikrarını sağlamak içindir.</p>
          
          <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-widest mt-8 mb-4">Pazarlama ve Üçüncü Parti Yasağı</h3>
          <p>Tunç Yazılım sistemleri, kullanıcılarını reklam ağlarına satmaz. Ziyaretçilerimizi diğer platformlarda takip eden agressif pazarlama çerezleri (marketing trackers) sunucularımızda kesinlikle barındırılmaz.</p>
        </div>
      </div>
    </div>
  );
}
