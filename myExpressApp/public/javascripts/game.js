function printLocation() {
    document.getElementById("myCoordinates ").innerHTML = "x:" + myCoordinates .x + " y:" + myCoordinates .y ;
  }
 
 function runGame() {
 //- Print location
    document.getElementById("story").innerHTML = intro;

    printLocation();
    var alert = "";
    myMap = map;
    console.log(myMap.x[1].y[1].name);
 }
//- function to receive input and print it on the page
function enterCommand() {
  //- Prevent the form from reloading the page 
  event.preventDefault(); 

    //- Recieve the input into "newCommand"
  let newCommand = document.getElementById("command").value;
  //-
  alert = "";
  switch(state.mode) {
    case "map":
        move(newCommand);
        setLocation();
    case "encounter":
        
    default:
        alert = "Error: No game state is available."
  }
  printLocation();
  if (alert) {
    newCommand += "<br><span style='color:red; font:bold'>" + alert + "</span>";
  }
  console.log(alert);
  document.getElementById("command").value = "";
  document.getElementById("command").placeholder = "Now what?"

//   Encounter
    encounter();
    document.getElementById("story").innerHTML = response.story;
    document.getElementById("question").innerHTML = response.question;



}

