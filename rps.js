var choices = ["r","p","s"];

var userChoice = "r";
var computerChoice = choices[Math.floor(Math.random()*3)];


if( userChoice == computerChoice ) {
    console.log(computerChoice);
    console.log(userChoice);
    console.log("REMATCH");
} else if (userChoice == "r") {

    if(computerChoice=="p") {
        console.log(computerChoice);
        console.log(userChoice);
        console.log("YOU LOSE");
    }

    if(computerChoice=="s") {
        console.log(computerChoice);
        console.log(userChoice);
        console.log("YOU WIN");
    }

} else if (userChoice == "p") {

    if(computerChoice=="s") {
        console.log(computerChoice);
        console.log(userChoice);
        console.log("YOU LOSE");
    }

    if(computerChoice=="r") {
        console.log(computerChoice);
        console.log(userChoice);
        console.log("YOU WIN");
    }

} else if (userChoice == "s") {

    if(computerChoice=="r") {
        console.log(computerChoice);
        console.log(userChoice);
        console.log("YOU LOSE");
    }

    if(computerChoice=="p") {
        console.log(computerChoice);
        console.log(userChoice);
        console.log("YOU WIN");
    }

} else {
    console.log(computerChoice);
    console.log(userChoice);
    console.log("SOMETHING WENT WRONG");
}