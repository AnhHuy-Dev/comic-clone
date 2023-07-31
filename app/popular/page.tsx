import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { BsFire } from "react-icons/bs";

function Popular() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="Popular" type="popular">
				<BsFire className="w-7 h-7" color="#10B981" />
			</ComicContentPart>
			<ScrollToTop />
		</>
	);
}

export default Popular;
