"use client";
import PaginationComic from "@/components/PaginationComic";
import { useStoreProivider } from "@/context/StoreProvider";
import { HistoryComic } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsFileText, BsTrash } from "react-icons/bs";
import { PiSpinnerBold } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { twMerge } from "tailwind-merge";

function HistoryComic() {
	const { removeComic, comicItems } = useStoreProivider();
	const router = useRouter();
	const searchParams = useSearchParams();
	const pageCurrent = searchParams.get("page") === null ? 1 : searchParams.get("page");

	const [comicsRender, setComicsRender] = useState<HistoryComic[]>([]);

	const handleContinueRead = (id: string) => {
		const index = comicItems.findIndex((item) => item.id === id);
		router.push(`/comic/${comicItems[index].id}/${comicItems[index].chapter_id}`);
	};

	useEffect(() => {
		setComicsRender(comicItems.slice(5 * (Number(pageCurrent) - 1), 5 * Number(pageCurrent)));
	}, [pageCurrent, router, comicItems.length]);

	return (
		<div className="px-3 xl:px-[220px] lg:py-2">
			<div className="flex items-center mt-12 mb-4 gap-x-3">
				<BiTimeFive color="green" className="w-8 h-8" />
				<span className="text-xl font-bold md:text-2xl">Recently Read</span>
			</div>

			<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-4">
				{comicItems &&
					comicItems.length > 0 &&
					comicsRender.map((item, index) => {
						return (
							<div key={index} className="swiper-slide w-[242px] px-1 py-1" data-swiper-slide-index="4">
								<div className="overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer">
									<div className="relative">
										<img
											src={item?.thumbnail}
											alt={item?.title}
											className="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none"
											loading="lazy"
										/>
									</div>
									<div className="absolute top-1/2 bottom-0 inset-x-0 flex flex-col justify-end px-2 sm:px-4 py-2 bg-gradient-to-b from-transparent to-black">
										<h5 className="font-bold leading-5 text-lg text-white group-hover:text-emerald-400 duration-200 xs:h-[100px] md:line-clamp-1 lg:line-clamp-2">
											<abbr title={item?.title} className="no-underline">
												{item?.title}
											</abbr>
										</h5>
										<span className={twMerge(`text-sm text-gray-300 truncate font-semibold py-1 xs:pt-6`, !history && `border-t-[1px] border-[#666768] pt-0`)}>
											{item?.authors === "Updating" ? (
												<div className="flex items-center gap-x-2">
													<PiSpinnerBold color="#10b982" className="w-5 h-5" />
													Updating
												</div>
											) : (
												item.authors
											)}
										</span>
										<div className="text-gray-300">
											<div className="text-sm font-semibold flex items-center gap-0.5 mb-1 text-fuchsia-400">
												<BsFileText name="ph:read-cv-logo-fill" size="18" />
												{item?.last_reading!}
											</div>
											<div className="flex items-center gap-1 text-sm text-white pt-2">
												<button className="bg-sky-500 w-full px-2 py-1 rounded-sm flex justify-center items-center gap-2" onClick={() => handleContinueRead(item.id)}>
													<SlBookOpen name="system-uicons:book-text" size="16" />
													Continue
												</button>
												<button className="bg-rose-500 px-2 py-1 rounded-sm" onClick={() => removeComic(item.id)}>
													<BsTrash name="ion:trash" size="18" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>

			{comicItems.length > 0 && <PaginationComic countPage={Math.ceil(comicItems.length / 6)} defaultPage={Number(pageCurrent)} />}

			{comicItems.length === 0 && <h3 className="w-full text-2xl mt-8 font-bold text-gray-600 text-center">No History</h3>}
		</div>
	);
}

export default HistoryComic;
