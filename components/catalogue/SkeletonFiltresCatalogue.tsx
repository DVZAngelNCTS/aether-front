export default function SkeletonFiltresCatalogue() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col gap-4 rounded-2xl border border-border-base bg-bg-card p-4">
        {/* Barre de recherche */}
        <div className="h-11 w-full rounded-xl bg-bg-base" />

        {/* Ligne de filtres */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-9 w-24 rounded-lg bg-bg-base" />
          ))}
        </div>

        {/* Ligne secondaire */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-bg-base" />
          ))}
        </div>
      </div>
    </div>
  );
}