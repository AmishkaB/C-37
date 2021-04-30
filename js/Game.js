class Game{
    constructor(){


 }
 
 getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on('value',function(data){//data=>{}
        gameState=data.val();
        console.log(gameState)
    })
 }

 update(state){
    database.ref('/').update({
        'gameState':state
    })
 }

 start(){
    if(gameState===0){
        player=new Player();
        player.getCount();
        console.log(playerCount)
        form=new Form();
        form.display();

    }
 }
 
 play(){
    form.hide()
    textSize(30)
    text('Game Start', 120,100);

    Player.getPlayerInfo();
    /*allPlayers
        player1:{distance: 0, name:"a"}
        player2:{distance: 0, name:"b"}
        player3:{distance: 0, name:"c"}
        player4:{distance: 0, name:"d"}*/

    if(allPlayers !== undefined){ /*!= = not equal to*/
        var display_position=130;
        for(var plr in allPlayers){ //plr => player1, player2, player3, player4

            textSize(15)
            text(allPlayers[plr].name + ': ' + allPlayers[plr].distance,120,display_position)
            display_position += 20; //display_position = display_position + 20
        } 
    }
        

}
}
