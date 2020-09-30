function selectDeAnnos(){
    let annos = [];
    cargarAnnosArreglo(annos);
    cargarAnnosSelect(annos);   
}

//llena el arreglo con los annos 
function cargarAnnosArreglo(arreglo){
    const annoActual = new Date();

    for(var i=1990; i < annoActual.getFullYear()+1; i++){
        arreglo.unshift(i);
    }
}

// pone los annos de un arreglo en el select annos
function cargarAnnosSelect(arreglo){
    var elemento = document.getElementById("annos")
    arreglo.forEach(element => {
        elemento.innerHTML += `<option value="${[element]}">${element}</option>`
    });
}

//redondea un numero a dos decimales exactos si es necesario
function redondear(num){
    return Math.round(num*100)/100;
}	

//funcion ajax que llama a pruebas st y consulta la base de datos llena la tabla y la grafica
function PrevisionaliCapitulo(anno){
    console.log('llamando previsionli capituli per anno: '+anno);
    // TODO esconder los elementos si se va a rellamar para el spinner
    $('#encabezado').hide(); 
    $('#table-data').hide();
    $('#container').hide();
    $("<div class='spinner' id='spinner'></div>").appendTo("#clearfix");
    $.ajax({
        method: "GET",
        url:"pruebas.sto?RequestFunction=previsionaliCapitulo&anno="+anno			
    }).done(function(msg) { 
        $("#table-data").empty();		
        var jsonData = JSON.parse(msg);
        for (var i = 0; i < jsonData.previsionali_capitoli.length; i++){
            var response = jsonData.previsionali_capitoli[i];
            const {AnnoGestione, Capitolo, importo_cap, perc_aggio, perc_iva_aggio} = response;
            $("#table-data").append('<tr><td>' + AnnoGestione + '</td><td>'+ Capitolo+'</td><td>'+ redondear(importo_cap) +'</td><td>'+ redondear(perc_aggio) +'</td><td>'+ redondear(perc_iva_aggio)+'</td></tr>');     
        }
        $('#spinner').remove();
        $('#encabezado').show(); 
        $('#table-data').show();
        $('#container').show();				
        var nome = "Previsionali Capitolo";
        datos = datosGrafico();
        grafico(nome, datos);
    })
.fail(function() {
    alert('Errore');
});
}

function AttiEmessi(anno){
    console.log('llamando Atti emessi per anno: '+anno);	
    $('#encabezado').hide(); 
    $('#table-data').hide();
    $('#container').hide();
    $("<div class='spinner' id='spinner'></div>").appendTo("#clearfix");
    $.ajax({
        method: "GET",
        url:"pruebas.sto?RequestFunction=attiEmessi&anno=2018"		
    }).done(function(msg) { 
        console.log(msg);
        $("#table-data").empty();		
        var jsonData = JSON.parse(msg);
        for (var i = 0; i < jsonData.atti_emessi.length; i++){
            var response = jsonData.atti_emessi[i];
            const {capitolo, previsione_attuale, totale_accertato, annullato, accertato_previsione} = response;
            $("#table-data").append('<tr><td>' + capitolo + '</td><td>'+ previsione_attuale +'</td><td>'+ totale_accertato +'</td><td>'+ annullato+'</td><td>'+ accertato_previsione +'</td></tr>');     
        }
        $('#spinner').remove();
        $('#encabezado').show(); 
        $('#table-data').show();
        $('#container').show();				
        var nome = "Atti Emessi";
        datos = datosGraficoAtti();
        grafico(nome, datos);
    })
.fail(function() {
    alert('Errore');
});
}

//funcion de higthchart que dibuja la grafica a partir de los datos tomados de la base de dato
function grafico(nome, datos){
Highcharts.chart('container', {
chart: {
    type: 'pie',
    options3d: {
    enabled: true,
    alpha: 45,
    beta: 0
    }
},
title: {
    text: nome
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.y}%</b>'
},
plotOptions: {
    pie: {
    allowPointSelect: true,
    cursor: 'pointer',
    depth: 35,
    dataLabels: {
        enabled: true,
        format: `Capitolo {point.name}`
    }
    }
},
series: [{
    type: 'pie',
    name: 'Browser share',
    data:datos
}]
});
}

//toma los campos de interes de la tabla y los guarda en un arreglo para ser utilizados en la funcion que dibuja el grafico
function datosGrafico(){
var datos= [];	
var rows = document.getElementById('table-data').rows;

for (var i = 0; i < rows.length; i++) {
    datos.push([ rows[i].cells[1].innerHTML, parseFloat(rows[i].cells[3].innerHTML) ]);	
}
console.log(datos)
return datos;
}
function datosGraficoAtti(){
var datos= [];	
var rows = document.getElementById('table-data').rows;

for (var i = 0; i < rows.length; i++) {
    datos.push([ rows[i].cells[0].innerHTML, parseFloat(rows[i].cells[1].innerHTML) ]);	
}
return datos;
}

//funcion para filtrar campos uno por la columna de capitulo y otro por valores encontrados en la tabla
function filtrarCapDesc(){
var capitulo = (buscarPorCapitulo.value).toLowerCase().trim();
var descripcion = (buscarPorDescripcion.value).toLowerCase().trim();

var filas = document.getElementById("tabla").getElementsByTagName("tbody")[0].rows;

for(var i=0; i<filas.length; i++){
    var textoColumna = (filas[i].cells[1].innerText).toLowerCase();
    var textoFila = (filas[i].innerText).toLowerCase();
    
    (textoColumna.indexOf(capitulo) >=0 && textoFila.indexOf(descripcion) >= 0) ? filas[i].className= 'mostrar' : filas[i].className='ocultar';
            
}
}

function dowloadExcel(){
    let fecha = fechaActual()
    var tmpElmnt = document.createElement('a');
    var data_type = 'data:aplication/vnd.ms-excel';
    var tabla = document.getElementById('tabla');
    var tabla_html = tabla.outerHTML.replace(/ /g, '%20');
    tmpElmnt.href = data_type + ', ' + tabla_html;
    tmpElmnt.download = `table${fecha}.xls`;
    tmpElmnt.click();
}

function fechaActual(){
let d= new Date();
let fecha = `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}-${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
return fecha
}

//al cargar la pagina
window.addEventListener('load', function(){
//cargo los annos del select
selectDeAnnos();

//state inicial
let currentState ={
    anno: 2019,
    consulta: null
}

//valor del anno en en select
var selectAnno = document.getElementById("annos");

//funcion para controlar el estado de los selects
function effect(newData){
    const newState = Object.assign({}, currentState, newData)			
    if(JSON.stringify(newState) !== JSON.stringify(currentState)){
        if(newState.anno !== currentState.anno){
            annoSeleccionado=newState.anno;
        }
        currentState=newState;

        if(currentState.consulta){
            switch(currentState.consulta){
                case '1':
                    PrevisionaliCapitulo(currentState.anno);
                    break;
                case '2':
                    AttiEmessi(currentState.anno)
                    break                    
            }
        }
    }
}	

selectAnno.addEventListener('change', function(){
    effect({
        anno: parseInt(this.options[selectAnno.selectedIndex].value)
    });
});


//selecciono el menu lateral donde se dibujan los campos relativos
var menuLateral= document.querySelector('#lateral');
var encabezado = document.querySelector('#encabezado');

//selecciono el select
var seleccionarConsulta = document.getElementById('select');

//tomo el valor del select cuando cambie y muesto los datos de interes
seleccionarConsulta.addEventListener('change', function(){
    var opcion = this.options[select.selectedIndex].value;
    
    effect({
        consulta:opcion
    })
    
    if(opcion.value == 1){					   
menuLateral.innerHTML = `
  <div class='form-group col-12 col-md-6 col-lg-3' >
      <label for='capitolo'>Capitolo</label>
      <input name='capitolo' class="form-control" id="buscarPorCapitulo" type="number">
  </div>
  <div class='form-group col-12 col-md-6 col-lg-3' >
      <label for='descrizione'>Descrizione</label>
      <input name="descrizione" class="form-control" id="buscarPorDescripcion" type="text">
  </div>
`;

//inputs de busqueda
var inputCapitulo = document.getElementById("buscarPorCapitulo");

inputCapitulo.onkeyup =function(){
  filtrarCapDesc();
}

var inputDescripcion = document.getElementById("buscarPorDescripcion");

inputDescripcion.onkeyup = function(){
  filtrarCapDesc();
}

encabezado.innerHTML = `
<th>Anno gestione</th>
<th>Capitolo</th>
<th>Importo</th>
<th>% aggio</th>
<th>% iva su aggio</th>`; 
}

if(opcion.value == 2){   

encabezado.innerHTML = `
  <th>Capitolo</th>
  <th>Previsione Attuale</th>
  <th>Totale Accertato</th>
  <th>Di cui Annullato</th>
  <th>% Accertatati Su Previsione</th>`;

menuLateral.innerHTML = `
<div class='form-group col-12 col-md-6 col-lg-3'>
<label  for='buscarPorCapitulo'>Capitolo</label>
<input name='capitolo' class="form-control" id="buscarPorCapitulo" type="number">
</div>
<div class='form-group col-12 col-md-6 col-lg-3' >
<label for='buscarPorDescripcion'>Descrizione</label>
<input name='descrizione' class="form-control" id="buscarPorDescripcion" type="text">
</div>
<div class='form-group col-12 col-md-6 col-lg-3' >
<label for='buscarPorInizioPeriodo'>Inizio Periodo</label>
<input name='inizioPeriodo' class="form-control" id="buscarPorInizioPeriodo" type="text">
</div>
<div class='form-group col-12 col-md-6 col-lg-3' >
<label for='buscarPorFinePeriodo'>Fine Periodo</label>
<input name="finePeriodo" class="form-control" id="buscarPorFinePeriodo" type="text">
</div>
<div class='form-group col-12 col-md-6 col-lg-3' >
<label for='buscarPorDaDataNotifica'>Da Data Notifica</label>
<input name='daDataModifica' class="form-control" id="buscarPorDaDataNotifica" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3' >
<label for='buscarPorADataNotifica'>A Data Notifica</label>
<input name="aDataModifica" class="form-control" id="buscarPorADataNotifica" type="date">
</div>
` 


}

if(opcion.value == 3){

encabezado.innerHTML = `
  <td>Inizio Paeriodo</td>
  <td>Totale Accertado</td>
  <td>(Di Cui Annullato)</td> 
  <td>Totale Riscosso</td>
  <td>% Riscosso/Accertato</td>`;
  
//<p><b>Accertatato/Emesso</b></p>
//<p><b>Versato</b></p>
menuLateral.innerHTML = `
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='capitolo'>Capitolo</label>
  <input class="form-control" name='capitolo' id="buscarPorCapitulo" type="number">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='descrizione'>Descrizione</label>
  <input class="form-control" name="descrizione" id="buscarPorDescripcion" type="text">		
</div> 
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='inizioPeriodo'>Inizio Periodo</label>
  <input class="form-control" name='inizioPeriodo' id="buscarPorInizioPeriodo" type="text">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='finePeriodo'>Fine Periodo</label>
  <input class="form-control" name="finePeriodo" id="buscarPorFinePeriodo" type="text">
</div> 
<div class='form-group col-12 col-md-6 col-lg-3'>
      <label for='daDataModifica'>Da Data Notifica</label>
      <input class="form-control" name='daDataModifica' id="buscarPorDaDataNotifica" type="date">
  </div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='aDataModifica'>A Data Notifica</label>
  <input class="form-control" name="aDataModifica" id="buscarPorADataNotifica" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
      <label for='daDataModifica'>Da Data Accredito</label>
      <input class="form-control" name='daDataAcredito' id="buscarDataAcredito" type="date">
  </div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='aDataModifica'>A Data Accredito</label>
  <input class="form-control" name="aDataAcredito" id="buscarADataAcredito" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='modalitaPagamento'>Modalità di Pagamento</label>
  <input class="form-control" name="modalitaPagamento" id="buscarModalitaPagamento" type="text">
</div>			  
` 


}

if(opcion.value == 4){

encabezado.innerHTML = `
  <td>Cap./Acc./Anno</td>
  <td>Descrizione</td>
  <td>Totale Accertato</td> 
  <td>(Di Cui Annullato)</td>
  <td>Totale Riscosso</td>
  <td>% Riscosso/Accertato</td>  `   ;

menuLateral.innerHTML = `
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='capitolo'>Capitolo</label>
  <input class="form-control" name='capitolo' id="buscarPorCapitulo" type="number">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='descrizione'>Descrizione</label>
  <input class="form-control" name="descrizione" id="buscarPorDescripcion" type="text">
</div> 
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='inizioPeriodo'>Inizio Periodo</label>
  <input class="form-control" name='inizioPeriodo' id="buscarPorInizioPeriodo" type="text">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='finePeriodo'>Fine Periodo</label>
  <input class="form-control" name="finePeriodo" id="buscarPorFinePeriodo" type="text">
</div> 
<div class='form-group col-12 col-md-6 col-lg-3'>
      <label for='daDataModifica'>Da Data Notifica</label>
      <input class="form-control" name='daDataModifica' id="buscarPorDaDataNotifica" type="date">
  </div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='aDataModifica'>A Data Notifica</label>
  <input class="form-control" name="aDataModifica" id="buscarPorADataNotifica" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
      <label for='daDataAcredito'>Da Data Accredito</label>
      <input class="form-control" name='daDataAcredito' id="buscarDataAcredito" type="date">
  </div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='aDataAcredito'>A Data Accredito</label>
  <input class="form-control" name="aDataAcredito" id="buscarADataAcredito" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='modalitaPagamento'>Modalità di Pagamento</label>
  <input class="form-control" name="modalitaPagamento" id="buscarModalitaPagamento" type="text">
</div>			      
` 
}

if(opcion.value == 5){

encabezado.innerHTML = `
  <td>Capitolo</td>
  <td>Accertamento</td>
  <td>Descrizione</td> 
  <td>Riscossioni Totali</td>
  <td>Imponibile</td>
  <td>IVA</td>
  <td>% Aggio</td>
  <td>Aggio</td>
  <td>% IVA su Aggio</td>
  <td>Netto versato</td>  
  `;

menuLateral.innerHTML = `
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='capitolo'>Capitolo</label>
  <input class="form-control" name='capitolo' id="buscarPorCapitulo" type="number">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='accertamento'>Accertamento</label>
  <input class="form-control" name='accertamento' id="buscarPorAccertamento" type="text">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='inicioPeriodo'>Inizio Periodo</label>
  <input class="form-control" name='inicioPeriodo' id="buscarPorInizioPeriodo" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='finePeriodo'>Fine Periodo</label>
  <input class="form-control" name='finePeriodo' id="buscarPorFinePeriodo" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
      <label for='daDataAcredito'>Da Data Accredito</label>
      <input class="form-control" name='daDataAcredito' id="buscarDaDataAcredito" type="date">
  </div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='aDataAcredito'>A Data Accredito</label>
  <input class="form-control" name="aDataAcredito" id="buscarADataAcredito" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='modalitaPagamento'>Modalità di Pagamento</label>
  <input class="form-control" name="modalitaPagamento" id="buscarModalitaPagamento" type="text">
</div>	    
` 


}

if(opcion.value == 6){

encabezado.innerHTML = `
  <td>Capitolo</td>
  <td>Accertamento</td>
  <td>Descrizione</td> 
  <td>Riscossioni Totali</td>
  <td>Imponibile</td>
  <td>IVA</td>
  <td>% Aggio</td>
  <td>Aggio</td>
  <td>% IVA su Aggio</td>
  <td>Totale IVA</td>
  <td>Netto versato</td>  
  `;

menuLateral.innerHTML = `
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='capitolo'>Capitolo</label>
  <input class="form-control" name='capitolo' id="buscarPorCapitulo" type="number">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='accertamento'>Accertamento</label>
  <input class="form-control" name='accertamento' id="buscarPorAccertamento" type="text">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='daAnnoEmissione'>Da Anno Emissione</label>
  <select name="daAnnoEmissione" class="form-control" id="buscarAnnoEmissione">
      <option>2018</option>
  </select>
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='aAnnoEmissione'>A Anno Emissione</label>
  <select name="aAnnoEmissione" class="form-control" id="buscarAAnnoEmissione">
      <option>2018</option>
  </select>
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='daDataAcredito'>Da Data Accredito</label>
  <input class="form-control" name='daDataAcredito' id="buscarDaDataAcredito" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='aDataAcredito'>A Data Accredito</label>
  <input class="form-control" name="aDataAcredito" id="buscarADataAcredito" type="date">
</div>
<div class='form-group col-12 col-md-6 col-lg-3'>
  <label for='modalitaPagamento'>Modalità di Pagamento</label>
  <input class="form-control" name="modalitaPagamento" id="buscarModalitaPagamento" type="text">
</div>	   
` 
 
}

if(opcion.value == 7){

encabezado.innerHTML = `
  <td>Capitolo</td>
  <td>Accertamento</td>
  <td>Descrizione</td> 
  <td>Riscossioni Totali</td>
  <td>Imponibile</td>
  <td>IVA</td>
  <td>% Aggio</td>
  <td>Aggio</td>
  <td>% IVA su Aggio</td>
  <td>Totale IVA</td>
  <td>Netto versato</td>  
  `;

menuLateral.innerHTML = `
        <div class='form-group col-12 col-md-6 col-lg-3'>
        <label for='dataRepilogo'>Data di Riepilogo</label>
        <input class="form-control" name='dataRepilogo' id="buscarDataRepilogo" type="date">
        </div>
        <div class='form-group col-12 col-md-6 col-lg-3'>
        <label for='capitolo'>Capitolo</label>
        <input class="form-control" name='capitolo' id="buscarPorCapitulo" type="number">
        </div>
        <div class='form-group col-12 col-md-6 col-lg-3'>
        <label for='buscarPorAccertamento'>Accertamento</label>
        <input class="form-control" name='accertamento' id="buscarPorAccertamento" type="text">
        </div>
        <div class='form-group col-12 col-md-6 col-lg-3'>
        <label for='buscarAnno'>Anno</label>
        <select name="anno"  class="form-control" id="buscarAnno">
            <option>2018</option>
        </select>
        </div>
        `    
    }
})
}); 