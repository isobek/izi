var x = 250,
    y = 250;

var ySpeed;
var xSpeed;

function setup() {
    createCanvas(500,500);
    background(177);
    xSpeed = random(-2,2);
    ySpeed = random(-2,2);
}

function draw() {
    background(177);
    ellipse(x,y,30);

    if (x>=500) {
        xSpeed = -1;
    } else if (x<=0) {
        xSpeed = 1;
    }

    if (y>=500) {
        ySpeed = -1;
    } else if (y<=0) {
        ySpeed = 1;
    }

    x += xSpeed;
    y += ySpeed;
}