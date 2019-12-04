function bump(x){
    return x.split('n').length>16 ? 'Car Dead' : 'Woohoo!'
}

const bumpUp = x => x.match(/n/g).length>15 ? "Car Dead" : "Woohoo!"

console.log(bumpUp('_nnnnnn______nn__nn_nnn'));