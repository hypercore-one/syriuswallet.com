import React from 'react';
import Markdown from 'react-markdown'

interface Item {
	title: string;
	content: string;
}

interface AccordionProps {
	items: Item[];
}

const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
	const { items } = props;
	const uuid = Math.random().toString(36);

	return (
		<div className={`hs-accordion-group group-${uuid}`}>
			{items.map((item, index:number) => (
				<div key={index} id={`accordion-${uuid}-heading-${index}`}
					 className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700">
					<button
						className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
						aria-controls={`accordion-${uuid}-heading-${index}`}>
						<svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg"
							 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M5 12h14"></path>
							<path d="M12 5v14"></path>
						</svg>
						<svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg"
							 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M5 12h14"></path>
						</svg>
						{item.title}
					</button>
					<div id={`accordion-${uuid}-content-${index}`}
						 className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
						 aria-labelledby={`accordion-${uuid}-heading-${index}`}>
						<div className="pb-4 px-5 text-gray-800 dark:text-neutral-200">
							<Markdown>{item.content}</Markdown>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Accordion;