// var message = "";
// var question = "";
// var [story, question] = ["No story", "No question"];
var response = {"story":"No Story","Question":"No question"};


// TO DO
// *Create random number generator between 1 and 100 - DONE
// *Create monster char stats - DONE
// *Create main char stats - DONE
// *Add random-ness to encounters - DONE

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
            switch(true) {
                case 50 < chance:
                    response.story += "Suddenly, without warning, another creature that is all fure and teeth and claws slams into you from the side. The eyes in front pounces on you along with half a dozen other fierce wolves.  You barely realize what is happening before they tear you to pieces.";
                    response.question = "Rest In Peace";
                    break;
                case 50 > chance:
                    response.story += "The wolf lunges forward as you bury the knife in it's chest. Well done!";
                    break;
            }
            break;
        case "bow":
        case "b":
        case "arrow":
        case "bow and arrow":
            response.story = "You take your bow and notch an arrow, you slowly pull back the string, aim right between to 2 yellow eyes, take a deep breath in, then out, pause and release the arrow...<br><br>";
            switch(true) {
                case chance > 1:
                    response.story += "The arrow glances off the wolf's scalp, enraging the beast.  He lunges toward you, barely giving you time to pull your dagger before he pounces on you.  The two of you roll around on the ground, your knife flashing, all you see is a teeth and claws and blood everywhere.<br>"
                    let outcome = battle("wolf","knife");
                    break;
                case chance < 35:
                    response.story += "The arrow sinks into the left eye and the beast falls.  You go to investigate, but find nothing. The short bow was only strong enough to scare it away, not bring it down.";
                    response.question = "Which way do you want to go? North to Kingsport?";
                    break;
                case chance > 35:
                    response.story += "The arrow sinks into the left eye and the beast falls.  You go to investigate and find the beast dead in a pool of it's own blood. The pelt should be worth some money.<br><br>Add a wolfpelt to your inventory.";
                    inventory.wolfpelt += 1;
                    break;
            }
            break;

    }
}

function encounterMonster(type){
    // This needs logic to determine if the monster is alive, and then it needs to be made generic based on the location pulling from the data file.
    console.log("You are encountering a " + type);
    response.story = this[type].story;
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

function battle(_opponent, _weapon){
    // Instantiate a new opponent off of the object template
    // let thisOp = Object.create(this[_opponent]);
    let thisOp = this[_opponent]; // Instead of insatniating, we will leave that wolf static for this spot on the map.
    console.log("Your opponent is " + thisOp.description);
    thisOp.health -= 5;
    console.log("The wolf's health is " + wolf.health + "\nThis wolf's health is " + thisOp.health);

    // Set the current weapon and opponent
    state.currentOpponent = _opponent;
    state.currentWeapon = _weapon;

    // Clear the story
    // response.story = '';
    
    // Removed loop b/c Javascript won't update the screen.  Will have to keep it turn based 
    // // Battle loop
    // let bothAlive = 1;
    // while(bothAlive) {
        // My Attack
        let myLowRange = myStats.strength - 5;
        let myHighRange = myStats.strength +2;
        let _myAttack = rollDice(myLowRange, myHighRange) + this[_weapon].attack - thisOp.armor;
            if (_myAttack < 1) {_myAttack = 1} // prevent negative attack and loops
        console.log("My attack = " +_myAttack);
        let _opDamage = Math.round(_myAttack * (chance/100));

        // Opponents Attack
        let opLowRange = thisOp.strength -5;
        let opHighRange = thisOp.strength +2;
        let _opAttack = rollDice(opLowRange, opHighRange) + thisOp.attack - myStats.armor;
            if (_opAttack < 1) {_opAttack = 1} // prevent negative attack and loops
        let _myDamage = Math.round(_opAttack * (chance/100));

        // Print results to screen
        response.story += "<br>You take " + _myDamage + " damage.  Your opponent takes " + _opDamage + " damage<br>";
        response.question = "Will you continue to (f)ight or try to (r)un away?"
        // document.getElementById("story").innerHTML += thisStory;
        // print(thisStory);
        console.log(response.story);

        myStats.health -= _myDamage;
        thisOp.health -= _opDamage; 
        console.log("Your health is " + myStats.health);
        console.log("Your opponents health is " + thisOp.health);

        if (myStats.health <= 0) {
            response.story += "You're dead. Game over!";
            state.mode = "dead";
            restartGame();
        } 
        else if (thisOp.health <= 0) {
            response.story += "<p>Success! You have slain the " + _opponent;
            this[_opponent].alive = 0;
        }
    state.mode = "battle";
}

function battleChoice(command) {
    if (command == "fight" || command == "f") {
        battle(state.currentOpponent, state.currentWeapon);
    }
    else if (command == "run" || command == "r") {
        // Need to take damage from re-treating, probably subtract a full attack from the enemy.
        myStats.health - this[state.currentWeapon].attack;
        response.story = "You barely manage to get away, but you lost " + this[state.currentWeapon].attack + " health, leaving you with only " + myStats.health + " health.";
        response.question = "Where do you want to go now?"
        state.mode = "map";
    }
}