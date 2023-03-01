import data from "../json/nObjects.json" assert { type: "json" };

// console.log(data[0].name)
// select item
const img = document.getElementById("spec-img");
const name = document.getElementById("name");
const category = document.getElementById("category");

const randombtn = document.querySelector(".btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = data[currentItem];
  img.src = item.image;
  setTimeout(function () {
    name.textContent = item.nName;
    category.textContent = item.category;
  }, 500);
}

randombtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * data.length);
  showPerson();
});
