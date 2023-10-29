var gameState
var database
var playerCount
var Car1, Car2
var allPlayers
var names=[]
var game, form, player
var leftW, rightW, topW, bottomW
var track1, track2, track3, track4
var Cars
var index=0

function preload(){
  blueCar=loadImage("Images/F1Blue.png")
  redCar=loadImage("Images/F1Red.png")
  grayCar=loadImage("Images/F1Gray.png")
  orangeCar=loadImage("Images/F1Orange.png")
}


function setup() {
  createCanvas(1500, 600);
  //player=createSprite(10,10,10,10)
  database=firebase.database()
  var databaseRef=database.ref("gameState")
  databaseRef.on("value",data=>{
    gameState=data.val();
  })
var playerCountRef=database.ref("playerCount")
    playerCountRef.on("value", data=>{
      playerCount=data.val();
    })
game=new Game()
game.start()
}


function draw() {
background(50);
track1.display();
track2.display();
track3.display();
track4.display();

//Gamestate
if (gameState===0){
  form.setFunction()
  form.setStyle()
 form.handleMousePressed()
  text(playerCount+"/2", 750, 400)
  if (playerCount===2){
    database.ref("/").update({
      gameState:1
    })
  }
    }
  if (gameState===1){
   game.play()

  }

text(mouseX+","+mouseY, 100,100)
//corners
stroke("gray");
fill("gray");
arc(250, 505, 130, 130, 90, 180);
rect(250, 440, 65, 65);
arc(250, 95, 130, 130, 180, 270);
rect(250, 95, 65, 65);
arc(1250, 95, 130, 130, 270, 0);
rect(1185, 95, 65, 65);
arc(1250, 505, 130, 130, 0, 90);
rect(1185, 440, 65, 65)
stroke(50)
fill(50)
arc(316, 439, 130, 130, 90, 180);
arc(316, 161, 130, 130, 180, 270);
arc(1184, 161, 130, 130, 270, 0);
arc(1184, 439, 130, 130, 0, 90);


  drawSprites();

}


