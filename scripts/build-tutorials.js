const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Directory where your markdown files are located
const faqDir = path.join(__dirname, '../content/tutorials');
const files = fs.readdirSync(faqDir);

// Extract title and content from each markdown file
const faqs = files.map(filename => {
	const filePath = path.join(faqDir, filename);
	const rawContent = fs.readFileSync(filePath, 'utf-8');

	// Use gray-matter to parse the frontmatter of the markdown file
	const { data, content } = matter(rawContent);

	return {
		order: data.order,
		title: data.title,
		excerpt: data.excerpt,
		image: data.image,
		slug: data.slug.toLowerCase().trim().replace(/[\s\W-]+/g, '-'),
		content
	};
}).sort((a, b) => a.order - b.order);

// Save to JSON file
fs.writeFileSync(
	path.join(__dirname, '../public/tutorials.json'),
	JSON.stringify(faqs, null, 2),
	'utf-8'
);