const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = ["May the force be with you", "Never tell me the odds", "I solemnly swear I am up to no good", "Never say never again", "Life is trying things to see if they work", "The way to get started is to quit talking and begin doing"];



// return a random phrase from an array
const  getRandomPhraseAsArray= arr => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex];
}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase
const checkLetter = button => {

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

