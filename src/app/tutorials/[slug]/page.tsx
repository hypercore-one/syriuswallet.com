import React from 'react';
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown';
import tutorials from '../../../../public/tutorials.json';
import { Tutorial } from '@/types';

interface TutorialPageProps {
	slug: string;
}

export default function Page({params}: {params: TutorialPageProps}) {

	let tutorial: Tutorial|undefined = tutorials.find(
		(tutorial: Tutorial) => tutorial.slug === params.slug
	);

	if (! tutorial) {
		notFound();
	}

	return (
		<>
			<div>
				<h1 className="mb-7">{tutorial.title}</h1>
				<Markdown>{tutorial.content}</Markdown>
			</div>
		</>
	);
}