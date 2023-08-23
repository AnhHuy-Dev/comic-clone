import { apiUrl } from "@/constant";
import { Comic, Genres } from "@/types";
import axios from "axios";

export const getAllGenres = async (): Promise<Genres[]> => {
	const res = await axios.get(`${apiUrl}/genres`);

	return res.data;
};
