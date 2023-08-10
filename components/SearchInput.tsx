"use client";

import useDebounce from "@/hooks/useDebounce";
import { Comic } from "@/types";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import MediaComic from "./MediaComic";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/constant";

type Props = {
	className?: string;
	setShow?: Dispatch<SetStateAction<boolean>>;
};

function SearchInput({ className, setShow }: Props) {
	const [value, setValue] = useState<string>("");
	const [searchComics, setSearchComics] = useState<Comic[]>([]);
	const debounceValue = useDebounce(value, 500);
	const router = useRouter();
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`${apiUrl}/search-suggest`, {
				params: {
					q: value,
				},
			});
			setSearchComics(res.data);
		};
		if (value !== "") fetchData();
	}, [debounceValue]);

	const handleSearch = () => {
		router.push(`/search?title=${value}`);
		router.refresh();
		setShow && setShow(false);
	};

	return (
		<div className={twMerge(`relative mt-4 lg:mt-0`, className)}>
			<input
				type="text"
				name="title"
				placeholder="Search comics/authors"
				className="rounded-full w-full border-2 px-2 py-1 focus:border-[#10b981] focus:outline-none placeholder:text-black/40 lg:placeholder:text-sm lg:pl-2 lg:w-[220px] search-input"
				onFocus={() => setIsFocused(true)}
				onBlur={() => {
					setTimeout(() => {
						setIsFocused(false);
					}, 100);
				}}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<HiMagnifyingGlass className="w-5 h-5 absolute right-4 top-[50%] -translate-y-[50%]" onClick={() => handleSearch()} />
			{searchComics.length > 0 && value !== "" && (
				<div
					className={twMerge(
						`absolute top-[120%] right-0 border shadow-md w-full lg:w-[150%] max-h-[400px] h-[315px] overflow-y-scroll overflow-x-hidden rounded-lg search-menu z-10 bg-white`,
						!isFocused && "hidden"
					)}>
					{searchComics.map((item, index) => {
						return <MediaComic key={index} comic={item} />;
					})}
				</div>
			)}
		</div>
	);
}

export default SearchInput;
