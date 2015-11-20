var storage = window.localStorage;
/* asi es como vamos a guardar y obtener cookies:
    storage.setItem('key','value');
    storage.getItem('key')
*/
// el objeto 'paginas' esta definido en 'paginas.js'

//setup de aplicacion q se ejecuta cuando se abre
var idxPagActual = storage.getItem('pagina') ? storage.getItem('pagina') : 0;
storage.setItem('pagina', idxPagActual);//poco eficiente pero meh

actualizarVistas();

function actualizarVistas(){ //actualiza todos los contenidos
  var numPag        = $('#numPag');
  var texto         = $('#textoPag');
  var opcionesPag   = $('#opcionesPag');
  var paginaActual  = paginas[idxPagActual];

  numPag.text(storage.getItem('pagina')); //seteamos numero de pagina
  texto.text(paginaActual.texto);

  for(var idx in paginaActual.opciones ){
    opcionesPag.append(
      '<button onclick="cambiarPagina('+paginaActual.opciones[idx].vaPag+')" class="btn btn-success">'+paginaActual.opciones[idx].texto+'</button>'
    );
  }
}

//esto nadamas vuelve a cargar todo con la nueva pagina
function cambiarPagina(idxPagina){
  idxPagActual = idxPagina;
  storage.setItem('pagina', idxPagActual);//poco eficiente pero meh
  location.reload();
}
