import { notFound } from 'next/navigation';
import { ChapterReader } from '@/components/reader/chapter-reader';
import { getMockWorkBySlug, getChapterByNumber } from '@/data/reader-data';

type PageProps = {
  params: {
    slug: string;
    chapter: string;
  };
};

export default function ChapterPage({ params }: PageProps) {
  const work = getMockWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  const requestedChapter = Number(params.chapter);
  const safeRequestedChapter = Number.isNaN(requestedChapter) ? -1 : requestedChapter;
  const currentChapter = getChapterByNumber(work, safeRequestedChapter);

  return (
    <ChapterReader
      work={work}
      currentChapter={currentChapter}
      requestedChapter={safeRequestedChapter}
    />
  );
}