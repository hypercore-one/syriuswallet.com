import React from 'react';
import faqs from '../../../public/faqs.json'
import Accordion from '@/components/Accordion';
import PageTitle from '@/components/layout/PageTitle';

export default function Page() {
	return (
		<div className="max-w-[85rem] pt-4 px-4 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
			<PageTitle heading={{
				title: 'Your questions, answered',
				description: 'Answers to the most frequently asked questions.'
			}} />
			<Accordion items={faqs}/>
		</div>
	);
}