const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;




function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    paper = new Paper(200,100,20);
    rightBox=new Dustbin(700,540,19,88);
    middle= new Dustbin(620,580,180,14);
    leftBox=new Dustbin(530,543,19,88);
    
   
   ground= new Ground(600,height-100,1200,20)
  
    Engine.run(engine);
}


function draw() {
   background(0);
    
  
  paper.display();
  ground.display();
  leftBox.display();
  middle.display();
  rightBox.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.p, paper.p.position, {x : 55, y : -55});
	}
}
