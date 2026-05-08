import { Link } from "@tanstack/react-router";
import { Bird, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/constants/site";
import { BookNowButton } from "@/components/shared/BookNowButton";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary/40">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Bird className="size-5" aria-hidden />
            </span>
            <span className="font-display text-xl font-semibold">{SITE.shortName}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A tranquil guest house in {SITE.location.city}, {SITE.location.region}. Comfort, hospitality, and birdsong-filled gardens.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border bg-background p-2 text-muted-foreground hover:text-foreground"><Facebook className="size-4" /></a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border bg-background p-2 text-muted-foreground hover:text-foreground"><Instagram className="size-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg">Visit</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 text-accent" /> {SITE.location.street}, {SITE.location.city}</li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0 text-accent" /> <a href={SITE.contact.phoneHref} className="hover:text-foreground">{SITE.contact.phone}</a></li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 text-accent" /> <a href={`mailto:${SITE.contact.email}`} className="hover:text-foreground">{SITE.contact.email}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/rooms" className="hover:text-foreground">Rooms</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg">Reserve your stay</h3>
          <p className="mb-4 text-sm text-muted-foreground">Book directly for the best rate and instant confirmation.</p>
          <div className="flex flex-col gap-2">
            <BookNowButton className="w-full bg-gradient-warm text-primary-foreground" size="lg" />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
              <MessageCircle className="size-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Made with care in {SITE.location.region}, {SITE.location.country}.</p>
        </div>
      </div>
    </footer>
  );
}
