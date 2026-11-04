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

// const persona = {
//     nom: "Joana",
//     edat: 33,   
// };

// const {nom, edat} = persona;
// console.log(nom, edat);

// const matricula = "1234ABC";
// const model = "Seat";
// const cotxe = {matricula, model};
// console.log(cotxe);
const productes = [
    {id: 1, nom: "Teclat", preu: 99.99, stock: 8, category: "Periferic"},
    {id: 2, nom: "Ratoli", preu: 39.99, stock: 7, category: "Pantalla"},
    {id: 3, nom: "Monitor", preu: 149.99, stock: 0, category: "Periferic"}
]
// console.log(productes[0].nom);
// Ultim element
// console.log(productes.at(-1).nom);

// Recorrer i desestructurar
// for(const{ nom, preu, stock} of productes){
//     const estat = stock > 0 ? "disponible" : "agotado";
//     console.log(`${nom}: ${preu.toFixed(2)}€ - ${estat}`);
// }

// const disponibles = productes.filter(p => p.stock > 0);
// const etiquetes = productes.map(({nom, preu}) => `${nom} - ${preu}`);
// const dos = productes.find(p => p.category === 'Periferic');
// const nose = productes.every(p => p.preu >= 0 && p.stock >= 0);
// const final = productes.reduce((a, p) =>{return a+=p.stock},0);
// console.log(final);

// Encadenar operacions
const aparadors = productes
    .filter(p => p.stock > 0)
    .toSorted((a, b) => a.preu - b.preu)
    .map(({nom, preu}) => ({nom, preuAmbIVA: preu * 1.21}));
// console.log(aparadors);

// Referencies i Mutacions
// Operacions que muten
// 1. push, pop, shift, unshift
// 2. splice 
// 3. sort, reverse
// 4. obj.prop = valor

// Alternatives que no muten
// 1. concat, slice, concat
// 2. slice, filter, toSpliced
// 3. toSorted, toReversed
// 4. {...obj, prop: valor}

// Patrons d'Actualització Inmutable
// Afegir i eliminar
// const nou = {id: 4, nom: "Webcam", preu: 49.99, stock: 5};
// const ampliats = [...productes, nou];
// console.log(ampliats);

// Actualitzar
function actualitzarStock(llista, id, nouStock){
    return llista.map(p => p.id === id ? {...p, stock: nouStock} : p);
}
const actualitzats = actualitzarStock(productes, 2, 10);
// console.log(actualitzats);
// console.log(productes);

// Copia superficial i dades imbricades
const usuaris = {
    nom: "Anna",
    contacte: {
        correu: "anna@gmail.com",
        ciutat: "Maó"
    }
}

const usuarisActualitzats = {
    ...usuaris,
    contacte: {
        ...usuaris.contacte,
        ciutat: "Alaior"
    }
}
console.log(usuarisActualitzats);
console.log(usuaris);