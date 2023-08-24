"use client";
import { getGirlComics } from "@/actions/getGirlComics";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { GirlIcon } from "@/icon";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

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
			<ComicContentPart title="Girl" comics={data?.comics}>
				<GirlIcon className="text-emerald-500 w-7 h-7" />
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

export default Girl;
