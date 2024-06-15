import React from 'react';
import faqs from '../../../public/faqs.json'
import Accordion from '@/components/Accordion';

export default function Page() {
	return (
		<>
			<div>
				<h1 className="mb-7">FAQs</h1>
				<Accordion items={faqs}/>
			</div>
		</>
	);
}