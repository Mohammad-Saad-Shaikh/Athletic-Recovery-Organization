import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, CircleDot, Dumbbell, Trophy, Flag, ShieldPlus, Stethoscope } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { UpdatesRotator } from "@/components/site/UpdatesRotator";
import { SportCard } from "@/components/site/SportCard";
import { sports, type SportKey } from "@/data/sports";
import knee from "@/assets/knee-anatomy.jpg";

const sportIcons: Record<SportKey, React.ReactNode> = {
  soccer: <CircleDot className="h-5 w-5" />,
  basketball: <Dumbbell className="h-5 w-5" />,
  football: <Trophy className="h-5 w-5" />,
  tennis: <Activity className="h-5 w-5" />,
  "formula-1": <Flag className="h-5 w-5" />,
  prevention: <ShieldPlus className="h-5 w-5" />,
  "other-medicine": <Stethoscope className="h-5 w-5" />,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Athletic Recovery Organization — Injury Knowledge. Stronger Athletes." },
      { name: "description", content: "Trusted source for sports injury education, prevention strategies, recovery techniques, and the latest updates in sports medicine." },
      { property: "og:title", content: "Athletic Recovery Organization" },
      { property: "og:description", content: "Sports medicine education, injury prevention, and recovery." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Injury Knowledge.<br />
              <span className="text-white">Stronger Athletes.</span>
            </h1>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-brand-orange lg:text-base">
              Medicine <span className="text-brand-green">•</span> Prevention <span className="text-brand-green">•</span> Recovery
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 lg:text-lg">
              Your trusted source for sports injury education, prevention strategies, rehabilitation
              guidance, and the latest updates across multiple sports.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/prevention"
                className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-bold uppercase tracking-wider text-brand-orange-foreground transition-colors hover:bg-brand-orange/90"
              >
                Explore Injuries <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/latest-updates"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                Latest Updates
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-0 rounded-2xl bg-gradient-to-br from-brand-green/20 via-transparent to-brand-orange/20 blur-2xl" />
            <img
              src={knee}
              alt="Anatomical illustration of a human knee joint"
              className="relative z-10 mx-auto aspect-square w-full max-w-[560px] rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <UpdatesRotator />

      {/* Explore by sport */}
      <section className="mx-auto max-w-[1440px] px-4 py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-foreground lg:text-3xl">
              Explore By Sport
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Learn about common injuries, treatments, and prevention methods for your favorite sports.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {sports.map((s) => (
            <SportCard key={s.key} sport={s} icon={sportIcons[s.key]} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
