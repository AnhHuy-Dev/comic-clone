import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getBoyComics = async (
	page: string
): Promise<{
	comics: Comic[];
	total_pages: number;
}> => {
	const res = await fetch(`${apiUrl}/boy-comics?page=${page}`);

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
