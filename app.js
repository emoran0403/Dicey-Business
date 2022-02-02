/**
 * You must use OOP. Create a class named Die that represents a single die.
 * Your class must have a property named value. hint you will not have any arguments in your constructor.
 * Your class must have a method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
 * When a new Die is created, it should automatically create a div, call its roll method, and put the div on the screen
 * You can use either the DOM or JQuery, but please be consistent and stick with one.
 * 
 * 
 * 
 //! make it so the die container on the page starts out big enough to not require a resize when die are put on the screen
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

  static id = 1; // this will eventually be used to give each die a unique id

  constructor() {
    this.value = undefined; // sets the default value to undefined
    this.id = Die.id++; // gives each die a unique id when it is instantiated
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
   * needs to add it to to currentDice array//?done
   */

  let myDie = new Die(); // myDie is a new instance of the Die class
  myDie.roll(); //  sets the initial value of the die from undefined to a random die value

  //sets styles and text value
  let mydieholder = $(`<div class="col-1 my-3">`); // this div holds the die
  let myPageDie = $(`<div class="die py-3">`) // this div is the representation of the die
    .text(myDie.value)
    .addClass(
      "die border border-dark border-4 rounded d-flex justify-content-center align-items-center"
    )
    .attr("id", myDie.id); // matches the die representation id to be the same as the id of the object die

  //appends the die to the page
  $(myPageDie).appendTo(mydieholder);
  $(mydieholder).appendTo(dieContainer);

  console.log(myDie); //*logging
  // console.log(`the die's value is ${myDie.value}`); //*logging

  // adds the die to the currentDice array
  currentDice.push(myDie);

  console.log(currentDice); //*logging
});

$(`#reroll`).click(function () {
  /**
   * needs to select all die in the currentDice array and call the roll method on each of them
   * for Each array method, or a for loop should work here
   */

  console.log(`reroll was pressed`);
  let tempvar = currentDice[0];
  tempvar.roll();
  console.log(currentDice);

  // currentDice.forEach(() => {
  //   console.log(`my for Each is working!`); //*logging
  //   for (let i = 0; i < currentDice.length; i++) {
  //     console.log(`my for loop is working`);
  //     currentDice[i].roll();
  //   }
  // });
});

$(`#sum`).click(function () {
  console.log(`sum was pressed`);
  /**
   * calls a function that returns the value of each die in the currentDice aray
   *
   *
   *
   */
  let sum = 0;
  for (let i = 0; i < currentDice.length; i++) {
    sum += currentDice[i].value;
  }
  alert(sum);
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
