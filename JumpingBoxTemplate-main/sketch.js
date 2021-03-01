var canvas;
var music;
var ball;
var b1 , b2 , b3 , b4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   ball = createSprite((random(20,700)),(random(20,700)),30,30);
   ball.shapeColor = "white";
   ball.velocityY = 5,
   ball.velocityX = -6;

   b1 = createSprite(695,575,200,50);
   b1.shapeColor = "green";
   
   b2 = createSprite(465,575,200,50);
   b2.shapeColor = "magenta";

   b3 = createSprite(235,575,200,50);
   b3.shapeColor = "orange";
    
   b4 = createSprite(15,575,200,50);
   b4.shapeColor = "red";

}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if(b1.isTouching(ball) && ball.bounceOff(b1)){
        ball.shapeColor = "green";
    }

   if(b2.isTouching(ball) && ball.bounceOff(b2)){
        ball.shapeColor = "magenta";
        music.play();
   }

   if(b3.isTouching(ball) && ball.bounceOff(b3)){
       ball.shapeColor = "orange";
   }

   if(b4.isTouching(ball) && ball.bounceOff(b4)){
       ball.shapeColor = "white";
       ball.velocityX = 0;
       ball.velocityY = 0;
       music.stop();
   }
    drawSprites();
}
