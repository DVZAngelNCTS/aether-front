export default function SkeletonSectionOeuvreAleatoire() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto animate-pulse">
      <div className="rounded-2xl border border-border-base bg-bg-card overflow-hidden">
        <div className="grid md:grid-cols-[220px_1fr] gap-0">
          <div className="aspect-[2/3] md:aspect-auto bg-bg-base min-h-[320px]" />
          <div className="p-6 flex flex-col gap-4">
            <div className="h-4 w-28 rounded bg-bg-base" />
            <div className="h-8 w-2/3 rounded bg-bg-base" />
            <div className="h-4 w-full rounded bg-bg-base" />
            <div className="h-4 w-5/6 rounded bg-bg-base" />
            <div className="flex gap-2 pt-2">
              <div className="h-8 w-20 rounded-full bg-bg-base" />
              <div className="h-8 w-24 rounded-full bg-bg-base" />
            </div>
            <div className="flex gap-3 pt-4">
              <div className="h-10 w-36 rounded-lg bg-bg-base" />
              <div className="h-10 w-32 rounded-lg bg-bg-base" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}