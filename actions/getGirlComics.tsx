import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getGirlComics = async (
	page: string
): Promise<{
	comics: Comic[];
	total_pages: number;
}> => {
	const res = await fetch(`${apiUrl}/girl-comics?page=${page}`, { cache: "force-cache" });

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
