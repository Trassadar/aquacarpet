import Link from 'next/link';
import { LegalDoc, LegalH2 } from '@/components/LegalDoc';
import { BUSINESS } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

const PATH = '/politica-cookies';

export const metadata = pageMetadata({
  title: 'Politica de cookie-uri',
  description:
    'Politica de cookie-uri AquaCarpet: ce sunt cookie-urile și ce folosește (sau nu folosește) site-ul www.aquacarpet.ro.',
  path: PATH,
});

export default function PoliticaCookiesPage() {
  return (
    <LegalDoc
      crumbs={[{ name: 'Politica de cookie-uri', path: PATH }]}
      title="Politica de cookie-uri"
      lead="Ce sunt cookie-urile și cum le folosim pe site-ul AquaCarpet."
    >
      <LegalH2>1. Ce sunt cookie-urile</LegalH2>
      <p>
        Cookie-urile sunt fișiere de mici dimensiuni salvate pe dispozitivul tău de către
        un site web. Pot fi folosite, de exemplu, pentru funcționarea site-ului, pentru
        analiză de trafic sau pentru publicitate.
      </p>

      <LegalH2>2. Ce folosește acest site</LegalH2>
      <p>
        Am verificat codul sursă al site-ului și răspunsurile HTTP ale paginilor publice
        (inclusiv pagina principală, comanda, contact și prețuri). În forma actuală,
        www.aquacarpet.ro:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>nu setează cookie-uri proprii;</li>
        <li>nu folosește Google Analytics, Meta Pixel, Vercel Analytics, Speed Insights sau alte scripturi de urmărire;</li>
        <li>nu folosește cookie-uri de marketing, de publicitate sau de analiză a comportamentului.</li>
      </ul>
      <p>
        Formularul de comandă trimite datele către server doar atunci când trimiți comanda;
        această transmitere nu se face prin cookie-uri.
      </p>
      <p>
        Găzduirea este asigurată de Vercel. La momentul verificării, paginile publice nu
        trimiteau antetul Set-Cookie. Dacă în viitor infrastructura de hosting sau o
        funcție strict necesară a site-ului va seta cookie-uri tehnice (de exemplu pentru
        securitate sau livrarea conținutului), acestea vor fi folosite doar pentru
        funcționarea serviciului, nu pentru publicitate.
      </p>

      <LegalH2>3. Cum poți controla cookie-urile</LegalH2>
      <p>
        Chiar dacă acest site nu setează momentan cookie-uri, poți gestiona sau bloca
        cookie-urile din setările browserului tău. Blocarea tuturor cookie-urilor poate
        afecta funcționarea altor site-uri pe care le vizitezi.
      </p>

      <LegalH2>4. Actualizări</LegalH2>
      <p>
        Dacă vom introduce instrumente de analiză sau alte cookie-uri care nu sunt
        strict necesare, vom actualiza această politică și, acolo unde legea o cere,
        vom cere consimțământul tău înainte de a le folosi.
      </p>
      <p>
        Prelucrarea datelor personale este descrisă în{' '}
        <Link href="/politica-de-confidentialitate" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          Politica de confidențialitate
        </Link>
        . Pentru întrebări, ne poți scrie la{' '}
        <a href={`mailto:${BUSINESS.email}`} className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          {BUSINESS.email}
        </a>
        .
      </p>
    </LegalDoc>
  );
}
