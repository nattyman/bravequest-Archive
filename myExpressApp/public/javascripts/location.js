// This module is to determin the player location and move them around the board.

// Starting location
var myLocation = {"x":1,"y":1};

function move(direction){
    switch(direction) {
        case "North":
            myLocation.y -= 1;
            break;
        case "East":
            myLocation.x += 1;
            break;
        case "South":
            myLocation.y += 1;
            break;
        case "West":
            myLocation.x -= 1;
            break;
        default:
            alert = "You can't move like that!";
            console.log("No case was matched");
    }
}