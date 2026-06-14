"use client";

// Drawer de filtres de recherche
interface SearchFiltersProps {
  open: boolean;
  onClose: () => void;
}

const GENRES = ["Action", "Manhwace", "Fantaisie", "Horreur", "Comédie", "Drame", "Seinen", "Shonen"];
const TYPES = ["Manga", "Webtoon", "Manhwa"];
const STATUTS = ["En cours", "Terminé", "Pausé"];

export default function SearchFilters({ open, onClose }: SearchFiltersProps) {
  if (!open) return null;

  return (
    <>
      {/* Overlay sombre derrière le drawer */}
      <div
        className="fixed inset-0 z-50 bg-bg-nav/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panneau drawer */}
      <aside
        className="fixed top-0 right-0 z-50 h-full w-80 bg-gray-950 border-l border-border-base p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Filtres de recherche"
      >
        {/* En-tête */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-text-primary font-semibold text-lg">Filtres</h2>
          <button
            onClick={onClose}
            className="text-text-faint hover:text-text-primary transition-colors"
            aria-label="Fermer les filtres"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Type */}
        <FilterSection title="Type">
          {TYPES.map((type) => (
            <FilterChip key={type} label={type} />
          ))}
        </FilterSection>

        {/* Genre */}
        <FilterSection title="Genre">
          {GENRES.map((genre) => (
            <FilterChip key={genre} label={genre} />
          ))}
        </FilterSection>

        {/* Statut */}
        <FilterSection title="Statut">
          {STATUTS.map((statut) => (
            <FilterChip key={statut} label={statut} />
          ))}
        </FilterSection>

        {/* Bouton appliquer */}
        <button className="mt-6 w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-text-primary font-medium transition-colors">
          Appliquer les filtres
        </button>
      </aside>
    </>
  );
}

// Sous-composant section
function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-2">{title}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

// Sous-composant chip cliquable
function FilterChip({ label }: { label: string }) {
  return (
    <button className="px-3 py-1 rounded-full border border-border-base text-text-muted text-sm hover:border-violet-500 hover:text-violet-400 transition-colors">
      {label}
    </button>
  );
}