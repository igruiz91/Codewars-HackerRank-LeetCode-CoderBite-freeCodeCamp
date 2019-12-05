function countVegetables(string){
    string = string.match(/(cabbage|carrot|celery|cucumber|mushroom|onion|pepper|potato|tofu|turnip)/g, '').join(' ')
    let abc ={}, resp=[];
    string.split(' ').map(v => abc[v] ? abc[v]++ : abc[v]=1)
    return Object.entries(abc).map(a => [a[0],a[1]]=[a[1],a[0]]).sort((a,b)=> {
        if(b[0]!=a[0]) return b[0]-a[0]
        else{
            if(a[1]>b[1]) return -1
            else if(a[1]<b[1]) return 1
            return 0
        }
    })
}

function countVegetablesUp(str) {
    let tuples = [];
    let counts = str.match(/tofu|potato|cucumber|cabbage|turnip|pepper|onion|mushroom|celery|carrot/g).reduce((res, word) => {
        res[word] = (res[word] || 0 )+1
        return res;
    },{})
    for(let [key, value] of Object.entries(counts))
        tuples.push([value, key])
    return tuples.sort((a,b) => b[0]-a[0] || b[1].localeCompare(a[1]))
}

function countVegetablesUpgrade(string){
    let resp ={}
    string.match(/cabbage|carrot|celery|cucumber|mushroom|onion|pepper|potato|tofu|turnip/g, '').map(v => resp[v] ? resp[v]++ : resp[v]=1);
    return Object.entries(resp).map(a => [a[0],a[1]]=[a[1],a[0]]).sort((a,b)=> b[0]-a[0] || b[1].localeCompare(a[1]))
}



let str = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;



console.log(countVegetablesUpgrade(str));

