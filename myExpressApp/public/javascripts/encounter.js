// var message = "";
// var question = "";
// var [story, question] = ["No story", "No question"];
var response = {"story":"No Story","Question":"No question"};


// TO DO
// *Create random number generator between 1 and 100
// *Create monster char stats
// *Create main char stats
// *Add random-ness to encounters


function action(newCommand){
    console.log("Ready to action = " + newCommand);
    switch(newCommand) {
        case "attack":
        case "a":
            // response.story = "You attack the Wolf";
            response.question = "What will you attack with?";
            break;
        case "run":
        case "r":
            response.story = "It's not cowardly if no one sees it. You run away to live another day.";
            response.question = "now what?";
            break;
        case "knife":
        case "k":
            response.story = "A bold move!  Someone likes to get their hands dirty.  You slowly pull your knife out of it's sheath at your side and creep toward the yellow eyes staring out of the wood.<br><br>";
            response.story += "Suddenly, without warning, another creature that is all fure and teeth and claws slams into you from the side. The eyes in front pounces on you along with half a dozen other fierce wolves.  You barely realize what is happening before they tear you to pieces.";
            response.question = "Rest In Peace"
            break;
        case "bow":
        case "b":
        case "arrow":
        case "bow and arrow":
            break;
    }
}

function encounterMonster(type){
    console.log("You are encountering a " + type);
    response.story = "As you walk the road between your home and Kingsport, the sun sets and in the dim light of the dusk you notice a pair of yellow eyes peering out from the dark trees on your right.<br><br> A wolf is following you!";
    response.question = "Will you (r)un or (a)ttack?";
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