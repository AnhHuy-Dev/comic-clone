import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import { BoyIcon } from "@/icon";

function Boy() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="Boy" type="boy">
				<BoyIcon className="text-emerald-500 w-7 h-7" />
			</ComicContentPart>
		</>
	);
}

export default Boy;
