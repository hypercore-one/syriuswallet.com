import React from 'react';
import Link from 'next/link';
import tutorials from '../../../public/tutorials.json';
import { Tutorial } from '@/types';

export default function Page() {
	return (
		<>
			<div>
				<h1 className="mb-7">Tutorials</h1>
				{tutorials.map((tutorial: Tutorial, index:number) => (
					<div key={index}>
						<Link href={`tutorials/${tutorial.slug}`}>
							{tutorial.title}
						</Link>

					</div>
				))}
			</div>
		</>
	);
}