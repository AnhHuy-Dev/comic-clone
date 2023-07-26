import { HiMagnifyingGlass } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
};
function SearchInput({ className }: Props) {
	return (
		<div className={twMerge(`relative mt-4 md:mt-0`, className)}>
			<input
				type="text"
				placeholder="Search comics/authors"
				className="rounded-full w-full border-2 px-2 py-1 focus:border-[#10b981] focus:outline-none placeholder:text-black/40 lg:placeholder:text-sm lg:pl-2 md:w-[220px]"
			/>
			<HiMagnifyingGlass className="w-5 h-5 absolute right-4 top-[50%] -translate-y-[50%]" />
		</div>
	);
}

export default SearchInput;
