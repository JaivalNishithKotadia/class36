var database;
var canvas,backgroundImage;
var playerCount;
var gameState=0;
var form;
var game;
var player;
function preload(){

}
function setup(){
  canvas = createCanvas(400,400);
  database =firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  
}