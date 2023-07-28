"use server";
import { ComicDetail, Comment } from "@/types";
import { Comics } from "comics-api";

type Props = {
	comments: Comment[];
	current_page: number;
	total_comments: number;
	total_pages: number;
};

export default async function getComicComment(name: string, page?: number, chapterId?: number): Promise<Props> {
	const data = await Comics.getComments(name, page, chapterId).then((data) => {
		return data;
	});

	return data as Props;
}
