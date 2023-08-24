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
import { useQuery } from "react-query";
import { getPopularComics } from "@/actions/getPopularComics";
import { getCompletedComics } from "@/actions/getCompletedComics";
import { getRecentlyComic } from "@/actions/getRecentlyComic";
import { getBoyComics } from "@/actions/getBoyComics";
import { getGirlComics } from "@/actions/getGirlComics";
export default function Home() {
	const { data: trendingComics } = useQuery({
		queryFn: () => getCompletedComics("1"),
		queryKey: ["completed-home"],
	});
	const { data: popularComics } = useQuery({
		queryFn: () => getPopularComics("1"),
		queryKey: ["trending-home"],
	});
	const { data: completedComics } = useQuery({
		queryFn: () => getCompletedComics("1"),
		queryKey: ["completed-home"],
	});
	const { data: recentlyComics } = useQuery({
		queryFn: () => getRecentlyComic("1"),
		queryKey: ["recently-home"],
	});
	const { data: boyComics } = useQuery({
		queryFn: () => getBoyComics("1"),
		queryKey: ["boy-home"],
	});
	const { data: girlComics } = useQuery({
		queryFn: () => getGirlComics("1"),
		queryKey: ["girl-home"],
	});

	return (
		<>
			<Navbar />
			{/* {isLoading && <div>Loading...</div>} */}
			{trendingComics && <ComicContent comics={trendingComics!.comics} trending={true} />}
			{popularComics && (
				<ComicContent popular={true} comics={popularComics!.comics} title="popular">
					<BsFire className="w-6 h-6 lg:w-8 lg:h-8" color="#10b982" />
				</ComicContent>
			)}
			{completedComics && (
				<ComicContent comics={completedComics!.comics} title="completed">
					<BsFillPatchCheckFill className="w-6 h-6 lg:w-8 lg:h-8" color="#10b982" />
				</ComicContent>
			)}
			{recentlyComics && (
				<ComicContent comics={recentlyComics!.comics} title="recently">
					<BiTimeFive className="w-8 h-8 lg:w-10 lg:h-10" color="#10b982" />
				</ComicContent>
			)}
			{boyComics && (
				<ComicContent comics={boyComics!.comics} title="boy">
					<BoyIcon className="w-8 h-8 lg:w-8 lg:h-8 text-[#10b982]" />
				</ComicContent>
			)}
			{girlComics && (
				<>
					<ComicContent comics={girlComics!.comics} title="girl">
						<GirlIcon className="w-8 h-8 lg:w-8 lg:h-8 text-[#10b982]" />
					</ComicContent>
					<Footer />
				</>
			)}
		</>
	);
}
