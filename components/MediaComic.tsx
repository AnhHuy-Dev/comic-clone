"use client";
import { useRouter } from "next/navigation";
import { PiSpinnerBold } from "react-icons/pi";

function MediaComic({ comic }: { comic: any }) {
	const router = useRouter();

	return (
		<div className="flex px-2 py-1 bg-white gap-x-3 cursor-pointer hover:bg-black/10" onClick={() => router.push(`/comic/${comic.id}`)}>
			<div className="relative flex-shrink-0">
				<img src={comic.thumbnail} className="w-16 h-24 aspect-auto object-cover rounded-md border-emerald-500 border" alt={comic.title} />
			</div>
			<div className="text-sm">
				<h1 className="font-bold">
					{comic.title}
					<span className="font-normal ml-2">({comic?.lastest_chapter})</span>
				</h1>
				<div className="flex items-center gap-x-2 text-emerald-500 font-semibold lg:py-1">
					{comic?.authors === "Updating" ? (
						<div className="flex items-center gap-x-2">
							<PiSpinnerBold color="#10b982" className="w-5 h-5" />
							Updating
						</div>
					) : (
						comic.authors
					)}
				</div>
				<div className="text-black flex flex-wrap">
					{typeof comic.genres === "object" ? (
						comic.genres.map((item: string) => {
							return <span className="text-xs">{item}</span>;
						})
					) : (
						<span className="text-xs">{comic.genres}</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default MediaComic;
