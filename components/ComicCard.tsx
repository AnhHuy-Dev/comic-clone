import { Comic } from "@/types";
import { PiSpinnerBold } from "react-icons/pi";
import { AiFillEye, AiOutlineHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

type Props = {
	comic: Comic;
	trending?: boolean;
};

function ComicCard({ comic, trending }: Props) {
	return (
		<div className="swiper-slide w-[242px] px-1 py-1" data-swiper-slide-index="4">
			<div className="overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer">
				<div className="flex gap-1 absolute font-semibold top-0 z-10 text-xs text-white">
					{comic.updated_at?.includes("trước") && Number(comic.updated_at.match(/\d+/)?.[0]) <= 3 && (
						<span className="bg-amber-400 py-0.5 px-2 rounded-b-sm first:rounded-bl-none"> Up </span>
					)}
					{comic.is_trending && <span className="bg-[#F43F5E] py-0.5 px-2 rounded-b-sm first:rounded-bl-none"> Hot </span>}
					{comic.status === "Completed" && <span className="bg-sky-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none"> Up </span>}
				</div>
				<div className="relative">
					<img
						src={comic?.thumbnail}
						alt={comic?.title}
						className="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none"
						loading="lazy"
					/>
				</div>
				<div className="absolute top-1/2 bottom-0 inset-x-0 flex flex-col justify-end px-2 sm:px-4 py-2 bg-gradient-to-b from-transparent to-black">
					<h5 className="font-bold leading-5 text-lg text-white group-hover:text-emerald-400 text-shadow duration-200 line-clamp-2">
						<abbr title={comic?.title} className="no-underline">
							{comic?.title}
						</abbr>
					</h5>
					<span className="py-1"></span>
					{trending !== true && (
						<>
							<span className="text-sm text-gray-300 truncate font-semibold border-t-[1px] border-[#666768] py-1">
								{comic?.authors === "Updating" ? (
									<div className="flex items-center gap-x-2">
										<PiSpinnerBold color="#10b982" className="w-5 h-5" />
										Updating
									</div>
								) : (
									comic.authors
								)}
							</span>
							<div className="text-[#10b982] justify-between text-[12px] hidden md:flex py-1">
								<div className="flex gap-x-1 items-center bg-white/25 w-max px-1 rounded-lg">
									<AiFillEye className="w-[12px] h-[12px]" color="#10b982" />
									{comic.total_views}
								</div>
								<div className="flex gap-x-1 items-center bg-white/25 w-max px-1 rounded-lg">
									<AiOutlineHeart className="w-[12px] h-[12px]" color="#10b982" />
									{comic.total_views}
								</div>
								<div className="flex gap-x-1 items-center bg-white/25 w-max px-1 rounded-lg">
									<FaCommentAlt className="w-[12px] h-[12px]" color="#10b982" />
									{comic.total_views}
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default ComicCard;
