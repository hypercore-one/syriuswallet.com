import Image from 'next/image';
import Link from 'next/link';

export default function HeaderBrand() {
	return (
		<Link href="/" aria-label="SyriusWallet"
			  className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
			<Image src="/img/syrius-icon-white.svg" alt="Icon" className="inline-block me-2" width={218} height={38} />
		</Link>
	)
}