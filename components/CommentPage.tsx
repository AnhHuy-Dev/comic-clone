"use client";
import getComicComment from "@/actions/getComicComment";
import { Comment } from "@/types";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
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
			setContent((prev: any) => {
				return {
					comments: prev.comments.length > 0 ? [...prev.comments, ...data.comments] : data.comments,
					currentPage: data.current_page,
					totalPage: data.total_pages,
				};
			});
		});
	}, [id, content.currentPage]);

	console.log(content.comments);

	return (
		<div className="flex flex-col gap-y-8">
			{content?.comments.length > 0 ? (
				content?.comments.map((item: Comment, index) => {
					return (
						<div key={index} className="flex gap-3">
							<img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
							<div className="flex flex-col">
								<h3 className="font-bold">{item.username}</h3>
								<p className="break-words">{item.content}</p>
								<div className="flex items-center">
									{item.stickers &&
										item.stickers.map((item) => {
											return <img key={item} src={item} className="max-w-[150px] object-cover rounded h-max" alt="" />;
										})}
								</div>
								<div className="flex gap-x-6">
									<span className="text-xs font-semibold text-gray-600 mt-1 flex flex-wrap items-center gap-2 sm:gap-4">{item.created_at}</span>
									<div className="flex items-center">
										<AiOutlineLike />
										<span>{item.vote_count}</span>
									</div>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<BeatLoader
					color="green"
					cssOverride={{
						height: "50px",
						margin: "auto",
					}}
				/>
			)}
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
		</div>
	);
}

export default CommentPage;
