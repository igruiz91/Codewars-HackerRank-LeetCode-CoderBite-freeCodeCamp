// for(var i=1; i<=5; i++){
//     (function (){
//         var j=i;
//         setTimeout(timer =()=>{
//             console.log(j);
//         },j*1000);
//     })();
// }

// for(var k=1; k<=3; k++){
//     (function(l){
//         setTimeout(t =()=>{
//             console.log(l);
//         },l*1000)
//     })(k)
// }

for (let i = 1; i <6; i++) {
    setTimeout(timer = ()=>{
        console.log(i);
    },i*1000)
}