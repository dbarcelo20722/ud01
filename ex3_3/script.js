// 3.2.1 Crea una funció executarOperacio(a, b, callback) i prova-la amb callbacks per sumar, restar i calcular el màxim.

function executarOperacio(a, b, callback) {
    return callback(a, b);
}

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function maxim(a, b) {
    return Math.max(a, b);
}
console.log(executarOperacio(6, 7, sumar));
console.log(executarOperacio(7, 8, restar));
console.log(executarOperacio(8, 300, maxim));

// 3.2.2 Crea un array amb cinc temperatures. Mostra-les amb for i torna-les a mostrar amb for...of.

const temperatures = [12, 15, 30, 25, 18];

for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
}

for (const temperature of temperatures) {
    console.log(temperature);
}

// 3.2.3 Calcula manualment la suma, la mitjana, el valor màxim i el valor mínim d’un array de nombres.
const nums = [1, 2, 3, 4, 5];
let suma = 0;
let mitjana = 0;
let nMaxim = 0;
let minim = 0;

for(num of nums) {
    suma += num;
    if(num > nMaxim) {
        nMaxim = num;
    }
    if(num < minim || minim === 0) {
        minim = num;
    }
};
mitjana = suma / nums.length;
console.log(`Suma: ${suma}, Mitjana: ${mitjana}, Màxim: ${nMaxim}, Mínim: ${minim}`);
// 3.2.4 Crea una funció comptarMajorsQue(valors, limit) que retorni quants elements superen el límit.
function comptarMajorsQue(valors, limit) {
    let count = 0;
    for (const valor of valors) {
        if (valor > limit) {
            count++;
        }
    }
    return count;
}

console.log(comptarMajorsQue([1, 2, 3, 4, 6, 7, 8, 99, 88, 44, 33], 7));

// 3.2.5 Crea una funció transformarArray(valors, callback) que construeixi i retorni un array nou aplicant el callback a cada element.
function transformarArray(valors, callback) {
    const nouArray = [];
    for (const valor of valors) {
        nouArray.push(callback(valor));
    }
    return nouArray;
}

function quadrat(num) {
    return num * num;
}
console.log(transformarArray([1, 2, 3, 4, 5], quadrat));