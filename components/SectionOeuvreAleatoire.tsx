"use client";

import dynamic from "next/dynamic";

const OeuvreAleatoireClient = dynamic(
  () => import("./OeuvreAleatoireClient"),
  { ssr: false }
);

export default function SectionOeuvreAleatoire() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" aria-label="Découvrir une œuvre au hasard">
      <OeuvreAleatoireClient />
    </section>
  );
}