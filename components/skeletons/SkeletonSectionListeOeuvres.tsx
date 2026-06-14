export default function SkeletonSectionListeOeuvres() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-56 rounded bg-bg-card" />
        <div className="h-4 w-16 rounded bg-bg-card" />
      </div>

      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex-none w-36 sm:w-40 rounded-xl overflow-hidden border border-border-base bg-bg-card"
          >
            <div className="aspect-[2/3] bg-bg-base" />
            <div className="p-2.5 flex flex-col gap-2">
              <div className="h-3 rounded bg-bg-base" />
              <div className="h-2 w-1/2 rounded bg-bg-base" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}