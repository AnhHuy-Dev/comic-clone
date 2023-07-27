"use server";
import { Comic } from "@/types";
import { Comics } from "comics-api";

type Props = {
	comics: Comic[];
	total_pages: number;
	current_page: number;
};

export default async function getAllSearchComics(title: string, page: number): Promise<Props> {
	const data = await Comics.searchComics(title, page).then((data) => {
		return data;
	});

	return (data as Props) || {};
}
