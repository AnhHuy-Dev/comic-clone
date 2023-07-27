"use client";
import { RiCloseFill } from "react-icons/ri";
import { BoyIcon, GenresIcon, GirlIcon, NewComicIcon, RecentlyIcon, TopIcon } from "@/icon";
import { AiOutlineHome } from "react-icons/ai";
import { BsFire, BsFillPatchCheckFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import SearchInput from "./SearchInput";
import { Dispatch, SetStateAction } from "react";

type Props = {
	className?: string;
	setShowMobile: Dispatch<SetStateAction<boolean>>;
};

function NavbarMobileMenu({ className, setShowMobile }: Props) {
	const pathname = usePathname();

	return (
		<div className={twMerge(`fixed right-0 top-0 bottom-0 w-[90vw] md:w-[50vw]  bg-white z-10 px-5 py-3 translate-x-[100%] transition-all duration-[400ms]`, className)}>
			<div className="flex justify-end" onClick={() => setShowMobile(false)}>
				<RiCloseFill className="w-8 h-8" strokeWidth={2} />
			</div>
			<SearchInput />
			<div className="mt-4 flex flex-col gap-y-3">
				<Link href="/" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/" && "text-[#10b981]")}>
					<AiOutlineHome className="w-6 h-6" />
					<span>Home</span>
				</Link>
				<Link href="/genres?type=all" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/genres" && "text-[#10b981]")}>
					<GenresIcon />
					<span>Genres</span>
				</Link>
				<Link href="/top" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/top" && "text-[#10b981]")}>
					<TopIcon />
					<span>Top</span>
				</Link>
				<Link href="/news" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/news" && "text-[#10b981]")}>
					<NewComicIcon />
					<span>News Comics</span>
				</Link>
				<Link href="/popular" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/popular" && "text-[#10b981]")}>
					<BsFire className="w-5 h-5" />
					<span>Popular Comics</span>
				</Link>
				<Link href="/completed" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/completed" && "text-[#10b981]")}>
					<BsFillPatchCheckFill className="w-5 h-5" />
					<span>Completed Comics</span>
				</Link>
				<Link href="/recently" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/recently" && "text-[#10b981]")}>
					<RecentlyIcon />
					<span>Recently Comics</span>
				</Link>
				<Link href="/boy" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/boy" && "text-[#10b981]")}>
					<BoyIcon />
					<span>Boy Comics</span>
				</Link>
				<Link href="/girl" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/girl" && "text-[#10b981]")}>
					<GirlIcon />
					<span>Girl Comics</span>
				</Link>
				<Link href="/history" className={twMerge(`flex gap-x-3 items-center text-lg`, pathname == "/history" && "text-[#10b981]")}>
					<BiTimeFive className="w-6 h-6" />
					<span>History</span>
				</Link>
			</div>
		</div>
	);
}

export default NavbarMobileMenu;
