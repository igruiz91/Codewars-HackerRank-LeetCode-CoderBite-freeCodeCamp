function parseMolecule(formula) {
    let form={}
    for (let i=0, len=formula.length; i<len;i++){
        if(formula[i].toUpperCase()== formula[i]){
            let element=formula[i]
            if(formula[i+1].toLowerCase()== formula[i+1]){
                element+=formula[i+1]
            }
            else if(formula[i+1] == '[' || formula[i+1] == '('){
                form[element] ? form[element]++ : form[element]=1
            }
        
        }
    }
}

let a = 'H2O'
let b = 'K4[ON(SO3)2]2'

console.log(parseMolecule(a));