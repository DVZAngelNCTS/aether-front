export type StatutCreneau = "a-venir" | "sorti" | "reporte";

export interface CreneauSortie {
  id:        number;
  oeuvreId:  number;
  chapitre:  number;
  dateHeure: string;
  fuseau:    string;
  statut?:   StatutCreneau;
  ancienneDateHeure?: string;
}

export interface CreneauAvecOeuvre extends CreneauSortie {
  titre:      string;
  slug:       string;
  couverture: string;
  type:       string;
}