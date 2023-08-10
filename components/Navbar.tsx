"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavbarMobileMenu from "./NavbarMobileMenu";
import SearchInput from "./SearchInput";
import { MdHistory } from "react-icons/md";

function Navbar() {
	const [showMobile, setShowMobile] = useState(false);
	const pathName = usePathname();

	return (
		<div className="px-3 mt-2 xl:px-[124px] lg:py-2 flex justify-between items-center border-b-2">
			<div className="flex justify-between lg:justify-start items-center w-full">
				<Link href="/" className="flex items-center gap-x-2 cursor-pointer">
					<img src="/images/logo.png" alt="" className="w-[40px] h-[40px]" />
					<h1 className="text-2xl font-bold text-emerald-500 font-[Chocopy]">NCOMICS</h1>
				</Link>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 cursor-pointer md:w-8 md:h-8 lg:hidden"
					onClick={() => setShowMobile(true)}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
				<div className="ml-8 hidden gap-x-4 lg:flex">
					<Link href="/" className={twMerge(`font-semibold px-4 py-2 rounded-full text-lg hover:text-emerald-500`, pathName == "/" && `bg-[#10b982] text-white hover:text-white`)}>
						Home
					</Link>
					<Link
						href="/genres?type=all"
						className={twMerge(`font-semibold px-4 py-2 rounded-full text-lg hover:text-emerald-500`, pathName == "/genres" && `bg-[#10b982] text-white hover:text-white`)}>
						Genres
					</Link>
					<Link href="/new" className={twMerge(`font-semibold px-4 py-2 rounded-full text-lg hover:text-emerald-500`, pathName == "/new" && `bg-[#10b982] text-white hover:text-white`)}>
						New
					</Link>
					<Link href="/top" className={twMerge(`font-semibold px-4 py-2 rounded-full text-lg hover:text-emerald-500`, pathName == "/top" && `bg-[#10b982] text-white hover:text-white`)}>
						Top
					</Link>
				</div>
			</div>
			<div className="items-center gap-x-4 hidden lg:flex">
				<Link href="/history">
					<MdHistory className="text-blue-500 w-8 h-8" />
				</Link>
				<SearchInput />
			</div>
			{showMobile && <div className="fixed right-0 top-0 bottom-0 bg-black/50 w-full z-30" onClick={() => setShowMobile(false)}></div>}
			<NavbarMobileMenu className={showMobile ? "translate-x-0" : ""} setShowMobile={setShowMobile} />
		</div>
	);
}

export default Navbar;
