/**
 * 1 - Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.
 * 2 - Faça um programa em JavaScript em que o usuário clicará com o mouse sobre um botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.
 * 3 - Faça um programa JavaScript que faça a leitura de 3 palavras informados pelo usuário e em seguida que preencha a frase "O ___ roeu a ____ do rei de ____."
 * 4 - Faça um programa JavaScript em que o usuário informará 3 números e o programa calculará a média aritmética desses números.
 * 5 - Faça um programa JavaScript em que o usuário informará sua altura e peso e o programa calculará o seu IMC.
 * 6 - Faça um programa JavaScript que troque toda letra "b" da frase "O bode bravo berra e baba na barba." e mostre apenas as 14 ultimos caracteres.
 */

    function exercicio1(){
       //1
        alert("perigo perigoso");

    }

    function exe2(){

        //2
        alert("teste");
        var v1 ="soul eater";
        alert(v1);
        

    }

    function exe3(){

        //3
        var resposta1 = prompt ("Complete a frase: O ___ roeu a ____ do rei de ____. ", "");
        var resposta2 = prompt ( " a ____ do rei de ____. ");
        var resposta3 = prompt ( "rei de ____.");
        alert(" O " + resposta1 + " roeu a " + resposta2 + " do rei de " + resposta3 + ".");

    }

    function exe4(){

        //4
        var vlr1= prompt ("Primeiro numero: ");
        vlr1=eval(vlr1);
        var vlr2= prompt ("Segundo numero: ", "");
        vlr2=eval(vlr2);
        var vlr3= prompt("Terceiro numero: ", "");
        vlr3=eval(vlr3);
        alert("Resultado da media: " + vlr1 + " + " + vlr2 + " + " + vlr3 + " = " + ((vlr1 + vlr2 + vlr3)/3));

    }

    function exe5(){

        //5
        var peso = prompt ("Digite seu peso: ","");
        peso=eval(peso);
        var altura = prompt ("Digite sua altura: ","");
        altura=eval(altura);
        alert("O resultado do seu imc corresponde à: " + (peso/(altura*altura)));

    }

    function exe6(){

        //6
        var texto = ("O bode bravo berra e baba na barba.");
        alert("substituição ficou: " + texto.replaceAll("b", "c") );


        alert("'Os ultimos 14 caracteres são: '" + texto + "'são: '" + texto.substring(16));

    }