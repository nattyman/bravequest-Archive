var state = {
    // mode could be map or encounter, this locks the game play into the needed context
    "mode":"map", // encounter, battle
    "currentWeapon":"",
    "currentOpponent":"", // put the instance of the opponent here to save the game state.
};

var myStats = {
    "health":100,
    "armor":5,
    "agility":10,
    "strength":10,
    "endurance":15,
    "attack":5,  // general attack ability without a weapon
}

var inventory = {
    // Starting inventory
    "shortBow":1,
    "arrows":12,
    "knife":1,
    "food":4, // Start with 2 rabits, worth 2 each.
    "wolfpelt":0,
}

// weapons
knife = {
    "attack":5,
    "block":3,
}

shortBow = {
    "attack":10,
    "block":1,
    "distance":30, //This is in feet
}

//NPC's

wolf = {
    "description":"This common wolf is not terribly aggressive or strong by itslef, but is formidable in a pack.",
    "alive":1,
    "health":20,
    "armor":1,
    "agility":20,
    "strength":20,
    "endurance":10,
    "attack":20,  // general attack ability
    "story":"As you walk the road between your home and Kingsport, the sun sets and in the dim light of the dusk you notice a pair of yellow eyes peering out from the dark trees on your right.<br><br> A wolf is following you!"
}

bandit = {
    "description":"This common bandit is vicious but not to smart.",
    "alive":1,
    "health":40,
    "armor":5,
    "agility":5,
    "strength":25,
    "endurance":10,
    "attack":20,  // general attack ability
    "story":"A bandit jumps out from behind a tree and demands you give him everything you own"
}