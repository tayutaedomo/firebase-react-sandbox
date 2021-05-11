import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

if (firebase.apps.length === 0) {
  // const app = firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

  if (process.env.NODE_ENV === 'development') {
    // app.functions().useEmulator('localhost', 5001);
    firebase.functions().useEmulator('localhost', 5001);
    console.log('useEmulator');
  }
}

const auth = firebase.auth();

export const signInAnonymously = () => {
  auth
    .signInAnonymously()
    .then(() => {
      console.log('Signed in as anonymous.');
    })
    .catch((err) => {
      console.error(err);
    });
};

const functions = firebase.functions();
const echoUs = functions.httpsCallable('firebase_echo_us');
const echoAsia = functions.httpsCallable('firebase_echo_asia');

export const callEchoUs = async () => {
  await echoUs({ message: 'abc123' })
    .then((result) => {
      console.log('echo result:', result);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const callEchoAsia = async () => {
  await echoAsia({ message: 'abc123' })
    .then((result) => {
      console.log('echo result:', result);
    })
    .catch((err) => {
      console.error(err);
    });
};
