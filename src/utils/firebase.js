import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDZGNCAffFBs-fCoAFpVVI8HbsWMxRFKFI",
	authDomain: "gamesource-64f12.firebaseapp.com",
	projectId: "gamesource-64f12",
	storageBucket: "gamesource-64f12.appspot.com",
	messagingSenderId: "915108996912",
	appId: "1:915108996912:web:052ff48c76d50d1f1ccaf5",
	measurementId: "G-01K4TV1F7E",
};

initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH };
