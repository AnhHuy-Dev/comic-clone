import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getTopComics = async (
	page: string,
	tab: string,
	status: string
): Promise<{
	comics: Comic[];
	totalPage: number;
}> => {
	let res;
	if (tab === "all") {
		res = await axios.get(`${apiUrl}/top`, {
			params: {
				page: page,
				status: status,
			},
		});
	} else {
		res = await axios.get(`${apiUrl}/top/${tab}`, {
			params: {
				page: page,
				status: status,
			},
		});
	}

	return {
		comics: res.data.comics,
		totalPage: res.data.total_pages,
	};
};
