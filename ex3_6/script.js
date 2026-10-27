// 3.6.1 Desestructura un array con nombre, primer apellido y segundo apellido. Asigna un valor predeterminado al segundo apellido.
const  yo = ["David", "Barcelo"];
const [nom, apellido1, apellido2 = "Marchena"] = yo;
console.log(nom, apellido1, apellido2);

// 3.6.2 Separa el primer elemento de un array y guarda el resto mediante rest.
const nums = [1, 2, 3, 4, 5];
const [primerN, ...resto] = nums;
console.log('Primer numero: ', primerN);
console.log('Resto: ', resto);

// 3.6.3 Combina dos arrays y añade un elemento al principio y otro al final utilizando spread.
const grupA = ["Aina", "Biel"];
const grupB = ["Anna", "Yo"];
const alumnat = ['Yo', ...grupA, ...grupB, 'Tu'];
console.log(alumnat);

// 3.6.4 Crea un objeto libro con título, autor, páginas y un método resumen() que muestre una frase descriptiva.
const libro = {
    titulo: "Yo",
    autor: "Messi",
    paginas: 33,
    resumen(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nPaginas: ${this.paginas}`);
    },
}
libro.resumen();

// 3.6.5 Crea un objeto contador con una propiedad valor y los métodos incrementar(), decrementar() y mostrar().
const contador = {
    valor: 0,
    incrementar(){
        this.valor++;
    },
    decrementar(){
        this.valor--;
    },
    mostrar(){
        console.log(this.valor);
    }
}
contador.mostrar();
contador.incrementar();
contador.incrementar();
contador.mostrar();
contador.decrementar();
contador.mostrar();

// 3.6.6 Copia un producto utilizando spread, modifica su precio y comprueba que el original no se ha modificado.
const original = {
    nom: "teclado", 
    preu: 20
}
const copia = {...original};
copia.preu = 300;
console.log(original);
console.log(copia);