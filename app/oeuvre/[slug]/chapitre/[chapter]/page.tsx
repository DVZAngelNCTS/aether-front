import { notFound } from "next/navigation";
import { ChapterReader } from "@/components/reader/chapter-reader";
import { getMockWorkBySlug, getChapterByNumber } from "@/data/reader-data";

type PageProps = {
  params: Promise<{
    slug: string;
    chapter: string;
  }>;
};

export default async function ChapterPage({ params }: PageProps) {
  const { slug, chapter } = await params;

  const work = getMockWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const requestedChapter = Number(chapter);
  const safeRequestedChapter = Number.isNaN(requestedChapter)
    ? -1
    : requestedChapter;

  const currentChapter = getChapterByNumber(work, safeRequestedChapter);

  return (
    <ChapterReader
      work={work}
      currentChapter={currentChapter}
      requestedChapter={safeRequestedChapter}
    />
  );
}