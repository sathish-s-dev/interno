'use client';

import React from 'react';
import { Form, UseFormReturn } from 'react-hook-form';
import { Button } from './theme-button';
import { FormField, FormItem, FormControl, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const GeneralForm = ({
	form,
	except,
}: {
	form: UseFormReturn<
		{
			name: string;
			email: string;
			message: string;
			phone?: string;
			subject?: string;
		},
		any,
		undefined
	>;
	except?: boolean;
}) => {
	return (
		<Form {...form}>
			<form
				className='flex flex-col space-y-8 w-full max-w-2xl self-center'
				onSubmit={form.handleSubmit((values) => {
					try {
						console.log(values);
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
										className='shadow-none outline-none border-none  placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full sm:flex-row flex-col'
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
										className='shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full sm:flex-row flex-col flex-1'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{!except && (
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
											className='shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full'
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
											className='shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				)}
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
									className='shadow-none outline-none border-b-2 border-none placeholder:text-slate-700/60 outline-1  focus-visible:ring-primary w-full'
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
};

export default GeneralForm;
