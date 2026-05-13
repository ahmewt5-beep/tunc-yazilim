import Hero from "@/components/Hero";
import HardwareSection from "@/components/departments/HardwareSection";
import SoftwareSection from "@/components/departments/SoftwareSection";
import ArchitectureSection from "@/components/departments/ArchitectureSection";
import EcosystemSection from "@/components/departments/EcosystemSection";
import PrestigeHub from "@/components/prestige/PrestigeHub";
import AM100Section from "@/components/departments/AM100Section";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import InformationHub from "@/components/departments/InformationHub";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <AM100Section />
      <HardwareSection />
      <SoftwareSection />
      <ArchitectureSection />
      <EcosystemSection />
      <InformationHub />
      <GlobalNetworkSection />
      <PrestigeHub />
    </main>
  );
}