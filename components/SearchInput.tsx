"use client";

import useDebounce from "@/hooks/useDebounce";
import { Dispatch, SetStateAction, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import MediaComic from "./MediaComic";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { getSearchSuggest } from "@/actions/getSearchSuggest";

type Props = {
	className?: string;
	setShow?: Dispatch<SetStateAction<boolean>>;
};

function SearchInput({ className, setShow }: Props) {
	const [value, setValue] = useState<string>("");
	const debounceValue = useDebounce(value, 500);
	const router = useRouter();
	const [isFocused, setIsFocused] = useState(false);

	const { data } = useQuery({
		queryFn: () => getSearchSuggest(debounceValue),
		queryKey: ["search-suggess", { debounceValue }],
		enabled: debounceValue !== "",
	});

	const handleSearch = () => {
		if (value === "") return;
		router.push(`/search?title=${value}`);
		router.refresh();
		setShow && setShow(false);
	};

	return (
		<div className={twMerge(`relative mt-4 lg:mt-0`, className)}>
			<input
				type="text"
				value={value}
				name="title"
				placeholder="Search comics/authors"
				className="rounded-full w-full border-2 px-2 py-1 focus:border-[#10b981] focus:outline-none placeholder:text-black/40 lg:placeholder:text-sm lg:pl-2 lg:w-[300px] search-input"
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
			<div className="bg-gray-500/20 hover:opacity-50 cursor-pointer px-2 rounded-full h-[25px] absolute right-4 top-[50%] -translate-y-[50%]">
				<HiMagnifyingGlass className="w-5 h-5 relative top-[2px]" onClick={() => handleSearch()} />
			</div>

			{data && value !== "" && (
				<>
					{data.length === 0 ? (
						<div></div>
					) : (
						<div
							className={twMerge(
								`absolute top-[120%] right-0 border shadow-md w-full lg:w-[150%] max-h-[400px] h-[315px] overflow-y-scroll overflow-x-hidden rounded-lg search-menu z-10 bg-white`,
								!isFocused && "hidden"
							)}>
							{data.map((item, index) => {
								return <MediaComic key={index} comic={item} />;
							})}
						</div>
					)}
				</>
			)}
		</div>
	);
}

export default SearchInput;
