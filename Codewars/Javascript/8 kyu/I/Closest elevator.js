function elevator(left, right, call){
    if(call == right) return 'right';
    else if(call == left) return 'left'
    else{
        if(Math.abs(call-right)<= Math.abs(call-right)) return 'right'
        else return 'left'
    }
}

const elevatorUp = (l,r,c) => Math.abs(c-l)<Math.abs(c-r) ? 'right' : 'left'

console.log(elevator(0,1,1));