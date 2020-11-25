function kingIsInCheck (chessboard) {
    
    return false ; // do your magic :)
}

const searchKing = chessboard =>{
    for(let i=0; i<=8; i++)
        if(chessboard[i].includes('♔')) return[i, chessboard[i].indexOf('♔')]
}
const checkMate = (piece, piecePosition, kingPosition) => {
    switch (piece) {
        case '♛':
            for(let i= )
            break;
        case '♝':
            break;
        case '♞':
            break;
        case '♜':
            break;
        case '♟':
            break;
        default:
            break;
    }
}


let chessboard=[
[' ',' ',' ',' ',' ',' ',' ','♝'],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
['♔',' ',' ',' ',' ',' ',' ',' ']
];

console.log(searchKing(chessboard));
//console.log(kingIsInCheck(chessboard));