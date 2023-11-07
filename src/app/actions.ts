'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { importanceOptions } from './constants';

const isSingleWord = (value: string) => /^[A-Za-z0-9]+$/.test(value);

const MyEnum = z.enum(importanceOptions);
const MyCustomEnum = MyEnum.nullable().refine(
	(value) => {
		return MyEnum.safeParse(value).success;
	},
	{
		message: 'Odaberite važnost',
	}
);

export async function sendMessage(currentState: any, formData: FormData) {
	const schema = z.object({
		message: z
			.string()
			.refine((value: string) => value.length > 0, {
				message: 'Unesite poruku',
			})
			.refine(isSingleWord, {
				message: 'Unesite samo jednu riječ',
			}),
		importance: MyCustomEnum,
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
			message: 'Poruka je uspješno poslana',
		};
	} catch (error) {
		if (error instanceof Error) {
			return {
				errors: [
					{
						message: 'Dogodila se greška u sustavu!',
						detail: error.message,
					},
				],
			};
		}
	}
}

export async function updateMessageDone(message: any) {
	const schema = z.object({
		id: z.string(),
		done: z.boolean(),
	});

	let data;

	try {
		data = schema.parse(message);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				errors: error.errors,
			};
		}
	}

	try {
		const data = schema.parse(message);

		await sql`UPDATE messages SET done = ${data.done} WHERE id = ${data.id}`;

		revalidatePath('/poruke');

		return {
			message: 'Poruka je uspješno ažurirana',
		};
	} catch (error) {
		if (error instanceof Error) {
			return {
				errors: [
					{
						message: 'Dogodila se greška u sustavu!',
						detail: error.message,
					},
				],
			};
		}
	}
}
