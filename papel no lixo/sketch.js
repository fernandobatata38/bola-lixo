
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola;
var chao;
var direita;
var esquerda;
function preload()
{
	 bola_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	 }
}

function setup() {
	createCanvas(1500, 700);

	
	engine = Engine.create();
	world = engine.world;
	chao=new Ground(width/2,700,width,5);
	direita=new Ground(900,650,20,120);
	esquerda=new Ground(1100,650,20,120);
	//Create the Bodies Here.
	bola=Bodies.circle(400, 50, 10, bola_options);
	World.add(world,bola);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  chao.display();
  esquerda.display();
  direita.display();
  ellipse(bola.position.x,bola.position.y,10);
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bola,{x:0,y:0},{x:5,y:-1});

	}
}

