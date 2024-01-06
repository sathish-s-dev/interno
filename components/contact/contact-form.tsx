'use client';
import { contactSchema, techSchema } from '@/schemas/contact-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../theme-button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import toast from 'react-hot-toast';
import { addContactDetails } from '@/db/contact';

export function ContactForm() {
	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			email: '',
			name: '',
			subject: '',
			phone: '',
			message: '',
		},
	});

	return (
		<Form {...form}>
			<form
				className='flex flex-col space-y-8 w-full max-w-2xl self-center'
				onSubmit={form.handleSubmit(async (values) => {
					try {
						let toastmessage = toast.loading('sending...');
						console.log(values);
						let res = await addContactDetails('contact', values);
						console.log(res);
						toast.dismiss(toastmessage);
						toast.success('Message sent!');
						form.reset();
					} catch (error) {
						console.error(error);
					}
				})}>
				<div className='flex flex-col sm:flex-row gap-3'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='w-full border-b border-slate-700/60'>
								<FormControl>
									<Input
										placeholder='Name'
										{...field}
										className='focus-visible:ring-0  shadow-none outline-none border-none  placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full sm:flex-row flex-col'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='w-full border-b border-slate-700/60'>
								<FormControl>
									<Input
										placeholder='Email'
										{...field}
										className='focus-visible:ring-0  shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full sm:flex-row flex-col flex-1'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='flex flex-col sm:flex-row gap-3'>
					<FormField
						control={form.control}
						name='subject'
						render={({ field }) => (
							<FormItem className='w-full border-b border-slate-700/60'>
								<FormControl>
									<Input
										placeholder='Subject'
										{...field}
										className='focus-visible:ring-0  shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem className='w-full border-b border-slate-700/60'>
								<FormControl>
									<Input
										placeholder='Phone'
										{...field}
										className='focus-visible:ring-0  shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem className='w-full border-b border-slate-700/60'>
							<FormControl>
								<Textarea
									placeholder='Hello Iam Intrested in..'
									{...field}
									rows={4}
									className='resize-none focus-visible:ring-0 focus-visible:ring-0  shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className='self-end'
					title='send now'
				/>
			</form>
		</Form>
	);
}
