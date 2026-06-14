"use client";

import { useRef } from "react";

interface CarouselHorizontalProps {
  children: React.ReactNode;
}

// Composant générique de carrousel horizontal avec snap et flèches violettes
// Utilisable pour : recommandations, dernières sorties, par genre, etc.
export default function CarouselHorizontal({ children }: CarouselHorizontalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const firstCard = container.querySelector<HTMLElement>("[data-card]");
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth + 16; // largeur + gap-4
    const visibleCount = Math.floor(container.offsetWidth / cardWidth);
    container.scrollBy({
      left: direction === "right" ? cardWidth * visibleCount : -(cardWidth * visibleCount),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/carousel">
      {/* Flèche gauche */}
      <NavArrow direction="left"  onClick={() => scroll("left")}  className="left-0 -translate-x-1/2" />

      {/* Piste scrollable */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>

      {/* Flèche droite */}
      <NavArrow direction="right" onClick={() => scroll("right")} className="right-0 translate-x-1/2" />
    </div>
  );
}

function NavArrow({ direction, onClick, className }: { direction: "left" | "right"; onClick: () => void; className: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Précédent" : "Suivant"}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10 ${className}
        hidden sm:flex items-center justify-center
        w-9 h-9 rounded-full
        bg-violet-600 text-text-primary
        hover:bg-violet-500 active:scale-90 active:bg-violet-700
        shadow-lg shadow-violet-900/40
        opacity-0 group-hover/carousel:opacity-100
        transition-all duration-150
      `}
    >
      {direction === "left" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m15 18-6-6 6-6" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </button>
  );
}