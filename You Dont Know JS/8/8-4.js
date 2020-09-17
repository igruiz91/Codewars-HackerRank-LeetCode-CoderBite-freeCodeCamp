var obj={
    count:0,
    cool: function coolFn() {
        if(this.count<1){
            setTimeout(function timer() {
                this.count++
                console.log("more awsome?");
            }.bind(this), 1000)
        }
    }
}

obj.cool()