class player {
    constructor(){

        this.index = null;
        this.name = null;
        this.positions = null;
        this.velocities = null;
        this.mousy = null;
        this.direction = null;
        this.firingState = null;
        this.health = null;
        this.kills = null;

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){

        database.ref("/").update({
            playerCount: count
        });

    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            index:this.index,
            positions:this.positions,
            velocities:this.velocities,
            mousy:this.mousy,
            direction:this.direction,
            firingState:this.firingState,
            health:this.health,
            kills:this.kills

        });
    }

    static getPlayerInfo(){

        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
}