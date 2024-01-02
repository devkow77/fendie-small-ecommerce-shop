import React from 'react';
import { ContactForm, GoogleMap } from '../components/index';

const Contact = () => {
	return (
		<article>
			<div className="max-w-7xl mx-auto px-6 py-6">
				<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
					CONTACT <br /> <span className="text-orange-200">FORM</span>
				</h2>
				<p className="text-sm leading-7 mt-2 lg:text-base lg:leading-8">For any questions, feedback, or partnership inquiries, feel free to drop me a message. I'm always eager to hear from you!</p>
				<div className="md:flex md:flex-row md:items-center md:gap-6 lg:mt-6">
					<GoogleMap />
					<ContactForm />
				</div>
			</div>
		</article>
	);
};

export default Contact;
