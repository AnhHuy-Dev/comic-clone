import { apiUrl } from "@/constant";
import { Comic } from "@/types";

export const getTopComics = async (
	page: string,
	tab: string,
	status: string
): Promise<{
	comics: Comic[];
	total_pages: number;
}> => {
	let res;

	if (tab === "all") {
		res = await fetch(`${apiUrl}/top?page=${page}&status=${status}`, { cache: "force-cache" });
	} else {
		res = await fetch(`${apiUrl}/top/${tab}?page=${page}&status=${status}`, { cache: "force-cache" });
	}

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
