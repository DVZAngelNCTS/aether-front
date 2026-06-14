export type ChapterImage = {
  id: string;
  url: string;
  alt: string;
};

export type Chapter = {
  id: string;
  number: number;
  title: string;
  images: ChapterImage[];
};

export type Work = {
  slug: string;
  title: string;
  cover: string;
  chapters: Chapter[];
};

const makeImages = (chapterNumber: number, count: number) =>
  Array.from({ length: count }, (_, index) => ({
    id: `chapter-${chapterNumber}-image-${index + 1}`,
    url: `https://placehold.co/900x1400/111827/E5E7EB?text=Shadow+Realm+-+Chapitre+${chapterNumber}+%2F+Page+${index + 1}`,
    alt: `Shadow Realm - chapitre ${chapterNumber} - image ${index + 1}`,
  }));

export const MOCK_WORKS: Work[] = [
  {
    slug: 'shadow-realm',
    title: 'Shadow Realm',
    cover: 'https://placehold.co/600x800/0F172A/E2E8F0?text=Shadow+Realm',
    chapters: [
      {
        id: 'shadow-realm-1',
        number: 1,
        title: 'Le portail noir',
        images: makeImages(1, 8),
      },
      {
        id: 'shadow-realm-2',
        number: 2,
        title: 'Les cendres du palais',
        images: makeImages(2, 9),
      },
      {
        id: 'shadow-realm-3',
        number: 3,
        title: 'Le veilleur sans visage',
        images: makeImages(3, 7),
      },
      {
        id: 'shadow-realm-4',
        number: 4,
        title: 'La porte des murmures',
        images: makeImages(4, 10),
      },
      {
        id: 'shadow-realm-5',
        number: 5,
        title: 'La chute des ombres',
        images: makeImages(5, 8),
      },
    ],
  },
];

export function getMockWorkBySlug(slug: string) {
  return MOCK_WORKS.find((work) => work.slug === slug) ?? null;
}

export function getChapterByNumber(work: Work, chapterNumber: number) {
  return work.chapters.find((chapter) => chapter.number === chapterNumber) ?? null;
}