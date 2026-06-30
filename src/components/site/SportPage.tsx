import { Link } from "@tanstack/react-router";
import { Placeholder } from "./Placeholder";
import { UpdateCard } from "./UpdateCard";
import { getSortedUpdates } from "@/data/updates";
import { sports, type Sport } from "@/data/sports";

export function SportPage({ sport }: { sport: Sport }) {
  const related = getSortedUpdates()
    .filter((u) => u.category.toLowerCase().replace(/\s+/g, "-") === sport.key || u.category === sport.name)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h1 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">{sport.name}</h1>
            <p className="mt-3 text-base font-semibold uppercase tracking-[0.18em] text-brand-orange">
              {sport.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 lg:text-lg">
              {sport.description}
            </p>
          </div>
          <Placeholder className="aspect-[4/3] w-full rounded-xl" />
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 lg:grid-cols-[1fr_280px] lg:px-8 lg:py-20">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Injury Categories</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse the most common conditions associated with {sport.name.toLowerCase()}.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sport.injuryCategories.map((c) => (
              <article key={c.title} className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-bold text-foreground">Featured Articles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(related.length ? related : getSortedUpdates().slice(0, 3)).map((u) => (
              <UpdateCard key={u.id} update={u} />
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-bold text-foreground">Sources & References</h2>
          <div className="mt-4 rounded-xl border border-dashed border-border bg-surface p-6 text-sm text-muted-foreground">
            Peer-reviewed references will be listed here as articles are published. Placeholder content.
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">More Sports</h3>
            <ul className="mt-3 space-y-1">
              {sports.map((s) => (
                <li key={s.key}>
                  <Link
                    to={s.path}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                      s.key === sport.key
                        ? "bg-navy text-navy-foreground"
                        : "text-foreground hover:bg-card"
                    }`}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
