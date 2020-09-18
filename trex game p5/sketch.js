var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudgroup,cloudimage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimage=loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  cloudgroup=new Group();
}

function draw() {
  background("white");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnclouds();
  drawSprites();
}
function spawnclouds(){
 if(frameCount % 60===0){ 
  var cloud=createSprite(500,100.30,40);
  cloud.y=Math.round(random(50,150)); 
  cloud.addImage(cloudimage);
   cloud.scale=0.5;
   cloud.velocityX=-6;
   cloud.lifetime=100;
   cloud.depth=trex.depth;
   trex.depth=trex.depth+1;
   cloudgroup.add(cloud);
   
 } 
}