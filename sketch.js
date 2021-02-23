
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100, 400, 40);

	bobObject1 = new Bob(220, 400, 80);
	rope1 = new Rope(roof.body, bobObject1.body);

	bobObject2 = new Bob(320, 400, 80);
	rope2 = new Rope(roof.body, bobObject2.body);

	bobObject3 = new Bob(420, 400, 80);
	rope3 = new Rope(roof.body, bobObject3.body);

	bobObject4 = new Bob(520, 400, 80);
	rope4 = new Rope(roof.body, bobObject4.body);

	bobObject5 = new Bob(620, 400, 80);
	rope5 = new Rope(roof.body, bobObject5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  roof.display();

  bobObject1.display();
  rope1.display();

  bobObject2.display();
  rope2.display();

  bobObject3.display();
  rope3.display();

  bobObject4.display();
  rope4.display();

  bobObject5.display();
  rope5.display();

  
  drawSprites();
 
}


function keyPressed(){

  if(keyPressed === LEFT_ARROW){
      bobObject1.body.velocityX = -4;
  }

  if(keyCode === RIGHT_ARROW){
	  bobObject5.body.velocityX = 4;
  }
}



