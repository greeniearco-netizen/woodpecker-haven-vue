import { Star } from "lucide-react";
import { SITE } from "@/constants/site";
import { Reveal } from "@/components/shared/Reveal";

export function RatingsBar() {
  const r = SITE.ratings;
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="container-prose py-12 md:py-16">
        <Reveal>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-10">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-card px-8 py-6 shadow-soft md:w-56">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Guest score</p>
              <p className="mt-2 font-display text-5xl text-primary">{r.overall}</p>
              <p className="mt-1 text-sm font-semibold">{r.label}</p>
              <p className="text-xs text-muted-foreground">{r.reviews} reviews</p>
              <div className="mt-3 flex gap-0.5" aria-label={`${r.qualityStars} out of 5 quality rating`}>
                {Array.from({ length: r.qualityStars }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-3 text-sm text-muted-foreground">Categories rated by recent guests</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
                {r.categories.map((c) => (
                  <li key={c.name}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm">{c.name}</span>
                      <strong className="text-sm">{c.score}</strong>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-gradient-warm" style={{ width: `${(c.score / 10) * 100}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
