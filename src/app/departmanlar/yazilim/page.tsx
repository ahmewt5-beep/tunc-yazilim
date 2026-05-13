import SoftwareSection from "@/components/departments/SoftwareSection";

export const metadata = {
  title: "Yazılım & Yapay Zeka | Tunç Yazılım",
  description: "Kurumsal AI entegrasyonu, Otonom RPA sistemleri ve on-premise yüksek performanslı yazılım mimarileri.",
};

export default function YazilimPage() {
  return (
    <div className="bg-[#020202] min-h-screen">
      <div className="pt-20"></div>
      <SoftwareSection />
    </div>
  );
}
