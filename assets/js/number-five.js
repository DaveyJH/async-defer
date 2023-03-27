function createUl5() {
  const ul = document.createElement("li");
  ul.innerHTML = "This is script number <strong>five</strong>.";
  document.querySelector("ol").appendChild(ul);
}

createUl5();