export default function SkeletonSectionReprendreLecture() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-64 rounded bg-bg-card" />
        <div className="h-4 w-16 rounded bg-bg-card" />
      </div>

      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex-none w-36 sm:w-40 rounded-xl overflow-hidden border border-border-base bg-bg-card"
          >
            <div className="aspect-[2/3] bg-bg-base" />
            <div className="p-3 flex flex-col gap-2">
              <div className="h-3 rounded bg-bg-base" />
              <div className="h-2 w-3/4 rounded bg-bg-base" />
              <div className="h-1.5 w-full rounded-full bg-bg-base" />
              <div className="h-7 w-full rounded-lg bg-bg-base mt-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}