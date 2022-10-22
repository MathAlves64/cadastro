/**
 * 1 - Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação a informação "Eba! Avaliação!".
 * 2 - Faça um programa JavaScript que faça a leitura de 3 números informados pelo usuário e em seguida imprima a soma entre eles.
 * 3 - Faça um programa JavaScript que faça a leitura de 5 números informados pelo usuário e em seguida imprima se o número é impar ou par.
 * 4 - Faça um programa JavaScript em que o usuário informará um numero inteiro e o programa imprimirá a tabuada desse número.
 * 5 - Faça um programa JavaScript e crie uma variável que receba a frase “Na Natureza, nada se cria, nada se perde, tudo se transforma”, a partir dessa variável troque toda palavra "nada" por "tudo" e a palavra "tudo" por "nada", em seguida concatene as 12 primeiras letras da alterada com as 19 ultimas.
 */


    function exe1(){
        alert("Eba! Avaliação!");
    }

    function exe2(){
        var n1 = prompt ("digite primeiro numero: ");
        n1= eval (n1);
        var n2 = prompt ("digite segundo numero: ");
        n2=eval(n2);
        var n3 = prompt ("digite terceiro numero: ");
        n3=eval(n3);

        alert ("Resultado da soma entre os numeros: " + n1 + " + " + n2 + " + " + n3 + " é igual a " + (n1+n2+n3));
    }

    function exe3(){
        var n4 = prompt("digite primeiro numero: ");
        var n5 = prompt("digite segundo numero: ");
        var n6 = prompt("digite terceiro numero: ");
        var n7 = prompt("digite quarto numero: ");
        var n8 = prompt("digite quinto numero: ");
        alert("veja no console");
        console.log("Caso o numero a frente aos dois pontos seja '0' o numero é considerado par, caso tenha outros numeros será impar");
        console.log("1 - " + n4 + " : " + ( n4 % 2 ) );
        console.log("2 - " + n5 + " : " + ( n5 % 2 ) );
        console.log("3 - " + n6 + " : " + ( n6 % 2 ) );
        console.log("4 - " + n7 + " : " + ( n7 % 2 ) );
        console.log("5 - " + n8  + " : " + ( n8 % 2 ) );
    }

    function exe4 (){
        var tn = prompt ("Digite o numero a ser feito uma tabuada: ");
        tn = eval (tn);

        alert("multiplicação do numero: " + tn);
        alert( "1 * " + tn + " = " + (tn * 1));
        alert( "2 * " + tn + " = "  +  (tn * 2));
        alert( "3 * " + tn + " = "  +  (tn * 3));
        alert( "4 * " + tn  + " = " +  (tn * 4));
        alert( "5 * " + tn + " = "  +  (tn * 5));
        alert( "6 * " + tn + " = "  +  (tn * 6));
        alert( "7 * " + tn + " = "  +  (tn * 7));
        alert( "8 * " + tn + " = "  +  (tn * 8));
        alert( "9 * " + tn + " = "  +  (tn * 9));
        alert( "10 * " + tn + " = "  +  (tn * 10));
        alert("caso não se lembre de algum resulutado abra o console!!")

        console.log("multiplicação do numero: " + tn);
        console.log( "1 * " + tn + " = "  + (tn * 1));
        console.log( "2 * " + tn + " = "  +  (tn * 2));
        console.log( "3 * " + tn + " = "  +  (tn * 3));
        console.log( "4 * " + tn + " = "  +  (tn * 4));
        console.log( "5 * " + tn + " = "  +  (tn * 5));
        console.log( "6 * " + tn + " = "  +  (tn * 6));
        console.log( "7 * " + tn + " = "  +  (tn * 7));
        console.log( "8 * " + tn + " = "  +  (tn * 8));
        console.log( "9 * " + tn + " = "  +  (tn * 9));
        console.log( "10 * " + tn + " = "  +  (tn * 10));
    }

    function exe5(){
        var txt= ("Na Natureza, nada se cria, nada se perde, tudo se transforma");
        alert("Substituição das palavras da primeira parte: " + txt.replaceAll ("nada", "tudo") );
        alert("Substituição da segunda parte: " + txt.replaceAll("tudo", "nada"));
        
        var txt1 ="Na Natureza, tudo ";
        txt1 = txt1 + "se cria, nada se perde, nada se transforma";
        alert ("concatenação: " +txt1);
    }