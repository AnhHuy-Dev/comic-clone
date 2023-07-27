"use client";
import getCompletedComics from "@/actions/getCompletedComics";
import { Comic } from "@/types";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ComicCard from "./ComicCard";
import Footer from "./Footer";
import PaginationComic from "./PaginationComic";
import { BsFillPatchCheckFill } from "react-icons/bs";
import getNewComics from "@/actions/getNewComics";
import getPopularComics from "@/actions/getPopularComics";
import getRecentlyComics from "@/actions/getRecentlyComics";
import getAllBoyComics from "@/actions/getAllBoyComics";
import getAllGirlComics from "@/actions/getAllGirlComics";

type Props = {
	comics: Comic[];
	totalPage: number | undefined;
};
function ComicContentPart({ title, type, children }: { title: string; type: string; children: ReactNode }) {
	const [content, setContent] = useState<Props>({
		comics: [],
		totalPage: undefined,
	});
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : 1;

	useEffect(() => {
		switch (type) {
			case "new":
				getNewComics(Number(pageCurrent)).then((data) => {
					setContent({
						comics: data.comics,
						totalPage: data.total_pages,
					});
				});
				break;
			case "popular":
				getPopularComics(Number(pageCurrent)).then((data) => {
					setContent({
						comics: data.comics,
						totalPage: data.total_pages,
					});
				});
				break;
			case "completed":
				getCompletedComics(Number(pageCurrent)).then((data) => {
					setContent({
						comics: data.comics,
						totalPage: data.total_pages,
					});
				});
				break;
			case "recently":
				getRecentlyComics(Number(pageCurrent)).then((data) => {
					setContent({
						comics: data.comics,
						totalPage: data.total_pages,
					});
				});
				break;
			case "boy":
				getAllBoyComics(Number(pageCurrent)).then((data) => {
					setContent({
						comics: data.comics,
						totalPage: data.total_pages,
					});
				});
				break;
			case "girl":
				getAllGirlComics(Number(pageCurrent)).then((data) => {
					setContent({
						comics: data.comics,
						totalPage: data.total_pages,
					});
				});
				break;
			default:
				break;
		}
	}, [pageCurrent]);

	return (
		<div className="px-3 xl:px-[124px] lg:py-2">
			<div className="flex items-center mt-12 mb-4 gap-x-3">
				{children}
				<span className="font-semibold text-xl">
					{title} Comics - Page {pageCurrent}
				</span>
			</div>
			{content.comics.length > 0 ? (
				<>
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-4">
						{content.comics.map((item) => {
							return <ComicCard key={item.id} comic={item} />;
						})}
					</div>
					<PaginationComic countPage={content.totalPage!} defaultPage={Number(pageCurrent)} />
					<Footer />
				</>
			) : (
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
		</div>
	);
}

export default ComicContentPart;
