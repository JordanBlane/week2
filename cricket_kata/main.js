/*

The scoring for the game will look like so: 
. = dot ball, no run scored  
1, 2, 3, 4, 6 = numbers of runs made off of the ball bowled 
W = wicket taken, the facing batsman is out and no run is made 


score 1 run by hitting the ball and running to other end of the pitch (crossing with partner) }
score 2 runs by hitting the ball and running to other end of the pitch and back (crossing twice with partner) }
score 3 runs by hitting the ball and running to other end of the pitch and back and back to other end again (crossing three times with partner) }
score 4 runs by hitting the ball to the boundary. Batsmen do not change ends. }
score 6 runs by hitting the ball over the boundary. Batsmen do not change ends.

11 in a team, 2 must be on field at all times
a batsman in cricket can bat as long as he doesn’t get out—and when he’s out, he’s out for good
Switching of batting and bowling ends after every over
*/

var fs = require('fs');
var game = fs.readFileSync("string.txt").toString();
let players = [1,2,3,4,5,6,7,8,9,10,11];
let score = [0,0,0,0,0,0,0,0,0,0,0];
let sum = 0;

//takes the first player in the array and removes it.
function swapPlayer(){
    players = players.reverse()
    let temp = players[players.length-1]
    players.pop()
    players = players.reverse()
    return temp
}

let player1 = swapPlayer()
let player2 = swapPlayer()

let current = 1;

arr = game.split('')

var count;

//checks the game array.
for(var i=0;i<arr.length;i++){
    if(arr[i].toLowerCase() == 'w' && players.length > 0){
        if(current == 1){
            if(arr[i-1].toLowerCase() == 'w'){
                score[player1 - 1] = '-'
            }
            player1 = swapPlayer()
        }else{
            if(arr[i -1].toLowerCase() == 'w'){
                score[player2 - 1] = '-'
            }
            player2 = swapPlayer()
        }
    }else if (arr[i] == '.'){

    }else if(arr[i] == Number(arr[i])){
        if(arr[i] % 2 !== 0){
            if (current == 1){
                current = 2
                score[player1 -1] += Number(arr[i])


            }else{
                current = 1
                score[player2 -1] += Number(arr[i])
            }
        }else{
            if (current == 1){
                score[player1 -1] += Number(arr[i])


            }else{
                score[player2 -1] += Number(arr[i])
            }
           
        }
        sum += Number(arr[i])
    }

    
}
var data = []
for(i=1;i<score.length;i++){
    data.push('player ' +i +"'s score is " +score[i] + ' ')
}
data.push([' the total is ', sum])
data = data.join(' ')
console.log(data)
fs.writeFile("scores.txt", data, (err)=>{
    if(err) console.log(err)
})