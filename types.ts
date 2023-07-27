export interface Genres {}

export interface Comic {
	id: string;
	is_trending: boolean;
	thumbnail: string;
	title: string;
	short_description: string;
	genres: Genres[];
	lastest_chapters: {
		id: string;
		name: string;
		updated_at: string;
	}[];
	status: string;
	total_views: string;
	total_comments: string | number;
	followers: string;
	updated_at: string;
	authors: string | string[];
}

export type ComicDetail = {
	average: number;
	chapters: {
		id: number;
		name: string;
	}[];
	description: string;
	followers: number;
	genres: {
		id: string;
		name: string;
	}[];
	is_adult: boolean;
	other_names: string[];
	rating_count: number;
	id: string;
	title: string;
	thumbnail: string;
	status: string;
	total_views: number | string;
	authors: string | string[];
};

export interface Genres {
	id: string;
	name: string;
	description: string;
}
