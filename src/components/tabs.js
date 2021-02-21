import axios from "axios";

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

  // Create elements.
  const newTopics = document.createElement('div');
  const firstTopic = document.createElement('div');
  const secondTopic = document.createElement('div');
  const thirdTopic = document.createElement('div');

  // add classes.
  newTopics.classList.add('topics');
  firstTopic.classList.add('tab');
  secondTopic.classList.add('tab');
  thirdTopic.classList.add('tab');

  // assing values from array
  firstTopic.textContent = topics[0];
  secondTopic.textContent = topics[1];
  thirdTopic.textContent = topic[2];

  // append
  newTopics.appendChild(firstTopic);
  newTopics.appendChild(secondTopic);
  newTopics.appendChild(thirdTopic);

  // return new element structure.
  return newTopics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
 const DOMelement = document.querySelector(selector);
 axios.get('https://lambda-times-api.herokuapp.com/topics')
 .then((successRespons)=>{
   const foundTopics = Tabs(successRespons.data);
   DOMelement.appendChild(foundTopics);
 })

}

export { Tabs, tabsAppender }
