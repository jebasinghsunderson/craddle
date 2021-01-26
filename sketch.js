
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

      
	engine = Engine.create();
	world = engine.world;
  bobposx=width/2
  bobposy=height/2+100
	bob= new Bob(bobposx,bobposy,45)
	roof=new Roof(400,200,400,10)

	//Create the Bodies Here.

  constrope=new Rope(bob.body,roof.body,0,0)
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  bob.display();
  roof.display();
  constrope.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(bob.body,bob.body.position,{x:400,y:-400})
    }
}


