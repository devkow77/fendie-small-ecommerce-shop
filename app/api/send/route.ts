import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		const { data } = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'kowalsky429@gmail.com',
			subject: 'New email from fendi shop',
			html: '<h1>Hello From Fendi Shop</h1>',
		});

		return NextResponse.json({ data }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
