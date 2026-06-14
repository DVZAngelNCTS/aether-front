"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { OEUVRES_POPULAIRES, type Oeuvre, type Statut } from "@/data/oeuvres";

// ── Couleurs des badges de statut
const STATUT_STYLES: Record<Statut, string> = {
  "En cours":  "bg-violet-600 text-text-primary",
  "Terminé":   "bg-green-700 text-text-primary",
  "En pause":  "bg-yellow-600 text-black",
  "Abandonné": "bg-red-800 text-text-primary",
};

export default function CarouselOeuvres() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = OEUVRES_POPULAIRES.length;
  const oeuvre = OEUVRES_POPULAIRES[index];

  // ── Transition fluide : bloque les clics pendant l'animation
  const goTo = useCallback((newIndex: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((newIndex + total) % total);
      setAnimating(false);
    }, 300);
  }, [animating, total]);

  const prev = () => goTo(index - 1);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // ── Autoplay toutes les 6 secondes
  useEffect(() => {
    autoplayRef.current = setTimeout(next, 6000);
    return () => { if (autoplayRef.current) clearTimeout(autoplayRef.current); };
  }, [index, next]);

  // ── Support du swipe tactile mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Œuvres à la une"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Bannière principale ── */}
      <div
        className={`relative w-full h-[420px] sm:h-[500px] lg:h-[560px] transition-opacity duration-300 ${
          animating ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Image de fond */}
        <img
          src={oeuvre.couverture}
          alt={`Bannière de ${oeuvre.titre}`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay dégradé — lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/30" />

        {/* ── Contenu texte ── */}
        <div className="relative h-full flex items-end pb-14 sm:pb-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="max-w-xl flex flex-col gap-3">

            {/* Badges type + statut */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md bg-violet-600 text-white text-xs font-semibold border border-violet-700">
                {oeuvre.type}
              </span>
              <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${STATUT_STYLES[oeuvre.statut]}`}>
                {oeuvre.statut}
              </span>
              <span className="text-text-muted text-xs">
                📖 <span className="text-text-primary">{oeuvre.chapitres}</span> chapitres
              </span>
            </div>

            {/* Titre */}
            <h2 className="text-text-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
              {oeuvre.titre}
            </h2>

            {/* Description */}
            <p className="text-text-muted text-sm sm:text-base leading-relaxed line-clamp-3">
              {oeuvre.description}
            </p>

            {/* Bouton CTA */}
            <div className="mt-1">
              <Link
                href={`/oeuvre/${oeuvre.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-text-primary text-sm font-semibold transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Voir l&apos;œuvre
              </Link>
            </div>
          </div>
        </div>

        {/* ── Boutons Précédent / Suivant ── */}
        <button
          onClick={prev}
          aria-label="Bannière précédente"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-nav/50 border border-border-base text-text-muted hover:text-violet-400 hover:border-violet-500 hover:bg-bg-nav/80 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Bannière suivante"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-nav/50 border border-border-base text-text-muted hover:text-violet-400 hover:border-violet-500 hover:bg-bg-nav/80 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Indicateurs de position (points) ── */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
        role="tablist"
        aria-label="Navigation des bannières"
      >
        {OEUVRES_POPULAIRES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Aller à l'œuvre ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 h-2 bg-violet-400"       // Point actif = allongé violet
                : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}