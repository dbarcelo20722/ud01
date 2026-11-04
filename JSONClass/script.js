// JSON: Javascript Object Notation

// Representar i intercaniar dades.

// {
//     {
//         "id": 5,
//         "nom": "Joan",
//         "preu": 10.3,
//         "disponible": true,
//         "etiquetes": ["audio", "bluetooth"],
//         "fabricant": null
//     }
    
// }

// JSON es un valor que existe en la memoria del navegador, JS admite con y sin comillas, en cambio JSON solo admite con comillas dobles. Comentarios

// Serializacion amb JSON.stringify

// const producte = {
//     id: 7,
//     nom: "Auriculars",
//     preu: 49.99,
// };

// const text = JSON.stringify(producte);
// // console.log(typeof text);
// // console.log(text);
// const textLlegible = JSON.stringify(producte, null, 2);
// // console.log(textLlegible);  

// const dada = {
//     nom: "Prova",
//     valor: undefined,
//     calcular() {return 10},
//     data: new Date("2026-11-03")
// };

// // console.log(JSON.stringify(dada));

// // Deserialisacion con JSON
// const nouProducte = '{ "id": 7,"nom": "Auriculars", "preu": 49.99}';

// console.log(esValid(nouProducte));

// try {
//     const p = JSON.parse(nouProducte);
//     console.log(p.nom);
// } catch (error) {
//     console.log("JSON no valid o incorrecte", error.message);
// }

// function esValid(p){
//     return p != null &&
//     typeof p === "object" &&
//     Number.isInteger(p.id) &&
//     typeof p.nom === "string" && p.nom.trim() !== "" &&
//     typeof p.preu === "number" && p.preu > 0;
// }

// Classes
class Producte {
    constructor(id, nom, preu, stock = 0) {

        if (!Number.isInteger(id)) throw new Error("L'id ha de ser un enter");
        if (!nom?.trim()) throw new Error("El nom no pot estar buit");
        if (preu <= 0 || stock < 0) throw new Error("Valors d'estock incorrectes");

        this.id = id;
        this.nom = nom;
        this.preu = preu;
        this.stock = stock;
    }

    hihaStock(unitats = 1) {
        return this.stock >= unitats;
    }

    valorStock() {
        return this.stock * this.preu;
    }

    get etiqueta() {
        return `${this.nom} - ${this.preu.toFixed(2)}€`;
    }

    static desDeProducte(){
        return new Producte(2, "Ratoli", 19.19, 8);
    }

}

// const teclat = new Producte(1, "Teclat", 29.99, 10);
// console.log(teclat.etiqueta);

// const ratoli = Producte.desDeProducte();
// console.log(ratoli.etiqueta);

const productes = [
    new Producte(1, "Teclat", 29.99, 10),
    new Producte(2, "Ratoli", 19.99, 8),
    new Producte(3, "Auriculars", 49.99, 5),
];

const text = JSON.stringify(productes);
const dades = JSON.parse(text);
console.log(text);
console.log(dades);
// objeto devuelve .
const nousProdectes = dades.map( (p) => {
    return Producte.desDeProducte(p);
});

console.log(nousProdectes);
console.log(nousProdectes[0].valorStock());
