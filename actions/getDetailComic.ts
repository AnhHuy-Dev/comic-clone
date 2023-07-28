"use server";
import { ComicDetail } from "@/types";
import { Comics } from "comics-api";

export default async function getDetailComic(id: string): Promise<ComicDetail> {
	const comics = await Comics.getComicDetail(id).then((data) => {
		return data;
	});

	return comics as ComicDetail;
}
