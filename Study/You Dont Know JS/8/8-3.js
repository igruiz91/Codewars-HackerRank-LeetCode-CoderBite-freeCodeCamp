var obj={
    count: 0,
    cool: function coolFn() {
        if(this.count<1){
            setTimeout(() => {
                this.count++
                console.log("awwsome??");
            }, 100);
        }
    }
}

obj.cool()