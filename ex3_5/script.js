// 3.5.1 Utiliza find para obtener la primera temperatura inferior a cero y controla el caso en el que no exista.
const temperaturas = [20, 30, 40, -1, 0, -2, 33];
const menosZero = temperaturas.find(temp => temp<0);
console.log(menosZero);

// 3.5.2 Comprueba con some si un array contiene algún múltiplo de 5.
const nums = [11, 22, 33, 44, 55];
const multiplo = nums.some(num => num%5===0);
console.log(`Multiplo de 5: ${multiplo}`);

// 3.5.3 Comprueba con every si todas las contraseñas de un array tienen al menos ocho caracteres.
const pwd = ['12345678', '321321321', '88888888', 'fdsh9fhç-fklsdhg'];
const ocho = pwd.every(p => p.length>=8);
console.log(`Las contraseñas tienen minimo 8 caracteres: ${ocho}`);

// 3.5.4 Calcula con reduce el total y la media de un array de gastos.
const gastos = [100, 120, 200, 33, 25];
const total = gastos.reduce((acum, gasto) => acum + gasto);
console.log(`Total: ${total}, Media:${total/gastos.length}`); 

// 3.5.5 Ordena una copia de un array de números de mayor a menor sin modificar el original.


// 3.5.6 A partir de un array de palabras, encuentra la primera que empiece por vocal, comprueba si todas tienen contenido y calcula el número total de caracteres.