import { Link } from "@tanstack/react-router";
import logo from "@/assets/aro-logo.asset.json";
import { sports } from "@/data/sports";

export function Footer() {
  const sportLinks = sports.filter((s) => !["prevention", "other-medicine"].includes(s.key));

  return (
    <footer className="mt-24 bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-[1440px] px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white">
                <img src={logo.url} alt="Athletic Recovery Organization" className="h-full w-full object-cover" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">Athletic Recovery</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Organization</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
              Sports injury education, prevention, and recovery resources for athletes, coaches, and clinicians.
            </p>
          </div>

          <FooterColumn title="Sports">
            {sportLinks.map((s) => (
              <FooterLink key={s.key} to={s.path}>{s.name}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Knowledge">
            <FooterLink to="/prevention">Prevention</FooterLink>
            <FooterLink to="/latest-updates">Latest Updates</FooterLink>
            <FooterLink to="/other-medicine">Other Medicine</FooterLink>
          </FooterColumn>

          <FooterColumn title="Organization">
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Disclaimer</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Athletic Recovery Organization. All rights reserved.</p>
          <p className="max-w-2xl">
            Educational content only. Not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-navy-foreground/75 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
