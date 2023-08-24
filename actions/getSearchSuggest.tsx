import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getSearchSuggest = async (value: string): Promise<Comic[]> => {
	const res = await fetch(`${apiUrl}/search-suggest?q=${value}`, { cache: "force-cache" });

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
