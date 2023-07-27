"use client";
import Pagination from "@mui/material/Pagination";
import { getURL } from "next/dist/shared/lib/utils";
import { useRouter } from "next/navigation";

export default function PaginationComic({ countPage, defaultPage }: { countPage: number; defaultPage: number }) {
	const router = useRouter();
	const url = getURL();

	const handlePagination = (page: number) => {
		const newUrl = url.split("&")[0];
		router.push(`${newUrl}&page=${page}`);
		router.refresh();
	};

	return (
		<div className="flex justify-center py-8">
			<Pagination count={countPage} page={defaultPage} showFirstButton showLastButton className="w-full" onChange={(event, page) => handlePagination(page)} />
		</div>
	);
}
