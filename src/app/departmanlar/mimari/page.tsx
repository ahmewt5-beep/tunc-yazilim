import ArchitectureSection from "@/components/departments/ArchitectureSection";

export const metadata = {
  title: "Mimari & Dijital İkiz | Tunç Yazılım",
  description: "Akıllı fabrika tasarımı, CAD çözümleri ve endüstriyel tesislerin dijital ikizleri.",
};

export default function MimariPage() {
  return (
    <div className="bg-[#000511] min-h-screen">
      <div className="pt-20"></div>
      <ArchitectureSection />
    </div>
  );
}
