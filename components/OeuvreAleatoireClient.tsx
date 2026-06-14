"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { OEUVRES_POPULAIRES, type Statut } from "@/data/oeuvres";

const POOL = OEUVRES_POPULAIRES;

const STATUT_STYLES: Record<Statut, string> = {
  "En cours":  "bg-violet-600 text-text-primary",
  "Terminé":   "bg-green-700 text-text-primary",
  "En pause":  "bg-yellow-600 text-black",
  "Abandonné": "bg-red-800 text-text-primary",
};

export default function OeuvreAleatoireClient() {
  const [index, setIndex] = useState(
    () => Math.floor(Math.random() * POOL.length)
  );
  const [animating, setAnimating] = useState(false);
  const oeuvre = POOL[index];

  const tirer = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      let next: number;
      do { next = Math.floor(Math.random() * POOL.length); }
      while (next === index && POOL.length > 1);
      setIndex(next);
      setAnimating(false);
    }, 250);
  }, [animating, index]);

  return (
  <>
    {/* En-tête avec bouton — tout dans le même composant client */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-text-primary text-2xl font-bold">
        Découvrir une œuvre <span className="text-violet-400">au hasard</span>
      </h2>
      <button
        onClick={tirer}
        disabled={animating}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-700 text-violet-400 hover:bg-violet-600 hover:text-text-primary hover:border-violet-600 disabled:opacity-50 transition-all text-sm font-medium"
        aria-label="Tirer une nouvelle œuvre au hasard"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <circle cx="8"  cy="8"  r="1.2" fill="currentColor" />
          <circle cx="16" cy="8"  r="1.2" fill="currentColor" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          <circle cx="8"  cy="16" r="1.2" fill="currentColor" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" />
        </svg>
        Nouvelle œuvre
      </button>
    </div>

      <div className={`transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>
        <div className="relative rounded-2xl overflow-hidden border border-border-base bg-bg-card hover:border-violet-500 transition-colors">
          <div className="relative h-64 sm:h-80">
            <Image
              src={oeuvre.couverture}
              alt={`Couverture de ${oeuvre.titre}`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-end p-6 sm:p-10">
              <div className="flex flex-col gap-3 max-w-lg">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md bg-violet-600 text-white text-xs font-semibold border border-violet-700">
                    {oeuvre.type}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${STATUT_STYLES[oeuvre.statut]}`}>
                    {oeuvre.statut}
                  </span>
                  <span className="text-text-muted text-xs">
                    <span className="text-text-primary">{oeuvre.chapitres}</span> chapitres
                  </span>
                </div>
                <h3 className="text-text-primary text-2xl sm:text-3xl font-extrabold leading-tight">
                  {oeuvre.titre}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                  {oeuvre.description}
                </p>
                <Link
                  href={`/oeuvre/${oeuvre.slug}`}
                  className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-text-primary text-sm font-semibold transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Voir l&apos;œuvre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}