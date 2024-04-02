import {apiUrl} from "@/constant";
import {Comic} from "@/types";

export const getRecentlyComic = async (
    page: string
): Promise<{
    comics: Comic[];
    total_pages: number;
}> => {
    const res = await fetch(`${apiUrl}/recent-update-comics?page=${page}`, {cache: "force-cache"});

    const result = res.json().then((data) => {
        return data;
    });

    return result;
};