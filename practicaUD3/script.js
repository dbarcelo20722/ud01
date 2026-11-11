// Requisits obligatoris

// Fases
// 1. Definiu i proveu LiniaComanda amb casos normals i incorrectes.
// 2. Definiu Comanda i comproveu els càlculs amb reduce.
// 3. Importeu el text inicial i reconstruïu instàncies.
// 4. Implementeu les operacions immutables una a una.
// 5. Genereu els informes amb map, filter, find, reduce i ordenació.
// 6. Exporteu, torneu a importar i verifiqueu que es conserven dades i comportament.

// Resultats de comprovació
// ● La comanda 101 suma 104,40 € i 3 unitats.
// ● La comanda 102 suma 189,90 € i és la més cara.
// ● La facturació total inicial és 294,30 €.
// ● L’array inicial no canvia després de canviar l’estat d’una comanda.
// ● Després d’exportar i importar, cada element torna a ser instanceof Comanda.

const textInicial = '[{"id":101,"client":"Aina","estat":"pendent","linies":[{"producte":"Teclat","preu":39.95,"quantitat":2}, {"producte":"Ratolí","preu":24.5,"quantitat":1}]}, {"id":102,"client":"Biel","estat":"enviada","linies":[{"producte":"Monitor","preu":189.9,"quantitat":1}]}]';

// ● Classe LiniaComanda amb producte, preu i quantitat; mètode subtotal().
// ● Mètodes estàtics desDeObjecte per reconstruir totes les instàncies imbricades.
class LiniaComanda {
    constructor(producte, preu, quantitat){
        if (typeof producte !== "string" || producte.trim() === "") throw new Error("El producte no es valid o esta buit");
        else this.producte = producte;
        if (typeof preu !== "number" || preu <= 0) throw new Error("El preu no es un numero es menor a 0");
        else this.preu = preu;
        if(typeof quantitat !== "number" || !Number.isInteger(quantitat) || quantitat < 1) throw new Error("La quantitat no es un numero es menor a 1");
        else this.quantitat = quantitat;
    }

    subtotal(){
        return this.preu * this.quantitat;
    }

    static desDeObject(l){
        return new LiniaComanda(l.producte, l.preu, l.quantitat);
    }
}

// ● Classe Comanda amb id, client, estat i línies; mètodes total(), totalUnitats() i resum().
// ● Mètodes estàtics desDeObjecte per reconstruir totes les instàncies imbricades.
class Comanda{
    constructor(id, client, estat, linies){
        if (typeof id !== "number" || !Number.isInteger(id) || id < 1) throw new Error("El id no es valid");
        else this.id = id;
        if (typeof client !== "string" || client.trim() === "") throw new Error("El client no es valid o esta buit");
        else this.client = client;
        if (typeof estat !== "string" || estat.trim() === "") throw new Error("El estat no es valid o esta buit");
        else this.estat = estat;
        if (!Array.isArray(linies) || !linies.every(l => l instanceof LiniaComanda)) throw new Error("Les linies no son valides");
        else this.linies = linies;
    }

    total(){
        return this.linies.reduce((acum, l) => acum + (l.preu * l.quantitat), 0);
    }

    totalUnitats(){
        return this.linies.reduce((acum, l) => acum + l.quantitat, 0);
    }

    resum(){
        let ls = this.linies.map(l => `Producte: ${l.producte}, Preu: ${l.preu} €, Quantitat: ${l.quantitat} , Subtotal: ${l.subtotal()}\n`);
        return `Comanda: ${this.id}\nClient: ${this.client}\nEstat: ${this.estat}\nLinies: ${ls.join("")}\nTotal: ${this.total()} €`;
    }
    
    static desDeObject(c){
        return new Comanda(
            c.id,
            c.client,
            c.estat,
            c.linies.map(l => LiniaComanda.desDeObject(l))
        );
    }
}
const errors = [];
const comandes = importarComandes(textInicial);
// ● Funció importarComandes(text): parse segur, validació i missatges d’error.
function importarComandes(text){
    let parseTxt;

    try{
        parseTxt = JSON.parse(text); 
    }catch(error){
        errors.push('El text no es un JSON valid');
        return [];
    }

    if(!Array.isArray(parseTxt)){
       errors.push('La comanda no es una array');
       return [];
    }

    const comandesImportades = [];
    const ids = [];

    parseTxt.forEach((c, i) => {
        try {
            if (ids.includes(c.id)) {
                throw new Error(`L'id ${c.id} esta repetit`);
            }
            const comanda = Comanda.desDeObject(c);
            comandesImportades.push(comanda);
            ids.push(c.id);
        } catch(error) {
            errors.push(`Comanda ${i + 1}: ${error.message}`);
        }
    });
    return comandesImportades;
}

// ● afegirComanda, eliminarComanda i canviarEstat han de retornar arrays nous.
function afegirComandes(comandes, c){
    if(!(c instanceof Comanda)){
        errors.push('No pots afegir una comanda que no es comanda');
        return comandes;
    }

    return [...comandes, c];
}

function eliminarComanda(comandes, cId){
    if(cId < 1){
        errors.push('L\id no pot ser menor a 1');
        return comandes;
    }

    if (!comandes.some(c => c.id === cId)) {
        errors.push("No s'ha trobat l'id");
        return comandes;
    }

    return comandes.filter(c => c.id !== cId);
}

function cambiarEstat(comandes, cEstat, cId){
    if(typeof cEstat !== "string" || cEstat.trim() === "" || !Number.isInteger(cId) || cId < 1){
        errors.push('L\'id no pot ser menor a 1');
    }

    if (!comandes.some(c => c.id === cId)) {
        errors.push("No s'ha trobat l'id");
        return comandes;
    }

    return comandes.map(c => {
        if (c.id === cId) {
            return new Comanda(c.id, c.client, cEstat, c.linies);
        }
        return c;
    });
}

// ● Cerca per client, filtre per estat i ordenació per total sense mutar l’original.

function cercarClient(comandes, client){
    return comandes.find(c => c.client.toLowerCase() === client.toLowerCase());
}

function filtrarEstat(comandes, estat){
    return comandes.filter(c => c.estat === estat);
}

function ordenarTotal(comandes){
    return [...comandes].sort((a, b) => b.total() - a.total());
}

// ● Informe amb facturació total, comanda més cara, nombre de comandes per estat i productes venuts.
function facturacioTotal(comandes){
    return comandes.reduce((acum, c) => acum + c.total(), 0);
}

function comandaMesCara(comandes){
    return comandes.reduce((mesCara, c) => {
        return c.total() > mesCara.total() ? c : mesCara;
    });
}

function comandesPerEstat(comandes){
    return comandes.reduce((acum, c) => {
        acum[c.estat] = (acum[c.estat] || 0) + 1;
        return acum;
    }, {});
}

function productesVenuts(comandes){
    return comandes.reduce((acum, c) => {
        c.linies.forEach(l => {
            acum[l.producte] = (acum[l.producte] || 0) + l.quantitat;
        });
        return acum;
    }, {});
}
// ● Exportació final amb JSON.stringify(..., null, 2).
function exportarComandes(comandes){
    return JSON.stringify(comandes, null, 2);
}
const textExportat = exportarComandes(comandes);

const comandesImportades = importarComandes(textExportat);

console.log("Total comanda 101:", comandes[0].total());

console.log("Unitats comanda 101:", comandes[0].totalUnitats());

console.log("Total comanda 102:", comandes[1].total());

console.log("Facturació total:", facturacioTotal(comandes));

console.log("Comanda més cara:", comandaMesCara(comandes).id);

console.log("Comandes per estat:", comandesPerEstat(comandes));

console.log("Productes venuts:", productesVenuts(comandes));

console.log("Cerca Aina:", cercarClient(comandes, "Aina"));

console.log("Comandes pendents:", filtrarEstat(comandes, "pendent"));

console.log("Ordenades per total:", ordenarTotal(comandes));

console.log("Són instàncies de Comanda:", comandesImportades.every(c => c instanceof Comanda));

console.log("Errors:", errors);