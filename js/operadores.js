function operadores () {

    /**
     * Operadores Aritméticos
     *  = -> sinal de atribuição de valor a uma variavel
     *  + -> sinal de soma p/ variáveis numéricas ou concatenação p/ variaveis string
     *  - -> sinal de subtração p/ variáveis numéricas
     *  * -> sinal de multiplicação p/ variáveis numéricas
     *  / -> sinal de divisão p/ variáveis numéricas
     *  % -> sinal de restante de uma divisão
     *  
     * Operadores de Incremento e Decremento
     *  ++ -> acompanhado de uma variavel numérica inteira é p/ incrementar 1 a variável
     *  -- -> acompanhado de uma variável numérica inteira é p/ decrementar 1 a variável
     * 
     *  Operadores de Atribuição
     *  += -> Soma o valor à direita ao valor da variável à esquerda e retorna o novo valor da variável e concatenação p/ variável string
     *  -= -> Subtrai o valor à direita do valor da variavel à esquerda e retorna o novo valor da variavel
     *  *= -> Multiplica o valor da variavel á esquerda pelo valor a direita e retorna o novo valor da variavel
     *  /= -> Dividi o valor da variavel à esquerda pelo valor à direita e retorna o novo valor da variavel
     */


    //Soma
    var valor = 15;
    // valor = valor + 15;
    console.log("soma " + valor + " + 15 = " + (valor + 15));

    //Subtração
    var valorSub = 15;
    //valorSub = valorSub - 5;
    console.log ("Subtração " + valorSub + " - 5 = " + (valorSub - 5));

    //Multiplicação
    var valorMult = 6;
    console.log("Multiplicação " + valorMult + " * 8 = " + (valorMult * 8));

    //Divisão
var valorDiv = 150;
console.log("Divisão " + valorDiv + " / 25 = " + (valorDiv / 25));

//Resto
var valorResto = 10;
console.log("Restante " + valorResto + " % 3 = " + (valorResto%3));


//**Incremento e Decremento  */

//Incremento
var valorInc = 10;
//pre incremento = ++valorInc | pos incremento = valorInc++;
console.log("Incremento ++" + valorInc + "++ =" + (++valorInc));


//Decremento
var valorDec = 10;
console.log("Decremento --" + valorDec + " = " + (--valorDec));

/**
 * Operadores de Atribuição
 */
 var vlrAtribSoma = 10;
 vlrAtribSoma =+ 10;
 console.log("Atribuição Soma 10 =+ 10 = " +  vlrAtribSoma);

 //String
 var strAtribSoma = "2";
 strAtribSoma += " + 2";
 strAtribSoma += " = 4";
 console.log("Atribuição Soma 10 += 10 = " + strAtribSoma); 

 //Atribuição Numérica Soma
 var vlrAtribSoma = 10;
 vlrAtribSoma +=10;
 console.log("Atribuição Somas 10 += 10 " + vlrAtribSoma)

 //Atribuição Numérica Subtração

 var vlrAtribSub = 10;
 vlrAtribSub -= 6;
 console.log ("Atribuição Subtração 10 -= 6 = " + vlrAtribSub);

 //Atribuição Numérica Multiplicação
 var vlrAtribMult = 5;
 vlrAtribMult *= 5;
 console.log("Atribuição Multiplicação 5 *= 5 = " + vlrAtribMult);

 //Aribuição Numérica Divisão
 var vlrAtribDiv = 15;
 vlrAtribDiv /= 5;
 console.log("Atribuição Divisão 15 /= 5 =" + vlrAtribDiv);

 
 var n = "1";
 var n2 = parseInt(n) + 2;
 console.log("Convertendo String em inteiro: " + n2);

 var f = "1.75";
 var f2 = parseFloat (f) + 0.25;
 console.log("Convertendo String em inteiro: " + f2);


//como pegar informaçoes do usuario usando prompt
 var nome = prompt("Digite seu nome", "");
console.log("Seu nome é: " + nome)
}