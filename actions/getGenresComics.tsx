import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getGenresComics = async (
	page: string,
	type: string
): Promise<{
	comics: Comic[];
	totalPage: number;
}> => {
	const res = await fetch(`${apiUrl}/genres/${type}?page=${page}`, { cache: "force-cache" });
	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
