export type Statut = "En cours" | "Terminé" | "En pause" | "Abandonné";
export type TypeOeuvre = "Manga" | "Manhwa" | "Manhwa" | "Webtoon" | "Manhwa";

export interface Oeuvre {
  id: number;
  slug: string;
  titre: string;
  description: string;
  type: TypeOeuvre;
  chapitres: number;
  statut: Statut;
  couverture: string;
}

// Données fictives — à remplacer par un appel API : fetch("/api/oeuvres/populaires")
export const OEUVRES_POPULAIRES: Oeuvre[] = [
  {
    id: 1, slug: "shadow-realm",
    titre: "Shadow Realm",
    description: "Un jeune guerrier découvre qu'il est le seul capable de fermer les portes entre les mondes des ombres et des vivants.",
    type: "Manhwa", chapitres: 148, statut: "En cours",
    couverture: "https://picsum.photos/seed/shadow/300/420",
  },
  {
    id: 2, slug: "celestial-blade",
    titre: "Celestial Blade",
    description: "Dans un empire en guerre, une jeune forgeronne crée une épée légendaire qui change le destin de tout un continent.",
    type: "Manga", chapitres: 312, statut: "Terminé",
    couverture: "https://picsum.photos/seed/blade/300/420",
  },
  {
    id: 3, slug: "void-hunter",
    titre: "Void Hunter",
    description: "Un chasseur de primes solitaire traque des créatures interdimensionnelles dans un futur dystopique.",
    type: "Manhwa", chapitres: 87, statut: "En cours",
    couverture: "https://picsum.photos/seed/void/300/420",
  },
  {
    id: 4, slug: "crimson-throne",
    titre: "Crimson Throne",
    description: "La fille d'un roi déchu doit reconquérir son trône en s'alliant à ses pires ennemis.",
    type: "Webtoon", chapitres: 220, statut: "En cours",
    couverture: "https://picsum.photos/seed/crimson/300/420",
  },
  {
    id: 5, slug: "iron-lotus",
    titre: "Iron Lotus",
    description: "Une espionne infiltre le clan ennemi mais tombe amoureuse de sa cible principale.",
    type: "Manhwa", chapitres: 65, statut: "En pause",
    couverture: "https://picsum.photos/seed/lotus/300/420",
  },
  {
    id: 6, slug: "eternal-dawn",
    titre: "Eternal Dawn",
    description: "Après l'apocalypse, quelques survivants portent en eux les fragments d'une ancienne magie oubliée.",
    type: "Manga", chapitres: 400, statut: "Terminé",
    couverture: "https://picsum.photos/seed/dawn/300/420",
  },
  {
    id: 7, slug: "neon-spirit",
    titre: "Neon Spirit",
    description: "Dans une mégalopole cyberpunk, un hacker découvre que sa conscience peut voyager dans les réseaux.",
    type: "Manhwa", chapitres: 53, statut: "En cours",
    couverture: "https://picsum.photos/seed/neon/300/420",
  },
  {
    id: 8, slug: "dragon-pact",
    titre: "Dragon Pact",
    description: "Un mage exilé conclut un pacte avec le dernier dragon vivant pour sauver son royaume.",
    type: "Manga", chapitres: 189, statut: "Abandonné",
    couverture: "https://picsum.photos/seed/dragon/300/420",
  },
  {
    id: 9, slug: "silver-eclipse",
    titre: "Silver Eclipse",
    description: "Une chasseuse de vampires découvre qu'elle est elle-même à moitié vampire après une morsure mystérieuse.",
    type: "Webtoon", chapitres: 102, statut: "En cours",
    couverture: "https://picsum.photos/seed/eclipse/300/420",
  },
  {
    id: 10, slug: "storm-walker",
    titre: "Storm Walker",
    description: "Un enfant né dans l'œil d'une tempête possède le pouvoir de contrôler les éléments naturels.",
    type: "Manhwa", chapitres: 34, statut: "En pause",
    couverture: "https://picsum.photos/seed/storm/300/420",
  },
];