import CarouselOeuvres from "@/components/CarouselOeuvres";
import SectionReprendreLecture from "@/components/SectionReprendreLecture";
import SectionListeOeuvres from "@/components/SectionListeOeuvres";
import SectionOeuvreAleatoire from "@/components/SectionOeuvreAleatoire";
import SkeletonSectionReprendreLecture from "@/components/skeletons/SkeletonSectionReprendreLecture";
import SkeletonSectionListeOeuvres from "@/components/skeletons/SkeletonSectionListeOeuvres";
import SkeletonSectionOeuvreAleatoire from "@/components/skeletons/SkeletonSectionOeuvreAleatoire";

import { RECOMMANDATIONS } from "@/data/recommandations";
import { NOUVEAUTES } from "@/data/nouveautes";
import { PLUS_POPULAIRES } from "@/data/plusPopulaires";
import { OEUVRES_TERMINEES } from "@/data/oeuvresTerminees";
import { DERNIERS_CHAPITRES } from "@/data/derniersChapitres";
import { OEUVRES_MIEUX_NOTEES } from "@/data/oeuvresMieuxNotees";
import { VOUS_AIMERIEZ } from "@/data/vousAimeriez";
import { OEUVRES_PAUSE } from "@/data/oeuvresPause";
import { CLASSIQUES } from "@/data/classiques";
import { LECTURES_RAPIDES } from "@/data/lecturesRapides";
import { LU_EN_UNE_SOIREE } from "@/data/luEnUneSoiree";
import { COUP_DE_COEUR } from "@/data/coupDeCoeur";
import { DECOUVRIR_GENRE } from "@/data/decouvrirGenre";
import { REPRENNENT_DU_SERVICE } from "@/data/reprennentDuService";
import { PEPITES_SOUS_COTEES } from "@/data/pepitesSousCotees";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base">
      {/* Bannière */}
      <CarouselOeuvres />

      {/* Sections personnalisées — utilisateur connecté */}
      <Suspense fallback={<SkeletonSectionReprendreLecture />}>
        <SectionReprendreLecture />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Derniers chapitres"
          titreViolet="publiés"
          oeuvres={DERNIERS_CHAPITRES}
          lienVoirTout="/catalogue?tri=recent"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Parce que vous avez lu :"
          titreViolet={RECOMMANDATIONS.baseSurOeuvre}
          oeuvres={RECOMMANDATIONS.oeuvres}
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Vous pourriez aussi"
          titreViolet="aimer"
          oeuvres={VOUS_AIMERIEZ}
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Œuvres en pause"
          titreViolet="ou abandonnées"
          oeuvres={OEUVRES_PAUSE}
          lienVoirTout="/mes-lectures?statut=pause"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Nouveautés"
          titreViolet="sur AetherScan"
          oeuvres={NOUVEAUTES}
          lienVoirTout="/catalogue?tri=recent"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Les plus populaires"
          titreViolet="cette semaine"
          oeuvres={PLUS_POPULAIRES}
          lienVoirTout="/catalogue?tri=populaire"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Classiques"
          titreViolet="incontournables"
          oeuvres={CLASSIQUES}
          lienVoirTout="/catalogue?tri=note&statut=termine"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Œuvres les mieux"
          titreViolet="notées"
          oeuvres={OEUVRES_MIEUX_NOTEES}
          lienVoirTout="/catalogue?tri=note"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Œuvres"
          titreViolet="terminées"
          oeuvres={OEUVRES_TERMINEES}
          lienVoirTout="/catalogue?statut=termine"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Lectures"
          titreViolet="rapides"
          oeuvres={LECTURES_RAPIDES}
          lienVoirTout="/catalogue?statut=termine&chapitres_max=50"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Lu en"
          titreViolet="une soirée"
          oeuvres={LU_EN_UNE_SOIREE}
          lienVoirTout="/catalogue?statut=termine&chapitres_max=10"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Coup de cœur"
          titreViolet="de l'équipe"
          oeuvres={COUP_DE_COEUR}
          lienVoirTout="/catalogue?selection=coup-de-coeur"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Découvrez le genre :"
          titreViolet={DECOUVRIR_GENRE.genre}
          oeuvres={DECOUVRIR_GENRE.oeuvres}
          lienVoirTout={`/catalogue?genre=${DECOUVRIR_GENRE.genre.toLowerCase()}`}
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Reprennent"
          titreViolet="du service"
          oeuvres={REPRENNENT_DU_SERVICE}
          lienVoirTout="/catalogue?filtre=reprise"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionListeOeuvres />}>
        <SectionListeOeuvres
          titre="Pépites"
          titreViolet="sous-cotées"
          oeuvres={PEPITES_SOUS_COTEES}
          lienVoirTout="/catalogue?filtre=pepites"
        />
      </Suspense>

      <Suspense fallback={<SkeletonSectionOeuvreAleatoire />}>
        <SectionOeuvreAleatoire />
      </Suspense>
    </main>
  );
}