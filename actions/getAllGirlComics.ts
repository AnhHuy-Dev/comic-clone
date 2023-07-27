"use server";
import { Comic } from "@/types";
import { Comics } from "comics-api";

type Props = {
	comics: Comic[];
	total_pages: number | undefined;
	current_page: number | undefined;
};

export default async function getAllGirlComics(page: number): Promise<Props> {
	const data = await Comics.getGirlComics(page).then((data) => {
		return data;
	});

	return (data as Props) || {};
}
