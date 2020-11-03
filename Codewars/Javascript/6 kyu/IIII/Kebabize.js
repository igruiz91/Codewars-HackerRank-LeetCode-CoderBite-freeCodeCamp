function kebabize(str) {
    console.log(str)
        str=str.replace(/\d/g,'');
        let resp = '';
        for(let i=1; i<str.length; i++){
            if(str[i]== str[i].toUpperCase()) resp+='-'+str[i]
            else resp+=str[i]
        }
    return (str[0]+resp).toLowerCase()
}

console.log(kebabize('camelsHaveThreeHumps'));