import { cn } from '@/lib/utils';
import Image from 'next/image';

type ServiceCardProps = {
	right?: boolean;
	title: string;
	description: string;
	number: number;
};

export function ServiceCard({
	right,
	title,
	description,
	number,
}: ServiceCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col sm:flex-row',
				right && 'sm:flex-row-reverse'
			)}>
			<div className='relative overflow-clip flex-1 flex justify-center w-full'>
				<Image
					src={'/style.jpg'}
					alt=''
					className='bg-slate-900 max-w-sm self-center rounded-bl-[450px] rounded-tr-[75px] md:rounded-tr-[150px]'
					width={350}
					height={350}
				/>
			</div>
			<div className='grid place-items-center p-6 flex-1 max-w-lg'>
				<div className='flex justify-between w-full'>
					<Image
						src={`/service/icon${number}.svg`}
						alt={'arrow'}
						width={65}
						height={65}
					/>
					<h3 className='font-dmsans text-7xl text-slate-50'>0{number}</h3>
				</div>
				<div className='grid gap-2'>
					<h3 className='font-dmsans text-3xl tracking-widest '>{title}</h3>
					<p className='tracking-wider '>{description}</p>
				</div>
			</div>
		</div>
	);
}
