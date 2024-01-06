import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'interno-54a2f.firebaseapp.com',
	projectId: 'interno-54a2f',
	storageBucket: 'interno-54a2f.appspot.com',
	messagingSenderId: '864032503809',
	appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
