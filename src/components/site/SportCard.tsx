import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Placeholder } from "./Placeholder";
import type { Sport } from "@/data/sports";

const accentClass: Record<Sport["accent"], string> = {
  green: "text-brand-green",
  orange: "text-brand-orange",
  navy: "text-navy",
};
const accentBgClass: Record<Sport["accent"], string> = {
  green: "bg-brand-green/15 text-brand-green",
  orange: "bg-brand-orange/15 text-brand-orange",
  navy: "bg-navy/10 text-navy",
};

export function SportCard({ sport, icon }: { sport: Sport; icon: React.ReactNode }) {
  return (
    <Link
      to={sport.path}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative">
        <Placeholder className="aspect-[16/10] w-full" />
        <span
          className={`absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full shadow-sm ${accentBgClass[sport.accent]}`}
        >
          {icon}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{sport.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sport.tagline}</p>
        <span
          className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${accentClass[sport.accent]}`}
        >
          Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
