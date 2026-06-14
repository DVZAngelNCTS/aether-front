import { Suspense } from "react";
import FiltresCatalogue from "@/components/catalogue/FiltresCatalogue";
import GrilleResultats from "@/components/catalogue/GrilleResultats";
import SkeletonGrille from "@/components/catalogue/SkeletonGrille";
import SkeletonFiltresCatalogue from "@/components/catalogue/SkeletonFiltresCatalogue";

export default function CataloguePage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-text-primary text-3xl font-bold mb-1">Catalogue</h1>
          <p className="text-text-muted text-sm">
            Parcourez l&apos;ensemble des œuvres disponibles sur AetherScan.
          </p>
        </div>

        <Suspense fallback={<SkeletonFiltresCatalogue />}>
          <FiltresCatalogue />
        </Suspense>

        <div className="mt-8">
          <Suspense fallback={<SkeletonGrille />}>
            <GrilleResultats />
          </Suspense>
        </div>
      </div>
    </main>
  );
}