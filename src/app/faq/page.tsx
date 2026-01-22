import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'Intrebari Frecvente | Spalatorie Covoare Brasov | AquaCarpet',
  description: 'Raspunsuri la cele mai frecvente intrebari despre serviciile noastre de spalatorie covoare in Brasov. Program, preturi, transport, timp de livrare si multe altele.',
};

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Header />
      <FAQClient />
      <Footer />
    </div>
  );
}
