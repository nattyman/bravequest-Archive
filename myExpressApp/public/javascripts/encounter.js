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