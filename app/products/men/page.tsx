import React from 'react';
import { ProductsPagination } from '../../components';

const MenProducts = () => {
	return (
		<article>
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
					ALL <br /> <span className="text-orange-200">MEN PRODUCTS</span>
				</h2>
				<section className="flex flex-col gap-4 mt-4 max-w-xl sm:mt-6 md:flex-row md:justify-between">
					<div>
						<h3 className="font-semibold">Products</h3>
						<ul className="text-sm mt-2 flex items-center gap-2 flex-wrap md:flex-col md:items-start lg:text-base lg:mt-4">
							<li className="hover:text-orange-200 duration-200 cursor-pointer">Hoodie</li>
							<li className="hover:text-orange-200 duration-200 cursor-pointer">T-shirt</li>
							<li className="hover:text-orange-200 duration-200 cursor-pointer">Tracksuit</li>
							<li className="hover:text-orange-200 duration-200 cursor-pointer">Longsleeve</li>
							<li className="hover:text-orange-200 duration-200 cursor-pointer">Jacket</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold">Price</h3>
						<ul className="space-y-1 text-sm mt-2 lg:text-base lg:mt-4">
							<li className="hover:text-orange-200 duration-200 cursor-pointer">Lowest - Highest</li>
							<li className="hover:text-orange-200 duration-200 cursor-pointer">Highest - Lowest</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold">Promotions</h3>
						<ul className="text-sm mt-2 flex items-center gap-2 flex-wrap md:flex-col md:items-start lg:text-base lg:mt-4">
							<li className="hover:text-orange-200 duration-200 cursor-pointer">Sales</li>
							<li className="hover:text-orange-200 duration-200 cursor-pointer">All Products</li>
						</ul>
					</div>
				</section>
				<section className="py-6 sm:py-8">
					<h3 className="font-bold text-center lg:text-lg">Products</h3>
					<div className="grid grid-cols-2 gap-4 mt-4 mb-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
						<div>
							<div className="aspect-square bg-neutral-800 rounded-2xl"></div>
							<p className="text-xs mt-2 lg:text-sm lg:mt-4">
								Hoodie Off White New Season <br /> <span className="font-semibold">199.99$</span>
							</p>
						</div>
					</div>
					<ProductsPagination />
				</section>
			</div>
		</article>
	);
};

export default MenProducts;
