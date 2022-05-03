var bolinhadepapel;
var configbola;
var chaozinmaroto;
var configchaozin;
var paredinha1;
var paredinha2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	configbola = {isStatic: false, restitution: 0.3, friction: 0, density: 1.2};
	configchaozin = {isStatic: true}

	engine = Engine.create();
	world = engine.world;

	bolinhadepapel = Bodies.circle(50, 50, 50, configbola);
	chaozinmaroto = Bodies.rectangle(width/2, 670, width, 20, configchaozin);
	paredinha1 = Bodies.rectangle(1100, 600, 20, 120, configchaozin);
	paredinha2 = Bodies.rectangle(1350, 600, 20, 120, configchaozin);

	World.add(world, bolinhadepapel);
	World.add(world, chaozinmaroto);
	World.add(world, paredinha1);
	World.add(world, paredinha2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

    rect(paredinha1.position.x, paredinha1.position.y, 20, 120);
	rect(paredinha2.position.x, paredinha2.position.y, 20, 120);
	rect(chaozinmaroto.position.x, chaozinmaroto.position.y, width, 20);
	ellipse(bolinhadepapel.position.x, bolinhadepapel.position.y, 50);

	

}

	function keyPressed(){
		if (keyCode == 32){
			Matter.Body.applyForce(bolinhadepapel, bolinhadepapel.position, {x: 100, y: -185});
		}
	}

