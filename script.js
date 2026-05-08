import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc
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

  querySnapshot.forEach((docItem) => {

    let r = docItem.data();

    container.innerHTML += `

    <div class="card">

      <img src="${r.image}" width="100%">

      <h3>${r.name}</h3>

      <p>${r.category}</p>

      <button onclick="showSteps(\`${r.steps}\`)">
      View Recipe
      </button>

      <button onclick="deleteRecipe('${docItem.id}')">
      Delete
      </button>

    </div>

    `;
  });
}

loadRecipes();

window.deleteRecipe = async function(id) {

  await deleteDoc(doc(db, "recipes", id));

  location.reload();
}

window.showSteps = function(steps){

  alert(steps);

}

window.searchRecipes = function() {

  let input =
  document.getElementById("search").value.toLowerCase();

  let cards =
  document.getElementsByClassName("card");

  for(let i=0;i<cards.length;i++){

    let text =
    cards[i].innerText.toLowerCase();

    if(text.includes(input)){
      cards[i].style.display = "block";
    }else{
      cards[i].style.display = "none";
    }
  }
}
