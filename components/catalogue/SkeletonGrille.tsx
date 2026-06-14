export default function SkeletonGrille() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-between mb-5">
        <div className="w-32 h-4 rounded-md bg-bg-card" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl overflow-hidden border border-border-base bg-bg-card"
          >
            <div className="aspect-[2/3] bg-bg-base" />
            <div className="p-2.5 flex flex-col gap-2">
              <div className="h-3 rounded bg-bg-base" />
              <div className="h-2 w-1/2 rounded bg-bg-base" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}