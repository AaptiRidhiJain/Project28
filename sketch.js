
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var boyImage,boy;
var mango1,mango2,mango3,mango4,mango5;
var ground;
var slingshot;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(650,300,400,400);
	stone = new Stone(200,200,20,20);
	mango1 = new Mango(450,300,30);
	mango2 = new Mango(350,400,30);
	mango3 = new Mango(450,450,30);
	mango4 = new Mango(300,400,30);
	mango5 = new Mango(200,300,30);
	ground = new Ground(650,580,1300,20);
	//slingshot = new SlingShot(this.stone,{x: 100, y:200});

	boy = createSprite(100,100,5,5);
	boy.addImage(boyImage);
	boy.scale = 0.1;
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(this.stone,{x: mouseX, y: mouseY});
  }
  
function mouseReleased(){
	slingshot.fly();
  }

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(this.stone,{x:400,y:400});
	  slingshot.attach(this.stone);
	}
  }

function detectCollision(lstone,lmango){
var mangoBodyPosition = lmango.body.position;
var stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance <= lmango.r + lstone.r){
	Matter.body.setStatic(lmango.body,false);
}
}
