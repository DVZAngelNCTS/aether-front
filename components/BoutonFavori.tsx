"use client";

import { useState } from "react";

interface BoutonFavoriProps {
  oeuvreId: number;
  initialFavori?: boolean;
}

export default function BoutonFavori({ oeuvreId, initialFavori = false }: BoutonFavoriProps) {
  const [favori, setFavori] = useState(initialFavori);
  const [loading, setLoading] = useState(false);

  async function toggleFavori() {
    setLoading(true);
    try {
      // TODO: remplacer par un appel API
      // await fetch(`/api/utilisateur/favoris/${oeuvreId}`, { method: favori ? "DELETE" : "POST" });
      setFavori((f) => !f);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={toggleFavori}
      disabled={loading}
      aria-label={favori ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={favori}
      className={`
        flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium text-sm transition-all duration-200
        disabled:opacity-50
        ${
          favori
            ? "bg-violet-600 border-violet-600 text-white hover:bg-violet-700 hover:border-violet-700"
            : "bg-bg-card border-border-base text-text-muted hover:border-violet-500 hover:text-violet-400"
        }
      `}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={favori ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {favori ? "Dans vos favoris" : "Ajouter aux favoris"}
    </button>
  );
}