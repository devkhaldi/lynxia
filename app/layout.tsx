import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lynxia Assur Conseil | Courtier Expert en Assurance Professionnelle",
  description:
    "Courtier expert en assurance professionnelle pour les entreprises, indépendants et dirigeants. Découvrez nos garanties (Décennale, VTC, Multirisque).",
  keywords: ["assurance professionnelle", "garantie décennale", "assurance vtc", "flotte auto", "courtier assurance"],
  authors: [{ name: "Lynxia Assur Conseil" }],
  openGraph: {
    title: "Lynxia Assur Conseil | Courtier Expert en Assurance Professionnelle",
    description:
      "Des solutions d'assurances claires, rapides et fiables pour les professionnels. 100% digital, 100% humain.",
    url: "https://lynxiaconseil.fr",
    siteName: "Lynxia Assur Conseil",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynxia Assur Conseil | Assurance Professionnelle",
    description:
      "Des solutions d'assurances claires, rapides et fiables.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
