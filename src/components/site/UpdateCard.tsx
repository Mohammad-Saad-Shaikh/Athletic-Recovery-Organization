import { Placeholder } from "./Placeholder";
import { relativeTime, type Update } from "@/data/updates";

export function UpdateCard({ update }: { update: Update }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Placeholder className="aspect-[16/9] w-full" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-orange" />
          <span className="font-medium text-muted-foreground">{relativeTime(update.publishedAt)}</span>
          <span className="ml-auto rounded-full bg-surface-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {update.category}
          </span>
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{update.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{update.description}</p>
      </div>
    </article>
  );
}
