import Container from "../container";
import { Separator } from "../ui/separator";

export function CounterSection() {
	const counterData = [
		{
			count: 12,
			title: 'Years of Experience',
		},
		{
			count: 85,
			title: 'Success Projects',
		},
		{
			count: 100,
			title: 'Happy Clients',
		},
		{
			count: 15,
			title: 'Active Projects',
		},
	];
	return (
		<div className='bg-[#F4F0EC] w-full'>
			<Container className='bg-[#F4F0EC] w-full mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{counterData.map((data, i) => (
						<div key={data.title + i}>
							<Counter
								count={data.count}
								title={data.title}
								last={i === counterData.length - 1}
							/>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

type CounterProps = {
	count: number;
	title: string;
	last: boolean;
};

function Counter({ count, last, title }: CounterProps) {
	return (
		<div className='grid place-items-center relative font-dmsans'>
			<h3 className='font-bold text-4xl text-[#CDA274]'>{count}</h3>
			<p className='font-light'>{title}</p>
			{!last && (
				<Separator
					className='absolute right-0 bg-[#CDA274]'
					color='#CDA274'
					orientation='vertical'
				/>
			)}
		</div>
	);
}
