import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC2pMtDD_V5TIcuERRZuQlUv-n78GEIZRo',
	authDomain: 'react-redux-47e24.firebaseapp.com',
	databaseURL: 'https://react-redux-47e24.firebaseio.com',
	projectId: 'react-redux-47e24',
	storageBucket: 'react-redux-47e24.appspot.com',
	messagingSenderId: '807215767360',
	appId: '1:807215767360:web:37154ae7cead986c5e64a5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
