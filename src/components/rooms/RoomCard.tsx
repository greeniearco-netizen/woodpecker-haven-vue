import { Link } from "@tanstack/react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BedDouble, Maximize, Wifi } from "lucide-react";
import { BookNowButton } from "@/components/shared/BookNowButton";
import type { Room } from "@/types";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card pt-0 pb-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
      <Link to="/rooms/$roomId" params={{ roomId: room.slug }} className="block overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={room.image}
            alt={room.name}
            width={1280}
            height={896}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {!room.available && (
            <Badge variant="secondary" className="absolute left-3 top-3">Fully booked</Badge>
          )}
        </div>
      </Link>
      <CardHeader>
        <div className="flex items-baseline justify-between gap-3">
          <CardTitle className="font-display text-2xl">{room.name}</CardTitle>
          <p className="shrink-0 text-right text-sm text-muted-foreground">
            <span className="block text-lg font-semibold text-foreground">R{room.pricePerNight}</span>
            per night
          </p>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{room.shortDescription}</p>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-1.5"><Users className="size-3.5 text-accent" /> Up to {room.maxGuests}</li>
          <li className="flex items-center gap-1.5"><BedDouble className="size-3.5 text-accent" /> {room.bedType}</li>
          <li className="flex items-center gap-1.5"><Maximize className="size-3.5 text-accent" /> {room.size}</li>
          <li className="flex items-center gap-1.5"><Wifi className="size-3.5 text-accent" /> Free WiFi</li>
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link to="/rooms/$roomId" params={{ roomId: room.slug }}>Details</Link>
        </Button>
        <BookNowButton className="flex-1 bg-gradient-warm text-primary-foreground" />
      </CardFooter>
    </Card>
  );
}
