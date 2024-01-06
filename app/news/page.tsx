import React from 'react';
import Image from 'next/image';
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';

interface NewsInterface {
	id: number;
	slug: string;
	image: {
		url: string;
	};
	title: string;
	content: {
		html: string;
	};
	date: string;
}

interface GraphQLResponse {
	newsAll: NewsInterface[];
}

const getNews = async () => {
	const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

	const { newsAll }: GraphQLResponse = await hygraph.request(`
        query MyQuery {
			newsAll {
				slug
				image {
				url
				}
				title
				content {
					html
				}
				date
			}
		}
    `);

	return newsAll;
};

const News = async () => {
	const news = await getNews();
	console.log(news);

	return (
		<article>
			<div className="max-w-7xl mx-auto p-6">
				<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
					SHOP <span className="text-orange-200">NEWS</span>
				</h2>
				<p className="text-sm leading-7 mt-2 lg:text-base lg:leading-8">
					Explore the latest trends and arrivals in our fashion-forward news section for our online clothing store. Stay informed about exclusive releases, style tips, and exciting promotions as we curate a dynamic shopping experience tailored
					just for you.
				</p>
				<section className="flex flex-col gap-4 mt-4 max-w-3xl sm:mt-6 md:flex-row md:justify-between">
					<div>
						<h3 className="font-semibold">Sort</h3>
						<ul className="space-y-1 text-sm mt-2 lg:text-base lg:mt-4">
							<li className="hover:text-orange-200 duration-200 cursor-pointer">The Newest</li>
							<li className="hover:text-orange-200 duration-200 cursor-pointer">The Oldest</li>
						</ul>
					</div>
				</section>
				<section className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{news.length &&
						news.map((news: NewsInterface) => (
							<Link href={`news/${news.slug}`} key={news.id}>
								<div className="relative aspect-video bg-neutral-800 rounded-2xl">
									<Image src={news.image.url} alt={news.title} width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl" />
									<div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl text-sm p-4 flex flex-col justify-end hover:bg-opacity-40 duration-300">
										<h3 className="font-semibold">{news.title}</h3>
										<p>{new Date(news.date).toDateString()}</p>
									</div>
								</div>
							</Link>
						))}
				</section>
			</div>
		</article>
	);
};

export default News;
