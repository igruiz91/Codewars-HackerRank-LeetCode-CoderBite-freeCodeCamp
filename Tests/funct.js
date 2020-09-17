function effect(newData){
    const newState = Object.assign({}, currentState, newData)			
    if(JSON.stringify(newState) !== JSON.stringify(currentState)){
        if(newState.anno !== currentState.anno){
            annoSeleccionado=newState.anno;
        }
        currentState=newState;
        console.log(currentState)
        if(currentState.consulta){
            switch(currentState.consulta){
                case '1':
                    encabezado.innerHTML = `
                        <th>Anno gestione</th>
                        <th>Capitolo</th>
                        <th>Importo</th>
                        <th>% aggio</th>
                        <th>% iva su aggio</th>`;
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

                        console.log('opcion 1')	
                        //inputs de busqueda
                        var inputCapitulo = document.getElementById("buscarPorCapitulo");

                        inputCapitulo.onkeyup =function(){
                          filtrarCapDesc();
                        }

                        var inputDescripcion = document.getElementById("buscarPorDescripcion");

                        inputDescripcion.onkeyup = function(){
                          filtrarCapDesc();
                        }
                    PrevisionaliCapitulo(currentState.anno);
                    break;
                case '2':
                    encabezado.innerHTML = `
                        <th>Capitolo</th>
                        <th>Previsione Attuale</th>
                        <th>Totale Accertato</th>
                        <th>Di cui Annullato</th>
                        <th>% Accertatati Su Previsione</th>`;
                    AttiEmessi(currentState.anno);
                    break;                    
            }
        }
    }
}	