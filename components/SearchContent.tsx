"use client";

import { Comic, Genres } from "@/types";
import { AiOutlineRight } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { ClipLoader } from "react-spinners";
import Footer from "./Footer";
import PaginationComic from "./PaginationComic";
import Link from "next/link";
import axios from "axios";
import { apiUrl } from "@/constant";

type Props = {
	comics: Comic[];
	totalPage: number | undefined;
};

function SearchContent() {
	const searchParam = useSearchParams();
	const title = searchParam.get("title");
	const [content, setContent] = useState<Props>({
		comics: [],
		totalPage: undefined,
	});

	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : 1;

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`${apiUrl}/search`, {
				params: {
					q: title,
					page: pageCurrent,
				},
			});
			setContent({
				comics: res.data.comics,
				totalPage: res.data.total_pages,
			});
		};
		fetchData();
	}, [title, pageCurrent]);

	return (
		<div className="max-w-6xl mx-auto min-h-screen py-6 px-3">
			<div className="flex items-center flex-wrap gap-1 text-gray-500 font-bold text-lg">
				<Link href="/">Home</Link>
				<AiOutlineRight className="inline-block" />
				Search result
				<AiOutlineRight className="inline-block" />
				<strong className="text-emerald-500">{title}</strong>
			</div>
			{content.comics.length > 0 ? (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
						{content.comics.map((item: any, index: number) => {
							return (
								<div key={index} className="flex flex-col sm:flex-row gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4 my-2">
									<img src={item?.thumbnail} className="rounded aspect-[2/3] w-44 mx-auto sm:w-auto sm:h-36 border border-emerald-500 object-cover" alt={item?.title} />
									<div>
										<h1 className="text-lg text-black leading-5 font-bold">
											{item.title} <span className="font-semibold text-sm text-gray-500">(Chap 12)</span>
										</h1>
										<div className="flex items-center gap-x-2 text-emerald-500 font-semibold">
											{item?.authors === "Updating" ? (
												<div className="flex items-center gap-x-2">
													<PiSpinnerBold color="#10b982" className="w-5 h-5" />
													Updating
												</div>
											) : (
												item?.authors
											)}
										</div>
										<p className="text-sm line-clamp-2 text-gray-600">{item.short_description}</p>
										<ul className="text-sm flex items-center flex-wrap gap-2 mt-1">
											{typeof item.genres === "object" &&
												item.genres.map((item: Genres, index: number) => {
													return (
														<li key={index} className="bg-cyan-100 text-cyan-800 text-xs px-2.5 py-0.5 rounded-full font-semibold">
															{item.name}
														</li>
													);
												})}
										</ul>
									</div>
								</div>
							);
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

export default SearchContent;
