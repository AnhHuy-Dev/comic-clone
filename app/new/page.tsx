import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import { NewSignIcon } from "@/icon";

function New() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="New" type="new">
				<NewSignIcon />
			</ComicContentPart>
		</>
	);
}

export default New;
