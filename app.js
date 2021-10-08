const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const phraseUL = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = [
  "may the force be with you", 
  "never tell me the odds", 
  "coding is tough", 
  "never say never again", 
  "beam me up",
  "luv to code"
];


// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
  const randomIndex = Math.floor(Math.random() * (arr.length))
  return arr[randomIndex];
}



// getRandomPhraseAsArray(phrases);



// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
  arr = arr.split(''); // make the string into an array of characters

  for (let el of arr) { // loop over array of characters
    const li = document.createElement('li'); // create a new li element
    li.textContent = el; // set textContent to element in array
    phraseUL.appendChild(li); // append li to phraseUL
    if (li.textContent != ' '){ // check li content, apply class
      li.classList.add('letter');
    } else {
      li.classList.add('space');
    }
  }

}
  addPhraseToDisplay(getRandomPhraseAsArray(phrases)); // call the addPhraseToDisplay function

// const checkLetter = (button) => {
//   let buttonContent = button.textContent;
//   let match = null;
//   let letterClass = document.getElementsByClassName('letter');
//   //loop through the letter class from last step
//   for (let i = 0; i < letterClass.length; i++) {
//     if (buttonContent === letterClass[i].textContent) {
//         match = button;
//         letterClass[i].classList.add('show');
//         }
//     }
//     return match;
//   }

// check if a letter is in the phrase
const checkLetter = button => {
  let listItems = document.querySelectorAll('.letter');
  let match = null;
  // const scoreBoardList = document.querySelector('#scoreboard ol')
  const hearts = document.querySelectorAll('.tries');
  // for (let i = 0; i < listItems.length; i++) {
  //   if (listItems[i].textContent === button.textContent) {
  //     listItems[i].classList.add('show');
  //     match = button.textContent;
  //   } 
    
  // }
  // forEach version of above for loop:
  listItems.forEach(li => {
    if (li.textContent === button.textContent) {
      li.classList.add('show');
      match = button.textContent;
    } 

  })
  // if no match, increment missed counter and remove a heart
  if (!match) { // if match is falsey (null)
    missed += 1; // increment counter
    // scoreBoardList.lastElementChild.remove(); // remove heart
    const heart = hearts[missed-1].querySelectorAll('img')[0]; // swap the heart image
    heart.src='images/lostHeart.png';
  }

  console.log(`hello from checkLetter function. The value of match is: ${match}`) // testing
  return match;
}

// check if the game's been won or lost
const checkWin = () => {
  const letters = document.querySelectorAll('.letter');
  console.log('letters length: ', letters.length)
  const shownLetters = document.querySelectorAll('.show');
  const headline = document.querySelector('.title');
  console.log('shownLetters length: ', shownLetters.length);
  if (letters.length === shownLetters.length) {
    overlay.style.display = 'flex';
    overlay.className = 'win';
    headline.innerText = 'You won the game!!!';
  }
  if (missed > 4) {
    overlay.style.display = 'flex';
    overlay.className = 'lose';
    headline.innerText = 'Bummer. You lost.';
  }

}

// *** Event Listeners *** //
// *********************** //


// listen for the start of the game
startButton.addEventListener('click', () => {
  // const overlay = document.querySelector('#overlay');
  overlay.style.display = 'none';
  // addPhraseToDisplay(getRandomPhraseAsArray(phrases)); // call the addPhraseToDisplay function
});

// listen for the oncreen keyboard to be clicked
qwerty.addEventListener('click', e => {
  console.log(e.target.textContent);
  console.log(e.target.tagName);
  // filter out non-button clicks or buttons already with 'chosen' class
  // make sure clicked target is tagName === 'BUTTON'
  // make sure clicked button doesn't already have 'chosen' class
  if (e.target.tagName === 'BUTTON' && !e.target.className.includes('chosen')) {
    const button = e.target;
    checkLetter(button) // call checkLetter function
    button.classList.add('chosen'); // add chosen class to pressed button

  }
  else { // testing only, not needed in production
    console.log('invalid click');
  } 

  console.log('hello from qwerty listener: ', e.target)
  checkWin();
});

