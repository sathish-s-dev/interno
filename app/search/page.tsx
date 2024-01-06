import React from 'react';

const Page = ({ params }: { params: {} }) => {
	console.log(params);
	return <main className='flex-1'>Page</main>;
};

export default Page;
