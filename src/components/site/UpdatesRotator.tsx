import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { UpdateCard } from "./UpdateCard";
import { getLatestUpdates } from "@/data/updates";

const ROTATE_MS = 5000;
const PER_GROUP = 3;

export function UpdatesRotator() {
  const latest = getLatestUpdates(9);
  const groups: typeof latest[] = [];
  for (let i = 0; i < latest.length; i += PER_GROUP) {
    groups.push(latest.slice(i, i + PER_GROUP));
  }

  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (groups.length <= 1) return;
    const id = window.setInterval(() => {
      setFading(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % groups.length);
        setFading(false);
      }, 320);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [groups.length]);

  const current = groups[index] ?? [];

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-orange/15 text-brand-orange">
            <Zap className="h-4 w-4" />
          </span>
          <h2 className="text-xl font-bold uppercase tracking-wide text-foreground lg:text-2xl">
            Latest Sports Updates
          </h2>
        </div>

        <div
          className={`grid gap-6 transition-all duration-300 lg:grid-cols-3 ${
            fading ? "translate-x-2 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          {current.map((u) => (
            <UpdateCard key={u.id} update={u} />
          ))}
        </div>

        {groups.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {groups.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setFading(true);
                  window.setTimeout(() => {
                    setIndex(i);
                    setFading(false);
                  }, 200);
                }}
                aria-label={`Go to update group ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-navy" : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
