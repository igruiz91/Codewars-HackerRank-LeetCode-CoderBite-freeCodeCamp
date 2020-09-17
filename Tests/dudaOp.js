window.addEventListener('load', function(){
   
    var span = document.getElementsByClassName('close')[0];
    var body = document.getElementsByTagName('body')[0];
    var modal = document.getElementById('modal')
    var btn = document.getElementById('btnModal');

        btn.onclick = function() {
                console.log('entro al modal');
                modal.style.display = 'flex';
                body.style.position = 'static';
                body.style.height = '100%';
                body.style.overflow = 'hidden';
            }
        
         
    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = 'auto';
        body.style.overflow = 'visible';

    }

    window.onclick = function() {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = 'auto';
            body.style.overflow = 'visible';

        }
    }
})