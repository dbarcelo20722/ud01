// const, let

// const alumne = {
//     nom: 'Pep',
//     nota: 8
// };

// console.log(alumne);
// alumne.nota = 7;
// console.log(alumne);

// _, $
// alumne != Alumne
// alumneExemplar
// 'temp'

// let resultat = 10;
// console.log(typeof resultat);
// resultat = 'deu';
// console.log(typeof resultat);

// 3. TIPUS PRIMITIUS
// string
// number -> 66, 7.7, NaN, Infinity
// bigint
// boolean
// undefined
// null

// let x = null;
// console.log(typeof 33n);
// console.log(Array.isArray(3));
// const edat = Number('vint');
// console.log(edat);
// console.log(typeof edat);
// console.log(Number.isNaN(edat));


// 4. Literals i Assignacions
// const curs = 2026; // numeric
// const modul = 'DWEC';
// const modulOptatiu = "ERD";
// const actiu = true;
// const grups = ['DAM A', "DAM B", 96, false];
// const sessio = {
//     numero: 4,
//     durada: 55, 
//     aula: '116'
// };
// const buit = null;


// const nom = 'Laia';
// const nota = 9.5;
// const missatge = nom + ' ha obtingut un ' + nota;
// const missatgePlantilla = `${nom} ha obtingut un ${nota}`;
// console.log(missatge);
// console.log(missatgePlantilla);

// // Assiganacio simple i composta
// // =
// let x = 10;
// // +=
// // x = x +3;
// x += 3;
// // -=
// // *=
// // /=
// x /= 2;
// // ??= -> Assiganar valor si es null o undefined
// let nom;
// console.log(nom);
// nom ??= 'yo';
// console.log(nom);
// nom ??= 'messi';
// console.log(nom);
// console.log(x);
// 


// 5. Operadors i Expressions
// Aritmetics
// + suma, concatena
// - resta
// * multiplicacio, / divisio, % residu
// ** -> potencia (2**3 == 2*2*2)
// ++, --

// Comparacio
// ==, != no compara tipo
// ===, !== compara tipo
// let cincNum = 5;
// let cincCad = '5';
// console.log(cincNum !== cincCad);
// menor < <= que, mayor > >= que

// Operadors logics i valos truthy and falsy
// && AND primer o ultimo valor false
// || OR primer true
// ! negacion/conversion a boolean
// ??  ?? 1 sirve para poner un valor por defecto si es null

// Precedencia i parantesis
// const teAutoritzacio = true;
// let edat = 18;
// const esValid = edat >= 18 && teAutoritzacio
// console.log(esValid);

// Comparacio de nombre, cadenes o objectes

// const a = [1, 2];
// const b = [1, 2];
// const c = a;
// let comparacio = a === b;
// console.log(comparacio);

// Falses
// 0, -0, 0n, false
// "", ''
// null, undefined
// NaN
// console.log(Boolean(NaN));

// const resultat = 0;

// if(!resultat) {
//     console.log('El resultat es false');
// }

// let nota = 0;

// if(nota != null && nota != undefined) {
//     console.log(`Nota registrada: ${nota}`);
// }


// 6 Conversior i coercio de tipus
// Numbre() String() Boolean()
// parseInt() parseFloat()
// let valor = '12.3';
// console.log(typeof valor);
// valor = Number(valor);
// console.log(valor);
// console.log(typeof valor);


// coercio (conversio inplicita)
// let valor = NaN + 1;
// console.log(valor);
// console.log(typeof valor);

// Condicionals
// let edat = 18;

// if(edat > 18) {
//     console.log('Es najor d\'edat');
// }else if(edat == 18){
//     console.log('Tot just major d\'edat');
// }else{
//     console.log('Es menor d\'edat');
// };

// Condicions compostes
// const edat = 9;
// const teEntrada = true;
// const estaBloquejat = false;
// const teAcces = (edat >= 18) && teEntrada && !estaBloquejat
// if(teAcces) {
//     console.log('Tot correcte');
// } else {
//     console.log('Acces denegat!');
// }

//Operador ternari
// const nota = 10;
// const missatge = (nota >= 5) ? "Aprovat" : "Suspes";
// console.log(missatge);
// const dia = 'dilluns';

// Switch 
// switch (dia){
//     case 'dilluns':
//         console.log('Comença la setmana');
//         break;
//     case 'divendres':
//         console.log('Comença el cap de setmana');
//         break;
//     case 'diumenge':
//         console.log('Dema ja es dilluns...');
//         break;
//     default:
//     console.log('Un dia entre setmana');
//     break;
// }

// Bucles
// for
// for(let i = 0; i < 5; i++) {
//     console.log('i: ' + i);
// };

// while
// let saldo = 100;
// const cost = 30;
// while(saldo >= cost){
//     saldo -= cost;
//     console.log(saldo);
// }

// do while
// let intent = 0;

// do{
//     console.log(`Intent ${intent + 1}`);
//     intent++;
// }while(intent < 3);

// for of
// const moduls = ['DWEC', 'ERD', 'DIW'];

// for(const modul of moduls) {
//     console.log(modul);
// }

// for(const caracter of 'Hola'){
//     console.log(caracter);
// }

// break i continue

// for(let numero = 1; numero <=10; numero++){
//     if(numero === 3) continue;
//     if(numero === 7) continue;
//     if(numero === 9) break;
//     console.log(numero);
// }

// Cadenes de text
// let a = "dobles puntos";
// let b = 'Simples ';
// const c = `accent greu`;
// console.log(a, b, c);
// console.log(c.length);
// a = a.toUpperCase();
// console.log(a);
// a = a.toLocaleLowerCase();
// console.log(a);
// console.log(b);
// b = b.trim();
// console.log(b);
// let x = a.includes('bl');
// console.log(x);
// console.log(a.trim().startsWith('c'));
// console.log(b.slice(1,5));
// console.log(b.replace('m', 'n'));
// let arrayDeCadena = a.split('n');
// console.log(arrayDeCadena);
// if(b.toLocaleLowerCase().trim() === 'simples') {
//     console.log('Afirmatiu');
// } else {
//     console.log('No');
// }

// Templates
// const nom = 'Pep';
// const nota = 9.2;

// console.log(`${nom} ha tret un ${nota}`);

// const preu = 1.95;
// const quantitat = 3;

// console.log(`Total: ${(preu < 10 ? 15 * quantitat : preu * quantitat).toFixed(2)}€`);

// Text multilinia
// const resum = `Comanda
// Producte: teclat
// Quantitat: 2
// Estat: Ok
// `;
// console.log(resum);

// console.log(0 || 25);
// console.log(0 ?? 25);