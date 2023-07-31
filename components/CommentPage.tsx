"use client";
import getComicComment from "@/actions/getComicComment";
import { ReplyCommentIcon } from "@/icon";
import { Comment } from "@/types";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsReplyAll } from "react-icons/bs";
import { BeatLoader } from "react-spinners";

type Props = {
	comments: Comment[];
	currentPage: number | undefined;
	totalPage: number | undefined;
};

function CommentPage({ id }: { id: string }) {
	const [content, setContent] = useState<Props>({
		comments: [],
		currentPage: 1,
		totalPage: undefined,
	});

	useEffect(() => {
		getComicComment(id, content.currentPage).then((data) => {
			if (content.currentPage! > 1) {
				setContent((prev: any) => {
					return {
						comments: [...prev.comments, ...data.comments],
						currentPage: data.current_page,
						totalPage: data.total_pages,
					};
				});
			} else {
				setContent((prev: any) => {
					return {
						comments: data.comments,
						currentPage: data.current_page,
						totalPage: data.total_pages,
					};
				});
			}
		});
	}, [id, content.currentPage]);

	return (
		<div className="flex flex-col gap-y-8">
			{content?.comments.length > 0 ? (
				<>
					{content?.comments.map((item: Comment, index) => {
						return (
							<>
								<div key={index} className="flex gap-3">
									<img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
									<div className="flex flex-col">
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
														<BsReplyAll className="hidden sm:inline-flex w-7 h-7 rotate-180" color="#10b982" />
														<div className="flex gap-x-4">
															<img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
															<div>
																<h3 className="font-bold">{item.username}</h3>
																<p className="break-words max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl  text-justify">
																	<strong className="text-emerald-500 mr-2">@{item.mention_user}</strong>
																	{item.content}
																</p>
																<div className="flex gap-x-6">
																	<span className="text-xs font-semibold text-gray-600 mt-1 flex flex-wrap items-center gap-2 sm:gap-4">{item.created_at}</span>
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
							</>
						);
					})}
					<span
						className="text-emerald-500 bg-emerald-100 rounded-full mx-auto px-4 py-1 cursor-pointer"
						onClick={() =>
							setContent((prev) => {
								return {
									...prev,
									currentPage: prev.currentPage! + 1,
								};
							})
						}>
						Load more
					</span>
				</>
			) : (
				<BeatLoader
					color="green"
					cssOverride={{
						height: "50px",
						margin: "auto",
					}}
				/>
			)}
		</div>
	);
}

export default CommentPage;
