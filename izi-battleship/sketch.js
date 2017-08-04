// must setup global variables OUTSIDE of function scope

//Making board a 2D nested array
// 0 means blank, 1 means ship

var boxSize = 60;

var board = [
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0]
]

var spot;

function setup(){
	createCanvas(boxSize*10,boxSize*10);
	// randomly assign 1 spot to be a ship
	spot = {
		"x":random(5),
		"y":random(5)
	}
}

function draw(){
	// redrawing background "clears" old content
	background(0);

	// redrawing current board
	for(var i = 0; i < 5; i++){
		//for each array in board
		for(var k = 0; k < 5; k++){
			//each item in array
			if(board[i][k]!=0){
				//not a blank, a.k.a. spot with a ship
				if(board[i][k]==1){
					fill(225,0,0); //will change color of drawn square
				}else{
					fill(0,0,225); //will change color of drawn square
				}
			}else{
				//blank
				fill(225,225,225);
			}
			//position in board array reflected in x, y coordinate by multiplying index for row and column
			rect((boxSize*1.5)*i, (boxSize*1.5)*k, boxSize,boxSize);
		}
	}
	
}

function mouseClicked(){
	if(spot.x==floor(mouseX/boxSize) && spot.y==floor(mouseY/boxSize)){
		board[floor(mouseX/boxSize)][floor(mouseY/boxSize)]=1; //hit
	}else{
		board[floor(mouseX/boxSize)][floor(mouseY/boxSize)]=2; //miss
	}
}

// function mouseClicked() {
//     if ( spot.x==floor(mouseX/tileSize) && spot.y==floor(mouseY/tileSize) ) {
//         board[floor(mouseX/tileSize)][floor(mouseY/tileSize)] = 1;
//     } else {
//         board[floor(mouseX/tileSize)][floor(mouseY/tileSize)] = 2;
//     }
// }





// var spot;
// var tileSize = 100;
// var board = [
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,1,0],
//     [0,0,0,0]
// ];

// function setup() {
//     createCanvas(tileSize*4,tileSize*4);
//     spot = {
//         "x":random(4),
//         "y":random(4)
//     };
// }

// function draw() {
//     background(170);
//     for ( var i; i<4; i++) {
//         for ( var k; k<4; k++) {
//             if ( board[i][k]!=0) {
//                 if ( board[i][k]==1) {
//                     fill(255,0,0);
//                 } else { 
//                     fill (0,0,255); 
//                 }
//             } else {
//                 fill(255,255,255);
//             }
//         }
//     }
//     rect(tileSize*i,tileSize*k,tileSize,tileSize);
// }

// function mouseClicked() {
//     if ( spot.x==floor(mouseX/tileSize) && spot.y==floor(mouseY/tileSize) ) {
//         board[floor(mouseX/tileSize)][floor(mouseY/tileSize)] = 1;
//     } else {
//         board[floor(mouseX/tileSize)][floor(mouseY/tileSize)] = 2;
//     }
// }