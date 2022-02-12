import axios from 'axios';


const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsClass = document.createElement("div")
  const tabOne = document.createElement("div")
  const tabTwo = document.createElement("div")
  const tabThree = document.createElement("div")
  const tabFour = document.createElement("div")
  const tabFive = document.createElement("div")

  topicsClass.appendChild(tabOne);
  topicsClass.appendChild(tabTwo);
  topicsClass.appendChild(tabThree);
  topicsClass.appendChild(tabFour);
  topicsClass.appendChild(tabFive);

  topicsClass.classList.add("topics");
  tabOne.classList.add("tab");
  tabTwo.classList.add("tab");
  tabThree.classList.add("tab");
  tabFour.classList.add("tab");
  tabFive.classList.add("tab");

  tabOne.textContent = `javascript`;
  tabTwo.textContent = `bootstrap`;
  tabThree.textContent = `technology`; 
  tabFour.textContent = `jquery`;
  tabFive.textContent = 'node.js';
  
  //return statement
return topicsClass
}





const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabsDiv = document.querySelector(selector)

  axios.get(`http://localhost:5000/api/topics`)
   .then(resp =>{
     
     const tabData = resp.data.topics
     tabsDiv.appendChild(Tabs(tabData))
    
     
   })
   .catch(err => {
    console.error(err)
      })
   .finally(()=> console.log("Done"))

}

export { Tabs, tabsAppender }
