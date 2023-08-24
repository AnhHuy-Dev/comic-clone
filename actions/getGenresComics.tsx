import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getGenresComics = async (
	page: string,
	type: string
): Promise<{
	comics: Comic[];
	total_pages: number;
}> => {
	const res = await fetch(`${apiUrl}/genres/${type}?page=${page}`, { cache: "force-cache" });
	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
