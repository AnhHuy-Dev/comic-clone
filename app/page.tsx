"use client";
import ComicContent from "@/components/ComicContent";
import Navbar from "@/components/Navbar";
import { BsFire, BsFillPatchCheckFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BoyIcon, GirlIcon } from "@/icon";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Comic } from "@/types";
import axios from "axios";
import { apiUrl } from "../constant";

export default function Home() {
	const [trendingComics, setTrendingComics] = useState<Comic[]>();
	const [popularComics, setPopularComics] = useState<Comic[]>();
	const [completedComics, setCompletedComics] = useState<Comic[]>();
	const [recentlyComics, setRecentlyComics] = useState<Comic[]>();
	const [boyComics, setBoyComics] = useState<Comic[]>();
	const [girlComics, setGirlComics] = useState<Comic[]>();

	useEffect(() => {
		const fetchData = async () => {
			const trendingRes = await axios.get(`${apiUrl}/trending-comics`);
			setTrendingComics(trendingRes.data.comics);

			const popularRes = await axios.get(`${apiUrl}/recommend-comics`);
			setPopularComics(popularRes.data);

			const completedRes = await axios.get(`${apiUrl}/completed-comics`);
			setCompletedComics(completedRes.data.comics);

			const recentlyRes = await axios.get(`${apiUrl}/recent-update-comics`);
			setRecentlyComics(recentlyRes.data.comics);

			const boyRes = await axios.get(`${apiUrl}/boy-comics`);
			setBoyComics(boyRes.data.comics);

			const girlRes = await axios.get(`${apiUrl}/girl-comics`);
			setGirlComics(girlRes.data.comics);
		};
		fetchData();
	}, []);

	return (
		<>
			<Navbar />
			<ComicContent comics={trendingComics!} trending={true} />
			<ComicContent popular={true} comics={popularComics!} title="popular">
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
			</ComicContent>
			<Footer />
		</>
	);
}
