import React from 'react';
import { AccordionFaq } from '../components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Faq = () => {
	return (
		<article>
			<div className="max-w-7xl mx-auto px-6 py-6">
				<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
					FAQ <br /> <span className="text-orange-200">FREQUENTLY ASKED</span> <br /> QUESTIONS
				</h2>
				<AccordionFaq />
				<p className="text-sm leading-7 mb-4 lg:text-base lg:leading-8">
					If the FAQ section does not address your queries adequately, feel free to reach out to us by using the contact form. We are here to assist you and will respond promptly to ensure all your concerns are addressed.
				</p>
				<Button>
					<Link href="/contact">Contact Us</Link>
				</Button>
			</div>
		</article>
	);
};

export default Faq;
