"use client";
import getAllChapter from "@/actions/getAllChapter";
import getComicComment from "@/actions/getComicComment";
import getDetailComic from "@/actions/getDetailComic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Chapter, ComicDetail } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ComicPageContent from "./components/ComicPageContent";

function ComicPage({ params }: { params: any }) {
	const [comic, setComic] = useState<ComicDetail>();
	const [chapters, setChapters] = useState<Chapter[]>([]);
	const { id } = params;

	useEffect(() => {
		getDetailComic(id).then((data) => setComic(data));
		getAllChapter(id).then((data) => setChapters(data));
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
