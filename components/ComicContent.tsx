"use client";
import { Comic } from "@/types";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
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
						<h1 className="text-black text-xl font-bold lg:text-3xl">{title}</h1>
					</div>
					<Link href="/">
						<button className="border-[#10b982] border-2 text-[#10b982] px-3 rounded-full py-1 text-sm md:text-lg hover:bg-[#10b982] hover:text-white hover:ring-2 hover:ring-offset-2 duration-200 transition">
							More
						</button>
					</Link>
				</div>
			)}
			<SlickSlider autoplay={trending} infinite={trending} rows={!trending && width >= 768 ? 2 : 1}>
				{comics.map((item: Comic) => {
					return <ComicCard comic={item} key={item.id} trending={trending} />;
				})}
			</SlickSlider>
		</div>
	);
}

export default ComicContent;
