'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Work, Chapter } from '@/data/reader-data';

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
  const currentIndex = currentChapter
    ? chapters.findIndex((chapter) => chapter.id === currentChapter.id)
    : -1;

  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex >= 0 && currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  const handleChangeChapter = (value: string) => {
    router.push(`/oeuvre/${work.slug}/chapitre/${value}`);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 md:px-6">
        <header className="sticky top-0 z-20 rounded-2xl border border-white/10 bg-neutral-900/90 p-4 backdrop-blur">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60">Lecture webtoon</p>
              <h1 className="text-2xl font-semibold">{work.title}</h1>
              <p className="text-sm text-white/70">
                {currentChapter
                  ? `Chapitre ${currentChapter.number} — ${currentChapter.title}`
                  : `Chapitre ${requestedChapter} introuvable`}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-3">
                <Link
                  href={
                    previousChapter
                      ? `/oeuvre/${work.slug}/chapitre/${previousChapter.number}`
                      : '#'
                  }
                  aria-disabled={!previousChapter}
                  className={`inline-flex min-h-11 items-center justify-center rounded-xl px-4 text-sm font-medium transition ${
                    previousChapter
                      ? 'bg-white text-neutral-950 hover:bg-white/90'
                      : 'cursor-not-allowed bg-white/10 text-white/40'
                  }`}
                >
                  Chapitre précédent
                </Link>

                <Link
                  href={
                    nextChapter
                      ? `/oeuvre/${work.slug}/chapitre/${nextChapter.number}`
                      : '#'
                  }
                  aria-disabled={!nextChapter}
                  className={`inline-flex min-h-11 items-center justify-center rounded-xl px-4 text-sm font-medium transition ${
                    nextChapter
                      ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                      : 'cursor-not-allowed bg-white/10 text-white/40'
                  }`}
                >
                  Chapitre suivant
                </Link>
              </div>

              <label className="flex min-w-[220px] flex-col gap-2 text-sm">
                <span className="text-white/70">Aller à un chapitre</span>
                <select
                  defaultValue={currentChapter?.number ?? ''}
                  onChange={(e) => handleChangeChapter(e.target.value)}
                  className="min-h-11 rounded-xl border border-white/10 bg-neutral-800 px-3 outline-none transition focus:border-indigo-400"
                >
                  {!currentChapter && (
                    <option value="" disabled>
                      Sélectionner un chapitre
                    </option>
                  )}

                  {chapters.map((chapter) => (
                    <option key={chapter.id} value={chapter.number}>
                      Chapitre {chapter.number} — {chapter.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {!currentChapter && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                Le chapitre demandé n&apos;existe pas dans les données mock.
                Utilise la liste déroulante pour ouvrir un chapitre disponible.
              </div>
            )}
          </div>
        </header>

        {currentChapter ? (
          <section className="flex flex-col items-center gap-4">
            {currentChapter.images.map((image, index) => (
              <figure
                key={image.id}
                className="w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="block h-auto w-full object-cover"
                />
              </figure>
            ))}
          </section>
        ) : (
          <section className="rounded-2xl border border-dashed border-white/10 bg-neutral-900 px-6 py-14 text-center text-white/70">
            Aucun contenu à afficher pour ce chapitre.
          </section>
        )}
      </div>
    </main>
  );
}