"use client";
import Pagination from "@mui/material/Pagination";
import { usePathname, useRouter } from "next/navigation";
import qs from "query-string";

export default function PaginationComic({
	countPage,
	defaultPage,
	type,
	top,
	title,
}: {
	countPage: number;
	defaultPage: number;
	type?: string;
	top?: {
		status: string;
		tab: string;
	};
	title?: string;
}) {
	const router = useRouter();
	const url = usePathname();

	const handlePagination = (page: number) => {
		const newUrl = qs.stringifyUrl({
			url: url,
			query: {
				tab: top?.tab,
				status: top?.status,
				type: type,
				page: page,
				title: title,
			},
		});
		router.push(newUrl);
		router.refresh();
	};

	return (
		<div className="flex justify-center py-8">
			<Pagination count={countPage} page={defaultPage} showFirstButton showLastButton className="w-ful" onChange={(event, page) => handlePagination(page)} />
		</div>
	);
}
