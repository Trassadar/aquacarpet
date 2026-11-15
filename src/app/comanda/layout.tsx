import { pageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = pageMetadata({
  title: 'Comandă Online – Spălare Covoare Brașov',
  description:
    'Programează online ridicarea covoarelor în Brașov. Completezi formularul, te contactăm pentru confirmare, iar noi ridicăm și livrăm gratuit. 10% reducere la comanda online.',
  path: '/comanda',
});

export default function ComandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Doar schema BreadcrumbList; breadcrumb-ul vizibil e ascuns ca să nu modifice layout-ul formularului */}
      <div className="sr-only">
        <Breadcrumbs items={[{ name: 'Comandă online', path: '/comanda' }]} />
      </div>
      {children}
    </>
  );
}
