const num = 20;


if(!num || num < 0 || !Number.isInteger(num)){
    console.log('Numero no valid');
} else{
    document.getElementById('num').textContent = `Analisis del numero ${num}`;
    esPar(num);
    esPrimo(num);
    divisoresPropios(num);
    console.log(sumaDivisoresPropios(num));
    clasificarNumero(num);
};


function esPar(num) { 
    if(num % 2 === 0){
        return document.getElementById('par').textContent = 'Es par';
    }else {
        return document.getElementById('par').textContent = 'Es impar';
    }
}

function esPrimo(num) { 
    for(let n = num-1 ; n > 1; n--){
        if(num % n === 0){
            return document.getElementById('primo').textContent = 'No es primo';
        }
    };
    return document.getElementById('primo').textContent = 'Es primo';

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

    return document.getElementById('divisores').textContent = `Divisores primos: ${divisores.trim()}`;
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

    return document.getElementById('suma').textContent = `Suma de divisores propios: ${divisores}`;
} 

function clasificarNumero(num) { 
    if(sumaDivisoresPropios(num)==num) {
        return document.getElementById('clasificacion').textContent = `El numero ${num} es perfecto`;
    } else if(sumaDivisoresPropios(num)>num) {
        return document.getElementById('clasificacion').textContent = `El numero ${num} es abundante`;
    }else {
        return document.getElementById('clasificacion').textContent = `El numero ${num} es deficiente`;
    };
} 
