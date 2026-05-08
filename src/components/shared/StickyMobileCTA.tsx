import { BookNowButton } from "./BookNowButton";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <BookNowButton className="w-full bg-gradient-warm text-primary-foreground" size="lg" />
    </div>
  );
}
