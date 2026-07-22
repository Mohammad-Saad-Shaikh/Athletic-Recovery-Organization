import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/soccer", label: "Soccer" },
  { to: "/basketball", label: "Basketball" },
  { to: "/football", label: "Football" },
  { to: "/tennis", label: "Tennis" },
  { to: "/formula-1", label: "F1" },
  { to: "/prevention", label: "Prevention" },
  { to: "/latest-updates", label: "Latest Updates" },
  { to: "/other-medicine", label: "Other Medicine" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-navy-deep text-navy-foreground shadow-[0_1px_0_0_oklch(1_0_0_/_8%)] backdrop-blur supports-[backdrop-filter]:bg-navy-deep/95">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Athletic Recovery Organization — Home">
          <span className="grid h-13 w-13 place-items-center overflow-hidden rounded-full bg-white lg:h-14 lg:w-14">
            <img src="/aro-logo.jpeg" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="hidden flex-col leading-tight md:flex">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Athletic Recovery</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">Organization</span>
          </span>
        </Link>

        <nav className="hidden xl:flex">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-white ${
                      active ? "text-white" : "text-navy-foreground/75"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-brand-orange transition-transform duration-300 will-change-transform ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-foreground/90 hover:bg-white/10 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="xl:hidden">
          <ul className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 pb-4">
            {nav.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-navy-foreground/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
