function whoIsWinner(piecesPositionList){
    let matrix = [[],[],[],[],[],[],[]]
    const separacion = piecesPositionList.map(x => {
        x=x.split('_')
        let col = x[0].charCodeAt(0)-65
        let player = x[1]
        return [col, player]
    })
    for(let i=0; i<separacion.length; i++){
        matrix[separacion[i][0]].push(separacion[i][1][0])
    }
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            for (let k = 0; k < matrix.length; k+=2) {

                
            }
        }
        //if (reds>=4) return 'Red'
        //else if (yellows>=4) return 'Yellow'
    }

    return matrix
}

let piecesPositionList2 =[
"C_Yellow",
"E_Red",
"G_Yellow",
"B_Red",
"D_Yellow",
"B_Red",
"B_Yellow",
"G_Red",
"C_Yellow",
"C_Red",
"D_Yellow",
"F_Red",
"E_Yellow",
"A_Red",
"A_Yellow",
"G_Red",
"A_Yellow",
"F_Red",
"F_Yellow",
"D_Red",
"B_Yellow",
"E_Red",
"D_Yellow",
"A_Red",
"G_Yellow",
"D_Red",
"D_Yellow",
"C_Red"
]

let piecesPositionList1 = [
"A_Red",
"B_Yellow",
"A_Red",
"B_Yellow",
"A_Red",
"B_Yellow",
"G_Red",
"B_Yellow"
]

console.log(whoIsWinner(piecesPositionList2));