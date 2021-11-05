const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld;
var platform ,ground ,wall;
var box1, box2, box3, box4 ;
var box5 ,box6, box7;
var monster1, monster2, monster3 ,monster4 ,monster5 ,monster6;
var angel;
var slingshot;
var score = 0;
var countMonsters =6;


function preload()
{

}

function setup()
{
  createCanvas(1200,620);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  platform = new Ground(150, 500,300,230);
  ground = new Ground(600 ,620, 1200, 10);
  wall = new Ground(1190, 310,  5, 620);

  box1 = new Verticalbox(1100, 320,60 ,200);
  box2 = new Verticalbox(950, 320,60 ,400);
  box3 = new Verticalbox(800, 320,60 ,400);
  box4 = new Verticalbox(650, 320,60 ,200);
  box5 = new Horizontalbox(1100, 50, 190, 30);
  box6 = new Horizontalbox(650, 50, 190, 30);
  box7 = new Horizontalbox(875, 30, 300, 30);

  


  monster1 = new Badmonster(1025, 100 ,70,70);
  monster2 = new Badmonster(875, 100 ,70,70);
  monster3 = new Badmonster(725, 100 ,70,70);
  monster4 = new Badmonster(650, 10 ,70,70);
  monster5 = new Badmonster( 875  ,5,70,70);
  monster6 = new Badmonster(1100, 10 ,70,70);

  angel = new Goodmonster(100,100,70,70);
  
  slingshot = new Slingshot(angel.body, {x:215,y:170});





}

function draw()
{
  background("Black");
  textSize(20);
  text("Score:" + score,50,50 );

if(countMonsters === 0)
{
  textSize(40);
  text("Good Job",600,150 );
  textSize(30);
  text("You Scored:" + score ,580 ,190 );
}

  Engine.update(myEngine);
  platform.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  monster1.display();
  monster2.display();
  monster3.display();
  monster4.display();
  monster5.display();
  monster6.display();
  box5.display();
  box6.display();
  box7.display();
  angel.display();
  slingshot.display();




  
}

function mouseDragged()
{
  if(slingshot.sling.bodyA===angel.body)
  {
    Matter.Body.setPosition(angel.body,{x: mouseX, y: mouseY})

  }
 
}

function mouseReleased()
{
  
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(angel.body,{x: 100 ,y:100});

    slingshot.attach(angel.body);

  }
}