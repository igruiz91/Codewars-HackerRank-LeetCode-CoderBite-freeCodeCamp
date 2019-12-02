window.addEventListener('load', function(){

  console.log(this.navigator.userAgent);

  var favorites = JSON.parse(localStorage.getItem('favorites'))
  if(favorites==null) favorites=[]
  else{
    favorites.forEach((element,i) => {
      $('#card').append(element)
    });
  }

  var display = $('#storage').attr('class');

  if(!localStorage.getItem('display')){
    localStorage.setItem('display', display)
  }

  console.log(display);

  $('#storage').click(function storage() {
    $('#storage2').attr('class', 'mostrar')
    $('#storage').attr('class', 'ocultar')
      favorites.push('<p id=""><a href="www.google.com">aqui</a> <a href="#" id=""><i class="fas fa-trash-alt"></i></a><p>')
      localStorage.setItem('favorites', JSON.stringify(favorites))
      localStorage.removeItem('display')
      display=$('#storage').attr('class')
      localStorage.setItem('display', display)
    }
  )

  $('#storage2').click(function storage() {
    $('#storage').attr('class', 'mostrar')
    $('#storage2').attr('class', 'ocultar')
      favorites.push('<p id=""><a href="www.google.com">aqui</a><p>')
      localStorage.setItem('favorites', JSON.stringify(favorites) )
    }
  )


});
  