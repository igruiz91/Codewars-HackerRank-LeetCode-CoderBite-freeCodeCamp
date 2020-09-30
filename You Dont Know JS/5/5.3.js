const wait = msg =>{
    setTimeout(timer = ()=>{
        console.log(msg);
    },5000)
}

wait("Hello, closure!")