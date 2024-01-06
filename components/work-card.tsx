import { cn } from '@/lib/utils';
import { Button } from './theme-button';

type WorkCardProps = {
	title: string;
	description: string;
	active?: boolean;
};

export function WorkCard({ title, description, active }: WorkCardProps) {
	return (
		<div
			className={cn(
				' self-center shadow-md px-8 space-y-3 max-w-xs p-6 rounded-3xl hover:bg-theme_primary-3 transition-colors duration-300',
				active ? 'bg-theme_primary-3' : ''
			)}>
			<h3 className='text-lg font-semibold'>{title}</h3>
			<p className='text-sm'>{description}</p>
			<Button
				variant={'link'}
				title='Read More'
			/>
		</div>
	);
}
