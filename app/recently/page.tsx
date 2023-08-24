"use client";

import { getPopularComics } from "@/actions/getPopularComics";
import { getRecentlyComic } from "@/actions/getRecentlyComic";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { RecentlyIcon } from "@/icon";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

function Recently() {
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : "1";
	const { data, isLoading } = useQuery({
		queryFn: () => getRecentlyComic(pageCurrent!),
		queryKey: ["recently", { pageCurrent }],
	});
	return (
		<>
			<Navbar />
			<ComicContentPart title="Recently" type="recently" comics={data?.comics}>
				<RecentlyIcon className="text-emerald-500 w-7 h-7" />
			</ComicContentPart>
			{!isLoading && (
				<>
					<PaginationComic countPage={data?.total_pages!} defaultPage={Number(pageCurrent)} />
					<Footer />
				</>
			)}
		</>
	);
}

export default Recently;
