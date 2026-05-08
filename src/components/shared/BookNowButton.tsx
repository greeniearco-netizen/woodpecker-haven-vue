import { Button } from "@/components/ui/button";
import { NIGHTSBRIDGE_URL } from "@/constants/site";
import { CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface BookNowButtonProps extends Omit<ComponentProps<typeof Button>, "asChild"> {
  label?: string;
  showIcon?: boolean;
}

export function BookNowButton({ label = "Book Now", showIcon = true, className, ...props }: BookNowButtonProps) {
  return (
    <Button asChild className={cn("font-medium", className)} {...props}>
      <a href={NIGHTSBRIDGE_URL} target="_blank" rel="noopener noreferrer" aria-label="Book your stay (opens in a new tab)">
        {showIcon && <CalendarCheck className="size-4" aria-hidden />}
        {label}
      </a>
    </Button>
  );
}
