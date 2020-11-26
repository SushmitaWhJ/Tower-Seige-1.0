const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, base, world;
var block8,block9,block10,block11,block12;
var slingshot;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 base = new Ground (420, 261, 210, 10);
 //level1
 block1 = new Block(330,235,30,40);
 block2 = new Block(360,235,30,40);
 block3 = new Block(390,235,30,40);
 block4 = new Block(420,235,30,40);
 block5 = new Block(450,235,30,40);
block6 = new Block(480,235,30,40);
block7 = new Block(510,235,30,40);
//level2
block8 = new Block(360,195,30,40); 
block9 = new Block(390,195,30,40); 
block10 = new Block(420,195,30,40); 
block11 = new Block(450,195,30,40);
block12 = new Block(480,195,30,40); 
//level3
block13 = new Block(390,155,30,40);
block14 = new Block(420,155,30,40);
block15 = new Block(450,155,30,40);
//level4
block16 = new Block(420,115,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
slingshot = new SlingShot(this.polygon,{x:10,y:200})
}

function draw() {
  background(0,0,0);
    
  base.display();
  fill ("aqua")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("Purple")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("indigo")
  block13.display(); 
  block14.display(); 
  block15.display(); 
  fill("darkblue")
  block16.display();
  fill("red");
  slingshot.display();
  drawSprites();
}