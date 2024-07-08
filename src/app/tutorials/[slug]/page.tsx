import React from 'react';
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown';
import tutorials from '../../../../public/tutorials.json';
import { Tutorial } from '@/types';
import PageTitle from '@/components/layout/PageTitle';

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
			<div className="max-w-3xl pt-4 px-4 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
				<PageTitle heading={{title: tutorial.title}}/>
				<div className="max-w-2xl">
					<Markdown>{tutorial.content}</Markdown>
				</div>
			</div>
		</>
	);
}