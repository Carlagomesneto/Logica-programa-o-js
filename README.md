# Logica-programa-o-js
Treinando a lógica de programação com JavaScript

## operadores-aritmeticos.js 

~~~~js
let numero = 10;
~~~~

~~~js
const numero1 = 40;
const numero2 = 20;

~~~

Declaramos a variável `numero` usando a palavra `let`, pois essa
variável será **reatribuída** ao longodo nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores
de atribuição.

~~~js
console.log (`O numero é inicialmente: ${numero}`);
console.log(`Após atribuir somando 10: ${numero+= 10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicação por 10: ${numero *=10}`);
console.log(`Reatribuindo e dividindo por 10: ${numero/=10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %=10}`);
console.log(`O numero final é igual a ${numero}`);
console.log(`Incrementando o número em 1: ${++numero}`);
console,log(`crementando o número em 1: ${--numero}`);
~~~


Operadores de atribuição:

*`+`-> atribuição com soma 
*`-`-> atribuição com subtração
*`*`-> atribuição com multiplicação
*`/`-> atribuição com divisão
*`%=`-> atribuição com resto da divisão
* `++` -> atribuição com **incremento 1**  (pode ser *pré* ou *pós* incremento ). Ex:`numero++` (pós-incremento) ou `++ numero` (pré-incremento).
* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decremento). Ex: `numero--` (pós-decremento) ou `--numero` (pré-decremento).

## operadores-comparacao.js

Nesta arquivo conhecemos os operadores de comparação e a estrutura lógica de decisão **if-else**.

~~~js
if (condicao) {
    console.log(`VERDADEIRO`);
} else {
    console.log(`FALSO`);
}
~~~

Esta estrutura exibe no console se a condição testada é `true` (verdadeira) ou `false` (falsa). A condição armazena o resulatado da **comparação entre duas variáveis**, como segue:

~~~js

const a  = 'a', b = 'A';
const condicao = a == b;
~~~

### Opeadores de comparação:

* `==` -> é igual
* `!=` -> não é igual
* `>` -> maior que
* `<` -> menor que
* `>=` -> maior OU igual
* `<=` -> menor OU igual
* `===` -> é estritamente igual (valor **E** tipo)
* `!==` -> não e estritamente igual(valor **OU** tipo)





A palavra `const`é uktilizada para declaração de variáveis que são vão ser reatribuídas ( não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js

 
Em cada uma das operações, temos um operador aritmético :

*`+`-> soma 
*`-`-> subtração
*`*`-> multiplicação
*`/`-> divisão
*`%`-> resto da divisão



Escreva uma código em JavaScript que resolva o problema  descrito no 
livro **Lógica de Programação I, p.20**, em que temos que obter as
 3 notas de um aluno, calcular a média e exibir se o aluno foi
 aprovado, reprovado ou se ficou para exame. Não é necessário ler as notas,
 você pode defini-las com variáveis.

 Você precisará utlilizaruma estrutura de decisão composta, como a seguir:

~~~js
if(condicao1) {
    // código da condição 1 
} else if (condicao2) {
    //código da condi
}
else {
    // código se nenhum das condições for verdadeira
}
~~~




 


# Fórmula 

De      | Para | Fórmula
    --- |  ----|--- 
Celsuis | Fahrenheit | tF= (tC * 9/5) + 32
Celsuis | Kelvin     | tK= tC - 273.15
Fahrenheit | Celsuis | tºC = (tF - 32)*5/9
Fahrenheit | kelvin  | tK = (tF + 459.76)*5/9
Kelvin     | Celsuis | tC = tK + 273.15
kevin      | Fahrenheit | tF = tk * 9/5 - 459.67

Problema adicional 

Como executa dois "programa" na mesma página?







# Fórmula







 



