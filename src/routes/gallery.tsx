import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { GALLERY } from "@/data/gallery";
import { SITE } from "@/constants/site";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const title = `Gallery — ${SITE.name}`;
const description = "Photos of rooms, gardens, dining, and the birdlife that calls Woodpecker home.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/gallery` }],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["all", "rooms", "exterior", "garden", "dining", "wildlife"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("all");
  const [active, setActive] = useState<number | null>(null);
  const images = filter === "all" ? GALLERY : GALLERY.filter((i) => i.category === filter);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <PublicLayout>
      <section className="container-prose pt-32 md:pt-40">
        <Reveal>
          <SectionHeader eyebrow="Gallery" title="Step inside Woodpecker" description="Browse our spaces, gardens, and small details." />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm capitalize transition",
                filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:bg-muted",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(i)}
              className="block w-full overflow-hidden rounded-xl shadow-soft transition hover:shadow-card focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 animate-fade-in" onClick={close} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button aria-label="Close" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><X /></button>
          <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronLeft /></button>
          <button aria-label="Next" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronRight /></button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-elegant"
          />
        </div>
      )}
    </PublicLayout>
  );
}
