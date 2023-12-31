'use client';

import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function CarouselPremieres() {
	return (
		<Carousel className="w-full mt-4">
			<CarouselContent>
				{Array.from({ length: 10 }).map((_, index) => (
					<CarouselItem key={index} className="basis-1/2 cursor-pointer sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
						<div>
							<Card className="rounded-2xl">
								<CardContent className="relative aspect-square dark:bg-neutral-800 bg-slate-300 border dark:border-neutral-700 border-slate-300 rounded-2xl">
									<div className="absolute bottom-4 text-xs lg:text-sm text-slate-400">
										<h4>Hoodie Ragor</h4>
										<p>39.99$</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
