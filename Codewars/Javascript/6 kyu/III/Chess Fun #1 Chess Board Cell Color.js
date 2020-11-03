function chessBoardCellColor(cell1, cell2) {
    const strConv = str => str.split('')[0].charCodeAt(0)-96+(str[1])*1
    return (strConv(cell1)+strConv(cell2))%2 == 0     
}

const chessBoardCellColorUp = (c1, c2) =>{
    const squareColor = str => str.charCodeAt(0)+str.charCodeAt(1) & 1
    console.log(squareColor(c1));
    return squareColor(c1) == squareColor(c2)
}

//console.log(chessBoardCellColor("A1","C3"));
console.log(chessBoardCellColorUp("A1","C3"));


//console.log(strConv('a1'));