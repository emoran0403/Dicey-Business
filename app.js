/**
 * You must use OOP. Create a class named Die that represents a single die.
 * Your class must have a property named value. hint you will not have any arguments in your constructor.
 * Your class must have a method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
 * When a new Die is created, it should automatically create a div, call its roll method, and put the div on the screen
 * You can use either the DOM or JQuery, but please be consistent and stick with one.
 * 
 * ⚀ die face-1. U+2680.
⚁ die face-2. U+2681.
⚂ die face-3. U+2682.
⚃ die face-4. U+2683.
⚄ die face-5. U+2684.
⚅ die face-6. U+2685.
🎲 game die. U+1F3B2.
 */

let dieContainer = $(`#dieContainer`);

let currentDice = [];
/**
 * this will serve as an array for the current dice.
 * summing will be done via loop or array methods, each calling on the value proprerty of each die.
 * removing a die from the array can be done by the splice method?  or maybe make a new array with map, leaving off the old die.
 *
 *
 *
 *
 *  */

class Die {
  // creates a class called Die
  static id = 0; // this will eventually be used to give each die a unique id
  constructor() {
    this.value = 146; // sets the default value to undefined
  }
  roll() {
    // sets the new value to a random int 1-6 inclusive
    let newValue = Math.floor(Math.random() * 6 + 1);
    this.value = newValue;
  }
}

$(`#newdie`).click(function () {
  console.log(`newdie was pressed`);
  /**
   * needs to create a new die object //?done
   * needs to make a die display inside dieContainer//?done
   * needs to make that die show its current value//? done
   * needs to add it to to currentDice array
   */

  let myDie = new Die(); // myDie is a new instance of the Die class
  myDie.roll();
  let myPageDie = $(`<div>`) // puts a representation of the myDie instance on the page
    .text(myDie.value) // with the value as text
    .addClass("die border border-dark border-4 rounded"); //and a die-ish display    //! need to make them look more like dice

  $(myPageDie).appendTo(dieContainer); // appends the die representation to the die container div
  // console.log(`my die is ${myDie}`); //*logging
  // console.log(`the die's value is ${myDie.value}`); //*logging

  currentDice.push(myDie); // adds the die to the currentDice array
  //console.log(currentDice); //*logging
});

$(`#reroll`).click(function () {
  console.log(`reroll was pressed`);
  /**
   * needs to select all die in the currentDice array and call the roll method on each of them
   *
   *
   */
});

$(`#sum`).click(function () {
  console.log(`sum was pressed`);
  /**
   * calls a function that returns the value of each die in the currentDice aray
   *
   *
   *
   */
});

$(`#pip`).click(function () {
  console.log(`pip was pressed`);
  /**
   * changes the text content from numbers to pips - based on a big switch block?
   *
   *
   *
   */
});
