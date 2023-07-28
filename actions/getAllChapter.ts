"use server";
import { ComicDetail } from "@/types";
import { Comics } from "comics-api";

type Props = {
	id: number;
	name: string;
};

export default async function getAllChapter(id: string): Promise<Props[]> {
	const chapters = await Comics.getChapters(id).then((data) => {
		return data.reverse();
	});

	return chapters as Props[];
}
