let recipes = [
  { name: "Litti Chokha", category: "Bihari" },
  { name: "Pizza", category: "Italian" },
  { name: "Dal Tadka", category: "Indian" },
  { name: "Pav Bhaji", category: "Maharashtrian" }
];

function displayRecipes(list) {
  let container = document.getElementById("recipes");
  container.innerHTML = "";

  list.forEach(r => {
    container.innerHTML += `
      <div class="card">
        <h3>${r.name}</h3>
        <p>${r.category}</p>
      </div>
    `;
  });
}

displayRecipes(recipes);

// Search
document.getElementById("search").addEventListener("input", function() {
  let value = this.value.toLowerCase();

  let filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(value)
  );

  displayRecipes(filtered);
});

// Category filter
document.getElementById("category").addEventListener("change", function() {
  let value = this.value;

  if (value === "all") {
    displayRecipes(recipes);
  } else {
    let filtered = recipes.filter(r => r.category === value);
    displayRecipes(filtered);
  }
});
