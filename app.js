const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const phraseUL = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = [
  "may the force be with you", 
  "never tell me the odds", 
  "i solemnly swear i am up to no good", 
  "never say never again", 
  "beam me up"];

// listen for the start of the game
startButton.addEventListener('click', () => {
  const overlay = document.querySelector('#overlay');
  overlay.style.display = 'none';
  addPhraseToDisplay(getRandomPhraseAsArray(phrases)); // call the addPhraseToDisplay function
});

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
  const randomIndex = Math.floor(Math.random() * (arr.length))
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
  let listItems = document.querySelectorAll('.letter');
  listItems = Array.from(listItems);
  let match = null;

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === button.textContent) {
      listItems[i].classList.add('show');
      match = button.textContent;
    } 
    
  }
  console.log(`The value of match is: ${match}`)
  return match;
}

// check if the game's been won or lost
const checkWin = () => {

}



// listen for the oncreen keyboard to be clicked
qwerty.addEventListener('click', e => {
  console.log(e.target.textContent);

  // filter out non-button clicks or buttons already with 'chosen' class
  e.target.classList.add('chosen'); // add chosen class to pressed button
  console.log(e.target)
  checkLetter(e.target);
});

