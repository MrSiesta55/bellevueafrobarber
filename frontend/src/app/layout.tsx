import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bellevue Afro Barber | Professionell Barbershop i Göteborg",
  description: "Bellevue Afro Barber i Göteborg – Haircut från 140 kr, Fade & Skäggtrimning. En av Göteborgs billigaste barbershops. Stallmästaregatan. Ring 0790 78 48 61.",
  keywords: [
    "barbershop Göteborg",
    "afro barber Göteborg",
    "haircut Göteborg",
    "fade Göteborg",
    "skäggtrimning Göteborg",
    "frisör Bellevue",
    "klippning Gamlestaden",
    "Bellevue Afro Barber",
    "barber Stallmästaregatan",
    "herrfrisör Göteborg",
    "billig barber Göteborg",
    "billigaste barbershop Göteborg",
    "billig herrklippning Göteborg",
    "prisvärd frisör Göteborg",
    "klippning 140 kr Göteborg",
    "cheap barber Gothenburg",
    "affordable haircut Gothenburg",
  ],
  authors: [{ name: "Bellevue Afro Barber" }],
  openGraph: {
    title: "Bellevue Afro Barber | Professionell Barbershop i Göteborg",
    description: "Haircut från 140 kr. En av Göteborgs billigaste barbershops på Stallmästaregatan. Ring 0790 78 48 61.",
    url: "https://bellevueafrobarber.se",
    siteName: "Bellevue Afro Barber",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bellevue Afro Barber | Göteborg",
    description: "Professionell barbershop på Stallmästaregatan, Göteborg. Ring 0790 78 48 61.",
  },
  verification: {
    google: "mhRb4JXlsOeADpg9PCIJGw4qLOmXKVQJV52IBOEnkQM",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
