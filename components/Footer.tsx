import Link from "next/link";

const LIENS_SITE = [
  { href: "/",          label: "Accueil"    },
  { href: "/catalogue", label: "Catalogue"  },
  { href: "/planning",  label: "Planning"   },
];

const LIENS_COMPTE = [
  { href: "/login",        label: "Se connecter"  },
  { href: "/register",     label: "S'inscrire"    },
  { href: "/mes-lectures", label: "Mes lectures"  },
];

const LIENS_LEGAL = [
  { href: "/mentions-legales",    label: "Mentions légales"     },
  { href: "/confidentialite",     label: "Confidentialité"      },
  { href: "/conditions",          label: "CGU"                  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border-base bg-bg-nav text-text-muted">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ── Grille principale ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">

          {/* Logo + description */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
            <Link href="/" className="text-xl font-bold text-violet-400 hover:text-violet-300 transition-colors">
              AetherScan
            </Link>
            <p className="text-sm leading-relaxed text-text-faint">
              Lis tes mangas, manhwas, Manhwas et webtoons en un seul endroit.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-text-primary text-sm font-semibold uppercase tracking-widest">Navigation</h3>
            <ul className="flex flex-col gap-2">
              {LIENS_SITE.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-violet-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compte */}
          <div className="flex flex-col gap-3">
            <h3 className="text-text-primary text-sm font-semibold uppercase tracking-widest">Mon compte</h3>
            <ul className="flex flex-col gap-2">
              {LIENS_COMPTE.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-violet-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-text-primary text-sm font-semibold uppercase tracking-widest">Légal</h3>
            <ul className="flex flex-col gap-2">
              {LIENS_LEGAL.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-violet-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bas du footer ── */}
        <div className="border-t border-border-base pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-faint">
          <p>© {new Date().getFullYear()} AetherScan. Tous droits réservés.</p>
          <p>
            Fait avec{" "}
            <span className="text-violet-500" aria-label="amour">♥</span>
            {" "}par l&apos;équipe AetherScan
          </p>
        </div>
      </div>
    </footer>
  );
}