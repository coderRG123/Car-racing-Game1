class Form{
    constructor(){
        this.input=createInput("")
        this.button=createButton("Start")
        this.greeting=createElement("h2")
    }
    setFunction(){
        this.input.position(660, 300)
        this.button.position(700, 345)
        this.greeting.position(550, 300)
    }
    setStyle(){
        this.button.class("button")
        this.greeting.class("greeting")
    }
    handleMousePressed(){
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            var name=this.input.value()
            var message=`Hello ${name}, wait for another player to join.`
            this.greeting.html(message)
            playerCount+=1
            player.updateCount(playerCount)
            player.index=playerCount
            player.name=name
            player.addPlayer()
            player.updated()
        })
    }
  
}