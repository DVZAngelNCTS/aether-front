import type { CreneauAvecOeuvre } from "@/data/planning";
import CrenauCell from "./CrenauCell";

interface Props {
  label:        string;
  date:         Date;
  estAujourdHui: boolean;
  creneaux:     CreneauAvecOeuvre[];
}

// Regroupe les créneaux par heure
function grouperParHeure(creneaux: CreneauAvecOeuvre[]) {
  const map = new Map<string, CreneauAvecOeuvre[]>();
  for (const c of creneaux) {
    const heure = new Date(c.dateHeure).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" });
    if (!map.has(heure)) map.set(heure, []);
    map.get(heure)!.push(c);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export default function ColonneJour({ label, date, estAujourdHui, creneaux }: Props) {
  const groupes = grouperParHeure(creneaux);

  return (
    <div className={`flex flex-col rounded-xl border transition-colors ${
      estAujourdHui
        ? "border-violet-500 bg-violet-950/20"
        : "border-border-base bg-bg-card"
    }`}>
      {/* En-tête jour */}
      <div className={`px-2 py-2.5 text-center border-b ${estAujourdHui ? "border-violet-500/40" : "border-border-base"}`}>
        <p className={`text-xs font-semibold uppercase tracking-wider ${estAujourdHui ? "text-violet-400" : "text-text-muted"}`}>
          {label}
        </p>
        <p className={`text-lg font-bold mt-0.5 ${estAujourdHui ? "text-violet-300" : "text-text-primary"}`}>
          {date.getDate()}
        </p>
        <p className="text-text-faint text-xs">
          {date.toLocaleDateString("fr-FR", { month: "short" })}
        </p>
      </div>

      {/* Créneaux */}
      <div className="flex flex-col gap-2 p-2 min-h-[120px]">
        {groupes.length === 0 ? (
          <p className="text-text-faint text-xs text-center mt-4">—</p>
        ) : (
          groupes.map(([heure, items]) => (
            <CrenauCell key={heure} heure={heure} items={items} />
          ))
        )}
      </div>
    </div>
  );
}