import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
 
const firebaseConfig = {
    apiKey: "AIzaSyB2L0U_tk0zSNJdqK1sfN35SDrtKYh_A3c",
    authDomain: "foodorderapp-15d67.firebaseapp.com",
    databaseURL: "https://foodorderapp-15d67-default-rtdb.firebaseio.com",
    projectId: "foodorderapp-15d67",
    storageBucket: "foodorderapp-15d67.appspot.com",
    messagingSenderId: "997604750985",
    appId: "1:997604750985:web:2f37b0bc15d33b235f3858"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{ app, firestore, storage};