"use server";
import { Comic } from "@/types";
import { Comics } from "comics-api";

type Props = {
	comics: Comic[];
	total_pages: number | undefined;
	current_page: number | undefined;
};

export default async function getCompletedComics(page: number): Promise<Props> {
	const data = await Comics.getCompletedComics(page).then((data) => {
		return data;
	});

	return (data as Props) || {};
}
