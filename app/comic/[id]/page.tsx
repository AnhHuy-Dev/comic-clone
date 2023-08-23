"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { apiUrl } from "@/constant";
import { Chapter, ComicDetail } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import ComicPageContent from "./components/ComicPageContent";

function ComicPage({ params }: { params: any }) {
	const [comic, setComic] = useState<ComicDetail>();
	const [chapters, setChapters] = useState<Chapter[]>([]);
	const { id } = params;

	useEffect(() => {
		const fetchData = async () => {
			const resComics = await axios.get(`${apiUrl}/comics/${id}`);
			const resComicsChapter = await axios.get(`${apiUrl}/comics/${id}/chapters`);
			setComic(resComics.data);
			setChapters([...resComicsChapter.data.reverse()]);
		};
		fetchData();
	}, [id]);

	return (
		<>
			<Navbar />
			<ComicPageContent comic={comic!} chapters={chapters} id={id} />
			<Footer />
		</>
	);
}

export default ComicPage;
