function calculaIMC() {
    function calculaIMC(peso, altura) {
    const
        peso = window.prompt('Digite seu peso:'),
        altura = window.prompt('Digite sua altura:'),
        imc = peso / altura ** 2;
    const imc = peso / altura ** 2;
     let mensagem;

        if (peso / altura ** 2 < 18.5) {
            window.alert(`IMC: ${(peso / altura ** 2).toFixed(1)} --> Abaixo do peso`);
            mensagem = `IMC: ${(peso / altura ** 2).toFixed(1)} --> Abaixo do peso`;

        } else if (peso / altura ** 2 < 25) {
            window.alert(`IMC: ${(peso / altura ** 2).toFixed(1)} --> Peso normal`);
            mensagem = `IMC: ${(peso / altura ** 2).toFixed(1)} --> Peso normal`;

        } else if (peso / altura ** 2 < 30) {
            window.alert(`IMC: ${(peso / altura ** 2).toFixed(1)} --> Sobrepeso`);
            mensagem = `IMC: ${(peso / altura ** 2).toFixed(1)} --> Sobrepeso`;

        } else if (peso / altura ** 2 < 35) {
            window.alert(`IMC: ${(peso / altura ** 2).toFixed(1)} --> Obesidade grau I`);
            mensagem = `IMC: ${(peso / altura ** 2).toFixed(1)} --> Obesidade grau I`;

        } else if (peso / altura ** 2 < 40) {
            window.alert(`IMC: ${(peso / altura ** 2).toFixed(1)} --> Obesidade grau II`);
            mensagem = `IMC: ${(peso / altura ** 2).toFixed(1)} --> Obesidade grau II`;

        } else {
            window.alert(`IMC: ${(peso / altura ** 2).toFixed(1)} --> Obesidade grau III`);
            mensagem = `IMC: ${(peso / altura ** 2).toFixed(1)} --> Obesidade grau III`;
        }

        return mensagem;

    }

}
