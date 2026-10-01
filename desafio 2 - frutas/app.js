let frutas = ['maçã', 'banana', 'morango', 'uva'];

function mostraLista() {
    let texto = '';
    texto = texto + frutas[0] + '<br>';
    texto = texto + frutas[1] + '<br>';
    texto = texto + frutas[2] + '<br>';
    texto = texto + frutas[3] 

    document.querySelector('#listaDeFrutas').innerHTML = texto;
}