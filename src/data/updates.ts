export type UpdateCategory =
  | "Soccer"
  | "Basketball"
  | "Football"
  | "Tennis"
  | "Formula 1"
  | "Prevention"
  | "Other Medicine";

export interface Update {
  id: string;
  title: string;
  description: string;
  category: UpdateCategory;
  /** ISO date string */
  publishedAt: string;
}

// Placeholder dataset. Edit this file to add real updates; the homepage
// automatically picks the 9 newest entries sorted by publishedAt.
const now = Date.now();
const hoursAgo = (h: number) => new Date(now - h * 60 * 60 * 1000).toISOString();

export const updates: Update[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `placeholder-${i + 1}`,
  title: "Placeholder",
  description:
    "Placeholder placeholder placeholder placeholder placeholder placeholder placeholder.",
  category: (["Soccer", "Basketball", "Football", "Tennis", "Formula 1", "Prevention", "Other Medicine"] as UpdateCategory[])[i % 7],
  publishedAt: hoursAgo(i * 6),
}));

export const getSortedUpdates = () =>
  [...updates].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const getLatestUpdates = (n: number) => getSortedUpdates().slice(0, n);

export function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.max(1, Math.floor(diff / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}w ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}
