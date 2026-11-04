// Crea una función importarProductos(textJSON) que devuelva un objeto
//                      { productos, errores }.
// El programa no debe interrumpirse si el texto es incorrecto.

// a. Captura los errores de sintaxis mediante try/catch.
// b. Comprueba que el elemento raíz sea un array.
// c. Valida cada registro: id entero y único, nombre no vacío, precio > 0 y stock entero ≥ 0.
// d. Convierte los registros válidos en instancias de Producto.
// e. Añade a errores la posición y el motivo por el que se ha descartado cada registro.
// f. Prueba la función con JSON mal formado, un elemento raíz que no sea un array, identificadores duplicados y valores límite.
const productos = `[
    {
        "id": 1,
        "nombre": "Teclado",
        "precio": 59.99,
        "stock": 15
    },
    {
        "id": 2,
        "nombre": "Raton",
        "precio": 39.99,
        "stock": 0
    }
]`;

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

function importarProductos(textJSON) {
    const p = [];
    const err = [];
    const ids = [];
    try {
        const j = JSON.parse(textJSON)
        if (!Array.isArray(j)){
            err.push('Elemento raiz no es un array');
        }else{
            j.forEach((pro, pos) => {
                let mError = false;
                if(!Number.isInteger(pro.id)){
                    err.push(`Error: La id no es numero entero, Posicion: ${pos}`);
                    mError = true;
                }
                if(ids.includes(pro.id)){
                    err.push(`Error: La id se repite, Posicion: ${pos}`);
                    mError = true;
                }
                if(pro.nombre.trim() === ""){
                    err.push(`Error: El nombre esta vacio, Posicion: ${pos}`);
                    mError = true;
                }
                if(pro.precio <= 0){
                    err.push(`Error: El precio es menor a 0, Posicion: ${pos}`);
                    mError = true;
                }
                if(!Number.isInteger(pro.stock) || pro.stock < 0){
                    err.push(`Error: El stock no es un entero o es menor a 0, Posicion: ${pos}`);
                    mError = true;
                }
                if(!mError){
                    p.push(new Producto(
                        pro.id,
                        pro.nombre,
                        pro.precio,
                        pro.stock,
                    ));
                }
                ids.push(pro.id);
            }); 
        }

        

    } catch (error) {
        err.push(error.message);
    }
    return {
        productos: p,
        errores: err
    };
};

// Pruebas
console.log(importarProductos(productos));

// JSON mal formado
console.log(importarProductos('[{"id": 1,'));

// El elemento raíz no es un array
console.log(importarProductos('{"id": 1, "nombre": "Teclado"}'));

// IDs duplicados
console.log(importarProductos(`[
    {"id": 1, "nombre": "Teclado", "precio": 20, "stock": 5},
    {"id": 1, "nombre": "Ratón", "precio": 30, "stock": 2}
]`));

// Valores límite
console.log(importarProductos(`[
    {"id": 1, "nombre": "Producto", "precio": 0.01, "stock": 0},
    {"id": 2, "nombre": "   ", "precio": 10, "stock": 5},
    {"id": 3, "nombre": "Producto 3", "precio": 10, "stock": -1}
]`));