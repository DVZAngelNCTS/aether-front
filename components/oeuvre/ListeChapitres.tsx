"use client";

import { useState } from "react";
import Link from "next/link";
import type { Chapitre } from "@/data/oeuvreDetail";

interface ListeChapitresProps {
  slug: string;
  chapitres: Chapitre[];
}

const PAGE_SIZE = 50;

export default function ListeChapitres({ slug, chapitres }: ListeChapitresProps) {
  const [ordre, setOrdre] = useState<"desc" | "asc">("desc");
  const [page, setPage] = useState(0);

  const sorted = ordre === "desc" ? [...chapitres] : [...chapitres].reverse();
  const visibles = sorted.slice(0, PAGE_SIZE + page * PAGE_SIZE);
  const aEncore = visibles.length < sorted.length;

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <section aria-label="Liste des chapitres">
      {/* En-tête */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-text-primary text-xl font-bold">
          Chapitres{" "}
          <span className="text-text-muted text-sm font-normal">
            ({chapitres.length})
          </span>
        </h2>

        {/* Toggle ordre */}
        <div className="flex items-center gap-1 bg-bg-card border border-border-base rounded-lg p-1">
          <button
            onClick={() => { setOrdre("desc"); setPage(0); }}
            aria-pressed={ordre === "desc"}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              ordre === "desc"
                ? "bg-violet-600 text-white"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            Plus récents
          </button>
          <button
            onClick={() => { setOrdre("asc"); setPage(0); }}
            aria-pressed={ordre === "asc"}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              ordre === "asc"
                ? "bg-violet-600 text-white"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            Plus anciens
          </button>
        </div>
      </div>

      {/* Liste */}
      <ul className="flex flex-col gap-1" role="list">
        {visibles.map((ch) => (
          <li key={ch.id}>
            <Link
              href={`/oeuvre/${slug}/chapitre/${ch.numero}`}
              className="group flex items-center justify-between px-4 py-3 rounded-xl border border-border-base bg-bg-card hover:border-violet-500 hover:bg-bg-base transition-all duration-150"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-text-faint text-xs font-mono w-10 shrink-0">
                  {ch.numero}
                </span>
                <span className="text-text-primary text-sm font-medium group-hover:text-violet-400 transition-colors truncate">
                  {ch.titre}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <span className="text-text-faint text-xs hidden sm:block">
                  {formatDate(ch.datePublication)}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-text-faint group-hover:text-violet-400 transition-colors"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Afficher plus */}
      {aEncore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border-base bg-bg-card hover:border-violet-500 hover:text-violet-400 text-text-muted text-sm font-medium transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Afficher {Math.min(PAGE_SIZE, sorted.length - visibles.length)} chapitres de plus
          </button>
        </div>
      )}
    </section>
  );
}