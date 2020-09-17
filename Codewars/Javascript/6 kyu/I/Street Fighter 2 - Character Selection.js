function streetFighterSelection(fighters, position, moves){
    let resp = []
    for(let i=0; i<moves.length; i++){
        console.log(moves[i]);
        switch (moves[i]) {      
            case 'up':
                if(position[0]==0) resp.push(fighters[position[0]][position[1]]);
                else {
                    position[0]--;
                    resp.push(fighters[position[0]][position[1]])
                }
                break;
            case 'down':
                if(position[0]== fighters.length-1) resp.push(fighters[position[0]][position[1]]);
                    else {
                        position[0]++
                        resp.push(fighters[position[0]][position[1]])
                    }
                    break
            case 'left':
                if(position[1]==0) {
                    position[1]=fighters[0].length-1;
                    resp.push(fighters[position[0]][position[1]])
                }
                else{ 
                    position[1]--
                    resp.push(fighters[position[0]][position[1]])
                }
                break
            case 'right':
                if(position[1] == fighters[0].length-1){ 
                    position[1]=0;
                    resp.push(fighters[position[0]][position[1]])}
                else {
                    position[1]++
                    resp.push(fighters[position[0]][position[1]])
                }
        }
        console.log(position)
    }
  
    return resp
}
fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ['up', 'left', 'right', 'left', 'left'];

console.log(streetFighterSelection(fighters, [0,0] ,moves));

//['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']