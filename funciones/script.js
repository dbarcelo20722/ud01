// Funcions, parametres, retorn i callback

// Funcions         Agrupar i reutilitzar un comportament
// Parametres       Fer configurable una funcio
// Retorn           Produir una dada reutilitzable
// Arrow function   Compactar sintaxi; funcions com a valor
// Callback         Delegar una accio a una altra funcio

// function saludar() {
//     console.log('Hola');
// }
// saludar();

// function calcAreaRectangle(base, altura){
//     return base * altura;
// }
// let area = calcAreaRectangle(5,6);
// console.log(area);

// // Expresiones de funcion
// const calcularDescompte = function (preu, percentatge){
//     return preu * percentatge / 100;
// }
// // console.log(calcularDescompte(150, 20));
// const factorial = function calcFactorial(num) {
//     if(num < 1) return 1;
//     return num * calcFactorial(num - 1);
// }
// console.log(factorial(6));

// Funcions com a valors
// function saludar(nom) {
//     return `Hola, ${nom}`;
// }
// const saluda = saludar;
// console.log(saluda('yo'));

// function crearMisatge(nom, modul = 'messi') {
//     return `${nom} cursa ${modul}`;
// }
// console.log(crearMisatge('yo', 'messi'));

// // Parametres REST
// function sumar(... nums) {
//      let total = 0;

//      for(const num of nums){
//          total += num;
//      }
//      return total;
//  }
// // console.log(sumar(1,2,3,4,5,6,7,8,9,5));

// function calcularMitjana(... notas) {
//     for(const nota of notas){
//         if(!Number.isFinite(nota)){
//             return null;
//         }
//     }
//     return (sumar(...notas))/notas.length;
// }
// console.log(calcularMitjana(10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5));

// Arrow function
// const multiplicar = (a,b) => a * b;;
// console.log(multiplicar(2,2));

// const retornObjecte = nom => ({nom, actiu: true});
// console.log(retornObjecte('david'));