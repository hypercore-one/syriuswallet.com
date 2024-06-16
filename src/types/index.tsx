export interface NavItem {
	name: string;
	url: string;
}

export interface CardItem {
	title: string;
	image: string;
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