import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { BoyIcon } from "@/icon";

function Girl() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="Girl" type="girl">
				<BoyIcon className="text-emerald-500 w-7 h-7" />
			</ComicContentPart>
			<ScrollToTop />
		</>
	);
}

export default Girl;
