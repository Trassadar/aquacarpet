import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, localBusinessJsonLd } from "@/lib/business";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Spălătorie Covoare Brașov | AquaCarpet – 13 RON/mp, Ridicare Gratuită",
    template: "%s | AquaCarpet",
  },
  description:
    "Spălătorie profesională de covoare în Brașov. Ridicare și livrare gratuită, 13 RON/mp, comandă minimă 91 RON, livrare în 24–48 de ore.",
  applicationName: "AquaCarpet",
  formatDetection: { telephone: true },
  openGraph: {
    siteName: "AquaCarpet",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "AquaCarpet – spălătorie covoare Brașov",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#050040",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} antialiased`}>
        <JsonLd data={localBusinessJsonLd()} />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
