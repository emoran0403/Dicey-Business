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
 * ⚀ die face-1. U+2680 - &#9856
 * ⚁ die face-2. U+2681 - &#9857
 * ⚂ die face-3. U+2682. - &#9858
 * ⚃ die face-4. U+2683. - &#9859
 * ⚄ die face-5. U+2684. - &#9860
 * ⚅ die face-6. U+2685. - &#9861
 * 🎲 game die. U+1F3B2.
 */

let dieContainer = $(`#dieContainer`);

let pipsActive = false;

let allDieObject = document.getElementsByClassName("die"); // this is an array of objects - use: allDieObject[i].innerText

let currentDice = [];

/**
 * this will serve as an array for the current dice.
 * summing will be done via loop or array methods, each calling on the value proprerty of each die.
 * removing a die from the array can be done by the splice method?  or maybe make a new array with map, leaving off the old die.
 *  */

class Die {
  // creates a class called Die

  static id = 0; // this will eventually be used to give each die a unique id

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

// generates a new die instance, stores that object in the currentDice array, and displays a representation of that on the page
$(`#newdie`).click(function () {
  // console.log(`newdie was pressed`); //*logging

  let myDie = new Die(); // myDie is a new instance of the Die class
  myDie.roll(); //  sets the initial value of the die from undefined to a random die value

  //sets styles and text value
  let mydieholder = $(`<div class="dieParent col-1 my-3">`); // this div holds the die
  let myPageDie = $(`<div class="die py-3">`) // this div is the representation of the die
    .addClass(
      "die border border-dark border-4 rounded d-flex justify-content-center align-items-center"
    )
    .attr("id", myDie.id); // matches the die representation id to be the same as the id of the object die

  // displays the value of new dice on screen as pips or numbers depending on the state of pipsActive
  if (pipsActive) {
    console.log(myDie.value);
    switch (myDie.value.toString()) {
      case `1`:
        myPageDie.text(`⚀`);
        break;
      case `2`:
        myPageDie.text(`⚁`);
        break;
      case `3`:
        myPageDie.text(`⚂`);
        break;
      case `4`:
        myPageDie.text(`⚃`);
        break;
      case `5`:
        myPageDie.text(`⚄`);
        break;
      case `6`:
        myPageDie.text(`⚅`);
    }
  } else {
    myPageDie.text(myDie.value);
  }
  console.log(currentDice);

  //************************************************************ */ single click will reroll a single die
  myPageDie.click(() => {
    // anonymous functions!
    // console.log(`single click function has fired!`);
    let thisDieId = myDie.id;
    // console.log(`the line below will log the clicked on die in the array`);
    // console.log(currentDice[thisDieId]);

    // console.log(`the line below calls the roll function for that die`);
    currentDice[thisDieId].roll();

    // console.log(
    //   `the line below will log the current die in the array, and i should see a new value`
    // );
    // console.log(currentDice[thisDieId]);

    if (pipsActive) {
      console.log(myDie.value);
      switch (myDie.value.toString()) {
        case `1`:
          myPageDie.text(`⚀`);
          break;
        case `2`:
          myPageDie.text(`⚁`);
          break;
        case `3`:
          myPageDie.text(`⚂`);
          break;
        case `4`:
          myPageDie.text(`⚃`);
          break;
        case `5`:
          myPageDie.text(`⚄`);
          break;
        case `6`:
          myPageDie.text(`⚅`);
      }
    } else {
      myPageDie.text(myDie.value);
    }
    console.log(currentDice);

    // console.log(`myDie.id`);
    // console.log(myDie.id);
  });

  $(myPageDie).appendTo(mydieholder); //appends the die to the page
  $(mydieholder).appendTo(dieContainer);

  // console.log(myDie); //*logging
  // console.log(`the die's value is ${myDie.value}`); //*logging

  currentDice.push(myDie); // adds the die to the currentDice array

  // console.log(currentDice); //*logging
});

// loops through the currentDice array, calls the reroll method on each die, and updates the display
$(`#reroll`).click(function () {
  for (let i = 0; i < currentDice.length; i++) {
    // console.log(`my for loop is working`); //* logging
    currentDice[i].roll();
    let newRoll = currentDice[i].value;
    $(`#${i}`).text(newRoll);
  }
  //console.log(currentDice); //* logging
  setDisplay();
});

// calls a function that returns the value of each die in the currentDice aray
$(`#sum`).click(function () {
  console.log(`sum was pressed`);
  let sum = 0;
  for (let i = 0; i < currentDice.length; i++) {
    sum += currentDice[i].value;
  }
  alert(sum);
});

$(`#pip`).click(function () {
  // this toggles the pip display, then calls the setDisplay function to set the display changes
  if (pipsActive) {
    // pipToNum();
    pipsActive = false;
  } else {
    // numToPip();
    pipsActive = true;
  }
  setDisplay();
});

function numToPip() {
  // this swaps all numbers to pips
  pipsActive = true;

  for (i = 0; i < allDieObject.length; i++) {
    let textCompare = allDieObject[i].innerText;

    switch (textCompare) {
      case `1`:
        allDieObject[i].innerText = `⚀`;
        break;
      case `2`:
        allDieObject[i].innerText = `⚁`;
        break;
      case `3`:
        allDieObject[i].innerText = `⚂`;
        break;
      case `4`:
        allDieObject[i].innerText = `⚃`;
        break;
      case `5`:
        allDieObject[i].innerText = `⚄`;
        break;
      case `6`:
        allDieObject[i].innerText = `⚅`;
    }
  }
}

function pipToNum() {
  // this swaps all pips to numbers
  pipsActive = false;

  for (i = 0; i < allDieObject.length; i++) {
    let textCompare = allDieObject[i].innerText;

    switch (textCompare) {
      case `⚀`:
        allDieObject[i].innerText = `1`;
        break;
      case `⚁`:
        allDieObject[i].innerText = `2`;
        break;
      case `⚂`:
        allDieObject[i].innerText = `3`;
        break;
      case `⚃`:
        allDieObject[i].innerText = `4`;
        break;
      case `⚄`:
        allDieObject[i].innerText = `5`;
        break;
      case `⚅`:
        allDieObject[i].innerText = `6`;
    }
  }
}

function setDisplay() {
  // this function controls whether to display pips or numbers on new or existing die
  if (pipsActive) {
    // this display is used when pips are active
    for (i = 0; i < allDieObject.length; i++) {
      let textCompare = allDieObject[i].innerText;

      switch (textCompare) {
        case `⚀`:
          allDieObject[i].innerText = `1`;
          break;
        case `⚁`:
          allDieObject[i].innerText = `2`;
          break;
        case `⚂`:
          allDieObject[i].innerText = `3`;
          break;
        case `⚃`:
          allDieObject[i].innerText = `4`;
          break;
        case `⚄`:
          allDieObject[i].innerText = `5`;
          break;
        case `⚅`:
          allDieObject[i].innerText = `6`;
      }
    }
  } else {
    // this display is used when pips are inactive
    for (i = 0; i < allDieObject.length; i++) {
      let textCompare = allDieObject[i].innerText;

      switch (textCompare) {
        case `1`:
          allDieObject[i].innerText = `⚀`;
          break;
        case `2`:
          allDieObject[i].innerText = `⚁`;
          break;
        case `3`:
          allDieObject[i].innerText = `⚂`;
          break;
        case `4`:
          allDieObject[i].innerText = `⚃`;
          break;
        case `5`:
          allDieObject[i].innerText = `⚄`;
          break;
        case `6`:
          allDieObject[i].innerText = `⚅`;
      }
    }
  }
}

//! $(selector).click(function)
// https://www.w3schools.com/jquery/event_click.asp
// Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
/**
 * the event listener on that particular die-div will have access to its id, which also matches the id inside the array
 * this will need to call roll() on the die
 * check if roll() updates the die within the array itself
 *
 *
 */

//! $(selector).dblclick(function)
// https://www.w3schools.com/jquery/event_dblclick.asp
// Add a feature where double clicking on a die on the page causes that die to be removed from the page
