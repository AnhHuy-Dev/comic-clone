"use server";

import { Comic } from "@/types";
import { Comics } from "comics-api";

type Props = {
	comics: Comic[];
	total_pages: number | undefined;
	current_page: number | undefined;
};

export default async function getTopComics(status?: string, page?: number, type?: string): Promise<Props> {
	let data: Props = {
		comics: [],
		total_pages: undefined,
		current_page: undefined,
	};

	switch (type) {
		case "all":
			data = await Comics.getTopAllComics(status === "all" ? "all" : status === "completed" ? "completed" : "updating", page).then((data) => {
				return data;
			});
			break;
		case "daily":
			data = await Comics.getTopDailyComics(status === "all" ? "all" : status === "completed" ? "completed" : "updating", page).then((data) => {
				return data;
			});
			break;
		case "weekly":
			data = await Comics.getTopWeeklyComics(status === "all" ? "all" : status === "completed" ? "completed" : "updating", page).then((data) => {
				return data;
			});
			break;
		case "monthly":
			data = await Comics.getTopMonthlyComics(status === "all" ? "all" : status === "completed" ? "completed" : "updating", page).then((data) => {
				return data;
			});
			break;
		case "chapter":
			data = await Comics.getTopChapterComics(status === "all" ? "all" : status === "completed" ? "completed" : "updating", page).then((data) => {
				return data;
			});
			break;
		case "follow":
			data = await Comics.getTopFollowComics(status === "all" ? "all" : status === "completed" ? "completed" : "updating", page).then((data) => {
				return data;
			});
			break;
		case "comment":
			data = await Comics.getTopCommentComics(status === "all" ? "all" : status === "completed" ? "completed" : "updating", page).then((data) => {
				return data;
			});
			break;
		default:
			break;
	}

	return (data as Props) || {};
}
