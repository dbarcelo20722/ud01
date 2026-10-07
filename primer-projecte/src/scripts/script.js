//
/*
    CONCEPTES
    windows     windows.location.href
    document    documento html que se carga en la ventana document.title
    iframe      <iframe src="pagina2.html"/>
    window.open abre otra ventana window.open(url, nom)
    opener      referencia de la ventana que habrio otra ventana

*/

// console.log(window.location.href);
// console.log(document.title);
const obrir = document.getElementById('obrir');
// console.log(obrir);
obrir.addEventListener('click', ()=> {
    const finestra = window.open('../ayuda.html', 'Ajuda', 'width=500, height=500');

    if(!finestra) {
      console.warn('El navegador a bloquetjat la finestra emergent');  
    }
});