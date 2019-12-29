
function normalizeEncounter(input) {
    if (input == 'a' | input == 'attack' | input == 'f'| input == 'fight') {
        input = "a";
        console.log("Cleaning up input for attack");
    }
    else if (input === 'r' | input == 'run' | input == 'run away') {
        input = "r";
        console.log("Cleaning up input for run");
    }
    else if (input === 'i' | input == 'ignore' ) {
        input = "i";
        console.log("Cleaning up input for ignore");
    }
    else if (input === 'h' | input == 'hide') {
        input = "h";
        console.log("Cleaning up input for hide");
    }
    else {
        input = "";
        console.log("Command wasn't recognized");
    }
    return input;
}

function normalizeAttack(input){
    let weapon = "";
    Object.keys(weaponsList).forEach(key => {
        let value = weaponsList[key];
        if (input == key || input == value) {
            weapon = key;
            console.log("Weapon = " + weapon);
        }
    });
    return weapon;

}