var nomecompleto = document.getElementById("nomecompleto")
var usuario = document.getElementById("usuario")
var senha = document.getElementById("senha")
var email = document.getElementById("email")
var sexo = document.getElementById("sexo")

var dados = []

function Pessoa (nomecompleto, usuario, senha, email, sexo){
     
    this.nomecompleto = nomecompleto 
    this.usuario = usuario
    this.senha = senha
    this.email = email
    this.sexo = sexo
  
}

function Cadastrar(){

    dados = JSON.parse(localStorage.getItem("Pessoa")) 

       if (dados == null){

        dados = []
        add = new Pessoa (nomecompleto.value, usuario.value, senha.value, email.value, sexo.value)
        dados.push(add)
        localStorage.setItem("Pessoa", JSON.stringify(dados))
        alert ("Seu cadastro foi efetuado com sucesso")

    } else{

        add = new Pessoa (nomecompleto.value, usuario.value, senha.value, email.value, sexo.value)
        dados.push(add)
        localStorage.setItem("Pessoa", JSON.stringify(dados))
        alert ("Seu cadastro foi efetuado com sucesso")

    } 
        
    /*if (nomecompleto.value == "" ) || (usuario.value == "") || (senha.value == "") || (email.value == "")
        || (sexo.value == "")) {
    		alert("Preencha todos os campos!");
    		return; */ 

}