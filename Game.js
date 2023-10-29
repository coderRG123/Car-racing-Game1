class Game{
    constructor(){
      this.reset=createButton("RESET")
    }
    start(){    
 form=new Form()
 player=new Player()
this.reset.position(100,550)
  //outerWalls
  leftW=createSprite(5, 300, 10, 600);
  leftW.shapeColor="black"
  topW=createSprite(750, 5, 1500, 10);
  topW.shapeColor="black"
  bottomW=createSprite(750, 595, 1500, 10);
  bottomW.shapeColor="black"
  rightW=createSprite(1495, 300, 10, 600);
  rightW.shapeColor="black"

  //Race Track
  track1=new Track(250, 505, 1000, 65);
  track2=new Track(185, 95, 65, 410);
  track3=new Track(250, 30, 1000, 65);
  track4=new Track(1250, 95, 65, 410);
    }

    play(){
        this.handleReset()
        form.greeting.hide()
        form.input.hide()
        form.button.hide()
        //Cars
        Car1=createSprite(600,77.5,10,10)
        Car1.addImage(blueCar)
        Car1.scale=-0.09
        Car2=createSprite(650, 47.5, 10, 10)
        Car2.addImage(redCar)
        Car2.scale=-0.09
        Cars=[Car1, Car2] 
        Player.getPlayersInfo()
        this.handlePlayerControls()
       for (var p in allPlayers){
          index+=1
          names.push(allPlayers[p].name)
          var x=allPlayers[p].positionX
          var y=allPlayers[p].positionY
          //Cars[index-1].position.x=x
          //Cars[index-1].position.y=y
          
          //cheking the cars index with the active index
         if (index===player.index){
          
         }
       }

       fill("red")
       stroke("red")
        text(names[0], Car1.x, Car1.y+50)
        text(names[1], Car2.x, Car2.y+50)
    }


    handleReset(){
      this.reset.mousePressed(()=>{
        database.ref("/").set({
          gameState:0,
          playerCount:0,
          players:{}
        })
        window.location.reload()
      })
    }
    handlePlayerControls(){
      console.log("bye")
      if (keyIsDown(LEFT_ARROW)){
        database.ref("players/player1").update({
          positionY:firebase.database().ServerValue.increment(1),
        })
      }
      }
    }
  