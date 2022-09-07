// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");
// remove the paragraph element in the nav-bar
let childToRemove = document.querySelector(".nav-bar > p");
childToRemove.remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");

listItem1.textContent = "We Up In Here";
listItem2.textContent = "Almost over it";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar >").appendChild(listItem1);
document.querySelector(".nav-bar >").appendChild(listItem2);
