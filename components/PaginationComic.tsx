"use client";
import Pagination from "@mui/material/Pagination";
import { getURL } from "next/dist/shared/lib/utils";
import { useRouter } from "next/navigation";
import qs from "query-string";

export default function PaginationComic({ countPage, defaultPage }: { countPage: number; defaultPage: number }) {
	const router = useRouter();
	const url = getURL();

	const handlePagination = (page: number) => {
		const newUrl = qs.stringifyUrl({
			url: url,
			query: {
				page: page,
			},
		});
		router.push(newUrl);
		router.refresh();
	};

	return (
		<div className="flex justify-center py-8">
			<Pagination count={countPage} page={defaultPage} showFirstButton showLastButton className="w-full" onChange={(event, page) => handlePagination(page)} />
		</div>
	);
}
