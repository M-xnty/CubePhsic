const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;
var gameState=0;
var bg,bgImage,start,startImage;
var box1, box2, box3;
var box4, box5, box6;
var box7, box8, box9,box10;
var engine,world;
var ground,ground1,ground2;



function preload()
{
bgImage=loadImage("bgimage.jpeg")
triangleImage=loadImage("traingle.png")
unnamedImage=loadImage("unnamed.png")
slabImage=loadImage("yesbeans.jpeg")
startImage=loadImage("start.png")
}
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  start=createSprite(300,300,10,10);
  start.scale=0.1;

  box1=new Box(100,400,70,70)
  box2=new Box(100,200,70,70)
  box3=new Box(200,300,70,70)
  box4=new Box(200,500,70,70)
  box5=new Box(300,400,70,70)
  box6=new Box(300,200,70,70)
  box7=new Box(600,100,70,70)
  box8=new Box(600,200,70,70)
  box9=new Box(700,300,70,70)
  box10=new Box(700,200,70,70)
  ground=new Ground(100,700,600,20);
  ground1=new Ground(700,400,400,20);
  ground2=new Ground(100,300,400,20);
  

}

function draw() {
  Engine.update(engine)
  if(gameState===0) 
  {
    background("cyan");
    fill("black");
    textSize(40)
    text("Cube Physics",200,200);
    start.addImage("starting",startImage);
    if(mousePressedOver(start))
    {
      gameState=1;
      start.visible=false;
    }
  }
  
  if(gameState===1)
  {
    background("lavender");
  }
 
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ground.display();
  ground1.display();
  ground2.display();
}