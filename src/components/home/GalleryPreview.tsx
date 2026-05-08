import { Link } from "@tanstack/react-router";
import { GALLERY } from "@/data/gallery";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
  const images = GALLERY.slice(0, 6);
  return (
    <section className="container-prose py-20 md:py-28">
      <Reveal>
        <SectionHeader eyebrow="Gallery" title="A glimpse inside" description="Step into the spaces, gardens, and small moments that make Woodpecker home." />
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((img, i) => (
          <Reveal key={img.id} delay={(i % 3) * 0.05}>
            <div className={`overflow-hidden rounded-xl ${i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/gallery" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
          See full gallery <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
