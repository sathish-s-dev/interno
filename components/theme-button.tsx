import React from 'react';
import { ButtonProps, Button as LibButton } from './ui/button';
import { cn } from '@/lib/utils';

export const Button = ({ title, className, ...restProps }: ButtonProps) => {
	return (
		<LibButton
			size='lg'
			className={cn(className, 'hover:animate-pulse')}
			{...restProps}>
			{title}
			<span className='ml-2 text-theme_primary-2'>→</span>
		</LibButton>
	);
};
