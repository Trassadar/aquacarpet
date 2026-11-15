import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/seo';

export type Crumb = { name: string; path: string };

/** Breadcrumb vizibil + schema BreadcrumbList. Primul element (Acasă) se adaugă automat. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Acasă', path: '/' }, ...items];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="text-sm text-white/90 mb-5">
        <ol className="flex flex-wrap gap-1">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">›</span>}
              {i < all.length - 1 ? (
                <a href={c.path} className="underline hover:no-underline">
                  {c.name}
                </a>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
