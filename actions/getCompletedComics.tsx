import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getCompletedComics = async (
	page: string
): Promise<{
	comics: Comic[];
	total_pages: number;
}> => {
	const res = await fetch(`${apiUrl}/completed-comics?page=${page}`, { cache: "force-cache" });

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
