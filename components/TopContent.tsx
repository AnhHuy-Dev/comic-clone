"use client";
import { ChapterIcon, FollowIcon, TopDailyIcon, TopMonthlyIcon, TopWeeklyIcon } from "@/icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoMdSnow } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { BiComment } from "react-icons/bi";
import getTopComics from "@/actions/getTopComics";
import { useEffect, useState } from "react";
import { Comic } from "@/types";
import ComicCard from "./ComicCard";
import PaginationComic from "./PaginationComic";
import Footer from "./Footer";
import { ClipLoader } from "react-spinners";
import qs from "query-string";
import { apiUrl } from "@/constant";
import axios from "axios";

type Props = {
	comics: Comic[];
	totalPage: number | undefined;
};

function TopContent() {
	const searhParam = useSearchParams();
	const tab = searhParam.get("tab") ? searhParam.get("tab") : "all";
	const statusCurrent = searhParam.get("status") ? searhParam.get("status") : "all";
	const pageCurrent = searhParam.get("page") ? searhParam.get("page") : 1;
	const router = useRouter();
	const [content, setContent] = useState<Props>({
		comics: [],
		totalPage: undefined,
	});

	useEffect(() => {
		const fetchData = async () => {
			let res;
			if (tab === "all") {
				res = await axios.get(`${apiUrl}/top`, {
					params: {
						page: pageCurrent,
						status: statusCurrent,
					},
				});
			} else {
				res = await axios.get(`${apiUrl}/top/${tab}`, {
					params: {
						page: pageCurrent,
						status: statusCurrent,
					},
				});
			}
			setContent({
				comics: res.data.comics,
				totalPage: res.data.total_pages,
			});
		};
		fetchData();
	}, [tab, statusCurrent, pageCurrent]);

	const url = usePathname();

	const handleChangeType = (type: string) => {
		const newUrl = qs.stringifyUrl({
			url: url,
			query: {
				tab: type,
			},
		});
		router.push(newUrl);
		router.refresh();
	};

	const handleChangeStatus = (status: string) => {
		const newUrl = qs.stringifyUrl({
			url: url,
			query: {
				tab: tab,
				status: status,
			},
		});
		router.push(newUrl);
		router.refresh();
	};

	return (
		<div className="px-3  xl:px-[124px] lg:py-2">
			<div className="mt-5 flex flex-wrap gap-3">
				<div className={twMerge(`flex items-center gap-x-2  w-max py-2 px-2  rounded-md cursor-pointer`, tab === "all" && `bg-emerald-500 text-white`)} onClick={() => handleChangeType("all")}>
					<IoMdSnow className="w-6 h-6" color={tab === "all" ? "white" : "black"} />
					Top Comics
				</div>
				<div
					className={twMerge(`flex items-center gap-x-2  w-max py-2 px-2  rounded-md cursor-pointer`, tab === "daily" && `bg-emerald-500 text-white`)}
					onClick={() => handleChangeType("daily")}>
					<TopDailyIcon className="w-6 h-6" />
					Top Daily
				</div>
				<div
					className={twMerge(`flex items-center gap-x-2  w-max py-2 px-2  rounded-md cursor-pointer`, tab === "weekly" && `bg-emerald-500 text-white`)}
					onClick={() => handleChangeType("weekly")}>
					<TopWeeklyIcon className="w-6 h-6" />
					Top Weekly
				</div>
				<div
					className={twMerge(`flex items-center gap-x-2  w-max py-2 px-2  rounded-md cursor-pointer`, tab === "monthly" && `bg-emerald-500 text-white`)}
					onClick={() => handleChangeType("monthly")}>
					<TopMonthlyIcon className="w-6 h-6" />
					Top Monthly
				</div>
				<div
					className={twMerge(`flex items-center gap-x-2  w-max py-2 px-2  rounded-md cursor-pointer`, tab === "chapter" && `bg-emerald-500 text-white`)}
					onClick={() => handleChangeType("chapter")}>
					<ChapterIcon className="w-6 h-6" />
					Top Chapter
				</div>
				<div
					className={twMerge(`flex items-center gap-x-2  w-max py-2 px-2  rounded-md cursor-pointer`, tab === "follow" && `bg-emerald-500 text-white`)}
					onClick={() => handleChangeType("follow")}>
					<FollowIcon className="w-6 h-6" />
					Top Follow
				</div>
				<div
					className={twMerge(`flex items-center gap-x-2  w-max py-2 px-2  rounded-md cursor-pointer`, tab === "comment" && `bg-emerald-500 text-white`)}
					onClick={() => handleChangeType("comment")}>
					<BiComment className="w-6 h-6" color={tab === "comment" ? "white" : "black"} />
					Top Comment
				</div>
			</div>
			<div className="flex gap-x-3 mt-4 md:mt-6 font-semibold">
				<span
					className={twMerge(`border border-gray-400 px-5 py-2 rounded-md cursor-pointer`, statusCurrent === "all" && `border-emerald-500 border text-emerald-500`)}
					onClick={() => handleChangeStatus("all")}>
					All
				</span>
				<span
					className={twMerge(`border border-gray-400 px-3 py-2 rounded-md cursor-pointer`, statusCurrent === "completed" && `border-emerald-500 border text-emerald-500`)}
					onClick={() => handleChangeStatus("completed")}>
					Compeleted
				</span>
				<span
					className={twMerge(`border border-gray-400 px-3 py-2 rounded-md cursor-pointer`, statusCurrent === "updating" && `border-emerald-500 border text-emerald-500`)}
					onClick={() => handleChangeStatus("updating")}>
					Updating
				</span>
			</div>
			{content.comics.length > 0 ? (
				<>
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-4">
						{content.comics.map((item) => {
							return <ComicCard key={item.id} comic={item} />;
						})}
					</div>
					<PaginationComic
						countPage={content.totalPage!}
						defaultPage={Number(pageCurrent)}
						top={{
							tab: tab!,
							status: statusCurrent!,
						}}
					/>
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

export default TopContent;
