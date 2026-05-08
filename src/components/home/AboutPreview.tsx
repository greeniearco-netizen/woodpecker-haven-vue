import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import garden from "@/assets/garden.jpg";

export function AboutPreview() {
  return (
    <section className="container-prose grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
      <Reveal>
        <div className="relative">
          <img
            src={garden}
            alt="Lush garden at Woodpecker Guest House"
            width={1280}
            height={896}
            loading="lazy"
            decoding="async"
            className="aspect-[5/4] w-full rounded-2xl object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl border bg-card p-5 shadow-card md:block">
            <p className="font-display text-3xl text-primary">15+</p>
            <p className="text-xs text-muted-foreground">years of warm hospitality</p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">About us</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">A countryside escape with character</h2>
        <p className="mt-5 text-muted-foreground">
          Tucked away on a quiet street in Ficksburg, Woodpecker Guest House is a family-run retreat where every guest is welcomed like an old friend. Our gardens host more than thirty species of birds — including the cardinal woodpecker that gave us our name.
        </p>
        <p className="mt-3 text-muted-foreground">
          Whether you're passing through, exploring the Eastern Free State, or simply need a weekend away, we offer the kind of stay you'll want to repeat.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link to="/about">Read our story</Link>
        </Button>
      </Reveal>
    </section>
  );
}
