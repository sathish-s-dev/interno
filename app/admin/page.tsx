import Container from '@/components/container';
import { getAllContactDetails } from '@/db/contact';
import React, { useEffect } from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { DocumentData } from 'firebase/firestore';

function headerExtracter<T extends DocumentData | undefined>(data: T) {
	if (data) {
		return Object.keys(data);
	}
}

const AdminPage = async () => {
	let contactData = await getAllContactDetails('contact');
	let techData = await getAllContactDetails('tech-talk');
	console.log(techData?.at(0)?.id);
	return (
		<main className='flex-1'>
			<Container className='h-full grid gap-12'>
				<h1 className='text-center text-2xl uppercase font-dmsans'>
					Admin Page
				</h1>
				<div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
					<div className='border shadow p-6 rounded-lg'>
						<h2 className='text-xl pb-12 font-bold text-slate-700 uppercase text-center'>
							Contact Form Details
						</h2>
						<DataTable
							data={contactData}
							title='Contact Form Details'
						/>
					</div>
					<div className='border shadow p-6 rounded-lg'>
						<h2 className='text-xl pb-12 font-bold text-slate-700 uppercase text-center'>
							tech - talk Form Details
						</h2>
						<DataTable
							title='tech-talk'
							data={techData}
						/>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default AdminPage;

function DataTable({
	title,
	data,
}: {
	title: string;
	data: DocumentData[] | undefined;
}) {
	if (!data?.at(0)) {
		return null;
	}
	let headers = headerExtracter(data[0]);
	return (
		<Table className='max-w-2xl'>
			<TableHeader>
				<TableRow>
					<TableHead className='uppercase font-bold'>No.</TableHead>
					<TableHead className='uppercase font-bold'>Email</TableHead>
					<TableHead className='uppercase font-bold'>message</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map((row, i) => (
					<TableRow key={row.name + i}>
						<TableCell>{i + 1}</TableCell>

						<TableCell>{row.email}</TableCell>
						<TableCell>{row.message.slice(0, 20) + '...'}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
