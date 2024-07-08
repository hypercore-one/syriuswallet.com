export interface NavItem {
	name: string;
	url: string;
}

export interface PageHeading {
	title: string;
	description?: string;
}

export interface PageHero {
	title: string;
	description?: string;
	bgColour: string;
}

export interface TutorialCardItem {
	title: string;
	image: string;
	excerpt: string;
	url: string;
}

export interface DownloadCardItem {
	image: string;
	title: string;
	excerpt: string;
	url: string;
}

export interface AccordionItem {
	title: string;
	content: string;
}

export interface Tutorial {
	title: string;
	slug: string;
	image: string;
	content: string;
	excerpt?: string;
	order: number;
}

export interface FAQ {
	title: string;
	content: string;
}