var chance = "";
var message = " ";
var story = "";
var alert = "";


function printLocation() {
    console.log("x:" + myCoordinates.x + " y:" + myCoordinates.y);
}

// use the dollar sign as document.getElementByID
function $(x) {return document.getElementById(x);}

function rollDice(low, high) {
    let diceRoll = Math.round(Math.random() * (high - low) + low);
    console.log("Dice roll = " + diceRoll);
    return diceRoll;
  }

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function restartGame() {
    $("question").innerHTML = "You're Dead.  Game over, man! Game over!"
    $("form").innerHTML = "<a href='/'>Restart game?</a>";
}

function print(id,message) {
    $("message").innerHTML += message;
}

function runGame() {
    //- Print story intro onto screen with the question
    $("story").innerHTML = intro;
    $("question").innerHTML = question;
    
    // Get starting location and log to console.
    myMap = map;
    console.log(myMap.x[1].y[1].name);
}

//- function to receive input and determine next action
function enterCommand() {
    
    //- Prevent the form from reloading the page 
    event.preventDefault();

    //Get a random number between 1 and 100 to use as chance throughout the turn
    chance = rollDice(1,100);

    //- Recieve the input into "newCommand"
    let newCommand = document.getElementById("command").value;
    newCommand = newCommand.toLowerCase(); // convert to lowercase for easy matching

    //- Clear the alert message incase it already has something assigned to it.
    alert = "";
    // React based on the game state mode
    switch (state.mode) {
        case "map":
            move(newCommand); // Change my coordinates
            setLocation(); // match new coordinates with map and get map location scenario for encounter
            //   Encounter
            encounter();
            break;
        case "encounter":
            action(newCommand);
            break;
        case "battle":
            battleChoice(newCommand);
            break;
        case "dead":
            alert = "You are dead!";
            break;
        default:
            alert = "Error: No game state is available."
            break;
    }
    printLocation();
    if (alert) {
        newCommand += "<br><span style='color:red; font:bold'>" + alert + "</span>";
    }
    console.log(alert);
    // Clear the input and set the placeholder
    document.getElementById("command").value = "";
    document.getElementById("command").placeholder = ">>"

    // Print the new story message and question on the page
    $("message").innerHTML = message;
    document.getElementById("story").innerHTML = response.story;
    document.getElementById("question").innerHTML = response.question;

    // message.forEach(print("message",message))
}

