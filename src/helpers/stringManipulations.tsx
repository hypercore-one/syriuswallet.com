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