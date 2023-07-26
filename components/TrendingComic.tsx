"use client";
import { Comic } from "@/types";
import ComicCard from "./ComicCard";
import SlickSlider from "./SlickSlider";

type Props = {
	comics: Comic[];
};
function TrendingComic({ comics }: Props) {
	return (
		<div className="px-3 py-5">
			<SlickSlider autoplay={true} infinite={true}>
				{comics.map((item: Comic, index: number) => {
					return <ComicCard comic={item} trending={true} key={item.id} />;
				})}
			</SlickSlider>
		</div>
	);
}

export default TrendingComic;
