function createUl6() {
  const ul = document.createElement("li");
  ul.innerHTML = "This is script number <strong>seven</strong>.";
  document.querySelector("ol").appendChild(ul);
}

createUl6();