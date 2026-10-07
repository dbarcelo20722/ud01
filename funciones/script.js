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

// Callback -> Es llamada a una funcio que es passa com a parametre a una altra funcio. La funcio que rep la callback decideix quan i com executar-la.
// function executarOperacio(a, b, operacio){
//     return operacio(a, b);
// }

// function sumar(a, b){
//     return a + b;
// }
// let resultat = executarOperacio(5, 6, sumar);
// resultat = executarOperacio(5, 6, function(a, b){
//     return a * b;
// });
// resultat = executarOperacio(5, 6, (a, b) => a / b);
// console.log(resultat);

// let text = '   Hola, mundos   ';

// function procesarText(text, operacio){
//     const txt = text.trim();
//     return operacio(txt);
// } 

// function majusculas(text){
//     return text.toUpperCase();
// }

// function contarCaracteres(text){
//     return text.length;
// }
  
// console.log(procesarText(text, majusculas));
// console.log(procesarText(text, contarCaracteres));

// Callbacks sincron(se ejecuta al mismo monento que lo llama la funcion) i asincrons(se ejecuta mas adelante)
// Sincron
// function saludar(nom, callback) {
//     console.log(`Hola ${nom}!`);
//     callback();
//     console.log("La funcio saludar ha acabat");
// }


// console.log("Inicio del programa");
// saludar('David', () => {
//     console.log('Se esta ejecutando el callback');
// });

// console.log('Final del programa');
// console.log(" ");
// console.log(" ");

// Asincron
// console.log("Inicio");

// setTimeout(() => {
//     console.log("Pasaron 2s");
// }, 2000);


// console.log("Final");

function executarAsincronament(callback, t){
    console.log('Antes de programar el callback');

    setTimeout(callback, t);

    console.log('Despues de programar el callback');
};

console.log('Inici');

executarAsincronament(() => {
    console.log('Callback asincron!');
}, 3000);

console.log('Final');

