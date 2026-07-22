import { createFileRoute } from "@tanstack/react-router";
import { SportPage } from "@/components/site/SportPage";
import { getSport } from "@/data/sports";

const sport = getSport("football");

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: `${sport.name} Injuries & Recovery — Athletic Recovery Organization` },
      { name: "description", content: sport.description },
      { property: "og:title", content: `${sport.name} — Athletic Recovery Organization` },
      { property: "og:description", content: sport.description },
      { property: "og:url", content: sport.path },
    ],
    links: [{ rel: "canonical", href: sport.path }],
  }),
  component: () => <SportPage sport={sport} />,
});
