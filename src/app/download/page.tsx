import React from 'react';
import type {Metadata} from 'next';
import {DownloadCardItem, Tutorial} from '@/types';
import tutorials from '../../../public/tutorials.json';
import TutorialCard from '@/components/TutorialCard';
import {generateExcerpt} from '@/helpers';
import DownloadCard from '@/components/DownloadCard';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
	title: "Download the latest Syrius wallet today",
	description: "Download the Syrius Wallet today",
};

export default function Page() {

	const downloadLinks: DownloadCardItem[] = [
		{
			image: '',
			title: 'Download for iOS',
			excerpt: 'Get the mobile wallet from the App Store',
			url: 'https://apple.com'
		},{
			image: '',
			title: 'Download for Android',
			excerpt: 'Get the mobile wallet from Google Play',
			url: 'https://google.com'
		},{
			image: '',
			title: 'Download for Desktops',
			excerpt: 'Get the desktop wallet for Mac, Windows or Linux',
			url: 'https://github.com'
		},{
			image: '',
			title: 'Download APK for Android',
			excerpt: 'Get the mobile wallet using Android APK',
			url: 'https://github.com'
		}
	]

	return (
		<div className="max-w-[85rem] pt-4 px-4 sm:px-6 lg:px-8 lg:pb-14 mx-auto">

			<PageHero details={{
				title: "Download\nS Y R I U S Wallet",
				description: "The S Y R I U S Wallet is available as a mobile app & desktop app",
				bgColour: "zenon-green",
			}}/>

			<div className="grid sm:grid-cols-2 gap-8">
				{downloadLinks.map((download: DownloadCardItem, index: number) => {
					return (
						<DownloadCard key={index} item={{
							title: download.title,
							image: download.image,
							excerpt: download.excerpt,
							url: download.url,
						}}/>
					);
				})}
			</div>
		</div>
	);
}