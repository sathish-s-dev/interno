'use client';
import { techSchema } from '@/schemas/contact-schema';
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
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';
import { addContactDetails } from '@/db/contact';

export function TechTalkForm({ className }: { className: string }) {
	const form = useForm<z.infer<typeof techSchema>>({
		resolver: zodResolver(techSchema),
		defaultValues: {
			email: '',
			name: '',
			message: '',
		},
	});
	console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

	return (
		<Form {...form}>
			<form
				className={cn(
					'flex flex-col space-y-8 w-full max-w-2xl self-center',
					className
				)}
				onSubmit={form.handleSubmit(async (values) => {
					try {
						let toastmessage = toast.loading('sending...');
						console.log(values);
						let res = await addContactDetails('tech-talk', values);
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
										className='shadow-none focus-visible:ring-0 outline-none border-none  placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full sm:flex-row flex-col active:border-none focus-visible:ring-opacity-0'
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
										className='shadow-none outline-none border-none placeholder:text-slate-700/60 outline-1 focus-visible:ring-0  focus-visible:ring-opacity-0 w-full sm:flex-row flex-col flex-1'
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
									className='resize-none focus-visible:ring-0 shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full'
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
