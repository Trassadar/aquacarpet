import type { MetadataRoute } from 'next';
import { LEGAL_PAGES, SITE_UPDATED } from '@/lib/business';
import { SERVICES } from '@/lib/services';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_UPDATED);
  const pages: { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/servicii', changeFrequency: 'monthly', priority: 0.9 },
    ...SERVICES.map((s) => ({ path: `/servicii/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.85 })),
    { path: '/preturi', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/comanda', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
    ...LEGAL_PAGES.map((p) => ({ path: p.path, changeFrequency: 'monthly' as const, priority: 0.4 })),
  ];

  return pages.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
