import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSJubJ8exC2m-qMgpjfHSu8B1m-z_fi8o",
  authDomain: "recipe-website-a56ad.firebaseapp.com",
  projectId: "recipe-website-a56ad",
  storageBucket: "recipe-website-a56ad.firebasestorage.app",
  messagingSenderId: "18432563546",
  appId: "1:18432563546:web:d9d4153aa5aa093b833b63"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.addRecipe = async function () {

  const name = document.getElementById("name").value;

  const category = document.getElementById("category").value;

  const steps = document.getElementById("steps").value;
const image = document.getElementById("image").value;
await addDoc(collection(db, "recipes"), {

  name,

  category,

  steps,

  image

}); 

  alert("Recipe Added ✅");
};
