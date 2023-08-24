"use client";
import { Comic } from "@/types";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import ComicCard from "./ComicCard";

function ComicContentPart({ title, children, comics }: { title: string; children: ReactNode; comics?: Comic[] }) {
	const searchParam = useSearchParams();
	const pageCurrent = searchParam.get("page") ? searchParam.get("page") : 1;

	return (
		<div className="px-3 xl:px-[220px] lg:py-2">
			<div className="flex items-center mt-12 mb-4 gap-x-3">
				{children}
				<span className="font-semibold text-xl">
					{title} Comics - Page {pageCurrent}
				</span>
			</div>
			{comics && (
				<>
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-4">
						{comics!.map((item) => {
							return <ComicCard key={item.id} comic={item} />;
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default ComicContentPart;
