(function() {
  
//Initializes count variables and sets them to screen  
  var numberOfTails=0;
  var numberOfHeads=0;
  var numberOfCorrect=0;
  var numberOfIncorrect=0;
  
  document.getElementById("incorrectcount").innerHTML = numberOfIncorrect;
  document.getElementById("correctcount").innerHTML = numberOfCorrect;
  document.getElementById("headscount").innerHTML = numberOfHeads;
  document.getElementById("tailscount").innerHTML = numberOfTails;
  
//Sets code for Flip button to flip Heads or Tails and returns value
let coinFlip;
  
function flipTheCoin() {
  let randomNum = Math.random();
  if (randomNum > 0.5) {
    coinFlip = "TAILS";
    numberOfTails++;
    document.getElementById("tailscount").innerHTML = numberOfTails;
    return coinFlip;
  }
  else {
    coinFlip = "HEADS";
    numberOfHeads++;
    document.getElementById("headscount").innerHTML = numberOfHeads;
    return coinFlip;
  }
}
  
  
//Checks value entered by user, verifies t as heads or tails, and compares it to coinflip, displaying outcome
  let flipCoin = document.getElementById("flip");
  
  flipCoin.onclick = function(){
    flip();
  };
  
  function flip() {
    flipTheCoin();
    let userGuess = document.getElementById("guess");
    let userAnswer = userGuess.value;
    
    if (userAnswer.toUpperCase() === coinFlip) {
      document.getElementById("result").innerHTML = `Correct! You guessed ${userAnswer} and were right!`;
      numberOfCorrect++;
      document.getElementById("correctcount").style.color = 'green';
      document.getElementById("correctcount").innerHTML = numberOfCorrect;
    }
    else if (userAnswer === '' || null) {
      document.getElementById("result").innerHTML = `Please enter Heads or Tails as your guess.`;
      return;
    }
      
      else {
      document.getElementById("result").style.color ='red';
      document.getElementById("result").innerHTML = `Bummer! You guessed ${userAnswer} and it was ${coinFlip}!`;
      numberOfIncorrect++;
        document.getElementById("incorrectcount").style.color = 'red';
        document.getElementById("incorrectcount").innerHTML = numberOfIncorrect;
      }
  }
  
  
  //Resets game data
  let resetStats = document.getElementById("resetbutton");
  
  resetStats.onclick = function() {
    reset();
  };
  
  function reset() {
    numberOfTails = 0;
    numberOfHeads = 0;
    numberOfCorrect = 0;
    numberOfIncorrect = 0;
    
      document.getElementById("incorrectcount").innerHTML = numberOfIncorrect;
      document.getElementById("correctcount").innerHTML = numberOfCorrect;
      document.getElementById("headscount").innerHTML = numberOfHeads;
      document.getElementById("tailscount").innerHTML = numberOfTails;
  }
})();