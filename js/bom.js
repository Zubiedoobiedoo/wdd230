const inputTag = document.querySelector("#chapter");
const buttonTag = document.querySelector("button");
const ulTag = document.querySelector(".list");

buttonTag.addEventListener("click", () => {
  let inputValue = inputTag.value;
  if (inputValue.trim() === "") {
  } 
  else {
    inputTag.value = "";
    let liElement = document.createElement("li");
    let spanElement = document.createElement("span");
    let buttonElement = document.createElement("button");
    liElement.appendChild(spanElement);
    liElement.appendChild(buttonElement);
    spanElement.textContent = inputValue;
    buttonElement.textContent = "❌";

    ulTag.appendChild(liElement);

    buttonElement.addEventListener("click", () => {
      ulTag.removeChild(liElement);
      inputTag.focus();
    });
  }
});