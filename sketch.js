var space,spaceImg;

var spaceship,spaceshipImg;

var astroid,astroidImg,astroidsGroup;

var gameState = "Play";

function preload(){
  
  spaceImg = loadImage("space.jpg");
  
  spaceshipImg = loadImage("spaceship.png")
  
  astroidImg = loadImage("astroid.png");

}

function setup() {
  createCanvas(500,500);
  
  space = createSprite(250,350);
   space.addImage(spaceImg);
  
  space.velocityY = 1;
  
  spaceship = createSprite(250,420);
   spaceship.addImage("spaceship",spaceshipImg);
  
  spaceship.scale = 0.1;
  
  astroidsGroup = new Group();
  
  spaceship.setCollider("circle",0,0,400);
  spaceship.debug = true
  
}

function draw() {
  background(0);
 
 if(gameState === "Play"){

  
  if(space.y>350){
    space.y = 300;
    
  }
   
  spawnAstroid(); 
    
  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x-5;
    
  }  
    
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x+5;
    
  }
   
  if(astroidsGroup.isTouching(spaceship)){
    gameState = "End";
    
  }
  
 }
    
  drawSprites();
  
   if(gameState === "End"){
   stroke("red");
   fill("red");
   textSize(50);
   text("GameOver",130,250);
   astroidsGroup.setVelocityYEach(0);
   space.velocityY = (0);
     
   }  
   
     
}


function spawnAstroid(){
  if(frameCount%30 === 0){
    astroid = createSprite(200,-25);
    
    astroid.addImage(astroidImg);
    
    astroid.x = Math.round(random(50,450));
    
    astroid.velocityY = 5;
    
    astroid.lifetime = 650;
    
    astroid.scale = 0.1

    astroidsGroup.add(astroid);
    
}
}