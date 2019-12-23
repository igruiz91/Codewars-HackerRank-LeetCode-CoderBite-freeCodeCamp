function mazeRunner(maze, directions) {
    const searchStart=maze=>{
        for(var i=0, pos=[]; maze.length; i++)
            if(maze[i].includes(2)) {
                pos.push(i)
                pos.push(maze[i].indexOf(2))
                break
            }
        return pos
    }
    let pos = searchStart(maze);
    try {
        for(let j=0; j<directions.length; j++){
            if(directions[j] == 'N'){
                pos[0]--;
                if(maze[pos[0]][pos[1]]==0) continue;
                if(maze[pos[0]][pos[1]]==1) return 'Dead'
                if(maze[pos[0]][pos[1]]==3) return 'Finish'
            }
            else if(directions[j] == 'S'){
                pos[0]++
                if(maze[pos[0]][pos[1]]==0) continue;
                if(maze[pos[0]][pos[1]]==1) return 'Dead'
                if(maze[pos[0]][pos[1]]==3) return 'Finish'
            } else if(directions[j] == 'E'){
                pos[1]++;
                if(maze[pos[0]][pos[1]]==0) continue;
                if(maze[pos[0]][pos[1]]==1) return 'Dead'
                if(maze[pos[0]][pos[1]]==3) return 'Finish'
            }else if(directions[j] == 'W'){
                pos[1]--;
                if(maze[pos[0]][pos[1]]==0) continue;
                if(maze[pos[0]][pos[1]]==1) return 'Dead'
                if(maze[pos[0]][pos[1]]==3) return 'Finish'
            }    
        }
    } catch (error) {   
       return 'Dead' 
    }
    return (pos[0]>maze.length || pos[0]<0) ? 'Dead' : (pos[1]>maze[0].length || pos[1]<0) ? 'Dead' : 'Lost'
}

const mazeRunnerUp = (maze, directions) =>{
    var size=maze.length,i=-1,j=-1,di={N:-1,S:1,E:0,W:0},dj={W:-1,E:1,N:0,S:0}    
    while(!maze[++i].includes(2));
    while(maze[i][j++]!=2);
    for(var s of directions){
        i+=di[s], j+=dj[s]
        if(i<0||j<0 || i>=size || j>=size||maze[i][j]==1) return 'Dead'
        if(maze[i][j]==3) return 'Finish'
    }
    return 'Lost'
}


var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
var maze2=[ [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
[ 1, 3, 1, 0, 1, 0, 0, 0, 0, 1 ],
[ 1, 0, 1, 0, 0, 0, 1, 1, 0, 1 ],
[ 1, 0, 1, 1, 1, 1, 1, 0, 0, 1 ],
[ 1, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 0, 1, 0, 1, 0, 1, 0, 0, 1 ],
[ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0 ],
[ 1, 0, 1, 0, 1, 0, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 0, 1, 1, 1, 1, 2, 1 ] ]

var direction = [ 'N','N','N','W','W','W','N','N','W','W','S','S','S','S','S','S' ]

console.log(mazeRunner(maze2, direction));
console.log(mazeRunnerUp(maze2, direction));