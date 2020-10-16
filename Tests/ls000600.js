function ClasseDati() {
  var Programma;
  var arElement = new Array(30);
  var arLimit = 0;

  // Metodi
  // -------------------
  this.setValues = setValues;
  this.getValues = getValues;
  this.Reset = Reset;
  this.getFunzione = getFunzione;

  /**
   * Resetto i valori degli attributi
   * Alias di eraseArray
   */
  function Reset() {
    ___eraseArray();
  }

  // === public method. Restituisce un array con i valori da passare
  function getValues() {
    var arUscita = new Array(arLimit);

    // Popolo array di uscita
    for (i = 0; i < arLimit; i++) {
      arUscita[i] = arElement[i];
    }

    return arUscita;
  }

  //console.log(getValues()) ???

  // === public method. Restituisce il nome del programma da eseguire
  function getFunzione() {
    return Programma;
  }

  // === public method. Riceve ed imposta l'elenco dei valori da passare
  function setValues(elencoValori) {
    // Pulisco l'array
    ___eraseArray();

    // spezzo array in ingresso per separare
    // programma da valori
    var elementi = elencoValori.split("^");

    // Programma
    Programma = elementi[0];
    var variabili = elementi[1].split("|");

    for (i = 0; i < variabili.length; i++) {
      // tutti i parametri verranno restituiti tra virgoletta singola
      arElement[i] = "'" + variabili[i] + "'";
    }

    // Imposto il numero di elementi
    arLimit = i;
  }

  // === private method. Pulisce l'array
  function ___eraseArray() {
    for (i = 0; i <= 30; i++) {
      arElement[i] = null;
    }
    arLimit = 0;
  }
}

function CloseMenu(div) {
  hideBox(div);
  iState = 0;
}

function DoAction(par, div) {
    console.log(par)
    var ar = par.getValues();
    console.log(ar)
    var parametri = ar.join(",");
    console.log(parametri);
  eval(par.getFunzione() + "(" + parametri + ");");
  //CloseMenu(div);
}


function DoCombine(prefix) {
  var comm;
  if (prefix == "comando_gra") {
    comm = document.getElementById(prefix + "1");
    comm.href = "javascript:DoAction(DomandeObj,'divgraduatorie');";
    comm.className = "";   
  }
}

var DomandeObj = new ClasseDati();
DomandeObj.Reset();


var element = DoCombine("comando_gra");


console.log(element);

//var f = DoAction(DomandeObj, "str");

//console.log(f);
