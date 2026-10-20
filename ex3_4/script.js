// 3.4.1 Muestra con "forEach" los elementos de un array de nombres precedidos por su posición.
const nombres = ['leiner', 'sergi', 'tebas', 'david', 'ignacio'];

nombres.forEach((n, i) => {
    console.log(`Posicion: ${i+1}, Nombre: ${n}`);
});

// 3.4.2 A partir de un array de precios, crea con "map" un nuevo array aplicando un descuento del 15 %.
const precios = [10, 20, 30, 40, 50];
const descuento = precios.map((precio) => {
    return precio - precio * 0.15;
});
console.log(descuento);

// 3.4.3 A partir de un array de palabras, conserva con "filter" aquellas que tengan cinco caracteres o más.
const palablas = ['leiner', 'sergi', 'tebas', 'david', 'ignacio', 'sol', 'esperanza', 'ana'];
const filtro = palablas.filter((palabra) => {
    return palabra.length>=5;
});
console.log(filtro);

// 3.4.4 Convierte un array de minutos en textos del tipo "2 h 15 min" mediante "map".
const minutos = [120, 200, 60, 20, 500, 139, 79];
const horasMin = minutos.map((min) => {
    return `${Math.floor(min / 60)} h ${min % 60} m`;
});
console.log(horasMin);

// 3.4.5 Encadena "filter" y "map" para obtener el cuadrado de todos los números positivos de un array.
const nums = [1, 2, 3, -2, 4, 5, 89, 33, -200, -4];
const finalNums = nums
                  .filter(num => num>0)
                  .map(num => num*num);
console.log(finalNums);

// 3.4.6 Pide una palabra y filtra todas las cadenas de un array que la contengan, ignorando mayúsculas y minúsculas.
const palabra = 'yo';
const frase = ['Hola yo', 'Yo soy yo', 'Tu erese tu', 'Hola tu'];
const conPalabra = frase.filter((p) => {
    return p.toLowerCase().includes(palabra.toLowerCase());
});
console.log(conPalabra);
