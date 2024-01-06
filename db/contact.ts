'use server';

import { collection, addDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase.config';

export async function addContactDetails(path: string, data: any) {
	try {
		let res = await addDoc(collection(db, 'interno', `${path}/form`), data);
		return {
			status: 'ok',
			res: res.id,
		};
	} catch (error) {
		console.error(error);
	}
}
export async function getAllContactDetails(path: string) {
	try {
		let res = await getDocs(collection(db, 'interno', path, 'form'));
		// console.log(res.docs.map((doc) => doc.data()));
		return res.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});
	} catch (error) {}
}
