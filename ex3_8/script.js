// a. Define titular y saldo inicial en el constructor; valida los datos.
// b. Implementa los métodos ingresar, retirar y transferirA(otraCuenta, importe).
// c. Impide importes no positivos y retiradas sin saldo suficiente.
// d. Añade un getter resumen y un método toJSON que devuelva únicamente los datos que quieras serializar.
// e. Crea tres cuentas, realiza operaciones y calcula el saldo total utilizando reduce.
// f. Serializa las cuentas y reconstruye los objetos mediante un método estático desdeObjeto.
class cuenta{
    constructor(titular, saldo){
        if(typeof titular !== "string" || titular.trim() === ""){
            throw new Error ("El titular no es un string o es un string vacio");
        }else{
            this.titular = titular;
        }
        if(typeof saldo !== "number" || saldo < 0){
            throw new Error ("El saldo no es un numero o es menor que 0");
        }else{
            this.saldo = saldo;
        }
    }

    ingresar(cantidad){
        return this.saldo += cantidad;
    }

    retirar(cantidad){
        if(cantidad > this.saldo){
            throw new Error ("La cantidad a retirar es mayor que el saldo");
        }
        else{
            return this.saldo -= cantidad;
        }
    }
    
    transferir(nCuenta, importe){
        if(importe < 0 || importe > this.saldo){
            throw new Error ("El importe no es positivo o la cantidad es mayor que el saldo");
        }
        else{
            this.saldo -= importe;
            return nCuenta.saldo += importe;
        }
    }

    get resum(){
        return `Titular: ${this.titular} - Saldo: ${this.saldo}`;
    }

    toJSON(){
        const json = {titular: this.titular, saldo: this.saldo};
        return JSON.stringify(json);
    }
}
const c1 = new cuenta("David", 1000);
const c2 = new cuenta("Leiner", 0);
const c3 = new cuenta("Sergi", 200);

console.log(c1.ingresar(200));
console.log(c3.retirar(100));
console.log(c1.transferir(c2, 300));

console.log(c1);
console.log(c2);
console.log(c3);

let total

