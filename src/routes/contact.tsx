import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { SITE, WHATSAPP_URL } from "@/constants/site";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import contactOg from "@/assets/garden.jpg";

const url = `${SITE.url}/contact`;
const title = `Contact — ${SITE.name}`;
const description = `Get in touch with ${SITE.name} in ${SITE.location.city}. Phone, email, WhatsApp, and our enquiry form.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: contactOg },
      { property: "og:image:alt", content: `${SITE.name} garden` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: contactOg },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A short message helps us help you").max(1000),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    // Frontend-only stub — wire to backend later.
    await new Promise((r) => setTimeout(r, 700));
    console.log("[contact-form] submission", values);
    toast.success("Message sent!", { description: "We'll get back to you within 24 hours." });
    reset();
  };

  const q = encodeURIComponent(`${SITE.location.street}, ${SITE.location.city}, ${SITE.location.country}`);

  return (
    <PublicLayout>
      <section className="container-prose pt-32 md:pt-40">
        <Reveal>
          <SectionHeader eyebrow="Get in touch" title="We'd love to hear from you" description="Send a message, give us a call, or message us on WhatsApp — whichever suits." />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl border bg-card p-6 shadow-card sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={6} {...register("message")} aria-invalid={!!errors.message} />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-gradient-warm text-primary-foreground">
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">We typically respond within a few hours during reception hours.</p>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <ContactCard icon={<Phone className="size-5" />} title="Phone">
                <a href={SITE.contact.phoneHref} className="hover:text-foreground">{SITE.contact.phone}</a>
              </ContactCard>
              <ContactCard icon={<Mail className="size-5" />} title="Email">
                <a href={`mailto:${SITE.contact.email}`} className="hover:text-foreground">{SITE.contact.email}</a>
              </ContactCard>
              <ContactCard icon={<MessageCircle className="size-5" />} title="WhatsApp">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Chat with us instantly</a>
              </ContactCard>
              <ContactCard icon={<MapPin className="size-5" />} title="Address">
                {SITE.location.street}, {SITE.location.city},<br />{SITE.location.region}, {SITE.location.country}
              </ContactCard>
              <ContactCard icon={<Clock className="size-5" />} title="Hours">
                <ul className="space-y-1">
                  {SITE.hours.map((h) => (
                    <li key={h.day}><span className="font-medium text-foreground">{h.day}:</span> {h.time}</li>
                  ))}
                </ul>
              </ContactCard>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border shadow-card">
          <iframe
            title="Map of Woodpecker Guest House"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            className="h-[400px] w-full border-0"
          />
        </div>
      </section>
    </PublicLayout>
  );
}

function ContactCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border bg-card p-5 shadow-soft">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
      <div className="text-sm text-muted-foreground">
        <p className="font-display text-base text-foreground">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
