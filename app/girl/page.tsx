"use client";
import { getGirlComics } from "@/actions/getGirlComics";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { GirlIcon } from "@/icon";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

function Girl() {
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : "1";
	const { data, isLoading } = useQuery({
		queryFn: () => getGirlComics(pageCurrent!),
		queryKey: ["girl", { pageCurrent }],
	});
	return (
		<>
			<Navbar />
			<ComicContentPart title="Girl" type="girl" comics={data?.comics}>
				<GirlIcon className="text-emerald-500 w-7 h-7" />
			</ComicContentPart>
			{!isLoading && (
				<>
					<PaginationComic countPage={data?.totalPage!} defaultPage={Number(pageCurrent)} />
					<Footer />
				</>
			)}
		</>
	);
}

export default Girl;
