import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getOeuvreDetailBySlug } from "@/data/oeuvreDetail";
import BoutonFavori from "@/components/BoutonFavori";
import ListeChapitres from "@/components/oeuvre/ListeChapitres";
import SkeletonOeuvreDetail from "@/components/oeuvre/SkeletonOeuvreDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const oeuvre = getOeuvreDetailBySlug(slug);

  return oeuvre
    ? { title: `${oeuvre.titre} | AetherScan`, description: oeuvre.description }
    : { title: "Oeuvre introuvable | AetherScan" };
}

const STATUT_STYLES: Record<string, string> = {
  "En cours": "bg-violet-600 text-white",
  "Terminé": "bg-green-700 text-white",
  "En pause": "bg-yellow-600 text-black",
  "Abandonné": "bg-red-800 text-white",
};

function EtoileNote({ note }: { note: number }) {
  const plein = Math.floor(note);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5" aria-label={`Note : ${note} sur 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < plein ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={i < plein ? "text-violet-400" : "text-text-faint"}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="text-text-primary font-semibold text-sm">{note.toFixed(1)}</span>
    </div>
  );
}

export default async function OeuvreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const oeuvre = getOeuvreDetailBySlug(slug);

  if (!oeuvre) notFound();

  const premierChapitre = oeuvre.listeChapitres.at(-1);
  const dernierChapitre = oeuvre.listeChapitres.at(0);

  return (
    <Suspense fallback={<SkeletonOeuvreDetail />}>
      <main className="min-h-screen bg-bg-base">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <section className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="relative w-48 h-72 rounded-xl overflow-hidden border border-border-base shadow-lg">
                <Image
                  src={oeuvre.couverture}
                  alt={`Couverture de ${oeuvre.titre}`}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-md bg-violet-600 text-white text-xs font-semibold border border-violet-700">
                  {oeuvre.type}
                </span>
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${STATUT_STYLES[oeuvre.statut]}`}>
                  {oeuvre.statut}
                </span>
              </div>

              <h1 className="text-text-primary text-3xl sm:text-4xl font-extrabold leading-tight">
                {oeuvre.titre}
              </h1>

              <div className="flex items-center gap-4 flex-wrap">
                <EtoileNote note={oeuvre.note} />
                <span className="text-text-muted text-sm">
                  <span className="text-text-primary font-semibold">{oeuvre.chapitres}</span> chapitres
                </span>
              </div>

              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                {oeuvre.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-1">
                {premierChapitre && (
                  <Link
                    href={`/oeuvre/${oeuvre.slug}/chapitre/${premierChapitre.numero}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
                  >
                    Lire le 1er chapitre
                  </Link>
                )}

                {dernierChapitre && dernierChapitre.id !== premierChapitre?.id && (
                  <Link
                    href={`/oeuvre/${oeuvre.slug}/chapitre/${dernierChapitre.numero}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-base bg-bg-card hover:border-violet-500 hover:text-violet-400 text-text-muted text-sm font-semibold transition-colors"
                  >
                    Lire le dernier
                  </Link>
                )}

                <BoutonFavori oeuvreId={oeuvre.id} />
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 pt-4 border-t border-border-base">
                <div>
                  <dt className="text-text-faint text-xs font-semibold uppercase tracking-widest mb-0.5">Auteur</dt>
                  <dd className="text-text-primary text-sm font-medium">{oeuvre.auteur}</dd>
                </div>
                <div>
                  <dt className="text-text-faint text-xs font-semibold uppercase tracking-widest mb-0.5">Artiste</dt>
                  <dd className="text-text-primary text-sm font-medium">{oeuvre.artiste}</dd>
                </div>
                <div>
                  <dt className="text-text-faint text-xs font-semibold uppercase tracking-widest mb-0.5">Team de traduction</dt>
                  <dd className="text-text-primary text-sm font-medium">{oeuvre.team}</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="mb-10 flex flex-col gap-4">
            <div>
              <p className="text-text-faint text-xs font-semibold uppercase tracking-widest mb-2">Genres</p>
              <div className="flex flex-wrap gap-2">
                {oeuvre.genres.map((g) => (
                  <Link
                    key={g}
                    href={`/catalogue?genre=${encodeURIComponent(g)}`}
                    className="px-3 py-1 rounded-full border border-border-base bg-bg-card text-text-muted text-sm hover:border-violet-500 hover:text-violet-400 transition-colors"
                  >
                    {g}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-text-faint text-xs font-semibold uppercase tracking-widest mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {oeuvre.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-border-base bg-bg-base text-text-faint text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <ListeChapitres slug={oeuvre.slug} chapitres={oeuvre.listeChapitres} />
        </div>
      </main>
    </Suspense>
  );
}