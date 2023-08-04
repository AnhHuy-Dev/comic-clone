// "use client";
import ComicContent from "@/components/ComicContent";
import Navbar from "@/components/Navbar";
import { BsFire, BsFillPatchCheckFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BoyIcon, GirlIcon } from "@/icon";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import getAllTrendingComics from "@/actions/getAllTrendingComics";
import { Comic } from "@/types";
import { Comics } from "comics-api";

async function getAllBoyComics() {
	const res = await Comics.getBoyComics().then((data) => {
		return data.comics;
	});

	return res;
}

export default async function Home() {
	const data = await getAllBoyComics();

	// const [trendingComics, setTredingComics] = useState<Comic[]>();
	// const [popularComics, setPopularComics] = useState<Comic[]>();
	// const [completedComics, setCompletedComics] = useState<Comic[]>();
	// const [recentlyComics, setRecentlyComics] = useState<Comic[]>();
	// const [boyComics, setBoyComics] = useState<Comic[]>();
	// const [girlComics, setGirlComics] = useState<Comic[]>();

	// useEffect(() => {
	// 	getAllTrendingComics().then((data) => setTredingComics(data.comics));
	// 	getPopularComics().then((data) => setPopularComics(data.comics));
	// 	getCompletedComics().then((data) => setCompletedComics(data.comics));
	// 	getRecentlyComics().then((data) => setRecentlyComics(data.comics));
	// 	getAllBoyComics().then((data) => setBoyComics(data.comics));
	// 	getAllGirlComics().then((data) => setGirlComics(data.comics));
	// }, []);

	return (
		<>
			<Navbar />
			{/* <ComicContent comics={trendingComics!} trending={true} />
			<ComicContent comics={popularComics!} title="popular">
				<BsFire className="w-6 h-6 lg:w-8 lg:h-8" color="#10b982" />
			</ComicContent>
			<ComicContent comics={completedComics!} title="completed">
				<BsFillPatchCheckFill className="w-6 h-6 lg:w-8 lg:h-8" color="#10b982" />
			</ComicContent>
			<ComicContent comics={recentlyComics!} title="recently">
				<BiTimeFive className="w-8 h-8 lg:w-10 lg:h-10" color="#10b982" />
			</ComicContent>
			<ComicContent comics={boyComics!} title="boy">
				<BoyIcon className="w-8 h-8 lg:w-8 lg:h-8 text-[#10b982]" />
			</ComicContent>
			<ComicContent comics={girlComics!} title="girl">
				<GirlIcon className="w-8 h-8 lg:w-8 lg:h-8 text-[#10b982]" />
			</ComicContent> */}
			<ComicContent comics={data} title="boy">
				<BoyIcon className="w-8 h-8 lg:w-8 lg:h-8 text-[#10b982]" />
			</ComicContent>
			<Footer />
		</>
	);
}
