import { createFileRoute } from "@tanstack/react-router";
import { SportPage } from "@/components/site/SportPage";
import { getSport } from "@/data/sports";

const sport = getSport("formula-1");

export const Route = createFileRoute("/formula-1")({
  head: () => ({
    meta: [
      { title: `${sport.name} Medicine — Athletic Recovery Organization` },
      { name: "description", content: sport.description },
      { property: "og:title", content: `${sport.name} — Athletic Recovery Organization` },
      { property: "og:description", content: sport.description },
      { property: "og:url", content: sport.path },
    ],
    links: [{ rel: "canonical", href: sport.path }],
  }),
  component: () => <SportPage sport={sport} />,
});
