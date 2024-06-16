import React from 'react';
import tutorials from '../../../public/tutorials.json';
import { Tutorial } from '@/types';
import TutorialCard from '@/components/TutorialCard';
import {generateExcerpt} from '@/helpers';

export default function Page() {
	return (
		<>
			<div className="max-w-[85rem] pt-4 px-4 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Tutorials and
						guides</h2>
					<p className="mt-1 text-gray-600 dark:text-neutral-400">Simple how to guides for common questions
						and issues.</p>
				</div>
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
		</>
	);
}