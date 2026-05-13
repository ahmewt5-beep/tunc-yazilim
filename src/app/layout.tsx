import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookiePopup from "@/components/CookiePopup";
import BootScreen from "@/components/BootScreen";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuncyazilim.net"),
  title: {
    default: "Tunç Yazılım | Elektronik Kart Tasarımı & SMD Dizgi Üretim Üssü",
    template: "%s | Tunç Yazılım"
  },
  description: "Elektronik kart tasarımı, PCB üretimi, tam otomatik Panasonic AM100 SMD dizgi hattı ve gömülü sistem (IoT) çözümlerinde Türkiye'nin teknoloji üssü.",
  keywords: [
    "elektronik kart", "elektronik kart üretimi", "elektronik kart tasarımı", 
    "SMD dizgi", "PCB dizgi", "fason dizgi", "gömülü sistemler", 
    "IoT çözümleri", "donanım ar-ge", "prototip pcb", "elektronik mühendisliği"
  ],
  authors: [{ name: "Tunç Yazılım A.Ş." }],
  creator: "Tunç Yazılım A.Ş.",
  publisher: "Tunç Yazılım A.Ş.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tunç Yazılım | Elektronik Kart Tasarımı & SMD Dizgi",
    description: "Elektronik kart tasarımı, PCB üretimi ve tam otomatik SMD dizgi hattında Türkiye'nin teknoloji üssü.",
    url: "https://tuncyazilim.net",
    siteName: "Tunç Yazılım A.Ş.",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tunç Yazılım | Elektronik Kart Tasarımı & SMD Dizgi",
    description: "Elektronik kart tasarımı, PCB üretimi ve tam otomatik SMD dizgi hattında Türkiye'nin teknoloji üssü.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#020202] text-zinc-300 font-sans">
        <BootScreen />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <CookiePopup />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
