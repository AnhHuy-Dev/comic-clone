import GenresContent from "@/components/GenresContent";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { GenresIcon } from "@/icon";
import { Genres } from "@/types";
import { Comics } from "comics-api";

async function Genres() {
	const genresComic: Genres[] = await Comics.getGenres();

	return (
		<>
			<Navbar />
			<div className="flex px-3 items-center text-[22px] font-semibold gap-x-3 my-4 xl:mx-[124px] xl:py-2">
				<GenresIcon className="w-10 h-10 text-emerald-500" />
				Genres
			</div>
			<GenresContent genres={genresComic} />
			<ScrollToTop />
		</>
	);
}

export default Genres;
