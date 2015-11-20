//Aqui se definen las varias paginas...
var paginas = [
  {//esta es la pagina por defecto y el 'template' por decir asi
    noPagina: 0, //el numero de la pagina es el index de la pagina en el arreglo
    texto: 'Hola Soy la primera Pagina',
    opciones:[
      {vaPag: 1, texto: 'Empezar Super Historia'},
      {vaPag: 0, texto: 'No hacer nada..'},
    ]
  },
  {
    noPagina: 1,
    texto: 'Bla bla bla empieza la historia.',
    opciones:[
      {vaPag: 2, texto: 'Caminar hacia el norte!'}
    ]
  },
  {
    noPagina: 2,
    texto: 'Caminado hacia el norte!!.',
    opciones:[
      {vaPag: 1, texto: 'Caminar hacia el sur!'}
    ]
  },

];
