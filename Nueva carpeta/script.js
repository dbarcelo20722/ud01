let paraula = 'desayúnàeí höla AAÁ';
paraula = paraula.trim();
console.log(`Longitud: ${paraula.length}`);
let nVocals = 0;
let nAccents = 0;
for(const lletra of paraula.toLowerCase()){
    if(lletra == 'a' || lletra == 'e' || lletra == 'i' || lletra == 'o' || lletra == 'u'){
        nVocals += 1;
    }
    if(lletra == 'à' || lletra == 'è' || lletra == 'ì' || lletra == 'ò' || lletra == 'ú'){
        nVocals += 1;
        nAccents += 1;
    }
    if(lletra == 'á' || lletra == 'é' || lletra == 'í' || lletra == 'ó' || lletra == 'ú'){
        nVocals += 1;
        nAccents += 1;
    }
    if(lletra == 'ä' || lletra == 'ë' || lletra == 'ï' || lletra == 'ö' || lletra == 'ü'){
        nVocals += 1;
        nAccents += 1;
    }
}
console.log(`Numero de vocals: ${nVocals}`);
console.log(`Numero d'accens: ${nAccents}`);
if(paraula.length >= 15){
    console.log("Es un text llarg");
} else{
    console.log("Es un text curt");
}