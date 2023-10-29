class Player{
    constructor(){
        this.name=null
        this.index=null
        this.positionX=0
        this.positionY=0
    }
    addPlayer(){
        var PlayerRef=database.ref("players/player"+this.index).set({
            name:this.name,
            index:this.index,
            positionX:this.positionX,
            positionY:this.positionY,
        })
        if (this.index===1){
            this.positionX=600
            this.positionY=77.5
        }
        if (this.index===2){
            this.positionX=650
            this.positionY=47.5
        }
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    static getPlayersInfo(){
        database.ref("players").on("value", data=>{
            allPlayers=data.val()
            
        })
        //console.log(allPlayers)
    }
    updated(){
        database.ref("players/player"+this.index).update({
            positionX:this.positionX,
            positionY:this.positionY
        })
    }
}