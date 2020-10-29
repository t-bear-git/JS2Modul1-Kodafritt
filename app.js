// Create element and assign it to variable
const newButton = document.createElement('button');
const firstWrapper = document.querySelector('.wrapper');
const secondWrapper = document.querySelector('.wrapper2');
const allWrappers = document.querySelectorAll('div');
const allLiEl = document.querySelectorAll('li');

// Insert text in button
newButton.innerHTML = 'Click Me!';

// Append button to wrapper element
firstWrapper.appendChild(newButton);

// Set class to first button
newButton.className = 'first-button';

newButton.addEventListener('click', buttonFunction);

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

function removeHandler() {
  newButton.removeEventListener('click', buttonFunction);
}

window.onscroll = () => {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    allWrappers[0].classList.add('div-borders');
    allWrappers[1].classList.add('div-borders');
  } else {
    allWrappers[0].classList.remove('div-borders');
    allWrappers[1].classList.remove('div-borders');
  }
};
