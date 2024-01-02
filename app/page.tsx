import Image from 'next/image';
import Link from 'next/link';
import { CarouselPremieres } from './components/carousel-premieres';
import { CardsPolicity } from './components';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<main>
			<div className="max-w-7xl mx-auto px-6 pb-6 space-y-8 xl:space-y-12">
				<header>
					<h2 className="text-3xl font-black text-slate-400 dark:text-white md:text-4xl lg:text-5xl xl:text-6xl">
						FENDIE <br /> <span className="text-slate-300 dark:text-stone-400">BEST</span> CLOTHES <br /> IN NEW YORK{' '}
					</h2>
					<section className="grid grid-cols-4 grid-rows-4 gap-4 h-[25rem] rounded-2xl mt-4 lg:h-[28rem]">
						<div className="relative col-span-4 row-span-3 bg-neutral-700 rounded-2xl overflow-hidden sm:col-span-2 sm:row-span-4">
							<Image src="/main.jpg" alt="woman with hoodie" width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl cursor-pointer hover:scale-125 duration-1000" />
						</div>
						<div className="relative col-span-2 bg-neutral-700 rounded-2xl sm:row-span-2">
							<Link href="/products/men">
								<Image src="/men.jpg" alt="men products section image" width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl" />
								<div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl flex items-center justify-center hover:bg-transparent duration-500">
									<h3 className="text-lg font-extrabold text-white sm:text-2xl xl:text-4xl">MEN</h3>
								</div>
							</Link>
						</div>
						<div className="relative col-span-2 bg-neutral-700 rounded-2xl sm:row-span-2">
							<Link href="/products/women">
								<Image src="/women.jpg" alt="women products section image" width={600} height={600} className="absolute w-full h-full object-cover rounded-2xl object-center" />
								<div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl flex items-center justify-center hover:bg-transparent duration-500">
									<h3 className="text-lg font-extrabold text-white sm:text-2xl xl:text-4xl">WOMEN</h3>
								</div>
							</Link>
						</div>
					</section>
				</header>
				<article>
					<p className="text-sm leading-7 text-center max-w-4xl mx-auto lg:text-base lg:leading-8">
						Fendie, a distinctive and imaginative online boutique, specializes in offering a unique collection of hoodies that capture the essence of old-world charm and timeless style. Each hoodie from Fendie is meticulously designed to evoke a
						sense of nostalgia, drawing inspiration from vintage aesthetics and classic craftsmanship. The carefully curated selection reflects a commitment to quality, blending modern comfort with the enduring appeal of old-style fashion.
					</p>
				</article>
				<article>
					<div className="flex items-end justify-between">
						<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
							THE NEWEST <br /> <span className="text-orange-200">PREMIERES</span>
						</h2>
						<h3 className="text-xs opacity-80 hover:opacity-100 duration-200 sm:text-sm">
							<Link href="/premieres">View All Products</Link>
						</h3>
					</div>
					<CarouselPremieres />
				</article>
				<article>
					<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
						OUR SHOP <br /> <span className="text-orange-200">POLICITY</span>
					</h2>
					<CardsPolicity />
				</article>
				{/* <article>
					<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
						NOT SURE <br /> <span className="text-orange-200">SIZE?</span>
					</h2>
					<p className="text-sm leading-7 max-w-xl my-2 lg:text-base lg:leading-8">Find your perfect fit with ease check our size chart for accurate measurements before making a selection.</p>
					<Button>
						<Link href="/size">Check Your Size</Link>
					</Button>
				</article> */}
				{/* <article>
					<div className="grid grid-cols-2 gap-4">
						<div className="aspect-square max-h-80 bg-neutral-800 rounded-2xl"></div>
						<div className="aspect-square max-h-80 bg-neutral-800 rounded-2xl"></div>
					</div>
				</article> */}
			</div>
		</main>
	);
}
