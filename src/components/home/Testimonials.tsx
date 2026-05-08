import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-prose">
        <Reveal>
          <SectionHeader eyebrow="Guest reviews" title="Loved by our guests" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-soft">
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm text-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> · {t.location}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
