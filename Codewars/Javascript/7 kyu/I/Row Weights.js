function rowWeights(arr){
    let team1 =0, team2=0;
    for(let i=0; i<arr.length; i++)
        (i%2==0) ? team1+=arr[i] : team2+=arr[i];
    return [team1, team2]
}

console.log(rowWeights([50,60,70,80]));