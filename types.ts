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

export interface Genres {
	id: string;
	name: string;
	description: string;
}
