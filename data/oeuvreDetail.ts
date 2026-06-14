import type { Oeuvre } from "./oeuvres";

export interface Chapitre {
  id: number;
  numero: number;
  titre: string;
  datePublication: string;
}

export interface OeuvreDetail extends Oeuvre {
  note: number;
  genres: string[];
  tags: string[];
  auteur: string;
  artiste: string;
  team: string;
  listeChapitres: Chapitre[];
}

export const MOCK_OEUVRE_DETAIL: OeuvreDetail = {
  id: 1,
  slug: "shadow-realm",
  titre: "Shadow Realm",
  description:
    "Un jeune guerrier découvre qu'il est le seul capable de fermer les portes entre les mondes des ombres et des vivants. Chaque portail refermé le rapproche d'une vérité que les dieux ont tenté d'effacer depuis des millénaires.",
  type: "Manhwa",
  chapitres: 148,
  statut: "En cours",
  couverture: "https://picsum.photos/seed/shadow/300/420",
  note: 4.8,
  genres: ["Action", "Fantasy", "Surnaturel"],
  tags: ["portails", "op-mc", "monde sombre", "dieux", "combat"],
  auteur: "Kim Seon-Ho",
  artiste: "Park Ji-Yoon",
  team: "AetherScan Team",
  listeChapitres: Array.from({ length: 148 }, (_, i) => ({
    id: 148 - i,
    numero: 148 - i,
    titre:
      i === 0
        ? "La Porte Finale"
        : i === 147
          ? "Le Guerrier Oublié"
          : `Chapitre ${148 - i}`,
    datePublication: new Date(
      Date.now() - i * 7 * 24 * 60 * 60 * 1000
    ).toISOString(),
  })),
};

export function getOeuvreDetailBySlug(slug: string): OeuvreDetail | null {
  if (slug === MOCK_OEUVRE_DETAIL.slug) return MOCK_OEUVRE_DETAIL;
  return null;
}