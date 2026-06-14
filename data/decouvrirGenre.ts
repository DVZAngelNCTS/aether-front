import type { Oeuvre } from "./oeuvres";

// À remplacer par : fetch("/api/oeuvres?genre=<genre_aleatoire>&tri=note&limite=10")
// Genre mis en avant change chaque semaine
export const DECOUVRIR_GENRE: { genre: string; oeuvres: Oeuvre[] } = {
  genre: "Horreur",
  oeuvres: [
    { id: 160, slug: "pale-garden",     titre: "Pale Garden",     type: "Manga",   chapitres: 35,  statut: "Terminé",  description: "Une jardinière découvre que ses plantes absorbent les souvenirs des morts enterrés sous sa maison.",      couverture: "https://picsum.photos/seed/garden/300/420"    },
    { id: 161, slug: "blood-sigil",     titre: "Blood Sigil",     type: "Webtoon", chapitres: 310, statut: "Terminé",  description: "Des signes mystérieux confèrent des pouvoirs aux élus, au prix de leur propre vie.",                       couverture: "https://picsum.photos/seed/sigil/300/420"     },
    { id: 162, slug: "hollow-saint",    titre: "Hollow Saint",    type: "Webtoon", chapitres: 50,  statut: "Terminé",  description: "Un saint sans foi accomplit des miracles par pure discipline — jusqu'au jour où quelque chose lui répond.", couverture: "https://picsum.photos/seed/saint/300/420"     },
    { id: 163, slug: "salt-and-bone",   titre: "Salt & Bone",     type: "Manhwa",  chapitres: 9,   statut: "Terminé",  description: "Deux naufrages se retrouvent sur une île qui change de forme à chaque marée.",                            couverture: "https://picsum.photos/seed/salt/300/420"      },
    { id: 164, slug: "phantom-gate",    titre: "Phantom Gate",    type: "Manga",   chapitres: 156, statut: "Terminé",  description: "Un détective des mondes parallèles traque des entités spectrales infiltrant le monde réel.",               couverture: "https://picsum.photos/seed/phantom/300/420"   },
    { id: 165, slug: "wraith-code",     titre: "Wraith Code",     type: "Manhwa",  chapitres: 44,  statut: "Terminé",  description: "Un programmeur mort se retrouve piégé dans le dernier jeu qu'il a créé avant de mourir.",                couverture: "https://picsum.photos/seed/wraith/300/420"    },
    { id: 166, slug: "the-ferryman",    titre: "The Ferryman",    type: "Manhwa",  chapitres: 2,   statut: "Terminé",  description: "Un passeur de rivière transporte les âmes qui ne savent pas encore qu'elles sont mortes.",                 couverture: "https://picsum.photos/seed/ferry/300/420"     },
    { id: 167, slug: "ember-child",     titre: "Ember Child",     type: "Manhwa",  chapitres: 7,   statut: "Terminé",  description: "Un enfant né des cendres d'une ville brûlée cherche la flamme qui lui a donné naissance.",                 couverture: "https://picsum.photos/seed/ember/300/420"     },
    { id: 168, slug: "veil-of-ash",     titre: "Veil of Ash",     type: "Manhwa",   chapitres: 43,  statut: "Terminé",  description: "Dans un monde recouvert de cendres, les derniers humains vivent sous des dômes de verre suspendus.",      couverture: "https://picsum.photos/seed/ash/300/420"       },
    { id: 169, slug: "silent-fall",     titre: "Silent Fall",     type: "Manga",   chapitres: 3,   statut: "Terminé",  description: "Un soldat retrouve les lettres qu'il n'a jamais envoyées — et découvre que quelqu'un y a répondu.",        couverture: "https://picsum.photos/seed/fall/300/420"      },
  ],
};