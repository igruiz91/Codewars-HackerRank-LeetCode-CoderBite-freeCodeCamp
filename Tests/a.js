window.addEventListener('load', function(){

  //inputs de busqueda
  var inputCapitulo = document.getElementById("buscarPorCapitulo");
  var inputDescripcion = document.getElementById("buscarPorDescripcion");

  inputCapitulo.onkeyup =function(){
    filtrarCap(1);
  }
  inputDescripcion.onkeyup =function(){
    filtrarDesc(1);
  }

  function filtrarCap(col=0){
    var capitulo = (buscarPorCapitulo.value).toLowerCase().trim();        
    var filas = document.getElementById("tabla").getElementsByTagName("tbody")[0].rows;
    
    for(var i=0; i<filas.length; i++){
        var textoColumna = (filas[i].cells[col].innerText).toLowerCase();     
        (textoColumna.indexOf(capitulo) >=0) ? filas[i].className= 'mostrar' : filas[i].className='ocultar';           
    }
  }

  function filtrarDesc(){
    var descripcion = (buscarPorDescripcion.value).toLowerCase().trim();  
    var filas = document.getElementById("tabla").getElementsByTagName("tbody")[0].rows;
    
    for(var i=0; i<filas.length; i++){
        var textoFila = (filas[i].innerText).toLowerCase();
        (textoFila.indexOf(descripcion) >= 0) ? filas[i].className= 'mostrar' : filas[i].className='ocultar';             
    }
  }


});
  