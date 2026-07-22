import { createFileRoute } from "@tanstack/react-router";
import { SportPage } from "@/components/site/SportPage";
import { getSport } from "@/data/sports";

const sport = getSport("other-medicine");

export const Route = createFileRoute("/other-medicine")({
  head: () => ({
    meta: [
      { title: "Other Sports Medicine Topics — Athletic Recovery Organization" },
      { name: "description", content: sport.description },
      { property: "og:title", content: "Other Sports Medicine Topics" },
      { property: "og:description", content: sport.description },
      { property: "og:url", content: sport.path },
    ],
    links: [{ rel: "canonical", href: sport.path }],
  }),
  component: () => <SportPage sport={sport} />,
});
