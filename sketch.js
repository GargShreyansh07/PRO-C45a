var canvas;
var titleImage,scene,backgroundImage;
var bomb;
var PLAY = 1;
var END = 0;
var gameState = 1;
var score = 0;
var livesLeft = 3
var blastImage;
var knife,knifeImg;
var empty,oneCross,twoCross,threeCross;
var emptyImg,oneCrossImg,twoCrossImg,threeCrossImg;
var fruitGroup,fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8,fruit9,fruit10;


function preload() {
  backgroundImage = loadImage("assets/background.png")
  bomb = loadImage("assets/bomb.png")
  knifeImg = loadImage("assets/knife.png")
  titleImage = loadImage("assets/fruit_ninja.png")
  fruit1 = loadImage("assets/fruit1.png")
  fruit2 = loadImage("assets/fruit2.png")
  fruit3 = loadImage("assets/fruit3.png")
  fruit4 = loadImage("assets/fruit4.png")
  fruit5 = loadImage("assets/fruit5.png")
  fruit6 = loadImage("assets/fruit6.png")
  fruit7 = loadImage("assets/fruit7.png")
  fruit8 = loadImage("assets/fruit8.png")
  fruit9 = loadImage("assets/fruit9.png")
  fruit10 = loadImage("assets/fruit10.png");
  emptyImg = loadImage("assets/empty.png");
  oneCrossImg = loadImage("assets/oneCross.png");
  twoCrossImg = loadImage("assets/twoCross.png");
  threeCrossImg = loadImage("assets/threeCross.png")

}
 function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //scene = createSprite(0,0,800,800)
  //scene.addImage(backgroundImage)
  //scene.scale = 2

  knife = createSprite(40,200,20,20);
  knife.addImage(knifeImg)
  knife.scale = 0.5;

 

  // Groups
    fruitGroup=createGroup();
}
function draw() {
  background(backgroundImage);
  
  if(gameState === PLAY){

  
    knife.y=World.mouseY;
    knife.x=World.mouseX;

  }
  drawSprites();
}

