"use client";
import { getNewComics } from "@/actions/getNewComics";
import ComicContentPart from "@/components/ComicContentPart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaginationComic from "@/components/PaginationComic";
import { NewSignIcon } from "@/icon";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

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
			<ComicContentPart title="New" type="new" comics={data?.comics}>
				<NewSignIcon />
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

export default New;
