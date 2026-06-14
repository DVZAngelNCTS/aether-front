"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { CreneauAvecOeuvre } from "@/data/planning";

interface Props {
  heure:   string;
  items:   CreneauAvecOeuvre[];
  onClose: () => void;
  now:     Date;
}

export default function ModalCreneau({ heure, items, onClose }: Props) {
  // Fermeture avec Échap
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-bg-card border border-border-base rounded-2xl w-full max-w-sm max-h-[80vh] flex flex-col shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-base">
          <div>
            <p className="text-text-primary font-semibold">Sorties à {heure}</p>
            <p className="text-text-faint text-xs">{items.length} chapitres</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-bg-base text-text-muted hover:text-text-primary transition-colors" aria-label="Fermer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Liste complète */}
        <div className="overflow-y-auto p-3 flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/oeuvre/${item.slug}`}
              onClick={onClose}
              className="group flex items-center gap-3 p-2.5 rounded-xl bg-bg-base border border-border-base hover:border-violet-500 transition-colors"
            >
              <img
                src={item.couverture}
                alt={item.titre}
                className="w-10 h-14 object-cover rounded-lg flex-shrink-0"
                loading="lazy"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-text-primary text-sm font-bold line-clamp-1 group-hover:text-violet-400 transition-colors">
                  {item.titre}
                </span>
                <span className="text-text-muted text-xs">Chapitre {item.chapitre}</span>
                <span className="text-text-faint text-xs mt-0.5">{item.type}</span>
              </div>
              <svg className="ml-auto flex-shrink-0 text-text-faint group-hover:text-violet-400 transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}