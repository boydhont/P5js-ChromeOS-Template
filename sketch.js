function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 100,100);
}
