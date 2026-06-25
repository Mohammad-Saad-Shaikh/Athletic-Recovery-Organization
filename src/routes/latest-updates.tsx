import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { UpdateCard } from "@/components/site/UpdateCard";
import { Placeholder } from "@/components/site/Placeholder";
import { getSortedUpdates, relativeTime, type UpdateCategory } from "@/data/updates";

export const Route = createFileRoute("/latest-updates")({
  head: () => ({
    meta: [
      { title: "Latest Updates — Athletic Recovery Organization" },
      { name: "description", content: "The latest news, research, and education in sports medicine across all sports." },
      { property: "og:title", content: "Latest Updates — Athletic Recovery Organization" },
      { property: "og:description", content: "Latest sports medicine updates, research, and education." },
      { property: "og:url", content: "/latest-updates" },
    ],
    links: [{ rel: "canonical", href: "/latest-updates" }],
  }),
  component: LatestUpdatesPage,
});

const categories: ("All" | UpdateCategory)[] = [
  "All",
  "Soccer",
  "Basketball",
  "Football",
  "Tennis",
  "Formula 1",
  "Prevention",
  "Other Medicine",
];

const PAGE_SIZE = 9;

function LatestUpdatesPage() {
  const sorted = useMemo(() => getSortedUpdates(), []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const filtered = rest.filter((u) => {
    const matchCat = category === "All" || u.category === category;
    const q = query.trim().toLowerCase();
    const matchQuery =
      !q || u.title.toLowerCase().includes(q) || u.description.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  return (
    <SiteShell>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-[1440px] px-4 py-14 lg:px-8 lg:py-20">
          <span className="inline-block h-1 w-12 rounded-full bg-brand-orange" />
          <h1 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">Latest Updates</h1>
          <p className="mt-4 max-w-2xl text-base text-navy-foreground/80 lg:text-lg">
            Research, news, and education from across the sports medicine landscape.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="mx-auto max-w-[1440px] px-4 pt-14 lg:px-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">Featured Update</h2>
          <article className="mt-4 grid gap-6 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[1.2fr_1fr]">
            <Placeholder className="aspect-[16/10] w-full lg:aspect-auto lg:h-full" />
            <div className="flex flex-col justify-center gap-3 p-6 lg:p-10">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
                {relativeTime(featured.publishedAt)}
                <span className="ml-2 rounded-full bg-surface-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                  {featured.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide text-foreground lg:text-3xl">
                {featured.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{featured.description}</p>
            </div>
          </article>
        </section>
      )}

      {/* Controls */}
      <section className="mx-auto max-w-[1440px] px-4 pt-12 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search updates…"
              className="w-full rounded-md border border-input bg-card py-2.5 pl-9 pr-3 text-sm outline-none ring-ring transition focus:border-navy focus:ring-2"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(c);
                  setVisible(PAGE_SIZE);
                }}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  category === c
                    ? "border-navy bg-navy text-navy-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1440px] px-4 py-10 lg:px-8 lg:pb-20">
        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border bg-surface p-10 text-center text-sm text-muted-foreground">
            No updates match your filters.
          </p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(0, visible).map((u) => (
                <UpdateCard key={u.id} update={u} />
              ))}
            </div>
            {visible < filtered.length && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="rounded-md border border-navy bg-card px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </SiteShell>
  );
}
