"use client";

import getSingleChapterComic from "@/actions/getSingleChapterComic";
import { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineDownload, AiOutlineLike } from "react-icons/ai";
import { Chapter, Comment } from "@/types";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";
import getComicComment from "@/actions/getComicComment";
import { ReplyCommentIcon } from "@/icon";
import { IoClose } from "react-icons/io5";
import { BeatLoader } from "react-spinners";

type Props = {
	allChapters: Chapter[];
	comicName: string | undefined;
	imageComics: {
		page: number;
		backup_url_1: string;
		backup_url_2: string;
		src: string;
	}[];
	chapterName: string | undefined;
};

type CommentProps = {
	listComments: Comment[];
	pageComment: number;
	totalPageComment: number | undefined;
};

function Page({ params }: { params: any }) {
	const [content, setContent] = useState<Props>({
		allChapters: [],
		comicName: undefined,
		imageComics: [],
		chapterName: undefined,
	});

	const [comments, setComments] = useState<CommentProps>({
		listComments: [],
		pageComment: 1,
		totalPageComment: undefined,
	});

	const [showNav, setShowNav] = useState(true);
	const [showComment, setShowComment] = useState(false);
	const [showEspisode, setShowEpisode] = useState(false);
	const router = useRouter();
	const urlCurrent = usePathname().split(params.chapterId)[0];

	const handleChangeChapter = (chap: number): void => {
		router.push(`${urlCurrent}/${chap.toString()}`);
	};

	const reverseChapters = [...content.allChapters].reverse();
	const chapCurrent = reverseChapters.findIndex((item) => item.id == params.chapterId);

	const handleChangeChapCurrent = (type: string) => {
		if (type === "prev") {
			if (chapCurrent === 0) return;

			const id = reverseChapters[chapCurrent - 1].id;
			router.push(`${urlCurrent}${id.toString()}`);
		} else {
			if (chapCurrent === content.allChapters.length - 1) return;

			const id = reverseChapters[chapCurrent + 1].id;
			router.push(`${urlCurrent}${id.toString()}`);
		}
	};

	useEffect(() => {
		getSingleChapterComic(params.id, params.chapterId).then((data) => {
			setContent({
				allChapters: data.chapters,
				comicName: data.comic_name,
				imageComics: data.images,
				chapterName: data.chapter_name,
			});
		});

		getComicComment(params.id, comments?.pageComment, params.chapterId).then((data) => {
			if (comments.pageComment! > 1) {
				setComments((prev: any) => {
					return {
						listComments: [...prev.listComments, ...data.comments],
						pageComment: data.current_page,
						totalPageComment: data.total_pages,
					};
				});
			} else {
				setComments((prev: any) => {
					return {
						listComments: data.comments,
						pageComment: data.current_page,
						totalPageComment: data.total_pages,
					};
				});
			}
		});
	}, [params, comments.pageComment, showComment]);

	return (
		<div className="bg-black/70">
			<h1 className={twMerge(`bg-black fixed top-0 left-0 text-center w-full text-white py-4 transition-all duration-300 shadow-2xl`, !showNav && `translate-y-[-100%]`)}>
				{content.chapterName ? `${content.comicName} - ${content.chapterName}` : "Loading..."}
			</h1>
			<div
				className="flex flex-col max-w-2xl mx-auto bg-black/70"
				onClick={() => {
					setShowNav(!showNav);
					setShowEpisode(false);
				}}>
				{content.imageComics.map((item, index) => {
					return <img key={index} src={item.backup_url_2} alt="" />;
				})}
			</div>
			<>
				{showComment && <div className="fixed inset-0 bg-black/80 w-[100vw] h-[100vh] z-20 " onClick={() => setShowComment(false)}></div>}
				<div className={twMerge(`fixed top-[50%] -translate-y-[50%] -translate-x-[50%] left-[50%] z-30 duration-200 scale-0 transition-all`, showComment && `scale-100`)}>
					<div className={twMerge(`relative w-[90vw] max-w-4xl bg-white rounded-md origin-center duration-500 scale-0 transition-all`, showComment && `scale-100`)}>
						<div className="absolute right-2 top-2" onClick={() => setShowComment(false)}>
							<IoClose className="w-7 h-7" color="black" />
						</div>
						<h3 className="text-2xl font-extrabold text-zinc-600 text-center">Comments</h3>
						<div className="max-h-[75vh] h-[75vh] overflow-auto p-4 sm:p-10 text-sm z-30 episode-scroll">
							<div className="flex flex-col overflow-auto text-sm bg-white text-black gap-6">
								{comments.listComments.length > 0 ? (
									comments.listComments.map((item: Comment, index) => {
										return (
											<>
												<div key={index} className="flex gap-3">
													<img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
													<div className="flex flex-col items-start">
														<h3 className="font-bold">{item.username}</h3>
														<p className="break-words max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-justify pr-4">{item.content}</p>
														<div className="flex items-center">
															{item.stickers &&
																item.stickers.map((item, index) => {
																	return <img key={index} src={item} className="max-w-[150px] object-cover rounded h-max" alt="" />;
																})}
														</div>
														<div className="flex gap-x-6">
															<span className="text-xs font-semibold text-gray-600 mt-1 flex flex-wrap items-center gap-2 sm:gap-4">{item.created_at}</span>
															<div className="flex items-center">
																<AiOutlineLike />
																<span>{item.vote_count}</span>
															</div>
														</div>
														{item.replies &&
															item.replies.map((item, index) => {
																return (
																	<div key={index} className="mt-4 flex gap-x-6">
																		<ReplyCommentIcon className="hidden sm:block" />
																		<div className="flex gap-x-4">
																			<img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
																			<div className="flex flex-col items-start">
																				<h3 className="font-bold">{item.username}</h3>
																				<p className="break-words max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl  text-justify">
																					<strong className="text-emerald-500 mr-2">@{item.mention_user}</strong>
																					{item.content}
																				</p>
																				<div className="flex gap-x-6">
																					<span className="text-xs font-semibold text-gray-600 mt-1 flex flex-wrap items-center gap-2 sm:gap-4">
																						{item.created_at}
																					</span>
																					<div className="flex items-center">
																						<AiOutlineLike />
																						<span>{item.vote_count}</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																);
															})}
													</div>
												</div>
												{comments.listComments.length - 1 == index && (
													<span
														className="text-emerald-500 bg-emerald-100 rounded-full mx-auto px-4 py-1 cursor-pointer"
														onClick={() =>
															setComments((prev) => {
																return {
																	...prev,
																	pageComment: prev.pageComment + 1,
																};
															})
														}>
														Load more
													</span>
												)}
											</>
										);
									})
								) : (
									<BeatLoader
										color="green"
										cssOverride={{
											position: "absolute",
											top: "45%",
											left: "45%",
											height: "50px",
											margin: "auto",
										}}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</>
			<div
				className={twMerge(
					`fixed bg-black/80 bottom-0 left-0 w-full text-center py-4 transition-all duration-300 flex flex-col md:flex-row-reverse md:items-center md:justify-center md:gap-x-16`,
					!showNav && `translate-y-[100%]`
				)}>
				<div className="text-white flex justify-center gap-x-6 relative">
					<div className="flex items-center gap-x-2 cursor-pointer relative" onClick={() => setShowComment(true)}>
						<BiCommentDetail className="w-6 h-6" />
						<span className="absolute left-2 -top-2 text-xs bg-zinc-600 rounded text-gray-200 px-0.5">{comments.totalPageComment}</span>
						<span className="text-gray-300">Comments</span>
					</div>

					<div className="flex items-center gap-x-2 cursor-pointer">
						<AiOutlineDownload className="w-6 h-6" />
						<span className="text-gray-300">Download</span>
					</div>
				</div>
				<span className="hidden md:block text-gray-400">|</span>
				<ul className="flex gap-x-6 text-white justify-center text-sm mt-6 md:mt-0 relative cursor-pointer items-center">
					<li className="px-3 py-1 rounded-full bg-gray-200 text-gray-500" onClick={() => handleChangeChapCurrent("prev")}>
						Previous
					</li>
					<li className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-500" onClick={() => handleChangeChapCurrent("next")}>
						Next
					</li>
					<li className="px-3 py-1 bg-fuchsia-200 text-fuchsia-500 rounded-full" onClick={() => setShowEpisode(!showEspisode)}>
						Espisodes
					</li>
					<div
						className={twMerge(
							`gap-y-2 absolute -top-2 -translate-y-[100%] 
						right-[50%] -translate-x-[-50%] bg-black text-white 
						flex flex-col rounded-md py-3 items-start scale-0 origin-bottom duration-300 transition-alll`,
							showEspisode && `scale-100`
						)}>
						<p className="text-lg px-4">All Espisodes ({content.allChapters.length})</p>
						<ul className="overflow-y-scroll overflow-x-hidden text-sm h-max max-h-72 font-normal episode-scroll w-[250px] md:w-[300px] flex flex-col-reverse items-start">
							{reverseChapters.map((item, index) => {
								return (
									<li
										key={index}
										onClick={() => handleChangeChapter(item.id)}
										className={twMerge(`px-4 py-5 hover:underline cursor-pointer text-white truncate block`, item.id == params.chapterId && `text-emerald-500`)}>
										{item.name}
									</li>
								);
							})}
						</ul>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default Page;
