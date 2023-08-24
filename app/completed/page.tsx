"use client";
import { getCompletedComics } from "@/actions/getCompletedComics";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { useSearchParams } from "next/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";
function Completed() {
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : "1";
	const { data, isLoading } = useQuery({
		queryFn: () => getCompletedComics(pageCurrent!),
		queryKey: ["completed", { pageCurrent }],
	});

	return (
		<>
			<Navbar />
			<ComicContentPart title="Completed" comics={data?.comics}>
				<BsFillPatchCheckFill className="w-7 h-7" color="#10B981" />
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

export default Completed;
