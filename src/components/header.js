const Header = ({title, date, temp}) => {
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
const heading= document.createElement("div")
const spanDate = document.createElement("span")
const h1title = document.createElement("h1")
const spanTemp = document.createElement("span")
  
  //appending elements
heading.appendChild(spanDate)
heading.appendChild(h1title)
heading.appendChild(spanTemp)
  
 //class names
heading.classList.add("header");
spanDate.classList.add("date");
spanTemp.classList.add("temp");

//text content
h1title.textContent = `${title}`;
spanDate.textContent = `${date}`;
spanTemp.textContent = `${temp}`;


//return statement
return heading
}




const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.

// selector is .header-container 
const headerDiv = document.querySelector(selector)
//create a header
const heading = Header({date: " 2-11-2022", title: " Web Articles",temp: " 45 degrees"})
//appending to DOM 
headerDiv.appendChild(heading);

}

export { Header, headerAppender }
