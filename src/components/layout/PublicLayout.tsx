import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
      <StickyMobileCTA />
    </div>
  );
}
