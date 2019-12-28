var chance = "";

function printLocation() {
    console.log("x:" + myCoordinates.x + " y:" + myCoordinates.y);
}

function rollDice(low, high) {
    let diceRoll = Math.random() * (high - low) + low;
    console.log("Dice roll = " + diceRoll);
    return diceRoll;
  }

function runGame() {
    //- Print location
    document.getElementById("story").innerHTML = intro;
    document.getElementById("question").innerHTML = question;
    
    printLocation();
    var alert = "";
    myMap = map;
    console.log(myMap.x[1].y[1].name);
}
//- function to receive input and print it on the page
function enterCommand() {
    //- Prevent the form from reloading the page 
    event.preventDefault();

    //Get a random number between 1 and 100
    chance = rollDice(1,100);

    //- Recieve the input into "newCommand"
    let newCommand = document.getElementById("command").value;
    newCommand = newCommand.toLowerCase();
    //- Clear the alert message
    alert = "";
    // React based on the game state mode
    switch (state.mode) {
        case "map":
            move(newCommand);
            setLocation();
            //   Encounter
            encounter();
            break;
        case "encounter":
            action(newCommand);
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
    document.getElementById("command").value = "";
    document.getElementById("command").placeholder = "Now what?"

    // Print the new story message and question on the page
    document.getElementById("story").innerHTML = response.story;
    document.getElementById("question").innerHTML = response.question;

}

