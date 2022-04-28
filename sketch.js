//TO CREATE A PHYSICS ENGINE --> ENGINE, WORLD, BODIES
const Engine = Matter.Engine //name spacing // Matter.Engine.create() --> Engine.create()
const World = Matter.World 
const Bodies = Matter.Bodies 
var engine 
var world
var ball 
var box 
var ground, groundOptions

function setup() {
  createCanvas(400,400);
 

  //To create a physics engine inside a variable called 'engine' --> Engine.create()
  engine = Engine.create()

  //to create a world for the engine inside a variable called 'world' --> engine.world
  world = engine.world

  //to create a body, --> Bodies.rectangle(x,y,w,h) / Bodies.circle(x,y,r) inside a variable
  ball = Bodies.circle(300,50,25)
  //console.log(ball.constraintImpulse.angle)
  //position of a physics engine body --> var.position.x
World.add(world,ball)

//to create a rectangular body for the ground and add it to the world
groundOptions = {isStatic:true}
ground = Bodies.rectangle(200,350,400,20,groundOptions)
World.add(world,ground)
}

function draw() {

    //update the physics engine
  Engine.update(engine)
  background(0);
// textSize(20)
// fill("yellow")
//   text("Hello", 180,200)
  

  fill("blue")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20) 


fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25) //ellipse(ball's x position, ball's y position, width, height)
  drawSprites();
}