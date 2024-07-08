import React from 'react';
import {PageHeading} from '@/types';

interface PageTitleProps {
	heading: PageHeading;
}

const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
	const {heading} = props;
	return (
		<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
			<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">{heading.title}</h2>
			<p className="mt-1 text-gray-600 dark:text-neutral-400">{heading.description}</p>
		</div>
	);
}

export default PageTitle;