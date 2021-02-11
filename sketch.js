var canvas;
var music;
var rect1;
var rect2;
var rect3; 
var rect4;
var square;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   

    //create 4 different surfaces



    //create box sprite and give velocity
    rect1 = createSprite(300,200,100,40);
    rect1.velocityX=0;
    rect1.velocityY=-5;
    rect2.velocityX=0;
    rect2.velocityY=-5;
    rect3.velocityX=0;s

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
