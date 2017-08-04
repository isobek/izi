function Superhero(trueName,whatPower,whatCause,whatLoc) {
    this.realname = trueName;
    this.power = whatPower;
    this.cause = whatCause;
    this.location = whatLoc;
}

var batman = new Superhero("Bruce Wayne","Cash","Dead parents",["Wayne Manor","The Batcave","Wayne Tower"]);
var spiderman = new Superhero("Peter Parker","Spidery shit","radioactive spider",["Apartment","Queens"]);
var wonderWoman = new Superhero("Diana","she's a fucking God","she's a god",["Themiscyra","London"]);

// console.log(batman);
// console.log(spiderman);
// console.log(wonderWoman);

var superheroArray = [batman,spiderman,wonderWoman]

for (i=0;i<superheroArray.length;i++) {
    console.log(superheroArray[i]);
}

// var batman = {
//     "realname" : "Bruce Wayne",
//     "power" : "$$$",
//     "cause" : "dead parents"
// }