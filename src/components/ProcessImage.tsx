import Image from 'next/image';
import type { WorkshopPhoto } from '@/lib/workshopPhotos';

export default function ProcessImage({
  photo,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  className = '',
  priority = false,
}: {
  photo: WorkshopPhoto;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure data-reveal className={className}>
      <div className="photo-frame relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-navy-950/10 ring-1 ring-slate-200">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="ken-burns-play object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm font-medium text-ink-soft">{photo.caption}</figcaption>
    </figure>
  );
}
