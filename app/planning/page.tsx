import { Suspense } from "react";
import PlanningClient   from "@/components/planning/PlanningClient";
import SkeletonPlanning from "@/components/planning/SkeletonPlanning";

export default function PlanningPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <div className="max-w-[1400px] mx-auto px-4 py-10">

        <div className="mb-8">
          <h1 className="text-text-primary text-3xl font-bold mb-1">Planning des sorties</h1>
          <p className="text-text-muted text-sm">
            Horaires en <span className="text-text-primary font-medium">UTC+1</span>.
            Cliquez sur une œuvre pour accéder à sa page.
          </p>
        </div>

        <Suspense fallback={<SkeletonPlanning />}>
          <PlanningClient />
        </Suspense>

      </div>
    </main>
  );
}