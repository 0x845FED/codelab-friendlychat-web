/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
    apiKey: "AIzaSyCo52gtwih_e-TTzKk-BtQsj-pnIioIBMs",
    authDomain: "friendlychat-ae189.firebaseapp.com",
    projectId: "friendlychat-ae189",
    storageBucket: "friendlychat-ae189.appspot.com",
    messagingSenderId: "776943195070",
    appId: "1:776943195070:web:6f342ecad3a73c9cf91fef",
    measurementId: "G-BN3BZW33MS"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}