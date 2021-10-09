const qwerty = document.querySelector('#qwerty');
const keys = document.querySelectorAll('#qwerty > * > button');
const phrase = document.querySelector('#phrase');
const phraseUL = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = [
  "live long and prosper",
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

// adds the letters of a string to the display. Build UL.
const addPhraseToDisplay = phrase => {
  const charArray = phrase.split(''); // split phrase into array of chars
  for (let char of charArray) { // loop through charArray to build UL
    const li = document.createElement('li');
    li.textContent = char;
    phraseUL.appendChild(li);
    if (li.textContent !== ' '){ // check li content, apply class
      li.classList.add('letter');
    } else {
      li.classList.add('space');
    }
  }
}

// check if a letter is in the phrase
const checkLetter = button => {
  let listItems = document.querySelectorAll('.letter');
  let match = null;
  const hearts = document.querySelectorAll('.tries');

  listItems.forEach(li => {
    if (li.textContent === button.textContent) {
      li.classList.add('show');
      match = button.textContent;
    } 
  })
  // if no match, increment missed counter and remove a heart
  if (!match) { // if match is falsey (null)
    missed += 1; // increment counter
    const heart = hearts[missed-1].querySelectorAll('img')[0]; // swap the heart image
    heart.src='images/lostHeart.png';
  }
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

const resetBoard = () => {
  phraseUL.innerHTML = '';
  missed = 0;
  overlay.style.display = 'none';
  // reverse hearts display
  const hearts = document.querySelectorAll('img');
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].src='images/liveHeart.png';
  }
  // reset selected keys
  for (let key of keys) { 
    key.classList.remove('chosen');
  }

  // enable all keys (remove the disabled)

  addPhraseToDisplay(getRandomPhraseAsArray(phrases));

}

// *** Event Listeners *** //
// *********************** //


// listen for the start of the game
startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  addPhraseToDisplay(getRandomPhraseAsArray(phrases));
});

// listen for the oncreen keyboard to be clicked
qwerty.addEventListener('click', e => {
  console.log(e.target.textContent);
  console.log(e.target.tagName);
  const button = e.target;
  // filter out non-button clicks or buttons already with 'chosen' class
  // make sure clicked target is tagName === 'BUTTON'
  // make sure clicked button doesn't already have 'chosen' class
  if (button.tagName === 'BUTTON' && !button.className.includes('chosen')) {
    checkLetter(button) // call checkLetter function
    button.classList.add('chosen'); // add chosen class to pressed button
  }
  // else { // testing only, not needed in production
  //   console.log('invalid click');
  // } 
  button.disabled = true;
  checkWin();
});

