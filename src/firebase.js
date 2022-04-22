import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBqZLyHsjJOSu5HCYI84P4clzOJtz8Pk2k',
  authDomain: 'twitter-clone-react-a6a54.firebaseapp.com',
  projectId: 'twitter-clone-react-a6a54',
  storageBucket: 'twitter-clone-react-a6a54.appspot.com',
  messagingSenderId: '678542156229',
  appId: '1:678542156229:web:17b54bac87dde9c518ebac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
