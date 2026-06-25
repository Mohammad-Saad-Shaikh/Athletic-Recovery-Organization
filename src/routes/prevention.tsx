import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SportPage } from "@/components/site/SportPage";
import { getSport } from "@/data/sports";

const sport = getSport("prevention");

export const Route = createFileRoute("/prevention")({
  head: () => ({
    meta: [
      { title: "Injury Prevention — Athletic Recovery Organization" },
      { name: "description", content: sport.description },
      { property: "og:title", content: "Injury Prevention — Athletic Recovery Organization" },
      { property: "og:description", content: sport.description },
      { property: "og:url", content: sport.path },
    ],
    links: [{ rel: "canonical", href: sport.path }],
  }),
  component: () => <SiteShell><SportPage sport={sport} /></SiteShell>,
});
