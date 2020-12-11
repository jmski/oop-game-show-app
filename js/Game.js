/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
         const overlay = document.querySelector('#overlay');
         overlay.style.display = 'none'; // hides the start screen overlay
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase = addPhraseToDisplay();
     }

     // randomly select a phrase
     getRandomPhrase() {
         // randomly generate a number from [0] to [num of phrases]
         const randomNum = Math.floor(Math.random() * this.phrases.length);
         return this.phrases[randomNum]; // store phrase based on number
     }

     handleInteraction(letterKey) {
         letterKey.disabled = true;

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

     
 }