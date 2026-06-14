"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// ── Données de filtres ──────────────────────────────────────────
const TYPES    = ["Manga", "Manhwa", "Webtoon"];
const STATUTS  = ["En cours", "Terminé", "En pause"];
const GENRES   = [
  "Action", "Aventure", "Comédie", "Drame", "Fantasy",
  "Horreur", "Mystère", "Manhwace", "Sci-Fi", "Seinen",
  "Shonen", "Shojo", "Slice of Life", "Surnaturel", "Thriller",
  "Isekai", "Martial Arts", "Psychologique", "Sports", "Historique",
];
const TRIS = [
  { value: "recent",    label: "Plus récents"       },
  { value: "az",        label: "Titre (A → Z)"      },
  { value: "note",      label: "Mieux notés"         },
  { value: "populaire", label: "Plus populaires"     },
  { value: "chapitres", label: "Plus de chapitres"   },
];

// ── Types ───────────────────────────────────────────────────────
interface Filtres {
  q:       string;
  types:   string[];
  statuts: string[];
  genres:  string[];
  tri:     string;
}

const FILTRES_VIDES: Filtres = {
  q: "", types: [], statuts: [], genres: [], tri: "recent",
};

// ── Composant principal ─────────────────────────────────────────
export default function FiltresCatalogue() {
  const router       = useRouter();
  const searchParams = useSearchParams();

  const [filtres, setFiltres] = useState<Filtres>({
    q:       searchParams.get("q")      ?? "",
    types:   searchParams.getAll("type"),
    statuts: searchParams.getAll("statut"),
    genres:  searchParams.getAll("genre"),
    tri:     searchParams.get("tri")    ?? "recent",
  });

  const [genresOuverts, setGenresOuverts] = useState(false);

  // Nombre de filtres actifs (hors recherche texte et tri)
  const nbFiltresActifs =
    filtres.types.length + filtres.statuts.length + filtres.genres.length;

  // Toggle une valeur dans un tableau
  const toggle = (
    key: "types" | "statuts" | "genres",
    valeur: string
  ) => {
    setFiltres((prev) => ({
      ...prev,
      [key]: prev[key].includes(valeur)
        ? prev[key].filter((v) => v !== valeur)
        : [...prev[key], valeur],
    }));
  };

  // Appliquer les filtres → met à jour l'URL
  const appliquer = () => {
    const params = new URLSearchParams();
    if (filtres.q)       params.set("q",    filtres.q);
    if (filtres.tri)     params.set("tri",  filtres.tri);
    filtres.types.forEach((t)   => params.append("type",   t));
    filtres.statuts.forEach((s) => params.append("statut", s));
    filtres.genres.forEach((g)  => params.append("genre",  g));
    router.push(`/catalogue?${params.toString()}`);
  };

  // Réinitialiser tout
  const reinitialiser = () => {
    setFiltres(FILTRES_VIDES);
    router.push("/catalogue");
  };

  return (
    <div className="w-full bg-bg-card border border-border-base rounded-2xl p-5 flex flex-col gap-5">

      {/* ── Ligne 1 : Recherche + Tri ── */}
      <div className="flex flex-col sm:flex-row gap-3">

        {/* Barre de recherche */}
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint pointer-events-none">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </span>
          <input
            type="search"
            value={filtres.q}
            onChange={(e) => setFiltres((p) => ({ ...p, q: e.target.value }))}
            onKeyDown={(e) => e.key === "Enter" && appliquer()}
            placeholder="Rechercher une œuvre, un auteur…"
            className="w-full bg-bg-input border border-border-base rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder-text-faint focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            aria-label="Rechercher dans le catalogue"
          />
        </div>

        {/* Tri */}
        <div className="relative shrink-0">
          <select
            value={filtres.tri}
            onChange={(e) => setFiltres((p) => ({ ...p, tri: e.target.value }))}
            className="appearance-none w-full sm:w-48 bg-bg-input border border-border-base rounded-lg px-4 py-2.5 pr-9 text-sm text-text-primary focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
            aria-label="Trier les résultats"
          >
            {TRIS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          {/* Flèche custom */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-faint pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </span>
        </div>
      </div>

      {/* ── Ligne 2 : Types ── */}
      <div className="flex flex-col gap-2">
        <p className="text-text-faint text-xs font-semibold uppercase tracking-widest">Type</p>
        <div className="flex flex-wrap gap-2">
          {TYPES.map((type) => (
            <ChipFiltre
              key={type}
              label={type}
              actif={filtres.types.includes(type)}
              onClick={() => toggle("types", type)}
            />
          ))}
        </div>
      </div>

      {/* ── Ligne 3 : Statuts ── */}
      <div className="flex flex-col gap-2">
        <p className="text-text-faint text-xs font-semibold uppercase tracking-widest">Statut</p>
        <div className="flex flex-wrap gap-2">
          {STATUTS.map((statut) => (
            <ChipFiltre
              key={statut}
              label={statut}
              actif={filtres.statuts.includes(statut)}
              onClick={() => toggle("statuts", statut)}
            />
          ))}
        </div>
      </div>

      {/* ── Ligne 4 : Genres (collapsible) ── */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setGenresOuverts((o) => !o)}
          className="flex items-center gap-2 text-text-faint text-xs font-semibold uppercase tracking-widest hover:text-text-primary transition-colors w-fit"
          aria-expanded={genresOuverts}
        >
          <span>Genres</span>
          {nbFiltresActifs > 0 && filtres.genres.length > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-violet-600 text-white text-xs font-bold leading-none">
              {filtres.genres.length}
            </span>
          )}
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            className={`transition-transform duration-200 ${genresOuverts ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        {genresOuverts && (
          <div className="flex flex-wrap gap-2">
            {GENRES.map((genre) => (
              <ChipFiltre
                key={genre}
                label={genre}
                actif={filtres.genres.includes(genre)}
                onClick={() => toggle("genres", genre)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Ligne 5 : Actions ── */}
      <div className="flex items-center justify-between pt-1 border-t border-border-base">

        {/* Compteur de filtres actifs */}
        <span className="text-text-faint text-xs">
          {nbFiltresActifs > 0
            ? <span><span className="text-violet-400 font-semibold">{nbFiltresActifs}</span> filtre{nbFiltresActifs > 1 ? "s" : ""} actif{nbFiltresActifs > 1 ? "s" : ""}</span>
            : "Aucun filtre actif"
          }
        </span>

        <div className="flex gap-2">
          {/* Réinitialiser */}
          {nbFiltresActifs > 0 && (
            <button
              onClick={reinitialiser}
              className="px-3 py-1.5 rounded-lg text-sm text-text-muted hover:text-text-primary border border-border-base hover:border-violet-500 transition-colors"
            >
              Réinitialiser
            </button>
          )}

          {/* Appliquer */}
          <button
            onClick={appliquer}
            className="px-4 py-1.5 rounded-lg text-sm bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Chip réutilisable ───────────────────────────────────────────
function ChipFiltre({
  label, actif, onClick,
}: {
  label: string;
  actif: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
        actif
          ? "bg-violet-600 border-violet-600 text-white font-medium"
          : "bg-bg-base border-border-base text-text-muted hover:border-violet-500 hover:text-violet-400"
      }`}
      aria-pressed={actif}
    >
      {label}
    </button>
  );
}