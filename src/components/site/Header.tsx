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
    <header className="sticky top-0 z-50 bg-[#767B81] text-white shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
        <Link to="/" className="-ml-2 flex shrink-0 items-center gap-3" aria-label="Athletic Recovery Organization — Home">
          <img src="/aro-logo.png" alt="" className="h-16 w-auto object-contain lg:h-20" />
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
                    className={`relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-brand-orange ${
                      active ? "text-brand-orange" : "text-white"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 xl:hidden"
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
                        ? "bg-white/10 text-brand-orange"
                        : "text-white hover:bg-white/10 hover:text-brand-orange"
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
