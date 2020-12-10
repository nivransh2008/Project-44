const World = Matter.World;
const Engine = Matter.Engine; 
const Bodies = Matter.Bodies; 

var engine, world; 

var plane, planeImg;
var backgroundImg;
var player1, player2; 
var player1img, player2img; 
var database; 
var ground; 


function preload()
{
  backgroundImg = loadImage("bg for sdg 1.png")
  planeImg = loadImage("plane.png")
  player1img = loadImage("char1.png")
  player2img = loadImage("char2.png")
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  // console.log(width)
  // console.log(height)

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width/2, height, width, 5)
  World.add(world, ground);
  
  player1 = new Player(width/2, 100, 2, 2, "char1.png"); 
  player2 = new Player(width/2, 100, 2, 2, "char2.png"); 
  
  plane = createSprite(width/2,100); 
  plane.addImage(planeImg); 

 // player1 = createSprite(width/2,100)
  //player2 = createSprite(710,100)
 // player1.addImage(player1img)
  // player2.addImage(player2img)

}

function draw() {
  background(backgroundImg);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y, width, 20);
    
    player1.display(); 
    player2.display(); 

 
//   player1.scale = 0.3
//   player2.scale = 0.21
//  plane.depth = player1.depth + 1
//  plane.depth = player2.depth + 1

  drawSprites(); 
}


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(player1.body, false)
   Matter.Body.setStatic(player2.body, false)
  }
 }