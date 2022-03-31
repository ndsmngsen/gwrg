
//variables
var canvas;
var database
var gameState;
var form
var player
var playerCount;
var allPlayers;
var background_image
var striker_image
var puck_image
var paddle_image;
var bkground
var puck
var puckY=100
//var bc1,bc2,bc3,bc4,bc5,bc6,bc7,bc8,bc9
//var wc1,wc2,wc3,wc4,wc5,wc6,wc7,wc8,wc9
//var topWall
//var bottomWall
//var leftWall
//var rightWall
var paddle1;
var paddle2;
var paddles = [];
//var turnMarker
//var winMarker
//var hole1,hole2,hole3,hole4;
//arrays
//var whiteCoins=[]
//var blackCoins=[]




function preload(){
  background_image=loadImage("table.png")
  paddle_image=loadImage("paddle.png")
  puck_image=loadImage("puck.png")
  //blackCoin_image=loadImage("blackCoin.png")
  //whiteCoin_image=loadImage("whiteCoin.png")
}



function setup() {
  canvas=createCanvas(200,400);


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw() 
{

//gameState
  if (playerCount === 2) {
    game.update(1);
    
  }

  if (gameState === 1) {
    game.play();
  }

  //if (gameState === 2) {
 //   game.end();
 // }

}


