"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CATALOGUE } from "@/data/catalogue";
import type { Oeuvre, Statut } from "@/data/oeuvres";

const STATUT_STYLES: Record<Statut, string> = {
  "En cours":  "bg-violet-600 text-white",
  "Terminé":   "bg-green-700 text-white",
  "En pause":  "bg-yellow-600 text-black",
  "Abandonné": "bg-red-800 text-white",
};

const PAR_PAGE  = 50;
const INCREMENT = 25;

export default function GrilleResultats() {
  const searchParams = useSearchParams();

  const q       = searchParams.get("q")?.toLowerCase() ?? "";
  const tri     = searchParams.get("tri") ?? "recent";
  const types   = searchParams.getAll("type");
  const statuts = searchParams.getAll("statut");
  const genres  = searchParams.getAll("genre");

  const typesKey   = types.join(",");
  const statutsKey = statuts.join(",");
  const genresKey  = genres.join(",");

  const filtresKey = `${q}|${tri}|${typesKey}|${statutsKey}|${genresKey}`;
  const [{ key: lastKey, pages }, setPagination] = useState({ key: filtresKey, pages: 0 });

  const pagesEffectives = lastKey === filtresKey ? pages : 0;
  const limite = PAR_PAGE + pagesEffectives * INCREMENT;

  if (lastKey !== filtresKey) {
    setPagination({ key: filtresKey, pages: 0 });
  }

  const tousResultats = useMemo(() => {
    let liste = [...CATALOGUE];

    if (q) liste = liste.filter((o) =>
      o.titre.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q)
    );
    if (types.length)   liste = liste.filter((o) => types.includes(o.type));
    if (statuts.length) liste = liste.filter((o) => statuts.includes(o.statut));

    switch (tri) {
      case "az":        liste.sort((a, b) => a.titre.localeCompare(b.titre, "fr")); break;
      case "chapitres": liste.sort((a, b) => b.chapitres - a.chapitres);            break;
      case "populaire": liste.sort((a, b) => b.id - a.id);                          break;
      default:          liste.sort((a, b) => a.id - b.id);
    }

    return liste;
  }, [q, tri, types, statuts, typesKey, statutsKey, genresKey]);

  const resultatsVisibles = tousResultats.slice(0, limite);
  const aEncore    = limite < tousResultats.length;
  const resteCount = tousResultats.length - limite;

  return (
    <div>
      {/* Compteur */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-text-muted text-sm">
          <span className="text-text-primary font-semibold">{resultatsVisibles.length}</span>
          {" "}/ {tousResultats.length} œuvre{tousResultats.length !== 1 ? "s" : ""}
        </p>
      </div>

      {tousResultats.length === 0 ? (
        <EtatVide />
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {resultatsVisibles.map((oeuvre) => (
              <CarteGrille key={oeuvre.id} oeuvre={oeuvre} />
            ))}
          </div>

          {/* Bouton Afficher plus */}
          {aEncore && (
            <div className="flex flex-col items-center gap-3 mt-10">
              <div className="w-full max-w-xs h-1 bg-border-base rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500 rounded-full transition-all duration-500"
                  style={{ width: `${(resultatsVisibles.length / tousResultats.length) * 100}%` }}
                />
              </div>
              <p className="text-text-faint text-xs">
                {resultatsVisibles.length} sur {tousResultats.length} — encore{" "}
                <span className="text-text-muted font-medium">{resteCount}</span>{" "}
                œuvre{resteCount > 1 ? "s" : ""}
              </p>
              <button
                onClick={() => setPagination({ key: filtresKey, pages: pagesEffectives + 1 })}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border-base bg-bg-card hover:border-violet-500 hover:text-violet-400 text-text-muted text-sm font-medium transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
                Afficher {Math.min(INCREMENT, resteCount)} de plus
              </button>
            </div>
          )}

          {!aEncore && tousResultats.length > PAR_PAGE && (
            <p className="text-center text-text-faint text-sm mt-10">
              ✓ Toutes les œuvres sont affichées
            </p>
          )}
        </>
      )}
    </div>
  );
}

// ── Carte de la grille ──────────────────────────────────────────
function CarteGrille({ oeuvre }: { oeuvre: Oeuvre }) {
  return (
    <Link
      href={`/oeuvre/${oeuvre.slug}`}
      className="group flex flex-col rounded-xl overflow-hidden border border-border-base bg-bg-card hover:border-violet-500 hover:scale-[1.02] transition-all duration-200"
      aria-label={`${oeuvre.titre} — ${oeuvre.type}, ${oeuvre.chapitres} chapitres, ${oeuvre.statut}`}
    >
      {/* Couverture */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={oeuvre.couverture}
          alt={`Couverture de ${oeuvre.titre}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

        {/* Badge statut */}
        <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-semibold ${STATUT_STYLES[oeuvre.statut]}`}>
          {oeuvre.statut}
        </span>

        {/* Badge type */}
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-violet-600 text-white text-xs font-semibold">
          {oeuvre.type}
        </span>
      </div>

      {/* Infos */}
      <div className="p-2.5 flex flex-col gap-1">
        <h3 className="text-text-primary text-xs font-bold line-clamp-2 group-hover:text-violet-400 transition-colors leading-snug">
          {oeuvre.titre}
        </h3>
        <p className="text-text-faint text-xs">
          {oeuvre.chapitres} ch.
        </p>
      </div>
    </Link>
  );
}

// ── État vide ───────────────────────────────────────────────────
function EtatVide() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-faint">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        <path d="M8 11h6M11 8v6" strokeLinecap="round"/>
      </svg>
      <div>
        <p className="text-text-primary font-semibold text-lg">Aucun résultat</p>
        <p className="text-text-muted text-sm mt-1">Essayez de modifier vos filtres ou votre recherche.</p>
      </div>
    </div>
  );
}