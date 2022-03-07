var count = 0;
var LeftCatEarWag = 0;
var RightCatEarWag = 0;
var clouds = [];
// var MouthMove = 0;
var mic;
var micLevel;
var y;
var s;
var changeDirection = 0;
var sketchStarted = false;

function setup() {

  createCanvas(500, 500);
  angleMode(DEGREES);

  createButton("Start").mousePressed(startSketch);
  changeDirection = false;
  s = 0;
  y = 1;
  for (let i = 0; i <= 6; i++) {
    clouds[i] = new Cloud(
      random(1, 10) * width * 0.4,
      random(1, 10) * -height * 0.03,
      random(4) * 0.8
    );
  }

  // console.log(clouds);
}

function startSketch(){
  mic = new p5.AudioIn();
  mic.start();

  sketchStarted = true;
}
function draw() {

  if(sketchStarted){
    background(0, 225, 255);
    frameRate(35);
    for (i = 0; i < clouds.length; i++) {
      clouds[i].display();
      clouds[i].move();
    }
    if (
      mouseX > width * 0 &&
      mouseX < width * 0 &&
      mouseY > height * 0 &&
      mouseY < height * 0
    ) {
      // console.log("mouse!");
    } else {
      rotate(0);
      translate(0, y);
      if (y > 10) {
        changeDirection = true;
      } else if (y <= 0) {
        changeDirection = false;
      }
      if (y >= 0 && changeDirection == false) {
        y = y + 1;
      } else if (changeDirection == true) {
        y = y - 1;
      }
    }
    if (mic.getLevel() > 0.01){

      drawHoodie(69, 10, 1);

      drawLeftCatEar();

      drawRightCatEar();

      drawHead();

      drawHair();

      drawFace();

      drawOpenMouth();

      drawEyewhites();
    }

    else if(mic.getLevel() < 0.01){

    drawHoodie(69, 10, 1);

    drawLeftCatEar();

    drawRightCatEar();

    drawHead();

    drawHair();

    drawFace();

    drawMouth();

    drawEyewhites();
    }

    // console.log("mouse x is:" + mouseX);
    // console.log("mouse y is:" + mouseY);

    LeftCatEarWag = map(
      mouseX,
      width * 0,
      width * 3.8,
      width * 0,
      height * 0.002
    );

    RightCatEarWag = map(
      mouseX,
      width * 0,
      width * 3.8,
      width * 0,
      height * 0.002
    );

    // MouthMove = map(mic.getLevel(), 0, 1, 0, 40);
  }
}

function drawHoodie(r, g, b) {
  // hoodie
  strokeWeight(5);
  fill(r, g, b);
  ellipse(width * 0.5, height * 0.49, width * 0.6, width * 0.6); //250, 245, 300, 300
}
function drawLeftCatEar(x, y, rotation) {
  push();
  translate(width * 0.375, height * 0.38);
  rotate(-LeftCatEarWag);
  translate(width * -0.375, height * -0.38);
  fill(69, 10, 1);
  beginShape();
  strokeWeight(5);
  vertex(width * 0.24, height * 0.38); //120, 190
  vertex(width * 0.28, height * 0.1); //140, 50
  vertex(width * 0.4, height * 0.27); //200, 135
  endShape();
  beginShape(TRIANGLES);
  strokeWeight(0);
  fill(248, 194, 255);
  vertex(width * 0.28, height * 0.35); //140, 175
  vertex(width * 0.3, height * 0.18); //150, 90
  vertex(width * 0.37, height * 0.28); //185, 140
  endShape(CLOSE);
  pop();
}
function drawRightCatEar() {
  push();
  translate(width * 0.62, height * 0.32);
  rotate(RightCatEarWag);
  translate(width * -0.62, height * -0.32);
  fill(69, 10, 1);
  beginShape();
  strokeWeight(5);
  vertex(width * 0.58, height * 0.27); //290, 135
  vertex(width * 0.68, height * 0.1); //340, 50
  vertex(width * 0.76, height * 0.38); //380, 190
  endShape();
  beginShape(TRIANGLES);
  strokeWeight(0);
  fill(248, 194, 255);
  vertex(width * 0.72, height * 0.35); //360, 175
  vertex(width * 0.67, height * 0.18); //335, 90
  vertex(width * 0.61, height * 0.28); //305, 140
  endShape(CLOSE);
  pop();
}

function drawHead(r, g, b) {
  // headshape
  fill(255, 238, 209);
  strokeWeight(0);
  rect(width * 0.3, height * 0.4, width * 0.4, width * 0.34, width * 0.1); //150, 200, 200, 170, 50
  strokeWeight(0);
  ellipse(width * 0.502, height * 0.668, width * 0.396, width * 0.21); //251, 334, 198, 105

  // ears
  ellipse(width * 0.7, height * 0.62, width * 0.1, width * 0.12); //350, 310, 50, 60
  ellipse(width * 0.3, height * 0.62, width * 0.1, width * 0.12); //150, 310, 50, 60

  // eyes
  strokeWeight(5);
  fill(150, 50, 50);
  rect(width * 0.38, height * 0.56, width * 0.04, width * 0.1); //190, 280, 20, 50
  rect(width * 0.58, height * 0.56, width * 0.04, width * 0.1); //290, 280, 20, 50
}
function drawMouth() {
  // mouth
  push();
  // translate(width * 0.5, height * 0.69);
  // rotate(MouthMove);
  // translate(width * -0.5, height * -0.69);
  noFill();
  angleMode(RADIANS);
  arc(width * 0.5, height * 0.69, width * 0.04, width * 0.04, width * 0, PI); //250, 345, 20, 20, 0, PI
  pop();
}

function drawFace(r, g, b) {
  // eyewhites
  strokeWeight(5);
  fill(255, 255, 255);
  rect(width * 0.38, height * 0.56, width * 0.02, width * 0.04); //190, 280, 10, 20
  rect(width * 0.58, height * 0.56, width * 0.02, width * 0.04); //290, 280, 10, 20
}

function drawHair(r, g, b) {
  // sideburns
  strokeWeight(0);
  fill(245, 66, 239);
  beginShape(TRIANGLES);
  vertex(width * 0.64, height * 0.54); //320, 270
  vertex(width * 0.68, height * 0.7); //340, 350
  vertex(width * 0.72, height * 0.54); //360, 270
  endShape();
  strokeWeight(0);
  fill(245, 66, 239);
  beginShape(TRIANGLES);
  vertex(width * 0.29, height * 0.54); //145, 270
  vertex(width * 0.33, height * 0.7); //165, 350
  vertex(width * 0.37, height * 0.54); //185, 270
  endShape();

  // hair
  strokeWeight(0);
  point(width * 0.46, height * 0.46); //230, 230
  point(width * 0.44, height * 0.6); //220, 300
  point(width * 0.54, height * 0.48); //270, 240
  point(width * 0.62, height * 0.54); //310, 270
  point(width * 0.8, height * 0.6); //400, 300
  point(width * 0.72, height * 0.5); //360, 250
  point(width * 0.82, height * 0.48); //410, 240
  point(width * 0.58, height * 0.3); //290, 150
  point(width * 0.52, height * 0.34); //260, 170
  point(width * 0.52, height * 0.31); //260, 155
  point(width * 0.53, height * 0.27); //265, 135
  point(width * 0.49, height * 0.31); //245, 155
  point(width * 0.49, height * 0.34); //245, 170
  point(width * 0.44, height * 0.3); //220, 150
  point(width * 0.24, height * 0.48); //120, 240
  point(width * 0.29, height * 0.54); //145, 270
  point(width * 0.37, height * 0.54); //185, 270
  point(width * 0.46, height * 0.46); //230, 230

  strokeWeight(0);
  fill(245, 66, 239);
  beginShape();
  vertex(width * 0.46, height * 0.46); //230, 230
  vertex(width * 0.44, height * 0.6); //220, 300
  vertex(width * 0.54, height * 0.48); //270, 240
  vertex(width * 0.62, height * 0.54); //310, 270
  vertex(width * 0.8, height * 0.6); //400, 300
  vertex(width * 0.72, height * 0.5); //360, 250
  vertex(width * 0.82, height * 0.48); //410, 240
  vertex(width * 0.58, height * 0.3); //290, 150
  vertex(width * 0.52, height * 0.34); //260, 170
  vertex(width * 0.52, height * 0.31); //260, 155
  vertex(width * 0.53, height * 0.27); //265, 135
  vertex(width * 0.49, height * 0.31); //245, 155
  vertex(width * 0.49, height * 0.34); //245, 170
  vertex(width * 0.44, height * 0.3); //220, 150
  vertex(width * 0.24, height * 0.48); //120, 240
  vertex(width * 0.29, height * 0.54); //145, 270
  vertex(width * 0.37, height * 0.54); //185, 270
  vertex(width * 0.46, height * 0.46); //230, 230
  endShape();
}

function drawEyewhites(r, g, b) {
  // eyewhites
  strokeWeight(5);
  fill(255, 255, 255);
  rect(width * 0.38, height * 0.56, width * 0.02, width * 0.04); //190, 280, 10, 20
  rect(width * 0.58, height * 0.56, width * 0.02, width * 0.04); //290, 280, 10, 20
}

  function drawOpenMouth(){
  //mouth
  strokeWeight(5);
  beginShape();
  vertex(width * 0.48, height *0.686);
  vertex(width * 0.52, height *0.686);
  endShape();
  push();
  fill(255, 25, 0);
  angleMode(RADIANS);
  arc(width * 0.5, height * 0.69, width * 0.04, width * 0.04, width * 0, PI); //250, 345, 20, 20, 0, PI
  pop();
}
