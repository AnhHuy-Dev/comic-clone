import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getTrendingComic = async (): Promise<Comic[]> => {
	const res = await fetch(`${apiUrl}/trending-comics`);

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
