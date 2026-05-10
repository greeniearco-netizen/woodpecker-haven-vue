import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { BookNowButton } from "@/components/shared/BookNowButton";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
      <img
        src={hero}
        alt="Woodpecker Guesthouse at golden hour"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />

      <div className="container-prose w-full pb-20 pt-32 text-white sm:pt-40">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/80"
        >
          {SITE.location.city} · {SITE.location.region}
        </motion.p>
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display text-4xl leading-[1.05] sm:text-6xl md:text-7xl"
        >
          {SITE.tagline}
        </motion.h1>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl"
        >
          Relax. Unwind. Experience hospitality. A warm, tranquil escape in the heart of the Free State.
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <BookNowButton size="lg" className="bg-white text-foreground hover:bg-white/90" />
          <Button asChild variant="outline" size="lg" className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
            <Link to="/rooms">View Rooms <ArrowRight className="size-4" /></Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
            <Link to="/contact"><Phone className="size-4" /> Contact us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
