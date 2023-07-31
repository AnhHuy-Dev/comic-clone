export interface Chapter {
	id: number;
	name: string;
}

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
	chapters: Chapter[];
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

export type Reply = {
	avatar: string;
	content: string;
	created_at: string;
	username: string;
	stickers: string[];
	vote_count: number;
	mention_user: string;
};

export interface Comment {
	avatar: string;
	content: string;
	created_at: string;
	replies: Reply[];
	stickers: string[];
	username: string;
	vote_count: number;
}
export interface Genres {
	id: string;
	name: string;
	description: string;
}

export interface HistoryComic {
	id: string;
	title: string;
	thumbnail: string;
	authors: string | string[];
	status: string;
	reading_at: number;
	is_adult: boolean;
	last_reading: string;
	chapter_id: number;
}
