
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var g1;
var engine, world;
var plinkos=[];
var divisions=[];
var particles=[];
var divisionHeight=300;
function preload()
{
	
}

function setup() {

	createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
  g1=new Ground(240,790,480,10);
  

  for (var j=40; j<=width; j=j+50 )
	{
    plinkos.push(new Plinko(j,75));
  }

  for (var j=15; j<=width-10; j=j+50 )
	{
    plinkos.push(new Plinko(j,150));
  }
 
  for (var j=40; j<=width; j=j+50 )
	{
    plinkos.push(new Plinko(j,225));
  }

  for (var j=15; j<=width-10; j=j+50 )
	{
    plinkos.push(new Plinko(j,300));
  }
  

  for(var k=0; k<=width; k=k+80 ){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  
}


function draw() {
  Engine.update(engine);
  background(0);
  g1.display();
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
      }
    

  for (var k= 0; k<plinkos.length; k++){
    plinkos[k].display();
  }

  for(var l=0; l<divisions.length; l++){
divisions[l].display();    
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();    
      }
    

}
