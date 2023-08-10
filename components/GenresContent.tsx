"use client";
import { Comic, Genres } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import ComicCard from "./ComicCard";
import PaginationComic from "./PaginationComic";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "./Footer";
import axios from "axios";
import { apiUrl } from "@/constant";

type Props = {
	comics: Comic[];
	totalPage: number | undefined;
};

function GenresContent() {
	const [content, setContent] = useState<Props>({
		comics: [],
		totalPage: undefined,
	});

	const [genres, setGenres] = useState<Genres[]>([]);
	const searchParams = useSearchParams();
	const type = searchParams.get("type");
	const pageCurrent = searchParams.get("page") === null ? 1 : searchParams.get("page");
	const indexCurrent = genres.findIndex((item) => item.id === type);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`${apiUrl}/genres`);
			setGenres(res.data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`${apiUrl}/genres/${type}`, {
				params: {
					page: pageCurrent,
				},
			});
			setContent({
				comics: res.data.comics,
				totalPage: res.data.total_pages,
			});
		};
		fetchData();
	}, [type, pageCurrent]);

	const handleClick = (id: string) => {
		router.push("/genres?type=" + id);
		router.refresh();
	};

	return (
		<div className="flex w-full overflow-auto scrollbar px-3 flex-col xl:px-[124px] lg:py-2">
			<Slider
				infinite={true}
				initialSlide={indexCurrent}
				slidesToShow={10}
				swipeToSlide={true}
				draggable={true}
				lazyLoad={"progressive"}
				responsive={[
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 8,
						},
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 6,
						},
					},
					{
						breakpoint: 775,
						settings: {
							slidesToShow: 5,
						},
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 4,
						},
					},
				]}>
				{genres.map((item: Genres) => {
					return (
						<div
							key={item.id}
							onClick={() => handleClick(item.id)}
							className={twMerge(`w-max h-full leading-[48px] text-center cursor-pointer genres-item select-none border-t border-b`, type === item.id && `bg-emerald-500 text-white`)}>
							{item.name}
						</div>
					);
				})}
			</Slider>
			{content.comics.length > 0 ? (
				<>
					<div className="flex items-center bg-[#0ea6e9] gap-x-4 px-4 py-3 rounded-md mt-5">
						<AiFillInfoCircle className="w-6 h-6 flex-shrink-0" color="white" />
						<span className="text-white">{genres[indexCurrent].description}</span>
					</div>
					<div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-4">
						{content.comics.map((item) => {
							return <ComicCard key={item.id} comic={item} />;
						})}
					</div>
					<PaginationComic countPage={content.totalPage!} defaultPage={Number(pageCurrent)} type={type!} />
					<Footer />
				</>
			) : (
				<ClipLoader
					cssOverride={{
						position: "fixed",
						top: "50%",
						left: "50%",
						width: "50px",
						height: "50px",
						borderWidth: "4px",
					}}
				/>
			)}
		</div>
	);
}

export default GenresContent;
