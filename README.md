# SyriusWallet.com

This is a [Next.js](https://nextjs.org/) project requiring node v22+

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# FAQs Page
The FAQs are populated from the `.md` files in `src/content/faqs` these are compiled to a `public/faqs.json` file during the build process. 

To add a new FAQ simply create a new markdown file in `src/content/faqs` using the following template, then run `npm run generate:faqs`

```markdown
---
title: Example question
order: 1
---
Example answer text goes here
```

# Tutorials Page

The Tutorials are populated from the `.md` files in `src/content/tutorials` these are compiled to a `public/tutorials.json` file during the build process.

To add a new tutorial simply create a new markdown file in `src/content/tutorials` using the following template. 

If you want to include images in your tutorial please make a new folder in the `public/img/tutorials/` directory and use absolute paths in the `.md` file as in the example below.

When your tutorial is ready run `npm run generate:tutorials`

```markdown
---
title: Example tutorial
slug: example-tutorial
image: /img/tutorials/example-tutorial/cover.jpg
order: 1
---
The body of the tutorial goes here, you can use normal markdown formatting
![alt text](/img/tutorials/example-tutorial/example-image-1.jpg "Title text")
```