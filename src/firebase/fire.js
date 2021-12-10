
import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/storage'; 
import 'firebase/auth'; 
import 'firebase/firestore'; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXgHhiEc4ukihL2puy_04iqUIrwLRFmRg",
  authDomain: "phoram-8b070.firebaseapp.com",
  projectId: "phoram-8b070",
  storageBucket: "phoram-8b070.appspot.com",
  messagingSenderId: "488010370347",
  appId: "1:488010370347:web:cb9b1cd26dd3bfe26b896e"
};


// Initialize Firebase



const fire = firebase.initializeApp(firebaseConfig);
export const db=fire.firestore() 
const storage = firebase.storage()

export {storage,firebase as default}