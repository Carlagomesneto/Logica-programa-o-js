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
*`%`-> atribuição com resto da divisão
* `++` -> atribuição com **incremento 1**  (pode ser *pré* ou *pós* incremento ). Ex:`numero++` (pós-incremento) ou `++ numero` (pré-incremento)
* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decremento). Ex: `numero--` (pós-decremento) ou `--numero` (pré-decremento)



A palavra `const`é uktilizada para declaração de variáveis que são vão ser reatribuídas ( não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js

 
Em cada uma das operações, temos um operador aritmético :

*`+`-> soma 
*`-`-> subtração
*`*`-> multiplicação
*`/`-> divisão
*`%`-> resto da divisão