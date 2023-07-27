import ComicContentPart from "@/components/ComicContentPart";
import Navbar from "@/components/Navbar";
import { RecentlyIcon } from "@/icon";

function Recently() {
	return (
		<>
			<Navbar />
			<ComicContentPart title="Recently" type="recently">
				<RecentlyIcon className="text-emerald-500 w-7 h-7" />
			</ComicContentPart>
		</>
	);
}

export default Recently;
