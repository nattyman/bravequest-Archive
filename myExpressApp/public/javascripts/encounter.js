// var message = "";
// var question = "";
// var [story, question] = ["No story", "No question"];
var response = {"story":"No Story","Question":"No question"};

function encounterMonster(type){
    console.log("You are encountering a " + type);
    response.story = "As the sun sets you notice a pair of yellow eyes peering out from the dark trees on your right, a wolf is following you.";
    response.question = "Will you (r)un forward or (a)ttack?";
}

function encounter(){
    let myNPC = myMap.x[myX].y[myY].npc;
    let myNPCType = myMap.x[myX].y[myY].type;
    
    switch(myNPC) {
        case "monster":
            encounterMonster(myNPCType);
            console.log("Monster chosen");
            break;
        default:
            alert = "No encounter in map.js"
    }
}