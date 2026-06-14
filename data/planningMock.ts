import type { CreneauSortie } from "./planning";

export const PLANNING_MOCK: CreneauSortie[] = [
  // --- Lundi 9 juin ---
  { id: 25, oeuvreId: 10, chapitre: 67,  dateHeure: "2026-06-09T07:00:00+01:00", fuseau: "UTC+1" },
  { id: 1,  oeuvreId: 1,  chapitre: 150, dateHeure: "2026-06-09T09:00:00+01:00", fuseau: "UTC+1" },
  { id: 26, oeuvreId: 18, chapitre: 142, dateHeure: "2026-06-09T12:00:00+01:00", fuseau: "UTC+1" },
  { id: 27, oeuvreId: 30, chapitre: 201, dateHeure: "2026-06-09T15:00:00+01:00", fuseau: "UTC+1" },
  { id: 2,  oeuvreId: 7,  chapitre: 277, dateHeure: "2026-06-09T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 3,  oeuvreId: 24, chapitre: 113, dateHeure: "2026-06-09T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 28, oeuvreId: 22, chapitre: 55,  dateHeure: "2026-06-09T21:00:00+01:00", fuseau: "UTC+1" },

  // --- Mardi 10 juin ---
  { id: 29, oeuvreId: 11, chapitre: 89,  dateHeure: "2026-06-10T07:00:00+01:00", fuseau: "UTC+1" },
  { id: 30, oeuvreId: 35, chapitre: 264, dateHeure: "2026-06-10T10:00:00+01:00", fuseau: "UTC+1" },
  { id: 4,  oeuvreId: 2,  chapitre: 401, dateHeure: "2026-06-10T12:00:00+01:00", fuseau: "UTC+1" },
  { id: 31, oeuvreId: 19, chapitre: 33,  dateHeure: "2026-06-10T15:00:00+01:00", fuseau: "UTC+1" },
  { id: 5,  oeuvreId: 13, chapitre: 55,  dateHeure: "2026-06-10T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 51, oeuvreId: 52, chapitre: 8,   dateHeure: "2026-06-10T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 52, oeuvreId: 53, chapitre: 23,  dateHeure: "2026-06-10T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 53, oeuvreId: 54, chapitre: 101, dateHeure: "2026-06-10T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 54, oeuvreId: 55, chapitre: 76,  dateHeure: "2026-06-10T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 55, oeuvreId: 56, chapitre: 42,  dateHeure: "2026-06-10T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 6,  oeuvreId: 42, chapitre: 131, dateHeure: "2026-06-10T20:00:00+01:00", fuseau: "UTC+1" },
  { id: 32, oeuvreId: 46, chapitre: 71,  dateHeure: "2026-06-10T21:00:00+01:00", fuseau: "UTC+1" },

  // --- Mercredi 11 juin ---
  { id: 33, oeuvreId: 12, chapitre: 175, dateHeure: "2026-06-11T07:00:00+01:00", fuseau: "UTC+1" },
  { id: 7,  oeuvreId: 4,  chapitre: 222, dateHeure: "2026-06-11T09:00:00+01:00", fuseau: "UTC+1" },
  { id: 34, oeuvreId: 27, chapitre: 98,  dateHeure: "2026-06-11T12:00:00+01:00", fuseau: "UTC+1" },
  { id: 8,  oeuvreId: 15, chapitre: 97,  dateHeure: "2026-06-11T15:00:00+01:00", fuseau: "UTC+1" },
  // Reporté — ancienne date le 11 juin à 18h
  { id: 9,  oeuvreId: 47, chapitre: 313, dateHeure: "2026-06-14T18:00:00+01:00", fuseau: "UTC+1", statut: "reporte", ancienneDateHeure: "2026-06-11T18:00:00+01:00" },
  { id: 10, oeuvreId: 25, chapitre: 168, dateHeure: "2026-06-11T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 11, oeuvreId: 9,  chapitre: 205, dateHeure: "2026-06-11T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 35, oeuvreId: 33, chapitre: 310, dateHeure: "2026-06-11T21:00:00+01:00", fuseau: "UTC+1" },

  // --- Jeudi 12 juin ---
  { id: 36, oeuvreId: 20, chapitre: 47,  dateHeure: "2026-06-12T07:00:00+01:00", fuseau: "UTC+1" },
  { id: 37, oeuvreId: 38, chapitre: 199, dateHeure: "2026-06-12T10:00:00+01:00", fuseau: "UTC+1" },
  { id: 12, oeuvreId: 3,  chapitre: 89,  dateHeure: "2026-06-12T12:00:00+01:00", fuseau: "UTC+1" },
  { id: 38, oeuvreId: 50, chapitre: 154, dateHeure: "2026-06-12T15:00:00+01:00", fuseau: "UTC+1" },
  { id: 13, oeuvreId: 16, chapitre: 104, dateHeure: "2026-06-12T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 14, oeuvreId: 31, chapitre: 13,  dateHeure: "2026-06-12T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 15, oeuvreId: 43, chapitre: 34,  dateHeure: "2026-06-12T20:00:00+01:00", fuseau: "UTC+1" },
  { id: 39, oeuvreId: 26, chapitre: 66,  dateHeure: "2026-06-12T21:00:00+01:00", fuseau: "UTC+1" },

  // --- Vendredi 13 juin ---
  { id: 40, oeuvreId: 32, chapitre: 213, dateHeure: "2026-06-13T07:00:00+01:00", fuseau: "UTC+1" },
  { id: 41, oeuvreId: 37, chapitre: 88,  dateHeure: "2026-06-13T12:00:00+01:00", fuseau: "UTC+1" },
  { id: 42, oeuvreId: 41, chapitre: 305, dateHeure: "2026-06-13T15:00:00+01:00", fuseau: "UTC+1" },
  { id: 16, oeuvreId: 5,  chapitre: 311, dateHeure: "2026-06-13T09:00:00+01:00", fuseau: "UTC+1" },
  { id: 17, oeuvreId: 21, chapitre: 88,  dateHeure: "2026-06-13T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 18, oeuvreId: 44, chapitre: 28,  dateHeure: "2026-06-13T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 43, oeuvreId: 48, chapitre: 29,  dateHeure: "2026-06-13T21:00:00+01:00", fuseau: "UTC+1" },

  // --- Samedi 14 juin ---
  { id: 44, oeuvreId: 23, chapitre: 56,  dateHeure: "2026-06-14T09:00:00+01:00", fuseau: "UTC+1" },
  { id: 19, oeuvreId: 8,  chapitre: 366, dateHeure: "2026-06-14T12:00:00+01:00", fuseau: "UTC+1" },
  { id: 45, oeuvreId: 34, chapitre: 178, dateHeure: "2026-06-14T15:00:00+01:00", fuseau: "UTC+1" },
  { id: 20, oeuvreId: 17, chapitre: 116, dateHeure: "2026-06-14T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 21, oeuvreId: 28, chapitre: 75,  dateHeure: "2026-06-14T18:00:00+01:00", fuseau: "UTC+1" },
  { id: 46, oeuvreId: 39, chapitre: 93,  dateHeure: "2026-06-14T20:00:00+01:00", fuseau: "UTC+1" },

  // --- Dimanche 15 juin ---
  { id: 47, oeuvreId: 40, chapitre: 64,  dateHeure: "2026-06-15T09:00:00+01:00", fuseau: "UTC+1" },
  { id: 48, oeuvreId: 45, chapitre: 122, dateHeure: "2026-06-15T12:00:00+01:00", fuseau: "UTC+1" },
  { id: 22, oeuvreId: 6,  chapitre: 334, dateHeure: "2026-06-15T15:00:00+01:00", fuseau: "UTC+1" },
  { id: 23, oeuvreId: 14, chapitre: 80,  dateHeure: "2026-06-15T18:00:00+01:00", fuseau: "UTC+1" },
  // Reporté — ancienne date le 15 juin à 20h
  { id: 24, oeuvreId: 29, chapitre: 97,  dateHeure: "2026-06-17T18:00:00+01:00", fuseau: "UTC+1", statut: "reporte", ancienneDateHeure: "2026-06-15T20:00:00+01:00" },
  { id: 49, oeuvreId: 49, chapitre: 207, dateHeure: "2026-06-15T21:00:00+01:00", fuseau: "UTC+1" },
];