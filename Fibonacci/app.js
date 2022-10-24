const serie = require('./serie');

let argv = process.argv;
let valor = argv[2].split('=')[1];

//EJECUTAR CON -> node app --serie=VALOR

serie.crearSerie(valor)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje))