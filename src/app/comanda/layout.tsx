import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.aquacarpet.ro/comanda',
  },
};

export default function ComandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
