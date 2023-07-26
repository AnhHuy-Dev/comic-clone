import Navbar from "@/components/Navbar";
import PopularComics from "@/components/PopularComics";
import TrendingComic from "@/components/TrendingComic";
import { Comics } from "comics-api";

export default async function Home() {
	const trendingComics = await Comics.getRecommendComics();
	const popularComics = await Comics.getTrendingComics();
	return (
		<>
			<Navbar />
			<TrendingComic comics={trendingComics} />
			<PopularComics comics={popularComics.comics} />
		</>
	);
}
