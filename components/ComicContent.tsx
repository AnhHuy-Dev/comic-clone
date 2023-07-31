"use client";
import { Comic } from "@/types";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";
import ComicCard from "./ComicCard";
import SlickSlider from "./SlickSlider";

type Props = {
	comics: Comic[];
	title?: string;
	children?: ReactNode;
	trending?: boolean;
};

function ComicContent({ comics, title, children, trending = false }: Props) {
	const [width, setWidth] = useState(0);

	const handleChange = () => {
		const widthCurrent = window.innerWidth;
		setWidth(widthCurrent);
	};

	useEffect(() => {
		if (typeof window !== "undefined") setWidth(window.innerWidth);
		window.addEventListener("resize", handleChange, { passive: true });

		return () => window.removeEventListener("resize", handleChange);
	}, []);

	return (
		<div className={twMerge(`px-3`, trending && `pt-4`)}>
			{!trending && (
				<div className="flex justify-between px-2 py-4 xl:px-[124px] xl:py-2">
					<div className="flex items-center gap-x-4">
						{children}
						<h1 className="text-black text-xl font-bold lg:text-3xl">{title!?.charAt(0).toUpperCase() + title?.slice(1)} Comics</h1>
					</div>
					<Link href={`/${title}`}>
						<button className="border-[#10b982] border-2 text-[#10b982] px-3 rounded-full py-1 text-sm md:text-lg hover:bg-[#10b982] hover:text-white hover:ring-2 hover:ring-offset-2 duration-200 transition">
							More
						</button>
					</Link>
				</div>
			)}
			<SlickSlider autoplay={trending} infinite={trending} rows={!trending && width >= 768 ? 2 : 1}>
				{comics &&
					comics.map((item: Comic) => {
						return <ComicCard comic={item} key={item.id} trending={trending} />;
					})}
			</SlickSlider>
			{!comics && (
				// <BeatLoader
				// 	color="green"
				// 	cssOverride={{
				// 		margin: "auto",
				// 	}}
				// />

				<div className="grid grid-cols-2 min-[575px]:grid-cols-3 min-[775px]:grid-cols-4 min-[1025px]:grid-cols-5 px-2 py-4 xl:px-[124px] xl:py-2">
					<div className="swiper-slide w-[242px] px-1 py-1" data-swiper-slide-index="4">
						<div className="overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer">
							<div className="relative">
								<div className="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none bg-black/20"></div>
							</div>
						</div>
					</div>
					<div className="swiper-slide w-[242px] px-1 py-1" data-swiper-slide-index="4">
						<div className="overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer">
							<div className="relative">
								<div className="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none bg-black/20"></div>
							</div>
						</div>
					</div>
					<div className="swiper-slide w-[242px] px-1 py-1" data-swiper-slide-index="4">
						<div className="overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer hidden min-[575px]:block">
							<div className="relative">
								<div className="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none bg-black/20"></div>
							</div>
						</div>
					</div>
					<div className="swiper-slide w-[242px] px-1 py-1" data-swiper-slide-index="4">
						<div className="overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer hidden min-[775px]:block">
							<div className="relative">
								<div className="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none bg-black/20"></div>
							</div>
						</div>
					</div>
					<div className="swiper-slide w-[242px] px-1 py-1" data-swiper-slide-index="4">
						<div className="overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer hidden min-[1025px]:block">
							<div className="relative">
								<div className="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none bg-black/20"></div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ComicContent;
