function busTimer(time) {
    let mins =0;
    time=time.split(':').map(n => n*1)
    if(time[0]<6){
        if(time[0]==5 && time[1]>55) return Math.abs(time[1]-60)+10;
        mins=Math.abs(time[0]-6)*60-time[1]-5
    }else{
        if(time[1]%15==0) return 10
        while(time[1]%15!=0){
            mins++
            time[1]=time[1]+1
        }
        mins-=5
    }
    return mins
}

console.log(busTimer('6:11'));



