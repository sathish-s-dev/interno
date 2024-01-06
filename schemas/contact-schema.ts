import { z } from 'zod';

export const contactSchema = z.object({
	email: z.string().email(),
	name: z.string().min(3),
	subject: z.string().min(10).optional(),
	phone: z.string().min(10).optional(),
	message: z.string().min(10),
});

export const techSchema = z.object({
	email: z.string().email(),
	name: z.string().min(3),
	message: z.string().min(10),
});
