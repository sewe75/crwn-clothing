import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAfwwvg2zX7Mqh9OKk-9YNPC1Knit0O86U',
  authDomain: 'crwn-db-sewe75.firebaseapp.com',
  databaseURL: 'https://crwn-db-sewe75.firebaseio.com',
  projectId: 'crwn-db-sewe75',
  storageBucket: 'crwn-db-sewe75.appspot.com',
  messagingSenderId: '750111411168',
  appId: '1:750111411168:web:41305cea5e641f957cf985',
  measurementId: 'G-CCNFQ52DQN',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
