"use client";
import { getPopularComics } from "@/actions/getPopularComics";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { useSearchParams } from "next/navigation";
import { BsFire } from "react-icons/bs";
import { useQuery } from "react-query";

function Popular() {
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : "1";
	const { data, isLoading } = useQuery({
		queryFn: () => getPopularComics(pageCurrent!),
		queryKey: ["popular", { pageCurrent }],
	});

	return (
		<>
			<Navbar />
			<ComicContentPart title="Popular" type="popular" comics={data?.comics}>
				<BsFire className="w-7 h-7" color="#10B981" />
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

export default Popular;
