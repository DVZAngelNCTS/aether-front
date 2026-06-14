"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchFilters from "./SearchFilters";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

// Liens de navigation principaux
const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/planning", label: "Planning" },
  { href: "/catalogue", label: "Catalogue" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const { theme, setTheme } = useTheme();

    return (
        <>
        <header className="sticky top-0 z-50 bg-bg-nav border-b border-border-base">
            <nav
            className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4"
            aria-label="Navigation principale"
            >
            {/* ── Logo ── */}
            <Link
                href="/"
                className="text-xl font-bold text-violet-400 tracking-tight shrink-0 hover:text-violet-300 transition-colors"
                aria-label="AetherScan - Accueil"
            >
                AetherScan
            </Link>

            {/* ── Liens desktop ── */}
            <ul className="hidden md:flex items-center gap-1 ml-2" role="list">
                {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                    <Link
                    href={href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        pathname === href
                        ? "text-violet-400 bg-violet-950"
                        : "text-text-muted hover:text-text-primary hover:bg-bg-card"
                    }`}
                    aria-current={pathname === href ? "page" : undefined}
                    >
                    {label}
                    </Link>
                </li>
                ))}
            </ul>

            {/* ── Barre de recherche + bouton filtres ── */}
            <div className="flex items-center gap-2 flex-1 max-w-md ml-auto">
                <div className="relative flex-1">
                {/* Icône loupe */}
                <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint pointer-events-none"
                    aria-hidden="true"
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    </svg>
                </span>
                <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher une œuvre..."
                    className="w-full bg-bg-card border border-border-base rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary placeholder-text-faint focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                    aria-label="Rechercher une œuvre"
                />
                </div>

                {/* Bouton filtres */}
                <button
                onClick={() => setFiltersOpen(true)}
                className="shrink-0 p-2 rounded-lg border border-border-base text-text-muted hover:text-violet-400 hover:border-violet-500 bg-bg-card transition-colors"
                aria-label="Ouvrir les filtres de recherche"
                aria-expanded={filtersOpen}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                    <line x1="11" y1="18" x2="13" y2="18" />
                </svg>
                </button>
            </div>

            {/* Bouton thème clair/sombre */}
            <ThemeToggle />

            {/* ── Bouton connexion (desktop) ── */}
            <Link
                href="/login"
                className="hidden md:inline-flex items-center gap-2 shrink-0 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-text-primary text-sm font-medium transition-colors"
            >
                Se connecter
            </Link>

            {/* ── Bouton hamburger (mobile) ── */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden shrink-0 p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
            >
                {menuOpen ? (
                // Icône ✕
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                ) : (
                // Icône hamburger
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
                )}
            </button>
            </nav>

            {/* ── Menu mobile ── */}
            {menuOpen && (
            <div
                id="mobile-menu"
                className="md:hidden border-t border-border-base bg-bg-nav px-4 py-3 flex flex-col gap-1"
                role="navigation"
                aria-label="Menu mobile"
            >
                {NAV_LINKS.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === href
                        ? "text-violet-400 bg-violet-950"
                        : "text-text-muted hover:text-text-primary hover:bg-bg-card"
                    }`}
                    aria-current={pathname === href ? "page" : undefined}
                >
                    {label}
                </Link>
                ))}

                {/* Connexion dans le menu mobile */}
                <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-3 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-text-primary text-sm font-medium text-center transition-colors"
                >
                Se connecter
                </Link>
            </div>
            )}
        </header>

        {/* ── Panneau filtres (drawer) ── */}
        <SearchFilters open={filtersOpen} onClose={() => setFiltersOpen(false)} />
        </>
    );
}