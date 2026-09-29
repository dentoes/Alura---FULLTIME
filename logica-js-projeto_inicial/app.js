alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt (`escolha um número de 1 a ${numeroMaximo}`);
    // se chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }

    tentativas++;
    }
 }

 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

 //if (tentativas > 1) {
    //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
 //} else {
    //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
 //}