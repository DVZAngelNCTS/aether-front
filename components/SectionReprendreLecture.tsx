"use client";

import Link from "next/link";
import { LECTURES_EN_COURS, type LectureEnCours } from "@/data/lectures";

import CarouselHorizontal from "./CarouselHorizontal";

export default function SectionReprendreLecture() {

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" aria-label="Reprendre votre lecture">

      {/* ── En-tête ── */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-text-primary text-2xl font-bold">
          Reprendre votre <span className="text-violet-400">lecture</span>
        </h2>
        <Link
          href="/mes-lectures"
          className="text-sm text-text-muted hover:text-violet-400 transition-colors"
        >
          Voir tout →
        </Link>
      </div>

      {/* ── Wrapper positionné pour les flèches absolues ── */}
      <CarouselHorizontal>
        {LECTURES_EN_COURS.map((lecture) => (
          <div key={lecture.id} data-card className="flex-none w-36 sm:w-40 snap-start" role="listitem">
            <CarteLecture lecture={lecture} />
          </div>
        ))}
      </CarouselHorizontal>
    </section>
  );
}

// ── Flèche de navigation ────────────────────────────────────────────────────


// ── Carte lecture ───────────────────────────────────────────────────────────

function CarteLecture({ lecture }: { lecture: LectureEnCours }) {
  const progression = Math.min(
    Math.round((lecture.dernierChapitreLu / lecture.dernierChapitreDispo) * 100),
    100
  );
  const aJour = lecture.dernierChapitreLu >= lecture.dernierChapitreDispo;

  return (
    <article
      aria-label={`${lecture.titre} — chapitre ${lecture.dernierChapitreLu} sur ${lecture.dernierChapitreDispo}`}
      className="group flex flex-col rounded-xl overflow-hidden border border-border-base bg-bg-card hover:border-violet-500 hover:bg-bg-card transition-all duration-200 h-full"
    >
      {/* Couverture */}
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={lecture.couverture}
          alt={`Couverture de ${lecture.titre}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-semibold ${
          aJour ? "bg-green-700 text-text-primary" : "bg-violet-600 text-text-primary"
        }`}>
          {aJour ? "À jour" : `+${lecture.dernierChapitreDispo - lecture.dernierChapitreLu}`}
        </span>
      </div>

      {/* Infos */}
      <div className="flex flex-col gap-2 p-3 flex-1">
        <h3 className="text-text-primary text-xs font-semibold line-clamp-1 group-hover:text-violet-300 transition-colors">
          {lecture.titre}
        </h3>

        <div className="flex flex-col gap-0.5">
          <p className="text-text-muted text-xs">
            Ch. <span className="text-text-primary">{lecture.dernierChapitreLu}</span>
            <span className="text-text-faint"> / {lecture.dernierChapitreDispo}</span>
          </p>

          {/* Barre de progression */}
          <div
            className="w-full h-1.5 bg-border-base rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={progression}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progression : ${progression}%`}
          >
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                aJour ? "bg-green-500" : "bg-violet-500"
              }`}
              style={{ width: `${progression}%` }}
            />
          </div>
          <p className="text-text-faint text-xs">{progression}%</p>
        </div>

        <Link
          href={`/oeuvre/${lecture.slug}/chapitre/${lecture.dernierChapitreLu}`}
          className="mt-auto text-center py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-text-primary text-xs font-semibold transition-colors"
        >
          {aJour ? "Relire" : "Continuer"}
        </Link>
      </div>
    </article>
  );
}