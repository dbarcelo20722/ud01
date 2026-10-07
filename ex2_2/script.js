// 2.2.1
// let nota = 10;
// if (nota >= 0 && nota <=10){
//     if(nota >= 9){
//         console.log('Excel·lent');
//     } else if (nota >= 7){
//         console.log('Notable');
//     } else if (nota >= 5){
//         console.log('Bé');
//     } else {
//         console.log('Suspès');
//     }
// } else{
//     console.log('La nota no es valida (0-10)');
// }
// 2.2.2
// for(let i = 1; i<=30; i++){
//     if(i % 3 == 0 && i % 5==0){
//         console.log('FizzBuzz');
//     }else if(i % 3 == 0){
//         console.log('Fizz');
//     }else if(i % 5 == 0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }
// 2.2.3
const paraula = 'desayuno';
console.log(`Longitud: ${paraula.length}`);
console.log(`Primera lletra: ${paraula.charAt(0)}`);
console.log(`Darrera lletra: ${paraula.charAt(paraula.length -1)}`);
console.log(`Majuscules: ${paraula.toUpperCase()}`);
let nVocals = 0;
for(const lletra of paraula.toLowerCase()){
    if(lletra == 'a' || lletra == 'e' || lletra == 'i' || lletra == 'o' || lletra == 'u'){
        nVocals += 1;
    }
}
console.log(`Numero de vocals: ${nVocals}`);
// 2.2.4
const opcio = "crear";
switch (opcio) {
    case "crear":
        console.log("Has seleccionat crear");
        break;

    case "consultar":
        console.log("Has seleccionat consultar");
        break;

    case "modificar":
        console.log("Has seleccionat modificar");
        break;

    case "eliminar":
        console.log("Has seleccionat eliminar");
        break;

    default:
        console.log("Opció desconeguda");
}
// 2.2.5
let nomUsuari = "David_25";

nomUsuari = nomUsuari.trim();

let motiu = "";

if (nomUsuari.length < 4 || nomUsuari.length > 15) {
    motiu = "El nom ha de tenir entre 4 i 15 caràcters";
} else if (nomUsuari.includes(" ")) {
    motiu = "No pot contenir espais interiors";
} else {

    for (let i = 0; i < nomUsuari.length; i++) {
        const caracter = nomUsuari[i];

        if (
            !(
                (caracter >= "a" && caracter <= "z") ||
                (caracter >= "A" && caracter <= "Z") ||
                (caracter >= "0" && caracter <= "9") ||
                caracter === "-" ||
                caracter === "_"
            )
        ) {
            motiu = "Conté un caràcter no permès";
            break;
        }
    }
}

if (motiu === "") {
    console.log(`El nom "${nomUsuari}" és vàlid`);
} else {
    console.log(`El nom "${nomUsuari}" no és vàlid: ${motiu}`);
}