import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import { BoyIcon } from "@/icon";

function Girl() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="Girl" type="girl">
				<BoyIcon className="text-emerald-500 w-7 h-7" />
			</ComicContentPart>
		</>
	);
}

export default Girl;
