import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { NewSignIcon } from "@/icon";

function New() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="New" type="new">
				<NewSignIcon />
			</ComicContentPart>
			<ScrollToTop />
		</>
	);
}

export default New;
