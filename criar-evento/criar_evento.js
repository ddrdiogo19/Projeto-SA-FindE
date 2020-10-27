var esporte;
var local;
var data;
var horario;
var dados = [];

function pegarEsporte() {
  let selectEsporte = document.getElementById("esportesSelect").value;

  esporte = selectEsporte;
  console.log(esporte)
}

function pegarLocal() {
  let selectLocal = document.getElementById("local").value;
  
  local = selectLocal
  console.log(local)
}

function pegarData() {
  let diaEvento = document.getElementById("dia").valueAsDate;
  
  // converter data
  data = diaEvento
  console.log(data)
}

function pegarHorario() {
  let horaEvento = document.getElementById("hora").valueAsNumber;

  // converter de utc
  horario = horaEvento
  console.log(horario)
}

function pegarDadosNoLocalStorage() {
  dados = JSON.parse(localStorage.getItem("Evento")) 
}

function salvarDadosNoLocalStorage(){
  pegarDadosNoLocalStorage();
  localStorage.setItem("Evento", JSON.stringify(dados))
}

function cadastrar(){
  pegarEsporte();
  pegarLocal();
  pegarData();
  pegarHorario();
  salvarDadosNoLocalStorage();

}

let dados = []


function Evento (selectEsporte, selectLocal, diaEvento, horaEvento){
     
    this.selectEsporte = selectEsporte 
    this.selectLocal = selectLocal
    this.diaEvento = diaEvento
    this.horaEvento = horaEvento  
}

//     dados = JSON.parse(localStorage.getItem("Evento")) 

//        if (dados == null){

//         dados = []
//         add = new Evento (selectEsporte, selectLocal, diaEvento, horaEvento)
//         dados.push(add)
//         localStorage.setItem("Evento", JSON.stringify(dados))
//         alert ("Seu evento foi cadastrado com sucesso")

//     } else{

//         add = new Evento (selectEsporte, selectLocal, diaEvento, horaEvento)
//         dados.push(add)
//         localStorage.setItem("Evento", JSON.stringify(dados))
//         alert ("Seu evento foi cadastrado com sucesso")

//     }} 
//   }



        dados = []
        add = new Evento (selectEsporte, selectLocal, diaEvento, horaEvento)
        dados.push(add)
        localStorage.setItem("Evento", JSON.stringify(dados))
        alert ("Seu evento foi cadastrado com sucesso")

    } else{

        add = new Evento (selectEsporte, selectLocal, diaEvento, horaEvento)
        dados.push(add)
        localStorage.setItem("Evento", JSON.stringify(dados))
        alert ("Seu evento foi cadastrado com sucesso")

    }} 

// function pular {


// }

// // function editar(){
    
//     eventosCadastrados[indicepesquisa].selectEsporte = selectEsporte.value
//     eventosCadastrados[indicepesquisa].selectLocal = selectLocal.value
//     eventosCadastrados[indicepesquisa].diaEvento = diaEvento.value
//     eventosCadastrados[indicepesquisa].horaEvento = horaEvento.value
   

//     swal("Dados atualizados com sucesso!")
//     localStorage.setItem("Evento", JSON.stringify(dados))

// }


function Excluir(){

   let exclusao = selectEsporte.value
   dados = JSON.parse(localStorage.getItem("dados"))
      
 for(i=0; i < dados.length; i++){

      if(dados[i].esportesSelect == exclusao) {

          dados.splice(i, 1)

      }

 }

//   swal("Evento excluído com sucesso!")
//   localStorage.setItem("Evento", JSON.stringify(armazenados))

// }

// let dados = []



// date 

// var today = new Date(); //Gravo a data atual na variavel
// today.setDate(today.getDate() + 7); //Adiciono 7 dias 
// today = today.toISOString().split('T')[0]; //Formato a data

// var hoje = new Date();
//   if (agendamento <= hoje) {
//     alert('Por favor, insira uma data válida!');

// date

// var input = document.getElementById('ultimoDiaTrab');
// input.addEventListener('change', function() {
//   var agora = new Date();
//   var escolhida = new Date(this.value);
//   if (escolhida < agora) this.value = [agora.getFullYear(), agora.getMonth() + 1, agora.getDate()].map(v => v < 10 ? '0' + v : v).join('-');
// });

// Neste caso this.value = [agora.getFullYear(), agora.getMonth() + 1, agora.getDate()].map(v => v < 10 ? '0' + v : v).join('-'); repoõe a data escolhida com a data atual, se quiseres somente apagar podes fazer this.value = '';



