
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;

var Ground;


function preload()
{
	
}

function setup() {
	createCanvas(900, 500);
	engine = Engine.create();
	world = engine.world;

	Ground = new ground(200,390,400,20);

  var ball_options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
  }


	
	


 
var ball_options={
	isStatic:false,
	restitution:0.3,
    friction:0,
	density:1.2
}


ball = Bodies.circle(200,200,10,ball_options);
  World.add(world,ball);

ground = Bodies.circle(200,200,20)
  World.add(world,ground);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Ground.show();
  
  ellipse(ball.position.x,ball.position.y,25);
  
  


  drawSprites();
 
}



