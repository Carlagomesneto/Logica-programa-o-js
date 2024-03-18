 const temperatura = window.prompt(' Temperatura atual:');
 const escalaAtual = window.prompt(' Escolha a escala ataul F, C ou K');
 const conversao = window.prompt('Escolha a escala a ser convertida F, C ou K ');
 let calculo = e;

 if (escalaAtual==='C' && conversao === 'F') {
    calculo = (temperatura * 9/5) + 32
    window.alert('Celsuis para Fahrenheit: ${Calculo}ºF'); 
 }