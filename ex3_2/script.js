
// fvariable es igual a form_variable
// cvariable es igual a respuesta de true o false si esta bien la hora
let regex = /^([01]\d|2[0-3]):[0-5]\d$/;

// Hora entrada
let fentrada = document.getElementById("entrada");
let entrada = fentrada.value.trim();

if(entrada == ''){
    document.getElementById('centrada').textContent = ``;
}else if (!esHoraValida(entrada)){
    document.getElementById('centrada').textContent = `La hora de entrada esta mal`;
}else{
    document.getElementById('centrada').textContent = ``;
}

fentrada.addEventListener('input', ()=>{
    entrada = fentrada.value.trim();

    if(entrada == ''){
        document.getElementById('centrada').textContent = ``;
    }else if (!esHoraValida(entrada)){
        document.getElementById('centrada').textContent = `La hora de entrada esta mal`;
    }else{
        document.getElementById('centrada').textContent = ``;
    }
});

// Hora salida
let fsalida = document.getElementById("salida");
let salida = fsalida.value.trim();

if(salida == ''){
    document.getElementById('csalida').textContent = ``;
}else if (!esHoraValida(salida)){
    document.getElementById('csalida').textContent = `La hora de salida esta mal`;
}else{
    document.getElementById('csalida').textContent = ``;
}

fsalida.addEventListener('input', ()=>{
    salida = fsalida.value.trim();

    if(salida == ''){
        document.getElementById('csalida').textContent = ``;
    }else if (!esHoraValida(salida)){
        document.getElementById('csalida').textContent = `La hora de salida esta mal`;
    }else{
        document.getElementById('csalida').textContent = ``;
    }
});

// Descuento
let fdescuento = document.getElementById("descuento");
let descuento = fdescuento.value;

fdescuento.addEventListener('input', ()=>{
    descuento = fdescuento.value;
});

// Resumen
fentrada.addEventListener('input', comprobarHoras);
fsalida.addEventListener('input', comprobarHoras);
fdescuento.addEventListener('change', comprobarHoras);

function comprobarHoras() {
    entrada = fentrada.value.trim();
    salida = fsalida.value.trim();
    descuento = fdescuento.value;

    let resumen = document.getElementById('resumen');

    if (entrada == '' || salida == ''){
        resumen.textContent = ``;
        return;
    }

    if (!esHoraValida(entrada) || !esHoraValida(salida)){
        resumen.textContent = ``;
        return;
    }

    let minuts = calcularDurada(entrada, salida);
    let importeBase = calcularImporteBase(minuts);
    let importeFinal;

    if(descuento == '1'){
        importeFinal = calcularImporteFinal(importeBase, sinDescuento);
    }else if(descuento == '2'){
        importeFinal = calcularImporteFinal(importeBase, descuentoElectrico);
    }else if(descuento == '3'){
        importeFinal = calcularImporteFinal(importeBase, descuentoResidente);
    }

    let importeDescuento = importeBase - importeFinal;

    let textoDescuento = '';

    if(descuento == '1'){
        textoDescuento = 'Sin descuento';
    }else if(descuento == '2'){
        textoDescuento = 'Descuento vehículo eléctrico';
    }else if(descuento == '3'){
        textoDescuento = 'Descuento residente';
    }

    resumen.innerHTML =
        `Entrada: ${entrada}<br>` +
        `Salida: ${salida}<br>` +
        `Duración: ${formatoDurada(minuts)}<br>` +
        `Importe base: ${importeBase.toFixed(2)} €<br>` +
        `${textoDescuento}: ${importeDescuento.toFixed(2)} €<br>` +
        `TOTAL: ${importeFinal.toFixed(2)} €`;
}

// Descuentos
function sinDescuento(importeBase) {
    return importeBase;
}

function descuentoElectrico(importeBase) {
    return importeBase * 0.80;
}

function descuentoResidente(importeBase) {
    return importeBase * 0.70;
}

function calcularImporteFinal(importeBase, aplicarDescuento) {
    // Executa el callback rebut
    return aplicarDescuento(importeBase);
}

function esHoraValida(hora) {
    if(regex.test(hora)){
        return true;
    }else{
        return false;
    }
}

function convertirAMinutos(hora) {
    let mHores = Number(hora.substring(0,2)) * 60;
    let minuts = Number(hora.substring(3,5));

    return mHores + minuts;
}

function calcularDurada(entrada, sortida) {
    let mEntrada = convertirAMinutos(entrada);
    let mSortida = convertirAMinutos(sortida);
    let durada = mSortida - mEntrada;

    if(durada < 0){
        durada = durada + 24 * 60;
    }

    return durada;
}

function calcularImporteBase(minuts) {
    let importe = 0;

    if(minuts <= 30){
        importe = 0;
    }else if(minuts <= 120){
        importe = (minuts - 30) * 0.03;
    }else if(minuts <= 300){
        importe = (90 * 0.03) + ((minuts - 120) * 0.02);
    }else{
        importe = (90 * 0.03) + (180 * 0.02) + ((minuts - 300) * 0.01);
    }

    if(importe > 18){
        importe = 18;
    }

    return importe;
}

function formatoDurada(minuts) {
    let hores = Math.floor(minuts / 60);
    let restaMinuts = minuts % 60;

    return `${hores} h i ${restaMinuts} min`;
}