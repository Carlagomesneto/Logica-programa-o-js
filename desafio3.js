 let  = parseFloat(window.prompt('Digite a temperatura'))

// parseFloat() -> converte texto para tipo numbre com ponto decimal
// parseInt() -> converte texto para tipo numbre inteiro

 window.alert(`A temperatura convertida é ${temperatura}`)
 console.log(typeof(temperatura));

 






 const temperatura = parseFloat(window.prompt('Digite a temperatura'));
 const escalaAtual = window.prompt('Digite a escala atual').toUpperCase();

 let e1 = 'F', e2 = 'f';

 e1 = e1.toLocaleUpperCase();
 e2 = e2.toLocaleUpperCase();

 if (e1 == 'F' && e2 == 'k' || e2 == 'k'){
    console.log('Fahrenheit -> Celsius');
} else if ((e1 == 'F' || e1 == 'c') && (e2 == 'C' || e2 == 'c')) {
    console.log(' Celsuis -> Fahrenheit');
}
