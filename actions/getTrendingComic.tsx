import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getTrendingComic = async (): Promise<Comic[]> => {
	const trendingRes = await axios.get(`${apiUrl}/trending-comics`);

	return trendingRes.data.comics;
};
