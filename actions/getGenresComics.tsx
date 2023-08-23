import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getGenresComics = async (
	page: string,
	type: string
): Promise<{
	comics: Comic[];
	totalPage: number;
}> => {
	const res = await axios.get(`${apiUrl}/genres/${type}`, {
		params: {
			page: page,
		},
	});

	return {
		comics: res.data.comics,
		totalPage: res.data.total_pages,
	};
};
