import ComicContent from "@/components/ComicContent";
import Navbar from "@/components/Navbar";
import { Comics } from "comics-api";
import { BsFire, BsFillPatchCheckFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BoyIcon, GirlIcon } from "@/icon";
import Footer from "@/components/Footer";

export default async function Home() {
	const trendingComics = await Comics.getRecommendComics();
	const popularComics = await Comics.getTrendingComics();
	const completedComics = await Comics.getCompletedComics();
	const recentlyComics = await Comics.getRecentUpdateComics();
	const boyComics = await Comics.getBoyComics();
	const girlComics = await Comics.getGirlComics();

	return (
		<>
			<Navbar />
			<ComicContent comics={trendingComics} trending={true} />
			<ComicContent comics={popularComics.comics} title="Popular Comics">
				<BsFire className="w-6 h-6 lg:w-8 lg:h-8" color="#10b982" />
			</ComicContent>
			<ComicContent comics={completedComics.comics} title="Completed Comics">
				<BsFillPatchCheckFill className="w-6 h-6 lg:w-8 lg:h-8" color="#10b982" />
			</ComicContent>
			<ComicContent comics={recentlyComics.comics} title="Recently Update">
				<BiTimeFive className="w-8 h-8 lg:w-10 lg:h-10" color="#10b982" />
			</ComicContent>
			<ComicContent comics={boyComics.comics} title="Boy Comics">
				<BoyIcon className="w-8 h-8 lg:w-8 lg:h-8 text-[#10b982]" />
			</ComicContent>
			<ComicContent comics={girlComics.comics} title="Girl Comics">
				<GirlIcon className="w-8 h-8 lg:w-8 lg:h-8 text-[#10b982]" />
			</ComicContent>
			<Footer />
		</>
	);
}
