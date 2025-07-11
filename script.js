let lettersOfWord = [];
let lettersOfNoWord = [];
let index = 0;
let word;
let Lives = 7;
let wordComplete = 0;

document.getElementById("Lives").textContent = Lives;
document.getElementById("verdict").textContent = "Verdict";

function Enter() {
  word = document.getElementById("EnterWord").value;
  for (let i = 0; i < word.length; ++i) {
    lettersOfWord[i] = "_";
  }
  document.getElementById("foundWord").value = lettersOfWord;    
}

function EnterLetter() {
  let letter = document.getElementById("enterLetter").value;
  let verify = 0;
  for (let i = 0; i < word.length; ++i) {
    if (letter == word[i]) {
      ++wordComplete;
      lettersOfWord[i] = letter;
      ++verify;
    }
  } 
  document.getElementById("foundWord").value = lettersOfWord;
  if (verify == 0 && Lives > 0) {
    let findLetter = 0;
    for (let i = 0; i < lettersOfNoWord.length; ++i) {
      if (letter == lettersOfNoWord[i]) {
        ++findLetter;
      }
    }
    if (findLetter == 0) {
      lettersOfNoWord[index] = letter;
      ++index;
      --Lives; 
    }
    document.getElementById("Lives").textContent = Lives;
  }
  if (wordComplete == word.length && Lives > 0) {
    document.getElementById("verdict").textContent = "You Win";
  }
  if (Lives == 0) {
    document.getElementById("verdict").textContent = "You Lose";
  }
}
