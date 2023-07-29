"use server";
import { Chapter } from "@/types";
import { Comics } from "comics-api";

type Props = {
	images: {
		page: number;
		src: string;
		backup_url_1: string;
		backup_url_2: string;
	}[];
	chapter_name: string;
	chapters: Chapter[];
	comic_name: string;
};

export default async function getSingleChapterComic(name: string, chapterId: number): Promise<Props> {
	const data = await Comics.getChapter(name, chapterId).then((data) => {
		return data;
	});

	return data as Props;
}
