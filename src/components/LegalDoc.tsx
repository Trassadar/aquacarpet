import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, PageHero } from '@/components/sections';
import { BUSINESS, LEGAL_UPDATED_LABEL } from '@/lib/business';
import type { Crumb } from '@/components/Breadcrumbs';

export function LegalDoc({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <PageHero crumbs={crumbs} title={title} lead={lead} />
        <section className="py-14 md:py-20">
          <Container className="max-w-3xl">
            <p className="text-sm text-ink-soft">Ultima actualizare: {LEGAL_UPDATED_LABEL}</p>
            <div className="legal-prose mt-8 space-y-4 text-[1.05rem] leading-relaxed text-ink">
              {children}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return <h2 className="!mt-10 text-xl font-bold tracking-tight text-navy-950">{children}</h2>;
}

export function LegalH3({ children }: { children: ReactNode }) {
  return <h3 className="!mt-6 text-lg font-semibold text-navy-950">{children}</h3>;
}

export function OperatorDetails() {
  return (
    <ul className="list-disc space-y-1 pl-5">
      <li>Denumire: {BUSINESS.name}</li>
      <li>Adresă: {BUSINESS.addressLine}</li>
      <li>
        Telefon:{' '}
        <a href={BUSINESS.phoneHref} className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          {BUSINESS.phoneDisplay}
        </a>
      </li>
      <li>
        E-mail:{' '}
        <a href={`mailto:${BUSINESS.email}`} className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          {BUSINESS.email}
        </a>
      </li>
      <li>Program: {BUSINESS.hoursShort}</li>
    </ul>
  );
}
