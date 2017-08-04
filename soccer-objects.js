// var marceloArrary = ["MARCELO",87,97,"defender"];

var marcelo1 = {
    "name" : "Marcelo",
    "stamina" : 97,
    "speed" : 87,
    "position" : "defender"
};

function SoccerPlayer(playerName,playerStamina,playerSpeed,playerPosition) {
    this.name = playerName;
    this.stamina = playerStamina;
    this.speed = playerSpeed;
    this.position = playerPosition;
}

var marcelo2 = new SoccerPlayer("Marcelo",97,87,"defender");
var messi = new SoccerPlayer("messi",58,76,"forward");
var cristiano = new SoccerPlayer("d");

console.log(marcelo1);
console.log(marcelo2);
console.log(messi);

// console.log(marceloArrary);
// console.log(marcelo);

// console.log(marceloArrary[0]);
// console.log(marcelo.stamina);