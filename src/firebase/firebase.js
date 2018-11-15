import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDEyM4QVRK-mvXXb7Ti0jYO49oZZVz-aLs",
  authDomain: "wayfarer-aedb7.firebaseapp.com",
  databaseURL: "https://wayfarer-aedb7.firebaseio.com",
  projectId: "wayfarer-aedb7",
  storageBucket: "wayfarer-aedb7.appspot.com",
  messagingSenderId: "1075015279579"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
	auth,
};



