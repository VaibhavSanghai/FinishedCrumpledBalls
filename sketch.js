//Making all Matter. codes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var scrambledPaper, dustbinObj, ground; 
var dustbinBottom, dustbinLeft, dustbinRight; 
var dustbinObj, dustbinObjImg; 

function preload() {
	dustbinObjImg = loadImage("dustbingreen.png"); 
}

function setup () {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	scrambledPaper = new Paper(50, 350, 10);

	dustbinLeft = new Dustbin(290, 350, 20, 100);
	dustbinBottom = new Dustbin(400, 380, 200, 20); 
	dustbinRight = new Dustbin(500, 350, 20, 100); 

	dustbinLeft.shapeColor = "white"; 
	dustbinBottom.shapeColor = "white"; 
	dustbinRight.shapeColor = "white"; 
	
	ground = new Ground(400, 390, 800, 10); 
}

function draw() {
  Engine.update(engine);

  background("white"); 

  scrambledPaper.display();
  ground.display();

  imageMode(CENTER); 
  image(dustbinObjImg, 400, 300, 200, 165); 
}


function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(scrambledPaper.body, scrambledPaper.body.position,{x: 5,y: -5});
  }
}