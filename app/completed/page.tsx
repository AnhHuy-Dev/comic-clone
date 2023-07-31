import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { BsFillPatchCheckFill } from "react-icons/bs";

function New() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="Completed" type="completed">
				<BsFillPatchCheckFill className="w-7 h-7" color="#10B981" />
			</ComicContentPart>
			<ScrollToTop />
		</>
	);
}

export default New;
