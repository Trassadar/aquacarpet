import Link from 'next/link';
import { LegalDoc, LegalH2, LegalH3, OperatorDetails } from '@/components/LegalDoc';
import { BUSINESS, CONSUMER_LINKS } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

const PATH = '/politica-de-confidentialitate';

export const metadata = pageMetadata({
  title: 'Politica de confidențialitate',
  description:
    'Cum prelucrează AquaCarpet datele personale: ce colectăm prin formularul de comandă, de ce, cine sunt destinatarii (inclusiv Carpetan) și care îți sunt drepturile GDPR.',
  path: PATH,
});

export default function PoliticaConfidentialitatePage() {
  return (
    <LegalDoc
      crumbs={[{ name: 'Politica de confidențialitate', path: PATH }]}
      title="Politica de confidențialitate"
      lead="Cum folosim datele tale atunci când comanzi sau ne contactezi."
    >
      <p>
        Această politică explică modul în care {BUSINESS.name} prelucrează datele cu caracter
        personal, în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și cu Legea nr. 190/2018.
      </p>

      <LegalH2>1. Operatorul de date</LegalH2>
      <p>Operatorul datelor este {BUSINESS.name}:</p>
      <OperatorDetails />

      <LegalH2>2. Datele pe care le prelucrăm</LegalH2>
      <LegalH3>Formularul de comandă online</LegalH3>
      <p>
        Când plasezi o comandă pe acest site, colectăm datele pe care le completezi în
        formular: nume, telefon, adresă (oraș, stradă, număr, bloc, scară, apartament),
        data preferată, intervalul orar preferat, numărul de covoare, observații despre
        covoare și acordul privind prelucrarea datelor. Aceste informații sunt necesare
        pentru a prelua, spăla și returna covoarele.
      </p>
      <LegalH3>Telefon, e-mail și WhatsApp</LegalH3>
      <p>
        Dacă ne scrii sau ne suni, prelucrăm datele pe care ni le transmiți (de exemplu
        nume, număr de telefon, adresă, detalii despre comandă) ca să îți putem răspunde
        și să gestionăm solicitarea. Comunicarea prin WhatsApp este supusă și politicilor
        WhatsApp / Meta.
      </p>
      <LegalH3>Date tehnice de navigare</LegalH3>
      <p>
        Site-ul nu folosește instrumente de analiză sau de publicitate și, în forma actuală,
        nu setează cookie-uri proprii. Detaliile sunt în{' '}
        <Link href="/politica-cookies" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          Politica de cookie-uri
        </Link>
        .
      </p>

      <LegalH2>3. Scopuri și temeiuri legale</LegalH2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Executarea contractului</strong> (art. 6 alin. (1) lit. b) GDPR): preluarea
          și procesarea comenzii, ridicarea și livrarea covoarelor, comunicarea privind
          statusul comenzii.
        </li>
        <li>
          <strong>Consimțământ</strong> (art. 6 alin. (1) lit. a) GDPR): acordul bifat în
          formularul de comandă, pentru prelucrarea datelor în acest scop.
        </li>
        <li>
          <strong>Interes legitim</strong> (art. 6 alin. (1) lit. f) GDPR): răspunsul la
          mesajele de contact și apărarea drepturilor noastre în eventualitatea unei
          reclamații.
        </li>
        <li>
          <strong>Obligație legală</strong> (art. 6 alin. (1) lit. c) GDPR), atunci când
          legea ne cere să păstrăm anumite evidențe (de exemplu fiscale).
        </li>
      </ul>
      <p>Nu folosim datele pentru marketing nesolicitat și nu luăm decizii automatizate care te afectează.</p>

      <LegalH2>4. Destinatari</LegalH2>
      <p>
        Datele din formularul de comandă sunt transmise platformei Carpetan
        (carpetan.com), folosită de {BUSINESS.name} pentru preluarea și gestionarea
        comenzilor. Carpetan acționează ca împuternicit, exclusiv pentru procesarea
        comenzii.
      </p>
      <p>
        Site-ul este găzduit de Vercel, care asigură infrastructura de hosting. Vercel
        poate prelucra date tehnice de acces (de exemplu adresă IP și jurnale de server)
        pentru funcționarea și securitatea serviciului.
      </p>
      <p>
        Nu vindem datele tale. Le putem dezvălui autorităților, dacă legea o cere, sau
        consultanților noștri (de exemplu contabilitate), numai în măsura necesară.
      </p>

      <LegalH2>5. Durata stocării</LegalH2>
      <p>
        Păstrăm datele comenzii cât este necesar pentru prestarea serviciului, pentru
        eventuale reclamații și pentru obligațiile legale de arhivare. Datele din
        mesajele de contact le păstrăm cât este necesar pentru a rezolva solicitarea.
        După aceste termene, datele sunt șterse sau anonimizate.
      </p>

      <LegalH2>6. Transferuri în afara SEE</LegalH2>
      <p>
        Găzduirea prin Vercel poate implica prelucrarea unor date tehnice și pe servere
        din afara Spațiului Economic European. În astfel de situații se folosesc
        garanțiile prevăzute de GDPR (de exemplu clauze contractuale standard).
        Platforma Carpetan este folosită pentru gestionarea comenzilor; dacă intervin
        transferuri, acestea au loc numai în cadrul prestării serviciului.
      </p>

      <LegalH2>7. Drepturile tale</LegalH2>
      <p>Potrivit GDPR, ai dreptul la:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>acces la datele tale;</li>
        <li>rectificarea datelor inexacte sau incomplete;</li>
        <li>ștergerea datelor, în condițiile legii;</li>
        <li>restricționarea prelucrării;</li>
        <li>portabilitatea datelor, acolo unde este aplicabil;</li>
        <li>opoziție față de prelucrările bazate pe interes legitim;</li>
        <li>retragerea consimțământului, fără a afecta legalitatea prelucrării anterioare.</li>
      </ul>
      <p>
        Pentru exercitarea drepturilor, scrie-ne la{' '}
        <a href={`mailto:${BUSINESS.email}`} className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          {BUSINESS.email}
        </a>{' '}
        sau sună la {BUSINESS.phoneDisplay}. Ai și dreptul de a depune o plângere la
        Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal
        (ANSPDCP):{' '}
        <a href={CONSUMER_LINKS.anspdcp} target="_blank" rel="noopener noreferrer" className="font-medium text-navy-950 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-800">
          {CONSUMER_LINKS.anspdcp}
        </a>
        .
      </p>

      <LegalH2>8. Securitate</LegalH2>
      <p>
        Aplicăm măsuri rezonabile de protecție tehnică și organizatorică (conexiune
        HTTPS, acces limitat la date, transmitere controlată către Carpetan). Nicio
        transmisie pe internet nu este însă complet lipsită de riscuri.
      </p>

      <LegalH2>9. Actualizări</LegalH2>
      <p>
        Putem actualiza această politică dacă se schimbă modul de prelucrare a datelor
        sau cadrul legal. Varianta în vigoare este cea de pe această pagină, cu data
        ultimei actualizări menționată mai sus.
      </p>
    </LegalDoc>
  );
}
