import React from 'react';
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown';
import tutorials from '../../../../public/tutorials.json';
import { Tutorial } from '@/types';

interface TutorialPageProps {
	slug: string;
}

export default function Page({params}: {params: TutorialPageProps}) {

	let tutorial: Tutorial | undefined = tutorials.find(
		(t: Tutorial) => t.slug === params.slug
	);

	if (! tutorial) {
		notFound();
	}

	return (
		<>
			<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
				<div className="max-w-2xl">
					<div className="space-y-5 md:space-y-8">
						<div className="space-y-3">
							<h2 className="text-2xl font-bold md:text-3xl dark:text-white">{tutorial.title}</h2>
						</div>
						<Markdown>{tutorial.content}</Markdown>
					</div>
				</div>
			</div>
		</>
	);
}