import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AquaCarpet - Spalatorie Profesionala Covoare Brasov | 13 RON/mp",
  description: "Spalatorie profesionala covoare in Brasov. Servicii de calitate, transport gratuit, preturi incepand de la 13 RON/mp. Comanda minima 91 RON. Livrare 24-48 ore.",
  keywords: "spalatorie covoare brasov, curatat covoare, spalatorie profesionala, preturi spalatorie covoare",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "AquaCarpet - Spalatorie Profesionala Covoare Brasov",
    description: "Servicii profesionale de spalare covoare in Brasov. Transport gratuit, preturi competitive.",
    url: "https://aquacarpet.ro",
    siteName: "AquaCarpet",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'AquaCarpet - Spalatorie Covoare Brasov',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
