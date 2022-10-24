// Serie de Fibonacci
// 1 1 2 3 5 8 13

const fs = require('fs');

let crearSerie = (valor) => {

    return new Promise((resolve, reject) => 
    {
        //let valor = 7;
        let fibonacci = [1];
        let primero = true;
        let suma = 0;
        let serie = ''
        for (let i = 0; i <= valor-2; i++) {
            if (primero == true) {
                fibonacci.push(1);
                primero = false;
            }
            else {
                suma = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
                fibonacci.push(suma);
            }
        }
        serie = `${fibonacci}\t`;
        fs.writeFile('fibonacci.txt', serie, (err) => {
            if (err)
                reject("Error al crear el archivo");
            else
                resolve("El archivo fue creado con éxito");
        })

    })
}
    module.exports =
    {
        crearSerie
    }
