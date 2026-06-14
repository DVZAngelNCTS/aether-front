import Link from "next/link";
import type { Oeuvre, Statut } from "@/data/oeuvres";

const STATUT_STYLES: Record<Statut, string> = {
  "En cours":  "bg-violet-600 text-text-primary",
  "Terminé":   "bg-green-700 text-text-primary",
  "En pause":  "bg-yellow-600 text-black",
  "Abandonné": "bg-red-800 text-text-primary",
};

export default function CarteOeuvre({ oeuvre }: { oeuvre: Oeuvre }) {
  return (
    <Link
      href={`/oeuvre/${oeuvre.slug}`}
      aria-label={`${oeuvre.titre} — ${oeuvre.type}, ${oeuvre.chapitres} chapitres, ${oeuvre.statut}`}
      className="group relative flex-none w-44 sm:w-48 snap-start rounded-xl overflow-hidden border border-border-base bg-bg-card hover:border-violet-500 hover:scale-[1.03] transition-all duration-200"
      data-card
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={oeuvre.couverture}
          alt={`Couverture de ${oeuvre.titre}`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-violet-600 text-white text-xs font-semibold border border-violet-700">
          {oeuvre.type}
        </span>
        <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-semibold ${STATUT_STYLES[oeuvre.statut]}`}>
          {oeuvre.statut}
        </span>
      </div>

      {/* Infos */}
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-text-primary text-sm font-bold line-clamp-1 group-hover:text-violet-300 transition-colors">
          {oeuvre.titre}
        </h3>
        <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{oeuvre.description}</p>
        <p className="text-text-faint text-xs mt-1">
          📖 <span className="text-text-muted">{oeuvre.chapitres}</span> chapitres
        </p>
      </div>
    </Link>
  );
}