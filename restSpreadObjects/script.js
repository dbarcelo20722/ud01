// Descontrucio d'Arrays
// const colors = ['vermell', 'verd', 'blau'];

// const [primerColor, segonColor, tercerColor] = colors;

// console.log(primerColor);
// console.log(segonColor);
// console.log(tercerColor);

// ometre elements
// const valors = [10, 20, 30, 40];
// const [primer,, tercer] = valors;
// console.log(primer);
// console.log(tercer);

// Vaor default
// const dades = ["Aina", "Maó"];
// const [nom, ciutat = "Alaior"] = dades;
// console.log(nom);
// console.log(ciutat);

// Intercanviar variables
// let a = 5;
// let b = 9;

// [a, b] = [b, a];
// console.log(a, b);

// Rest aplicat a Arrays ... Agrupar elements restants en un array
// const puntuaciones = [95, 88, 76, 70];
// const [millor, segon, ...rest] = puntuaciones;
// console.log(millor, segon, rest);

// Spread aplicat a Arrays ... EXPANDEIX
// const original = [3, 2, 7];
// const copia = [...original];
// console.log(copia);
// copia.sort((a, b) => a - b);
// console.log(copia);

// Combinar arrays
// const grupA = ["Aina", "Biel"];
// const grupB = ["Anna", "Yo"];

// const alumnat = [...grupA, ...grupB];
// console.log(alumnat);

// Pasar elements com a arguments
// const numeros = [5, 10, 15, 20];

// console.log(Math.max(...numeros));

// function sumar(...nums) {
//     return nums.reduce((total, num) => total + num, 0);
// }
// console.log(sumar(...numeros));

// Afaegir elements a un array sense modificar l'original
// const tasques = ["Estudiar", "Practicar"];
// const novesTasques = ["Planificar", ...tasques, "Revisar"];
// console.log(novesTasques);

// Objectes

// const alumne = {
//     nom: "Anna",
//     edat: 19,
//     curs: "DAW B",
//     centre: "Este",
//     "telefon mobil": 55555555555,
//     "delete" : 67
// };

// console.log(alumne["delete"]);
// console.log(alumne.nom);
// const propietat = "telefon mobil";
// console.log(alumne[propietat]);
// alumne.nom = "messi";
// console.log(alumne.nom);
// alumne.add = "add";
// console.log(alumne.add);
// delete alumne["delete"];
// console.log(alumne.delete);

// m = mostrar
// const compte = {
//     titular: "yo",
//     saldo: 30,
//     direccion: {
//         calle: "Aqui",
//         numero: 55
//     },
//     ingressar(quantitat){
//         this.saldo += quantitat;
//     },
//     mSaldo(){
//         console.log(this.titular, this.saldo);
//     },
//     mNom: () => {console.log(compte.titular)}
// }
// console.log(compte.saldo);
// compte.ingressar(20);
// compte.mSaldo();
// compte.mNom();

// r = referencia
// cambia a 
// const rCompte = compte;
// console.log(rCompte.titular);
// const copiaCompte = {...rCompte};
// console.log(compte.direccion.calle);
// const productes = [{nom: "teclado", preu: 20}, {nom: "ratolí", preu: 70}, {nom: "pantalla", preu: 100}];

// const preus = productes.filter(producte => producte.preu > 20);
// console.log(preus);

const persona = {
    nom: "Joana",
    edat: 33,   
};

const {nom, edat} = persona;
console.log(nom, edat);

const matricula = "1234ABC";
const model = "Seat";
const cotxe = {matricula, model};
console.log(cotxe);