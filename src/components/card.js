import axios from 'axios';



const Card = ({headline, authorPhoto, authorName}) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
    // creating elements
  const cardClass = document.createElement("div")
  const header = document.createElement("div")
  const author = document.createElement("div")
  const imageContainer = document.createElement("div")
  const image = document.createElement("img")
  const span = document.createElement("span")

    //appending elements
  cardClass.appendChild(header);
  cardClass.appendChild(author);
  author.appendChild(imageContainer);
  author.appendChild(span);
  imageContainer.appendChild(image);

    //class names
  cardClass.classList.add("card");
  header.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

    //text content
  header.textContent = `${headline}`;
  image.src = `${authorPhoto}`;
  span.textContent = `${authorName}`;

    //event listener
  cardClass.addEventListener("click", event => {
    console.log(`The user clicked this headline: ${headline}`)
  })

    //return statement
  
  return cardClass
}

const articleList = (data) => {
  const section = document.createElement("section")
  data.forEach(articleData => {
    section.appendChild(Card(articleData))
  })
  return section
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardsDiv = document.querySelector(selector);
  

  axios.get(`http://localhost:5000/api/articles`)
   .then(resp =>{
     
     const bootstrapData = resp.data.articles.bootstrap;
     const javascriptData = resp.data.articles.javascript;
     const jqueryData = resp.data.articles.jquery;
     const nodeData = resp.data.articles.node;
     const technologyData = resp.data.articles.technology;
    
    cardsDiv.appendChild(articleList(bootstrapData))
    cardsDiv.appendChild(articleList(javascriptData))
    cardsDiv.appendChild(articleList(jqueryData))
    cardsDiv.appendChild(articleList(nodeData))
    cardsDiv.appendChild(articleList(technologyData))
    
     
    
    // cardsDiv.appendChild(Card(bootstrapData))


    //  console.log(bootstrapData[0]);
    //  console.log(javascriptData[0]);
    //  console.log(jqueryData[0]);
    //  console.log(nodeData[0]);
    //  console.log(technologyData[0]);

   })
   .catch(err => {
     console.error(err)
       })
   .finally(()=> console.log("Done"))
    
  console.log(`http://localhost:5000/api/articles`)

}

export { Card, cardAppender }
