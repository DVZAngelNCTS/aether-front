import type { Oeuvre } from "./oeuvres";

export interface SectionRecommandation {
  baseSurOeuvre: string; // Titre de l'œuvre source — généré dynamiquement par l'API plus tard
  oeuvres: Oeuvre[];
}

// Données fictives — à remplacer par : fetch("/api/utilisateur/recommandations")
export const RECOMMANDATIONS: SectionRecommandation = {
  baseSurOeuvre: "Shadow Realm",
  oeuvres: [
    { id: 11, slug: "dark-covenant",    titre: "Dark Covenant",    type: "Manhwa",  chapitres: 203, statut: "En cours",  description: "Un pacte scellé dans le sang lie deux ennemis jurés dans leur quête pour renverser un dieu obscur.",          couverture: "https://picsum.photos/seed/covenant/300/420"  },
    { id: 12, slug: "phantom-gate",     titre: "Phantom Gate",     type: "Manga",   chapitres: 156, statut: "Terminé",   description: "Un détective des mondes parallèles traque des entités spectrales qui s'infiltrent dans le monde réel.",     couverture: "https://picsum.photos/seed/phantom/300/420"   },
    { id: 13, slug: "abyss-walker",     titre: "Abyss Walker",     type: "Manhwa",  chapitres: 78,  statut: "En cours",  description: "Plongé dans les profondeurs d'un donjon sans fin, un aventurier découvre qu'il est le donjon lui-même.",    couverture: "https://picsum.photos/seed/abyss/300/420"     },
    { id: 14, slug: "blood-sigil",      titre: "Blood Sigil",      type: "Webtoon", chapitres: 310, statut: "Terminé",   description: "Des signes mystérieux apparaissent sur la peau des élus, leur conférant des pouvoirs au prix de leur vie.", couverture: "https://picsum.photos/seed/sigil/300/420"     },
    { id: 15, slug: "night-sovereign",  titre: "Night Sovereign",  type: "Manhwa",  chapitres: 95,  statut: "En cours",  description: "Un roi fantôme revient régner sur les vivants après que son trône a été volé par trahison.",               couverture: "https://picsum.photos/seed/sovereign/300/420" },
    { id: 16, slug: "cursed-lineage",   titre: "Cursed Lineage",   type: "Manga",   chapitres: 430, statut: "Terminé",   description: "Chaque héritier de la famille Rao naît avec une malédiction différente qu'il doit briser avant ses 20 ans.", couverture: "https://picsum.photos/seed/lineage/300/420"   },
    { id: 17, slug: "eclipse-hunter",  titre: "Eclipse Hunter",   type: "Manhwa",  chapitres: 61,  statut: "En pause",  description: "Une chasseuse de monstres lunaires découvre que sa proie est en réalité sa mère disparue.",                couverture: "https://picsum.photos/seed/hunter/300/420"   },
    { id: 18, slug: "veil-of-ash",      titre: "Veil of Ash",      type: "Manhwa",   chapitres: 42,  statut: "En cours",  description: "Dans un monde recouvert de cendres, les derniers humains vivent sous des dômes de verre suspendus.",        couverture: "https://picsum.photos/seed/ash/300/420"       },
    { id: 19, slug: "star-breaker",     titre: "Star Breaker",     type: "Manhwa",  chapitres: 188, statut: "Abandonné", description: "Un pirate de l'espace aux pouvoirs cosmiques défie l'empire galactique avec son équipage de renégats.",    couverture: "https://picsum.photos/seed/star/300/420"      },
    { id: 20, slug: "obsidian-king",    titre: "Obsidian King",    type: "Manga",   chapitres: 275, statut: "En cours",  description: "Né sans magie dans un monde qui en est saturé, un enfant forge sa propre voie par la volonté pure.",       couverture: "https://picsum.photos/seed/obsidian/300/420"  },
    { id: 21, slug: "hollow-throne",    titre: "Hollow Throne",    type: "Webtoon", chapitres: 114, statut: "En cours",  description: "Un empire sans empereur depuis cent ans voit soudain apparaître cinq prétendants légitimes simultanément.", couverture: "https://picsum.photos/seed/hollow/300/420"    },
    { id: 22, slug: "runed-world",      titre: "Runed World",      type: "Manhwa",  chapitres: 333, statut: "Terminé",   description: "Le monde entier est une rune géante — celui qui en déchiffre le centre devient dieu.",                      couverture: "https://picsum.photos/seed/runed/300/420"     },
  ],
};