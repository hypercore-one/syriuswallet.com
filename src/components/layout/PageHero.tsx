import React from 'react';
import {PageHero as PageHeroType} from '@/types';

interface PageHeroProps {
	details: PageHeroType;
}

const PageHero: React.FC<PageHeroProps> = (props: PageHeroProps) => {
	const {details} = props;
	return (
		<section
			className={`m-auto flex w-full max-w-screen-max+padding flex-col-reverse justify-between gap-7 rounded-[20px] bg-gradient-to-br from-${details.bgColour} px-5 py-8 mb-10 tablet:flex-row tablet:items-center desktop:rounded-[30px] desktop:p-16 desktop:px-[100px] max-w-screen-max`}>
			<div>
				<h1
					className="default-transition text-black font-bold text-2xl" style={{ whiteSpace: 'pre-line' }}>{details.title}
				</h1>
				<p
					className="default-transition mt-6 max-w-[35ch] text-gray-950">
					{details.description}
				</p>
			</div>
		</section>
	)
}

export default PageHero;