function createUl2() {
  const ul = document.createElement("li");
  ul.innerHTML = "This is script number <strong>two</strong>.";
  document.querySelector("ol").appendChild(ul);
}

createUl2();