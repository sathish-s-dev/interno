'use client';
import { getAllContactDetails } from '@/db/contact';
import React, { useEffect } from 'react';

const Page = () => {
	useEffect(() => {
		getAllContactDetails();
	}, []);
	return <div className='flex-1'>Page</div>;
};

export default Page;
