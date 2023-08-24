import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getAllSearch = async (
	page: string,
	value: string
): Promise<{
	comics: Comic[];
	total_pages: number;
}> => {
	const res = await fetch(`${apiUrl}/search?q=${value}&page=${page}`, { cache: "force-cache" });

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
