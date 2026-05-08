import { BookNowButton } from "@/components/shared/BookNowButton";
import { WHATSAPP_URL } from "@/constants/site";
import { Reveal } from "@/components/shared/Reveal";
import { MessageCircle } from "lucide-react";
import landscape from "@/assets/landscape.jpg";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={landscape} alt="" aria-hidden width={1280} height={896} loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[oklch(0.22_0.03_80/0.78)]" aria-hidden />
      <div className="container-prose py-20 text-center text-white md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-5xl">Your countryside escape awaits</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Reserve directly for the best available rate and a personal welcome on arrival.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookNowButton size="lg" className="bg-white text-foreground hover:bg-white/90" />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20">
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
