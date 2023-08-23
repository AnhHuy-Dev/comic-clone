import GenresContent from "@/components/GenresContent";
import Navbar from "@/components/Navbar";
import { GenresIcon } from "@/icon";

function GenresPage() {
	return (
		<>
			<Navbar />
			<div className="flex px-3 items-center text-[22px] font-semibold gap-x-3 my-4 xl:mx-[124px] xl:py-2">
				<GenresIcon className="w-10 h-10 text-emerald-500" />
				Genres
			</div>
			<GenresContent />
		</>
	);
}

export default GenresPage;
