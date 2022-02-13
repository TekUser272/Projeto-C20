
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var cubo;
var ball;
var ground;
var retangle;
var angle=60;
var poly;


function setup() {
  createCanvas(600,750);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  var ground_options = {
    isStatic: true
  };
  
  var cubo_options = {
    restitution: 3,
    frictionAir: 0.02
  }

  var retangle_options = {
    restitution: 0.01,
    frictionAir: 1
  }

  ground = Bodies.rectangle(300,750,800,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(80,10,20,ball_options);
  World.add(world,ball);
  
  cubo = Bodies.rectangle(300,10,40,40,cubo_options);
  World.add(world,cubo)
  
  retangle = Bodies.rectangle(500,10,100,50,retangle_options);
  World.add(world,retangle)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw(){

  background(51);

  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,40);
  rect(ground.position.x,ground.position.y,800,20);
  rect(cubo.position.x,cubo.position.y,50,50);
  rect(retangle.position.x,retangle.position.y,100,50)
}