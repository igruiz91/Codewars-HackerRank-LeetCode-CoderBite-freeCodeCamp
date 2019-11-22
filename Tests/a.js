window.addEventListener('load', function(){

  var menuPrevisionaliCapitolo = function menuPrevisionaliCapitolo() {
    encabezado.innerHTML = "\n\t\t\t<th>Capitolo</th>\n\t\t\t<th>Anno gestione</th>\n\t\t\t<th>Descrizione</th>\n\t\t\t<th>Importo</th>\n\t\t\t<th>% aggio</th>\n\t\t\t<th>% iva su aggio</th>";
    menuLateral.innerHTML = "\n\t\t\t<div class='form-group col-12 col-md-6 col-lg-3' >\n\t\t\t  <label for='capitolo'>Capitolo</label>\n\t\t\t  <input name='capitolo' class=\"form-control\" id=\"buscarPorCapitulo\" "+
	" type=\"number\" placeholder=\"Cerca per Capitolo\">\n\t\t\t</div>\n\t\t\t<div class='form-group col-12 col-md-6 col-lg-3' >\n\t\t\t  <label for='buscarPorDescripcion'>Descrizione</label>\n\t\t\t "+
	" <input name=\"descrizione\" class=\"form-control\" id=\"buscarPorDescripcion\" type=\"text\" placeholder=\"Cerca per Descrizione\">\n\t\t\t</div>\n\t\t\t<div class='form-group col-12 col-md-6 col-lg-3' >"+
	"\n\t\t\t  <label for='buscarPorTexto'>Cercare</label>\n\t\t\t  <input name=\"descrizioneTexto\" class=\"form-control\" id=\"buscarPorTexto\" type=\"text\" placeholder=\"Cerca per Testo\">\n\t\t\t</div>"; //inputs de busqueda
  

}

});
  