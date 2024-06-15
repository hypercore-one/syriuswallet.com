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
The FAQs are populated from the `.md` files in `src/md/faqs` these are compiled to a `.json` file during the build process. 

To add a new FAQ simply create a new markdown file using an existing one as a template, then run `npm run generate:faqs`