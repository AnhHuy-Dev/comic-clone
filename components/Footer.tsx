import { BsFacebook, BsGithub } from "react-icons/bs";

function Footer() {
	return (
		<div className="flex flex-col items-center py-12 gap-y-4">
			<div className="flex items-center gap-x-4">
				<BsFacebook className="w-6 h-6 hover:text-gray-500 text-gray-400 cursor-pointer" />
				<BsGithub className="w-6 h-6 hover:text-gray-500 text-gray-400 cursor-pointer" />
			</div>
			<p className="text-[#9CA3AF]">© 2023 NComics™. All rights reserved</p>
		</div>
	);
}

export default Footer;
