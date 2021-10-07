const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const phraseUL = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = ["May the force be with you", "Never tell me the odds", "I solemnly swear I am up to no good", "Never say never again", "Life is trying things to see if they work", "The way to get started is to quit talking and begin doing"];



// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex];
}

getRandomPhraseAsArray(phrases);



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


// check if a letter is in the phrase
const checkLetter = button => {
  const listItems = 
}

// check if the game's been won or lost
const checkWin = () => {

}

// listen for the start of the game
startButton.addEventListener('click', () => {
  const overlay = document.querySelector('#overlay');
  overlay.style.display = 'none';
});

// listen for the oncreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});

