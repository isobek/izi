function setup() {
    createCanvas(500,500);
    background(177);
}

var x = 0;
var y = 0;

var xSpeed = 0;
var ySpeed = 0;

function draw() {
    background(177);
    ellipse(x,y,50);
    fill(random(255),random(255),random(255));

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

    x = x + xSpeed;
    y = y + ySpeed;

}