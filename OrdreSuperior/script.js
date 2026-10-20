// Funcions d'ordre superior (callback)
// recibe 1 o mas funciones como parametro o return una funcion
// function calcular(a, b, operacio){
//     return operacio(a, b);
// }

// const sumar = (a, b) => a + b;
// const multiplicar = (a, b) => a * b;

// console.log(calcular(4, 5, sumar));
// console.log(calcular(4, 5, multiplicar));

// function crearMultiplicador(factor) {
//     return function(numero) {
//         return factor * numero;
//     };
// }

// const duplicar = crearMultiplicador(2);
// const triplicar = crearMultiplicador(3);

// console.log(duplicar(5));
// console.log(triplicar(5));

// Arrays
// const notas = [7.5, 8, 2.5, 10, 5.3, 6];
// let suma = 0;
// let aprovats = 0;
// for(nota of notas){
//     if(nota >= 5){
//         aprovats++;
//     }
//     suma += nota;
// }
// console.log(`Aprovats: ${aprovats}`);
// console.log(`Suma notes: ${suma}`);
// console.log(`Mitjana: ${suma/notas.length}`)
// console.log(notas[3]);
// let buit = [];
// buit[0] = 67;
// buit[buit.length] = 33;
// buit[buit.length] = 34;
// buit[buit.length] = 35;
// buit[buit.length] = 36;
// console.log(buit);

// const colors = new Array("vermell", "groc", "verd", "blau");
// const colors2 = ["magenta", "negro", "blanco"];
// colors = colors2;
// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// for(const color of colors){
//     console.log(color);
// }

// let index = 0;

// while(index < colors.length){
//     console.log(colors[index]);
//     index ++;
// }

// const coches = new Array(5);
// const cotxes = new Array(0);
// cotxes[0] = "ford";
// cotxes[1] = "nissan";
// console.log(coches.length);
// console.log(cotxes);
// const multi = ["a", 67, 6.7, [1,2,3], false, undefined, NaN];
// console.log(multi);

// forEach, map i filter

// const arrayProva = [2, 4, 6, 1, -2];

// arrayProva.nombreMetode((element, index, arrayComplet) => {
//      instruccions del callback
// })


// forEach

const llenguages = ['python', 'JavaScript', 'Java'];

// llenguages.forEach((llenguatge, index) => {
//     console.log(`${index}: ${llenguatge}`);
// });


// Map hace algo recorre y manipula y devuelve un nuevo array
// const preus = [10, 25, 40];

// const preusIva = preus.map((preu) => {
//     return preu * 1.21;
// });

// console.log(preus);
// console.log(preusIva);

// filter recorre todo devuelve array nuevo pero no el mismo numero de elementos = o <

// const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const aprovats = notes.filter((nota) => {
//     return nota>=5;
// });

// console.log(notes, aprovats);

// const mas = llenguages.filter((nom) => {
//     return nom.length>=5;
// });

// console.log(llenguages, mas);

// encadenat de metodes

// const resultat = notes
//     .filter(nota => nota % 2 === 0)
//     .map(nota => nota*10)
//     .forEach(nota => console.log(nota));

// const tempC = [12, 18, 25, 30, 2, 8, 0, -10];

// const tempAC = tempC
//     .filter(c => c >=20 )
//     .map(c => c * 9 / 5 + 32)
//     .forEach(c => console.log(c));


// find, some, every, reduce i sort

// find encuentra el primero, sino undefined
// const nombres = [4, 9, 12, 7, 18];
// const primerMajor10 =  nombres.find((num) => {
//     return num > 10;
// });
// console.log(primerMajor10);

// some si encuantra alguno para i devuelve true sino false
// const notes = [3, 7, 9, 1, 8, 5, 10, 2];
// let totsAprovats = notes.some((nota) => {
//     console.log(nota);
//     return nota >= 5;
// });
// console.log(totsAprovats);

// every si todos cumplen condicion devuelve boolean sino no
// totsAprovats = notes.every((nota) => {
//     console.log(nota);
//     return nota >= 5;
// });
// console.log(totsAprovats);
// console.log([].some(valor => valor > 0));
// console.log([].every(valor => valor > 0));

// reduce : cobina todos elmentos array para un unico resultado
/*
    array.reduce((acumulador, element) => {
        return nouAcumuladorM
    }, valorInicial);
*/

// const imports = [10, 25, 8.5, 12];

// const total = imports.reduce((acumulador, importe) =>{
//     return acumulador + importe;
// }, 0);
// console.log(total);

// const paraules = ['luna', 'mas', 'skins'];
// const frase = paraules.reduce((r, l) => {
//     return r  + l + ' ';
// }, '');
// console.log(frase)
// deveulve el num maxim
// l = acumulador r = lo otro
// const imports = [10, 25, 8.5, 12];
// const maxim = imports.reduce((l,r) => {
//     return l >= r ? l : r;
// }, 0);
// console.log(maxim);

// sort compara como si fueran cadenas
// const nums = [2, 100, 20, 3];
// nums.sort();
// console.log(nums);

// ordenacio numerica
// nums.sort((a, b) => a - b); // - a +
// console.log(nums);
// nums.sort((a, b) => b - a); // + a -
// console.log(nums);

// ordenacio cadenes
// const noms = ['Úrsula', 'aina', 'Biel', 'carla', 'zen'];
// noms.sort();
// console.log(noms);
// noms.sort((a,b) => a.localeCompare(b, "ca", {sensitivity: "base"}));
// console.log(noms);

// const originals = [5, 2, 10, -4];
// const copia = originals.slice();
// copia.sort((a, b) => a - b);
// console.log(originals);
// console.log(copia);

