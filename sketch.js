var gameState, end, left1_img, left2_img, left3_img, right1_img, right2_img, right3_img;
var player1, edges, p1, p2;

function preload(){
 left1_img = loadImage("../sprites/bLeft1.png");
 right1_img = loadImage("../sprites/bRight1.png");
 left2_img = loadImage("../sprites/bLeft2.png");
 right2_img = loadImage("../sprites/bRight2.png");
 left3_img = loadImage("../sprites/bLeft3.png");
 right3_img = loadImage("../sprites/bRight3.png");
 food_img = loadImage("../sprites/food.png");
sound1 = loadSound("../sprites/kidcheer.mp3")
}


function setup() {
  createCanvas(800,600);  //(w,l)
 // createSprite(400, 200, 50, 50);

  //creating player....
 player1 = createSprite(27,512,10,10);
player1.addImage(right1_img);
player1.scale = 0.10;
//player1.velocityX = 0;
//player1.velocityY = 0;
player1.setCollider("rectangle",0,0,280,380);
player1.debug = true;

//paddles
p1 = new Obs(30, 500, 20, 100)






cake = createSprite(750,50,10,10);
cake.addImage(food_img);
cake.scale = 0.04;
cake.debug = true;
}

function draw() {
  background(0);
 //createEdgeSprites(); 
 edges=createEdgeSprites();
   player1.bounceOff(edges[0]); 
   player1.bounceOff(edges[1]);
  player1.bounceOff(edges[2]);
    player1.bounceOff(edges[3]);
   // player1.bounceOff(edges[4]);

 //player1.bounceOff(edges);

if(keyDown("right")){
  player1.x += 4;
  player1.addImage(right1_img);
}
   
if(keyDown("left")){
  player1.x -= 4;
  player1.addImage(left1_img);
}

if(keyDown("up")){
  player1.y -= 4;
  player1.addImage(right1_img);
}

if(keyDown("down")){
  player1.y += 4;
  player1.addImage(left1_img);
}

if(player1.isTouching(cake)){
  gameState=end;
  sound1.play();
//playSound("http://soundbible.com/grab.php?id=480&type=mp3",false);
  text("Well Done!!", 350,300);
  text("PRESS 'p' to start next level",335,330);
}

if(keyDown("p")){

  
}
p1.display();
  drawSprites();
}