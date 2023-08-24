import { apiUrl } from "@/constant";
import { Comic, Genres } from "@/types";

export const getAllGenres = async (): Promise<Genres[]> => {
	const res = await fetch(`${apiUrl}/genres`, { cache: "force-cache" });
	const result = res.json().then((data) => {
		return data;
	});

	return result;
};
