"use client";

import { Chapter, ComicDetail, Genres } from "@/types";
import { useState } from "react";
import { AiFillEye, AiFillHeart, AiFillStar, AiOutlineDownload } from "react-icons/ai";
import { PiSpinnerBold } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { ClipLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";
import ChapterPage from "./ChapterPage";
import { HiOutlineBookOpen } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import { useStoreProivider } from "@/context/StoreProvider";

function ComicPageContent({ comic, chapters, id }: { comic: ComicDetail; chapters: Chapter[]; id: string }) {
	const [showMore, setShowMore] = useState(false);
	const router = useRouter();
	const url = usePathname();
	const { comicItems } = useStoreProivider();

	const handleReadNow = () => {
		const index = comicItems.findIndex((item) => item.id === id);
		if (index !== -1) {
			router.push(`${url}/${comicItems[index].chapter_id}`);
		} else {
			router.push(`${url}/${chapters[0].id}`);
		}
	};

	return (
		<div className="relative pt-12 px-4 min-h-screen">
			<div className="absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-emerald-100 -z-10"></div>
			{comic ? (
				<>
					<div className="max-w-5xl mx-auto border-4 border-transparent p-0 rounded-xl sm:grid sm:grid-cols-4 gap-6 md:p-4 md:border-white">
						<div className="aspect-[2/3] w-56 mx-auto sm:w-full rounded-lg border-2 overflow-hidden border-emerald-500 relative sm:col-span-1">
							<img src={comic?.thumbnail} alt="" className="w-full h-full" />
							<div className="flex gap-1 absolute font-bold top-0 inset-x-0 z-10 text-xs text-white">
								{comic.status === "Finished" && <span className="bg-sky-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none">End</span>}

								{comic.is_adult && <span className="bg-rose-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none">18+</span>}
							</div>
						</div>
						<div className="flex flex-col gap-y-3 sm:col-span-3 md:gap-y-1">
							<h3 className="text-2xl font-bold mt-4">{comic?.title}</h3>
							<ul className="flex gap-x-3 flex-wrap gap-y-3">
								{comic?.genres.map((item) => {
									return (
										<li
											onClick={() => router.push(`/genres?type=${item.id}`)}
											key={item.id}
											className="border-2 border-emerald-500 rounded-md px-2 hover:bg-emerald-500 text-sm font-semibold transition-all duration-200 cursor-pointer">
											{item.name}
										</li>
									);
								})}
							</ul>
							<div className="flex gap-x-3 font-semibold">
								<p>Creator:</p>
								{comic?.authors === "Updating" ? (
									<div className="flex items-center gap-x-2">
										<PiSpinnerBold color="#10b982" className="w-5 h-5" />
										Updating
									</div>
								) : (
									<span className="text-fuchsia-500">{comic?.authors}</span>
								)}
							</div>
							<div className="flex gap-x-3">
								<div className="flex items-center gap-x-1  font-semibold text-base">
									<AiFillEye className="text-sky-500 w-6 h-6" />
									<span>{comic?.total_views}</span>
								</div>
								<div className="flex items-center gap-x-1  font-semibold text-base">
									<AiFillHeart className="text-red-500 w-6 h-6" />
									<span>{comic?.followers}</span>
								</div>
								<div className="flex items-center gap-x-1  font-semibold text-base">
									<AiFillStar className="text-yellow-500 w-6 h-6" />
									<span>{comic?.rating_count}</span>
								</div>
							</div>
							<p className={twMerge(`line-clamp-5 text-justify`, showMore && `line-clamp-none`)}>{comic?.description}</p>
							<p className="font-semibold hover:underline cursor-pointer" onClick={() => setShowMore(!showMore)}>
								{showMore ? "Show less" : "Show more"}
							</p>
							<div className="pb-6 flex flex-col items-center gap-y-3 mt-4 sm:flex-row sm:gap-x-3">
								<button className="flex text-white bg-emerald-500 px-5 py-[10px] rounded-md gap-x-2 font-bold text-lg items-center cursor-pointer" onClick={handleReadNow}>
									<SlBookOpen className="w-6 h-6" />
									<span>Read Now</span>
								</button>
								<button className="flex border-emerald-500 border-2 px-5 py-2 rounded-md gap-x-2 font-bold text-lg items-center text-emerald-500 cursor-pointer">
									<AiOutlineDownload className=" w-6 h-6" />
									<span>Download</span>
								</button>
							</div>
						</div>
					</div>
					<div className="max-w-5xl mx-auto">
						<div className="flex gap-x-3 pt-2 pb-2 border-b-2 ">
							<div className={twMerge(`flex items-center gap-x-2 font-semibold text-lg  cursor-pointer text-emerald-500`)}>
								<HiOutlineBookOpen className="w-6 h-6" />
								<span>Chapters</span>
							</div>
						</div>
						<div className="mt-4">
							<ChapterPage chapters={chapters} />{" "}
						</div>
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

export default ComicPageContent;
