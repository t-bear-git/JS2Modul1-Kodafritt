// Created element and assigned variables
const newButton = document.createElement('button');
const firstWrapper = document.querySelector('.wrapper');
const secondWrapper = document.querySelector('.wrapper2');
const allWrappers = document.querySelectorAll('div');
const listElement = document.querySelector('ul');

// Insert text in button
newButton.innerHTML = 'Click Me!';

// Append button to wrapper element
firstWrapper.appendChild(newButton);

// Set class to first button
newButton.className = 'first-button';

// Event listener for button
newButton.addEventListener('click', buttonFunction);

// Functions to run on button click
function buttonFunction() {
  newButton.insertAdjacentHTML(
    'afterend',
    '<p class="first-p">Check console for location info</p>'
  );
  console.log('Protocol: ', window.location.protocol);
  console.log('Hostname: ', window.location.hostname);
  console.log('Port: ', window.location.port);
  removeHandler();
}
// Function to remove eventlistener from button after click.
function removeHandler() {
  newButton.removeEventListener('click', buttonFunction);
}

// Function to add/remove classes from allWrappers when page is scrolled >50px
window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    allWrappers[0].classList.add('div-borders');
    allWrappers[1].classList.add('div-borders');
  } else {
    allWrappers[0].classList.remove('div-borders');
    allWrappers[1].classList.remove('div-borders');
  }
};

// Array with info to be used
let someFamily = [
  { gender: 'Male', birthyear: 1957 },
  { gender: 'Female', birthyear: 1959 },
  { gender: 'Female', birthyear: 1983 },
  { gender: 'Male', birthyear: 1987 },
  { gender: 'Male', birthyear: 1987 },
  { gender: 'Male', birthyear: 2007 },
  { gender: 'Female', birthyear: 2011 },
];

// Array filter and map to create array to be shown on page
let maleArr = someFamily.filter(familyMales).map(maleBirthyear);
// Function to return array with only males
function familyMales(x) {
  return x.gender == 'Male';
}
// Function to return new array with only birthyear from above array
function maleBirthyear(x) {
  return x.birthyear;
}

// Function to create <li> for each item from filtered and mapped array
function populateList() {
  numberOfArrItems = maleArr.length;
  for (i = 0; i < numberOfArrItems; ++i) {
    // create an item for each one
    listItem = document.createElement('li');

    // Add the item text
    listItem.innerHTML = maleArr[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
  }
}

// Using populateList function
populateList();
