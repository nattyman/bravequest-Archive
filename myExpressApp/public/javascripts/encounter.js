var response = {"story":"No Story","Question":"No question"};


// TO DO
// *Create random number generator between 1 and 100 - DONE
// *Create monster char stats - DONE
// *Create main char stats - DONE
// *Add random-ness to encounters - DONE
// *Make the action function dymanmic based on data.js, 
// *need to check inventory for weopons before using
// *Maybe the game skeleton needs to be generic and simple, but individual monsters will have their own functions to make the game play more unique.  That will be harder to maintain in the future though.  Maybe once I see a pattern in the monster encounters I can start combining elements.

// Chooses the type of encounter based on the scenario
function encounter(){
    let myType = myMap.x[myX].y[myY].encounter.type;
    let myNPC = myMap.x[myX].y[myY].encounter.npc;
    
    // Check to see if the NPC is still alive before encountering it.
    if (this[myNPC].alive) {
        switch(myType) {
            case "monster":
                console.log("Encountering type Monster");
                    // Only encounter the monster if it is still alive
                    encounterMonster(myNPC);
                break;
            default:
                alert = "No encounter in map.js"
        }
    } else {
        console.log("This npc is already dead.");
        state.mode = "map";
    }
}

// Initial Monster and other beast encounters
function encounterMonster(npc){
    console.log("You are encountering a " + npc);
    response.story = this[npc].story; // print the monster story
    response.question = "What would you like to do (i)gnore, (r)un, (h)ide, or (a)ttack?"; // ask the monster question
    // Set the current opponent
    state.currentOpponent = npc;
    state.mode = "encounter"; // lock the game mode state to encounter
    }

// Recieve the action command of how to handle the encounter.
function action(newCommand){
    newCommand = normalizeEncounter(newCommand);
    let npc = state.currentOpponent;

    switch(newCommand) {
        case "a":
            response.question = "What will you attack the " + npc + " with?";
            state.mode = "attack";
            break;
        case "r":
            response.story = "It's not cowardly if no one sees it. You run away to live another day.";
            state.mode = "map";
            break;
        // case "knife":
        // case "k":
        //     response.story = "A bold move!  Someone likes to get their hands dirty.  You slowly pull your knife out of it's sheath at your side and creep toward the yellow eyes staring out of the wood.<br><br>";
        //     switch(true) {
        //         case 50 < chance:
        //             response.story += "Suddenly, without warning, another creature that is all fur and teeth and claws slams into you from the side. The eyes in front pounces on you along with half a dozen other fierce wolves.  You barely realize what is happening before they tear you to pieces.";
        //             response.question = "Rest In Peace";
        //             break;
        //         case 50 > chance:
        //             response.story += "The wolf lunges forward as you bury the knife in it's chest. You got lucky on that one!";
        //             break;
        //     }
        //     break;
        // case "bow":
        // case "b":
        // case "arrow":
        // case "bow and arrow":
        //     response.story = "You take your bow and notch an arrow, you slowly pull back the string, aim right between to 2 yellow eyes, take a deep breath in, then out, pause and release the arrow...<br><br>";
        //     switch(true) {
        //         case chance > 1:
        //             response.story += "The arrow glances off the wolf's scalp, enraging the beast.  He lunges toward you, barely giving you time to pull your dagger before he pounces on you.  The two of you roll around on the ground, your knife flashing, all you see is a teeth and claws and blood everywhere.<br>"
        //             let outcome = battle("wolf","knife");
        //             break;
        //         case chance < 35:
        //             response.story += "The arrow sinks into the left eye and the beast falls.  You go to investigate, but find nothing. The short bow was only strong enough to scare it away, not bring it down.";
        //             response.question = "Which way do you want to go? North to Kingsport?";
        //             break;
        //         case chance > 35:
        //             response.story += "The arrow sinks into the left eye and the beast falls.  You go to investigate and find the beast dead in a pool of it's own blood. The pelt should be worth some money.<br><br>Add a wolfpelt to your inventory.";
        //             inventory.wolfpelt += 1;
        //             break;
        //     }
        //     break;

    }
}

function attack(input){
    weapon = normalizeAttack(input);



    switch(weapon){
        case "knife":
            // Set the current opponent to knife
            state.currentWeapon = weapon;
            response.story = "You draw your knife and swipe at the " + state.currentOpponent + "!";
            break;
        case "short bow":
             // Set the current opponent to short bow
             state.currentWeapon = "shortBow";
             response.story = "In the blink of an eye you draw your bow, notch an arrow, aim and release at the " + state.currentOpponent + "!";
            break;
    }
    battle();

}

function battle(){
    state.mode = "battle";
    // Instantiate a new opponent off of the object template
    // let thisOp = Object.create(this[_opponent]);
    let thisOp = state.currentOpponent; // Instead of insatniating, we will leave that wolf static for this spot on the map.
    let myWeapon = state.currentWeapon;
    console.log("Your opponent is " + this[thisOp].description);


    // Clear the story
    // response.story = '';
    
    // Removed loop b/c Javascript won't update the screen.  Will have to keep it turn based 
    // // Battle loop
    // let bothAlive = 1;
    // while(bothAlive) {
        // My Attack
        let myLowRange = myStats.strength - 5;
        let myHighRange = myStats.strength +2;
        let _myAttack = rollDice(myLowRange, myHighRange) + this[myWeapon].attack - this[thisOp].armor;
        // console.log(myLowRange + ", " + myHighRange + ", " + this[myWeapon].attack + ", " + thisOp.armor)
        if (_myAttack < 1) {_myAttack = 1} // prevent negative attack and loops
        console.log("My attack = " + _myAttack);
        let _opDamage = Math.round(_myAttack * (chance/100));

        // Opponents Attack
        let opLowRange = this[thisOp].strength -5;
        let opHighRange = this[thisOp].strength +2;
        let _opAttack = rollDice(opLowRange, opHighRange) + this[thisOp].attack - myStats.armor;
            if (_opAttack < 1) {_opAttack = 1} // prevent negative attack and loops
        let _myDamage = Math.round(_opAttack * (chance/100));

        // Print results to screen
        response.story += "<br>You take " + _myDamage + " damage.  Your opponent takes " + _opDamage + " damage<br>";
        response.question = "Will you continue to (f)ight or try to (r)un away?"
        // document.getElementById("story").innerHTML += thisStory;
        // print(thisStory);
        console.log(response.story);

        myStats.health -= _myDamage;
        this[thisOp].health -= _opDamage; 
        console.log("Your health is " + myStats.health);
        console.log("Your opponents health is " + this[thisOp].health);

        if (myStats.health <= 0) {
            response.story += "You're dead. Game over!";
            state.mode = "dead";
            restartGame();
        } 
        else if (this[thisOp].health <= 0) {
            response.story += "<p>Success! You have slain the " + thisOp;
            response.question = "Where will you go?"
            this[thisOp].alive = 0;
            state.mode = "map";
        }
}

function battleChoice(command) {
    if (command == "fight" || command == "f") {
        battle(state.currentOpponent, state.currentWeapon);
    }
    else if (command == "run" || command == "r") {
        // Need to take damage from re-treating, probably subtract a full attack from the enemy.
        myStats.health - this[state.currentWeapon].attack;
        response.story = "You barely manage to get away, but you lost " + this[state.currentWeapon].attack + " more health, leaving you with only " + myStats.health + " health. At least you are alive!";
        response.question = "Where do you want to go now?"
        state.mode = "map";
    }
}