export default function SkeletonOeuvreDetail() {
  return (
    <div className="animate-pulse min-h-screen bg-bg-base">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-48 h-72 rounded-xl bg-bg-card shrink-0 mx-auto md:mx-0" />
          {/* Infos */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="h-8 w-3/4 rounded bg-bg-card" />
            <div className="h-4 w-1/3 rounded bg-bg-card" />
            <div className="h-4 w-full rounded bg-bg-card" />
            <div className="h-4 w-5/6 rounded bg-bg-card" />
            <div className="flex gap-2 mt-2">
              <div className="h-10 w-36 rounded-lg bg-bg-card" />
              <div className="h-10 w-36 rounded-lg bg-bg-card" />
              <div className="h-10 w-36 rounded-lg bg-bg-card" />
            </div>
          </div>
        </div>
        {/* Chapitres skeleton */}
        <div className="flex flex-col gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-12 rounded-xl bg-bg-card" />
          ))}
        </div>
      </div>
    </div>
  );
}