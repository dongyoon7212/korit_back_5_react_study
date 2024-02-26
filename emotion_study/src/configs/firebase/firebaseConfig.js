import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.REACT_PROJECT_ID,
    messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
    appId: process.env.EACT_APP_ID,
    measurementId: process.env.REACT_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
