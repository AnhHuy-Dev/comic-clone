"use client";
import { Comic } from "@/types";
import ComicCard from "./ComicCard";
import SlickSlider from "./SlickSlider";
import { BsFire } from "react-icons/bs";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

type Props = {
	comics: Comic[];
};

function PopularComics({ comics }: Props) {
	const [width, setWidth] = useState(window.innerWidth);

	const handleChange = () => {
		const widthCurrent = window.innerWidth;
		setWidth(widthCurrent);
	};

	useEffect(() => {
		window.addEventListener("resize", handleChange, { passive: true });

		return () => window.removeEventListener("resize", handleChange);
	}, []);

	return (
		<div className="px-3">
			<div className="flex justify-between px-2 py-4 xl:px-[124px] xl:py-2">
				<div className="flex items-center gap-x-4">
					<BsFire className="w-6 h-6 lg:w-8 lg:h-8" color="#10b982" />
					<h1 className="text-black text-xl font-bold lg:text-3xl">Popular Comics</h1>
				</div>
				<Link href="/">
					<button className="border-[#10b982] border-2 text-[#10b982] px-3 rounded-full py-1 text-sm md:text-lg hover:bg-[#10b982] hover:text-white hover:ring-2 hover:ring-offset-2 duration-200 transition">
						More
					</button>
				</Link>
			</div>
			<SlickSlider rows={width >= 768 ? 2 : 1}>
				{comics.map((item: Comic) => {
					return <ComicCard comic={item} key={item.id} />;
				})}
			</SlickSlider>
		</div>
	);
}

export default PopularComics;
