import axios from "axios";

const Card = (article) => {
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

  // create elements.
  const newCard = document.createElement('div');
  const newHeadLine = document.createElement('div');
  const newAuthor = document.createElement('div');
  const newImageContainer = document.createElement('div');
  const newImage = document.createElement('img');
  const newAuthorName = document.createElement('span');

  // add classes.
  newCard.classList.add('card');
  newHeadLine.classList.add('headline');
  newAuthor.classList.add('author');
  newImageContainer.classList.add('img-container');

  // assign values from article object.
  newHeadLine.textContent = article.headline;
  newImage.textContent = article.authorPhoto;
  newAuthorName.textContent = article.authorName;

  // append
  newCard.appendChild(newHeadLine);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImageContainer);
  newAuthor.appendChild(newAuthorName);
  newImageContainer.appendChild(newImage);

  newCard.addEventListener('click',function(){
    console.log(newHeadLine);
  })

  // return card
  return newCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const DOMelement = document.querySelectorAll(selector);
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((successRespons)=>{
    const articles = successRespons.data;
    for(let i =0; i <articles.length;i++)
    {
      const aNewCard = Card(articles[i]);
      DOMelement.appendChild(aNewCard);
    }

  })
}

export { Card, cardAppender }
