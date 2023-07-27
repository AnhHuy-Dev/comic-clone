import { twMerge } from "tailwind-merge";
type Props = {
	className?: string;
	width?: string;
	height?: string;
};

export const GenresIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			data-v-eb07a472=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "20px"}
			height={height || "20px"}
			viewBox="0 0 640 512">
			<path
				fill="currentColor"
				d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
		</svg>
	);
};

export const TopIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			data-v-eb07a472=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "20px"}
			height={height || "20px"}
			viewBox="0 0 36 36">
			<path
				fill="#31373D"
				d="M25.711 10.867L18.779.652c-.602-.885-1.558-.867-2.127.037l-6.39 10.141c-.569.904-.181 1.644.865 1.644H13V16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3.525h1.898c1.047 0 1.414-.723.813-1.608zM3.651 23.575H1.438c-.975 0-1.381-.712-1.381-1.401c0-.71.508-1.399 1.381-1.399h7.469c.874 0 1.381.689 1.381 1.399c0 .69-.406 1.401-1.381 1.401H6.696v10.189c0 1.016-.649 1.584-1.522 1.584s-1.522-.568-1.522-1.584V23.575zM10.396 28c0-4.222 2.841-7.471 6.982-7.471c4.079 0 6.983 3.351 6.983 7.471c0 4.201-2.821 7.471-6.983 7.471c-4.121 0-6.982-3.27-6.982-7.471zm10.798 0c0-2.456-1.279-4.67-3.816-4.67s-3.816 2.214-3.816 4.67c0 2.476 1.239 4.668 3.816 4.668c2.578 0 3.816-2.192 3.816-4.668zm4.433-5.644c0-.954.569-1.582 1.585-1.582h3.591c2.985 0 5.197 1.947 5.197 4.851c0 2.963-2.293 4.811-5.074 4.811h-2.253v3.329c0 1.016-.649 1.584-1.521 1.584c-.874 0-1.524-.568-1.524-1.584V22.356zm3.046 5.4h2.071c1.277 0 2.089-.934 2.089-2.151c0-1.219-.812-2.152-2.089-2.152h-2.071v4.303z"></path>
		</svg>
	);
};

export const NewComicIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			data-v-eb07a472=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "20px"}
			height={height || "20px"}
			viewBox="0 0 36 36">
			<path
				fill="currentColor"
				d="m34.11 24.49l-3.92-6.62l3.88-6.35a1 1 0 0 0-.85-1.52H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h31.25a1 1 0 0 0 .86-1.51Zm-23.6-3.31H9.39l-3.26-4.34v4.35H5V15h1.13l3.27 4.35V15h1.12ZM16.84 16h-3.53v1.49h3.2v1h-3.2v1.61h3.53v1h-4.66V15h4.65Zm8.29 5.16H24l-1.55-4.59l-1.55 4.61h-1.12l-2-6.18H19l1.32 4.43L21.84 15h1.22l1.46 4.43L25.85 15h1.23Z"
				className="clr-i-solid clr-i-solid-path-1"></path>
			<path fill="none" d="M0 0h36v36H0z"></path>
		</svg>
	);
};

export const RecentlyIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			data-v-eb07a472=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "20px"}
			height={height || "20px"}
			viewBox="0 0 15 15">
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M1.903 7.297c0 3.044 2.207 5.118 4.686 5.547a.521.521 0 1 1-.178 1.027C3.5 13.367.861 10.913.861 7.297c0-1.537.699-2.745 1.515-3.663c.585-.658 1.254-1.193 1.792-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.686l-.001.002c-.572.43-1.27.957-1.875 1.638c-.715.804-1.253 1.776-1.253 2.97Zm11.108.406c0-3.012-2.16-5.073-4.607-5.533a.521.521 0 1 1 .192-1.024c2.874.54 5.457 2.98 5.457 6.557c0 1.537-.699 2.744-1.515 3.663c-.585.658-1.254 1.193-1.792 1.602h1.636a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.845h.002c.571-.432 1.27-.958 1.874-1.64c.715-.803 1.253-1.775 1.253-2.97Z"
				clipRule="evenodd"></path>
		</svg>
	);
};

export const BoyIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			data-v-eb07a472=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "20px"}
			height={height || "20px"}
			viewBox="0 0 24 24">
			<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 14a5 5 0 1 0 10 0a5 5 0 1 0-10 0m14-9l-5.4 5.4M19 5h-5m5 0v5"></path>
		</svg>
	);
};

export const GirlIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			data-v-eb07a472=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "20px"}
			height={height || "20px"}
			viewBox="0 0 24 24">
			<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9m5 5v7m-3-3h6"></path>
		</svg>
	);
};

export const TopDailyIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "24px"}
			height={height || "24px"}
			viewBox="0 0 24 24">
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
				<path d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
				<path d="M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2z"></path>
			</g>
		</svg>
	);
};

export const TopWeeklyIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "24px"}
			height={height || "24px"}
			viewBox="0 0 24 24">
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
				<path d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
				<path d="m9 8l1 8l2-5l2 5l1-8"></path>
			</g>
		</svg>
	);
};

export const TopMonthlyIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "24px"}
			height={height || "24px"}
			viewBox="0 0 24 24">
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
				<path d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
				<path d="M9 16V8l3 5l3-5v8"></path>
			</g>
		</svg>
	);
};

export const ChapterIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "24px"}
			height={height || "24px"}
			viewBox="0 0 20 20"
			data-v-c3ad5561="">
			<path
				fill="currentColor"
				d="M12 5.5a.5.5 0 0 1-.41.492L11.5 6h-4a.5.5 0 0 1-.09-.992L7.5 5h4a.5.5 0 0 1 .5.5ZM12 9a.5.5 0 0 1-.41.492l-.09.008h-4a.5.5 0 0 1-.09-.992L7.5 8.5h4a.5.5 0 0 1 .5.5Zm0 3.5a.5.5 0 0 1-.41.492L11.5 13h-4a.5.5 0 0 1-.09-.992L7.5 12h4a.5.5 0 0 1 .5.5ZM6 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6ZM5 14V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm11-6a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18H7a1 1 0 0 1-1-1h7a3 3 0 0 0 3-3V8Z"></path>
		</svg>
	);
};

export const FollowIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon mr-1`, className)}
			width={width || "24px"}
			height={height || "24px"}
			viewBox="0 0 256 256"
			data-v-c3ad5561="">
			<path
				fill="currentColor"
				d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07Z"></path>
		</svg>
	);
};

export const NewSignIcon = ({ className, width, height }: Props) => {
	return (
		<svg
			data-v-c3ad5561=""
			data-v-79e96eab=""
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={twMerge(`icon text-emerald-500`, className)}
			width={width || "36px"}
			height={height || "36px"}
			viewBox="0 0 36 36">
			<path
				fill="currentColor"
				d="m34.11 24.49l-3.92-6.62l3.88-6.35a1 1 0 0 0-.85-1.52H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h31.25a1 1 0 0 0 .86-1.51Zm-23.6-3.31H9.39l-3.26-4.34v4.35H5V15h1.13l3.27 4.35V15h1.12ZM16.84 16h-3.53v1.49h3.2v1h-3.2v1.61h3.53v1h-4.66V15h4.65Zm8.29 5.16H24l-1.55-4.59l-1.55 4.61h-1.12l-2-6.18H19l1.32 4.43L21.84 15h1.22l1.46 4.43L25.85 15h1.23Z"
				className="clr-i-solid clr-i-solid-path-1"></path>
			<path fill="none" d="M0 0h36v36H0z"></path>
		</svg>
	);
};
