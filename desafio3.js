document.querySelector('#btCalcIMC').addEventListener('click', function () {
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const imc = calculaIMC(peso, altura);
    console.log(imc);

    // (parte de dentro do HTML) -> innerHTML

    document.querySelector('#resultadoIMC').innerHTML = imc;

});
document.querySelector('#btLimpaIMC').addEventListener('click', function () {
    document.querySelector('#resultadoIMC').innerHTML = '';

});
// Fim desafio 2

// Início Desafio 3

document.querySelector('#btConverteTemp').addEventListener('click', function () {

    const temperaturaAtual = document.querySelector('#valorTemperatura').value; 
    const escalaAtual = document.querySelector('#escalaAtual').value;
    const escalaConvertida = document.querySelector('#escalaConvertida').value;
    const conversao = converteTemperatura(temperaturaAtual, escalaAtual, escalaConvertida);
    document.querySelector('#resultadoTemp').innerHTML = `Temperatura convertida: ${conversao.temperaturaConvertida + conversao.escalaConversao}`;
});

document.querySelector('#btLimpaTemp').addEventListener('click', function () {
    document.querySelector('#resultadoTemp').innerHTML = `Temperatura convertida: ${conversao.
        temperaturaConvertida + conversao.escalaConversao}`;

});

// Fim Desafio 3


// incio Desafio 3

const A = A < (ladoB + ladoC)
const B = B < (ladoA + ladoC)
const C = C < (ladoA + ladoB)

if ( B< )




// desafio Desconto Funcionário
