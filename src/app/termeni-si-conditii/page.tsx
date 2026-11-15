import Link from 'next/link';
import { LegalDoc, LegalH2, OperatorDetails } from '@/components/LegalDoc';
import { BUSINESS, CONSUMER_LINKS, MIN_ORDER_LABEL } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

const PATH = '/termeni-si-conditii';

export const metadata = pageMetadata({
  title: 'Termeni și condiții',
  description:
    'Termenii și condițiile serviciilor AquaCarpet, spălătorie profesională de covoare în Brașov: prețuri, comandă, livrare și drepturile consumatorului.',
  path: PATH,
});

export default function TermeniSiConditiiPage() {
  return (
    <LegalDoc
      crumbs={[{ name: 'Termeni și condiții', path: PATH }]}
      title="Termeni și condiții"
      lead="Regulile aplicabile comenzilor de spălare a covoarelor la AquaCarpet."
    >
      <LegalH2>1. Informații generale</LegalH2>
      <p>
        Acești termeni reglementează utilizarea site-ului www.aquacarpet.ro și
        contractele de servicii încheiate cu {BUSINESS.name}, spălătorie profesională de covoare.
      </p>
      <OperatorDetails />
      <p>
        Prin trimiterea unei comenzi online, prin telefon sau pe WhatsApp, confirmi că ai citit
        și acceptat acești termeni.
      </p>

      <LegalH2>2. Servicii</LegalH2>
      <p>
        {BUSINESS.name} oferă spălare profesională a covoarelor, cu ridicare și livrare gratuită
        la domiciliu, în zona de acoperire. Termenul uzual de predare este de {BUSINESS.delivery},
        pentru spălarea standard, în funcție de volum și de programul de lucru ({BUSINESS.hoursShort}).
      </p>
      <p>
        Zona deservită: {BUSINESS.areaServed}. Nu prestăm servicii în afara acestor localități.
      </p>

      <LegalH2>3. Prețuri și plată</LegalH2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Preț: {BUSINESS.pricePerSqm} lei/mp.</li>
        <li>Comandă {MIN_ORDER_LABEL}.</li>
        <li>Reducere de {BUSINESS.onlineDiscount} pentru comenzile plasate online, pe acest site.</li>
        <li>Ridicare și livrare gratuită în zona deservită.</li>
      </ul>
      <p>
        Acceptăm plata numerar la livrare, cu cardul sau prin transfer bancar. Pentru clienții
        corporate putem oferi și plata la 30 de zile, pe bază de acord prealabil.
      </p>
      <p>
        Prețul final se calculează în funcție de suprafața reală a covoarelor, măsurată la
        preluare sau în atelier. Orice diferență față de estimarea inițială ți-o comunicăm
        înainte de finalizarea lucrării.
      </p>

      <LegalH2>4. Comanda</LegalH2>
      <p>
        Comanda se poate plasa prin formularul de pe <Link href="/comanda" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">www.aquacarpet.ro/comanda</Link>,
        telefonic ({BUSINESS.phoneDisplay}) sau pe WhatsApp. Confirmarea comenzii și detaliile de
        ridicare se stabilesc împreună cu tine, în funcție de programul nostru. O comandă
        devine un contract după ce ți-o confirmăm.
      </p>
      <p>
        Ești responsabil să ne oferi date de contact și o adresă corecte, să asiguri accesul
        pentru ridicare și livrare și să ne informezi despre particularități relevante ale
        covoarelor (pete dificile, materiale delicate, degradări existente).
      </p>

      <LegalH2>5. Executare, garanție și reclamații</LegalH2>
      <p>
        Executăm serviciul cu grijă profesională, folosind proceduri și detergenți adecvați.
        Dacă rezultatul nu te mulțumește, te rugăm să ne anunți în cel mai scurt timp de la
        livrare; refacem lucrarea gratuit, acolo unde este rezonabil și posibil.
      </p>
      <p>
        Nu putem garanta îndepărtarea integrală a tuturor petelor sau restabilirea stării
        inițiale a unui covor foarte uzat, decolorat sau deteriorat înainte de spălare. Îți
        comunicăm aceste limitări dacă le constatăm.
      </p>

      <LegalH2>6. Dreptul de retragere</LegalH2>
      <p>
        Dacă ești consumator, ai în principiu un drept de retragere din contractele încheiate
        la distanță, conform OUG nr. 34/2014. Pentru servicii, dreptul de retragere se pierde
        atunci când prestarea a început cu acordul tău expres și cu recunoașterea faptului că
        vei pierde acest drept după executarea completă a serviciului.
      </p>
      <p>
        Poți anula o comandă neîncepută fără costuri, contactându-ne la {BUSINESS.phoneDisplay}{' '}
        sau {BUSINESS.email}. Dacă lucrarea a fost deja începută sau finalizată, anularea se
        analizează de la caz la caz, iar eventualele costuri deja suportate pot fi facturate.
      </p>

      <LegalH2>7. Răspundere</LegalH2>
      <p>
        Răspundem pentru prestarea necorespunzătoare a serviciului, în limitele legii. Nu
        răspundem pentru întârzieri cauzate de informații incorecte, de lipsa accesului la
        adresă, de forță majoră sau de alte cauze independente de controlul nostru.
      </p>

      <LegalH2>8. Date personale</LegalH2>
      <p>
        Prelucrarea datelor personale este descrisă în{' '}
        <Link href="/politica-de-confidentialitate" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          Politica de confidențialitate
        </Link>
        . Utilizarea cookie-urilor este descrisă în{' '}
        <Link href="/politica-cookies" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          Politica de cookie-uri
        </Link>
        .
      </p>

      <LegalH2>9. Soluționarea litigiilor</LegalH2>
      <p>
        Legea aplicabilă este legea română. Orice neînțelegere încercăm să o rezolvăm amiabil,
        la datele de contact de mai sus. Dacă ești consumator, te poți adresa și Autorității
        Naționale pentru Protecția Consumatorilor (ANPC), inclusiv prin mecanismul de
        soluționare alternativă a litigiilor (SAL), sau platformei europene de soluționare
        online a litigiilor (SOL):
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <a href={CONSUMER_LINKS.anpcSal} target="_blank" rel="noopener noreferrer" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
            ANPC – Ce este SAL
          </a>
        </li>
        <li>
          <a href={CONSUMER_LINKS.sol} target="_blank" rel="noopener noreferrer" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
            Platforma SOL (UE)
          </a>
        </li>
      </ul>

      <LegalH2>10. Modificări</LegalH2>
      <p>
        Putem actualiza acești termeni. Varianta în vigoare este cea publicată pe această
        pagină, cu data ultimei actualizări menționată mai sus. Pentru comenzile deja
        confirmate se aplică termenii de la data confirmării.
      </p>
    </LegalDoc>
  );
}
