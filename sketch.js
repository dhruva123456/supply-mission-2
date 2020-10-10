var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bgimg;
var packageBody,ground,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgimg = loadImage("war.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(20, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    packageSprite.visible = false;

	helicopterSprite=createSprite(20, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 4;

	wall3=createSprite(400,670,200,20);
	wall3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	 wall1 = createSprite(300,640,20,80);
	 wall1.shapeColor = color("blue");
	 wall2 = createSprite(500,640,20,80);
	 wall2.shapeColor = color("green");
	 wall3 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	 World.add(world, wall3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  if (helicopterSprite.x=== 400 && helicopterSprite.y===200){
	  helicopterSprite.velocityX = 0;
	  packageSprite.visible = true;
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	packageBody.velocityX = -5;
  }
}



