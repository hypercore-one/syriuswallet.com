import React from 'react';
import tutorials from '../../../public/tutorials.json';
import { Tutorial } from '@/types';
import TutorialCard from '@/components/TutorialCard';
import {generateExcerpt} from '@/helpers';
import PageTitle from '@/components/layout/PageTitle';

export default function Page() {
	return (
		<div className="max-w-[85rem] pt-4 px-4 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
			<PageTitle heading={{
				title: 'Tutorials and guides',
				description: 'Simple how to guides for common questions and issues.'
			}}/>
			<div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
				{tutorials.map((tutorial: Tutorial, index: number) => {
					return (
						<TutorialCard key={index} item={{
							title: tutorial.title,
							image: tutorial.image,
							excerpt: tutorial.excerpt ? tutorial.excerpt : generateExcerpt(tutorial.content, 100),
							url: `tutorials/${tutorial.slug}`,
						}}/>
					);
				})}
			</div>
		</div>
	);
}