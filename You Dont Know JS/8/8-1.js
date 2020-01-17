var obj ={
    id: "awsome",
    cool: function coolFn() {
        console.log(this.id);
    }
}

var id = "not awesome"

obj.cool()

setTimeout(obj.cool, 100)