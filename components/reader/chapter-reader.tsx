"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Work, Chapter } from "@/data/reader-data";

type ChapterReaderProps = {
  work: Work;
  currentChapter: Chapter | null;
  requestedChapter: number;
};

export function ChapterReader({
  work,
  currentChapter,
  requestedChapter,
}: ChapterReaderProps) {
  const router = useRouter();
  const chapters = work.chapters;

  const fallbackChapter = chapters[0] ?? null;

  const effectiveChapter = currentChapter ?? fallbackChapter;

  const currentIndex = effectiveChapter
    ? chapters.findIndex((chapter) => chapter.id === effectiveChapter.id)
    : -1;

  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex >= 0 && currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  const [selectedChapter, setSelectedChapter] = useState<string>(
    effectiveChapter ? String(effectiveChapter.number) : ""
  );

  const chapterLabel = useMemo(() => {
    if (!effectiveChapter) return "Chapitre introuvable";
    return `Chapitre ${effectiveChapter.number} — ${effectiveChapter.title}`;
  }, [effectiveChapter]);

  function goToChapter(chapterNumber: string) {
    if (!chapterNumber) return;
    router.push(`/oeuvre/${work.slug}/chapitre/${chapterNumber}`);
  }

  return (
    <main className="min-h-screen bg-bg-base text-text-primary">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-4 md:px-6 md:py-6">
        <header className="rounded-2xl border border-border-base bg-bg-card p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <h1 className="mt-1 text-2xl font-bold md:text-3xl">
                  {work.title}
                </h1>
                <p className="mt-2 text-sm text-text-muted">{chapterLabel}</p>
              </div>

              <Link
                href={`/oeuvre/${work.slug}`}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border-base bg-bg-base px-4 text-sm font-medium text-text-muted transition hover:border-violet-500 hover:text-violet-400"
              >
                Retour à l’œuvre
              </Link>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <label className="flex min-w-0 flex-1 flex-col gap-2 text-sm">
                <span className="font-medium text-text-muted">
                  Aller à un chapitre
                </span>
                <select
                  value={selectedChapter}
                  onChange={(e) => {
                    setSelectedChapter(e.target.value);
                    goToChapter(e.target.value);
                  }}
                  className="min-h-11 rounded-xl border border-border-base bg-bg-input px-3 text-sm outline-none transition focus:border-violet-500"
                >
                  {!effectiveChapter && (
                    <option value="">Sélectionner un chapitre</option>
                  )}

                  {chapters.map((chapter) => (
                    <option key={chapter.id} value={chapter.number}>
                      Chapitre {chapter.number} — {chapter.title}
                    </option>
                  ))}
                </select>
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                {previousChapter ? (
                  <Link
                    href={`/oeuvre/${work.slug}/chapitre/${previousChapter.number}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border-base bg-bg-card px-4 text-sm font-medium text-text-primary transition hover:border-violet-500 hover:text-violet-400"
                  >
                    Chapitre précédent
                  </Link>
                ) : (
                  <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border-base bg-bg-card px-4 text-sm font-medium text-text-faint">
                    Chapitre précédent
                  </span>
                )}

                {nextChapter ? (
                  <Link
                    href={`/oeuvre/${work.slug}/chapitre/${nextChapter.number}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-violet-600 px-4 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    Chapitre suivant
                  </Link>
                ) : (
                  <span className="inline-flex min-h-11 items-center justify-center rounded-xl bg-bg-input px-4 text-sm font-medium text-text-faint">
                    Chapitre suivant
                  </span>
                )}
              </div>
            </div>

            {!currentChapter && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                Le chapitre demandé n’existe pas dans les données mock.
                Sélectionne un chapitre valide dans la liste pour continuer.
              </div>
            )}
          </div>
        </header>

        {effectiveChapter ? (
          <section
            aria-label="Pages du chapitre"
            className="flex flex-col items-center gap-3"
          >
            {effectiveChapter.images.map((image, index) => (
              <figure
                key={image.id}
                className="w-full overflow-hidden rounded-2xl border border-border-base bg-bg-card shadow-sm"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="block h-auto w-full object-cover"
                />
              </figure>
            ))}
          </section>
        ) : (
          <section className="rounded-2xl border border-dashed border-border-base bg-bg-card px-6 py-14 text-center text-text-muted">
            Aucun contenu à afficher pour ce chapitre.
          </section>
        )}

        {effectiveChapter && (
          <nav
            aria-label="Navigation de fin de chapitre"
            className="flex flex-col gap-3 border-t border-border-base pt-2 sm:flex-row sm:justify-between"
          >
            {previousChapter ? (
              <Link
                href={`/oeuvre/${work.slug}/chapitre/${previousChapter.number}`}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border-base bg-bg-card px-4 text-sm font-medium text-text-primary transition hover:border-violet-500 hover:text-violet-400"
              >
                Chapitre précédent
              </Link>
            ) : (
              <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border-base bg-bg-card px-4 text-sm font-medium text-text-faint">
                Début de lecture
              </span>
            )}

            {nextChapter ? (
              <Link
                href={`/oeuvre/${work.slug}/chapitre/${nextChapter.number}`}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-violet-600 px-4 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Passer au chapitre suivant
              </Link>
            ) : (
              <span className="inline-flex min-h-11 items-center justify-center rounded-xl bg-bg-input px-4 text-sm font-medium text-text-faint">
                Dernier chapitre mock
              </span>
            )}
          </nav>
        )}
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Retourner en haut"
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-base bg-bg-card/90 text-text-primary shadow-lg backdrop-blur transition hover:border-violet-500 hover:text-violet-400 hover:bg-bg-card active:scale-95 md:bottom-6 md:right-6"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="M12 19V5" strokeLinecap="round" />
          <path d="M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </main>
  );
}