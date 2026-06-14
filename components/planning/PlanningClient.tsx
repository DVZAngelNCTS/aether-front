"use client";

import { useMemo, useState } from "react";
import { PLANNING_MOCK }     from "@/data/planningMock";
import { CATALOGUE }         from "@/data/catalogue";
import type { CreneauAvecOeuvre } from "@/data/planning";
import ColonneJour from "./ColonneJour";

const JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

function debutSemaine(date: Date): Date {
  const d = new Date(date);
  const jour = d.getDay();
  const diff = jour === 0 ? -6 : 1 - jour;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDateCourte(date: Date) {
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

function formatSemaine(lundi: Date) {
  const dim = new Date(lundi);
  dim.setDate(lundi.getDate() + 6);
  return `${formatDateCourte(lundi)} – ${formatDateCourte(dim)}`;
}

export default function PlanningClient() {
  const [lundi, setLundi]         = useState(() => debutSemaine(new Date()));
  const [filtresTypes, setFiltres] = useState<string[]>([]);

  const tousCreneaux: CreneauAvecOeuvre[] = useMemo(() =>
    PLANNING_MOCK.flatMap((c) => {
      const oeuvre = CATALOGUE.find((o) => o.id === c.oeuvreId);
      if (!oeuvre) return [];
      return [{ ...c, titre: oeuvre.titre, slug: oeuvre.slug, couverture: oeuvre.couverture, type: oeuvre.type }];
    }), []
  );

  const TYPES = useMemo(() =>
    [...new Set(tousCreneaux.map((c) => c.type))].sort(),
    [tousCreneaux]
  );

  const jours = useMemo(() =>
    Array.from({ length: 7 }, (_, i) => {
      const d = new Date(lundi);
      d.setDate(lundi.getDate() + i);
      return d;
    }), [lundi]
  );

  // Créneaux filtrés par type
  const creneauxFiltres = useMemo(() =>
    filtresTypes.length === 0
      ? tousCreneaux
      : tousCreneaux.filter((c) => filtresTypes.includes(c.type)),
    [tousCreneaux, filtresTypes]
  );

  // Créneaux de la semaine affichée
  const creneauxSemaine = useMemo(() => {
    const debut = lundi.getTime();
    const fin   = debut + 7 * 86400000;
    return creneauxFiltres.filter((c) => {
      const t = new Date(c.dateHeure).getTime();
      return t >= debut && t < fin;
    });
  }, [creneauxFiltres, lundi]);

  const toggleType = (type: string) =>
    setFiltres((f) => f.includes(type) ? f.filter((t) => t !== type) : [...f, type]);

  const semainePrecedente = () => setLundi((l) => { const d = new Date(l); d.setDate(d.getDate() - 7); return d; });
  const semaineSuivante   = () => setLundi((l) => { const d = new Date(l); d.setDate(d.getDate() + 7); return d; });
  const semaineActuelle   = () => setLundi(debutSemaine(new Date()));
  const isAujourdHui      = (d: Date) => d.toDateString() === new Date().toDateString();

  return (
    <div>
      {/* Navigation semaine */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <button onClick={semainePrecedente} className="p-2 rounded-lg border border-border-base bg-bg-card hover:border-violet-500 text-text-muted hover:text-violet-400 transition-colors" aria-label="Semaine précédente">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span className="text-text-primary font-semibold text-sm min-w-[160px] text-center">{formatSemaine(lundi)}</span>
          <button onClick={semaineSuivante} className="p-2 rounded-lg border border-border-base bg-bg-card hover:border-violet-500 text-text-muted hover:text-violet-400 transition-colors" aria-label="Semaine suivante">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <button onClick={semaineActuelle} className="px-3 py-1.5 rounded-md text-xs border border-border-base bg-bg-card hover:border-violet-500 text-text-muted hover:text-violet-400 transition-colors">
            Aujourd&apos;hui
          </button>
        </div>

        {/* Compteur semaine */}
        <span className="text-text-faint text-xs">
          <span className="text-text-primary font-semibold">{creneauxSemaine.length}</span> sortie{creneauxSemaine.length > 1 ? "s" : ""} cette semaine
        </span>
      </div>

      {/* Filtres par type */}
      <div className="flex flex-wrap gap-2 mb-6">
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => toggleType(type)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              filtresTypes.includes(type)
                ? "bg-violet-600 border-violet-600 text-white"
                : "border-border-base bg-bg-card text-text-muted hover:border-violet-500 hover:text-violet-400"
            }`}
          >
            {type}
          </button>
        ))}
        {filtresTypes.length > 0 && (
          <button onClick={() => setFiltres([])} className="px-3 py-1 rounded-full text-xs border border-dashed border-border-base text-text-faint hover:text-text-muted transition-colors">
            ✕ Réinitialiser
          </button>
        )}
      </div>

      {/* État vide de la semaine */}
      {creneauxSemaine.length === 0 ? (
        <EtatVideSemaine filtre={filtresTypes.length > 0} />
      ) : (
        <div className="grid grid-cols-7 gap-2">
          {jours.map((jour, i) => (
            <ColonneJour
              key={jour.toISOString()}
              label={JOURS[i]}
              date={jour}
              estAujourdHui={isAujourdHui(jour)}
              creneaux={creneauxFiltres.filter((c) => new Date(c.dateHeure).toDateString() === jour.toDateString())}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EtatVideSemaine({ filtre }: { filtre: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center border border-dashed border-border-base rounded-2xl">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-faint">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round"/>
      </svg>
      <div>
        <p className="text-text-primary font-semibold text-lg">Aucune sortie cette semaine</p>
        <p className="text-text-muted text-sm mt-1">
          {filtre
            ? "Aucune sortie ne correspond aux types sélectionnés."
            : "Il n'y a pas de chapitre prévu pour cette période."}
        </p>
      </div>
    </div>
  );
}