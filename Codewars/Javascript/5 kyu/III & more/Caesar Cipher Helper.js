var CaesarCipher = function (shift) {
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.encode = (str) => {
        return str.toUpperCase().split('').map(c => {
            let p = abc.indexOf(c)
            return (p == -1) ? c : abc[p+shift]
        }).join('')
    }
    this.decode = (str) => {
        return str.toUpperCase().split('').map(c =>{
            let p= abc.lastIndexOf(c)
            return p == -1 ? c : abc[p-shift+1]
        }).join('')
    }
};

let test = new CaesarCipher(5)

console.log(test.encode("Codewars"));
//HTIJBFWX
//HTIJBFXY
//IVJKCGYZ