// try{throw 2}catch(a){
//     console.log( a ); // 2
// }

{
    let a = 2;
    console.log( a ); // 2
}

console.log(a); // ReferenceError

{
    try {
        throw undefined;
    } catch (a) {
        a = 2;
        console.log( a );
    }
}

console.log( a );