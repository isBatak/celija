'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { z } from 'zod';

const isSingleWord = (value: string) => /^[A-Za-z]+$/.test(value);

export async function sendMessage(prevState: any, formData: FormData) {
	const schema = z.object({
		message: z.string().refine(isSingleWord, {
			message: 'Unesite samo jednu riječ',
		}),
		importance: z.enum(['Manja', 'Srednja', 'Visoka']),
	});

	let data;

	try {
		data = schema.parse({
			message: formData.get('message'),
			importance: formData.get('importance'),
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				errors: error.errors,
			};
		}
	}

	try {
		const data = schema.parse({
			message: formData.get('message'),
			importance: formData.get('importance'),
		});

		await sql`INSERT INTO messages (message, importance) VALUES (${data.message}, ${data.importance})`;

		revalidatePath('/');
		revalidatePath('/poruke');

		return {
			message: 'Message sent successfully',
		};
	} catch (error) {
		if (error instanceof Error) {
			return {
				errors: [
					{
						message: 'Error while sending message',
						detail: error.message,
					},
				],
			};
		}
	}
}
