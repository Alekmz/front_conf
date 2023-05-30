// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
import { getMessaging, getToken } from "firebase/messaging";

export const Firebase = () => {



}

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBrXYWlx3pLUE_wshtLaQ71Ag9dl2X-TbU",
//   authDomain: "my-project-confe.firebaseapp.com",
//   projectId: "my-project-confe",
//   storageBucket: "my-project-confe.appspot.com",
//   messagingSenderId: "864794694374",
//   appId: "1:864794694374:web:f41fe291904fad6e72a127",
//   measurementId: "G-V17QVXE2MW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db: any) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// // Get registration token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// const messaging = getMessaging(app);
// getToken(messaging, { vapidKey: 'BAJzAe4REQQhMqzj00ek9n7cOK5upmZtADztwDYonqh8PUCe0WZZQcdoSBk2ktW8pIDZVDURAak2g_pr1VzH4ws' }).then((currentToken) => {
//   if (currentToken) {
//     // Send the token to your server and update the UI if necessary
//     // ...
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });

// function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//     }
//   })
// }
