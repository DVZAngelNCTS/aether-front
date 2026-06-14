export default function SkeletonChapterReader() {
  return (
    <main className="min-h-screen bg-bg-base text-text-primary animate-pulse">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-4 md:px-6 md:py-6">
        <header className="rounded-2xl border border-border-base bg-bg-card p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-3 w-24 rounded bg-bg-base" />
                <div className="h-8 w-56 rounded bg-bg-base" />
                <div className="h-4 w-72 max-w-full rounded bg-bg-base" />
                <div className="h-3 w-40 rounded bg-bg-base" />
              </div>

              <div className="h-11 w-36 rounded-xl bg-bg-base" />
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="h-4 w-32 rounded bg-bg-base" />
                <div className="h-11 w-full rounded-xl bg-bg-base" />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="h-11 w-40 rounded-xl bg-bg-base" />
                <div className="h-11 w-40 rounded-xl bg-bg-base" />
              </div>
            </div>
          </div>
        </header>

        <section aria-label="Chargement du chapitre" className="flex flex-col gap-3">
          <div className="w-full overflow-hidden rounded-2xl border border-border-base bg-bg-card">
            <div className="aspect-[9/16] w-full bg-bg-input" />
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-border-base bg-bg-card">
            <div className="aspect-[9/20] w-full bg-bg-input" />
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-border-base bg-bg-card">
            <div className="aspect-[9/18] w-full bg-bg-input" />
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-border-base bg-bg-card">
            <div className="aspect-[9/22] w-full bg-bg-input" />
          </div>
        </section>

        <nav
          aria-label="Chargement de la navigation du chapitre"
          className="flex flex-col gap-3 border-t border-border-base pt-2 sm:flex-row sm:justify-between"
        >
          <div className="h-11 w-full rounded-xl bg-bg-card sm:w-44" />
          <div className="h-11 w-full rounded-xl bg-bg-card sm:w-52" />
        </nav>
      </div>
    </main>
  );
}