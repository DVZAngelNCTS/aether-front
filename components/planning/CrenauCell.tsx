"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CreneauAvecOeuvre } from "@/data/planning";
import { getStatutCreneau, formatCountdown, formatHeure } from "@/app/lib/planning";
import ModalCreneau from "./ModalCreneau";

const MAX_VISIBLE = 3;

interface Props {
  heure: string;
  items: CreneauAvecOeuvre[];
}

export default function CrenauCell({ heure, items }: Props) {
  const [modalOuvert, setModalOuvert] = useState(false);
  const [now, setNow] = useState(() => new Date());

  // Mise à jour toutes les 30 secondes pour le countdown
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Statut global du créneau (basé sur le premier item non reporté)
  const statutCreneau = getStatutCreneau(items[0].dateHeure, items[0].statut);
  const estPasse      = statutCreneau === "sorti";
  const estProchain   = !estPasse && (new Date(items[0].dateHeure).getTime() - now.getTime()) < 3 * 3600_000;

  const visibles  = items.slice(0, MAX_VISIBLE);
  const nbCaches  = items.length - MAX_VISIBLE;

  return (
    <div className={`flex flex-col gap-1 transition-opacity ${estPasse ? "opacity-50" : "opacity-100"}`}>
      {/* Heure + statut */}
      <div className="flex items-center gap-1.5">
        <span className="text-text-faint text-xs font-mono">{heure}</span>
        {estPasse && (
          <span className="text-green-500" title="Déjà sorti">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
          </span>
        )}
        {estProchain && !estPasse && (
          <span className="text-xs text-violet-400 font-medium">{formatCountdown(items[0].dateHeure)}</span>
        )}
      </div>

      {/* Œuvres visibles */}
      {visibles.map((item) => {
        const statut = getStatutCreneau(item.dateHeure, item.statut);
        return (
          <CarteCreneauItem key={item.id} item={item} statut={statut} now={now} />
        );
      })}

      {/* Bouton Voir plus */}
      {nbCaches > 0 && (
        <button
          onClick={() => setModalOuvert(true)}
          className="w-full py-1 rounded-lg border border-dashed border-border-base text-text-faint text-xs hover:border-violet-500 hover:text-violet-400 transition-colors"
        >
          +{nbCaches} de plus
        </button>
      )}

      {modalOuvert && (
        <ModalCreneau heure={heure} items={items} onClose={() => setModalOuvert(false)} now={now} />
      )}
    </div>
  );
}

// ── Carte individuelle dans un créneau ──────────────────────────
function CarteCreneauItem({
  item, statut, now,
}: {
  item:   CreneauAvecOeuvre;
  statut: "sorti" | "a-venir" | "reporte";
  now:    Date;
}) {
  const estReporte = statut === "reporte";

  return (
    <Link
      href={`/oeuvre/${item.slug}`}
      className={`group relative flex items-center gap-1.5 p-1.5 rounded-lg border transition-colors ${
        estReporte
          ? "border-yellow-600/40 bg-yellow-950/20 hover:border-yellow-500"
          : "border-border-base bg-bg-base hover:border-violet-500"
      }`}
    >
      <img
        src={item.couverture}
        alt={item.titre}
        className="w-7 h-10 object-cover rounded-md flex-shrink-0"
        loading="lazy"
      />
      <div className="flex flex-col min-w-0">
        <span className="text-text-primary text-xs font-semibold line-clamp-2 leading-snug group-hover:text-violet-400 transition-colors">
          {item.titre}
        </span>
        <span className="text-text-faint text-xs">Ch. {item.chapitre}</span>

        {/* Badge reporté */}
        {estReporte && item.ancienneDateHeure && (
          <span className="text-yellow-500 text-xs font-medium mt-0.5 flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 9v4l2 2"/><circle cx="12" cy="12" r="10"/></svg>
            Reporté · {formatHeure(item.ancienneDateHeure)} → {formatHeure(item.dateHeure)}
          </span>
        )}
      </div>
    </Link>
  );
}