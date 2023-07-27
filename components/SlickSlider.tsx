import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

type Props = {
	children: ReactNode;
	autoplay?: boolean;
	infinite?: boolean;
	autoplaySpeed?: number;
	rows?: number;
	infinitie?: boolean;
};

function PrevArrow({ className, style, onClick }: { className?: string; style?: string; onClick?: () => void }) {
	return (
		<div onClick={onClick} className="bg-[#10b982] w-max absolute z-[8] left-4 top-[50%] -translate-y-[50%] rounded-full xl:mx-[124px] cursor-pointer">
			<MdNavigateBefore className="w-8 h-8" color="white" />
		</div>
	);
}

function NextArrow({ className, style, onClick }: { className?: string; style?: string; onClick?: () => void }) {
	return (
		<div onClick={onClick} className="bg-[#10b982] w-max absolute z-[8] right-4 top-[50%] -translate-y-[50%] rounded-full xl:mx-[124px] cursor-pointer">
			<MdNavigateNext className="w-8 h-8" color="white" />
		</div>
	);
}

export default function SlickSlider({ children, autoplay, infinite, autoplaySpeed, rows }: Props) {
	const settings = {
		infinite: infinite || true,
		speed: 500,
		slidesToShow: 5,
		swipeToSlide: true,
		autoplay: autoplay || false,
		autoplaySpeed: autoplaySpeed || 2000,
		rows: rows || 1,
		nextArrow: !infinite ? <NextArrow /> : undefined,
		prevArrow: !infinite ? <PrevArrow /> : undefined,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 775,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<Slider {...settings} className="xl:px-[124px] xl:py-2">
			{children}
		</Slider>
	);
}
