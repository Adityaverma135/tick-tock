var hourhand,minhand,sechand
var hr,min,sc
var scAngle
var clock,clockimg

function  preload() {
  clockimg = loadImage("clock.png")
}

function setup() {
  createCanvas(800,400);
   clock=createSprite(201,197,50,50)
   clock.addImage(clockimg)
   clock.scale=0.35
}

function draw() {
  background(255);

  drawSprites(); 

  translate(200,200)
  rotate(-90)
  
  hr = hour();
  min = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360); 
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(scAngle); 
  stroke(0,128,0); 
  strokeWeight(7); 
  line(0,0,100,0);
  pop()

  push();
  rotate(minAngle); 
  stroke(255,0,0); 
  strokeWeight(7); 
  line(0,0,80,0);
  pop()

  push();
  rotate(hrAngle); 
  stroke(0); 
  strokeWeight(7); 
  line(0,0,60,0);
  pop()

  console.log(min)
    
}