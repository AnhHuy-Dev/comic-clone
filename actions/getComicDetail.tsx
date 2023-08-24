import { apiUrl } from "@/constant";
import { Chapter, ComicDetail } from "@/types";

export const getComicDetail = async (id: string): Promise<ComicDetail> => {
	const res = await fetch(`${apiUrl}/comics/${id}`);

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};

export const getChapterComic = async (id: string): Promise<Chapter[]> => {
	const res = await fetch(`${apiUrl}/comics/${id}/chapters`);

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};

export const getChapterDetail = async (
	comicId: string,
	chapterId: string
): Promise<{
	chapters: Chapter[];
	comic_name: string;
	images: {
		page: number;
		src: string;
	}[];
	chapter_name: string;
}> => {
	const res = await fetch(`${apiUrl}/comics/${comicId}/chapters/${chapterId}`);

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
