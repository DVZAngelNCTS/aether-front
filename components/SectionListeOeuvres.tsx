import Link from "next/link";
import CarouselHorizontal from "./CarouselHorizontal";
import CarteOeuvre from "./CarteOeuvre";
import type { Oeuvre } from "@/data/oeuvres";

interface SectionListeOeuvresProps {
  titre: string;         // Titre affiché dans l'en-tête
  titreViolet?: string; // Partie du titre à colorer en violet (optionnelle)
  emoji?: string;        // Emoji décoratif optionnel
  oeuvres: Oeuvre[];     // Données — statiques ou issues de l'API
  lienVoirTout?: string; // Route "Voir tout" optionnelle
}

// Composant générique réutilisable pour toutes les sections de listes d'œuvres
// Utilisation : <SectionListeOeuvres titre="..." oeuvres={data} lienVoirTout="/route" />
export default function SectionListeOeuvres({
  titre,
  titreViolet,
  oeuvres,
  lienVoirTout,
}: SectionListeOeuvresProps) {
  return (
    <section
      className="py-10 px-4 max-w-7xl mx-auto"
      aria-label={titre}
    >
      {/* En-tête */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-text-primary text-2xl font-bold">
            {titreViolet ? (
                <>
                {titre}{" "}
                <span className="text-violet-400">{titreViolet}</span>
                </>
            ) : titre}
        </h2>
        {lienVoirTout && (
          <Link
            href={lienVoirTout}
            className="text-sm text-text-muted hover:text-violet-400 transition-colors"
          >
            Voir tout →
          </Link>
        )}
      </div>

      {/* Carrousel horizontal réutilisable */}
      <CarouselHorizontal>
        {oeuvres.map((oeuvre) => (
          <CarteOeuvre key={oeuvre.id} oeuvre={oeuvre} />
        ))}
      </CarouselHorizontal>
    </section>
  );
}