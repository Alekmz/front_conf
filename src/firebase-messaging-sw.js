/* eslint-disable no-undef */

import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
    apiKey: "AIzaSyBrXYWlx3pLUE_wshtLaQ71Ag9dl2X-TbU",
    authDomain: "my-project-confe.firebaseapp.com",
    projectId: "my-project-confe",
    storageBucket: "my-project-confe.appspot.com",
    messagingSenderId: "864794694374",
    appId: "1:864794694374:web:f41fe291904fad6e72a127",
    measurementId: "G-V17QVXE2MW"
  };

  export function getTokenPush (){

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const messaging = getMessaging(app);
    getToken(messaging, { vapidKey: 'BOcMfTHvmrEhSryoqX9Fp-etq7ALVvbhnMEcRdK8bFQwAAUPOmZgFxPgTLOq957RKFkIqYCRJRC-P3t6PgfEdAc' })
      .then((currentToken) => {
        if (currentToken) {
          console.log("CurrentToken: ", currentToken)
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
  }
