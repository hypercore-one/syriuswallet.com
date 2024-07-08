import React from 'react';
import {DownloadCardItem} from '@/types';

interface DownloadCardProps {
	item: DownloadCardItem;
}

const DownloadCard: React.FC<DownloadCardProps> = (props: DownloadCardProps) => {
	const {item} = props;
	return (
		<a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
		   href={item.url}>
			<div className="p-4 md:p-5">
				<div className="flex justify-between items-center">
					<div>
						<h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
							{item.title}
						</h3>
						<p className="text-sm text-gray-500 dark:text-neutral-500">
							{item.excerpt}
						</p>
					</div>
					<div className="ps-3">
						<svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200"
							 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="m9 18 6-6-6-6"/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	)
}

export default DownloadCard