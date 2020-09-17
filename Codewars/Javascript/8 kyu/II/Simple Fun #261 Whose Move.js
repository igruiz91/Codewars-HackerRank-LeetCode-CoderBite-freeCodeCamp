function whoseMove(lastPlayer, win) {
    switch (lastPlayer) {
        case "black":
            return win==true ? "black" : "white"        
        case "white":
            return win==true ? "white" : "black"    
    }
}

function whoseMoveUp(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer== 'black' ? 'white' : 'black'
}

console.log(whoseMove("black",false));