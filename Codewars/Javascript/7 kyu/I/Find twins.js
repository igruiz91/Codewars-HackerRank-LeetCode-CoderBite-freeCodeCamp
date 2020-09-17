function elimination(arr){
    let repetidos = arr.filter((n,i,self)=> self.lastIndexOf(n)!=i)[0]
    return repetidos== undefined ? null : repetidos
}

console.log(elimination([2,7,34,1,22]));