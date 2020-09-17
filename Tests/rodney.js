function IManejar() {
    this.doblarDerecha = function () {
        return "doblando a la derehca";
    };
    this.doblarIzquierda = function () {
        return "doblando a la izquierda";
    };
    this.frenar = function () {
        return "frenando";
    };
}

Function.prototype.implement = function() {
    for(var i = 0; i < arguments.length; i++) {
       // .. Check member's logic ..
    }
    return this;
}


class Vehiculo {

    constructor(modelo, precio) {
        this._modelo = modelo;
        this._precio = precio;
    }


    set precio(n) {
        this._precio = n;
    }

    get modelo() {
        return this._name;
    }

    get precio() {
        return this._name;
    }
    doblarDerecha() {
        return 'doblando a la derecha...';
    }
    doblarIzquierda() {
        return "doblando a la izquierda..."
    }
    frenar() {
        return "frenado"
    }

}

class Automovil extends Vehiculo {

    constructor(modelo, precio) {
        super(modelo, precio);
    }

    arrancar() {
        return 'encendido...';
    }
    apagar() {
        return 'apagado...';
    }

}
let a = 1;
let b='hi';
console.log(a+b);


