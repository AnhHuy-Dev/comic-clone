import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getBoyComics = async (
	page: string
): Promise<{
	comics: Comic[];
	totalPage: number;
}> => {
	const res = await axios.get(`${apiUrl}/boy-comics`, {
		params: {
			page: page,
		},
	});

	return {
		comics: res.data.comics,
		totalPage: res.data.total_pages,
	};
};
