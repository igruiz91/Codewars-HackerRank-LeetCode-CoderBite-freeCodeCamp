const distributeEvenlyTry = (array) => {
    for(let i=0, p=1; i<array.length; i++){
        if(array[i]== array[p]){
            i++;
            p++
            continue
        }
        else{
            p++
            if(array[i]==array[p]){
                let aux = array[i+1]
                array[i+1]=array[p]
                array[p]=aux
                i++
                p=i+1
                continue  
            }          
        }
        p++
    }
    return array
};


function distributeEvenly(arr){
    let elementos = [...new Set(arr)];
    let arrCantElementos = elementos.map((e,i )=> arr.filter(a => a== elementos[i]))
    return arrCantElementos.map((items,i) => arrCantElementos.map(e => e[i])).reduce((a,b) => a.concat(b)).filter(x => x)
}


console.log(distributeEvenly(['one', 'two', 'four', 'two', 'three', 'three', 'four']));
