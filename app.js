/**
 * You must use OOP. Create a class named Die that represents a single die.
 * Your class must have a property named value. hint you will not have any arguments in your constructor.
 * Your class must have a method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
 * When a new Die is created, it should automatically create a div, call its roll method, and put the div on the screen
 * You can use either the DOM or JQuery, but please be consistent and stick with one.
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
    this.value = undefined; // sets the default value to undefined
  }
  roll() {
    // sets the new value to a random int 1-6 inclusive
    let newValue = Math.floor(Math.random() * 6 + 1);
    return newValue;
  }
}

$(`#newdie`).click(function () {
  // does not work yet
  let newDie = new Die();
  $(newDie).appendTo(dieContainer);
});
