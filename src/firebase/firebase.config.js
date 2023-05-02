// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCevoGmReZjDS3v2w1554aq5GsYZiyz1F0",
  authDomain: "chef-recipe-hunter-clien-4a142.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-4a142",
  storageBucket: "chef-recipe-hunter-clien-4a142.appspot.com",
  messagingSenderId: "1067360641",
  appId: "1:1067360641:web:1cc846f49dd58e75958880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;