// This module is to determin the player location and move them around the board.

// console.log(map.row);

// Starting location
var myCoordinates = {"x":1,"y":1};
var myLocation = "";

function move(direction){
    switch(direction) {
        case "North":
            myCoordinates.y -= 1;
            if (myCoordinates.y < map.min) {
                alert="You can't go that direction!";
                myCoordinates.y += 1;
            } 
            break;
        case "East":
            myCoordinates.x += 1;
            if (myCoordinates.x > map.max) {
                alert="You can't go that direction!";
                myCoordinates.x -= 1;
            } 

            break;
        case "South":
            myCoordinates.y += 1;
            if (myCoordinates.y > map.max) {
                alert="You can't go that direction!";
                myCoordinates.y -= 1;
            } 
            break;
        case "West":
            myCoordinates.x -= 1;
            if (myCoordinates.x < map.min) {
                alert="You can't go that direction!";
                myCoordinates.x += 1;
            } 

            break;
        default:
            alert = "You can't move like that!";
            console.log("No case was matched");
    }
}

function setLocation() {
    // Assign the current coordinates to myX and myY
    myX = myCoordinates.x;
    myY = myCoordinates.y;
    console.log("x=" + myX + "\ny=" + myY);
    // Set the new location on the map.
    myLocation = myMap.x[myX].y[myY].name;
    console.log(myLocation);

}