import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getRecommendComics = async (
	page: string
): Promise<{
	comics: Comic[];
	total_pages: number;
}> => {
	const res = await fetch(`${apiUrl}/recommend-comics`);

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
