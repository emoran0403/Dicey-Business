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

let dieContainer = $(`#dieContainer`); // this is the div that holds an individual die

let pipsActive = false; // this controls the state of displaying pips or not

let allDieObject = document.getElementsByClassName("die"); // this is object that contains each die-div on screen - use: allDieObject[i].innerText

let currentDice = []; // this array will hold all the die objects

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
      "die noselect border border-dark border-4 rounded d-flex justify-content-center align-items-center"
    )
    .attr("id", myDie.id); // matches the die representation id to be the same as the id of the object die

  // displays the value of new dice on screen as pips or numbers depending on the state of pipsActive

  myPageDie.text(myDie.value);
  currentDice.push(myDie); // adds the die to the currentDice array

  // console.log(currentDice); //*logging

  //! single click will reroll a single die
  myPageDie.click(() => {
    // anonymous functions!
    console.log(`single click has fired`);

    allDieObject = document.getElementsByClassName("die");

    let thisDieId = myDie.id; // gets the id of the die, so it knows which is being clicked

    let indexToRoll = currentDice.findIndex(idProp);

    function idProp(objectHere) {
      return objectHere.id === thisDieId;
    }

    // console.log(currentDice[thisDieId]);
    currentDice[indexToRoll].roll(); // rolls the die that was clicked. roll updates the new value

    myPageDie.text(currentDice[indexToRoll].value); // sets the text as the value

    setDisplay(); // makes sure the display respects the pipsActive state
  });

  //! double click will remove the die from the page

  //? when i remove the first die, it will not let me reroll the last die on the screen
  //? when i remove the first 2 die, it will not let me reroll the last 2 die on screen
  //*

  myPageDie.dblclick(() => {
    let thisDieId2 = myDie.id; // gets the id of the die, so it knows which one is being double clicked
    console.log(`double click has fired`);
    // console.log(currentDice);

    let indexToKill = currentDice.findIndex(idProp); // gets the index of the first element that passes the test described in the function below

    function idProp(objectHere) {
      // the test is if the property of the object in the array matches the id of the die being clicked
      return objectHere.id === thisDieId2;
    }

    currentDice.splice(indexToKill, 1); // this removes the die from the currentDice array

    mydieholder.remove(); // removes the element from the page.  this is the outer box around the die
    $(`#${thisDieId2}`).remove(); // finds the id matching the die that was clicked on, and removes the die number from the screen

    console.log(allDieObject);
    console.log(currentDice);
  });

  $(myPageDie).appendTo(mydieholder); // appends the die to the container
  $(mydieholder).appendTo(dieContainer); // appends the container to the page
  setDisplay(); // this must be after appending, since setDisplay depends on the allDieObject
});

// this button loops through the currentDice array, calls the reroll method on each die, and updates the display
$(`#reroll`).click(function () {
  for (let i = 0; i < currentDice.length; i++) {
    let currentDie = currentDice[i];

    currentDie.roll(); // runs through the array, calling the roll function on each object

    let newRoll = currentDie.value; // stores the value in a variable

    $(`#${currentDie.id}`).text(newRoll); // selects the id on page and sets the value as that text
  }

  //*the id on the page must match the object id from the currentDice array
  /**
   *
   *
   * if id on page === die.id from array, then id.text(newRoll)
   */

  console.log(currentDice); //* logging

  setDisplay();

  var audio = new Audio("RollSound.mp3");
  audio.play();
});

// this buttoncalls a function that returns the value of each die in the currentDice aray
$(`#sum`).click(function () {
  console.log(`sum was pressed`);
  let sum = 0;
  for (let i = 0; i < currentDice.length; i++) {
    sum += currentDice[i].value;
  }
  swal.fire(`Your sum is ${sum}`);
});

// this button flips the state of pipsActive, then calls setDisplay()
$(`#pip`).click(function () {
  // this toggles the pip display, then calls the setDisplay function to set the display changes
  if (pipsActive) {
    // if pips are on, turn them off
    pipsActive = false;
  } else {
    //if pips are off, turn them on
    pipsActive = true;
  }
  setDisplay(); // change the display to reflect the new pip state
});

// this function updates the display of all die on screen to reflect the current pip state
function setDisplay() {
  if (pipsActive) {
    // this runs when pips are active
    for (i = 0; i < allDieObject.length; i++) {
      // this goes through the array of die-divs on screen
      let textCompare = allDieObject[i].innerText; // this stores their text - which matches the value

      switch (
        textCompare // and switches them to pips
      ) {
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

  if (!pipsActive) {
    // this runs when pips are inactive
    for (i = 0; i < allDieObject.length; i++) {
      // this goes through the array of die-divs on screen
      let textCompare = allDieObject[i].innerText; // this stores their text - which matches the value

      switch (
        textCompare // and switches them to numbers
      ) {
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
/**
 * checks the allDieObject, compares ids and removes it from the screen and the currentDice array
 *
 *
 *
 *
 */

/**
 *
 *
 * findIndex() will return the index of the first element that passes a test
 * i can use this to get the index of the object with the id i want
 * then i can pass this id to slice()
 *
 *
 *
 *
 *
 */

currentDice.forEach(function (currentDie) {
  currentDie.roll();
  let newRoll = currentDie.value; // stores the value in a variable
  $(`#${currentDie.id}`).text(newRoll); // selects the id on page and sets the value as that text
});

for (let i = 0; i < currentDice.length; i++) {
  let currentDie = currentDice[i]; // runs through the array, calling the roll function on each object
}
