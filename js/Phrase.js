/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//global variables
const ul = document.querySelector('#phrase > ul');

 // creates the class that includes the phrase property and functions
 class Phrase {
    constructor (phrase) {
    this.phrase = phrase.toLowerCase(); 
     }

     // this function creates the li elements that will hold each letter in a box
     addPhraseToDisplay() {
         let html = '';
         let letter = '';

        for (let i = 0; i < this.phrase.length; i++) {
            letter = this.phrase.charAt(i);
            if (letter === ' ') {
                html += `<li class ="space"> ${letter}</li>`;
            } else {
                html += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        }
    ul.innerHTML = (html);
    }

    // this function checks if a letter is contained in the this,phrase of the phrase object
    checkLetter(letter) {
        if ( this.phrase.includes(letter.toLowerCase()) ) {
            return true;
        } else {
            return false;
        }
    }

    // this function will show letters that match input
    showMatchedLetter(letter) {
        for (let i = 0; i < ul.children.length; i++) {
            let letterVisible = document.querySelector(`#phrase > ul > li.hide.letter.${letter}`);
            // if letter matches set class to show letter
            if (letterVisible !== null) {
                letterVisible.className = `show letter ${letter}`;
            }
        }
    }
}