import Image from 'next/image';
import Link from 'next/link';

export default function HeaderBrand() {
	return (
		<Link href="/" aria-label="SyriusWallet"
			  className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
			<Image src="/img/syrius-icon.png" alt="Icon" className="w-11 h-auto" width={16} height={16} />
		</Link>
	)
}