// var message = "";
// var question = "";
// var [story, question] = ["No story", "No question"];
var response = {"story":"No Story","Question":"No question"};

function action(newCommand){
    console.log("Ready to action = " + newCommand);
    switch(newCommand) {
        case "attack":
        case "a":
            response.story = "You attack the Wolf";
            response.question = "now what?"
            break;
        case "run":
        case "r":
            response.story = "It's not cowardly if no one sees it. You run away to live another day.";
            response.question = "now what?"
            break;

    }
}

function encounterMonster(type){
    console.log("You are encountering a " + type);
    response.story = "As the sun sets you notice a pair of yellow eyes peering out from the dark trees on your right, a wolf is following you.";
    response.question = "Will you (r)un forward or (a)ttack?";
    state.mode = "encounter";
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