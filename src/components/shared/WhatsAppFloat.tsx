import { WHATSAPP_URL } from "@/constants/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[oklch(0.62_0.18_150)] text-white shadow-elegant transition-transform hover:scale-110 md:bottom-6 md:right-6"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
