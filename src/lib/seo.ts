import type { Metadata } from 'next';
import { SITE_URL } from './business';

type PageMetaInput = {
  title: string;
  description: string;
  path: string; // ex: '/preturi' sau '/'
  /** Titlu complet, fără template (pentru pagina principală). */
  absoluteTitle?: boolean;
};

export function absoluteUrl(path: string) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

/** Metadate per pagină: title, description, canonical și Open Graph cu URL propriu. */
export function pageMetadata({ title, description, path, absoluteTitle }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} | AquaCarpet`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: 'AquaCarpet',
      locale: 'ro_RO',
      type: 'website',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'AquaCarpet – spălătorie covoare Brașov',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/og.png'],
    },
  };
}
