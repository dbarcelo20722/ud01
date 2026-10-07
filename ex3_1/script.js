const num = 20;


if(!num || num < 0 || !Number.isInteger(num)){
    console.log('Numero no valid');
} else{
    console.log(`ANALISIS DEL NUMERO ${num}`);
    esPar(num);
    esPrimo(num);
    divisoresPropios(num);
    console.log(sumaDivisoresPropios(num));
    clasificarNumero(num);
};


function esPar(num) { 
    if(num % 2 === 0){
        return console.log('Es par');
    }else {
        return console.log('Es inpar');
    }
}

function esPrimo(num) { 
    for(let n = num-1 ; n > 1; n--){
        if(num % n === 0){
            return console.log('No es primo');
        }
    };
    return console.log('Es primo');
}
function divisoresPropios(num) {
    let divisores = '';
    let n = 1;

    do {
        if (num % n === 0) {
            divisores += `${n} `;
        }

        n++;
    } while (n < num);

    return console.log(divisores.trim());
}

function sumaDivisoresPropios(num) { 
    let divisores = 0;
    let n = 1;

    do {
        if (num % n === 0) {
            divisores += n;
        }

        n++;
    } while (n < num);

    return divisores;
} 

function clasificarNumero(num) { 
    if(sumaDivisoresPropios(num)==num) {
        return console.log('Perfecto');
    } else if(sumaDivisoresPropios(num)>num) {
        return console.log('Abundante');
    }else {
        return console.log('Deficiente');
    };
} 
