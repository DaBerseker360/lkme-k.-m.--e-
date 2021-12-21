
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var sus
var top,left,right
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   ground=new Ground(width/2,height-10,width,10)
   top=new Ground(width/2,10,width,10)
left=new Ground(10,width/2,20,width)
right=new Ground(height-10,width/2,20,width)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  sus=Bodies.rectangle(22,22,22,22,{restitution:2})
  World.add(world,sus)
  rectMode(CENTER);
  ellipseMode(RADIUS);
 
  button1=createButton("right")
  button1.position(200,30)
  button1.mouseClicked(hforce)

  button2=createButton("up")
  button2.position(200,80)
  button2.mouseClicked(vforce)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  //top.show()
  left.show()
  right.show()
  ellipse(ball.position.x,ball.position.y,20);
  
  rect(sus.position.x,sus.position.y,22,22) 
 
}

function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0})
  
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1})
    
  }