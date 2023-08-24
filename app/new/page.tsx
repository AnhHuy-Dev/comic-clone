"use client";
import { getNewComics } from "@/actions/getNewComics";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { NewSignIcon } from "@/icon";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

function New() {
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : "1";
	const { data, isLoading } = useQuery({
		queryFn: () => getNewComics(pageCurrent!),
		queryKey: ["new", { pageCurrent }],
	});

	return (
		<>
			<Navbar />
			<ComicContentPart title="New" comics={data?.comics}>
				<NewSignIcon />
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

export default New;
