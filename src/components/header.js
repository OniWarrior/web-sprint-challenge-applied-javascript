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

  // create elements.
const newHeader = document.createElement('div');
const newDate = document.createElement('span');
const newTitle = document.createElement('h1');
const newTemp = document.createElement('span');

// add classes.
newHeader.classList.add('header');
newDate.classList.add('date');
newTemp.classList.add('temp');

// assign values
newTitle.textContent = title;
newDate.textContent = date;
newTemp.textContent = temp;

// append elements.
newHeader.appendChild(newDate);
newHeader.appendChild(newTitle);
newHeader.appendChild(newTemp);

//return new structure.
return newHeader;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const aNewHeader = Header('Batman Origin: The Beginning','May 30,2021','50F');
  const DOMElement = document.querySelector(selector);
  DOMElement.appendChild(aNewHeader);
}



export { Header, headerAppender }
