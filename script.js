import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
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

async function loadRecipes() {

  const querySnapshot = await getDocs(collection(db, "recipes"));

  let container = document.getElementById("recipes");

  container.innerHTML = "";

  querySnapshot.forEach((doc) => {

    let r = doc.data();

    container.innerHTML += `
      <div class="card">
        <h3>${r.name}</h3>
        <p>${r.category}</p>
      </div>
    `;
  });
}

loadRecipes();
