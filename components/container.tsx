import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				'max-w-5xl md:py-16 py-6 my-5 px-6 w-[90%] h-full mx-auto',
				className
			)}>
			{children}
		</div>
	);
};

export default Container;
