export function titleToSlug(title: string) {
	return title.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
}

export function generateRandomString(length: number) {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for ( let i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

export function getReadTimeAttribute(content: string) {
	const wordsPerMin = 300;
	content = content.replace(/<[^>]*>/g, "");
	const numWords = content.split(" ").length;
	const readTime = numWords / wordsPerMin;

	return Math.ceil(readTime);
}

export function generateExcerpt(content: string, length: number): string {
	const contentWithoutTags = content.replace(/<[^>]+>/g, '');
	const excerpt = contentWithoutTags.substr(0, length);
	const finalExcerpt = excerpt.substr(0, Math.min(excerpt.length, excerpt.lastIndexOf(" "))) + '...';

	return finalExcerpt;
}