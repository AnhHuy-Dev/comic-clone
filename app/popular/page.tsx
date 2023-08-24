"use client";
import { getPopularComics } from "@/actions/getPopularComics";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { useSearchParams } from "next/navigation";
import { BsFire } from "react-icons/bs";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

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
			<ComicContentPart title="Popular" comics={data?.comics}>
				<BsFire className="w-7 h-7" color="#10B981" />
			</ComicContentPart>
			{isLoading && (
				<ClipLoader
					cssOverride={{
						position: "fixed",
						top: "50%",
						left: "50%",
						width: "50px",
						height: "50px",
						borderWidth: "4px",
					}}
				/>
			)}
			{!isLoading && (
				<>
					<PaginationComic countPage={data?.total_pages!} defaultPage={Number(pageCurrent)} />
					<Footer />
				</>
			)}
		</>
	);
}

export default Popular;
