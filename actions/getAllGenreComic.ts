"use server";
import { Comic } from "@/types";
import { Comics } from "comics-api";

type Props = {
	comics: Comic[];
	total_pages: number;
	current_page: number;
};

export default async function getAllGenreComic(type: string, page?: number): Promise<Props> {
	const comics = await Comics.getComicsByGenre(type, page).then((data) => {
		return data;
	});

	return (comics as Props) || {};
}
