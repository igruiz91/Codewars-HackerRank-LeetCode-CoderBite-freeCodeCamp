function doneOrNot(board){
    for(let i=0; i<9; i++){
        let sum=0;
        for(let j=0; j<9; j++){
            if(board[i][j]==0) return 'Try again!';
            sum+=board[i][j]
        }
        if(sum!=45) return 'Try again!'
    }
    for(let i=0; i<9; i++){
        let sum=0;
        for(let j=0; j<9; j++){
            if(board[j][i]==0) return 'Try again!';
            sum+=board[j][i]
            console.log(board[j][i]);
        }
        if(sum!=45) return 'Try again!'
    }

    return 'Finished!';
}

function doneOrNotUp(board) {
    var setHorizontal = new Set(), setVertical = new Set(), set3x3 = new Set();
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++){
            setHorizontal.add(board[i][j]);
            setVertical.add(board[j][i]);
            console.log(i%3);
            set3x3.add(board[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)])
        }
        if(setHorizontal.size != 9 || setVertical.size !=9 || set3x3.size != 9) return "Try again!";
        setHorizontal.clear()
        setVertical.clear()
        set3x3.clear()
    }
    return 'Finished!'
}

let s1 = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 0, 3, 4, 9],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]]
let s2 = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]

console.log(doneOrNotUp(s2));