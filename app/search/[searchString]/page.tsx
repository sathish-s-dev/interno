import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React from 'react';

const Page = ({
	params: { searchString },
}: {
	params: { searchString: string };
}) => {
	console.log(decodeURI(searchString));

	return (
		<main className='flex-1'>
			<MagnifyingGlassIcon className='w-20 h-20 text-slate-500' />
      <p>The search string is: {decodeURI(searchString)}</p>
		</main>
	);
};

export default Page;
