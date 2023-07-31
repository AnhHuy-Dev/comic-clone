import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { RecentlyIcon } from "@/icon";

function Recently() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="Recently" type="recently">
				<RecentlyIcon className="text-emerald-500 w-7 h-7" />
			</ComicContentPart>
			<ScrollToTop />
		</>
	);
}

export default Recently;
