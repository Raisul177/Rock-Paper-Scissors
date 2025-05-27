function play(userChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      
      let outcome = '';

      if(userChoice === computerChoice) {
        outcome = "It's a tie!";
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        outcome = "You win!";
      } else {
        outcome = "You lose!";
      }

      document.getElementById('result').textContent =
        `You choose ${userChoice}. Computer choose ${computerChoice}. ${outcome}`;
    }