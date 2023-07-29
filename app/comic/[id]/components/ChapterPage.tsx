"use client";
import { Chapter } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function ChapterPage({ chapters }: { chapters: Chapter[] }) {
	const allChap = Math.ceil(chapters?.length / 50);
	const [currentChap, setCurrentChap] = useState(0);
	let arrChap = [];
	const router = useRouter();
	const url = usePathname();

	for (let i = 0; i < allChap; i++) {
		arrChap.push(i);
	}

	const handleReadChap = (chap: number) => {
		router.push(`${url}/${chap}`);
	};
	return (
		<div className="max-w-5xl mx-auto">
			<div className="flex items-center gap-3 text-sm py-1 flex-wrap">
				{arrChap.map((item, index) => {
					return (
						<button key={index} onClick={() => setCurrentChap(item)} className={twMerge(`px-2 py-0.5 rounded-full bg-gray-100`, currentChap === item && `bg-emerald-100 text-emerald-500`)}>
							{item * 50 + 1} - {(item + 1) * 50 > chapters?.length ? chapters?.length : (item + 1) * 50}
						</button>
					);
				})}
			</div>
			<ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
				{chapters?.slice(currentChap * 50, (currentChap + 1) * 50).map((item) => {
					return (
						<li onClick={() => handleReadChap(item.id)} key={item.id} className="border rounded px-3 py-2 truncate hover:bg-emerald-50 duration-100">
							{item.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ChapterPage;
