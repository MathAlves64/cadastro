function teste() {
    console.log("você chamou a função teste");
    var v1 = "text string";
    var v2 = 25;
    var v3 = 0.75;
    alert(v1 + " - " + v2 + " - " + v3);

    var texto = "Aprendendo JS";
    texto = "A";
    texto = "Aprendendo_JS";
    texto = "true";
    var numeroString = "123456789";
    texto = "0.75";
    var numeroInteiro = 123456789;

    var somaStr = numeroString + 1;
    var somaInt = numeroInteiro + 1;
    console.log("Resultado soma string: " + somaStr);
    console.log("Resultado soma inteiro: " + somaInt);

    texto = 10; // uma variavel string pode receber outro tipo de dado,porem não é uma boa prática
    console.log("Variável texto" + (texto + 10));

    texto = "Aprendendo JS";
    console.log("Tamanho da texto: " + texto.length);

    //Array
    var splitVar = texto.split(' ');
    console.log("Array com valores separados: " + splitVar + " - tamanho: " + splitVar.length + " - posição 0:" + splitVar[0]);

    //Replace
    console.log("Substituindo um trecho da variavel: " + texto + "' - para -'" + texto.replace('JS', 'JavaScript') + "'");

    //Substr
    console.log("As duas primeiras letras são: '" + texto + "'são: '" + texto.substring(0, 2) + "'");
    console.log("Todas as letras da frase: '" + texto + "' menos a ultima: '" + texto.substring(0, texto.length - 1) + "'");

    var n = '1';
    var n2 = parseInt(n) + 2;
    console.log("convertendo string em inteiro: " + n2);

    var f = '1.75';
    var f2 = parseFloat(f) + 0.25;
    console.log("convetendo string em inteiro:" + f2);

    //como pegar informação do usuario usando prompt
    var nome = prompt("Digite seu nome", "");
    console.log("Seu nome é: " + nome);


    //test

    //criando variaveis
    // var 123var = 23;          pratica ruim
    // var _var = 23;            pratica ruim
    // var minhaidade = 23;      pratica ruim
    // var MINHAIDADE = 23;      pratica ruim
    // var minhaIdade = 23;      pratica boa
    // var idade = 23;           pratica boa
    // var idade1 = 23;          pratica boa
    // var valorTotal = 1+2;     pratica boa

    //manipulação de string

}



function salvar() {
    // // usando querySelector
    // // quando se trata de id se usa referenciar o id de algum html tem que usar o nome do id'#'
    // var codigo = document.querySelector("#codigo").value;
    // var descricao = document.querySelector("#descricao").value;
    // var uf = document.querySelector("#uf").value;
    // alert("codigo: " + codigo + "\nuf: " + uf + "\ndescrição: " + descricao);

    // //usando getElementById
    // var codigo2 = document.getElementById("codigo").value;
    // var descricao2 = document.getElementById("descricao").value;
    // var uf2= document.getElementById("uf").value;
    // alert("codigo: " + codigo2 + "\nuf: " + uf2 + "\ndescrição: " + descricao2);

    // //usando getElementByName
    // //usa estilo de fila, algo assim :/
    // var codigo3 = document.getElementsByName("codigo")[0].value;
    // var descricao3 = document.getElementsByName("descricao")[0].value;
    // var uf3 = document.getElementsByName("uf")[0].value;
    // alert("Codigo: " + codigo3 + "\nUF: " + uf3 + "\nDescrição: " + descricao3);

    //usando getElementByClassName
    //vai retornar os elementos

    //var elementos = document.getElementsByClassName("form-control");
    //var texto = "";
    //array.forEach(element=> {
    //    texto += element.name ": " + element.value;
    //})
    var codigo = eval(document.getElementById("codigo").value);
    if (codigo === undefined) {
        if (document.getElementById("uf").value.trim().length === 0
            || document.getElementById("descricao").value.trim().length === 0) {
            alert("PREENCHA OS CAMPOS IRMÃO");
        } else {


            ++id;
            var estado = { //CRIANDO OBJETO
                codigo: id,//PEGANDO VALOR DO INPUT E SETA NO ATRIBUTO
                uf: document.getElementById("uf").value, //PEGANDO VALOR DO INPUT E SETA NO ATRIBUTO
                descricao: document.getElementById("descricao").value //PEGANDO VALOR DO INPUT E SETA NO ATRIBUTO
            }
            data.push(estado);//INSERINDO O OBJETO "ESTADO" NO ARRAY "DATA"

        }
    }
    else {
        for (i in data) {
            var alterar = data[i];
            if (alterar.codigo === codigo) {
                alterar.uf = document.getElementById("uf").value;//vai receber o valor editado e salva-lo
                alterar.descricao = document.getElementById("descricao").value;

            }






        }

    }





    carregarTabela();//CHAMADA DA FUNÇÃO "LIMPAR"
    limpar();//CHAMADA DA FUNÇÃO "CarregarTabela"

}





function mostrar(codigo) {
    // var codigo = 26;
    // var uf = "SP"
    // var descricao = "São Paulo";
    for (i in data) { //LAÇO DE REPETIÇÃO PARA PERCORRER O ARRAY "data"
        var estado = data[i];//VARIAVEL "ob" RECEBE O VALOR DO ARRAY   
        if (estado.codigo === codigo) {//SE ATRIBUTO "ob.codigo" = PARAMETRO DA FUNÇÃO "codigo"
            document.getElementById("codigo").value = estado.codigo;//INSERINDO NO INPUT O VALOR DO ATRIBUTO DO OBJETO "ob.codigo"
            document.getElementById("uf").value = estado.uf;//INSERINDO NO INPUT O VALOR DO ATRIBUTO DO OBJETO "ob.uf"
            document.getElementById("descricao").value = estado.descricao;//INSERINDO NO INPUT O VALOR DO ATRIBUTO DO OBJETO "ob.descricao"
        }
    }
    // usar somente quando n é input tipo um div etc innerHTML

}

function limpar() {
    //INSERINDO VAZIO OU '' NO INPUT PARA LIMPAR O CAMPO
    document.getElementById("codigo").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("uf").focus()
}

var data = new Array(); //CRIANDO O array. OUTRA FORMA É " = new Array()"

var data = []; //Criando oarray. outra forma é " = new Array()
var id = 0;//Simulando primery key 

function carregarTabela() {
    var retorno = '<ul class="list-group">'; //VARIAVEL QUE CONTÉM A LISTA HTML
    for (i in data) {//LACO DE REPETIÇÃO PARA PERCORRER O ARRAY
        var estado = data[i]; //VARIAVEL RECEBE OBJ DO ARRAY
        retorno += '<li class="list-group-item" style="cursor:pointer" '
            + 'onClick="mostrar(' + estado.codigo + ')" >'
            + '<p class="list-group-item-text"><b> Código: </b> ' + estado.codigo + '</p>'
            + '<p class= "list-group-item-text"><b>UF: </b>' + estado.uf + '</p>'
            + '<p class= "list-group-item-text"><b>Descrição: </b>' + estado.descricao + '</p>'
            + '</li>';
    }
    document.getElementById("grid").innerHTML = retorno;

}

function excluirTabela() {
    //alert('Excluir os dados')
    var codigo = eval(document.getElementById("codigo").value);
    // alert("codigo: " + codigo + "uf: " + uf + "descrição: " + descricao);
    for (i in data) {
        var estado = data[i];
        if (estado.codigo === codigo) {
            data.splice(i, 1);// data.splice(i, 1) 1 = quantidade de exclusoes / i = parametro
        }


    }
    limpar()
    carregarTabela()
}



function alterarTabela() {
    var codigo = eval(document.getElementById("codigo").value);
    descricao = eval(document.getElementById("descricao").value);
    uf = eval(document.getElementById("uf").value);
    // alert("codigo: " + codigo + "uf: " + uf + "descrição: " + descricao);
    for (i in data) {
        var alterar = data[i];
        if (alterar.codigo === codigo) {
            alterar.uf = eval(document.getElementById("uf")).value;//vai receber o valor editado e salva-lo
            alterar.descricao = eval(document.getElementById("descricao")).value;

        }
        if (codigo === '') {
        }
    }




    carregarTabela();
    limpar();
}

    // usar somente quando n é input tipo um div etc innerHTML






