"use server";
import { Comic } from "@/types";
import { Comics } from "comics-api";

export default async function getSearchSuggestComics(title: string): Promise<Comic[]> {
	const comics = await Comics.getSearchSuggest(title).then((data) => {
		return data;
	});

	return (comics as Comic[]) || {};
}
