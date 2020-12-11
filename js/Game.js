/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');


 // this class will provide the structure for the game
 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [
             new Phrase('GoodLife Fitness'),
             new Phrase('Team Treehouse'),
             new Phrase('Genshin Impact'),
             new Phrase('Ready Player One')
         ];
         this.activePhrase = null;
     }

     //calls for a random phrase to start the game
     startGame() {
         overlay.style.display = 'none'; // hides the start screen overlay
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
         console.log(this.activePhrase.phrase);
     }

     // randomly select a phrase
     getRandomPhrase() {
         // randomly generate a number from [0] to [num of phrases]
         const randomNum = Math.floor(Math.random() * this.phrases.length);
         return this.phrases[randomNum]; // store phrase based on number
     }

     // set class name to chosen or wrong depending on letterKey
     handleInteraction(letterKey) {
         letterKey.disabled = true;

         if (this.checkForWin() !== true) {
             if (this.activePhrase.checkLetter(letterKey.textContent)) {
                 letterKey.className = 'chosen';
                 this.activePhrase.showMatchedLetter(letterKey.textContent);

                 // checks if the game is over with every entry, if requirements are met, you either win or lose
                 if (this.checkForWin()) {
                     this.gameOver();
                 }
             } else {
                 letterKey.className = 'wrong';
                 this.removeLife();
             }
         }
     }

     // tracks lives left based on incorrect answers
     removeLife() {
         const hearts = document.querySelector('#scoreboard > ol');
         let life = 4 - this.missed;

         hearts.children[life].firstElementChild.src = "images/lostHeart.png";
         this.missed++;

         if(this.missed >= 5) {
             this.gameOver();
         }
     }

     // this method checks the class of all letters. If all are correct then method returns true
     checkForWin() {
         let gameWon = true;
         const phraseElements = Array.from(document.querySelector('#phrase >ul').children);

         phraseElements.forEach(letter => {
             if (letter.className !== 'space') {
                 if (letter.className === `show letter ${letter.textContent}` && gameWon === true) {
                     gameWon = true;
                 } else {
                     gameWon = false;
                 }
             }
         });
         return gameWon;
     }

     // resets the game back to start after it displays win/ lose message
     gameOver() {
        const gameOverMessage = document.querySelector('#game-over-message');
        overlay.style.display = 'block';

        // display if win or lose
        if (this.checkForWin()) {
            overlay.className = 'win';
            gameOverMessage.textContent = 'You win!';
        } else {
            overlay.className = 'lose';
            gameOverMessage.textContent = 'You lose!';
        }
        console.log(gameOverMessage.textContent);
        // clear phrase
        const ul = document.querySelector('#phrase > ul');
        ul.textContent = ' '; 

        // reset keyboard display
        const keyboard = document.querySelectorAll('#qwerty div button');
        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].className = 'key';
            keyboard[i].disabled = false;
        }

        // reset hearts
        const hearts = document.querySelector('#scoreboard > ol');
        for (let i = 0; i < hearts.children.length; i++) {
            hearts.children[i].firstElementChild.src = 'images/liveHeart.png';
        }
     }

 }