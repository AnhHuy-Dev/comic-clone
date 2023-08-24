import { apiUrl } from "@/constant";
import { Comic } from "@/types";
import axios from "axios";

export const getPopularComics = async (
	page: string
): Promise<{
	comics: Comic[];
	totalPage: number;
}> => {
	const res = await fetch(`${apiUrl}/trending-comics?page=${page}`);

	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
