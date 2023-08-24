"use client";
import { getChapterComic, getComicDetail } from "@/actions/getComicDetail";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { apiUrl } from "@/constant";
import { Chapter, ComicDetail } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";
import ComicPageContent from "./components/ComicPageContent";

function ComicPage({ params }: { params: any }) {
	const { id } = params;

	const { data: comics } = useQuery({
		queryFn: () => getComicDetail(id),
		queryKey: ["comic-detail", { id }],
	});
	const { data: chapters } = useQuery({
		queryFn: () => getChapterComic(id),
		queryKey: ["all-chapters", { id }],
	});

	return (
		<>
			<Navbar />
			{comics && chapters ? (
				<>
					<ComicPageContent comic={comics} chapters={chapters} id={id} />
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
		</>
	);
}

export default ComicPage;
