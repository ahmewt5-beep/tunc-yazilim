import HardwareSection from "@/components/departments/HardwareSection";
import AM100Section from "@/components/departments/AM100Section";

export const metadata = {
  title: "Donanım & IoT Üssü | Tunç Yazılım",
  description: "SMD dizgi hattı, gömülü sistem mühendisliği ve endüstriyel donanım üretim kapasitemiz.",
};

export default function DonanimPage() {
  return (
    <div className="bg-[#020202]">
      {/* Sayfa başlığı / Spacer */}
      <div className="pt-20"></div>
      <HardwareSection />
      <AM100Section />
    </div>
  );
}
