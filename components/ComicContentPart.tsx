"use client";
import { Comic } from "@/types";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ComicCard from "./ComicCard";
import Footer from "./Footer";
import PaginationComic from "./PaginationComic";
import { BsFillPatchCheckFill } from "react-icons/bs";
import axios from "axios";
import { apiUrl } from "@/constant";

type Props = {
	comics: Comic[];
	totalPage: number | undefined;
};
function ComicContentPart({ title, type, children, comics }: { title: string; type: string; children: ReactNode; comics?: Comic[] }) {
	const [content, setContent] = useState<Props>({
		comics: [],
		totalPage: undefined,
	});
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : 1;

	useEffect(() => {
		const fetchData = async () => {
			let res;
			switch (type) {
				case "new":
					res = await axios.get(`${apiUrl}/new-comics`, {
						params: {
							page: pageCurrent,
						},
					});
					break;
				case "popular":
					res = await axios.get(`${apiUrl}/recommend-comics`);
					break;
				case "completed":
					res = await axios.get(`${apiUrl}/completed-comics`, {
						params: {
							page: pageCurrent,
						},
					});
					break;
				case "recently":
					res = await axios.get(`${apiUrl}/recent-update-comics`, {
						params: {
							page: pageCurrent,
						},
					});
					break;
				case "boy":
					res = await axios.get(`${apiUrl}/boy-comics`, {
						params: {
							page: pageCurrent,
						},
					});
					break;
				case "girl":
					res = await axios.get(`${apiUrl}/girl-comics`, {
						params: {
							page: pageCurrent,
						},
					});
					break;
				default:
					break;
			}
			if (type === "popular") {
				setContent({
					comics: res?.data,
					totalPage: 1,
				});
				return;
			}
			setContent({
				comics: res?.data.comics,
				totalPage: res?.data.total_pages,
			});
		};
		fetchData();
	}, [pageCurrent]);

	return (
		<div className="px-3 xl:px-[220px] lg:py-2">
			<div className="flex items-center mt-12 mb-4 gap-x-3">
				{children}
				<span className="font-semibold text-xl">
					{title} Comics - Page {pageCurrent}
				</span>
			</div>
			{comics ? (
				<>
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-4">
						{comics!.map((item) => {
							return <ComicCard key={item.id} comic={item} />;
						})}
					</div>
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
