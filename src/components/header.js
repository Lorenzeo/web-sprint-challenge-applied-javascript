import { header } from "express/lib/request"

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //creating elements
const header = document.createAttribute("div")
const span = document.createAttribute("span")
const h1 = document.createAttribute("h1")
const span2 = document.createAttribute("span")
  
  //assigning elements
header.appendChild(span)
header.appendChild(h1)
header.appendChild(span2)
  
 //class names
header.classList.add = "header";
span.classList.add = "date";
span2.classList.add = "temp";

//text context
span.textContent = `Date: ${date}`;
h1.textContext = `title: ${title}`;
span2.textContext = `Temp: ${temp}`;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const headerContainer = document.querySelector(".header-container")
const Header = document.querySelector(selector)
headerContainer.appendChild(Header);
}

export { Header, headerAppender }
