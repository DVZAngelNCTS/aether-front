export default function SkeletonPlanning() {
  return (
    <div className="animate-pulse">
      {/* Navigation semaine */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-bg-card" />
          <div className="w-40 h-5 rounded-md bg-bg-card" />
          <div className="w-8 h-8 rounded-lg bg-bg-card" />
          <div className="w-24 h-7 rounded-md bg-bg-card" />
        </div>
        <div className="w-32 h-4 rounded-md bg-bg-card" />
      </div>

      {/* Filtres */}
      <div className="flex gap-2 mb-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-20 h-7 rounded-full bg-bg-card" />
        ))}
      </div>

      {/* Grille 7 colonnes */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, col) => (
          <SkeletonColonne key={col} nbCartes={col % 3 === 0 ? 4 : col % 2 === 0 ? 3 : 2} />
        ))}
      </div>
    </div>
  );
}

function SkeletonColonne({ nbCartes }: { nbCartes: number }) {
  return (
    <div className="flex flex-col rounded-xl border border-border-base bg-bg-card overflow-hidden">
      {/* En-tête jour */}
      <div className="px-2 py-2.5 border-b border-border-base flex flex-col items-center gap-1.5">
        <div className="w-10 h-3 rounded bg-bg-base" />
        <div className="w-6 h-6 rounded-md bg-bg-base" />
        <div className="w-8 h-2.5 rounded bg-bg-base" />
      </div>

      {/* Créneaux */}
      <div className="flex flex-col gap-2 p-2">
        {Array.from({ length: nbCartes }).map((_, i) => (
          <SkeletonCarte key={i} />
        ))}
      </div>
    </div>
  );
}

function SkeletonCarte() {
  return (
    <div className="flex flex-col gap-1">
      {/* Heure */}
      <div className="w-10 h-2.5 rounded bg-bg-base" />
      {/* Carte œuvre */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-lg border border-border-base bg-bg-base">
        <div className="w-7 h-10 rounded-md bg-bg-card flex-shrink-0" />
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <div className="h-2.5 rounded bg-bg-card w-full" />
          <div className="h-2.5 rounded bg-bg-card w-2/3" />
          <div className="h-2 rounded bg-bg-card w-1/3" />
        </div>
      </div>
    </div>
  );
}