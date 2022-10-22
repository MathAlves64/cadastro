var data = new Array();
var id = 0;
function salvar() {

    var codigo = eval(document.getElementById("codigo").value);
    if (codigo === undefined) {
            ++id;
            var cliente = {
                codigo: id,
                nome: document.getElementById("nome").value,
                cpf: document.getElementById("cpf").value,
                rg: document.getElementById("rg").value,
                dtn: document.getElementById("dtn").value,
                rua: document.getElementById("rua").value,
                numero: document.getElementById("numero").value,
                bairro: document.getElementById("bairro").value,
                cep: document.getElementById("cep").value,
                cidade: document.getElementById("cidade").value,
                estado: document.getElementById("uf").value,
               
            }
            data.push(cliente);

    } else {

        for (i in data) {
            var alterar = data[i];
            if (alterar.codigo === codigo) {
                 alterar.nome = document.getElementById("nome").value;
                 alterar.cpf = document.getElementById("cpf").value;
                 alterar.rg = document.getElementById("rg").value;
                 alterar.dtn = document.getElementById("dtn").value;
                 alterar.dtn = document.getElementById("rua").value;
                 alterar.dtn = document.getElementById("cep").value;
                 alterar.dtn = document.getElementById("numero").value;
                 alterar.dtn = document.getElementById("bairro").value;
                 alterar.dtn = document.getElementById("cidade").value;
                 alterar.dtn = document.getElementById("uf").value;
            }

        }

    }
    tabela();
    limpar();
}



function excluir() {
    var codigo= eval(document.getElementById('codigo').value);
    for (i in data){
        var excluir = data[i];
        if(excluir.codigo === codigo){
            data.splice(i, 1);
        }
    }
    limpar();
    tabela();
}
function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("rg").value = "";
    document.getElementById("dtn").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("nome").focus();
}

function tabela() {
    var retorno = '<ul class="list-group">';
    for (i in data) { 
        var cliente = data[i]; 
        retorno += '<li class="list-group-item" style="cursor:pointer" '
            + 'onClick="mostrar(' + cliente.codigo + ')" >'
            + '<p class="list-group-item-text"><b> Codigo: </b>' + cliente.codigo + '</p>'
            + '<p class="list-group-item-text"><b> Nome: </b>' + cliente.nome + '</p>'
            + '<p class="list-group-item-text"><b> CPF: </b>' + cliente.cpf + '</p>'
            + '<p class="list-group-item-text"><b>RG: </b>' + cliente.rg + '</p>'
            + '<p class="list-group-item-text"><b>Data de Nascimento: </b>' + cliente.dtn + '</p>'
            + '<p class="list-group-item-text"><b> Rua: </b>' + cliente.rua + '</p>'
            + '<p class="list-group-item-text"><b> Numero: </b>' + cliente.numero + '</p>'
            + '<p class="list-group-item-text"><b> Bairro: </b>' + cliente.bairro + '</p>'
            + '<p class="list-group-item-text"><b> Cidade: </b>' + cliente.cidade + '</p>'
            + '<p class="list-group-item-text"><b> Estado: </b>' + cliente.estado + '</p>'
            + '<p class="list-group-item-text"><b> CEP: </b>' + cliente.cep + '</p>'
            + '</li>';
    }
    document.getElementById("grid").innerHTML = retorno;
}


function mostrar(codigo) {
    for (i in data) {
        var cliente = data[i];
        if (cliente.codigo === codigo){
            document.getElementById("codigo").value = cliente.codigo;
            document.getElementById("nome").value = cliente.nome;
            document.getElementById("cpf").value = cliente.cpf;
            document.getElementById("rg").value = cliente.rg;
            document.getElementById("dtn").value = cliente.dtn;
            document.getElementById("rua").value = cliente.rua;
            document.getElementById("numero").value = cliente.numero;
            document.getElementById("bairro").value = cliente.bairro;
            document.getElementById("cidade").value = cliente.cidade;
            document.getElementById("uf").value = cliente.estado;
            document.getElementById("cep").value = cliente.cep;
            
        }
    }
}