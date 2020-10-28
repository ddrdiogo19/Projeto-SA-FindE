let esporte;
let local;
let data;
let horario;
let dados = []  //  [{"esporte": esporte, "local": local, ...}];

function pegarEsporte() {
  const selectEsporte = document.getElementById("esportesSelect").value;

  esporte = selectEsporte;
  console.log(esporte)
}

function pegarLocal() {
  const selectLocal = document.getElementById("local").value;
  
  local = selectLocal
  console.log(local)
}

function pegarData() {
  const diaEvento = document.getElementById("dia").value;
  
  // diaEvento = new Date(dateString)
  console.log(diaEvento);


}

function pegarHorario() {
  const hora = document.getElementById("inputHora").value;
  const minuto = document.getElementById("inputMinuto").value;

  horario = `${hora}:${minuto}`;
  console.log(horario)
}

function criarObjeto(){

}

function pegarDadosNoLocalStorage() {
  dados = JSON.parse(localStorage.getItem("Evento")) 
}

function salvarDadosNoLocalStorage(){
  pegarDadosNoLocalStorage();
  //  dados.push(objeto)
  localStorage.setItem("Evento", JSON.stringify(dados));
}

function cadastrar(){
  pegarEsporte();
  pegarLocal();
  pegarData();
  pegarHorario();
  criarObjeto();
  salvarDadosNoLocalStorage();
}

// let dados = []


// function Evento (selectEsporte, selectLocal, diaEvento, horaEvento){
     
//     this.selectEsporte = selectEsporte 
//     this.selectLocal = selectLocal
//     this.diaEvento = diaEvento
//     this.horaEvento = horaEvento  
// }

dados = JSON.parse(localStorage.getItem("Evento")) 

       if (dados == null){

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
  }



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

   }} */ 

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


// function Excluir(){

//    let exclusao = selectEsporte.value
//    dados = JSON.parse(localStorage.getItem("dados"))
    
//  for(i=0; i < dados.length; i++){

//       if(dados[i].esportesSelect == exclusao) {

//           dados.splice(i, 1)

//       }

//  }

//   swal("Evento excluído com sucesso!")
//   localStorage.setItem("Evento", JSON.stringify(armazenados))

// }


