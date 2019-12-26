// This module is to determin the player location and move them around the board.

// console.log(map.row);

// Starting location
var myCoordinates = {"x":1,"y":1};
var myLocation = "";

function move(direction){
    switch(direction) {
        case "North":
            myCoordinates.y -= 1;
            break;
        case "East":
            myCoordinates.x += 1;
            break;
        case "South":
            myCoordinates.y += 1;
            break;
        case "West":
            myCoordinates.x -= 1;
            break;
        default:
            alert = "You can't move like that!";
            console.log("No case was matched");
    }
}

function setLocation() {
    myX = myCoordinates.x;
    myY = myCoordinates.y;
    console.log("x=" + myX + "\ny=" + myY);
    myLocation = myMap.x[myX].y[myY].name;
    console.log(myLocation);
}