window.addEventListener('load', function () {
    //elemento del modal
    var modal = document.getElementById('tvesModal')
    //btn del primer modal
    var btn = document.getElementById('btnModal');
    //boton que cierra el modal numero uno
    var span = document.getElementsByClassName('close')[0]; // aqui le dices que es el cierre del primer modal

    btn.onclick = function () {
        modal.style.display = "block";
        /*yo pondria el codigo de la imagen aqui se quita automaticamente al salir del modal y puedes mantener tu clase css para otro modal */
        modal.style.backgroundImage = "url('img/razer.png')";/* OJO en la sintaxis img es mi carpeta luego el nombre*/
    }


    span.onclick = function () {
        modal.style.display = "none"
    }

    window.onclick = function () {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
})