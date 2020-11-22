var paper1, rect1, rect2, rect3, ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper (100,610,70,70, {isStatic:true});
	rect1 = new trash (width/2+200, 640, 200, 20, {isStatic:true});
	rect2 = new trash (700, 605, 20, 100, {isStatic:true});
	rect3 = new trash (500, 605, 20, 100, {isStatic:true});
	ground1 = new Ground (width/2, 650, width, 10, {isStatic:true});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ground1.display();
  keyPressed();
  //drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
   }




