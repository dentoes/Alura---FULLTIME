let notaUm = Number(prompt('Digite sua primeira nota:'));
let notaDois = Number(prompt('Digite sua segunda nota:'));
let mediaFinal = (notaUm + notaDois) /2;

if (mediaFinal >= 6) {
    alert('Aprovado');
} else {
    alert('Reprovado');
}