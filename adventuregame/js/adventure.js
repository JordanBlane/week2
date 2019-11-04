function secret(){
    alert('answer 1. up \nanswer 2. any 21 letters or numbers')
}

function game(){

    function a(){
        a = prompt('Left or Right')
        if(a.toLowerCase() == 'left'){
            alert('You die')
        }else if(a.toLowerCase() == 'right'){
            alert('you die')
        }else if(a.toLowerCase() == 'up'){
            alert('next question')
            b = prompt('jhd371he 21')
            if(b === 7){
                alert('you loose')
            }else if(b === 0){
                alert('you loose')
            }else if (b.length > 20){
                alert('you win')
            }else{
                alert('you loose')
            }
        }else{
            alert('not an answer')
        }
    }
    a()
}
