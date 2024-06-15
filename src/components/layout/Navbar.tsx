"use client"

import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/types';

export default function Navbar() {

	const segment: string|null = useSelectedLayoutSegment();
	const pages: NavItem[]  = [
		{ 'name': 'Home', 'url': '/' },
		{ 'name': 'FAQs', 'url': '/faqs' },
		{ 'name': 'Tutorials', 'url': '/tutorials' },
		{ 'name': 'Support', 'url': 'https://support.syriuswallet.com' },
	];

	function isActive(page: string): boolean {
		return "/" + segment === page;
	}

	return (
		<div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
			{pages.map((page: NavItem, index: number) => (
				<Link key={index} href={page.url}
					  className={`py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 ${isActive(page.url) ? 'text-neutral-300' : ''}`}>
						{page.name}
				</Link>
			))}
			<div>
				<a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#19e321] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
				   href="/downloads">
					Download
				</a>
			</div>
        </div>
    );
}