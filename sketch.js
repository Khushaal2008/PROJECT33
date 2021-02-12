const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

var plImg
function preload() {
  plImg = loadImage("PL.jpg")
}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
 
}

function draw(){
    background(plImg);
    textSize(25)
    fill("green")
    text("Score : "+score,20,30);
    text("500",20,500)
    text("500",100,500)
    text("500",180,500)
    text("500",260,500)
    text("100",340,500)
    text("100",420,500)
    text("100",500,500)
    text("200",580,500)
    text("200",660,500)
    text("200",740,500)
  console.log(mouseX)
  console.log(mouseY)
    Engine.update(engine);
   ground.display();

 /* if(gameState==="end"){
    textSize(30)
    text("gameOver",350,400)
  }*/

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }



   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  /*if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }*/

// for (var j = 0; j < particles.length; j++) {
  
    //particles[j].display();
 // }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  /*if(particle!=null){
      particle.display();
      if(particle.body.position.y>760){
          if(particle.body.position.x < 300){
              score = score+500;
              
              particle = null
          }
      }
  }
   else if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
        if(particle.body.position.x < 553){
            score = score+100;
            particle = null
        }
    }
}

else if(particle!=null){
  particle.display();
  if(particle.body.position.y>760){
      if(particle.body.position.x < 795){
          score = score+200;
          particle = null
      }
  }
}*/



if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }



       
   //drawSprites();
            }

function mousePressed(){
   /* if(gameState!=="end"){
particle = new Particle(mouseX,10,10,10)

    }
    if(count>=5)gameState = "end"*/

    if(gameState!=="end")
    {
        count++;
       particle=new Particle(mouseX, 10, 20, 20); 
    }   
}






