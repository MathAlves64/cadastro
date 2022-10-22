function operadores() {
    /**
     * operadores aritméticos
     *  = -> sinal de atribuição de valor a uma variavel
     *  + -> sinal de soma p/ variáveis numéricas ou concatenação p/ variaveis string
     *  - -> sinal de subtração p/ variáveis numéricas
     *  * -> sinal de multiplicação p/ variáveis numéricas
     *  / -> sinal de divisão p/ variáveis numéricas
     *  % -> sinal de restante de uma divisão
     *  
     * operadores de incremento e descremento
     *  ++ -> acompanhado de uma variavel numérica inteira é p/ incrementar 1 a variável
     *  -- -> acompanhado de uma variável numérica inteira é p/ decrementar 1 a variável
     * 
     *  operadores de atribuição
     *  += -> Soma o valor à direita ao valor da variável à esquerda e retorna o novo valor da variável e concatenação p/ variável string
     *  -= -> Subtrai o valor à direita do valor da variavel à esquerda e retorna o novo valor da variavel
     *  *= -> Multiplica o valor da variavel á esquerda pelo valor a direita e retorna o novo valor da variavel
     *  /= -> Dividi o valor da variavel à esquerda pelo valor à direita e retorna o novo valor da variavel
     */

    //concatenação
    var txt = "palavra1";
    txt = txt + "palavra2";

    console.log("Concatenação: " + txt);

    //soma
    var valor = 15;
    //valor = valor + 15;

    console.log("Soma: " + valor + " + 15 =" + (valor + 15));

    //subtraçao
    var valorsub = 15;
    //valorsub = valorsub -5;

    console.log("subtração: " + valorsub + " - 5 =" + (valorsub -5));

    //multiplicação
    var vlmult = 6;
    console.log("Multiplicação: " + vlmult + " * 8 = " + (vlmult * 8));

    //divisão
    var vldiv = 150;
    console.log("Divisão: " + vldiv + " / 25 = " + (vldiv / 25));

    //Resto
    var vlres = 10;
    console.log("Resto/restante: " + vlres + " % 3 = " + (vlres % 3));

    /*incremento e decremento*/
    //incremnto
    var vlincr = 10;
    //pre incremento = ++vlinc, posincremento + vlinc++;
    console.log("Incremento ++" + vlincr + " ++ = " + (++vlincr)); 
    console.log(vlincr); 

    var vlDecr = 10;
    console.log("Decremento --" + vlDecr + " = " + (--vlDecr));

    //operadores de atribuição
//atribuição numérica soma
    var vlAtrSom = 10;
    vlAtrSom += 10;
    console.log("Atribuição soma 10 += 10 = " +vlAtrSom);

//string
var strAtrib = "2";
strAtrib += " + 2";
strAtrib += " = 4";
console.log("Atribuição string = " + strAtrib);

//numerica subtração
 var vlAtrSub = 10;
vlAtrSub -= 6;
console.log("Atribuição Subtração 10 -= 6 =" + vlAtrSub);

//atribuição numerica multiplicação
var vlAtrMul = 5;
vlAtrMul *= 5;
console.log("Atribuição Multiplicação 5 *= 5 = " + vlAtrMul);

//atribuição numérica divisão
var vlAtrDiv = 15;
vlAtrDiv /= 5;
console.log("Atribuição Divisão 15 /= 5 =" + vlAtrDiv)

//como pegar informação do usuario usando prompt
var nome = prompt ("Digite seu nome", "");
console.log("Seu nome é: " + nome);
}