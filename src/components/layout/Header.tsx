import Navbar from '@/components/layout/Navbar';
import HeaderBrand from '@/components/layout/HeaderBrand';

export default function Header() {
	return (
		<header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
			<nav
				className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
				aria-label="Global">
				<div className="flex items-center justify-between">

					<HeaderBrand/>

					<div className="md:hidden">
						<button type="button"
								className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
								data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse"
								aria-label="Toggle navigation">
							<svg className="hs-collapse-open:hidden flex-shrink-0 size-4"
								 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								 fill="none"
								 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="3" x2="21" y1="6" y2="6"/>
								<line x1="3" x2="21" y1="12" y2="12"/>
								<line x1="3" x2="21" y1="18" y2="18"/>
							</svg>
							<svg className="hs-collapse-open:block hidden flex-shrink-0 size-4"
								 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								 fill="none"
								 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M18 6 6 18"/>
								<path d="m6 6 12 12"/>
							</svg>
						</button>
					</div>
				</div>

				<div id="navbar-collapse"
					 className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
					<Navbar/>
				</div>
			</nav>
		</header>
	);
}