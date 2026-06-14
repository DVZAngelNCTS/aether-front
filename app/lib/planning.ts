// Calcule le statut d'un créneau si non défini manuellement
export function getStatutCreneau(dateHeure: string, statutForce?: string): "sorti" | "a-venir" | "reporte" {
  if (statutForce === "reporte") return "reporte";
  return new Date(dateHeure) <= new Date() ? "sorti" : "a-venir";
}

// Countdown humain : "dans 2h 30min" / "dans 3j" / "il y a 5min"
export function formatCountdown(dateHeure: string): string {
  const diffMs  = new Date(dateHeure).getTime() - Date.now();
  const diffSec = Math.round(diffMs / 1000);
  const abs     = Math.abs(diffSec);

  if (abs < 60)                          return diffSec >= 0 ? "dans moins d'1 min"   : "à l'instant";
  if (abs < 3600)  { const m = Math.round(abs / 60);   return diffSec >= 0 ? `dans ${m} min`  : `il y a ${m} min`;  }
  if (abs < 86400) { const h = Math.floor(abs / 3600);  const m = Math.round((abs % 3600) / 60);
                     const label = m > 0 ? `${h}h ${m}min` : `${h}h`;
                     return diffSec >= 0 ? `dans ${label}` : `il y a ${label}`; }
  const j = Math.round(abs / 86400);
  return diffSec >= 0 ? `dans ${j}j` : `il y a ${j}j`;
}

// Formate l'heure en UTC+1 (Europe/Paris)
export function formatHeure(dateHeure: string): string {
  return new Date(dateHeure).toLocaleTimeString("fr-FR", {
    hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris",
  });
}