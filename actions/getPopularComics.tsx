import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getPopularComics = async (
	page: string
): Promise<{
	comics: Comic[];
	totalPage: number;
}> => {
	const res = await axios.get(`${apiUrl}/trending-comics`, {
		params: {
			page: page,
		},
	});

	return {
		comics: res.data.comics,
		totalPage: res.data.total_pages,
	};
};
