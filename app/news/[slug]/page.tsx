import { GraphQLClient } from 'graphql-request';
import React from 'react';
import Image from 'next/image';
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

interface NewsAllInterface {
	id: number;
	slug: string;
	image: {
		url: string;
	};
	title: string;
	date: string;
}

interface GraphQLResponse {
	news: NewsInterface;
	newsAll: NewsAllInterface[];
}

const getUniqueNews = async (slug: string) => {
	const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

	const { news, newsAll }: GraphQLResponse = await hygraph.request(`
       query MyQuery {
            news(where: {slug: "${slug}"}) {
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
            newsAll(
                where: {slug_not: "${slug}"}
            ) {
                slug
                image {
                url
                }
                title
                date
            }
        }
    `);

	return { news, newsAll };
};

const SingleNews = async ({ params: { slug } }: { params: { slug: string } }) => {
	const { news, newsAll } = await getUniqueNews(slug);

	return (
		<article>
			<div className="max-w-7xl mx-auto p-6 space-y-6">
				<section>
					<h2 className="text-2xl max-w-2xl font-black md:text-3xl xl:text-4xl">{news.title}</h2>
					<h3 className="font-semibold mt-2 lg:mt-4">Created at: {news.date} 🕛</h3>
					<div className="relative aspect-video max-w-xl rounded-2xl bg-neutral-800 mt-4 lg:mt-6">
						<Image src={news.image.url} alt={news.title} width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl" />
					</div>
					<div dangerouslySetInnerHTML={{ __html: news.content.html }} className="text-sm leading-7  mt-4 lg:text-base lg:leading-8 lg:mt-6" />
				</section>
				<section>
					<h3 className="font-semibold lg:text-lg">Similiar News</h3>
					<section className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{newsAll.length &&
							newsAll.map((news: NewsAllInterface) => (
								<Link href={news.slug} key={news.id}>
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
				</section>
			</div>
		</article>
	);
};

export default SingleNews;
