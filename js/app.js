/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //initialize the game object
 let game = null;

 // when start button is clicked, it will start a new game
 document.querySelector('#btn__reset').addEventListener('click', () => {
     game = new Game();
     game.startGame();
 });

 // checks for clicks on the keyboard display
 document.querySelector('#qwerty').addEventListener('click', (event) => {
     if (event.target.className !== 'keyrow' && event.target.id !== 'qwerty') {
         game.handleInteraction(event.target);
     }
 });
 
 // checks for keystrokes on keyboard
 document.addEventListener('keydown', (event) => {
     const keyboard = document.querySelectorAll('#qwerty div button');

     if (game !== null) {
         for (let i = 0; i < keyboard.length; i++) {
             if (keyboard[i].disabled === false) {
                 if (keyboard[i].textContent === event.key.toLowerCase()) {
                     game.handleInteraction(keyboard[i]);
                 }
             }
         }
     }
 });