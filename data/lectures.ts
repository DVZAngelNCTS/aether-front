export interface LectureEnCours {
  id: number;
  slug: string;
  titre: string;
  couverture: string;
  dernierChapitreLu: number;
  dernierChapitreDispo: number;
}

// Données fictives — à remplacer par : fetch("/api/utilisateur/lectures")
export const LECTURES_EN_COURS: LectureEnCours[] = [
  { id: 1, slug: "shadow-realm",    titre: "Shadow Realm",    couverture: "https://picsum.photos/seed/shadow/200/280",  dernierChapitreLu: 120, dernierChapitreDispo: 148 },
  { id: 2, slug: "void-hunter",     titre: "Void Hunter",     couverture: "https://picsum.photos/seed/void/200/280",    dernierChapitreLu: 45,  dernierChapitreDispo: 87  },
  { id: 3, slug: "crimson-throne",  titre: "Crimson Throne",  couverture: "https://picsum.photos/seed/crimson/200/280", dernierChapitreLu: 198, dernierChapitreDispo: 220 },
  { id: 4, slug: "neon-spirit",     titre: "Neon Spirit",     couverture: "https://picsum.photos/seed/neon/200/280",    dernierChapitreLu: 10,  dernierChapitreDispo: 53  },
  { id: 5, slug: "iron-lotus",      titre: "Iron Lotus",      couverture: "https://picsum.photos/seed/lotus/200/280",   dernierChapitreLu: 65,  dernierChapitreDispo: 65  },
  { id: 6, slug: "silver-eclipse",  titre: "Silver Eclipse",  couverture: "https://picsum.photos/seed/eclipse/200/280", dernierChapitreLu: 78,  dernierChapitreDispo: 102 },
  { id: 7, slug: "dragon-pact",     titre: "Dragon Pact",     couverture: "https://picsum.photos/seed/dragon/200/280",  dernierChapitreLu: 5,   dernierChapitreDispo: 189 },
  { id: 8, slug: "eternal-dawn",    titre: "Eternal Dawn",    couverture: "https://picsum.photos/seed/dawn/200/280",    dernierChapitreLu: 380, dernierChapitreDispo: 400 },
  { id: 9,  slug: "frostbound",         titre: "Frostbound",         couverture: "https://picsum.photos/seed/frost/200/280",     dernierChapitreLu: 32,  dernierChapitreDispo: 110 },
  { id: 10, slug: "emberfall",          titre: "Emberfall",          couverture: "https://picsum.photos/seed/ember/200/280",     dernierChapitreLu: 17,  dernierChapitreDispo: 76  },
  { id: 11, slug: "storm-weaver",       titre: "Storm Weaver",       couverture: "https://picsum.photos/seed/storm/200/280",     dernierChapitreLu: 92,  dernierChapitreDispo: 135 },
  { id: 12, slug: "obsidian-crown",     titre: "Obsidian Crown",     couverture: "https://picsum.photos/seed/obsidian/200/280",  dernierChapitreLu: 210, dernierChapitreDispo: 210 },
  { id: 13, slug: "phantom-tides",      titre: "Phantom Tides",      couverture: "https://picsum.photos/seed/phantom/200/280",   dernierChapitreLu: 45,  dernierChapitreDispo: 180 },
  { id: 14, slug: "gilded-ashes",       titre: "Gilded Ashes",       couverture: "https://picsum.photos/seed/gilded/200/280",    dernierChapitreLu: 7,   dernierChapitreDispo: 94  },
  { id: 15, slug: "starforged",         titre: "Starforged",         couverture: "https://picsum.photos/seed/starforged/200/280",dernierChapitreLu: 63,  dernierChapitreDispo: 122 },
  { id: 16, slug: "witchlight",         titre: "Witchlight",         couverture: "https://picsum.photos/seed/witchlight/200/280",dernierChapitreLu: 88,  dernierChapitreDispo: 88  },
  { id: 17, slug: "sable-sands",        titre: "Sable Sands",        couverture: "https://picsum.photos/seed/sable/200/280",    dernierChapitreLu: 141, dernierChapitreDispo: 200 },
  { id: 18, slug: "cinder-song",        titre: "Cinder Song",        couverture: "https://picsum.photos/seed/cinder/200/280",    dernierChapitreLu: 53,  dernierChapitreDispo: 167 },
  { id: 19, slug: "veilbound",          titre: "Veilbound",          couverture: "https://picsum.photos/seed/veilbound/200/280", dernierChapitreLu: 29,  dernierChapitreDispo: 73  },
  { id: 20, slug: "abyssal-star",       titre: "Abyssal Star",       couverture: "https://picsum.photos/seed/abyssal/200/280",   dernierChapitreLu: 300, dernierChapitreDispo: 340 },
];