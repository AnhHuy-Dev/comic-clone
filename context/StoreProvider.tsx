"use client";
import { HistoryComic } from "@/types";
import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

type Props = {
	addComic: (comic: HistoryComic) => void;
	removeComic: (id: string) => void;
	comicItems: HistoryComic[];
};

const StoreContext = createContext({} as Props);

export function useStoreProivider() {
	return useContext(StoreContext);
}

function StoreProvider({ children }: { children: ReactNode }) {
	const [comicItems, setComicItems] = useLocalStorage<HistoryComic[]>("comics", []);

	const addComic = (comic: HistoryComic) => {
		setComicItems((prev) => {
			const index = prev.findIndex((item) => item.id === comic.id);
			if (index === -1) return [...prev, comic];
			const newArray = prev.slice(0, index).concat(prev.slice(index + 1));
			return [...newArray, comic];
		});
	};

	const removeComic = (id: string) => {
		setComicItems((prev) => {
			const index = prev.findIndex((item) => item.id === id);
			const newArray = prev.slice(0, index).concat(prev.slice(index + 1));
			return [...newArray];
		});
	};

	return <StoreContext.Provider value={{ comicItems, addComic, removeComic }}>{children}</StoreContext.Provider>;
}

export default StoreProvider;
